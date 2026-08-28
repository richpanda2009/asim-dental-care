import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { GALLERY_CASES } from '../../data/galleryData';
import { GalleryCase } from '../../types';

interface BeforeAfterSliderProps {
  initialCase?: GalleryCase;
  onBookTreatment?: (treatmentName: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
  initialCase,
  onBookTreatment 
}) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = initialCase || GALLERY_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchend', handlePointerUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handlePointerUp]);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
            Real Patient Transformations
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
            {currentCase.title}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {currentCase.patientAgeGender} • Duration: <span className="font-semibold text-slate-700">{currentCase.duration}</span>
          </p>
        </div>

        {/* Case Switcher Carousel Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveCaseIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_CASES.length - 1))}
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            aria-label="Previous Case"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-xs font-bold text-slate-500 px-2">
            {activeCaseIndex + 1} / {GALLERY_CASES.length}
          </span>
          <button
            onClick={() => setActiveCaseIndex((prev) => (prev < GALLERY_CASES.length - 1 ? prev + 1 : 0))}
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            aria-label="Next Case"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Split-Screen Image Slider Canvas */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative w-full h-[320px] md:h-[440px] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-slate-900 shadow-inner"
      >
        {/* AFTER Image (Full background layer) */}
        <img
          src={currentCase.afterImage}
          alt="After treatment result"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1 z-10">
          <CheckCircle className="h-3 w-3" />
          <span>AFTER (Asim Dental Care)</span>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={currentCase.beforeImage}
            alt="Before treatment condition"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-95"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-md z-10">
            BEFORE Treatment
          </div>
        </div>

        {/* Draggable Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="h-10 w-10 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center border-2 border-sky-500 font-bold">
            <div className="flex items-center gap-0.5 text-sky-600">
              <ChevronLeft className="h-3.5 w-3.5 -mr-1" />
              <ChevronRight className="h-3.5 w-3.5 -ml-1" />
            </div>
          </div>
        </div>

        {/* Bottom Helper text */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[11px] font-medium border border-white/20 shadow-lg pointer-events-none">
          ◀ Slide left or right to compare transformation ▶
        </div>
      </div>

      {/* Case Details & Patient Quote */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-2">
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            {currentCase.description}
          </p>
          <div className="bg-sky-50/70 p-3 rounded-2xl border border-sky-100 text-xs text-sky-900">
            <span className="font-bold text-sky-800">Clinical Protocol: </span>
            <span>{currentCase.dentistNotes}</span>
          </div>
          {currentCase.patientQuote && (
            <blockquote className="text-xs italic text-slate-500 pl-3 border-l-2 border-emerald-400">
              {currentCase.patientQuote}
            </blockquote>
          )}
        </div>

        <div className="md:col-span-4 flex flex-col justify-end items-stretch md:items-end">
          <button
            onClick={() => onBookTreatment?.(currentCase.treatmentName)}
            className="w-full md:w-auto px-5 py-3 rounded-2xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs transition shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Book Similar Treatment</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-[11px] text-slate-400 text-center md:text-right mt-1.5">
            100% Patient Consent Obtained
          </span>
        </div>
      </div>
    </div>
  );
};
