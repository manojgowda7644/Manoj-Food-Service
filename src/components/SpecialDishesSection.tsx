import React from 'react';
import { motion } from 'motion/react';
import { SPECIAL_DISHES } from '../data/restaurantData';
import { CulinaryImage } from './CulinaryImage';

export const SpecialDishesSection: React.FC = () => {
  return (
    <section
      id="specials"
      className="py-20 sm:py-24 bg-[#0B0B0D] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#D4AF37]">
              Chef&apos;s Signature Selection
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Special Dishes Loved by Our Guests
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Prepared to order with hand-roasted spices, copper-pot slow cooking, and timeless culinary presentation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SPECIAL_DISHES.map((dish, index) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-xl bg-[#141418] border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <CulinaryImage
                  src={dish.image}
                  alt={dish.name}
                  title={dish.name}
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#D4AF37] font-medium">
                    {dish.cuisine}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-white leading-snug">
                    {dish.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-neutral-300 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-baseline justify-between gap-3">
                  <span className="text-xs text-neutral-400 truncate">
                    {dish.servingNote}
                  </span>
                  <span className="font-display text-lg font-bold text-[#EA580C] tabular-nums shrink-0">
                    {dish.price}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
