import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, MessageSquare, Calendar, Menu, X, Settings } from 'lucide-react';

export const Header = ({
  currentPage = 'home',
  onNavigate,
  onOpenBooking,
  businessInfo,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
  };

  const handleAdminClick = () => {
    if (onOpenAdmin) {
      onOpenAdmin();
    } else if (onNavigate) {
      onNavigate('admin');
    }
    setMobileMenuOpen(false);
  };

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else if (onNavigate) {
      onNavigate('contact');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full leather-surface backdrop-blur-xl border-b border-[#c8a45d]/25 transition-all shadow-xl shadow-black/50">
      {/* Top Announcement Bar with Gold Hairline Accent */}
      <div className="bg-[#07080b]/90 border-b border-[#c8a45d]/20 py-1.5 px-4 text-center text-[11px] font-medium text-neutral-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="truncate flex-1 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2 font-light">
            <span className="text-[#dfba73]">✦</span>
            <span>{businessInfo?.announcement || "Open Daily Until Midnight • Zaraj Housing Society Sector A, Islamabad"}</span>
          </span>

          <div className="hidden sm:flex items-center gap-4 text-neutral-400">
            <a
              href={`tel:${businessInfo?.phoneRaw || '+923164233912'}`}
              className="hover:text-[#dfba73] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#dfba73]" />
              <span className="font-mono text-xs text-neutral-200">{businessInfo?.phone || '0316 4233912'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo with Gold Variant */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <Logo size="sm" showSubtitle={true} layout="inline" variant="gold" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                currentPage === link.id
                  ? 'text-[#dfba73] bg-[#c8a45d]/15 border border-[#c8a45d]/35 font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleAdminClick}
            className="p-2.5 rounded-xl bg-[#11131a] border border-[#c8a45d]/20 text-neutral-400 hover:text-[#dfba73] hover:border-[#c8a45d]/40 transition-colors"
            title="Admin CMS & SEO Settings"
          >
            <Settings className="w-4 h-4" />
          </button>

          <a
            href={businessInfo?.whatsappLink || 'https://wa.me/923164233912'}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/40 transition-colors shadow-sm"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <button
            onClick={handleBookingClick}
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c8a45d]/20 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Seat</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleAdminClick}
            className="p-2 rounded-xl bg-white/5 border border-[#22242c] text-neutral-300 hover:text-white"
            title="Admin CMS"
          >
            <Settings className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-[#22242c] text-neutral-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0b0e] border-b border-[#22242c] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-all ${
                  currentPage === link.id
                    ? 'bg-white text-black'
                    : 'text-neutral-300 bg-[#14151a] hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleBookingClick}
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black flex items-center justify-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${businessInfo?.phoneRaw || '+923164233912'}`}
                className="py-2.5 rounded-xl text-center text-xs font-semibold bg-[#1a1c24] border border-[#2c2f3b] text-white flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              <a
                href={businessInfo?.whatsappLink || 'https://wa.me/923164233912'}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl text-center text-xs font-semibold bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
