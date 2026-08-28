import React from 'react';
import { AlertCircle, PhoneCall, Zap, Clock } from 'lucide-react';
import { PageRoute } from '../../types';

interface EmergencyBannerProps {
  onNavigate: (route: PageRoute) => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white px-4 py-2 text-xs md:text-sm font-medium shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="font-bold uppercase tracking-wider text-[11px] bg-black/20 px-2 py-0.5 rounded-full border border-white/20">
            Emergency Triage
          </span>
          <span className="hidden sm:inline">Severe toothache, trauma, or knocked-out tooth? Same-day relief guaranteed.</span>
          <span className="sm:hidden font-semibold">Dental Emergency in Rawalpindi?</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('emergency')}
            className="underline underline-offset-2 hover:text-white/90 text-xs font-semibold flex items-center gap-1"
          >
            <Zap className="h-3.5 w-3.5" />
            Fast-Track Protocol
          </button>
          <span className="text-white/40">|</span>
          <a
            href="tel:+923005552424"
            className="bg-white text-red-700 font-bold px-2.5 py-0.5 rounded-full text-xs hover:bg-slate-100 transition shadow-sm flex items-center gap-1"
          >
            <PhoneCall className="h-3 w-3" />
            0300-5552424
          </a>
        </div>
      </div>
    </div>
  );
};
