# Asim Dental Care — Production-Ready Dental Clinic Web Application

A modern, medical-grade web application for **Asim Dental Care**, located on **Main Peshawar Road, Saddar, Rawalpindi, Pakistan**.

---

## 🌟 Key Features

### 1. Interactive 3D Dental Explorer (Hero Section)
- **WebGL 360° Interactive Tooth**: Smooth orbit drag rotation, zoom in/out, and auto-rotation toggle.
- **Anatomical Layer Inspection**: Enamel, Dentin, Pulp Chamber, and Root Canals with clinical annotations and Urdu terminology.
- **Treatment Simulation Modes**: Healthy tooth, Cavity/Infection, Root Canal Gutta-Percha Seal, Zirconia Crown, and Swiss Titanium Implant.

### 2. Pakistani Localized Content & Transparent PKR Pricing
- **10+ Individual Treatment Deep Dives**: Root Canal (RCT), Dental Implants, Braces & Aligners, Laser Whitening, Wisdom Tooth Surgery, Ultrasonic Scaling, Veneers, Emergency Relief, Crowns & Bridges, Kids Dentistry.
- **Interactive PKR Cost Estimator**: Calculates real-time prices based on units, tooth count, and material tiers (Standard vs. Premium German/Swiss) with **0% markup installment breakdown** (3, 6, 12 months).
- **Localized Landmarks & Navigation**: Landmark guide for Saddar Metro Bus, Westridge Entry, and Shell Petrol Pump.
- **Friday Jummah Break Notice**: Dedicated clinic timing notes (1:00 PM – 2:30 PM).

### 3. Patient Appointment Engine & Self-Service Portal
- **4-Step Booking Wizard**: Procedure select, doctor choice, date & time slot picker, patient details with instant reference code (e.g. `ADC-2026-8942`).
- **One-Click Calendar Sync**: Generates and downloads standard `.ics` calendar files.
- **WhatsApp Direct Sync**: Pre-formats appointment confirmation for the clinic reception WhatsApp desk.
- **Self-Service Appointment Lookup**: Patients can search by reference code or phone number to view status, reschedule date/time, or cancel.

### 4. Interactive Before & After Transformation Slider
- **Split-Screen Comparison**: Touch/drag interactive slider comparing before and after treatment outcomes.
- **Real Cases**: Smile Makeover, Anterior RCT, Single Swiss Implant, Clear Aligners, Laser Whitening, and Gap Closure.

### 5. AsimCare AI Dental Assistant
- **Conversational Assistant**: Answering common symptoms, pain management, emergency triage, PKR price estimates, doctor credentials, and direct booking guidance.

### 6. Staff Admin Dashboard (`/admin`)
- **Passcode Authentication**: Secure staff access (Passcode: `admin123`).
- **Live KPI Metrics**: Total bookings, pending reviews, confirmed appointments, completed treatments, and emergency cases.
- **Appointment Lifecycle Operations**: Filter by doctor, status, date; change statuses (Pending → Confirmed → Completed → Cancelled); record internal clinical notes; and export appointment schedules to CSV.

### 7. Local SEO & Medical Schema
- **JSON-LD Structured Data**: Embedded `Dentist`, `MedicalBusiness`, and `OpeningHoursSpecification` schema markup for top Google rankings in Rawalpindi and Islamabad.

---

## 🚀 Running Locally

```bash
# 1. Navigate to the project directory
cd asim-dental-care

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🚢 Deployment Instructions

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

---

## 👨‍⚕️ Clinical Faculty
* **Dr. Muhammad Asim (BDS, RDS, C-Implants Bern)** — PMDC Reg # 14892-D (Chief Dental Surgeon)
* **Dr. Ayesha Siddiqui (BDS, FCPS Orthodontics)** — PMDC Reg # 18320-D (Consultant Orthodontist)
* **Dr. Hamza Malik (BDS, MSc Endodontology UK)** — PMDC Reg # 22145-D (Microscopic Endodontist)
* **Dr. Zoya Tariq (BDS, CAD)** — PMDC Reg # 25489-D (Aesthetic & Pediatric Dentist)
