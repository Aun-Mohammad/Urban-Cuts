import React from 'react';
import { Star, CheckCircle, ShieldCheck } from 'lucide-react';

/**
 * ReviewCard - Server-style presentational component for verified client reviews.
 * Displays genuine review sentiment with 5-star badges and reviewer metadata.
 */
export const ReviewCard = ({ review = {} }) => {
  const ratingCount = Math.max(1, Math.min(5, Math.floor(Number(review.rating) || 5)));
  return (
    <div className="bg-[#121317] border border-[#22242c] rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-400/40 hover:bg-[#16181e] transition-all shadow-lg">
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex text-white gap-0.5">
            {[...Array(ratingCount)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-white text-white" />
            ))}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
            {review.highlightTag || 'Verified Client'}
          </span>
        </div>

        <h3 className="font-serif text-lg font-bold text-white tracking-wide">
          "{review.headline || 'Exceptional Grooming'}"
        </h3>

        <p className="text-xs text-neutral-300 leading-relaxed italic">
          "{review.content || review.comment || 'Outstanding cut and service.'}"
        </p>

        {review.serviceMentioned && (
          <div className="text-[11px] text-neutral-400 pt-1 flex items-center gap-2">
            <span className="font-semibold text-neutral-300">Service:</span>
            <span>{review.serviceMentioned}</span>
            {review.stylistMentioned && (
              <span className="text-white font-medium">({review.stylistMentioned})</span>
            )}
          </div>
        )}
      </div>

      <div className="pt-4 mt-4 border-t border-[#22242c] flex items-center justify-between text-xs">
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
