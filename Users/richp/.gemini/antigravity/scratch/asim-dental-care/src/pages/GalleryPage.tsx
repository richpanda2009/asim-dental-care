import React, { useState } from 'react';
import { Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
import { GALLERY_CASES } from '../data/galleryData';
import { BeforeAfterSlider } from '../components/home/BeforeAfterSlider';
import { PageRoute } from '../types';

interface GalleryPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: (treatmentId?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Smile Makeover', 'Root Canal', 'Dental Implants', 'Braces & Aligners', 'Teeth Whitening', 'Veneers'];

  const filteredCases = GALLERY_CASES.filter((c) => {
    return selectedCategory === 'All' || c.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Visual Proof of Clinical Mastery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Before & After Smile Transformation Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Explore authentic case outcomes treated at Asim Dental Care Rawalpindi. All clinical photographs are published with verified patient informed consent.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
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

      {/* Featured Interactive Comparison Slider */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-900">
          Interactive Split-Screen Transformation Explorer
        </h2>
        <BeforeAfterSlider onBookTreatment={() => onOpenBooking()} />
      </div>

      {/* Grid of Other Real Cases */}
      <div className="space-y-6 pt-6">
        <h2 className="text-2xl font-black text-slate-900">
          All Clinical Case Studies ({filteredCases.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                    {caseItem.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    ⏱ {caseItem.duration}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900">{caseItem.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{caseItem.description}</p>

                {/* Before & After Dual Thumbnail */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="relative rounded-2xl overflow-hidden h-40 bg-slate-900 border border-slate-200">
                    <img
                      src={caseItem.beforeImage}
                      alt="Before treatment"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      BEFORE
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden h-40 bg-slate-900 border border-emerald-300">
                    <img
                      src={caseItem.afterImage}
                      alt="After treatment"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-emerald-700/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      AFTER
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs text-slate-700">
                  <span className="font-bold text-slate-900">Dentist Notes: </span>
                  <span>{caseItem.dentistNotes}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">{caseItem.patientAgeGender}</span>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold transition flex items-center gap-1"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
