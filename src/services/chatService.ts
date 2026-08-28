export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  actionType?: 'book' | 'emergency' | 'pricing' | 'whatsapp';
  actionData?: Record<string, string>;
}

export const getInitialBotMessage = (): ChatMessage => ({
  id: 'bot-welcome',
  sender: 'bot',
  text: "Assalam-o-Alaikum! Welcome to Asim Dental Care Rawalpindi. I'm AsimCare AI, your personal dental assistant. How can I help you today?",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  quickReplies: [
    '📅 Book an Appointment',
    '💰 Treatment Pricing (PKR)',
    '🚨 Dental Emergency',
    '👨‍⚕️ Meet Dr. Asim & Team',
    '📍 Clinic Location & Map'
  ]
});

export const processUserMessage = (userQuery: string): ChatMessage => {
  const query = userQuery.toLowerCase();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const id = `bot-${Date.now()}`;

  // Emergency queries
  if (
    query.includes('emergency') ||
    query.includes('unbearable') ||
    query.includes('severe pain') ||
    query.includes('knocked out') ||
    query.includes('bleeding heavily') ||
    query.includes('swelling') ||
    query.includes('broken tooth')
  ) {
    return {
      id,
      sender: 'bot',
      text: "🚨 **Priority Dental Emergency Alert**\n\nIf you are experiencing severe pain, acute facial swelling, or a knocked-out tooth, we offer **same-day priority emergency triage**.\n\n📞 **Emergency Hotline:** [+92 300 555 2424](tel:+923005552424)\n📍 **Location:** Plaza 42, Main Peshawar Road, Saddar, Rawalpindi\n\nWould you like to fast-track an emergency booking now?",
      timestamp: time,
      quickReplies: ['⚡ Fast-Track Emergency Booking', '💬 Chat on WhatsApp with Doctor', '🚗 Get Driving Directions'],
      actionType: 'emergency'
    };
  }

  // Pricing / Cost queries
  if (
    query.includes('price') ||
    query.includes('cost') ||
    query.includes('fees') ||
    query.includes('rate') ||
    query.includes('how much') ||
    query.includes('pkr') ||
    query.includes('charges')
  ) {
    return {
      id,
      sender: 'bot',
      text: "💰 **Transparent Pricing at Asim Dental Care (PKR):**\n\n• **Ultrasonic Scaling & Polish:** PKR 4,000 – 8,000\n• **Root Canal (RCT):** PKR 8,000 – 18,000\n• **Zirconia Crown:** PKR 18,000 – 35,000\n• **Dental Implants (Titanium):** PKR 65,000 – 120,000\n• **Laser Teeth Whitening:** PKR 12,000 – 35,000\n• **Braces & Aligners:** PKR 80,000 – 250,000 (Installments: PKR 5,000/mo)\n• **Veneers (E-Max / Composite):** PKR 20,000 – 45,000/tooth\n\n*Zero hidden charges! 0% markup installment plans available.*",
      timestamp: time,
      quickReplies: ['📅 Book a Consultation', '🧮 Open Cost Estimator', '💬 Inquire on WhatsApp'],
      actionType: 'pricing'
    };
  }

  // Root Canal query
  if (query.includes('root canal') || query.includes('rct') || query.includes('nerve')) {
    return {
      id,
      sender: 'bot',
      text: "🦷 **Root Canal Treatment (RCT):**\n\nAt Asim Dental Care, we use German rotary endodontics and computerized painless anesthesia (The Wand STA). Over 85% of cases are completed in a **single 50-minute sitting** with zero pain.\n\n• **Cost:** PKR 8,000 to PKR 18,000 per tooth\n• **Surgeon:** Dr. Muhammad Asim & Dr. Hamza Malik",
      timestamp: time,
      quickReplies: ['📅 Book RCT Appointment', '💰 Check Crown Pricing', '❓ Is Root Canal Painful?'],
      actionType: 'book'
    };
  }

  // Implants query
  if (query.includes('implant') || query.includes('missing tooth') || query.includes('denture')) {
    return {
      id,
      sender: 'bot',
      text: "🔩 **Dental Implants:**\n\nPermanent titanium roots anchored into the jawbone with 98.4% success rate. We offer FDA-approved Korean, German, and Swiss Straumann implant fixtures.\n\n• **Cost:** PKR 65,000 – PKR 120,000 per implant (Installments available)\n• **Duration:** 30–45 mins guided placement",
      timestamp: time,
      quickReplies: ['📅 Book Implant Consult', '📊 View Before & After', '💬 WhatsApp Dr. Asim'],
      actionType: 'book'
    };
  }

  // Location / Timings query
  if (query.includes('location') || query.includes('address') || query.includes('timing') || query.includes('hours') || query.includes('where') || query.includes('saddar')) {
    return {
      id,
      sender: 'bot',
      text: "📍 **Clinic Location & Timings:**\n\n• **Address:** Plaza 42, Main Peshawar Road, Saddar, Rawalpindi (Opposite Shell Pump, 2 mins from Saddar Metro Station).\n• **Hours:** Monday – Saturday: 11:00 AM – 9:00 PM\n• **Friday Jummah Break:** 1:00 PM – 2:30 PM\n• **Sunday:** 2:00 PM – 7:00 PM (Emergency only)\n• **Phone:** 051-5552424 / 0300-5552424",
      timestamp: time,
      quickReplies: ['🗺️ Open in Google Maps', '📅 Book an Appointment', '💬 Chat on WhatsApp']
    };
  }

  // Doctors / Credentials query
  if (query.includes('doctor') || query.includes('dentist') || query.includes('qualification') || query.includes('pmdc') || query.includes('asim')) {
    return {
      id,
      sender: 'bot',
      text: "👨‍⚕️ **Our Medical Specialists:**\n\n• **Dr. Muhammad Asim (BDS, RDS, C-Implants Bern)** — PMDC # 14892-D, 16+ years experience, Chief Dental Surgeon.\n• **Dr. Ayesha Siddiqui (BDS, FCPS Orthodontics)** — PMDC # 18320-D, 11+ yrs, Specialist Orthodontist & Clear Aligners.\n• **Dr. Hamza Malik (BDS, MSc Endodontology UK)** — Microscopic Root Canal Specialist.\n• **Dr. Zoya Tariq (BDS, CAD)** — Aesthetic & Pediatric Dentistry.",
      timestamp: time,
      quickReplies: ['📅 Book with Dr. Asim', '📅 Book with Dr. Ayesha', '⭐️ Read Patient Reviews']
    };
  }

  // Default intelligent assistant response
  return {
    id,
    sender: 'bot',
    text: `Thank you for your message! At Asim Dental Care Rawalpindi, our team is committed to providing modern, pain-free, and affordable dental healthcare.\n\nWould you like to schedule an appointment with Dr. Asim, check our PKR treatment prices, or speak with our front desk?`,
    timestamp: time,
    quickReplies: [
      '📅 Book an Appointment',
      '💰 View All PKR Prices',
      '💬 Chat on WhatsApp',
      '📞 Call 0300-5552424'
    ]
  };
};
