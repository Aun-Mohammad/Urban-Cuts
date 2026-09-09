import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { FloatingCTA } from '../components/FloatingCTA';
import { getBusinessInfo, getMetaTags, applyMetaTagsToDOM } from '../data/salonData';

/**
 * Root App Router Layout (layout.jsx / layout.js)
 * Wraps all application routes with consistent header, footer,
 * booking modal dialogs, and mobile floating action controls.
 */
export const RootLayout = ({
  children,
  currentRoute = 'home',
  onNavigate,
  onOpenBooking,
  bookingServiceId,
  isBookingOpen,
  onCloseBooking,
}) => {
  const [businessInfo, setBusinessInfo] = useState(getBusinessInfo());

  useEffect(() => {
    applyMetaTagsToDOM(getMetaTags());
    const handleContentUpdate = () => {
      setBusinessInfo(getBusinessInfo());
      applyMetaTagsToDOM(getMetaTags());
    };

    window.addEventListener('urban_cuts_content_updated', handleContentUpdate);
    return () => window.removeEventListener('urban_cuts_content_updated', handleContentUpdate);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#08090b] text-neutral-100 font-sans selection:bg-white selection:text-black">
      {/* Sticky Header Navigation */}
      <Header
        currentPage={currentRoute}
        onNavigate={onNavigate}
        businessInfo={businessInfo}
        onOpenBooking={onOpenBooking}
        onOpenAdmin={() => onNavigate && onNavigate('admin')}
      />

      {/* Main Page Slot */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Footer Navigation & NAP details */}
      <Footer
        onNavigate={onNavigate}
        onOpenBooking={onOpenBooking}
        businessInfo={businessInfo}
      />

      {/* Direct Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={onCloseBooking}
        defaultServiceId={bookingServiceId}
      />

      {/* Mobile Bottom Floating Action Bar */}
      <FloatingCTA onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};

export default RootLayout;
