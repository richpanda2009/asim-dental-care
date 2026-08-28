import { Treatment } from '../types';

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: 'root-canal',
    slug: 'root-canal-treatment',
    name: 'Root Canal Treatment (RCT)',
    shortDesc: 'Save your natural tooth with painless rotary endodontics and computerized apex locators.',
    longDesc: 'Root Canal Treatment is a highly effective procedure designed to eliminate infection from inside the tooth pulp and prevent future microbial invasion. At Asim Dental Care Rawalpindi, we utilize advanced German rotary endodontics and computerized apex locators to perform single-visit, virtually pain-free root canals that preserve your natural bite structure.',
    category: 'Restorative',
    iconName: 'Activity',
    priceRangePKR: {
      min: 8000,
      max: 18000,
      unit: 'per tooth (anterior to molar)'
    },
    duration: '45 – 60 minutes (Usually Single Visit)',
    painLevel: '1/10 (Pain-free with computerized local anesthesia)',
    anesthesiaType: 'Computerized STA Local Anesthesia',
    idealFor: [
      'Severe throbbing toothache, especially at night',
      'Prolonged sensitivity to hot or cold foods',
      'Swelling or tenderness in the adjacent gums',
      'Deep decay reaching the inner dental pulp'
    ],
    benefits: [
      'Stops unbearable tooth pain immediately',
      'Saves your natural tooth from extraction',
      'Restores normal chewing ability and biting force',
      'Protects surrounding bone and adjacent teeth from infection'
    ],
    procedureSteps: [
      {
        step: 1,
        title: '3D Digital Diagnostic & Gentle Numbing',
        description: 'High-definition digital RVG X-ray confirms canal anatomy. Painless computer-controlled numbing ensures complete comfort.'
      },
      {
        step: 2,
        title: 'Infection Removal & Precision Cleaning',
        description: 'Micro-instruments access the pulp chamber. Nickel-titanium rotary files thoroughly debride and disinfect infected canals.'
      },
      {
        step: 3,
        title: 'Biocompatible 3D Obturation',
        description: 'Canals are hermetically sealed with bio-ceramic gutta-percha to prevent any recurrent bacterial leakage.'
      },
      {
        step: 4,
        title: 'Core Buildup & Crown Placement',
        description: 'A composite resin core strengthens the tooth, followed by a custom Zirconia or E-max crown for lasting durability.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'First 2–4 Hours',
        expectation: 'Mild numbness fades. Avoid chewing on the treated side until numbness wears off completely.'
      },
      {
        period: 'Day 1 to 2',
        expectation: 'Slight tenderness when biting, easily managed with standard prescribed analgesics.'
      },
      {
        period: 'Day 3 Onward',
        expectation: 'Tooth feels completely normal, natural, and pain-free for everyday chewing.'
      }
    ],
    aftercareTips: [
      'Avoid hard, sticky foods until the permanent crown is cemented.',
      'Maintain regular twice-daily brushing and flossing.',
      'Take prescribed anti-inflammatory medication as directed by Dr. Asim.',
      'Schedule your follow-up crown fitting within 7–10 days.'
    ],
    faqs: [
      {
        question: 'Is a root canal painful at Asim Dental Care?',
        answer: 'No. With our modern German computerized anesthesia delivery system, you will feel no pain during the procedure. Most patients report feeling instant relief from pre-existing toothache.'
      },
      {
        question: 'How much does a Root Canal cost in Rawalpindi?',
        answer: 'At Asim Dental Care, anterior (front) teeth RCT starts from PKR 8,000, while complex multi-rooted molars range between PKR 14,000 – 18,000 depending on canal complexity. Zirconia or porcelain crown is charged separately with transparent pricing.'
      },
      {
        question: 'Can RCT be completed in a single sitting?',
        answer: 'Yes! In over 85% of cases without acute periapical abscess, our rotary endodontic equipment allows single-visit completion in approximately 50 minutes.'
      }
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      caption: 'Severe pulp decay resolved with single-visit RCT and custom monolithic Zirconia crown.'
    }
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    name: 'Dental Implants (Swiss & German Tech)',
    shortDesc: 'Permanent, life-like titanium tooth replacement that anchors directly into the jawbone.',
    longDesc: 'Dental Implants are the gold standard for replacing missing teeth. Functioning exactly like natural tooth roots, our medical-grade titanium and zirconia implants fuse securely with your jawbone, restoring 100% biting power and preventing facial bone loss.',
    category: 'Surgical',
    iconName: 'ShieldCheck',
    priceRangePKR: {
      min: 65000,
      max: 120000,
      unit: 'per implant fixture + abutment'
    },
    duration: '30 – 45 minutes per implant fixture placement',
    painLevel: '1.5/10 (Minor soreness post-surgery, completely painless during placement)',
    anesthesiaType: 'Deep Local Anesthesia with Optional Conscious Sedation',
    idealFor: [
      'One or more missing natural teeth',
      'Patients struggling with loose removable dentures',
      'Desire for permanent, non-removable tooth replacement',
      'Preserving facial jawbone structure and youthfulness'
    ],
    benefits: [
      'Permanent lifetime solution with 98.4% clinical success rate',
      'Restores 100% natural chewing strength without dietary restrictions',
      'No grinding or damage to adjacent healthy teeth (unlike bridges)',
      'Prevents jawbone shrinkage and sunken facial appearance'
    ],
    procedureSteps: [
      {
        step: 1,
        title: '3D CBCT Scan & Digital Surgical Guide',
        description: 'Sub-millimeter 3D bone mapping ensures precise depth and angulation for safe implant positioning.'
      },
      {
        step: 2,
        title: 'Guided Implant Placement',
        description: 'Titanium fixture is gently anchored into the jawbone under gentle local anesthesia in under 40 minutes.'
      },
      {
        step: 3,
        title: 'Osseointegration Period',
        description: 'Implant fuses naturally with bone tissue over 8–12 weeks, creating an indestructible bond.'
      },
      {
        step: 4,
        title: 'Custom Zirconia Crown Restoration',
        description: 'CAD/CAM milled screw-retained Zirconia crown is securely attached, matching your natural teeth shade.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'Days 1–3',
        expectation: 'Minor swelling or gum tenderness managed easily with routine painkillers and cold compress.'
      },
      {
        period: 'Week 1',
        expectation: 'Gums heal cleanly around the healing cap. Normal eating on the non-treated side.'
      },
      {
        period: 'Month 2–3',
        expectation: 'Complete osseointegration verified via digital X-ray; ready for final crown placement.'
      }
    ],
    aftercareTips: [
      'Rinse gently with warm saline solution starting 24 hours post-op.',
      'Stick to soft foods (khichdi, yogurt, soups) for the first 3 days.',
      'Avoid smoking or vigorous spitting during the first 48 hours.',
      'Brush gently around the surgical site with an ultra-soft toothbrush.'
    ],
    faqs: [
      {
        question: 'How long do dental implants last?',
        answer: 'Dental implants are designed to last a lifetime with proper oral hygiene and routine 6-month checkups.'
      },
      {
        question: 'What is the cost of dental implants in Rawalpindi / Islamabad?',
        answer: 'Standard Korean FDA-approved systems start at PKR 65,000, while premium German / Swiss systems (Straumann / Osstem) range from PKR 95,000 to PKR 120,000 per implant fixture. Installment plans are available.'
      },
      {
        question: 'Can older patients get dental implants?',
        answer: 'Yes! Age is not a barrier as long as the patient has adequate bone health and controlled systemic health (e.g. managed diabetes).'
      }
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
      after: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      caption: 'Full front tooth implant restoration with customized natural gum contouring.'
    }
  },
  {
    id: 'braces-orthodontics',
    slug: 'braces-orthodontics',
    name: 'Braces & Clear Aligners',
    shortDesc: 'Straighten crooked teeth, close gaps, and correct bite issues with metal, ceramic, or invisible aligners.',
    longDesc: 'Orthodontic treatment corrects malaligned teeth, crowding, overbites, and spacing. Led by Dr. Ayesha Siddiqui (FCPS Orthodontics), we offer traditional metal braces, discreet ceramic tooth-colored braces, and virtually invisible custom clear aligners for both teens and adults.',
    category: 'Orthodontics',
    iconName: 'Smile',
    priceRangePKR: {
      min: 80000,
      max: 250000,
      unit: 'full treatment course (installment options)'
    },
    duration: '6 – 18 months depending on case complexity',
    painLevel: '1/10 (Mild pressure for 2-3 days following monthly tightening/aligner change)',
    anesthesiaType: 'None required (Non-invasive bonding)',
    idealFor: [
      'Crooked, crowded, or rotated teeth',
      'Noticeable gaps or spacing between front teeth',
      'Overbite, underbite, or crossbite issues',
      'Adults and teens wanting a perfectly aligned smile'
    ],
    benefits: [
      'Dramatically enhances facial aesthetics and smile confidence',
      'Makes brushing and flossing significantly easier, preventing decay',
      'Eliminates abnormal tooth wear caused by uneven bite force',
      'Customized digital simulation lets you preview your final smile'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Digital Cephalometric & Orthodontic Analysis',
        description: 'Comprehensive 3D scan, facial photography, and cephalometric tracing to map ideal tooth movement.'
      },
      {
        step: 2,
        title: 'Custom Appliance Fitting / Aligner Delivery',
        description: 'Precision bracket bonding or delivery of your first set of clear 3D printed aligner trays.'
      },
      {
        step: 3,
        title: 'Monthly Progress Reviews & Calibrations',
        description: 'Routine 4–6 week visits to monitor alignment, swap wire gauges, or advance to next aligner series.'
      },
      {
        step: 4,
        title: 'Debonding & Custom Retainer Placement',
        description: 'Appliances removed, teeth polished, and clear retainers provided to maintain your new smile permanently.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'First 3 Days',
        expectation: 'Teeth feel slightly tender when chewing. Soft diet and orthodontic wax for bracket comfort.'
      },
      {
        period: 'Weeks 2–4',
        expectation: 'Lips and tongue adapt completely; eating and speaking feel natural.'
      },
      {
        period: 'Months 3–12',
        expectation: 'Noticeable visible transformation as teeth align progressively into perfect harmony.'
      }
    ],
    aftercareTips: [
      'Wear clear aligners 20–22 hours every single day.',
      'Use interdental brushes to clean around brackets and archwires.',
      'Avoid biting directly into very hard foods (apples, nuts, ice).',
      'Always wear your night retainer after completing treatment.'
    ],
    faqs: [
      {
        question: 'Are clear aligners as effective as traditional metal braces?',
        answer: 'Yes! For mild to moderate crowding, spacing, and bite correction, clear aligners produce identical results with greater aesthetic discretion and comfort.'
      },
      {
        question: 'What is the payment schedule for braces in Pakistan?',
        answer: 'We offer a convenient installment plan: PKR 25,000 initial down payment upon bracket placement, followed by affordable monthly installments of PKR 5,000 – 8,000 during your routine adjustments.'
      },
      {
        question: 'Am I too old for orthodontic treatment as an adult?',
        answer: 'Never! Over 40% of our orthodontic patients in Rawalpindi are adults aged 22–50 seeking smile enhancement.'
      }
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      caption: 'Severe upper arch crowding aligned in 11 months with self-ligating ceramic braces.'
    }
  },
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening-cosmetic',
    name: 'Laser Teeth Whitening & Polishing',
    shortDesc: 'Brighten your smile up to 8 shades in a single 45-minute in-office session.',
    longDesc: 'Our chairside Laser Teeth Whitening treatment utilizes premium hydrogen-peroxide gels activated by cold LED/Laser light to break down deep extrinsic and intrinsic stains caused by chai, coffee, smoking, and dietary discoloration without harming tooth enamel.',
    category: 'Cosmetic',
    iconName: 'Sparkles',
    priceRangePKR: {
      min: 12000,
      max: 35000,
      unit: 'per complete dual-arch session'
    },
    duration: '45 – 60 minutes',
    painLevel: '0.5/10 (Mild transient sensitivity in rare cases, zero downtime)',
    anesthesiaType: 'No anesthesia needed (Desensitizing gum barrier applied)',
    idealFor: [
      'Chai, coffee, and tobacco tea-stained teeth',
      'Upcoming weddings, corporate events, or photo shoots',
      'Age-related yellowing of natural enamel',
      'Patients seeking instant confidence boost'
    ],
    benefits: [
      'Up to 6–8 shades brighter in just 45 minutes',
      'Enamel-safe formulation with remineralizing nano-hydroxyapatite',
      'Protective liquid dam shields gums completely from sensitivity',
      'Long-lasting results up to 18–24 months with good home care'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Shade Matching & Ultrasonic Polish',
        description: 'Baseline shade recorded with digital spectrophotometer. Teeth polished to remove surface biofilm.'
      },
      {
        step: 2,
        title: 'Gingival Barrier Application',
        description: 'Protective light-cured resin barrier applied to gums to ensure total comfort and zero irritation.'
      },
      {
        step: 3,
        title: 'Laser Gel Activation (3 Cycles)',
        description: 'Professional whitening gel applied and activated in three 15-minute cycles under cool LED laser.'
      },
      {
        step: 4,
        title: 'Fluoride Seal & Final Shade Comparison',
        description: 'Desensitizing fluoride mineral serum applied. Final shade reveal compared side-by-side with baseline.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'First 24 Hours',
        expectation: 'Enamel pores settle. Stick to the "White Diet" (avoid dark chai, curry, soda, beetroot).'
      },
      {
        period: 'Day 2 Onward',
        expectation: 'Maximum brightness stabilizes with zero residual sensitivity.'
      }
    ],
    aftercareTips: [
      'Follow the "White Diet" for 48 hours after treatment.',
      'Use a straw when drinking iced tea, cola, or dark juices.',
      'Rinse with water immediately after drinking strong Pakistani chai.',
      'Use the provided sensitivity-protection toothpaste if needed.'
    ],
    faqs: [
      {
        question: 'Does teeth whitening damage tooth enamel?',
        answer: 'Not at all. Professional in-office laser whitening does not erode enamel. It safely oxidizes internal organic stain molecules while preserving the mineral matrix.'
      },
      {
        question: 'How long do whitening results last in Pakistan?',
        answer: 'With regular brushing and moderate chai consumption, results typically last 1.5 to 2 years. We also provide take-home touch-up kits for maintenance.'
      }
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      caption: 'Stained enamel transformed 7 shades whiter in a single 45-min laser session.'
    }
  },
  {
    id: 'wisdom-tooth',
    slug: 'wisdom-tooth-removal',
    name: 'Wisdom Tooth Removal & Oral Surgery',
    shortDesc: 'Atraumatic surgical extraction of impacted third molars with swift recovery protocols.',
    longDesc: 'Impacted or horizontally oriented wisdom teeth can cause severe pain, facial swelling, gum infections (pericoronitis), and damage to adjacent molars. Dr. Muhammad Asim specializes in minimally invasive, piezosurgery-assisted wisdom tooth extractions with rapid healing.',
    category: 'Surgical',
    iconName: 'AlertCircle',
    priceRangePKR: {
      min: 10000,
      max: 25000,
      unit: 'per tooth (simple to complex surgical impaction)'
    },
    duration: '25 – 45 minutes per tooth',
    painLevel: '1/10 during surgery (Complete profound local anesthesia)',
    anesthesiaType: 'Targeted Mandibular Nerve Block Local Anesthesia',
    idealFor: [
      'Impaction causing throbbing jaw pain or earache',
      'Recurrent gum swelling and foul taste near back molars',
      'Crowding pressure pushing front teeth out of alignment',
      'Deep decay in wisdom teeth that cannot be restored'
    ],
    benefits: [
      'Eliminates chronic jaw pain and prevents facial cellulitis',
      'Protects healthy second molars from root resorption and decay',
      'Atraumatic technique minimizes post-operative swelling and bruising',
      'PRP / PRF biological healing membranes available for rapid recovery'
    ],
    procedureSteps: [
      {
        step: 1,
        title: '3D Panoramic / CBCT Assessment',
        description: 'Precise visualization of the inferior alveolar nerve and root curvature to ensure safe removal.'
      },
      {
        step: 2,
        title: 'Profound Local Anesthesia',
        description: 'Area is completely numbed; patient feels only light vibration and gentle pressure.'
      },
      {
        step: 3,
        title: 'Micro-Surgical Sectioning & Gentle Delivery',
        description: 'The tooth is sectioned into smaller segments for effortless, atraumatic removal without bone loss.'
      },
      {
        step: 4,
        title: 'Hemostatic Dressing & Dissolvable Sutures',
        description: 'Socket is disinfected, collagen plug placed, and dissolvable sutures secured.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'Days 1–2',
        expectation: 'Minor jaw stiffness and mild swelling peak at 48 hours; managed with prescribed pain relievers.'
      },
      {
        period: 'Days 3–5',
        expectation: 'Swelling subsides significantly; resume soft-solid meals.'
      },
      {
        period: 'Day 7',
        expectation: 'Sutures dissolve or are removed; normal jaw opening and chewing restored.'
      }
    ],
    aftercareTips: [
      'Bite firmly on the sterile gauze pack for 45 minutes post-surgery.',
      'Do not spit, use a straw, or smoke for 48 hours to preserve the blood clot.',
      'Apply ice pack to the cheek for 15 mins on / 15 mins off during the first day.',
      'Enjoy ice cream, cold milkshakes, and soft room-temperature foods.'
    ],
    faqs: [
      {
        question: 'Will I be awake during wisdom tooth extraction?',
        answer: 'Yes, you are comfortably awake, but the entire area is 100% numbed with high-potency local anesthesia. You will feel no sharp pain whatsoever.'
      },
      {
        question: 'How much does wisdom tooth removal cost in Rawalpindi?',
        answer: 'Simple erupted extractions start at PKR 10,000, while complex bony surgical impactions range between PKR 18,000 to PKR 25,000.'
      }
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
      after: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      caption: 'Horizontally impacted lower molar extracted atraumatically with zero nerve complication.'
    }
  },
  {
    id: 'scaling-cleaning',
    slug: 'dental-cleaning-scaling',
    name: 'Ultrasonic Scaling, Polishing & AirFlow',
    shortDesc: 'Remove tartar, calculus, tea stains, and bad breath for healthy, bleeding-free pink gums.',
    longDesc: 'Routine brushing cannot remove hardened dental calculus (tartar). Our gentle ultrasonic scaling uses high-frequency micro-vibrations and warm water irrigation to gently flush away calculus, eliminate gum bleeding (gingivitis), and restore fresh breath.',
    category: 'Preventive',
    iconName: 'CheckCircle',
    priceRangePKR: {
      min: 4000,
      max: 8000,
      unit: 'full mouth scaling + fluoridated polish'
    },
    duration: '30 – 40 minutes',
    painLevel: '0/10 (Gentle ultrasonic vibration, no sharp scraping)',
    anesthesiaType: 'None needed (Topical numbing gel for sensitive gums)',
    idealFor: [
      'Bleeding gums when brushing or eating apples',
      'Persistent halitosis (bad breath) and sour mouth taste',
      'Yellow/brown tartar deposits along the gumline',
      'Routine 6-month preventive maintenance'
    ],
    benefits: [
      'Stops gum bleeding and reverses early periodontal disease',
      'Eliminates 99% of oral bacteria responsible for bad breath',
      'Removes chai, tobacco, and paan surface stains',
      'Leaves teeth feeling ultra-smooth, slick, and refreshed'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Periodontal Examination & Plaque Mapping',
        description: 'Gentle gum pocket depth assessment to identify areas of inflammation and tartar buildup.'
      },
      {
        step: 2,
        title: 'Ultrasonic Calculus Debridement',
        description: 'Fine ultrasonic tip vibrates tartar loose while warm water flushes sub-gingival pockets.'
      },
      {
        step: 3,
        title: 'AirFlow Fine Staining Polishing',
        description: 'Gentle sodium bicarbonate spray lifts microscopic stains from hard-to-reach interdental spaces.'
      },
      {
        step: 4,
        title: 'Enamel Remineralizing Polish',
        description: 'Fluoride paste polish smooths enamel surface, preventing rapid plaque re-accumulation.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'Immediate',
        expectation: 'Zero downtime. Gums feel instantly cleaner and breathing feels refreshed.'
      },
      {
        period: 'Next 24 Hours',
        expectation: 'Slight sensitivity to ice water in patients with heavy prior tartar, resolving swiftly.'
      }
    ],
    aftercareTips: [
      'Brush twice daily using the modified Bass technique demonstrated by Dr. Asim.',
      'Floss daily or use an interdental brush once each night before sleep.',
      'Rinse with warm salt water if your gums were heavily inflamed.',
      'Book your next preventive cleaning in 6 months.'
    ],
    faqs: [
      {
        question: 'Does scaling make teeth loose or create gaps?',
        answer: 'Myth! Scaling does NOT loosen teeth or remove enamel. When hardened tartar (which was falsely holding infected gums) is cleared, gums heal tight against natural roots.'
      },
      {
        question: 'How often should I get dental scaling in Pakistan?',
        answer: 'The PMDC and international dental associations recommend scaling every 6 months for optimal gum health.'
      }
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      caption: 'Heavy calculus and chai staining cleared; healthy pink gum margin restored.'
    }
  },
  {
    id: 'veneers',
    slug: 'porcelain-composite-veneers',
    name: 'Porcelain & Composite Veneers',
    shortDesc: 'Flawless Hollywood smile design correcting chipped, discolored, or uneven teeth.',
    longDesc: 'Veneers are ultra-thin shells of handcrafted German porcelain (E-Max / Zirconia) or artistic composite resin bonded to the front surface of your teeth to correct gaps, chipping, deep discoloration, and shape irregularities for a red-carpet celebrity smile.',
    category: 'Cosmetic',
    iconName: 'Heart',
    priceRangePKR: {
      min: 20000,
      max: 45000,
      unit: 'per tooth (Composite vs. E-Max Porcelain)'
    },
    duration: '2 appointments over 5–7 days (or 1 sitting for composite)',
    painLevel: '0.5/10 (Minimally invasive micro-preparation)',
    anesthesiaType: 'Mild Local Anesthesia for tooth preparation',
    idealFor: [
      'Severe tetracycline or fluorosis staining unresponsive to bleaching',
      'Chipped, broken, or unevenly worn front teeth',
      'Midline diastema (gap between front teeth)',
      'Desire for a symmetrical, radiant Hollywood smile makeover'
    ],
    benefits: [
      'Custom color and translucency tailored to your skin tone',
      'Stain-resistant porcelain preserves brilliance for 15+ years',
      'Minimal tooth structure removal (0.3mm – 0.5mm micro-prep)',
      'Digital Smile Design (DSD) preview before any tooth is touched'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Digital Smile Design & Mockup Preview',
        description: 'Facial photographs and 3D intraoral scans generate a virtual preview of your new smile.'
      },
      {
        step: 2,
        title: 'Micro-Preparation & 3D Optical Scan',
        description: 'Ultra-conservative 0.3mm enamel contouring followed by precision digital impression (no goopy trays).'
      },
      {
        step: 3,
        title: 'Artisan Master Ceramic Fabrication',
        description: 'CAD/CAM milling and master ceramist layering in Ivoclar E-Max porcelain.'
      },
      {
        step: 4,
        title: 'Precision Adhesive Bonding',
        description: 'Veneers are trial-fitted and permanently bonded with dual-cure resin cement under dental dam isolation.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'Day 1',
        expectation: 'Slight gum edge adaptation around veneers; immediate dazzling aesthetic reveal.'
      },
      {
        period: 'Day 3',
        expectation: 'Bite feels completely natural; effortless speech and chewing.'
      }
    ],
    aftercareTips: [
      'Avoid biting directly into bottle caps, ice cubes, or unpeeled hard nuts.',
      'Wear a protective nightguard if you grind your teeth in sleep (bruxism).',
      'Use a non-abrasive whitening toothpaste.',
      'Attend regular 6-month checkups and cleanings.'
    ],
    faqs: [
      {
        question: 'What is the difference between Composite and Porcelain veneers?',
        answer: 'Composite veneers (PKR 20,000–25,000/tooth) are sculpted chairside in one visit and last 5–7 years. Porcelain E-Max veneers (PKR 35,000–45,000/tooth) are crafted in a specialized lab, offer superior natural translucency, are 100% stain-proof, and last 15–20 years.'
      },
      {
        question: 'Can veneers fall off?',
        answer: 'Modern adhesive bonding technology creates an unbreakable chemical bond between the porcelain and enamel. With proper care, they will not dislodge.'
      }
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      caption: 'Full 8-unit upper E-Max porcelain smile makeover correcting severe tetracycline staining and spacing.'
    }
  },
  {
    id: 'emergency-care',
    slug: 'emergency-dental-care',
    name: 'Emergency Dental Care (Same-Day Relief)',
    shortDesc: 'Immediate triage and pain relief for severe toothaches, broken teeth, facial trauma, or knocked-out teeth.',
    longDesc: 'Dental emergencies cannot wait. Whether you have unbearable throbbing pain, a knocked-out tooth from sports or an accident, severe facial swelling, or a dislodged crown, Asim Dental Care provides priority same-day emergency slots to get you out of pain immediately.',
    category: 'Emergency',
    iconName: 'Zap',
    priceRangePKR: {
      min: 3000,
      max: 10000,
      unit: 'emergency diagnostic triage + immediate pain relief'
    },
    duration: 'Immediate Priority Triage (15 – 30 mins)',
    painLevel: 'Instant relief from severe pain upon administration of therapy',
    anesthesiaType: 'Immediate Rapid-Acting Local Anesthetic',
    idealFor: [
      'Severe, unbearable throbbing toothache keeping you awake',
      'Avulsed (completely knocked-out) tooth within 1 hour',
      'Traumatic tooth fracture with exposed nerve',
      'Acute facial or jaw swelling with fever'
    ],
    benefits: [
      'Same-day priority walk-in and fast-track booking',
      'Instant pain relief within 15 minutes of entering clinic',
      'Specialized protocols for saving avulsed and fractured teeth',
      'Direct WhatsApp emergency hotline to on-call dental surgeon'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Instant Triage & Diagnostic RVG',
        description: 'Zero waiting time for acute pain cases. Rapid digital X-ray identifies root cause.'
      },
      {
        step: 2,
        title: 'Profound Pain Neutralization',
        description: 'Targeted local anesthetic instantly blocks nerve pain signals.'
      },
      {
        step: 3,
        title: 'Emergency Intervention',
        description: 'Pulpal debridement, trauma splinting, drainage, or sedative dressing applied.'
      },
      {
        step: 4,
        title: 'Stabilization & Definitive Treatment Plan',
        description: 'Prescription for antibiotics/analgesics and follow-up restoration scheduled.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'Immediate (15–30 mins)',
        expectation: 'Acute throbbing pain completely eliminated.'
      },
      {
        period: 'Next 24 Hours',
        expectation: 'Infection begins subsiding with prescribed medications.'
      }
    ],
    aftercareTips: [
      'For a knocked-out tooth: Handle ONLY by the crown (do not touch root), place in cold milk, and reach our clinic within 60 minutes.',
      'Take prescribed anti-inflammatory medicines on time.',
      'Apply cold compress to outside of cheek for facial trauma.',
      'Do not apply aspirin directly onto the gums (it causes chemical burns).'
    ],
    faqs: [
      {
        question: 'What should I do if my tooth is completely knocked out?',
        answer: 'Pick up the tooth by the white crown (never touch the root). Rinse gently in cold milk or saline if dirty. Place it back into the socket if possible, or keep it submerged in a cup of cold milk. Call our emergency hotline (+92 300 555 2424) immediately!'
      },
      {
        question: 'Do you accept walk-ins for emergency dental care in Rawalpindi?',
        answer: 'Yes, acute trauma and emergency pain cases are given top priority over routine appointments.'
      }
    ]
  },
  {
    id: 'crowns-bridges',
    slug: 'dental-crowns-bridges',
    name: 'Zirconia & E-Max Crowns & Bridges',
    shortDesc: 'Indestructible, natural-looking ceramic crowns restoring cracked, root-canaled, or missing teeth.',
    longDesc: 'Protect weakened teeth and bridge gaps seamlessly with precision CAD/CAM milled monolithic Zirconia and glass-ceramic E-Max crowns. Designed to match the exact shade, translucency, and contour of your adjacent teeth.',
    category: 'Restorative',
    iconName: 'Layers',
    priceRangePKR: {
      min: 12000,
      max: 35000,
      unit: 'per unit (PFM vs. Multi-layer 3D Zirconia)'
    },
    duration: '2 visits over 3–5 days',
    painLevel: '0.5/10 (Gentle local numbing during shaping)',
    anesthesiaType: 'Standard Local Anesthesia',
    idealFor: [
      'Teeth weakened after Root Canal Treatment (RCT)',
      'Severely cracked, fractured, or large amalgam-filled teeth',
      'Replacing 1–2 missing teeth with a fixed dental bridge',
      'Cosmetic shape and color enhancement'
    ],
    benefits: [
      'Unmatched fracture resistance (up to 1,200 MPa strength)',
      '100% metal-free biocompatible material with zero dark gum lines',
      'Custom shaded with multi-layered natural translucency',
      '10-Year structural warranty on premium Zirconia units'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Precision Tooth Preparation',
        description: 'Tooth gently shaped and smoothed under local anesthesia.'
      },
      {
        step: 2,
        title: '3D HD Optical Scan',
        description: 'Intraoral 3D camera captures micron-level margins for a watertight fit.'
      },
      {
        step: 3,
        title: 'Protective Temporary Crown',
        description: 'Aesthetic temporary crown placed to protect the tooth while master lab mills the permanent unit.'
      },
      {
        step: 4,
        title: 'Permanent Cementation & Bite Check',
        description: 'Permanent Zirconia crown is bonded with resin cement and bite calibrated.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'First 24 Hours',
        expectation: 'Gums adapt around crown margin; avoid extremely hard nuts for 1 day.'
      },
      {
        period: 'Day 2 Onward',
        expectation: 'Feels completely indistinguishable from your natural teeth.'
      }
    ],
    aftercareTips: [
      'Floss around the crown margins daily.',
      'Avoid using teeth as tools (opening packets or tearing threads).',
      'Visit every 6 months for checkup and ultrasonic polish.'
    ],
    faqs: [
      {
        question: 'Why do Zirconia crowns not have black lines at the gumline?',
        answer: 'Traditional older PFM crowns have a dark metal substructure that often shows as a black line over time. Monolithic Zirconia is 100% white, metal-free ceramic that stays naturally white forever.'
      },
      {
        question: 'What is the price of Zirconia Crown in Rawalpindi?',
        answer: 'Standard Porcelain-fused-to-metal (PFM) starts from PKR 12,000, while premium German Multi-layer 3D Zirconia ranges from PKR 22,000 to PKR 35,000 per unit.'
      }
    ],
    beforeAfterImage: {
      before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
      after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      caption: 'Dark, fractured molar restored with full-contour anatomical Zirconia crown.'
    }
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-kids-dentistry',
    name: 'Kids Dentistry & Preventive Care',
    shortDesc: 'Gentle, friendly, anxiety-free dental care for children, toddlers, and teenagers.',
    longDesc: 'Building positive childhood dental habits lasts a lifetime. Our child-friendly clinic environment, gentle behavioral management, fluoride sealants, and painless treatments ensure your little ones feel excited, safe, and happy during their dental visits.',
    category: 'Preventive',
    iconName: 'UserCheck',
    priceRangePKR: {
      min: 3000,
      max: 12000,
      unit: 'per procedure (Sealants, Pulpotomy, Zirconia Kids Crown)'
    },
    duration: '20 – 35 minutes (Short, stress-free sessions)',
    painLevel: '0/10 (Pain-free, play-based approach with fruit-flavored numbing gel)',
    anesthesiaType: 'Topical Fruit-Flavored Gel + Micro-Needle Local Anesthesia',
    idealFor: [
      'First dental checkup (recommended at age 1 or first tooth)',
      'Early childhood bottle caries / sweet decay',
      'Preventive fissure sealants on new adult molars',
      'Habit correction (thumb sucking, tongue thrusting, mouth breathing)'
    ],
    benefits: [
      'Eliminates dental phobia through "Tell-Show-Do" communication',
      'Protects baby teeth essential for proper speech and adult tooth spacing',
      'Fluoride varnishes make developing enamel 50% more cavity-resistant',
      'Fun bravery diplomas and toy rewards after every visit'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Friendly Acclimatization & Chair Ride',
        description: 'Fun exploration of the dental tools in a relaxed, cartoon-themed atmosphere.'
      },
      {
        step: 2,
        title: 'Gentle Dental Inspection & Plaque Clean',
        description: 'Soft cleaning and counting of teeth with child-sized instruments.'
      },
      {
        step: 3,
        title: 'Preventive Pit & Fissure Sealant',
        description: 'Protective shield painted into deep grooves of molars in under 5 minutes without drilling.'
      },
      {
        step: 4,
        title: 'Fluoride Varnish & Goodie Bag Reward',
        description: 'Bubblegum-flavored tooth mineralizer applied; child awarded "Dental Superhero" certificate.'
      }
    ],
    recoveryTimeline: [
      {
        period: 'Immediate',
        expectation: 'Child leaves smiling and proud; can drink water right away.'
      }
    ],
    aftercareTips: [
      'Help your child brush twice daily with a pea-sized amount of age-appropriate fluoride toothpaste.',
      'Limit sticky toffees, sweetened milk bottles at bedtime, and fruit gummies.',
      'Schedule routine 6-month checkups to catch cavities before they cause toothache.'
    ],
    faqs: [
      {
        question: 'Why treat baby teeth if they are going to fall out anyway?',
        answer: 'Baby teeth guide the permanent adult teeth into correct alignment, allow proper chewing nutrition, and facilitate clear speech development. Untreated infections in baby teeth can damage underlying permanent teeth.'
      },
      {
        question: 'At what age should a child first visit the dentist?',
        answer: 'The first dental visit should be around their first birthday or when their first baby tooth erupts.'
      }
    ]
  }
];
