import React from 'react';
import { ShieldCheck, Check, Sparkles } from 'lucide-react';

/**
 * HygienePledge - Server-style presentational component for hygiene guarantee.
 */
export const HygienePledge = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-3xl bg-[#0e1017] border border-[#c8a45d]/25 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle gold ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a45d]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141722] border border-[#c8a45d]/30 text-xs font-bold text-[#dfba73]">
              <ShieldCheck className="w-4 h-4 text-[#dfba73]" />
              <span className="font-display uppercase tracking-widest text-[11px]">Sanitation & Hygiene Protocol</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Zero-Compromise Medical Hygiene Standard
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              We know hygiene is non-negotiable for our clients. That is why every station at Urban Cuts operates under strict medical-grade cleanliness procedures before any client takes a seat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span>Brand-new disposable razor blade for every client</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span>UV-C light autoclave sterilization for scissors and clipper guards</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span>Fresh, single-use sanitary neck strips for all capes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span>High-grade hospital disinfectant station wipes</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#08090d] border border-[#c8a45d]/25 text-center space-y-2 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-[#141722] border border-[#c8a45d]/35 flex items-center justify-center text-[#dfba73] shadow-sm shadow-[#c8a45d]/10">
              <ShieldCheck className="w-8 h-8 text-[#dfba73]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">100% Certified Clean</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Verified by 42+ Google reviewers as the cleanest, most hygienic barbershop in Zaraj, Islamabad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HygienePledge;
