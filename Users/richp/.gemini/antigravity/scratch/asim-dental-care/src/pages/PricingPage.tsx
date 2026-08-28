import React, { useState } from 'react';
import { 
  Calculator, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  HelpCircle, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { CostEstimatorWidget } from '../components/home/CostEstimatorWidget';
import { PageRoute } from '../types';

interface PricingPageProps {
  onNavigate: (route: PageRoute, data?: any) => void;
  onOpenBooking: (treatmentId?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = TREATMENTS_DATA.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>100% Price Transparency Guarantee • No Hidden Charges</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Dental Treatment Costs in Pakistan (PKR)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We believe you deserve clear, upfront pricing before you sit in the dental chair. Compare procedure rates, explore 0% interest monthly installment plans, and calculate your custom estimate below.
          </p>
        </div>
      </div>

      {/* Interactive PKR Cost Calculator */}
      <div className="space-y-4">
        <h2 className="text-2xl font-black text-slate-900">
          Interactive Live Dental Fee Calculator
        </h2>
        <CostEstimatorWidget onBookEstimated={() => onOpenBooking()} />
      </div>

      {/* Comprehensive Price List Table */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200/80 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Standard Treatment Fee Schedule
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              All prices include consultation, sterilization kit charge, and follow-up suture/dressing review.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search treatment or cost..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 text-slate-900 text-xs rounded-2xl pl-10 pr-4 py-2.5 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4 rounded-l-xl">Dental Treatment</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Duration</th>
                <th className="py-3.5 px-4">Standard Price (PKR)</th>
                <th className="py-3.5 px-4">Installment / mo</th>
                <th className="py-3.5 px-4 rounded-r-xl text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((t) => (
                <tr key={t.id} className="hover:bg-sky-50/40 transition">
                  <td className="py-4 px-4 font-bold text-slate-900">
                    <button
                      onClick={() => onNavigate('treatment-detail', t.slug)}
                      className="hover:text-sky-600 text-left"
                    >
                      {t.name}
                    </button>
                    <span className="block text-[10px] text-slate-500 font-normal">{t.priceRangePKR.unit}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                      {t.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-600 font-medium">
                    {t.duration.split('(')[0]}
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-black text-slate-900 text-sm">
                      PKR {t.priceRangePKR.min.toLocaleString()} – {t.priceRangePKR.max.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md text-[11px]">
                      ~ PKR {Math.round(t.priceRangePKR.min / 6).toLocaleString()}/mo
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => onOpenBooking(t.id)}
                      className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition shadow-xs"
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment & Installment Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 space-y-3">
          <div className="h-10 w-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
            <CreditCard className="h-5 w-5" />
          </div>
          <h3 className="text-base font-black text-slate-900">0% Markup Installment Plans</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Split high-value procedures like Dental Implants, Full-Mouth Veneers, and Braces into 3 to 12 monthly installments with 0% interest via partner Pakistani banks.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 space-y-3">
          <div className="h-10 w-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="text-base font-black text-slate-900">Corporate & Panel Discounts</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Special institutional discounts available for Armed Forces / AFID families, Askari Bank, Fauji Foundation, NUST, and telecom corporate employees.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 space-y-3">
          <div className="h-10 w-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="text-base font-black text-slate-900">Digital Payment Flexibility</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We accept all major Visa/MasterCard debit/credit cards, 1Link Raast QR, JazzCash, EasyPaisa, SadaPay, and Nayapay for effortless transactions.
          </p>
        </div>
      </div>
    </div>
  );
};
