import React, { useState } from 'react';
import { getReviews, getBusinessInfo } from '../../data/salonData';
import { ReviewCard } from '../../components/ReviewCard';
import { JsonLd } from '../../components/JsonLd';
import { getReviewsSchema } from '../../data/schemas';
import { Star, ExternalLink, ThumbsUp, MessageSquare, Calendar } from 'lucide-react';

/**
 * Reviews Page (app/reviews/page.jsx & app/reviews/page.js)
 * Implements Schema.org (AggregateRating 5.0, Review items, BreadcrumbList).
 */
export default function ReviewsPage({ onNavigate, onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const reviews = getReviews();
  const businessInfo = getBusinessInfo();
  const reviewsSchemas = getReviewsSchema(businessInfo, reviews);

  const filterOptions = [
    { id: 'all', label: 'All Reviews (42)' },
    { id: 'fade', label: 'Precision Fades' },
    { id: 'hygiene', label: 'Hygiene & Cleanliness' },
    { id: 'value', label: 'Reasonable Rates' },
    { id: 'service', label: 'Staff & Hospitality' },
  ];

  const filteredReviews = activeFilter === 'all'
    ? reviews
    : reviews.filter(r => {
        if (activeFilter === 'fade') return r.highlightTag.toLowerCase().includes('fade');
        if (activeFilter === 'hygiene') return r.highlightTag.toLowerCase().includes('hygien');
        if (activeFilter === 'value') return r.highlightTag.toLowerCase().includes('rate');
        if (activeFilter === 'service') return r.highlightTag.toLowerCase().includes('consultation') || r.highlightTag.toLowerCase().includes('open');
        return true;
      });

  return (
    <div className="w-full space-y-16 py-8">
      {/* Schema.org Structured Data */}
      {reviewsSchemas.map((schema, index) => (
        <JsonLd key={index} id={`reviews-schema-${index}`} schema={schema} />
      ))}

      {/* 1. PROMINENT RATING HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl leather-spotlight border border-[#c8a45d]/35 p-8 sm:p-12 shadow-2xl shadow-black/80 relative overflow-hidden">
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-[#dfba73]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Big Score Block */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#c8a45d]/20 pb-6 lg:pb-0 lg:pr-8 space-y-3">
              <span className="font-serif text-6xl sm:text-7xl font-black gold-gradient-text tracking-tight block drop-shadow-[0_2px_14px_rgba(200,164,93,0.3)]">
                5.0
              </span>
              <div className="flex justify-center lg:justify-start text-[#dfba73] gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#dfba73] text-[#dfba73] drop-shadow-[0_1px_4px_rgba(200,164,93,0.4)]" />
                ))}
              </div>
              <p className="text-sm font-bold text-white uppercase tracking-widest pt-1 font-display">
                42 Verified Client Reviews
              </p>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#c8a45d]/15 text-[#dfba73] border border-[#c8a45d]/35 font-display">
                100% Five-Star Distinction
              </span>
            </div>

            {/* Summary Line */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a45d]/10 border border-[#c8a45d]/30 text-xs font-bold text-[#dfba73] font-display">
                <span>Atelier Guest Sentiment</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug tracking-wide">
                "Rated 5 stars by 42+ clients for master craftsmanship, clinical hygiene, and honest Pakistani hospitality."
              </h1>

              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                We take immense pride in setting a new standard for men's grooming in Islamabad. Every review represents our commitment to hospital-grade sanitation, bespoke scissor sculpting, and respectful attentiveness.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://maps.google.com/?cid=urbancuts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#dfba73] hover:text-white underline underline-offset-4 transition-colors font-display"
                >
                  <span>Verify on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-[#c8a45d]/40">•</span>

                <span className="text-xs text-neutral-400 font-light">
                  Zaraj Housing Society, Sector A, Islamabad
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILTER CHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeFilter === opt.id
                  ? 'bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black font-bold shadow-md shadow-[#c8a45d]/25'
                  : 'leather-surface text-neutral-300 hover:text-[#dfba73] border border-[#c8a45d]/25 hover:border-[#c8a45d]/60'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. REVIEWS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* 4. LEAVE A REVIEW / CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="leather-surface border border-[#c8a45d]/35 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl shadow-black/90 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-[#141722] border border-[#c8a45d]/40 flex items-center justify-center text-[#dfba73] mx-auto shadow-md shadow-[#c8a45d]/10">
            <ThumbsUp className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
            Have You Visited Urban Cuts?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto font-light leading-relaxed">
            We value your honest feedback. Help fellow Islamabad residents discover the difference in our craftsmanship and clinical hygiene standards.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-[#c8a45d]/20 font-display"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Urban Cuts, I would like to leave feedback on my recent visit.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#090b10] border border-[#c8a45d]/30 text-white hover:text-[#dfba73] hover:border-[#c8a45d]/60 transition-all flex items-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Send Us Feedback</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
