import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../data/restaurantData';
import { CulinaryImage } from './CulinaryImage';

const STORY_HIGHLIGHTS = [
  {
    title: 'Farm-Fresh Produce',
    text: 'Daily morning market sourcing of crisp vegetables, whole spices, and pure dairy.',
  },
  {
    title: 'Heritage Recipes',
    text: 'Time-honored regional spice blends balanced with modern kitchen precision.',
  },
  {
    title: 'Gracious Hospitality',
    text: 'Attentive dining room and banquet teams dedicated to seamless guest comfort.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-[#FAF9F6] text-[#0B0B0D] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Balanced Culinary Photography */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-xl overflow-hidden border border-neutral-200 bg-neutral-900">
              <CulinaryImage
                src={IMAGES.aboutChef}
                alt="Head chef at MANOJ FOOD SERVICE plating an artisanal dish"
                title="Our Culinary Kitchen"
                wrapperClassName="w-full h-full min-h-[320px] lg:min-h-[460px]"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Our Story & Passion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#EA580C]">
              About Us · Our Story
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#0B0B0D] tracking-tight text-balance">
              Rooted in Tradition, Crafted for Every Celebration
            </h2>

            <div className="mt-6 space-y-4 text-neutral-700 text-base leading-relaxed max-w-2xl">
              <p>
                Founded with a lifelong passion for authentic Indian and multi-cuisine cooking,{' '}
                <strong className="font-semibold text-[#0B0B0D]">
                  MANOJ FOOD SERVICE
                </strong>{' '}
                began as a family kitchen built on one simple promise: never compromise on freshness, flavor, or warmth.
              </p>
              <p>
                Over the past decade and a half, we have grown into a trusted dining destination and full-scale catering house. Every morning, our chefs roast whole spices, churn fresh paneer and yogurt, and simmer slow-cooked gravies from scratch—ensuring every plate brings families and colleagues together over unforgettable meals.
              </p>
            </div>

            {/* Clean Hairline Highlight Grid */}
            <div className="mt-10 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STORY_HIGHLIGHTS.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-lg font-semibold text-[#0B0B0D]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
