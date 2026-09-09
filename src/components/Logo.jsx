import React from 'react';

/**
 * Urban Cuts Official Logo Component
 * Uses the exact provided image: Urban_Cuts_bg_removed.png inside an <img> tag.
 */
export const Logo = ({ size = 'md', showSubtitle = true, className = '' }) => {
  const sizeConfig = {
    sm: {
      imgHeight: 'h-10 sm:h-12',
      subText: 'text-[9px] tracking-[0.2em]',
    },
    md: {
      imgHeight: 'h-14 sm:h-16',
      subText: 'text-[10px] tracking-[0.25em]',
    },
    lg: {
      imgHeight: 'h-20 sm:h-24',
      subText: 'text-xs tracking-[0.3em]',
    },
    hero: {
      imgHeight: 'h-28 sm:h-36 lg:h-44',
      subText: 'text-xs sm:text-sm tracking-[0.35em]',
    }
  }[size] || {
    imgHeight: 'h-14 sm:h-16',
    subText: 'text-[10px] tracking-[0.25em]',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none group ${className}`}>
      <img
        src="/Urban_Cuts_bg_removed.png"
        alt="Urban Cuts Men's Salon Islamabad"
        className={`${sizeConfig.imgHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]`}
        referrerPolicy="no-referrer"
        loading="eager"
      />
      
      {showSubtitle && (
        <span className={`text-neutral-400 font-semibold uppercase mt-1 ${sizeConfig.subText} text-center`}>
          Men's Salon • Islamabad
        </span>
      )}
    </div>
  );
};

export default Logo;

