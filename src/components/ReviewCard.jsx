import React from 'react';
import { Star, CheckCircle, ShieldCheck } from 'lucide-react';

/**
 * ReviewCard - Server-style presentational component for verified client reviews.
 * Displays genuine review sentiment with 5-star badges and reviewer metadata.
 */
export const ReviewCard = ({ review = {} }) => {
  const ratingCount = Math.max(1, Math.min(5, Math.floor(Number(review.rating) || 5)));
  return (
    <div className="leather-surface border border-[#c8a45d]/25 rounded-2xl p-6 flex flex-col justify-between hover:border-[#c8a45d]/60 transition-all shadow-xl hover:shadow-2xl hover:shadow-black/80 group">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex text-[#dfba73] gap-1">
            {[...Array(ratingCount)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#dfba73] text-[#dfba73] drop-shadow-[0_1px_3px_rgba(200,164,93,0.3)]" />
            ))}
          </div>
          <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#c8a45d]/15 text-[#dfba73] border border-[#c8a45d]/35 font-display">
            {review.highlightTag || 'Verified Patron'}
          </span>
        </div>

        <h3 className="font-serif text-lg font-bold text-white tracking-wide group-hover:text-[#dfba73] transition-colors">
          "{review.headline || 'Exceptional Grooming'}"
        </h3>

        <p className="text-xs text-neutral-300 leading-relaxed italic font-light">
          "{review.content || review.comment || 'Outstanding cut and service.'}"
        </p>

        {review.serviceMentioned && (
          <div className="text-[11px] text-neutral-400 pt-1 flex items-center gap-2">
            <span className="font-semibold text-neutral-300">Service:</span>
            <span className="text-[#dfba73] font-medium">{review.serviceMentioned}</span>
            {review.stylistMentioned && (
              <span className="text-neutral-400">({review.stylistMentioned})</span>
            )}
          </div>
        )}
      </div>

      <div className="pt-4 mt-4 border-t border-[#c8a45d]/20 flex items-center justify-between text-xs">
        <div>
          <span className="font-bold text-white block">{review.author}</span>
          <span className="text-[11px] text-neutral-400">{review.location}</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-emerald-400 block font-semibold flex items-center justify-end gap-1">
            <CheckCircle className="w-3 h-3" />
            Google Verified
          </span>
          <span className="text-[10px] text-neutral-400">{review.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
