import { Doctor } from '../types';

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-muhammad-asim',
    name: 'Dr. Muhammad Asim',
    title: 'Chief Dental Surgeon & Implantologist',
    degrees: ['BDS (NUST/AFID)', 'RDS (Pakistan)', 'C-Implants (Bern, Switzerland)', 'Certified Digital Smile Designer'],
    pmdcNumber: '14892-D (Verified PMDC / PMC Active Member)',
    experienceYears: 16,
    specialty: 'Dental Implants, Full-Mouth Rehabilitation & Advanced Oral Surgery',
    bio: 'Dr. Muhammad Asim is one of the most respected dental surgeons in the Twin Cities (Rawalpindi & Islamabad). With over 16 years of clinical excellence, formerly with Armed Forces Institute of Dentistry (AFID) and tertiary hospitals, Dr. Asim has placed over 3,200 successful dental implants and performed over 9,000 pain-free root canals. He is renowned for his calm chairside demeanor, patient-first ethics, and commitment to pain-free digital dentistry.',
    affiliations: [
      'Pakistan Medical & Dental Council (PMDC)',
      'Pakistan Dental Association (PDA) Executive Member',
      'International Congress of Oral Implantologists (ICOI, USA)',
      'European Society of Cosmetic Dentistry (ESCD)'
    ],
    awards: [
      'Best Dental Surgeon Rawalpindi (Twin Cities Healthcare Excellence Award 2024)',
      'Marham Verified Super Doctor (Top 1% Patient Satisfaction Rating)',
      'Pioneer in Computerized Painless Anesthesia (Rawalpindi Division)'
    ],
    availability: 'Mon – Sat: 11:00 AM – 9:00 PM (Friday Break: 1:00 PM – 2:30 PM)',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dr-ayesha-siddiqui',
    name: 'Dr. Ayesha Siddiqui',
    title: 'Consultant Orthodontist & Clear Aligner Specialist',
    degrees: ['BDS (UHS)', 'FCPS (Orthodontics - CPSP)', 'Certified Invisalign & ClearSmile Provider'],
    pmdcNumber: '18320-D (Verified PMDC Active Specialist)',
    experienceYears: 11,
    specialty: 'Braces, Clear Aligners, Child Facial Growth Guidance & Jaw Orthopedics',
    bio: 'Dr. Ayesha Siddiqui brings over a decade of specialized orthodontic expertise in transforming misaligned bites into radiant, confident smiles. Having treated over 2,400 adolescent and adult orthodontic cases, she specializes in discrete clear aligners and modern low-friction ceramic braces.',
    affiliations: [
      'College of Physicians and Surgeons Pakistan (CPSP)',
      'Pakistan Association of Orthodontists (PAO)',
      'World Federation of Orthodontists (WFO)'
    ],
    awards: [
      'Outstanding Young Orthodontist Award (PAO 2023)',
      'Published Clinical Researcher in European Journal of Orthodontics'
    ],
    availability: 'Mon, Wed, Fri, Sat: 3:00 PM – 8:30 PM',
    image: 'https://images.unsplash.com/photo-1594824813689-5369f64bf772?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dr-hamza-malik',
    name: 'Dr. Hamza Malik',
    title: 'Consultant Endodontist & Microscopic RCT Specialist',
    degrees: ['BDS', 'MSc Endodontology (UK)', 'C-Endo (Rotary Endodontics)'],
    pmdcNumber: '22145-D (Verified PMDC)',
    experienceYears: 8,
    specialty: 'Single-Sitting Root Canals, Retreatment, Periapical Microsurgery',
    bio: 'Dr. Hamza Malik specializes exclusively in saving severely compromised and infected teeth. Utilizing dental operating microscopes and advanced warm vertical compaction obturation, Dr. Malik performs complicated multi-canal root treatments with precision and zero patient discomfort.',
    affiliations: [
      'British Endodontic Society (BES)',
      'Pakistan Endodontic Association'
    ],
    awards: [
      'Excellence in Micro-Endodontics Recognition 2024'
    ],
    availability: 'Tue, Thu, Sat: 11:30 AM – 7:30 PM',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dr-zoya-tariq',
    name: 'Dr. Zoya Tariq',
    title: 'Aesthetic Dentist & Pediatric Dental Specialist',
    degrees: ['BDS', 'Certification in Aesthetic Dentistry (CAD)', 'Paediatric Oral Health Fellow'],
    pmdcNumber: '25489-D (Verified PMDC)',
    experienceYears: 7,
    specialty: 'Digital Smile Makeovers, Composite Veneers, Child Behavioral Dental Care',
    bio: 'Dr. Zoya is passionate about gentle aesthetic enhancements and making dental visits joyful for kids. Her artistic precision with composite layering and gentle approach with anxious children make her a favorite among families across Rawalpindi.',
    affiliations: [
      'International Association of Paediatric Dentistry (IAPD)',
      'Aesthetic Dentistry Forum Pakistan'
    ],
    awards: [
      'Best Patient Communication & Compassion Award 2025'
    ],
    availability: 'Mon – Fri: 12:00 PM – 8:00 PM',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
  }
];
