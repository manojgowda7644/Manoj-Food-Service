import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES, SERVICES } from '../data/restaurantData';
import { CulinaryImage } from './CulinaryImage';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-[#0B0B0D] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Marquee Showcase Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-14 border-b border-white/10">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#D4AF37]">
              Our Services
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
              Hospitality Tailored to Every Occasion
            </h2>
            <p className="mt-4 text-neutral-300 text-base leading-relaxed">
              From intimate family dining to 3,000-guest wedding receptions and executive summits, our culinary and service teams bring restaurant-grade quality to your venue.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/9]">
              <CulinaryImage
                src={IMAGES.catering}
                alt="Luxury wedding and corporate catering buffet setup by MANOJ FOOD SERVICE"
                title="Bespoke Catering Presentation"
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6 Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-xl bg-[#141418] border border-white/10 hover:border-[#D4AF37]/50 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-2xl font-bold text-[#D4AF37] tabular-nums">
                    {service.number}.
                  </span>
                  <span className="text-xs text-neutral-400">
                    {service.capacityNote}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-neutral-300 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-neutral-300">
                  {service.highlights.map((hl) => (
                    <li key={hl} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href="#contact"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4AF37] hover:text-[#EA580C] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
                >
                  Inquire for This Service
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
