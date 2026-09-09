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
    <div className="bg-[#121317] border border-[#22242c] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-neutral-400/50 hover:bg-[#16181e] transition-all duration-300 group">
      <div>
        {/* Service Media */}
        <div className="aspect-[16/10] overflow-hidden relative bg-[#090a0c]">
          <img
            src={service.image}
            alt={`${service.name} - Urban Cuts Islamabad`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider text-white border border-[#262832]">
            {service.category}
          </div>
          <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-mono text-neutral-300 border border-[#262832] flex items-center gap-1">
            <Clock className="w-3 h-3 text-white" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-3.5">
          <h3 className="font-serif text-xl font-bold text-white group-hover:text-neutral-100 tracking-wide">
            {service.name}
          </h3>

          <p className="text-xs text-neutral-300 leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Benefit Box */}
          <div className="p-3 rounded-xl bg-[#0a0b0d] border border-[#22242c] text-xs">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-300 flex items-center gap-1 mb-1">
              <Check className="w-3 h-3 text-white" />
              Benefit
            </span>
            <p className="text-neutral-300 italic font-normal">
              "{service.benefit}"
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
            <span>Rates:</span>
            <span className="font-medium text-white">{service.priceNote}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 border-t border-[#22242c]/60 mt-4 flex items-center gap-3">
        <a
          href={`https://wa.me/923164233912?text=${encodeURIComponent(`Hi Urban Cuts, I want to book: ${service.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#1d1f27] border border-[#333644] text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors"
          title="WhatsApp Quick Inquiry"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        <button
          onClick={handleBooking}
          className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 active:scale-95 transition-all shadow-md shadow-white/5 flex items-center justify-center gap-2"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book This Service</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
