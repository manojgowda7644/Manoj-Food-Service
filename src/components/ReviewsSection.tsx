import React from 'react';
import { Star } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-24 bg-white text-[#0B0B0D] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#EA580C]">
              Customer Reviews
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#0B0B0D] tracking-tight text-balance">
              Trusted by Families &amp; Corporate Hosts
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md">
            Sample guest stories showcasing how our dine-in hospitality and catering service elevate memorable occasions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <article
              key={review.id}
              className="rounded-xl bg-[#FAF9F6] border border-neutral-200 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div
                  className="flex items-center gap-1 text-[#D4AF37]"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 text-base text-neutral-800 leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200">
                <p className="font-display text-base font-semibold text-[#0B0B0D]">
                  {review.name}
                </p>
                <p className="mt-0.5 text-xs text-neutral-500">
                  {review.context}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
