import React, { useState } from 'react';
import { getServices, getBusinessInfo } from '../../data/salonData';
import { ServiceCard } from '../../components/ServiceCard';
import { JsonLd } from '../../components/JsonLd';
import { getServicesSchema } from '../../data/schemas';
import { Scissors, Sparkles, Clock, Check, Calendar, MessageSquare, Phone } from 'lucide-react';

/**
 * Services Page (app/services/page.jsx & app/services/page.js)
 * Implements Schema.org (OfferCatalog, Service schemas with prices, BreadcrumbList).
 */
export default function ServicesPage({ onNavigate, onOpenBooking }) {
  const [filter, setFilter] = useState('all');
  const services = getServices();
  const businessInfo = getBusinessInfo();
  const servicesSchemas = getServicesSchema(businessInfo, services);

  const categories = [
    { id: 'all', label: 'All Services (8+)' },
    { id: 'hair', label: 'Haircuts & Styling' },
    { id: 'beard', label: 'Beard Artistry' },
    { id: 'treatment', label: 'Capillary & Scalp Care' },
    { id: 'combo', label: 'Signature Combos' },
  ];

  const filteredServices = filter === 'all'
    ? services
    : services.filter(s => s.category === filter);

  return (
    <div className="w-full space-y-16 py-8">
      {/* Schema.org Structured Data */}
      {servicesSchemas.map((schema, index) => (
        <JsonLd key={index} id={`services-schema-${index}`} schema={schema} />
      ))}

      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141722] border border-[#c8a45d]/30 text-xs font-bold text-[#dfba73]">
          <Scissors className="w-3.5 h-3.5 text-[#dfba73]" />
          <span className="font-display uppercase tracking-widest text-[11px]">Artisanal Menu</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Specialized Barbering & <br className="hidden sm:inline" />
          <span className="gold-gradient-text font-artistic italic lowercase capitalize tracking-normal font-bold">
            Hair Care Repertoire
          </span>
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
          Every service at Urban Cuts begins with an in-depth consultation. All procedures adhere to clinical hospital-grade hygiene protocols.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black font-bold shadow-md shadow-[#c8a45d]/20'
                  : 'bg-[#0e1017] text-neutral-400 hover:text-white border border-[#c8a45d]/20 hover:border-[#c8a45d]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={onOpenBooking}
            />
          ))}
        </div>
      </section>

      {/* 3. TRANSPARENCY & CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl leather-surface border border-[#c8a45d]/35 p-6 sm:p-10 shadow-2xl shadow-black/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#c8a45d]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-[#dfba73] font-display">
                Complimentary Consultation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Every Session Includes Face-Shape Analysis & Hair Guidance
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                Not sure whether a low taper fade or a textured crop suits you best? Our barbers will evaluate your hair growth pattern, density, and daily styling commitment before touching shears to hair.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md shadow-[#c8a45d]/20 font-display active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Chair</span>
              </button>

              <a
                href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#090b10] border border-[#c8a45d]/25 text-white hover:text-[#dfba73] hover:border-[#c8a45d]/50 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL STANDARDS NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#c8a45d]/25 rounded-2xl p-6 leather-surface flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-black/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#141722] border border-[#c8a45d]/40 flex items-center justify-center text-[#dfba73] shrink-0 shadow-sm shadow-[#c8a45d]/10">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">100% Sterile Instrumentation Guaranteed</p>
              <p className="text-xs text-neutral-400 font-light">
                Fresh surgical-grade razor blades, autoclave-sterilized shears, and sanitized clipper guards for every single guest.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('about')}
            className="text-xs font-semibold text-[#dfba73] hover:text-white underline underline-offset-4 shrink-0 transition-colors font-display"
          >
            Read Hygiene Protocol
          </button>
        </div>
      </section>
    </div>
  );
}
