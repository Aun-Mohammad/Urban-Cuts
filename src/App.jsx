import React, { useState, useEffect } from 'react';
import RootLayout from './app/layout.jsx';
import HomePage from './app/page.jsx';
import AboutPage from './app/about/page.jsx';
import ServicesPage from './app/services/page.jsx';
import GalleryPage from './app/gallery/page.jsx';
import ReviewsPage from './app/reviews/page.jsx';
import ContactPage from './app/contact/page.jsx';
import AdminPage from './app/admin/page.jsx';
import { getBusinessInfo, getMetaTags, applyMetaTagsToDOM, getAdminSession, setAdminSession } from './data/salonData';

/**
 * App Router Controller
 * Mounts Next.js-style App Router files:
 * - Root Layout: src/app/layout.jsx
 * - Page Routes: src/app/page.jsx, src/app/{about,services,gallery,reviews,contact,admin}/page.jsx
 * - Schema.org JSON-LD structured data on all pages
 */
export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState(undefined);
  const [contentVersion, setContentVersion] = useState(0);

  // Initialize meta tags and listen for CMS updates
  useEffect(() => {
    applyMetaTagsToDOM(getMetaTags());

    const handleContentUpdate = () => {
      setContentVersion((v) => v + 1);
    };

    window.addEventListener('urban_cuts_content_updated', handleContentUpdate);
    return () => window.removeEventListener('urban_cuts_content_updated', handleContentUpdate);
  }, []);

  // HTML5 Pathname & Hash Routing Synchronizer
  useEffect(() => {
    const resolveRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();

      // Check admin path
      if (path === '/admin' || path.startsWith('/admin/') || hash === 'admin') {
        setCurrentRoute('admin');
        return;
      }

      // Check known path routes
      const pathRoute = path.replace(/^\//, '').split('/')[0];
      const validRoutes = ['home', 'about', 'services', 'gallery', 'reviews', 'contact'];

      if (validRoutes.includes(pathRoute)) {
        setCurrentRoute(pathRoute);
        return;
      }

      // Fallback to hash routes
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
        return;
      }

      // Root path default
      setCurrentRoute('home');
    };

    resolveRoute();
    window.addEventListener('popstate', resolveRoute);
    window.addEventListener('hashchange', resolveRoute);
    return () => {
      window.removeEventListener('popstate', resolveRoute);
      window.removeEventListener('hashchange', resolveRoute);
    };
  }, []);

  const handleNavigate = (route) => {
    setCurrentRoute(route);

    // Update browser URL cleanly
    const targetUrl = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ route }, '', targetUrl);
    }
    if (window.location.hash) {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitAdmin = () => {
    handleNavigate('home');
  };

  const handleOpenBooking = (serviceId) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingServiceId(undefined);
  };

  // Render Admin Route (isolated from public layout)
  if (currentRoute === 'admin') {
    return <AdminPage onExitAdmin={handleExitAdmin} />;
  }

  // Render Root Layout with Active Route Page
  return (
    <RootLayout
      key={contentVersion}
      currentRoute={currentRoute}
      onNavigate={handleNavigate}
      onOpenBooking={handleOpenBooking}
      bookingServiceId={bookingServiceId}
      isBookingOpen={isBookingOpen}
      onCloseBooking={handleCloseBooking}
    >
      {currentRoute === 'home' && (
        <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
      )}
      {currentRoute === 'about' && (
        <AboutPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
      )}
      {currentRoute === 'services' && (
        <ServicesPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
      )}
      {currentRoute === 'gallery' && (
        <GalleryPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
      )}
      {currentRoute === 'reviews' && (
        <ReviewsPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
      )}
      {currentRoute === 'contact' && (
        <ContactPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
      )}
    </RootLayout>
  );
}
