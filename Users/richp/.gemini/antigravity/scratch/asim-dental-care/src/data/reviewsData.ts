import { PatientReview } from '../types';

export const REVIEWS_DATA: PatientReview[] = [
  {
    id: 'rev-1',
    patientName: 'Brigadier (R) Tariq Mahmood',
    location: 'Askari 14, Rawalpindi',
    treatment: 'Dental Implants & Zirconia Bridge',
    rating: 5,
    date: '2 weeks ago',
    source: 'Google Reviews',
    verified: true,
    comment: 'Dr. Muhammad Asim is by far the finest dental surgeon in Rawalpindi. I had 3 implants placed simultaneously. His clinic is impeccably clean, on par with European surgical standards. What impressed me most was the zero pain during and after surgery. Truly commendable staff and medical ethics!',
    doctorName: 'Dr. Muhammad Asim',
    highlights: ['Painless Surgery', 'Hospital-Grade Hygiene', 'Clear Explanation']
  },
  {
    id: 'rev-2',
    patientName: 'Fatima Noor',
    location: 'Bahria Town Phase 7, Rawalpindi',
    treatment: 'Single-Sitting Root Canal + Crown',
    rating: 5,
    date: '1 month ago',
    source: 'Marham',
    verified: true,
    comment: 'I was in unbearable tooth pain at 8 PM on a Tuesday. Called their emergency number and was attended immediately. Dr. Asim did the root canal in just 45 minutes without me feeling a pinch of pain! The computer injection is miraculous. Best dental clinic in the twin cities.',
    doctorName: 'Dr. Muhammad Asim',
    highlights: ['Emergency Availability', 'Pain-Free Injection', 'Friendly Staff']
  },
  {
    id: 'rev-3',
    patientName: 'Engr. Usman Qureshi',
    location: 'Westridge 1, Rawalpindi',
    treatment: 'Laser Teeth Whitening & Scaling',
    rating: 5,
    date: '3 weeks ago',
    source: 'Google Reviews',
    verified: true,
    comment: 'Extremely transparent pricing! Unlike other clinics that quote one rate and add hidden charges, Asim Dental Care was 100% upfront with the PKR costs. The teeth whitening gave my smile an amazing shine before my brother\'s wedding. 5 stars all the way!',
    doctorName: 'Dr. Zoya Tariq',
    highlights: ['Transparent Pricing', 'Instant Whitening', 'No Hidden Fees']
  },
  {
    id: 'rev-4',
    patientName: 'Dr. Mahnoor Khan (MBBS)',
    location: 'Chaklala Scheme 3, Rawalpindi',
    treatment: 'Clear Aligners (Invisible Braces)',
    rating: 5,
    date: '1 month ago',
    source: 'Marham',
    verified: true,
    comment: 'As a medical doctor myself, I am very strict about sterilization protocols. Asim Dental Care uses Class-B autoclaves and sterile sealed pouches opened right in front of the patient. Dr. Ayesha Siddiqui is exceptionally knowledgeable in orthodontics. My aligner treatment has been flawless!',
    doctorName: 'Dr. Ayesha Siddiqui',
    highlights: ['Sterilization Excellence', 'Orthodontic Mastery', 'Doctor Recommended']
  },
  {
    id: 'rev-5',
    patientName: 'Chaudhry Kamran',
    location: 'Peshawar Road, Rawalpindi',
    treatment: 'Surgical Wisdom Tooth Extraction',
    rating: 5,
    date: '2 months ago',
    source: 'Google Reviews',
    verified: true,
    comment: 'I was terrified of having my horizontally impacted wisdom tooth extracted because my friends had terrible experiences elsewhere. Dr. Asim removed it in just 25 minutes. Zero swelling the next day. The landmark instructions to reach the clinic near Saddar Metro were very helpful.',
    doctorName: 'Dr. Muhammad Asim',
    highlights: ['Fast Recovery', 'Easy Location', 'Gentle Touch']
  },
  {
    id: 'rev-6',
    patientName: 'Mrs. Saima Bilal & Kids',
    location: 'Saddar, Rawalpindi',
    treatment: 'Kids Dentistry & Fluoride Sealants',
    rating: 5,
    date: '2 months ago',
    source: 'Direct Patient Survey',
    verified: true,
    comment: 'My 6-year-old daughter used to cry whenever we mentioned a dentist. Dr. Zoya was so playful and sweet! She gave my daughter a bravery medal and made the whole visit fun. Now my daughter actually asks when we are going back to the dental clinic!',
    doctorName: 'Dr. Zoya Tariq',
    highlights: ['Kids Friendly', 'Gentle Environment', 'Zero Fear']
  }
];
