import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { getBusinessInfo } from '../data/salonData';

/**
 * FloatingCTA - Sticky bottom bar on mobile screens.
 * Ensures maximum conversion by keeping direct communication 1 tap away.
 */
export const FloatingCTA = ({ onOpenBooking }) => {
  const businessInfo = getBusinessInfo();

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#0c0d11]/95 backdrop-blur-xl border-t border-[#262832] px-3 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2">
        {/* Call Now */}
        <a
          href={`tel:${businessInfo.phoneRaw || '+923164233912'}`}
          className="flex-1 py-2.5 rounded-xl bg-[#1a1c22] border border-[#2c2f3b] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-white" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={businessInfo.whatsappLink || 'https://wa.me/923164233912'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Now */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.5] py-2.5 rounded-xl bg-white text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-white/10 active:scale-95 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Cut</span>
        </button>
      </div>
    </aside>
  );
};

export default FloatingCTA;
