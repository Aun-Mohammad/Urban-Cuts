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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-xs font-bold text-neutral-300">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Visual Craftsmanship</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Grooming & Barbering Portfolio
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Real craftsmanship from master barbers Nabeel and Shahzaib. Every cut, beard contour, and capillary treatment is tailored to client bone structure.
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white text-black font-bold shadow'
                  : 'bg-[#121317] text-neutral-400 hover:text-white border border-[#22242c]'
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
              className="group relative rounded-3xl overflow-hidden bg-[#121317] border border-[#22242c] cursor-pointer aspect-[4/3] transform transition-all duration-300 hover:-translate-y-1 hover:border-neutral-500/50 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item?.title || 'Urban Cuts Style'}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-[10px] font-bold tracking-widest text-neutral-300 uppercase mb-2">
                    {item.tag || item.category || 'Portfolio'}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug">
                    {item?.title || 'Urban Cuts Style'}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                    {item?.description || ''}
                  </p>
                </div>

                {/* View indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
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
        <div className="rounded-3xl bg-[#121317] border border-[#22242c] p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase">
            Like What You See?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto">
            Bring any photo from our portfolio to your consultation or let our master barbers tailor a custom profile for you.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all inline-flex items-center gap-2 shadow"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Cut</span>
          </button>
        </div>
      </section>
    </div>
  );
}
