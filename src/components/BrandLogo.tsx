import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  showWordmark = true,
}) => {
  const textColor = variant === 'dark' ? 'text-white' : 'text-[#0B0B0D]';
  const hatStroke = variant === 'dark' ? '#FFFFFF' : '#0B0B0D';

  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 select-none">
      <svg
        width="38"
        height="38"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer Golden Plate Ring */}
        <circle
          cx="24"
          cy="26"
          r="19"
          stroke="#D4AF37"
          strokeWidth="1.75"
          fill={variant === 'dark' ? '#141418' : '#FAF9F6'}
        />
        <circle
          cx="24"
          cy="26"
          r="14.5"
          stroke="#EA580C"
          strokeWidth="1"
          strokeOpacity="0.65"
        />

        {/* Chef Hat (Toque) */}
        <path
          d="M16.5 19C14.8 18.6 13.5 17 13.8 15C14.1 13.1 15.8 11.8 17.8 12C18.8 10 21.2 8.8 24 8.8C26.8 8.8 29.2 10 30.2 12C32.2 11.8 33.9 13.1 34.2 15C34.5 17 33.2 18.6 31.5 19V22.5H16.5V19Z"
          fill={variant === 'dark' ? '#0B0B0D' : '#FFFFFF'}
          stroke={hatStroke}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <line
          x1="17"
          y1="21"
          x2="31"
          y2="21"
          stroke="#D4AF37"
          strokeWidth="1.4"
        />

        {/* Crossed Fork & Spoon inside Plate */}
        {/* Fork (left-bottom to right-middle) */}
        <path
          d="M17.5 34.5L26.5 25.5M26.5 25.5L28.8 23.2M26.5 25.5L24.5 24.5M27.6 24.4L29.5 26.2"
          stroke="#EA580C"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Spoon (right-bottom to left-middle) */}
        <path
          d="M30.5 34.5L22.5 26.5"
          stroke="#D4AF37"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <ellipse
          cx="20.4"
          cy="24.4"
          rx="2.3"
          ry="3.1"
          transform="rotate(-45 20.4 24.4)"
          fill="#D4AF37"
        />
      </svg>

      {showWordmark && (
        <span
          className={`font-display text-base sm:text-lg font-bold tracking-tight whitespace-nowrap ${textColor}`}
        >
          MANOJ <span className="text-[#D4AF37]">FOOD SERVICE</span>
        </span>
      )}
    </span>
  );
};
