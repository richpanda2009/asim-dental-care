import { Appointment, AppointmentStatus } from '../types';

const APPOINTMENTS_STORAGE_KEY = 'asim_dental_care_appointments_v1';

const INITIAL_SEED_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-001',
    bookingRef: 'ADC-2026-1048',
    patientName: 'Khurram Shehzad',
    patientPhone: '+92 300 5123456',
    patientEmail: 'khurram.s@gmail.com',
    treatmentId: 'dental-implants',
    treatmentName: 'Dental Implants (Swiss & German Tech)',
    doctorId: 'dr-muhammad-asim',
    doctorName: 'Dr. Muhammad Asim',
    preferredDate: '2026-08-30',
    preferredTimeSlot: '04:30 PM - 05:30 PM',
    notes: 'Needs single implant consultation for lower right molar. Had extraction 6 months ago.',
    isEmergency: false,
    status: 'Confirmed',
    createdAt: '2026-08-27T10:15:00Z',
    internalNotes: 'CBCT scan ready for review. Patient informed about 3D guide options.'
  },
  {
    id: 'apt-002',
    bookingRef: 'ADC-2026-1049',
    patientName: 'Aiman Zahra',
    patientPhone: '+92 333 9876543',
    patientEmail: 'aiman.z@yahoo.com',
    treatmentId: 'braces-orthodontics',
    treatmentName: 'Braces & Clear Aligners',
    doctorId: 'dr-ayesha-siddiqui',
    doctorName: 'Dr. Ayesha Siddiqui',
    preferredDate: '2026-08-30',
    preferredTimeSlot: '05:30 PM - 06:30 PM',
    notes: 'Interested in clear aligners for upper teeth spacing. Wedding in 8 months.',
    isEmergency: false,
    status: 'Pending',
    createdAt: '2026-08-28T09:20:00Z'
  },
  {
    id: 'apt-003',
    bookingRef: 'ADC-2026-1050',
    patientName: 'Col. Farhan Raza',
    patientPhone: '+92 321 4455667',
    patientEmail: 'farhan.raza@live.com',
    treatmentId: 'root-canal',
    treatmentName: 'Root Canal Treatment (RCT)',
    doctorId: 'dr-hamza-malik',
    doctorName: 'Dr. Hamza Malik',
    preferredDate: '2026-08-29',
    preferredTimeSlot: '12:00 PM - 01:00 PM',
    notes: 'Severe throbbing night pain upper left premolar. Urgent treatment needed.',
    isEmergency: true,
    status: 'Confirmed',
    createdAt: '2026-08-28T14:40:00Z',
    internalNotes: 'Priority acute pulpitis triage. Anesthetic ready.'
  },
  {
    id: 'apt-004',
    bookingRef: 'ADC-2026-1051',
    patientName: 'Hafsa Naveed',
    patientPhone: '+92 345 6789012',
    patientEmail: 'hafsa.n@gmail.com',
    treatmentId: 'teeth-whitening',
    treatmentName: 'Laser Teeth Whitening & Polishing',
    doctorId: 'dr-zoya-tariq',
    doctorName: 'Dr. Zoya Tariq',
    preferredDate: '2026-08-31',
    preferredTimeSlot: '02:30 PM - 03:30 PM',
    notes: 'Routine scaling and laser whitening before engagement ceremony.',
    isEmergency: false,
    status: 'Pending',
    createdAt: '2026-08-28T16:10:00Z'
  },
  {
    id: 'apt-005',
    bookingRef: 'ADC-2026-1045',
    patientName: 'Malik Zeeshan',
    patientPhone: '+92 312 8899001',
    patientEmail: 'malik.z@hotmail.com',
    treatmentId: 'scaling-cleaning',
    treatmentName: 'Ultrasonic Scaling, Polishing & AirFlow',
    doctorId: 'dr-zoya-tariq',
    doctorName: 'Dr. Zoya Tariq',
    preferredDate: '2026-08-26',
    preferredTimeSlot: '06:00 PM - 07:00 PM',
    notes: '6-month routine cleaning and gum checkup.',
    isEmergency: false,
    status: 'Completed',
    createdAt: '2026-08-24T11:00:00Z',
    internalNotes: 'Calculus cleared. Fluoride polish completed. Next recall due Feb 2027.'
  }
];

export const getStoredAppointments = (): Appointment[] => {
  try {
    const raw = localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(INITIAL_SEED_APPOINTMENTS));
      return INITIAL_SEED_APPOINTMENTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_SEED_APPOINTMENTS;
  }
};

export const saveAppointments = (appointments: Appointment[]): void => {
  try {
    localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(appointments));
  } catch (err) {
    console.error('Failed to save appointments in localStorage', err);
  }
};

export const createAppointment = (newAppt: Omit<Appointment, 'id' | 'bookingRef' | 'status' | 'createdAt'>): Appointment => {
  const current = getStoredAppointments();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const bookingRef = `ADC-2026-${randomNum}`;
  
  const created: Appointment = {
    ...newAppt,
    id: `apt-${Date.now()}-${randomNum}`,
    bookingRef,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  const updated = [created, ...current];
  saveAppointments(updated);
  return created;
};

export const updateAppointmentStatus = (id: string, status: AppointmentStatus, internalNotes?: string): Appointment | null => {
  const current = getStoredAppointments();
  const index = current.findIndex(a => a.id === id);
  if (index === -1) return null;

  const updatedItem: Appointment = {
    ...current[index],
    status,
    ...(internalNotes !== undefined ? { internalNotes } : {})
  };

  current[index] = updatedItem;
  saveAppointments(current);
  return updatedItem;
};

export const rescheduleAppointment = (bookingRef: string, newDate: string, newTimeSlot: string): Appointment | null => {
  const current = getStoredAppointments();
  const index = current.findIndex(a => a.bookingRef.toUpperCase() === bookingRef.toUpperCase().trim());
  if (index === -1) return null;

  const updatedItem: Appointment = {
    ...current[index],
    preferredDate: newDate,
    preferredTimeSlot: newTimeSlot,
    status: 'Pending'
  };

  current[index] = updatedItem;
  saveAppointments(current);
  return updatedItem;
};

export const cancelAppointment = (bookingRef: string): Appointment | null => {
  return updateAppointmentStatusByRef(bookingRef, 'Cancelled');
};

export const updateAppointmentStatusByRef = (bookingRef: string, status: AppointmentStatus): Appointment | null => {
  const current = getStoredAppointments();
  const index = current.findIndex(a => a.bookingRef.toUpperCase() === bookingRef.toUpperCase().trim());
  if (index === -1) return null;

  current[index].status = status;
  saveAppointments(current);
  return current[index];
};

export const findAppointmentByRefOrPhone = (query: string): Appointment[] => {
  const current = getStoredAppointments();
  const clean = query.toLowerCase().trim();
  return current.filter(a => 
    a.bookingRef.toLowerCase().includes(clean) ||
    a.patientPhone.replace(/\s+/g, '').includes(clean.replace(/\s+/g, '')) ||
    a.patientName.toLowerCase().includes(clean)
  );
};

export const generateCalendarICS = (appt: Appointment): string => {
  const startDateStr = appt.preferredDate.replace(/-/g, '');
  const summary = `Dental Appointment at Asim Dental Care (${appt.treatmentName})`;
  const description = `Patient: ${appt.patientName}\\nDoctor: ${appt.doctorName}\\nBooking Ref: ${appt.bookingRef}\\nClinic: Asim Dental Care, Peshawar Road Saddar Rawalpindi\\nEmergency Hotline: +92 300 5552424`;
  const location = `Asim Dental Care, Plaza 42, Main Peshawar Road, Saddar, Rawalpindi, Pakistan`;

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Asim Dental Care//Appointment System//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${appt.bookingRef}@asimdentalcare.pk`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART;VALUE=DATE:${startDateStr}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\\r\\n');
};

export const exportAppointmentsCSV = (appointments: Appointment[]): string => {
  const headers = ['Booking Ref', 'Patient Name', 'Phone', 'Email', 'Treatment', 'Doctor', 'Date', 'Time Slot', 'Emergency', 'Status', 'Created At', 'Internal Notes'];
  const rows = appointments.map(a => [
    `"${a.bookingRef}"`,
    `"${a.patientName}"`,
    `"${a.patientPhone}"`,
    `"${a.patientEmail || ''}"`,
    `"${a.treatmentName}"`,
    `"${a.doctorName}"`,
    `"${a.preferredDate}"`,
    `"${a.preferredTimeSlot}"`,
    `"${a.isEmergency ? 'Yes' : 'No'}"`,
    `"${a.status}"`,
    `"${a.createdAt}"`,
    `"${a.internalNotes || ''}"`
  ]);

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\\n');
};
