import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
} from '../data/restaurantData';
import { CulinaryImage } from './CulinaryImage';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="menu"
      className="py-20 sm:py-24 bg-white text-[#0B0B0D] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#EA580C]">
              Our Culinary Menu
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-[#0B0B0D] tracking-tight text-balance">
              Seven Kitchens, One Authentic Table
            </h2>
            <p className="mt-3 text-neutral-600 text-base leading-relaxed">
              Browse our full dine-in and event showcase menu across Starters, South Indian, North Indian, Chinese, Fast Food, Desserts, and Beverages.
            </p>
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search
              className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or spices..."
              aria-label="Search menu dishes"
              className="w-full pl-10 pr-9 py-2.5 text-sm bg-[#FAF9F6] border border-neutral-300 rounded-lg text-[#0B0B0D] placeholder:text-neutral-500 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear menu search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-[#0B0B0D] rounded"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
          role="tablist"
          aria-label="Food Menu Categories"
        >
          {MENU_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] ${
                  isActive
                    ? 'bg-[#0B0B0D] text-white'
                    : 'bg-[#FAF9F6] text-neutral-700 border border-neutral-200 hover:border-[#EA580C]/60 hover:text-[#0B0B0D]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dish Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group rounded-xl bg-[#FAF9F6] border border-neutral-200 hover:border-[#EA580C]/60 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <CulinaryImage
                    src={item.image}
                    alt={item.name}
                    title={item.name}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed clean metadata with typographic dot separators */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="font-medium text-[#EA580C]">
                        {item.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.dietary}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.spiceNote}</span>
                    </div>

                    <div className="mt-2 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-[#0B0B0D] leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-display text-lg font-bold text-[#0B0B0D] tabular-nums shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 py-14 px-6 text-center rounded-xl bg-[#FAF9F6] border border-neutral-200">
            <p className="font-display text-xl font-semibold text-[#0B0B0D]">
              No dishes matched &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Try clearing your search or selecting another cuisine category above.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-5 px-4 py-2 text-sm font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-lg transition-colors"
            >
              Show All Menu Items
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
