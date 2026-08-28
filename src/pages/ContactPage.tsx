import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Navigation,
  Car,
  Bus
} from 'lucide-react';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Appointment Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
            <MapPin className="h-3.5 w-3.5" />
            <span>Rawalpindi City Center Location</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Contact & Landmark Navigation
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Conveniently located on Main Peshawar Road, Saddar, Rawalpindi. Easy access via Metro Bus, private car parking, and ride-hailing services.
          </p>
        </div>
      </div>

      {/* 2-Column Contact Info & Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Info & Landmark Directions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Visit Asim Dental Care
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Call our reception directly or start a chat on WhatsApp for fast response.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="h-10 w-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="font-black text-sm text-slate-900">Call Reception</h3>
              <a href="tel:+923005552424" className="text-xs font-bold text-emerald-600 hover:underline block">
                0300-5552424 (Mobile/WhatsApp)
              </a>
              <a href="tel:+92515552424" className="text-xs text-slate-600 hover:underline block">
                051-5552424 (PTCL Landline)
              </a>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="h-10 w-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-black text-sm text-slate-900">Working Hours</h3>
              <p className="text-xs text-slate-700 font-semibold">Mon – Sat: 11:00 AM – 9:00 PM</p>
              <p className="text-[11px] text-amber-700 font-bold">Friday Break: 1:00 PM – 2:30 PM (Jummah)</p>
              <p className="text-[11px] text-slate-500">Sunday: 2:00 PM – 7:00 PM (Emergency)</p>
            </div>
          </div>

          {/* Landmark Navigation Guide */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-md space-y-4">
            <h3 className="text-base font-black flex items-center gap-2 text-white">
              <Navigation className="h-4 w-4 text-sky-400" />
              <span>How to Reach Us (Landmarks Guide)</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Full Address: </strong>
                  <span>Plaza 42, 2nd Floor, Main Peshawar Road, Saddar, Rawalpindi, Punjab, Pakistan.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Car className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">By Car / Bike: </strong>
                  <span>Directly opposite Shell Petrol Pump on Peshawar Road, just 200 meters before Westridge entry gate. Dedicated basement patient parking available.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Bus className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">By Metro Bus: </strong>
                  <span>Disembark at Saddar Metro Bus Station. Take a 3-minute cab/rickshaw or 7-minute walk towards Peshawar Road.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200/80">
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Message Received!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you for contacting Asim Dental Care. Our front-desk coordinator will call or WhatsApp you within 30 minutes.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-bold text-sky-600 underline"
              >
                Send Another Query
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-black text-slate-900">
                Send an Inquiry to Doctor Desk
              </h3>
              <p className="text-xs text-slate-500">
                Fill this form for cost quotes, second opinions, or general clinic questions.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mahmood"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-2xl p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-2xl p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="tariq@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-2xl p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Topic / Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-2xl p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="Appointment Inquiry">Appointment Booking Inquiry</option>
                  <option value="Cost & Installment Quote">Treatment Cost & Installment Quote</option>
                  <option value="Implant Consultation">Dental Implant Consultation with Dr. Asim</option>
                  <option value="Orthodontics Braces">Braces & Aligners Inquiry</option>
                  <option value="Emergency Toothache">Urgent Toothache / Emergency Visit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Message or Clinical Symptoms
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe what you need assistance with..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-2xl p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs md:text-sm transition shadow-md shadow-sky-600/20 flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Embedded Interactive Google Map Mockup */}
      <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-black text-slate-900">
              Interactive Google Maps Location: Asim Dental Care Rawalpindi
            </h3>
            <p className="text-xs text-slate-500">
              GPS Coordinates: 33.5989° N, 73.0441° E (Main Peshawar Road Saddar)
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Peshawar+Road+Saddar+Rawalpindi"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold transition flex items-center gap-1.5"
          >
            <span>Open in Google Maps App</span>
          </a>
        </div>

        {/* Stylized Google Map Frame */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-slate-200 border border-slate-300">
          <iframe
            title="Asim Dental Care Rawalpindi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.836067746973!2d73.0335836!3d33.5988891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df937b2d5a3f25%3A0x6b772c916d7a974b!2sSaddar%2C%20Rawalpindi%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};
