import React, { useState } from 'react';
import { 
  Search, 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  AlertCircle, 
  CheckCircle, 
  RefreshCw, 
  Trash2,
  CalendarCheck
} from 'lucide-react';
import { 
  findAppointmentByRefOrPhone, 
  rescheduleAppointment, 
  cancelAppointment 
} from '../../services/appointmentStore';
import { Appointment } from '../../types';

interface AppointmentLookupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentLookup: React.FC<AppointmentLookupProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Appointment[] | null>(null);
  const [selectedAppt, setSelectedAppt] = useState<Appointment | null>(null);
  const [rescheduleDate, setRescheduleDate] = useState('');
  const [rescheduleSlot, setRescheduleSlot] = useState('04:30 PM - 05:30 PM');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const found = findAppointmentByRefOrPhone(query.trim());
    setResults(found);
    setSelectedAppt(null);
    setFeedbackMessage(null);
  };

  const handleReschedule = () => {
    if (!selectedAppt || !rescheduleDate) return;
    const updated = rescheduleAppointment(selectedAppt.bookingRef, rescheduleDate, rescheduleSlot);
    if (updated) {
      setSelectedAppt(updated);
      setFeedbackMessage(`Appointment successfully rescheduled for ${rescheduleDate} (${rescheduleSlot}). Our staff has been notified.`);
    }
  };

  const handleCancel = () => {
    if (!selectedAppt) return;
    const cancelled = cancelAppointment(selectedAppt.bookingRef);
    if (cancelled) {
      setSelectedAppt(cancelled);
      setFeedbackMessage('Appointment has been cancelled. If this was a mistake, you can rebook anytime.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <CalendarCheck className="h-4 w-4" />
            <span>Patient Self-Service Portal</span>
          </div>
          <h3 className="text-xl font-black">Manage or Reschedule Appointment</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Search using your Booking Reference (e.g. ADC-2026-1048) or Pakistani Mobile Number
          </p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter Booking Reference or Phone Number..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-slate-50 text-slate-900 text-xs md:text-sm rounded-2xl pl-10 pr-4 py-3 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition shadow-md shadow-sky-600/20 shrink-0"
            >
              Search
            </button>
          </form>

          {/* Feedback message */}
          {feedbackMessage && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium p-3.5 rounded-2xl flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{feedbackMessage}</span>
            </div>
          )}

          {/* Search Results List */}
          {results !== null && !selectedAppt && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Search Results ({results.length}):
              </h4>

              {results.length === 0 ? (
                <div className="bg-slate-50 p-6 rounded-2xl text-center text-xs text-slate-500 border border-dashed border-slate-200">
                  No appointments found matching "{query}". Please verify your reference code or call our reception at 0300-5552424.
                </div>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {results.map(appt => (
                    <div
                      key={appt.id}
                      onClick={() => {
                        setSelectedAppt(appt);
                        setRescheduleDate(appt.preferredDate);
                        setRescheduleSlot(appt.preferredTimeSlot);
                      }}
                      className="p-4 rounded-2xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 cursor-pointer transition flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                            {appt.bookingRef}
                          </span>
                          <span className="text-xs font-bold text-slate-900">{appt.patientName}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1">
                          {appt.treatmentName} • {appt.doctorName}
                        </div>
                        <div className="text-[11px] text-slate-600 mt-0.5">
                          📅 {appt.preferredDate} at {appt.preferredTimeSlot}
                        </div>
                      </div>

                      <div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          appt.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' :
                          appt.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                          appt.status === 'Completed' ? 'bg-slate-100 text-slate-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {appt.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Selected Appointment Details & Actions */}
          {selectedAppt && (
            <div className="space-y-5 border-t border-slate-100 pt-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Ref:</span>
                  <span className="font-mono font-bold text-sky-700">{selectedAppt.bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient Name:</span>
                  <span className="font-bold text-slate-900">{selectedAppt.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-semibold text-slate-800">{selectedAppt.patientPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Treatment:</span>
                  <span className="font-semibold text-slate-800">{selectedAppt.treatmentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-semibold text-slate-800">{selectedAppt.doctorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Current Status:</span>
                  <span className="font-bold text-sky-700">{selectedAppt.status}</span>
                </div>
              </div>

              {/* Reschedule Box */}
              {selectedAppt.status !== 'Cancelled' && (
                <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-100 space-y-3">
                  <h5 className="text-xs font-bold text-sky-900 flex items-center gap-1.5">
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>Select New Date & Time to Reschedule:</span>
                  </h5>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="date"
                      value={rescheduleDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setRescheduleDate(e.target.value)}
                      className="bg-white text-xs font-semibold rounded-xl p-2.5 border border-sky-200 text-slate-800"
                    />
                    <select
                      value={rescheduleSlot}
                      onChange={(e) => setRescheduleSlot(e.target.value)}
                      className="bg-white text-xs font-semibold rounded-xl p-2.5 border border-sky-200 text-slate-800"
                    >
                      <option value="11:30 AM - 12:30 PM">11:30 AM - 12:30 PM</option>
                      <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                      <option value="04:30 PM - 05:30 PM">04:30 PM - 05:30 PM</option>
                      <option value="06:30 PM - 07:30 PM">06:30 PM - 07:30 PM</option>
                      <option value="07:30 PM - 08:30 PM">07:30 PM - 08:30 PM</option>
                    </select>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleReschedule}
                      className="flex-1 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition shadow-sm"
                    >
                      Confirm Reschedule
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-4 py-2.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-700 font-bold text-xs transition flex items-center gap-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setSelectedAppt(null)}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                ← Back to search results
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
