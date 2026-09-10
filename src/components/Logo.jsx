
/**
 * Urban Cuts Official Logo Component
 * Uses the exact provided image: Urban_Cuts_bg_removed.png inside an <img> tag.
 */
/**
 * Urban Cuts Official Logo Component
 * Incorporates both the transparent brand mark and the 3D Gold Hammered Leather Atelier emblem from reference.
 */
export const Logo = ({ 
  size = 'md', 
  showSubtitle = true, 
  layout = 'stacked', 
  className = '',
  variant = 'default' // 'default' | 'gold' | 'leather-badge'
}) => {
  const sizeConfig = {
    sm: {
      imgHeight: 'h-12 sm:h-14',
      badgeSize: 'w-16 h-16',
      subText: 'text-[9px] tracking-[0.2em]',
      titleSize: 'text-sm tracking-[0.2em]',
    },
    md: {
      imgHeight: 'h-16 sm:h-20',
      badgeSize: 'w-24 h-24 sm:w-28 sm:h-28',
      subText: 'text-[10px] tracking-[0.25em]',
      titleSize: 'text-lg tracking-[0.25em]',
    },
    lg: {
      imgHeight: 'h-24 sm:h-28',
      badgeSize: 'w-36 h-36 sm:w-40 sm:h-40',
      subText: 'text-xs tracking-[0.3em]',
      titleSize: 'text-2xl tracking-[0.3em]',
    },
    hero: {
      imgHeight: 'h-36 sm:h-44 lg:h-52',
      badgeSize: 'w-56 h-56 sm:w-72 sm:h-72',
      subText: 'text-xs sm:text-sm tracking-[0.35em]',
      titleSize: 'text-3xl sm:text-4xl tracking-[0.35em]',
    }
  }[size] || {
    imgHeight: 'h-14 sm:h-16',
    badgeSize: 'w-24 h-24',
    subText: 'text-[10px] tracking-[0.25em]',
    titleSize: 'text-lg tracking-[0.25em]',
  };

  // If leather-badge variant requested (matches reference image leather texture + 3D gold emblem)
  if (variant === 'leather-badge') {
    return (
      <div className={`inline-flex flex-col items-center justify-center select-none group ${className}`}>
        <div className={`relative ${sizeConfig.badgeSize} rounded-3xl overflow-hidden border border-[#c8a45d]/40 shadow-2xl shadow-black/80 p-2 leather-spotlight group-hover:border-[#c8a45d]/80 transition-all duration-500`}>
          <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80 pointer-events-none" />
          <img
            src="/urban_cuts_gold_emblem.jpg"
            alt="Urban Cuts 3D Gold Atelier Emblem"
            className="w-full h-full object-cover rounded-2xl filter contrast-105 group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </div>
        {showSubtitle && (
          <span className={`text-[#dfba73] font-display font-semibold uppercase mt-3 ${sizeConfig.subText} text-center`}>
            Atelier De Coiffure • Zaraj Sector A
          </span>
        )}
      </div>
    );
  }

  // Gold vector/textured variant matching the reference's gold scissors & hammered lettering
  if (variant === 'gold') {
    return (
      <div className={`inline-flex ${layout === 'inline' ? 'flex-row gap-3' : 'flex-col'} items-center justify-center select-none group ${className}`}>
        <div className="relative">
          {/* Subtle gold halo behind mark */}
          <div className="absolute inset-0 bg-[#c8a45d]/20 blur-xl rounded-full scale-125 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />
          <img
            src="/Urban_Cuts_bg_removed.png"
            alt="Urban Cuts Men's Salon Islamabad"
            className={`${sizeConfig.imgHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(200,164,93,0.35)] brightness-110 sepia-[0.35] saturate-[1.8] hue-rotate-[340deg]`}
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </div>
        
        {showSubtitle && (
          <span className={`text-[#dfba73] font-display font-medium uppercase ${layout === 'inline' ? '' : 'mt-1.5'} ${sizeConfig.subText} text-center`}>
            Atelier De Coiffure • Zaraj Sector A
          </span>
        )}
      </div>
    );
  }

  // Default transparent brand mark
  return (
    <div className={`inline-flex ${layout === 'inline' ? 'flex-row gap-3' : 'flex-col'} items-center justify-center select-none group ${className}`}>
      <img
        src="/Urban_Cuts_bg_removed.png"
        alt="Urban Cuts Men's Salon Islamabad"
        className={`${sizeConfig.imgHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]`}
        referrerPolicy="no-referrer"
        loading="eager"
      />
      
      {showSubtitle && (
        <span className={`text-[#dfba73] font-display font-medium uppercase ${layout === 'inline' ? '' : 'mt-1.5'} ${sizeConfig.subText} text-center`}>
          Men's Salon • Islamabad
        </span>
      )}
    </div>
  );
};

export default Logo;

