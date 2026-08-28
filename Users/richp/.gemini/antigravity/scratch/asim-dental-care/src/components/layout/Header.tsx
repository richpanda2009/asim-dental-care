import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  Clock, 
  MapPin, 
  Search,
  Lock
} from 'lucide-react';
import { PageRoute } from '../../types';
import { TREATMENTS_DATA } from '../../data/treatmentsData';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, data?: any) => void;
  onOpenBooking: (treatmentId?: string) => void;
  onOpenLookup: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenBooking,
  onOpenLookup
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute; hasDropdown?: boolean }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Treatments', route: 'services', hasDropdown: true },
    { label: 'Pricing & PKR Cost', route: 'pricing' },
    { label: 'Before & After', route: 'gallery' },
    { label: 'Meet Doctors', route: 'about' },
    { label: 'Modern Tech', route: 'technology' },
    { label: 'Blog & Education', route: 'blog' },
    { label: 'Location & Contact', route: 'contact' }
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? 'glass-panel shadow-md border-b border-slate-200/80 backdrop-blur-xl' 
        : 'bg-white/95 border-b border-slate-100'
    }`}>
      {/* Top Utility Bar (Contact, Timings, Landmark) */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-sky-400" />
              <span>Plaza 42, Main Peshawar Road, Saddar, Rawalpindi</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="h-3.5 w-3.5 text-emerald-400" />
              <span>Mon–Sat: 11:00 AM – 9:00 PM <span className="text-amber-400">(Fri Break: 1:00–2:30 PM)</span></span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenLookup}
              className="text-sky-300 hover:text-white transition flex items-center gap-1 text-[11px] font-medium"
            >
              <Search className="h-3 w-3" />
              Manage / Reschedule Appointment
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onNavigate('admin')}
              className="text-slate-400 hover:text-sky-300 transition flex items-center gap-1 text-[11px]"
              title="Staff Admin Portal"
            >
              <Lock className="h-3 w-3" />
              Staff Login
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-teal-400 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="h-full w-full bg-white rounded-[14px] flex items-center justify-center text-sky-600 font-black text-xl">
                🦷
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-900 font-sans">
                  ASIM <span className="text-sky-600">DENTAL</span>
                </span>
                <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-sky-200">
                  PMDC Reg.
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Advanced & Pain-Free Dental Care • Rawalpindi
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-700">
            {navLinks.map(link => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.route}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('services')}
                      className={`px-3 py-2 rounded-xl transition flex items-center gap-1 ${
                        currentRoute === 'services' || currentRoute === 'treatment-detail'
                          ? 'text-sky-600 font-bold bg-sky-50'
                          : 'hover:text-sky-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </button>

                    {/* Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 mb-1">
                          Key Treatments & Procedures
                        </div>
                        <div className="space-y-1">
                          {TREATMENTS_DATA.slice(0, 6).map(t => (
                            <button
                              key={t.id}
                              onClick={() => {
                                onNavigate('treatment-detail', t.slug);
                                setServicesDropdownOpen(false);
                              }}
                              className="w-full text-left px-2.5 py-2 rounded-xl hover:bg-sky-50 transition group flex items-start justify-between"
                            >
                              <div>
                                <div className="text-xs font-bold text-slate-800 group-hover:text-sky-600">
                                  {t.name}
                                </div>
                                <div className="text-[11px] text-slate-500 line-clamp-1">
                                  From PKR {t.priceRangePKR.min.toLocaleString()}
                                </div>
                              </div>
                              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                {t.category}
                              </span>
                            </button>
                          ))}
                        </div>
                        <div className="border-t border-slate-100 mt-2 pt-2 px-2">
                          <button
                            onClick={() => {
                              onNavigate('services');
                              setServicesDropdownOpen(false);
                            }}
                            className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center justify-between w-full"
                          >
                            <span>View All 10 Dental Services →</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.route}
                  onClick={() => onNavigate(link.route)}
                  className={`px-3 py-2 rounded-xl transition ${
                    currentRoute === link.route
                      ? 'text-sky-600 font-bold bg-sky-50'
                      : 'hover:text-sky-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Call Button */}
            <a
              href="tel:+923005552424"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition shadow-sm"
              title="Tap to Call Rawalpindi Clinic"
            >
              <div className="h-6 w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <Phone className="h-3 w-3" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-500 font-normal block leading-none">Tap to Call</span>
                <span className="leading-tight">0300-5552424</span>
              </div>
            </a>

            {/* Primary Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white text-xs md:text-sm font-bold shadow-md shadow-sky-500/25 hover:shadow-lg transition-all flex items-center gap-2 transform active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map(link => (
              <button
                key={link.route}
                onClick={() => {
                  onNavigate(link.route);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium ${
                  currentRoute === link.route
                    ? 'bg-sky-50 text-sky-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenLookup();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-sky-700 bg-sky-50/60"
            >
              🔍 Manage / Reschedule Appointment
            </button>
            <button
              onClick={() => {
                onNavigate('admin');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500"
            >
              🔒 Staff Admin Portal
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href="tel:+923005552424"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-600" />
              Call Now: 0300-5552424 / 051-5552424
            </a>
            <a
              href="https://wa.me/923005552424?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20dental%20treatments%20at%20Asim%20Dental%20Care%20Rawalpindi."
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
