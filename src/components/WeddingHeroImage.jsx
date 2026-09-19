import React from 'react';
import weddingImage from '../assets/wedding pic.webp';

export default function WeddingHeroImage({
  alt = 'Wedding couple representing Court Marriage and Online Nikah services in Pakistan',
  priority = true,
  className = ''
}) {
  return (
    <div className={`w-full flex justify-center lg:justify-end ${className}`.trim()}>
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-slate-900 shadow-2xl group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]">
        <img
          src={weddingImage}
          alt={alt}
          className="w-full h-full object-cover object-center transform scale-[1.02] group-hover:scale-100 transition-transform duration-1000"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
