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
    <aside aria-label="Quick Actions" className="fixed bottom-0 left-0 right-0 z-30 sm:hidden leather-surface border-t border-[#c8a45d]/30 px-3 py-2.5 shadow-2xl shadow-black/90">
      <div className="flex items-center gap-2">
        {/* Call Now */}
        <a
          href={`tel:${businessInfo.phoneRaw || '+923164233912'}`}
          className="flex-1 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/30 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#dfba73]" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={businessInfo.whatsappLink || 'https://wa.me/923164233912'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-sm shadow-emerald-950/40"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Now */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.5] py-2.5 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-[#c8a45d]/20 active:scale-95 transition-transform font-display"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Atelier</span>
        </button>
      </div>
    </aside>
  );
};

export default FloatingCTA;
