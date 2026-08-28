import React from 'react';
import { 
  Calendar, 
  Phone, 
  ShieldCheck, 
  Star, 
  Clock, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Heart, 
  MessageSquare,
  Award,
  Zap,
  Users
} from 'lucide-react';
import { ToothExplorer3D } from '../components/3d/ToothExplorer3D';
import { BeforeAfterSlider } from '../components/home/BeforeAfterSlider';
import { CostEstimatorWidget } from '../components/home/CostEstimatorWidget';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { DOCTORS_DATA } from '../data/doctorsData';
import { REVIEWS_DATA } from '../data/reviewsData';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute, data?: any) => void;
  onOpenBooking: (treatmentId?: string, doctorId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION WITH 3D TOOTH EXPLORER */}
      <section className="relative pt-6 md:pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-200 text-xs font-bold shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
                </span>
                <span>#1 Rated Dental Clinic in Rawalpindi • PMDC Certified</span>
              </div>

              {/* Main Benefit Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
                Expert Dental Care in Rawalpindi —{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-500">
                  Affordable, Modern & 100% Pain-Free
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Led by <strong className="text-slate-900">Dr. Muhammad Asim (16+ yrs exp, Ex-AFID)</strong>, we combine Swiss dental implants, single-visit root canals, and invisible aligners with transparent PKR pricing and hospital-grade European sterilization.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-sm shadow-xl shadow-sky-600/30 hover:shadow-2xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Appointment Online</span>
                </button>

                <a
                  href="tel:+923005552424"
                  className="px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-sm transition flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>Call 0300-5552424</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">12,000+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Happy Patients</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-sky-600">16+ Yrs</div>
                  <div className="text-[11px] text-slate-500 font-medium">Clinical Excellence</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 flex items-center gap-1">
                    <span>4.9★</span>
                    <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">Google & Marham</div>
                </div>
              </div>
            </div>

            {/* Hero Right 3D Visualizer */}
            <div className="lg:col-span-6">
              <ToothExplorer3D />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & CREDENTIAL METRICS STRIP */}
      <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="h-10 w-10 rounded-2xl bg-sky-500/20 text-sky-400 mx-auto flex items-center justify-center mb-2">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-sm font-bold">PMDC Certified Surgeons</div>
              <p className="text-[11px] text-slate-400">Reg # 14892-D Active Practice</p>
            </div>

            <div className="space-y-1">
              <div className="h-10 w-10 rounded-2xl bg-teal-500/20 text-teal-400 mx-auto flex items-center justify-center mb-2">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="text-sm font-bold">100% Pain-Free Guarantee</div>
              <p className="text-[11px] text-slate-400">Computerized STA Anesthesia</p>
            </div>

            <div className="space-y-1">
              <div className="h-10 w-10 rounded-2xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center mb-2">
                <Activity className="h-5 w-5" />
              </div>
              <div className="text-sm font-bold">Class-B Vacuum Autoclave</div>
              <p className="text-[11px] text-slate-400">Zero Cross-Infection Protocol</p>
            </div>

            <div className="space-y-1">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-2">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-sm font-bold">Transparent PKR Pricing</div>
              <p className="text-[11px] text-slate-400">0% Markup Installment Plans</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY DENTAL SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Specialized Dental Procedures
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Comprehensive Dental Treatments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              From routine scaling to complex full-mouth implant rehabilitations, every treatment is delivered with painless precision.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 self-start md:self-auto"
          >
            <span>Explore All 10 Treatments</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS_DATA.slice(0, 6).map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-sky-200 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                    {treatment.category}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {treatment.painLevel.split('(')[0].trim()}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition">
                    {treatment.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {treatment.shortDesc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-semibold block">Transparent Cost (PKR):</span>
                  <div className="text-sm font-black text-slate-900">
                    PKR {treatment.priceRangePKR.min.toLocaleString()} – {treatment.priceRangePKR.max.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-500">{treatment.priceRangePKR.unit}</span>
                </div>
              </div>

              <div className="pt-6 flex items-center gap-2 border-t border-slate-100 mt-4">
                <button
                  onClick={() => onNavigate('treatment-detail', treatment.slug)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition text-center"
                >
                  Procedure Details
                </button>
                <button
                  onClick={() => onOpenBooking(treatment.id)}
                  className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition shadow-sm"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider onBookTreatment={(name) => onOpenBooking(undefined)} />
      </section>

      {/* 5. INTERACTIVE PKR COST ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimatorWidget onBookEstimated={(name) => onOpenBooking()} />
      </section>

      {/* 6. MEET CHIEF DENTIST & SPECIALIST TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Medical Qualifications & PMDC Accreditation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Meet Our Dental Specialists
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Our doctors hold international fellowships and hospital appointments, dedicated to ethical and pain-free patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                    {doctor.experienceYears}+ Yrs Exp
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-black text-base text-slate-900">{doctor.name}</h3>
                  <p className="text-xs font-bold text-sky-600 leading-tight">{doctor.title}</p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {doctor.degrees.slice(0, 2).join(' • ')}
                  </p>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-semibold text-slate-400 block">PMDC Number:</span>
                    <span className="text-xs font-bold text-slate-800">{doctor.pmdcNumber.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenBooking(undefined, doctor.id)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs transition"
                >
                  Book with {doctor.name.split(' ')[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. VERIFIED PATIENT REVIEWS & MARHAM RATINGS */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                <Star className="h-3.5 w-3.5 fill-emerald-600" />
                <span>4.9 / 5.0 Average Rating (480+ Reviews)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                What Our Patients in Rawalpindi Say
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Verified reviews from Google Reviews, Marham.pk, and in-clinic feedback surveys.
              </p>
            </div>

            <a
              href="https://wa.me/923005552424"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-slate-700 hover:text-sky-600 flex items-center gap-1"
            >
              <span>View On Google Maps →</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100">
                      {review.source}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{review.comment}"
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {review.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  <div className="font-bold text-xs text-slate-900">{review.patientName}</div>
                  <div className="text-[11px] text-slate-500">{review.location} • <span className="text-sky-600 font-medium">{review.treatment}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EMERGENCY CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 rounded-3xl p-6 md:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-black/20 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
              <Zap className="h-3.5 w-3.5" />
              <span>Same-Day Emergency Relief</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black">
              Experiencing Severe Tooth Pain or Facial Trauma?
            </h3>
            <p className="text-xs md:text-sm text-red-100 max-w-xl">
              Don't suffer through the night. Our on-call dental surgeon in Rawalpindi provides fast-track walk-in relief for acute pulpitis, broken teeth, and dental trauma.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:+923005552424"
              className="px-6 py-3.5 rounded-2xl bg-white text-red-700 hover:bg-slate-100 font-black text-xs md:text-sm transition shadow-lg flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span>Call Emergency: 0300-5552424</span>
            </a>
            <button
              onClick={() => onNavigate('emergency')}
              className="px-6 py-3.5 rounded-2xl bg-black/30 hover:bg-black/40 text-white font-bold text-xs md:text-sm transition border border-white/30"
            >
              Triage Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
