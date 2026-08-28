import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Download, 
  Share2, 
  AlertCircle,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TREATMENTS_DATA } from '../../data/treatmentsData';
import { DOCTORS_DATA } from '../../data/doctorsData';
import { createAppointment, generateCalendarICS } from '../../services/appointmentStore';
import { Appointment } from '../../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentId?: string;
  initialDoctorId?: string;
  isEmergencyDefault?: boolean;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatmentId,
  initialDoctorId,
  isEmergencyDefault = false
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [treatmentId, setTreatmentId] = useState<string>(initialTreatmentId || TREATMENTS_DATA[0].id);
  const [doctorId, setDoctorId] = useState<string>(initialDoctorId || DOCTORS_DATA[0].id);
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('04:30 PM - 05:30 PM');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('+92 3');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isEmergency, setIsEmergency] = useState<boolean>(isEmergencyDefault);
  const [createdBooking, setCreatedBooking] = useState<Appointment | null>(null);

  useEffect(() => {
    if (initialTreatmentId) setTreatmentId(initialTreatmentId);
    if (initialDoctorId) setDoctorId(initialDoctorId);
    if (isEmergencyDefault) setIsEmergency(true);
  }, [initialTreatmentId, initialDoctorId, isEmergencyDefault]);

  if (!isOpen) return null;

  const timeSlots = [
    '11:30 AM - 12:30 PM',
    '12:30 PM - 01:30 PM',
    '03:00 PM - 04:00 PM',
    '04:30 PM - 05:30 PM',
    '05:30 PM - 06:30 PM',
    '06:30 PM - 07:30 PM',
    '07:30 PM - 08:30 PM'
  ];

  const selectedTreatment = TREATMENTS_DATA.find(t => t.id === treatmentId) || TREATMENTS_DATA[0];
  const selectedDoctor = DOCTORS_DATA.find(d => d.id === doctorId) || DOCTORS_DATA[0];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Create Appointment Record
      const newBooking = createAppointment({
        patientName: name.trim() || 'Valued Patient',
        patientPhone: phone.trim(),
        patientEmail: email.trim(),
        treatmentId: selectedTreatment.id,
        treatmentName: selectedTreatment.name,
        doctorId: selectedDoctor.id,
        doctorName: selectedDoctor.name,
        preferredDate: date,
        preferredTimeSlot: timeSlot,
        notes: notes.trim(),
        isEmergency
      });

      setCreatedBooking(newBooking);
      setStep(4);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDownloadCalendar = () => {
    if (!createdBooking) return;
    const icsContent = generateCalendarICS(createdBooking);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `AsimDentalCare-${createdBooking.bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareWhatsApp = () => {
    if (!createdBooking) return;
    const text = `Assalam-o-Alaikum, I have booked an appointment at Asim Dental Care Rawalpindi.\n\n• Booking Ref: ${createdBooking.bookingRef}\n• Patient Name: ${createdBooking.patientName}\n• Treatment: ${createdBooking.treatmentName}\n• Doctor: ${createdBooking.doctorName}\n• Date: ${createdBooking.preferredDate}\n• Time: ${createdBooking.preferredTimeSlot}\n\nPlease confirm my slot. Thank you!`;
    window.open(`https://wa.me/923005552424?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header with Step Progress */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-teal-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-sky-200 uppercase tracking-wider mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Asim Dental Care • Online Appointment Engine</span>
          </div>

          <h3 className="text-xl md:text-2xl font-black">
            {step === 4 ? 'Appointment Confirmed! 🎉' : 'Book Your Dental Visit'}
          </h3>
          <p className="text-xs text-sky-100 mt-0.5">
            Rawalpindi Clinic (Peshawar Road, Saddar) • Fast Confirmation via WhatsApp/SMS
          </p>

          {/* Stepper Indicator */}
          {step < 4 && (
            <div className="flex items-center justify-between mt-4 max-w-sm">
              {[
                { num: 1, label: 'Procedure' },
                { num: 2, label: 'Date & Time' },
                { num: 3, label: 'Patient Info' }
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
                      step === s.num
                        ? 'bg-white text-sky-700 shadow-md'
                        : step > s.num
                        ? 'bg-emerald-400 text-slate-900'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {step > s.num ? '✓' : s.num}
                  </div>
                  <span className={`text-xs font-medium ${step === s.num ? 'text-white font-bold' : 'text-sky-200'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <form onSubmit={handleNextStep} className="p-6 md:p-8 space-y-6">
          {/* STEP 1: Select Treatment & Doctor */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Emergency Checkbox */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-red-900 block">Is this an acute dental emergency?</span>
                    <span className="text-[11px] text-red-700">Same-day priority walk-in slot will be reserved.</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={isEmergency}
                  onChange={(e) => setIsEmergency(e.target.checked)}
                  className="h-5 w-5 rounded text-red-600 focus:ring-red-500 border-red-300"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Required Treatment:
                </label>
                <select
                  value={treatmentId}
                  onChange={(e) => setTreatmentId(e.target.value)}
                  className="w-full bg-slate-50 text-slate-900 text-sm font-medium rounded-2xl p-3.5 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  {TREATMENTS_DATA.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name} (PKR {t.priceRangePKR.min.toLocaleString()} – {t.priceRangePKR.max.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Preferred Doctor:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DOCTORS_DATA.map(doc => (
                    <div
                      key={doc.id}
                      onClick={() => setDoctorId(doc.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-center gap-3 ${
                        doctorId === doc.id
                          ? 'border-sky-500 bg-sky-50/70 shadow-sm'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="h-11 w-11 rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{doc.name}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">{doc.title}</div>
                        <span className="text-[10px] text-sky-600 font-semibold">{doc.specialty.split(',')[0]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs md:text-sm transition flex items-center gap-2 shadow-md shadow-sky-600/20"
                >
                  <span>Continue to Date & Time</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Date & Time Slot */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Pick Preferred Appointment Date:
                </label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-50 text-slate-900 text-sm font-semibold rounded-2xl p-3.5 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  * Note: Friday Jummah prayer break is from 1:00 PM to 2:30 PM.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Preferred Time Slot:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                        timeSlot === slot
                          ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Clock className="h-3 w-3" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-xs transition flex items-center gap-1"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs md:text-sm transition flex items-center gap-2 shadow-md shadow-sky-600/20"
                >
                  <span>Continue to Patient Details</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Khurram Shehzad"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 text-sm rounded-2xl pl-10 pr-4 py-3 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 text-slate-900 text-sm font-semibold rounded-2xl pl-10 pr-4 py-3 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500">Confirmation SMS & WhatsApp details sent here.</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      placeholder="patient@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 text-slate-900 text-sm rounded-2xl pl-10 pr-4 py-3 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Symptoms or Special Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitivity on upper molar, needs consultation for Swiss implant..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 text-slate-900 text-sm rounded-2xl p-3 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Your medical data is 100% confidential and compliant with medical privacy standards.</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-xs transition flex items-center gap-1"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm transition shadow-lg shadow-emerald-600/25 flex items-center gap-2"
                >
                  <span>Confirm Appointment</span>
                  <CheckCircle2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Success & Confirmation */}
          {step === 4 && createdBooking && (
            <div className="space-y-6 animate-in fade-in duration-200 text-center py-2">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Booking Reference Code:
                </span>
                <div className="inline-block bg-sky-50 border-2 border-sky-400 text-sky-900 font-black text-2xl px-5 py-2 rounded-2xl my-1 tracking-wider shadow-xs">
                  {createdBooking.bookingRef}
                </div>
                <p className="text-xs text-slate-500">
                  Please save this code to manage or reschedule your visit.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-bold text-slate-900">{createdBooking.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Treatment:</span>
                  <span className="font-bold text-slate-900">{createdBooking.treatmentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-bold text-sky-700">{createdBooking.doctorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scheduled:</span>
                  <span className="font-bold text-slate-900">{createdBooking.preferredDate} at {createdBooking.preferredTimeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Clinic:</span>
                  <span className="font-bold text-slate-900">Main Peshawar Road Saddar, Rawalpindi</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Send Confirmation to Clinic WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Add to Calendar (.ics)</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
                >
                  Done & Return to Website
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
