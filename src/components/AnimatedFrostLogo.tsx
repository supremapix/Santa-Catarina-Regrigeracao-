import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/company';

interface AnimatedFrostLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const AnimatedFrostLogo: React.FC<AnimatedFrostLogoProps> = ({
  size = 'md',
  variant = 'light'
}) => {
  const [isFrozen, setIsFrozen] = useState(false);

  const logoHeight = size === 'sm' ? 'h-8 sm:h-10' : size === 'lg' ? 'h-11 sm:h-14' : 'h-9 sm:h-12';
  const textColor = variant === 'dark' ? 'text-blue-400' : 'text-[#002b75]';
  const subtextColor = variant === 'dark' ? 'text-cyan-400' : 'text-[#0092d8]';

  const handleInteract = () => {
    setIsFrozen(true);
    setTimeout(() => setIsFrozen(false), 1800);
  };

  return (
    <Link
      to="/"
      onClick={() => handleInteract()}
      onMouseEnter={handleInteract}
      className="relative flex items-center space-x-2 sm:space-x-3 group py-1 select-none focus:outline-none shrink-0"
      aria-label="Santa Catarina Refrigeração - Início"
    >
      {/* Brand Logo Image with Direct Freeze & Continuous Subtle Motion */}
      <div className="relative flex items-center justify-center overflow-visible shrink-0">
        <motion.img
          src={COMPANY_INFO.assets.logo}
          alt="Santa Catarina Refrigeração Logo"
          animate={
            isFrozen
              ? { scale: [1, 1.2, 1.1], rotate: [0, -12, 12, 0], filter: ['brightness(1)', 'brightness(1.4) drop-shadow(0 0 12px #06b6d4)', 'brightness(1.1)'] }
              : { rotate: [0, 5, -5, 0], scale: 1 }
          }
          transition={
            isFrozen
              ? { duration: 0.6, ease: 'easeOut' }
              : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }
          className={`${logoHeight} w-auto object-contain transition-all duration-300 drop-shadow-md`}
        />
      </div>

      {/* Brand Name Text - Always visible side-by-side with logo on mobile and desktop */}
      <div className="flex flex-col justify-center min-w-0">
        <span className={`block font-black tracking-tight ${textColor} ${size === 'sm' ? 'text-[11px] sm:text-sm' : 'text-xs sm:text-base'} leading-tight uppercase`}>
          SANTA CATARINA
        </span>
        <span className={`block font-extrabold tracking-widest ${subtextColor} ${size === 'sm' ? 'text-[8px] sm:text-[9px]' : 'text-[9px] sm:text-xs'} uppercase`}>
          REFRIGERAÇÃO
        </span>
      </div>
    </Link>
  );
};
