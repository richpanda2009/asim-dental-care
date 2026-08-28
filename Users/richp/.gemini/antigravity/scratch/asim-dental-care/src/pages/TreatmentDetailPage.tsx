import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  ArrowLeft, 
  Phone, 
  MessageSquare,
  Activity
} from 'lucide-react';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { PageRoute, Treatment } from '../types';

interface TreatmentDetailPageProps {
  slug?: string;
  onNavigate: (route: PageRoute, data?: any) => void;
  onOpenBooking: (treatmentId?: string) => void;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBooking
}) => {
  const treatment = TREATMENTS_DATA.find((t) => t.slug === slug) || TREATMENTS_DATA[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('services')}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-sky-600 transition"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to All Dental Treatments</span>
      </button>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
              {treatment.category} Procedure
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {treatment.painLevel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            {treatment.name}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            {treatment.longDesc}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div>
              <span className="text-[11px] text-slate-400 block">Estimated Cost:</span>
              <span className="text-base sm:text-lg font-black text-white">
                PKR {treatment.priceRangePKR.min.toLocaleString()} – {treatment.priceRangePKR.max.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Procedure Duration:</span>
              <span className="text-xs sm:text-sm font-bold text-sky-300">{treatment.duration}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-400 block">Anesthesia Protocol:</span>
              <span className="text-xs font-bold text-emerald-300">{treatment.anesthesiaType}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => onOpenBooking(treatment.id)}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 font-black text-xs md:text-sm transition shadow-lg shadow-sky-500/25 flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment for {treatment.name.split(' ')[0]}</span>
            </button>

            <a
              href={`https://wa.me/923005552424?text=Hi%2C%20I%20have%20a%20question%20about%20${encodeURIComponent(treatment.name)}%20at%20Asim%20Dental%20Care.`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm transition flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2-Column Details: Procedure Steps & Ideal Candidates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Step-by-Step Procedure */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              How the Procedure Works (Step-by-Step)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              We explain every phase clearly with no intimidating medical jargon.
            </p>
          </div>

          <div className="space-y-4">
            {treatment.procedureSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex items-start gap-4"
              >
                <div className="h-9 w-9 rounded-2xl bg-sky-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {step.step}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recovery Timeline */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-4">
            <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
              <Clock className="h-4 w-4 text-sky-600" />
              <span>Expected Recovery & Healing Timeline</span>
            </h3>
            <div className="space-y-3">
              {treatment.recoveryTimeline.map((rec, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <span className="font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded shrink-0">
                    {rec.period}:
                  </span>
                  <span className="text-slate-600">{rec.expectation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Who Is This For & Benefits */}
        <div className="lg:col-span-5 space-y-6">
          {/* Ideal For */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 space-y-4">
            <h3 className="font-black text-base text-slate-900">
              When Do You Need This Treatment?
            </h3>
            <div className="space-y-2.5">
              {treatment.idealFor.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <Activity className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-emerald-50/70 rounded-3xl p-6 border border-emerald-200/80 space-y-4">
            <h3 className="font-black text-base text-emerald-950">
              Key Patient Benefits
            </h3>
            <div className="space-y-2.5">
              {treatment.benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-emerald-900">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Post-Op Aftercare Tips */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 space-y-4">
            <h3 className="font-black text-base text-slate-900">
              Post-Procedure Care Tips
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {treatment.aftercareTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Treatment Specific FAQs */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-200 space-y-6">
        <div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-2">
            Questions About {treatment.name}
          </h2>
        </div>

        <div className="space-y-3">
          {treatment.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl overflow-hidden transition"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100/80 transition flex items-center justify-between gap-3 text-xs md:text-sm font-bold text-slate-900"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-500 transition-transform ${
                    openFaqIndex === idx ? 'rotate-180 text-sky-600' : ''
                  }`}
                />
              </button>

              {openFaqIndex === idx && (
                <div className="p-4 bg-white text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
