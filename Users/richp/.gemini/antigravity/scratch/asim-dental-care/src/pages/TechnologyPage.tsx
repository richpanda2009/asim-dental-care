import React from 'react';
import { Sparkles, ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import { PageRoute } from '../types';

interface TechnologyPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Digital Dentistry & Patient Safety</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Advanced Dental Technology & Sterilization
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Discover how European 3D imaging, computer-assisted anesthesia, and vacuum sterilization make your dental treatment dramatically faster, safer, and 100% painless.
          </p>
        </div>
      </div>

      {/* Equipment Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EQUIPMENT_DATA.map((equip) => (
          <div
            key={equip.id}
            className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                  {equip.category}
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  {equip.origin}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900">{equip.name}</h3>
                <p className="text-xs font-bold text-sky-600 mt-0.5">{equip.model}</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {equip.description}
              </p>

              <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100 space-y-1">
                <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider block">
                  Patient Advantage:
                </span>
                <p className="text-xs text-emerald-800 font-medium">
                  {equip.patientAdvantage}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                ✓ {equip.badge}
              </span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-bold text-sky-600 hover:text-sky-700"
              >
                Experience Tech →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hospital-Grade Sterilization Callout */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black">
              Our 6-Stage Hospital Sterilization Protocol
            </h2>
            <p className="text-xs text-slate-400">Zero tolerance for cross-infection in Rawalpindi</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {[
            { title: '1. Enzymatic Pre-Disinfection', desc: 'Instruments soaked in medical-grade microbial bio-decontaminants.' },
            { title: '2. Ultrasonic Cavitation Cleaning', desc: 'High-frequency sound waves shake off microscopic debris.' },
            { title: '3. Inspection & Anti-Rust Drying', desc: 'Visual optical check and moisture removal under heat.' },
            { title: '4. Sealed Pouch Packaging', desc: 'Individually heat-sealed in transparent medical pouches with chemical indicators.' },
            { title: '5. Class-B Fractional Vacuum Autoclaving', desc: 'Sterilized at 134°C under 3-bar vacuum pressure destroying all viruses.' },
            { title: '6. Chairside Pouch Opening', desc: 'Pouches are cut open in front of your eyes just before treatment begins.' }
          ].map((step, idx) => (
            <div key={idx} className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1">
              <h4 className="font-bold text-white text-sm">{step.title}</h4>
              <p className="text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
