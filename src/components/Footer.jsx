import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, MessageSquare, Clock, Star, ArrowUp } from 'lucide-react';

export const Footer = ({ onNavigate, onOpenBooking, businessInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050506] border-t border-[#22242c] text-neutral-300 text-xs">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Verification */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex flex-col items-start">
              <Logo size="md" showSubtitle={false} />
              <span className="text-[11px] font-bold text-neutral-400 tracking-[0.2em] uppercase mt-1">
                Men's Salon & Barbershop • Islamabad
              </span>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Islamabad's premier destination for masculine grooming. Dedicated to surgical scissor fades, beard architecture, and restorative capillary treatments in a clinically hygienic atmosphere.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-[#101115] border border-[#22242c]">
              <div className="flex text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white font-mono">5.0 / 5.0</span>
                <span className="text-neutral-400 block text-[11px]">42 Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
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
                    className="capitalize text-neutral-400 hover:text-white transition-colors"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services Menu */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Core Services
            </h3>
            <ul className="space-y-2 text-neutral-400">
              <li>Haircuts & Styling</li>
              <li>Beard Trim & Sculpting</li>
              <li>Capillary Hair Treatment</li>
              <li>Hair Colouring for Men</li>
              <li>Precision Buzz Cut</li>
              <li>Beard Dyeing & Upkeep</li>
              <li>Deep Beard Conditioning</li>
            </ul>
          </div>

          {/* Col 5: NAP & Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Contact & Hours
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <p className="text-neutral-400 leading-snug">
                  {businessInfo?.fullAddress || "Street 2 B, Zaraj Housing Society, Sector A, Islamabad, 44000"}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a
                  href={`tel:${businessInfo?.phoneRaw || '+923164233912'}`}
                  className="font-bold text-white hover:underline"
                >
                  {businessInfo?.phone || "0316 4233912"}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-white shrink-0" />
                <div>
                  <p className="text-white font-medium">Open Daily Till 12:00 AM</p>
                  <p className="text-[11px] text-neutral-400">Open until Midnight every day</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all text-center shadow"
                >
                  Book Online
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Local SEO Keywords Strip */}
        <div className="mt-12 pt-8 border-t border-[#1a1c24] text-[11px] text-neutral-400 space-y-2">
          <p className="font-semibold text-neutral-300">
            Local Men's Grooming Services in Islamabad & Zaraj Housing Society:
          </p>
          <p className="leading-relaxed">
            Barbershop in Zaraj Housing Society • Best Haircut in Islamabad • Skin Fade Specialist Nabeel • Beard Trim & Sculpting Shahzaib • Capillary Hair Treatment Islamabad • Men's Salon near DHA Phase 2 & Bahria Town • Open Late Night Barbershop Islamabad • Clean & Hygienic Barber.
          </p>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-8 pt-6 border-t border-[#1a1c24] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
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
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-1"
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
