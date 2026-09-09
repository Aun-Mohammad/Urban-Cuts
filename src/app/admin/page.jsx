import React, { useState, useEffect } from 'react';
import { AdminPanel } from '../../components/AdminPanel';
import { AdminLogin } from '../../components/AdminLogin';
import { getAdminSession, setAdminSession, getBusinessInfo } from '../../data/salonData';

/**
 * Admin Route Page (app/admin/page.jsx & app/admin/page.js)
 * Live Content Management System & SEO Dynamic Meta Tags Portal.
 */
export default function AdminPage({ onExitAdmin }) {
  const [isAuthenticated, setIsAuthenticated] = useState(getAdminSession());

  useEffect(() => {
    setIsAuthenticated(getAdminSession());
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setAdminSession(false);
    setIsAuthenticated(false);
    if (onExitAdmin) {
      onExitAdmin();
    }
  };

  if (!isAuthenticated) {
    return (
      <AdminLogin
        onLoginSuccess={handleLoginSuccess}
        onBackToSite={onExitAdmin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#08090b]">
      <AdminPanel
        isOpen={true}
        onClose={onExitAdmin}
        onLogout={handleLogout}
        onContentSaved={() => {
          // Trigger custom event for real-time header/footer refresh
          window.dispatchEvent(new Event('urban_cuts_content_updated'));
        }}
      />
    </div>
  );
}
