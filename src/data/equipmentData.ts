import { DentalEquipment } from '../types';

export const EQUIPMENT_DATA: DentalEquipment[] = [
  {
    id: 'cbct-3d-xray',
    name: '3D CBCT & Panoramic Digital Imaging',
    model: 'Planmeca ProMax 3D (Finland)',
    origin: 'Helsinki, Finland',
    category: 'Diagnostic & Imaging',
    benefit: 'Ultra-low radiation 3D volumetric jaw and nerve visualization.',
    description: 'Provides sub-millimeter 3D reconstructed slices of jawbone thickness, sinus contours, and mandibular nerve canals, guaranteeing 100% precision in implant surgery and complex root canal diagnosis.',
    patientAdvantage: '90% lower radiation exposure than conventional CT scans, with instant digital display in under 12 seconds.',
    badge: 'European Safety Certified'
  },
  {
    id: 'intraoral-scanner',
    name: '3D High-Speed Intraoral Optical Scanner',
    model: '3Shape TRIOS 5 Wireless (Denmark)',
    origin: 'Copenhagen, Denmark',
    category: 'Diagnostic & Imaging',
    benefit: 'Replaces messy, gag-inducing impression trays with ultra-accurate 3D laser mapping.',
    description: 'Captures over 3,000 HD color frames per second to build photorealistic digital models of your teeth and gums for crowns, aligners, and veneers.',
    patientAdvantage: 'No gagging, no bad taste, and perfect margin accuracy eliminating ill-fitting crowns or gaps.',
    badge: '100% Digital Impression'
  },
  {
    id: 'rotary-endomotor',
    name: 'Rotary Endodontics & Electronic Apex Locator',
    model: 'VDW Gold Reciproc (Germany)',
    origin: 'Munich, Germany',
    category: 'Restorative & Endodontic',
    benefit: 'Completes root canals in a single visit with micro-millimeter canal depth accuracy.',
    description: 'Reciprocating smart torque control files clear out deep infected pulp tissue with zero risk of file separation, while the integrated acoustic apex locator measures canal length precisely to 0.1mm.',
    patientAdvantage: 'Saves your natural tooth in just 45 minutes instead of 3–4 painful sittings.',
    badge: 'Single-Sitting RCT Tech'
  },
  {
    id: 'class-b-autoclave',
    name: 'Class-B Fractional Vacuum Autoclave',
    model: 'Melag Vacuklav 40 B+ (Germany)',
    origin: 'Berlin, Germany',
    category: 'Sterilization & Hygiene',
    benefit: 'Hospital-grade triple-pulsed vacuum sterilization destroying 100% of pathogens, hepatitis, and viruses.',
    description: 'All instruments are sealed in individual sterile pouches, tracked via digital barcode cycle logs, and opened directly in front of the patient at chairside.',
    patientAdvantage: 'Total peace of mind with 100% sterile cross-infection prevention for you and your family.',
    badge: 'Hospital-Grade Sterilization'
  },
  {
    id: 'painless-anesthesia',
    name: 'The Wand STA Computer-Controlled Anesthesia',
    model: 'Milestone Scientific STA (USA)',
    origin: 'Livingston, New Jersey, USA',
    category: 'Comfort & Pain Management',
    benefit: 'Delivers local anesthetic at dynamic pressure below the human pain threshold.',
    description: 'Unlike manual syringes that cause pain through rapid tissue expansion, the STA micro-processor measures tissue resistance and flows anesthetic ahead of the needle tip.',
    patientAdvantage: 'You literally do not feel the injection, eliminating the #1 dental fear forever.',
    badge: 'Pain-Free Technology'
  },
  {
    id: 'laser-whitening',
    name: 'Cold-Light Dual-Wavelength Whitening Accelerator',
    model: 'Beyond Polus Advanced Laser (USA)',
    origin: 'Sugar Land, Texas, USA',
    category: 'Restorative & Endodontic',
    benefit: 'Fastest stain breakdown with tailored optical filtration protecting tooth nerve pulp.',
    description: 'Combines halogen and LED cold light to activate whitening peroxides at rapid molecular speed while filtering out harmful UV rays and heat.',
    patientAdvantage: 'Gives up to 8 shades whiter smile in 45 minutes without tooth burning or sensitivity.',
    badge: 'FDA Cleared'
  }
];
