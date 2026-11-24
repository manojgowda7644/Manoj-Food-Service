import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { IMAGES } from '../data/restaurantData';
import { CulinaryImage } from './CulinaryImage';

const HERO_PILLARS = [
  { metric: '15+ Years', label: 'Culinary Craftsmanship' },
  { metric: '7 Cuisines', label: 'Prepared Fresh Daily' },
  { metric: '500+ Events', label: 'Weddings & Corporate Galas' },
  { metric: '100% Fresh', label: 'Hand-Selected Ingredients' },
];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-[88vh] pt-16 flex flex-col justify-between bg-[#0B0B0D] overflow-hidden"
    >
      {/* Full-bleed Culinary Backdrop */}
      <div className="absolute inset-0">
        <CulinaryImage
          src={IMAGES.heroFeast}
          alt="Lavish multi-cuisine feast prepared by MANOJ FOOD SERVICE"
          title="MANOJ FOOD SERVICE Feast"
          loading="eager"
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Measured scrim for >= 4.5:1 contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/72 to-[#0B0B0D]/45"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Copy */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#D4AF37] mb-4">
            Fine Dining &amp; Premier Event Catering
          </p>

          <h1
            className="font-display font-bold text-white tracking-tight text-balance leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.85rem)' }}
          >
            Welcome to{' '}
            <span className="text-[#D4AF37]">MANOJ FOOD SERVICE</span>
          </h1>

          <p className="mt-5 text-lg sm:text-2xl text-neutral-100 font-light tracking-wide max-w-2xl">
            Delicious Food, Fresh Taste, Happy Moments.
          </p>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
            From aromatic tandoor starters and authentic South &amp; North Indian banquets to sizzling Indo-Chinese woks and bespoke wedding catering, every plate is crafted with care.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              Explore Our Menu
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-black/50 hover:bg-black/75 border border-[#D4AF37]/60 hover:border-[#D4AF37] rounded-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Full-width 4-Column Hospitality Strip */}
      <div className="relative z-10 border-t border-white/15 bg-[#0B0B0D]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {HERO_PILLARS.map((item) => (
              <div
                key={item.metric}
                className="border-r border-white/10 last:border-r-0 pr-4"
              >
                <p className="font-display text-xl sm:text-2xl font-bold text-[#D4AF37] tabular-nums">
                  {item.metric}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-neutral-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
