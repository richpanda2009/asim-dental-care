import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, CreditCard } from 'lucide-react';
import { TREATMENTS_DATA } from '../../data/treatmentsData';

interface CostEstimatorWidgetProps {
  onBookEstimated?: (treatmentName: string, estimatedCost: number) => void;
}

export const CostEstimatorWidget: React.FC<CostEstimatorWidgetProps> = ({ onBookEstimated }) => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(TREATMENTS_DATA[0].id);
  const [unitCount, setUnitCount] = useState<number>(1);
  const [materialGrade, setMaterialGrade] = useState<'standard' | 'premium' | 'swiss'>('premium');
  const [installmentMonths, setInstallmentMonths] = useState<3 | 6 | 12>(6);

  const selectedTreatment = TREATMENTS_DATA.find(t => t.id === selectedTreatmentId) || TREATMENTS_DATA[0];

  // Calculation Logic
  const getMultiplier = () => {
    if (materialGrade === 'standard') return 1.0;
    if (materialGrade === 'premium') return 1.35;
    return 1.7; // Swiss / Ultra grade
  };

  const basePrice = selectedTreatment.priceRangePKR.min;
  const estimatedTotal = Math.round(basePrice * unitCount * getMultiplier());
  const monthlyInstallment = Math.round(estimatedTotal / installmentMonths);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-sky-900/40 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Form Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30 mb-2">
              <Calculator className="h-3.5 w-3.5" />
              <span>Transparent PKR Dental Calculator</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Instant Treatment Cost Estimator
            </h3>
            <p className="text-xs md:text-sm text-slate-300 mt-1">
              Calculate realistic treatment prices in Pakistani Rupees with zero surprise fees or hidden charges.
            </p>
          </div>

          <div className="space-y-4">
            {/* 1. Select Treatment */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                1. Select Dental Treatment:
              </label>
              <select
                value={selectedTreatmentId}
                onChange={(e) => setSelectedTreatmentId(e.target.value)}
                className="w-full bg-slate-800/90 text-white text-sm font-medium rounded-2xl px-4 py-3 border border-slate-700 focus:border-sky-500 focus:outline-none transition"
              >
                {TREATMENTS_DATA.map(t => (
                  <option key={t.id} value={t.id} className="bg-slate-900 text-white">
                    {t.name} (Starts ~ PKR {t.priceRangePKR.min.toLocaleString()})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Number of Teeth / Sessions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  2. Number of Teeth / Units:
                </label>
                <div className="flex items-center bg-slate-800/90 rounded-2xl border border-slate-700 p-1">
                  {[1, 2, 4, 6, 8].map(count => (
                    <button
                      key={count}
                      onClick={() => setUnitCount(count)}
                      className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${
                        unitCount === count
                          ? 'bg-sky-500 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {count} {count === 1 ? 'Unit' : 'Units'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Material Tier */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  3. Material & Technology Tier:
                </label>
                <div className="flex items-center bg-slate-800/90 rounded-2xl border border-slate-700 p-1">
                  {[
                    { id: 'standard', label: 'Standard' },
                    { id: 'premium', label: 'German' },
                    { id: 'swiss', label: 'Swiss Master' }
                  ].map(tier => (
                    <button
                      key={tier.id}
                      onClick={() => setMaterialGrade(tier.id as any)}
                      className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition ${
                        materialGrade === tier.id
                          ? 'bg-sky-500 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Summary Card & Installment Calculation */}
        <div className="lg:col-span-5 bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 border border-sky-500/20 shadow-2xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
              <span className="text-xs font-medium text-slate-400">Selected Treatment</span>
              <span className="text-xs font-bold text-sky-300 text-right">{selectedTreatment.name}</span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 block">Estimated Total Cost:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  PKR {estimatedTotal.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-medium">approx.</span>
              </div>
              <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                Includes Consultation, Diagnostic RVG & 100% Sterile Kit
              </p>
            </div>

            {/* 0% Markup Installment Plan Option */}
            <div className="bg-slate-900/90 rounded-2xl p-3.5 border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <CreditCard className="h-3.5 w-3.5" />
                  <span>0% Markup Installment Plan</span>
                </div>
                <div className="flex gap-1 text-[10px] font-bold">
                  {([3, 6, 12] as const).map(m => (
                    <button
                      key={m}
                      onClick={() => setInstallmentMonths(m)}
                      className={`px-2 py-0.5 rounded-lg transition ${
                        installmentMonths === m
                          ? 'bg-amber-400 text-slate-900'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {m} Mo
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <span className="text-xs text-slate-400">Monthly payment:</span>
                <span className="text-base font-bold text-amber-300">
                  PKR {monthlyInstallment.toLocaleString()} / mo
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Via Bank Alfalah, Meezan, Nayapay, EasyPaisa or In-House Clinic Schedule.
              </p>
            </div>
          </div>

          <button
            onClick={() => onBookEstimated?.(selectedTreatment.name, estimatedTotal)}
            className="w-full mt-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-slate-950 font-black text-xs md:text-sm tracking-wide transition shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 group"
          >
            <span>Book Consultation For This Plan</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
