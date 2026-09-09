import React from 'react';
import { Scissors, Award, Calendar } from 'lucide-react';

/**
 * StylistCard - Presentational component for signature barbers (Nabeel & Shahzaib)
 */
export const StylistCard = ({ stylist, member, onOpenBooking, onBook }) => {
  const person = stylist || member || {};
  const handleBooking = () => {
    if (onBook) {
      onBook(person.id);
    } else if (onOpenBooking) {
      onOpenBooking(person.id);
    }
  };

  return (
    <div className="bg-[#121317] border border-[#22242c] rounded-2xl overflow-hidden shadow-xl hover:border-neutral-400/40 transition-all flex flex-col justify-between group">
      <div>
        <div className="aspect-[4/3] overflow-hidden relative bg-[#090a0c]">
          <img
            src={person.image}
            alt={`${person.name || 'Master Barber'} - Master Barber at Urban Cuts`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white font-bold uppercase tracking-wider border border-[#262832]">
            {person.experience || 'Master Artisan'}
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
              {person.name}
            </h3>
            <p className="text-xs text-neutral-300 font-semibold tracking-wider uppercase">
              {person.role}
            </p>
          </div>

          <p className="text-xs text-neutral-300 leading-relaxed">
            {person.bio}
          </p>

          <div className="p-3 rounded-xl bg-[#0a0b0d] border border-[#22242c] space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
              Signature Mastery
            </span>
            <p className="text-xs text-neutral-200 font-medium">
              {person.signatureStyle}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 mt-2">
        <button
          onClick={handleBooking}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1d1f27] border border-[#333644] text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
        >
          <Scissors className="w-3.5 h-3.5" />
          <span>Book with {person.name || 'Barber'}</span>
        </button>
      </div>
    </div>
  );
};

export default StylistCard;
