import React, { useState, useEffect, useRef } from 'react';
import { Scissors, Play, Pause, ChevronLeft, ChevronRight, Video, Image, Sparkles, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

const CRAFTSMANSHIP_MEDIA = [
  {
    id: 1,
    title: "Scissor Geometry & Fade Architecture",
    tagline: "Micro-millimeter shear precision calibrated to skull contour",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-cutting-the-hair-of-a-man-in-a-barbershop-40439-large.mp4",
    discipline: "Artisanal Shear Work"
  },
  {
    id: 2,
    title: "Straight-Razor Beard Sculpting",
    tagline: "Eucalyptus hot towel preparation with surgical blade symmetry",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barber-shaving-a-mans-neck-with-a-razor-40441-large.mp4",
    discipline: "Blade Artistry"
  },
  {
    id: 3,
    title: "Capillary Hair Rejuvenation",
    tagline: "Follicle stimulation & deep moisture scalp therapy",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=85",
    videoUrl: null,
    discipline: "Scalp Trichology"
  },
  {
    id: 4,
    title: "The Botanical Steam Ritual",
    tagline: "Pore dilation, beard conditioning and softening balms",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=85",
    videoUrl: null,
    discipline: "Thermal Grooming"
  }
];

export const CraftsmanshipShowcase = ({ onOpenBooking, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mediaMode, setMediaMode] = useState('video'); // 'video' | 'carousel'
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Auto-advance carousel when in carousel mode
  useEffect(() => {
    if (mediaMode === 'carousel' && isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % CRAFTSMANSHIP_MEDIA.length);
      }, 5500);
      return () => clearInterval(timer);
    }
  }, [mediaMode, isPlaying]);

  const activeMedia = CRAFTSMANSHIP_MEDIA[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + CRAFTSMANSHIP_MEDIA.length) % CRAFTSMANSHIP_MEDIA.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % CRAFTSMANSHIP_MEDIA.length);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden rounded-3xl my-8 sm:my-14 border border-[#c8a45d]/30 shadow-2xl shadow-black/80 leather-surface">
      
      {/* BACKGROUND MEDIA STAGE (Behind the text) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {mediaMode === 'video' ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-40' : 'opacity-0'
              } scale-105`}
              src={activeMedia.videoUrl || CRAFTSMANSHIP_MEDIA[0].videoUrl}
              poster={activeMedia.image}
            />
            {/* Fallback image while video buffers */}
            {!videoLoaded && (
              <img
                src={activeMedia.image}
                alt="Craftsmanship behind text"
                className="w-full h-full object-cover opacity-35"
              />
            )}
          </div>
        ) : (
          <div className="relative w-full h-full">
            {CRAFTSMANSHIP_MEDIA.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
                }`}
                style={{ transition: 'opacity 1s ease-in-out, transform 8s ease' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Cinematic Artistic Gradients & Vignette over the background media */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/85 to-[#07080a]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,164,93,0.15),transparent_60%)]" />
        
        {/* Subtle decorative grid lines for architectural precision */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#c8a45d_1px,transparent_1px),linear-gradient(to_bottom,#c8a45d_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* TOP CONTROLS STRIP (Switch between Video & Carousel, Slide Indicators) */}
      <div className="relative z-10 pt-6 px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c8a45d] animate-ping" />
          <span className="text-[11px] font-display uppercase tracking-[0.25em] text-[#dfba73]">
            Atelier Showcase • Zaraj Sector A
          </span>
        </div>

        {/* Media Mode Switcher & Slide Controls */}
        <div className="flex items-center gap-2 sm:gap-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#c8a45d]/30 text-xs">
          <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-full">
            <button
              onClick={() => setMediaMode('video')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider transition-all ${
                mediaMode === 'video'
                  ? 'bg-[#c8a45d] text-black shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Video className="w-3 h-3" />
              <span>Video</span>
            </button>
            <button
              onClick={() => setMediaMode('carousel')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider transition-all ${
                mediaMode === 'carousel'
                  ? 'bg-[#c8a45d] text-black shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Image className="w-3 h-3" />
              <span>Carousel</span>
            </button>
          </div>

          <div className="h-3 w-[1px] bg-white/20" />

          {/* Carousel Arrows */}
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="p-1 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-[#dfba73] px-1">
              0{currentSlide + 1} / 0{CRAFTSMANSHIP_MEDIA.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-1 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* FOREGROUND ARTISTIC CONTENT (Sitting proudly on top of the media) */}
      <div className="relative z-10 py-10 sm:py-16 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Artistic Headline & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171a24]/90 border border-[#c8a45d]/40 shadow-inner">
            <Scissors className="w-3.5 h-3.5 text-[#dfba73]" />
            <span className="text-[11px] font-display uppercase tracking-[0.2em] text-[#dfba73] font-bold">
              Haute Barberie Discipline
            </span>
            <span className="text-white/30">•</span>
            <span className="text-[11px] text-neutral-300 font-serif tracking-wider">
              Zaraj Sector A
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
              The Alchemy of <br />
              <span className="gold-gradient-text font-artistic italic lowercase capitalize tracking-normal text-4xl sm:text-6xl lg:text-7xl block">
                Craftsmanship
              </span>
            </h2>

            <p className="font-artistic italic text-lg sm:text-2xl text-[#dfba73] max-w-xl leading-snug">
              "Where surgical precision meets bespoke hair artistry in Zaraj Housing Society, Islamabad."
            </p>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed max-w-xl font-light">
            Every haircut and beard session at Urban Cuts is executed with artisan dedication. We combine classic straight-razor etiquette, architectural scissor geometry, and clinical hair wellness therapies to enhance your natural bone structure.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-[#c8a45d]/20 transition-all active:scale-[0.98] flex items-center gap-2"
            >
              <span>Book Atelier Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate && onNavigate('services')}
              className="px-6 py-3.5 rounded-xl bg-black/50 border border-[#c8a45d]/30 text-neutral-200 hover:text-white hover:border-[#c8a45d]/70 text-xs uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <span>Explore Menu</span>
            </button>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2 pt-4">
            {CRAFTSMANSHIP_MEDIA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'w-8 bg-[#dfba73]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 ml-2">
              Focus: {activeMedia.discipline}
            </span>
          </div>
        </div>

        {/* Right Column: Featured Craft Card with Dynamic Discipline */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl p-6 sm:p-8 bg-[#0e1017]/90 backdrop-blur-xl border border-[#c8a45d]/30 shadow-2xl relative overflow-hidden space-y-6">
            
            {/* Ambient Gold Halo */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c8a45d]/10 blur-3xl pointer-events-none rounded-full" />
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#dfba73]" />
                <span className="text-[11px] font-display uppercase tracking-widest text-[#dfba73]">
                  Active Discipline
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400">
                Phase 0{currentSlide + 1}
              </span>
            </div>

            {/* Discipline Details */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                {activeMedia.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic font-artistic text-base">
                "{activeMedia.tagline}"
              </p>
            </div>

            {/* Craft Pillars */}
            <div className="space-y-2.5 text-xs text-neutral-300 pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                <span>Individually sterilized tools via UV autoclave for each client.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                <span>Custom consultations factoring facial morphology & hair growth vectors.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                <span>Premium organic tonics & capillary scalp enrichment formulations.</span>
              </div>
            </div>

            {/* Mini Geographic Signature */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
              <span>Street 2 B, Sector A, Zaraj</span>
              <span className="font-mono text-[#dfba73]">Open Till 12 AM</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
