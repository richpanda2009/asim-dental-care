import React, { useState } from 'react';
import { Search, Filter, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { PageRoute, Treatment } from '../types';

interface ServicesPageProps {
  onNavigate: (route: PageRoute, data?: any) => void;
  onOpenBooking: (treatmentId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Restorative', 'Cosmetic', 'Orthodontics', 'Preventive', 'Surgical', 'Emergency'];

  const filteredTreatments = TREATMENTS_DATA.filter((t) => {
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch = 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Modern & Painless Dentistry in Rawalpindi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Our Dental Treatments & Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every procedure at Asim Dental Care is executed with high-precision digital equipment, computerized local anesthesia, and transparent Pakistani Rupee (PKR) pricing.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search treatments (e.g. RCT, Implants)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white text-slate-900 text-xs rounded-2xl pl-10 pr-4 py-3 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-xs"
          />
        </div>
      </div>

      {/* Treatments List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTreatments.map((treatment) => (
          <div
            key={treatment.id}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-sky-300 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                  {treatment.category}
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {treatment.painLevel.split('(')[0]}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-600 transition">
                  {treatment.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {treatment.shortDesc}
                </p>
              </div>

              {/* Price & Duration */}
              <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Estimated PKR:</span>
                  <span className="text-sm font-black text-slate-900">
                    PKR {treatment.priceRangePKR.min.toLocaleString()} – {treatment.priceRangePKR.max.toLocaleString()}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 block">{treatment.priceRangePKR.unit}</span>
              </div>

              {/* Key Benefits */}
              <div className="space-y-1.5 pt-1">
                {treatment.benefits.slice(0, 2).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2">
              <button
                onClick={() => onNavigate('treatment-detail', treatment.slug)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition flex items-center justify-center gap-1"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
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
    </div>
  );
};
