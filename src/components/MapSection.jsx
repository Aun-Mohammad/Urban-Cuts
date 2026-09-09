import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';
import { getBusinessInfo } from '../data/salonData';

/**
 * MapSection - Server-style presentational component.
 * Features local GEO signals and embedded Google Map for Zaraj Sector A, Islamabad.
 */
export const MapSection = ({ businessInfo: propBusinessInfo, onOpenBooking }) => {
  const businessInfo = propBusinessInfo || getBusinessInfo() || {};
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-3xl bg-[#121317] border border-[#22242c] p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#22242c] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
              <MapPin className="w-4 h-4 text-white" />
              <span>Zaraj Housing Society Sector A • Islamabad</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
              Visit Urban Cuts Men's Salon
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              {businessInfo.fullAddress}
            </p>
          </div>

          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-md shrink-0"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* Embedded Map Container */}
        <div className="rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] w-full border border-[#22242c] bg-[#08090b]">
          <iframe
            title="Urban Cuts Men's Salon Zaraj Islamabad Map"
            src={businessInfo.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter invert-[0.92] hue-rotate-180 contrast-125"
          />
        </div>

        {/* Quick Local Landmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300 pt-2">
          <div className="p-3.5 rounded-xl bg-[#0a0b0d] border border-[#22242c]">
            <span className="font-bold text-white block mb-0.5">Direct Highway Access</span>
            <p className="text-neutral-400">Minutes away from Islamabad Expressway & G.T. Road junctions.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0a0b0d] border border-[#22242c]">
            <span className="font-bold text-white block mb-0.5">Neighboring DHA & Bahria</span>
            <p className="text-neutral-400">Easy 5-10 minute commute from DHA Phase 2 and Bahria Town.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0a0b0d] border border-[#22242c]">
            <span className="font-bold text-white block mb-0.5">Stress-Free Parking</span>
            <p className="text-neutral-400">Ample dedicated street parking directly in front of the salon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
