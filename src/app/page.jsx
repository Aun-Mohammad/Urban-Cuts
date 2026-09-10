import React from 'react';
import { Logo } from '../components/Logo';
import { TrustStrip } from '../components/TrustStrip';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewCard } from '../components/ReviewCard';
import { StylistCard } from '../components/StylistCard';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HygienePledge } from '../components/HygienePledge';
import { MapSection } from '../components/MapSection';
import { FaqSection } from '../components/FaqSection';
import { JsonLd } from '../components/JsonLd';
import { getHomeSchema } from '../data/schemas';
import { 
  getBusinessInfo, getServices, getReviews, getTeamMembers, getFaqs 
} from '../data/salonData';
import { 
  Calendar, Phone, MessageSquare, Star, Scissors, 
  ArrowRight, Sparkles, ShieldCheck, CheckCircle 
} from 'lucide-react';

/**
 * Root Home Page (app/page.jsx & app/page.js)
 * Implements comprehensive Schema.org (BarberShop, WebSite, FAQPage, Breadcrumbs).
 */
export default function HomePage({ onNavigate, onOpenBooking }) {
  const businessInfo = getBusinessInfo();
  const services = getServices();
  const reviews = getReviews();
  const team = getTeamMembers();
  const faqs = getFaqs();

  const featuredServices = services.filter(s => s.featured);
  const homeSchemas = getHomeSchema(businessInfo, services, faqs, reviews);

  return (
    <div className="w-full space-y-16 sm:space-y-24">
      {/* Schema.org JSON-LD Structured Data for Home Page */}
      {homeSchemas.map((schema, index) => (
        <JsonLd key={index} id={`home-schema-${index}`} schema={schema} />
      ))}

      {/* 1. HERO SECTION - Monochrome & Silver Steel palette with exact Logo */}
      <section className="relative pt-12 pb-16 sm:pt-12 sm:pb-28 overflow-hidden">
        {/* Subtle geometric light glow behind logo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.03] blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/20 text-xs font-semibold text-neutral-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open Daily Until Midnight • Zaraj Housing Society, Sector A</span>
          </div>

          {/* Central Official Logo Presentation */}
          <div className="py-2">
            <Logo size="hero" showSubtitle={true} className="mx-auto" />
          </div>

          {/* Headline & Subheadline */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]">
              {businessInfo.heroHeadline || "Precision Fades. Sharp Beard Lines."}{" "}
              <span className="text-neutral-400 font-normal block sm:inline">
                {businessInfo.heroHighlight || "In Zaraj Housing Society, Islamabad."}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              {businessInfo.heroSubheadline}
            </p>
          </div>

          {/* High-Contrast Conversion CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-white text-black hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2.5 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Urban Cuts, I would like to book a grooming appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#14151a] hover:bg-[#1c1e24] text-white border border-[#272a33] transition-all flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${businessInfo.phone}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-transparent hover:bg-white/5 text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{businessInfo.phone}</span>
            </a>
          </div>

          {/* Micro-Trust Elements */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Star className="w-4 h-4 text-white fill-white" />
              <strong className="text-white">5.0 Star Rated</strong> (42+ Verified Google Reviews)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-neutral-300" />
              Sterilized Tools Every Client
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-neutral-300" />
              Walk-Ins Welcomed
            </span>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. SIGNATURE SERVICES TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#22242c] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 text-[11px] font-bold text-neutral-300 uppercase tracking-widest">
              <Scissors className="w-3 h-3 text-white" />
              <span>Craftsmanship</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Precision Barbering & Hair Care
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl">
              From razor-sharp skin fades to specialized capillary hair rejuvenation, every cut is tailored to your jawline and hair profile.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors group"
          >
            <span>View Full Menu (8+ Services)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={onOpenBooking}
            />
          ))}
        </div>
      </section>

      {/* 4. HOSPITAL-GRADE HYGIENE PLEDGE */}
      <HygienePledge />

      {/* 5. WHY URBAN CUTS SECTION */}
      <WhyChooseUs onOpenBooking={onOpenBooking} />

      {/* 6. MASTER BARBERS & STYLISTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-xs font-bold text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Master Barbers</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Meet Nabeel & Shahzaib
          </h2>
          <p className="text-sm text-neutral-400">
            Dedicated artisans with over a decade of collective experience in fade precision, beard sculpting, and hair wellness.
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

      {/* 7. VERIFIED REVIEWS CAROUSEL / GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#22242c] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 text-[11px] font-bold text-neutral-300 uppercase tracking-widest">
              <Star className="w-3 h-3 text-white fill-white" />
              <span>Client Voices</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Rated 5.0 Stars by 42+ Gentlemen
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl">
              Real reviews from verified clients in Zaraj Housing Society, DHA Phase 2, and greater Islamabad.
            </p>
          </div>

          <button
            onClick={() => onNavigate('reviews')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors group"
          >
            <span>Read All 42 Reviews</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* 8. LOCATION & OPERATING HOURS */}
      <MapSection onOpenBooking={onOpenBooking} />

      {/* 9. FAQ SECTION */}
      <FaqSection />

      {/* 10. PRE-FOOTER INVITATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl bg-[#121317] border border-[#22242c] p-8 sm:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="font-serif text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Experience Islamabad's Finest Barbering Sanctuary
            </h2>
            <p className="text-sm text-neutral-300">
              Open 7 days a week from 11:00 AM until midnight. Reserve your consultation or step in at Zaraj Housing Society Sector A.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-white text-black hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Your Cut</span>
            </button>
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#181920] border border-[#2c2f3b] text-white hover:bg-[#20222b] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct Line</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
