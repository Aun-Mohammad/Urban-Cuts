import React from 'react';
import { Clock, Scissors, Calendar, MessageSquare, Check } from 'lucide-react';

/**
 * ServiceCard - Presentational component for rendering individual salon services.
 * Styled in high-contrast black and chrome/white according to the Urban Cuts logo.
 */
export const ServiceCard = ({ service, onOpenBooking, onBook }) => {
  const handleBooking = () => {
    if (onBook) {
      onBook(service?.id);
    } else if (onOpenBooking) {
      onOpenBooking(service?.id);
    }
  };

  return (
    <div className="bg-[#0e1017] border border-[#c8a45d]/20 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#c8a45d]/50 hover:bg-[#131622] hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 group">
      <div>
        {/* Service Media */}
        <div className="aspect-[16/10] overflow-hidden relative bg-[#07080a]">
          <img
            src={service.image}
            alt={`${service.name} - Urban Cuts Islamabad`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />
          
          <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-[#dfba73] border border-[#c8a45d]/35 font-display shadow-sm">
            {service.category}
          </div>
          <div className="absolute top-3 right-3 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-mono text-neutral-300 border border-[#c8a45d]/25 flex items-center gap-1 shadow-sm">
            <Clock className="w-3 h-3 text-[#dfba73]" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-3.5">
          <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#dfba73] transition-colors tracking-wide">
            {service.name}
          </h3>

          <p className="text-xs text-neutral-300 leading-relaxed font-light">
            {service.shortDesc}
          </p>

          {/* Benefit Box */}
          <div className="p-3.5 rounded-xl bg-[#08090d] border border-[#c8a45d]/20 text-xs">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#dfba73] flex items-center gap-1.5 mb-1 font-display">
              <Check className="w-3 h-3 text-[#dfba73]" />
              Artisanal Standard
            </span>
            <p className="text-neutral-300 italic font-artistic text-sm">
              "{service.benefit}"
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
            <span className="font-display tracking-wider text-[11px] uppercase">Session Tier:</span>
            <span className="font-semibold text-[#dfba73] font-mono">{service.priceNote}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center gap-3">
        <a
          href={`https://wa.me/923164233912?text=${encodeURIComponent(`Hi Urban Cuts, I want to book: ${service.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#141722] border border-[#c8a45d]/25 text-neutral-300 hover:text-white hover:border-[#c8a45d]/50 transition-colors shadow-sm"
          title="WhatsApp Quick Inquiry"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
        </a>

        <button
          onClick={handleBooking}
          className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c8a45d]/15 flex items-center justify-center gap-2"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Session</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
