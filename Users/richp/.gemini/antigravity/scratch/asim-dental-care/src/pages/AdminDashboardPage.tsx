import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  Search, 
  Filter, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  RefreshCw, 
  ShieldCheck, 
  Lock, 
  DollarSign, 
  FileText,
  Phone,
  Eye,
  Plus
} from 'lucide-react';
import { 
  getStoredAppointments, 
  updateAppointmentStatus, 
  exportAppointmentsCSV,
  saveAppointments 
} from '../services/appointmentStore';
import { Appointment, AppointmentStatus, PageRoute } from '../types';
import { DOCTORS_DATA } from '../data/doctorsData';

interface AdminDashboardPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filterDoctor, setFilterDoctor] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAppt, setSelectedAppt] = useState<Appointment | null>(null);
  const [internalNoteInput, setInternalNoteInput] = useState('');

  const loadData = () => {
    const list = getStoredAppointments();
    setAppointments(list);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123' || passcode === 'asim2026') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect staff passcode. (Try "admin123" for demo)');
    }
  };

  const handleStatusChange = (id: string, newStatus: AppointmentStatus) => {
    updateAppointmentStatus(id, newStatus);
    loadData();
    if (selectedAppt && selectedAppt.id === id) {
      setSelectedAppt({ ...selectedAppt, status: newStatus });
    }
  };

  const handleSaveNotes = () => {
    if (!selectedAppt) return;
    updateAppointmentStatus(selectedAppt.id, selectedAppt.status, internalNoteInput);
    loadData();
    setSelectedAppt({ ...selectedAppt, internalNotes: internalNoteInput });
  };

  const handleExportCSV = () => {
    const csvData = exportAppointmentsCSV(filteredAppointments);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `AsimDentalCare_Appointments_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter and Search
  const filteredAppointments = appointments.filter(a => {
    const matchDoc = filterDoctor === 'All' || a.doctorId === filterDoctor;
    const matchStatus = filterStatus === 'All' || a.status === filterStatus;
    const matchSearch =
      a.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.bookingRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.patientPhone.includes(searchQuery) ||
      a.treatmentName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDoc && matchStatus && matchSearch;
  });

  // KPI Metrics Calculation
  const totalCount = appointments.length;
  const pendingCount = appointments.filter(a => a.status === 'Pending').length;
  const confirmedCount = appointments.filter(a => a.status === 'Confirmed').length;
  const completedCount = appointments.filter(a => a.status === 'Completed').length;
  const emergencyCount = appointments.filter(a => a.isEmergency).length;

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 text-center space-y-6">
          <div className="h-14 w-14 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <Lock className="h-7 w-7" />
          </div>

          <div>
            <h2 className="text-xl font-black text-slate-900">Staff Portal Authentication</h2>
            <p className="text-xs text-slate-500 mt-1">
              Authorized access for Asim Dental Care clinic reception and surgeons
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Enter Staff Passcode:
              </label>
              <input
                type="password"
                required
                placeholder="Enter passcode..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-slate-50 text-slate-900 text-sm rounded-2xl p-3.5 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <span className="text-[10px] text-slate-400 block mt-1">Default staff passcode: <code>admin123</code></span>
            </div>

            {errorMsg && (
              <div className="text-xs text-red-600 font-semibold bg-red-50 p-2.5 rounded-xl border border-red-200">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs md:text-sm transition shadow-md shadow-sky-600/20"
            >
              Unlock Dashboard
            </button>
          </form>

          <button
            onClick={() => onNavigate('home')}
            className="text-xs text-slate-500 hover:text-slate-800 underline"
          >
            ← Return to Public Website
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Staff Live Portal
            </span>
            <span className="text-xs text-slate-400">Rawalpindi Branch</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black mt-1">Appointment & Patient Operations</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition flex items-center gap-1.5 border border-slate-700"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5"
          >
            <Plus className="h-4 w-4" />
            <span>New Booking</span>
          </button>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-xs text-slate-400 hover:text-white underline"
          >
            Lock
          </button>
        </div>
      </div>

      {/* KPI Cards Bar */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Total Bookings</span>
          <div className="text-2xl font-black text-slate-900">{totalCount}</div>
          <span className="text-[10px] text-slate-500">All registered appointments</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-amber-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Pending Review</span>
          <div className="text-2xl font-black text-amber-600">{pendingCount}</div>
          <span className="text-[10px] text-slate-500">Needs phone/WhatsApp call</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-emerald-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Confirmed</span>
          <div className="text-2xl font-black text-emerald-600">{confirmedCount}</div>
          <span className="text-[10px] text-slate-500">Ready on calendar</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">Completed</span>
          <div className="text-2xl font-black text-sky-600">{completedCount}</div>
          <span className="text-[10px] text-slate-500">Finished procedures</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-red-200 shadow-xs space-y-1 col-span-2 md:col-span-1">
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">Emergency Cases</span>
          <div className="text-2xl font-black text-red-600">{emergencyCount}</div>
          <span className="text-[10px] text-red-500">Priority triage</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {/* Doctor Filter */}
          <select
            value={filterDoctor}
            onChange={(e) => setFilterDoctor(e.target.value)}
            className="bg-slate-50 text-xs font-semibold rounded-xl px-3 py-2 border border-slate-200 text-slate-800"
          >
            <option value="All">All Doctors</option>
            {DOCTORS_DATA.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-slate-50 text-xs font-semibold rounded-xl px-3 py-2 border border-slate-200 text-slate-800"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search patient, phone, ref..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl pl-9 pr-4 py-2 border border-slate-200 focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      {/* Appointments Management Table & Inspection Modal */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <th className="py-4 px-4">Ref Code</th>
                <th className="py-4 px-4">Patient Details</th>
                <th className="py-4 px-4">Treatment</th>
                <th className="py-4 px-4">Doctor</th>
                <th className="py-4 px-4">Date & Time</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4 text-right">Quick Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAppointments.map((appt) => (
                <tr key={appt.id} className={`hover:bg-sky-50/40 transition ${appt.isEmergency ? 'bg-red-50/30' : ''}`}>
                  <td className="py-4 px-4 font-mono font-bold text-sky-700">
                    {appt.bookingRef}
                    {appt.isEmergency && (
                      <span className="block text-[9px] text-red-600 font-bold uppercase">🚨 Emergency</span>
                    )}
                  </td>

                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900">{appt.patientName}</div>
                    <a href={`tel:${appt.patientPhone}`} className="text-[11px] text-slate-500 hover:text-sky-600 block">
                      {appt.patientPhone}
                    </a>
                  </td>

                  <td className="py-4 px-4 font-medium text-slate-800">
                    {appt.treatmentName}
                  </td>

                  <td className="py-4 px-4 text-slate-700">
                    {appt.doctorName}
                  </td>

                  <td className="py-4 px-4 text-slate-600">
                    <span className="font-semibold block text-slate-900">{appt.preferredDate}</span>
                    <span className="text-[11px] text-slate-500">{appt.preferredTimeSlot}</span>
                  </td>

                  <td className="py-4 px-4">
                    <select
                      value={appt.status}
                      onChange={(e) => handleStatusChange(appt.id, e.target.value as AppointmentStatus)}
                      className={`text-[11px] font-bold px-2 py-1 rounded-lg border focus:outline-none ${
                        appt.status === 'Confirmed' ? 'bg-emerald-50 border-emerald-300 text-emerald-800' :
                        appt.status === 'Cancelled' ? 'bg-red-50 border-red-300 text-red-800' :
                        appt.status === 'Completed' ? 'bg-slate-100 border-slate-300 text-slate-800' :
                        'bg-amber-50 border-amber-300 text-amber-800'
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                  <td className="py-4 px-4 text-right space-x-1.5">
                    <button
                      onClick={() => {
                        setSelectedAppt(appt);
                        setInternalNoteInput(appt.internalNotes || '');
                      }}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition inline-flex items-center"
                      title="Inspect & Add Notes"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <a
                      href={`https://wa.me/${appt.patientPhone.replace(/\D/g, '')}?text=Assalam-o-Alaikum%20${encodeURIComponent(appt.patientName)}%2C%20regarding%20your%20appointment%20(${appt.bookingRef})%20at%20Asim%20Dental%20Care%20Rawalpindi...`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition inline-flex items-center"
                      title="Direct WhatsApp Patient"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Appointment Inspection Drawer Modal */}
      {selectedAppt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                  {selectedAppt.bookingRef}
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">{selectedAppt.patientName}</h3>
              </div>
              <button
                onClick={() => setSelectedAppt(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-2xl">
                <div><span className="text-slate-400">Phone:</span> <strong className="block text-slate-900">{selectedAppt.patientPhone}</strong></div>
                <div><span className="text-slate-400">Email:</span> <strong className="block text-slate-900">{selectedAppt.patientEmail || 'N/A'}</strong></div>
                <div><span className="text-slate-400">Treatment:</span> <strong className="block text-slate-900">{selectedAppt.treatmentName}</strong></div>
                <div><span className="text-slate-400">Doctor:</span> <strong className="block text-slate-900">{selectedAppt.doctorName}</strong></div>
              </div>

              {selectedAppt.notes && (
                <div className="bg-amber-50 p-3 rounded-2xl border border-amber-100 text-amber-900">
                  <strong>Patient Symptoms/Notes:</strong>
                  <p className="mt-0.5">{selectedAppt.notes}</p>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Internal Clinical Notes & Follow-Up Plan:
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Suture removal due in 7 days, Zirconia crown ordered from lab..."
                  value={internalNoteInput}
                  onChange={(e) => setInternalNoteInput(e.target.value)}
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-2xl p-3 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedAppt(null)}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-xs"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSaveNotes}
                className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition shadow-sm"
              >
                Save Clinical Notes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
