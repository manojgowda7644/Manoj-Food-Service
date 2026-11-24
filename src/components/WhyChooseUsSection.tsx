import React from 'react';
import { WHY_CHOOSE_US } from '../data/restaurantData';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-choose-us"
      className="py-20 sm:py-24 bg-[#FAF9F6] text-[#0B0B0D] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#EA580C]">
            Why Choose Us
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#0B0B0D] tracking-tight text-balance">
            Five Standards Behind Every Meal We Serve
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {WHY_CHOOSE_US.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-xl bg-white border border-neutral-200 p-6 flex flex-col justify-between transition-colors duration-200 hover:border-[#EA580C]/60"
            >
              <div>
                <p className="font-display text-2xl font-bold text-[#D4AF37] tabular-nums">
                  {pillar.number}.
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-[#0B0B0D]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                  {pillar.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
