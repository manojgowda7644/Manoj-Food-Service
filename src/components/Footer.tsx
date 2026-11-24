import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const QUICK_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Special Dishes', href: '#specials' },
  { label: 'Food Menu', href: '#menu' },
  { label: 'Our Services', href: '#services' },
  { label: 'Food Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact Us', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0D] text-neutral-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Summary */}
          <div className="lg:col-span-4">
            <a href="#top" aria-label="MANOJ FOOD SERVICE Home">
              <BrandLogo variant="dark" />
            </a>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-sm">
              Delicious Food, Fresh Taste, Happy Moments. Multi-cuisine restaurant hospitality and premier event catering crafted with authentic ingredients.
            </p>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-[#141418] border border-white/10 hover:border-[#D4AF37] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-[#141418] border border-white/10 hover:border-[#D4AF37] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-[#141418] border border-white/10 hover:border-[#D4AF37] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3v6Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-base font-semibold text-white">
              Quick Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-base font-semibold text-white">
              Contact Details
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] mt-0.5 shrink-0" />
                <span>
                  42 Heritage Courtyard, Block B, Connaught Place, New Delhi 110001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors tabular-nums"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href="mailto:hello@manojfoodservice.com"
                  className="hover:text-white transition-colors"
                >
                  hello@manojfoodservice.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; 2026 MANOJ FOOD SERVICE. All rights reserved.</p>
          <p>
            Restaurant &amp; Catering Showcase · Multi-Cuisine Dining Experience
          </p>
        </div>
      </div>
    </footer>
  );
};
