import React from 'react';
import { Logo } from '../../components/Logo';
import { StylistCard } from '../../components/StylistCard';
import { WhyChooseUs } from '../../components/WhyChooseUs';
import { HygienePledge } from '../../components/HygienePledge';
import { JsonLd } from '../../components/JsonLd';
import { getAboutSchema } from '../../data/schemas';
import { getBusinessInfo, getTeamMembers } from '../../data/salonData';
import { Scissors, ShieldCheck, HeartHandshake, Sparkles, Calendar, MessageSquare, Phone } from 'lucide-react';

/**
 * About Page (app/about/page.jsx & app/about/page.js)
 * Implements Schema.org (AboutPage, Organization, Person for Stylists, BreadcrumbList).
 */
export default function AboutPage({ onNavigate, onOpenBooking }) {
  const businessInfo = getBusinessInfo();
  const team = getTeamMembers();
  const aboutSchemas = getAboutSchema(businessInfo, team);

  return (
    <div className="w-full space-y-16 py-8">
      {/* Schema.org Structured Data */}
      {aboutSchemas.map((schema, index) => (
        <JsonLd key={index} id={`about-schema-${index}`} schema={schema} />
      ))}

      {/* 1. HERO STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-xs font-bold text-neutral-300">
            <Scissors className="w-3.5 h-3.5 text-white" />
            <span>The Urban Cuts Standard</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Craftsmanship. Clinical Hygiene. Honest Hospitality.
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Founded to provide Islamabad with an elevated men's grooming sanctuary. Located in Zaraj Housing Society, Sector A, Urban Cuts pairs old-world barbering discipline with modern hair therapies.
          </p>
        </div>

        {/* Story Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed bg-[#121317] border border-[#22242c] p-6 sm:p-8 rounded-3xl">
            <h3 className="font-serif text-2xl font-bold text-white">
              A Barbershop Built on Precision, Not Speed
            </h3>
            <p>
              In an industry that frequently rushes clients through the chair in fifteen minutes, Urban Cuts was founded with a completely different mindset: <em>every cut is a custom craft piece.</em>
            </p>
            <p>
              When you sit in our chair, your barber starts with an active consultation—evaluating your jawline, cheek structure, hair density, and daily styling routine. Whether it's a skin taper, a classic scissor trim, or beard line-up, our cuts are engineered to grow out gracefully.
            </p>
            <p>
              Operating 7 days a week until midnight, we ensure hard-working professionals can enjoy a relaxing grooming session without weekend rush or daytime scheduling stress.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#22242c] shadow-2xl relative aspect-[4/3] bg-[#090a0c]">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80"
              alt="Urban Cuts Men's Salon Interior Zaraj Islamabad"
              className="w-full h-full object-cover filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-300">Sanctuary</span>
                <p className="font-serif text-lg font-bold text-white">Street 2 B, Zaraj Housing Society, Sector A</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121317] border border-[#22242c] p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Scissors className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white uppercase">Tailored Scissor & Fade Work</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              No generic clippering. We balance textures, crown cowlicks, and head shape for a balanced aesthetic that lasts for weeks.
            </p>
          </div>

          <div className="bg-[#121317] border border-[#22242c] p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white uppercase">Clinical Hygiene Protocol</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Medical-grade autoclave sterilization, fresh disposable neck strips, and single-use razors. Your health is our highest priority.
            </p>
          </div>

          <div className="bg-[#121317] border border-[#22242c] p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white uppercase">Respectful Client Experience</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Warm hospitality, complimentary beverages, curated relaxing ambience, and barbers who actively listen to what you want.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MEET THE MASTER BARBERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-xs font-bold text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Master Craftsmen</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Meet Nabeel & Shahzaib
          </h2>
          <p className="text-sm text-neutral-400">
            Passionate craftsmen who take pride in shaping Pakistan's modern men's grooming culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <StylistCard
              key={member.id}
              member={member}
              onBook={() => onOpenBooking()}
            />
          ))}
        </div>
      </section>

      {/* 4. HOSPITAL-GRADE HYGIENE PLEDGE */}
      <HygienePledge />

      {/* 5. WHY CHOOSE US */}
      <WhyChooseUs onOpenBooking={onOpenBooking} />

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121317] border border-[#22242c] p-8 sm:p-12 rounded-3xl text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white uppercase">
            Ready to Elevate Your Grooming Routine?
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Book your session with Nabeel or Shahzaib today. Open 7 days a week from 11:00 AM until midnight.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1c1e24] border border-[#2c2f3b] text-white hover:bg-[#252830] transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
