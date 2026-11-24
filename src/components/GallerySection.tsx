import React, { useState, useEffect, useCallback } from 'react';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { CulinaryImage } from './CulinaryImage';

export const GallerySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    activeIndex !== null ? GALLERY_ITEMS[activeIndex] : null;

  const closeModal = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, closeModal, showPrev, showNext]);

  return (
    <section
      id="gallery"
      className="py-20 sm:py-24 bg-[#0B0B0D] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#D4AF37]">
              Food Gallery
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Fresh From Our Kitchens &amp; Banquets
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Select any photograph to inspect full-size culinary details and event presentation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#141418] border border-white/10 hover:border-[#D4AF37]/60 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label={`View larger image of ${item.title}`}
            >
              <CulinaryImage
                src={item.image}
                alt={item.title}
                title={item.title}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle scrim on hover / bottom label */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-200"
                aria-hidden="true"
              />

              <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Expand className="w-4 h-4" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[11px] font-medium text-[#D4AF37]">
                  {item.category}
                </p>
                <p className="mt-0.5 font-display text-base font-semibold text-white">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141418] border border-white/15 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <div>
                <p className="text-xs text-[#D4AF37] font-medium">
                  {activeItem.category} · {activeIndex + 1} / {GALLERY_ITEMS.length}
                </p>
                <h3 className="font-display text-lg font-semibold text-white">
                  {activeItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-200 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Close gallery preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] bg-black">
              <CulinaryImage
                src={activeItem.image}
                alt={activeItem.title}
                title={activeItem.title}
                loading="eager"
                wrapperClassName="w-full h-full"
                className="w-full h-full object-contain"
              />

              <button
                type="button"
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#EA580C] border border-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Previous gallery image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#EA580C] border border-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Next gallery image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 py-4 border-t border-white/10">
              <p className="text-sm text-neutral-300">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
