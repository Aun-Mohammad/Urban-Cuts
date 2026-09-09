import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Scissors, Calendar } from 'lucide-react';

export const Lightbox = ({ items, currentIndex, onClose, onNext, onPrev, onBookNow }) => {
  if (currentIndex === null || !items || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
      {/* Top Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={onNext}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onPrev}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image View */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
        <div className="relative rounded-2xl overflow-hidden max-h-[70vh] border border-[#22242c] shadow-2xl bg-[#090a0c]">
          <img
            src={currentItem.image}
            alt={currentItem?.title || 'Gallery image'}
            className="max-w-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Details & Direct Booking */}
        <div className="w-full bg-[#121317] border border-[#22242c] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                {currentItem?.category || 'Grooming'}
              </span>
              {currentItem?.stylist && (
                <span className="text-xs text-neutral-300 font-semibold">
                  By {currentItem.stylist}
                </span>
              )}
            </div>
            <h3 className="font-serif text-lg font-bold text-white mt-1">
              {currentItem?.title || 'Urban Cuts Style'}
            </h3>
            <p className="text-xs text-neutral-400">
              {currentItem?.description || ''}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onBookNow) onBookNow();
            }}
            className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-2 shrink-0 shadow"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book This Look</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
