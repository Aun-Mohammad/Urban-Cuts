import React from 'react';
import { ShieldCheck, Award, Sparkles, Clock, HeartHandshake, Compass } from 'lucide-react';

/**
 * WhyChooseUs - Server-style presentational component.
 * Visual pillars of the barbershop craft.
 */
export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-[#dfba73]" />,
      title: "Master Barber Artisans",
      desc: "Our resident barbers Nabeel and Shahzaib have over 15 combined years of craft cutting, skin fades, and straight-razor detailing."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#dfba73]" />,
      title: "Hospital Hygiene Protocols",
      desc: "Fresh sterilized shears and clippers for every client, brand-new single-use razor blades, and UV sterilizers on every station."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#dfba73]" />,
      title: "Open Daily Until Midnight",
      desc: "Operating 7 days a week from 11:00 AM to 12:00 AM. Perfect for evening appointments and late-night post-work grooming."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#dfba73]" />,
      title: "Bespoke Facial Consultations",
      desc: "We analyze head curvature, hair growth patterns, and face shape before touching clippers to ensure surgical symmetry."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#dfba73]" />,
      title: "Capillary Care Specialists",
      desc: "Dedicated restorative hair and scalp treatments designed to counter hard water damage, stress thinning, and dry scalp."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#dfba73]" />,
      title: "Convenient Zaraj Location",
      desc: "Located on Street 2 B in Sector A, Zaraj Housing Society, directly off the Islamabad Expressway with hassle-free parking."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141722] border border-[#c8a45d]/30 text-xs font-bold text-[#dfba73]">
          <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
          <span className="font-display uppercase tracking-widest text-[11px]">The Urban Cuts Standard</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Why Discerning Men Choose <br />
          <span className="gold-gradient-text font-artistic italic lowercase capitalize tracking-normal font-bold">
            Urban Cuts Atelier
          </span>
        </h2>
        <p className="text-sm text-neutral-300 max-w-2xl mx-auto font-light">
          Built on precision, hospitality, and pristine hygiene. Here is why clients across Islamabad and Rawalpindi rate us 5.0 stars on Google.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl bg-[#0e1017] border border-[#c8a45d]/20 hover:border-[#c8a45d]/50 hover:bg-[#131622] hover:shadow-xl hover:shadow-black/60 transition-all duration-300 space-y-4 group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#141722] border border-[#c8a45d]/30 flex items-center justify-center shadow-sm shadow-[#c8a45d]/10 group-hover:border-[#c8a45d]/60 group-hover:scale-105 transition-all">
              {pillar.icon}
            </div>
            <h3 className="font-serif text-lg font-bold text-white tracking-wide group-hover:text-[#dfba73] transition-colors">
              {pillar.title}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
