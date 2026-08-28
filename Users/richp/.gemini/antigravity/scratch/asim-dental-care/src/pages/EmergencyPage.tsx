import React from 'react';
import { 
  AlertTriangle, 
  PhoneCall, 
  Zap, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  MessageSquare,
  HelpCircle,
  Activity
} from 'lucide-react';
import { PageRoute } from '../types';

interface EmergencyPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (treatmentId?: string, doctorId?: string, isEmergency?: boolean) => void;
}

export const EmergencyPage: React.FC<EmergencyPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Urgent Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 via-rose-700 to-amber-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 text-white text-xs font-bold border border-white/20">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>24/7 Dental Emergency Triage • Rawalpindi & Islamabad</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Same-Day Emergency Dental Care & Fast Pain Relief
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-red-100 leading-relaxed">
            Severe toothaches, bleeding, knocked-out teeth, or facial swelling are medical priorities. At Asim Dental Care Rawalpindi, you do not need to wait in line — emergency walk-in patients receive immediate anesthesia and pain triage.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="tel:+923005552424"
              className="px-8 py-4 rounded-2xl bg-white text-red-700 hover:bg-slate-100 font-black text-sm transition shadow-xl flex items-center justify-center gap-2"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Emergency Hotline: 0300-5552424</span>
            </a>

            <button
              onClick={() => onOpenBooking('emergency-care', undefined, true)}
              className="px-6 py-4 rounded-2xl bg-black/40 hover:bg-black/50 text-white font-bold text-sm transition border border-white/30 flex items-center justify-center gap-2"
            >
              <Zap className="h-4 w-4" />
              <span>Priority Online Walk-in Booking</span>
            </button>
          </div>
        </div>
      </div>

      {/* What Constitutes a Dental Emergency */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Symptom Evaluation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Is Your Condition a Dental Emergency?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Knocked-Out (Avulsed) Tooth',
              severity: 'CRITICAL (Save within 60 mins)',
              color: 'text-red-700 bg-red-50 border-red-200',
              advice: 'Handle ONLY by crown, do not scrub root, place in cold milk, and reach our clinic immediately.'
            },
            {
              title: 'Severe Throbbing Night Pain',
              severity: 'HIGH PRIORITY (Acute Pulpitis)',
              color: 'text-rose-700 bg-rose-50 border-rose-200',
              advice: 'Indicates acute nerve death. Computerized anesthesia provides total pain relief within 15 minutes.'
            },
            {
              title: 'Facial Swelling & Abscess',
              severity: 'URGENT INFECTION',
              color: 'text-amber-700 bg-amber-50 border-amber-200',
              advice: 'Swelling near jaw or eye can spread quickly. Immediate drainage and antibiotics required.'
            },
            {
              title: 'Broken Tooth with Exposed Nerve',
              severity: 'IMMEDIATE RESTORATION',
              color: 'text-sky-700 bg-sky-50 border-sky-200',
              advice: 'Avoid hot/cold drinks. We seal and cap the tooth with cosmetic resin or crown in 1 visit.'
            }
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-3xl border shadow-xs space-y-2.5 ${item.color}`}>
              <span className="text-[10px] font-black tracking-wider uppercase block">
                {item.severity}
              </span>
              <h3 className="font-black text-base text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-700 leading-relaxed">{item.advice}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step-by-Step "What to Do Right Now" Guide */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-black">
            First-Aid Protocol: What to Do Right Now Before Reaching the Clinic
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Follow these clinical instructions while you are en route to Asim Dental Care on Peshawar Road, Rawalpindi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-2">
            <h4 className="font-bold text-white text-sm">DO's (Recommended):</h4>
            <ul className="space-y-1.5 list-disc pl-4 text-emerald-300">
              <li>Rinse mouth with warm salt water to flush bacteria.</li>
              <li>Apply an ice pack to outside cheek to reduce swelling.</li>
              <li>Take Paracetamol / Ibuprofen as instructed.</li>
              <li>Submerge a knocked-out tooth in fresh cold milk.</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-2">
            <h4 className="font-bold text-white text-sm">DON'Ts (Avoid):</h4>
            <ul className="space-y-1.5 list-disc pl-4 text-red-300">
              <li>NEVER place an Aspirin tablet on the gum (causes severe chemical burn).</li>
              <li>Do not use sharp needles or toothpicks to poke swollen gums.</li>
              <li>Do not touch the delicate root cells of a knocked-out tooth.</li>
              <li>Avoid hot, spicy, or extremely sugary foods.</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-2 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-white text-sm">On-Call Surgeon:</h4>
              <p className="text-slate-400 mt-1">
                Dr. Muhammad Asim & trauma team are on standby for emergency triage.
              </p>
            </div>
            <a
              href="https://wa.me/923005552424?text=EMERGENCY%3A%20I%20have%20an%20urgent%20dental%20emergency%20in%20Rawalpindi."
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center block transition"
            >
              WhatsApp Emergency SOS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
