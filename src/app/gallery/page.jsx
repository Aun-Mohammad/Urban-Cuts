import React, { useState } from 'react';
import { getGallery } from '../../data/salonData';
import { Lightbox } from '../../components/Lightbox';
import { JsonLd } from '../../components/JsonLd';
import { getGallerySchema } from '../../data/schemas';
import { Sparkles, Eye, Calendar } from 'lucide-react';

/**
 * Gallery Page (app/gallery/page.jsx & app/gallery/page.js)
 * Implements Schema.org (ImageGallery, ImageObject items, BreadcrumbList).
 */
export default function GalleryPage({ onNavigate, onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryItems = getGallery();
  const gallerySchemas = getGallerySchema({}, galleryItems);

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'fades', label: 'Fades & Haircuts' },
    { id: 'beards', label: 'Beard Sculpting' },
    { id: 'treatments', label: 'Scalp & Hair Care' },
    { id: 'interior', label: 'Salon Ambience & Shears' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="w-full space-y-16 py-8">
      {/* Schema.org Structured Data */}
      {gallerySchemas.map((schema, index) => (
        <JsonLd key={index} id={`gallery-schema-${index}`} schema={schema} />
      ))}

      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c8a45d]/10 border border-[#c8a45d]/30 text-xs font-bold text-[#dfba73] font-display">
          <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
          <span>Visual Craftsmanship • Atelier Portfolio</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Grooming & Barbering Portfolio
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
          Real craftsmanship from master barbers Nabeel and Shahzaib. Every cut, beard contour, and capillary treatment is tailored to client bone structure.
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black font-bold shadow-md shadow-[#c8a45d]/25 font-display'
                  : 'leather-surface text-neutral-300 hover:text-[#dfba73] border border-[#c8a45d]/25 hover:border-[#c8a45d]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-3xl overflow-hidden bg-[#090b10] border border-[#c8a45d]/30 cursor-pointer aspect-[4/3] transform transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a45d]/70 hover:shadow-2xl hover:shadow-black/90 shadow-xl"
            >
              <img
                src={item.image}
                alt={item?.title || 'Urban Cuts Style'}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#c8a45d]/20 border border-[#c8a45d]/40 text-[9px] font-bold tracking-widest text-[#dfba73] uppercase mb-2 font-display">
                    {item.tag || item.category || 'Portfolio'}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-[#dfba73] transition-colors">
                    {item?.title || 'Urban Cuts Style'}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2 font-light">
                    {item?.description || ''}
                  </p>
                </div>

                {/* View indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-[#c8a45d]/40 flex items-center justify-center text-[#dfba73] opacity-0 group-hover:opacity-100 transition-opacity shadow-md shadow-black">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Component */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredItems}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
          onBook={() => {
            handleCloseLightbox();
            onOpenBooking();
          }}
        />
      )}

      {/* 3. BOOKING BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl leather-surface border border-[#c8a45d]/35 p-8 text-center space-y-4 shadow-2xl shadow-black/80 relative overflow-hidden">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
            Like What You See?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto font-light leading-relaxed">
            Bring any photo from our portfolio to your consultation or let our master barbers tailor a custom profile for you.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2 shadow-lg shadow-[#c8a45d]/20 font-display"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Cut</span>
          </button>
        </div>
      </section>
    </div>
  );
}
