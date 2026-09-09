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
        <div className="rounded-3xl bg-[#121317] border border-[#22242c] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Big Score Block */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#22242c] pb-6 lg:pb-0 lg:pr-8 space-y-2">
              <span className="font-serif text-6xl sm:text-7xl font-black text-white tracking-tight block">
                5.0
              </span>
              <div className="flex justify-center lg:justify-start text-white gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-white" />
                ))}
              </div>
              <p className="text-sm font-bold text-white uppercase tracking-wider pt-1">
                42 Google Reviews
              </p>
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/40 text-emerald-400 border border-emerald-500/30">
                100% Five-Star Satisfaction
              </span>
            </div>

            {/* Summary Line */}
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                "Rated 5 stars by 42+ clients for professional service, skilled barbers, and a clean, welcoming environment."
              </h1>

              <p className="text-sm text-neutral-300 leading-relaxed">
                We take immense pride in setting a new standard for men's grooming in Islamabad. Every review represents our commitment to clinical hygiene, precision scissor work, and genuine hospitality.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://maps.google.com/?cid=urbancuts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-300 underline underline-offset-4"
                >
                  <span>Verify on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-neutral-600">•</span>

                <span className="text-xs text-neutral-400">
                  Zaraj Housing Society, Sector A, Islamabad
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILTER CHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeFilter === opt.id
                  ? 'bg-white text-black font-bold shadow'
                  : 'bg-[#121317] text-neutral-400 hover:text-white border border-[#22242c]'
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
        <div className="bg-[#121317] border border-[#22242c] p-8 sm:p-12 rounded-3xl text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mx-auto">
            <ThumbsUp className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase">
            Have You Visited Urban Cuts?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto">
            We value your honest feedback. Help fellow Islamabad residents discover the difference in our craftsmanship.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Urban Cuts, I would like to leave feedback on my recent visit.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1c1e24] border border-[#2c2f3b] text-white hover:bg-[#252830] transition-all flex items-center gap-2"
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
