import React from 'react';
import { HelpCircle } from 'lucide-react';
import { getFaqs } from '../data/salonData';

/**
 * FaqSection - Server-style presentational component.
 * Optimized for Answer Engine Optimization (AEO) and conversational search engines.
 */
export const FaqSection = ({ faqs: propFaqs }) => {
  const faqs = propFaqs || getFaqs() || [];

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-xs font-bold text-neutral-300">
          <HelpCircle className="w-3.5 h-3.5 text-white" />
          <span>Helpful Information & Answers</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400">
          Everything you need to know before visiting Urban Cuts Men's Salon in Zaraj Housing Society.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-[#121317] border border-[#22242c] rounded-2xl p-6 space-y-2 hover:border-neutral-400/30 transition-all"
          >
            <h4 className="font-serif text-base font-bold text-white flex items-start gap-2.5">
              <span className="text-white font-mono shrink-0">Q.</span>
              <span>{faq.q || faq.question}</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-6">
              {faq.a || faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
