export type PageRoute = 
  | 'home'
  | 'services'
  | 'treatment-detail'
  | 'about'
  | 'gallery'
  | 'pricing'
  | 'technology'
  | 'contact'
  | 'emergency'
  | 'blog'
  | 'blog-post'
  | 'admin';

export interface Treatment {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  category: 'Restorative' | 'Cosmetic' | 'Orthodontics' | 'Preventive' | 'Surgical' | 'Emergency';
  iconName: string;
  priceRangePKR: {
    min: number;
    max: number;
    unit: string;
  };
  duration: string;
  painLevel: string; // e.g. "1/10 (Virtually Painless)"
  anesthesiaType: string;
  idealFor: string[];
  benefits: string[];
  procedureSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  recoveryTimeline: {
    period: string;
    expectation: string;
  }[];
  aftercareTips: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  beforeAfterImage?: {
    before: string;
    after: string;
    caption: string;
  };
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  degrees: string[];
  pmdcNumber: string;
  experienceYears: number;
  specialty: string;
  bio: string;
  affiliations: string[];
  awards: string[];
  availability: string;
  image: string;
}

export interface GalleryCase {
  id: string;
  title: string;
  category: 'Smile Makeover' | 'Root Canal' | 'Dental Implants' | 'Braces & Aligners' | 'Teeth Whitening' | 'Veneers';
  patientAgeGender: string;
  treatmentName: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  dentistNotes: string;
  patientQuote?: string;
}

export interface PatientReview {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  source: 'Google Reviews' | 'Marham' | 'Direct Patient Survey';
  verified: boolean;
  comment: string;
  doctorName?: string;
  highlights: string[];
}

export interface DentalEquipment {
  id: string;
  name: string;
  model: string;
  origin: string;
  category: 'Diagnostic & Imaging' | 'Restorative & Endodontic' | 'Sterilization & Hygiene' | 'Comfort & Pain Management';
  benefit: string;
  description: string;
  patientAdvantage: string;
  badge: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Preventive Care' | 'Treatment Guides' | 'Cost & Insurance' | 'Myth Busting' | 'Children Dental Health';
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  faqs?: { question: string; answer: string }[];
}

export type AppointmentStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface Appointment {
  id: string;
  bookingRef: string; // e.g. "ADC-2026-8942"
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  treatmentId: string;
  treatmentName: string;
  doctorId: string;
  doctorName: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes?: string;
  isEmergency: boolean;
  status: AppointmentStatus;
  createdAt: string;
  internalNotes?: string;
}

export interface CostCalculationItem {
  treatmentId: string;
  treatmentName: string;
  quantity: number;
  materialTier: 'standard' | 'premium' | 'ultra_swiss';
  estimatedCostPKR: number;
}
