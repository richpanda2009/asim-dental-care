import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Heart, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  FileCheck,
  Building2,
  Users,
  GraduationCap
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/doctorsData';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (treatmentId?: string, doctorId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Ethical, Sterile & Certified Dental Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            About Asim Dental Care Rawalpindi
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Founded with a commitment to pain-free dentistry, uncompromising hygiene, and honest pricing for families across Rawalpindi and Islamabad.
          </p>
        </div>
      </div>

      {/* Clinic Story & Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Our Foundation & Ethics
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            A Patient-First Dental Practice You Can Trust
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Established over 16 years ago by <strong className="text-slate-900">Dr. Muhammad Asim</strong>, Asim Dental Care was built to eliminate the fear associated with dental treatments in Pakistan. We believe that every patient deserves medical-grade care in a calm, modern environment without exaggerated pricing or hidden extras.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Whether treating an anxious child or performing computer-guided dental implant surgery for a senior citizen, our team upholds the highest international medical ethics.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100">
              <div className="text-2xl font-black text-sky-700">16+</div>
              <div className="text-xs font-semibold text-slate-700">Years Serving Twin Cities</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
              <div className="text-2xl font-black text-emerald-700">12,000+</div>
              <div className="text-xs font-semibold text-slate-700">Successful Procedures</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl space-y-6">
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            <span>Our 4 Core Pillars of Care</span>
          </h3>

          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">100% Pain-Free Guarantee</h4>
                <p className="text-slate-400 mt-0.5">Computer-controlled local anesthesia replaces stinging needles.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Class-B European Sterilization</h4>
                <p className="text-slate-400 mt-0.5">Instruments autoclaved in vacuum chambers and sealed in single-use sterile pouches.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Transparent PKR Price Guarantee</h4>
                <p className="text-slate-400 mt-0.5">No surprise bills or post-procedure add-ons. 0% interest installment schedules available.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">PMDC-Verified Specialists</h4>
                <p className="text-slate-400 mt-0.5">Only qualified BDS, FCPS, and overseas-certified dental surgeons treat you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Doctor Team Full Profiles */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Medical Faculty
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Meet Our Senior Dental Surgeons & Specialists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-200/80 flex flex-col justify-between space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-32 w-32 rounded-2xl object-cover shadow-sm shrink-0"
                />
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                      {doctor.experienceYears}+ Years Exp
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{doctor.name}</h3>
                  <p className="text-xs font-bold text-sky-700">{doctor.title}</p>
                  <p className="text-[11px] text-slate-500">{doctor.specialty}</p>

                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">PMDC Registration:</span>
                    <span className="text-xs font-bold text-slate-800">{doctor.pmdcNumber}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                <p>{doctor.bio}</p>

                <div className="bg-slate-50 p-3 rounded-2xl space-y-1">
                  <span className="font-bold text-slate-800 block">Degrees & Diplomas:</span>
                  <p className="text-[11px] text-slate-600">{doctor.degrees.join(' • ')}</p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <div className="text-[11px] text-slate-500">
                  <span className="font-semibold block">Clinic Timings:</span>
                  <span>{doctor.availability}</span>
                </div>
                <button
                  onClick={() => onOpenBooking(undefined, doctor.id)}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition shadow-sm"
                >
                  Book with {doctor.name.split(' ')[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
