import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Heart, 
  MessageSquare, 
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { PageRoute } from '../../types';
import { TREATMENTS_DATA } from '../../data/treatmentsData';

interface FooterProps {
  onNavigate: (route: PageRoute, data?: any) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-400 p-0.5 flex items-center justify-center">
                <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center text-sky-400 font-black text-lg">
                  🦷
                </div>
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white">
                  ASIM <span className="text-sky-400">DENTAL CARE</span>
                </span>
                <p className="text-[11px] text-slate-400 font-medium">
                  Premier Dental Surgery & Implant Center
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Serving the Twin Cities (Rawalpindi & Islamabad) with modern, compassionate, and 100% sterile dental care. We specialize in pain-free root canals, Swiss dental implants, invisible aligners, and aesthetic smile makeovers.
            </p>

            {/* PMDC Trust Badge */}
            <div className="bg-slate-900/90 rounded-2xl p-3.5 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>Verified PMDC Registered Practitioners</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Dr. Muhammad Asim (PMDC Reg # 14892-D) • Class-B Autoclave Sterilization Protocols.
              </p>
            </div>

            {/* Social / WhatsApp Quick Action */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/923005552424"
                target="_blank"
                rel="noreferrer"
                className="h-9 px-3 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white transition text-xs font-semibold flex items-center gap-1.5 border border-emerald-500/30"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp Desk</span>
              </a>
              <button
                onClick={() => onNavigate('admin')}
                className="h-9 px-3 rounded-xl bg-slate-900 text-slate-400 hover:text-white transition text-xs flex items-center gap-1 border border-slate-800"
              >
                Staff Portal
              </button>
            </div>
          </div>

          {/* Col 2: Treatments & Procedures */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Treatments & Services
            </h4>
            <ul className="space-y-2 text-xs">
              {TREATMENTS_DATA.slice(0, 7).map(t => (
                <li key={t.id}>
                  <button
                    onClick={() => onNavigate('treatment-detail', t.slug)}
                    className="hover:text-sky-400 transition flex items-center gap-1.5 text-left"
                  >
                    <ChevronRight className="h-3 w-3 text-sky-500 shrink-0" />
                    <span>{t.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-sky-400 font-semibold hover:underline flex items-center gap-1 pt-1"
                >
                  View All Procedures & Prices →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Patient Quick Links & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-sky-400 transition">
                  PKR Pricing & Costs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-sky-400 transition">
                  Before & After Cases
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-sky-400 transition">
                  Meet Doctor Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('technology')} className="hover:text-sky-400 transition">
                  Sterilization & 3D Tech
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-sky-400 transition">
                  Patient Health Articles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('emergency')} className="text-red-400 hover:text-red-300 font-semibold transition flex items-center gap-1">
                  <span>Emergency Dental Care</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-sky-400 transition">
                  Landmark Navigation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Location, Landmark & Timings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Rawalpindi Clinic Info
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Plaza 42, Main Peshawar Road</p>
                  <p className="text-slate-400">Saddar / Westridge Entry, Rawalpindi</p>
                  <p className="text-[11px] text-amber-400 font-medium mt-0.5">
                    (Opposite Shell Pump • 2 Mins from Saddar Metro)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+923005552424" className="text-white font-bold hover:text-emerald-400 block">
                    Mobile: 0300-5552424
                  </a>
                  <a href="tel:+92515552424" className="text-slate-300 hover:text-white block">
                    Landline: 051-5552424
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Mon – Sat: 11:00 AM – 9:00 PM</p>
                  <p className="text-amber-300 font-semibold text-[11px]">
                    Friday Prayer Break: 1:00 PM – 2:30 PM
                  </p>
                  <p className="text-slate-400 text-[11px]">Sunday: 2:00 PM – 7:00 PM (Emergency Only)</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition shadow-md shadow-sky-600/20"
            >
              Book Online Now
            </button>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Asim Dental Care Rawalpindi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>PMDC Approved</span>
            <span>•</span>
            <span>Class-B Sterilized</span>
            <span>•</span>
            <span>Rawalpindi & Islamabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
