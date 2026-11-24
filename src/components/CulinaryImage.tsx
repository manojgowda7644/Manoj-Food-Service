import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface CulinaryImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  wrapperClassName?: string;
  loading?: 'eager' | 'lazy';
}

export const CulinaryImage: React.FC<CulinaryImageProps> = ({
  src,
  alt,
  title,
  className = 'w-full h-full object-cover',
  wrapperClassName = 'relative overflow-hidden bg-[#141418]',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={wrapperClassName}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      ) : (
        <div
          className="w-full h-full min-h-[180px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#16161B] via-[#0B0B0D] to-[#1F150E] border border-white/10"
          role="img"
          aria-label={alt}
        >
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center mb-3 text-[#D4AF37]">
            <Utensils className="w-5 h-5" />
          </div>
          <p className="font-display text-sm font-semibold text-white">
            {title || alt}
          </p>
        </div>
      )}
    </div>
  );
};
