import React from 'react';
import { Star, Clock, MapPin, ShieldCheck, Scissors } from 'lucide-react';
import { getBusinessInfo } from '../data/salonData';

/**
 * TrustStrip - Server-style presentational component.
 * Pure rendering without client state or side effects.
 */
export const TrustStrip = ({ businessInfo: propBusinessInfo }) => {
  const businessInfo = propBusinessInfo || getBusinessInfo() || {};
  const rating = typeof businessInfo.rating === 'number' ? businessInfo.rating.toFixed(1) : (businessInfo.rating || '5.0');
  const reviewsCount = businessInfo.reviewsCount || 42;

  return (
    <section className="w-full border-y border-[#262832] bg-[#0c0d10]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          {/* 1. Rating */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#262832] flex items-center justify-center text-white shrink-0">
              <Star className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white text-base tracking-tight font-mono">
                  {rating}
                </span>
                <span className="text-[11px] text-neutral-400 font-semibold">
                  ({reviewsCount} Google Reviews)
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-medium">100% 5-Star Reputation</p>
            </div>
          </div>

          {/* 2. Working Hours */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#262832] flex items-center justify-center text-neutral-200 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-xs uppercase tracking-wider block">
                Open Daily Till Midnight
              </span>
              <p className="text-[11px] text-neutral-400 font-medium">11:00 AM – 12:00 AM</p>
            </div>
          </div>

          {/* 3. Hygiene Standard */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#262832] flex items-center justify-center text-neutral-200 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-xs uppercase tracking-wider block">
                UV Sterilization
              </span>
              <p className="text-[11px] text-neutral-400 font-medium">Single-Use Razor Blades</p>
            </div>
          </div>

          {/* 4. Location */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-[#262832] flex items-center justify-center text-neutral-200 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-xs uppercase tracking-wider block truncate max-w-[170px]">
                Zaraj Housing Society
              </span>
              <p className="text-[11px] text-neutral-400 font-medium">Sector A, Islamabad</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
