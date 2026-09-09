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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-xs font-bold text-neutral-300">
          <Scissors className="w-3.5 h-3.5 text-white" />
          <span>Craftsmanship Menu</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Specialized Barbering & Hair Care
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
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
                  ? 'bg-white text-black font-bold shadow'
                  : 'bg-[#121317] text-neutral-400 hover:text-white border border-[#22242c]'
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
        <div className="rounded-3xl bg-[#121317] border border-[#22242c] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-400">
                Complimentary Service
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Every Session Includes Face-Shape Analysis & Product Guidance
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Not sure whether a low taper fade or a textured crop suits you best? Our barbers will evaluate your hair growth pattern, density, and daily styling commitment before touching shears to hair.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Chair</span>
              </button>

              <a
                href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1a1b22] border border-[#272935] text-white hover:bg-[#22242f] transition-all flex items-center justify-center gap-2"
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
        <div className="border border-[#22242c] rounded-2xl p-6 bg-[#0a0b0d] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">100% Sterile Instrumentation Guaranteed</p>
              <p className="text-xs text-neutral-400">
                Fresh surgical-grade razor blades, autoclave-sterilized shears, and sanitized clipper guards for every single guest.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('about')}
            className="text-xs font-semibold text-neutral-300 hover:text-white underline underline-offset-4 shrink-0"
          >
            Read Hygiene Protocol
          </button>
        </div>
      </section>
    </div>
  );
}
