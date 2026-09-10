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
    <div className="bg-[#0e1017] border border-[#c8a45d]/25 rounded-2xl overflow-hidden shadow-xl hover:border-[#c8a45d]/60 hover:shadow-2xl hover:shadow-black/70 transition-all flex flex-col justify-between group">
      <div>
        <div className="aspect-[4/3] overflow-hidden relative bg-[#07080a]">
          <img
            src={person.image}
            alt={`${person.name || 'Master Barber'} - Master Barber at Urban Cuts`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />
          <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-[#dfba73] font-bold uppercase tracking-widest border border-[#c8a45d]/35 font-display shadow-sm">
            {person.experience || 'Master Artisan'}
          </div>
        </div>

        <div className="p-6 space-y-3.5">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white tracking-wide group-hover:text-[#dfba73] transition-colors">
              {person.name}
            </h3>
            <p className="text-xs text-[#dfba73] font-semibold tracking-wider uppercase font-display">
              {person.role}
            </p>
          </div>

          <p className="text-xs text-neutral-300 leading-relaxed font-light">
            {person.bio}
          </p>

          <div className="p-3.5 rounded-xl bg-[#08090d] border border-[#c8a45d]/20 space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#dfba73] block font-display">
              Signature Mastery
            </span>
            <p className="text-xs text-neutral-200 font-medium font-artistic text-sm italic">
              "{person.signatureStyle}"
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 mt-2">
        <button
          onClick={handleBooking}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#141722] border border-[#c8a45d]/30 text-neutral-200 hover:bg-gradient-to-r hover:from-[#dfba73] hover:via-[#c8a45d] hover:to-[#9a7836] hover:text-black hover:border-transparent transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <Scissors className="w-3.5 h-3.5" />
          <span>Book with {person.name || 'Barber'}</span>
        </button>
      </div>
    </div>
  );
};

export default StylistCard;
