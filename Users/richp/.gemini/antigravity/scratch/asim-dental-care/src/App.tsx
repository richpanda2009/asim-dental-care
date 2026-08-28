import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { EmergencyBanner } from './components/layout/EmergencyBanner';
import { WhatsAppFloating } from './components/layout/WhatsAppFloating';
import { DentalChatbot } from './components/chatbot/DentalChatbot';
import { BookingModal } from './components/booking/BookingModal';
import { AppointmentLookup } from './components/booking/AppointmentLookup';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { PricingPage } from './pages/PricingPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ContactPage } from './pages/ContactPage';
import { EmergencyPage } from './pages/EmergencyPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [routeParam, setRouteParam] = useState<string | undefined>(undefined);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [lookupModalOpen, setLookupModalOpen] = useState(false);
  const [selectedBookingTreatment, setSelectedBookingTreatment] = useState<string | undefined>(undefined);
  const [selectedBookingDoctor, setSelectedBookingDoctor] = useState<string | undefined>(undefined);
  const [isEmergencyBooking, setIsEmergencyBooking] = useState(false);

  // Scroll to top on route navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute, routeParam]);

  const handleNavigate = (route: PageRoute, data?: any) => {
    setCurrentRoute(route);
    setRouteParam(data);
  };

  const handleOpenBooking = (treatmentId?: string, doctorId?: string, isEmergency = false) => {
    setSelectedBookingTreatment(treatmentId);
    setSelectedBookingDoctor(doctorId);
    setIsEmergencyBooking(isEmergency);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Emergency Triage Ribbon */}
      <EmergencyBanner onNavigate={handleNavigate} />

      {/* Sticky Header with CTAs & Quick Dial */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenLookup={() => setLookupModalOpen(true)}
      />

      {/* Main Routed Content */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'treatment-detail' && (
          <TreatmentDetailPage
            slug={routeParam}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'technology' && (
          <TechnologyPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentRoute === 'emergency' && (
          <EmergencyPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'blog-post' && (
          <BlogPostPage
            slug={routeParam}
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentRoute === 'admin' && (
          <AdminDashboardPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Global Interactive Floatings */}
      <WhatsAppFloating />
      <DentalChatbot
        onOpenBooking={handleOpenBooking}
        onNavigate={handleNavigate}
      />

      {/* Appointment Booking Wizard Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialTreatmentId={selectedBookingTreatment}
        initialDoctorId={selectedBookingDoctor}
        isEmergencyDefault={isEmergencyBooking}
      />

      {/* Self-Service Appointment Lookup / Reschedule Modal */}
      <AppointmentLookup
        isOpen={lookupModalOpen}
        onClose={() => setLookupModalOpen(false)}
      />
    </div>
  );
};

export default App;
