import React from 'react';
import { ShieldCheck, Award, Sparkles, Clock, HeartHandshake, Compass } from 'lucide-react';

/**
 * WhyChooseUs - Server-style presentational component.
 * Visual pillars of the barbershop craft.
 */
export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-white" />,
      title: "Master Barber Artisans",
      desc: "Our resident barbers Nabeel and Shahzaib have over 15 combined years of craft cutting, skin fades, and straight-razor detailing."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: "Clinical Hygiene Protocols",
      desc: "Fresh sterilized shears and clippers for every client, brand-new single-use razor blades, and UV sterilizers on every station."
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      title: "Open Daily Until Midnight",
      desc: "Operating 7 days a week from 11:00 AM to 12:00 AM. Perfect for evening appointments and late-night post-work grooming."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-white" />,
      title: "Humble, Patient Consultations",
      desc: "We analyze head curvature, hair growth patterns, and face shape before touching clippers to ensure precision."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      title: "Capillary Care Specialists",
      desc: "Dedicated restorative hair and scalp treatments designed to counter hard water damage, stress thinning, and dry scalp."
    },
    {
      icon: <Compass className="w-5 h-5 text-white" />,
      title: "Convenient Zaraj Location",
      desc: "Located on Street 2 B in Sector A, Zaraj Housing Society, directly off the Islamabad Expressway with hassle-free parking."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#262832] text-xs font-bold text-neutral-300">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>The Urban Cuts Standard</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Why Discerning Men Choose Urban Cuts
        </h2>
        <p className="text-sm text-neutral-300 max-w-2xl mx-auto">
          Built on precision, hospitality, and pristine hygiene. Here is why clients across Islamabad and Rawalpindi rate us 5.0 stars on Google.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#121317] border border-[#22242c] hover:border-neutral-400/30 hover:bg-[#16181e] transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              {pillar.icon}
            </div>
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              {pillar.title}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
