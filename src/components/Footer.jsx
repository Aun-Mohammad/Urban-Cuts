import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, MessageSquare, Clock, Star, ArrowUp } from 'lucide-react';

export const Footer = ({ onNavigate, onOpenBooking, businessInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full leather-surface border-t border-[#c8a45d]/25 text-neutral-300 text-xs relative overflow-hidden">
      {/* Decorative top gold hairline glow */}
      <div className="absolute top-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#c8a45d]/60 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Verification */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex flex-col items-start">
              <Logo size="md" variant="gold" showSubtitle={false} />
              <span className="text-[11px] font-bold text-[#dfba73] tracking-[0.25em] uppercase mt-2 font-display">
                Atelier De Coiffure • Zaraj Sector A
              </span>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm font-light">
              Islamabad's premier destination for masculine grooming. Dedicated to surgical scissor fades, beard architecture, and restorative capillary treatments in an artisan, hospital-grade hygienic sanctuary.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-[#0e1017] border border-[#c8a45d]/25 shadow-sm">
              <div className="flex text-[#dfba73]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#dfba73] text-[#dfba73]" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white font-mono">5.0 / 5.0</span>
                <span className="text-[#dfba73] block text-[11px] font-medium">42 Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-[#dfba73]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {['home', 'about', 'services', 'gallery', 'reviews', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      scrollToTop();
                    }}
                    className="capitalize text-neutral-400 hover:text-[#dfba73] transition-colors"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services Menu */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-[#dfba73]">
              Core Repertoire
            </h3>
            <ul className="space-y-2 text-neutral-400">
              <li>Precision Scissor Fades</li>
              <li>Straight-Razor Beard Sculpting</li>
              <li>Capillary Hair Infusion</li>
              <li>Artisanal Hair Toning</li>
              <li>Botanical Steam Ritual</li>
              <li>Beard Color Architecture</li>
              <li>Deep Follicle Conditioning</li>
            </ul>
          </div>

          {/* Col 5: NAP & Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-[#dfba73]">
              Atelier Hours & Loc
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                <p className="text-neutral-400 leading-snug">
                  {businessInfo?.fullAddress || "Street 2 B, Zaraj Housing Society, Sector A, Islamabad, 44000"}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#dfba73] shrink-0" />
                <a
                  href={`tel:${businessInfo?.phoneRaw || '+923164233912'}`}
                  className="font-bold text-white hover:text-[#dfba73] transition-colors font-mono"
                >
                  {businessInfo?.phone || "0316 4233912"}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#dfba73] shrink-0" />
                <div>
                  <p className="text-white font-medium">Midnight Atelier</p>
                  <p className="text-[11px] text-[#dfba73]">11:00 AM – 12:00 AM Every Day</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 transition-all text-center shadow-md shadow-[#c8a45d]/20"
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Local SEO Keywords Strip */}
        <div className="mt-12 pt-8 border-t border-white/5 text-[11px] text-neutral-400 space-y-2">
          <p className="font-semibold text-neutral-300 font-display">
            Artisanal Men's Grooming in Islamabad & Zaraj Housing Society:
          </p>
          <p className="leading-relaxed font-light">
            Barbershop in Zaraj Housing Society • Best Haircut in Islamabad • Skin Fade Specialist Nabeel • Beard Trim & Sculpting Shahzaib • Capillary Hair Treatment Islamabad • Men's Salon near DHA Phase 2 & Bahria Town • Open Late Night Barbershop Islamabad • Clean & Hygienic Barber.
          </p>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} Urban Cuts Men's Salon. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('admin');
                scrollToTop();
              }}
              className="hover:text-white transition-colors"
            >
              Admin Portal
            </button>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" className="hover:text-white transition-colors">
              Sitemap.xml
            </a>
            <span>•</span>
            <a href="/robots.txt" target="_blank" className="hover:text-white transition-colors">
              Robots.txt
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-[#c8a45d]/20 hover:text-[#dfba73] text-white transition-colors flex items-center gap-1 border border-white/10"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
