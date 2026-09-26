import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenPlanner }) {
  return (
    <section className="relative w-full h-[85vh] min-h-[540px] max-h-[640px] sm:h-auto sm:min-h-screen sm:max-h-none pt-20 sm:pt-32 pb-12 sm:pb-16 flex flex-col justify-end sm:justify-center overflow-hidden bg-[#08090B] text-[#FAF8F5]">
      {/* High-Resolution Luxury Hero Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile View: High-Resolution Portrait Cover Image */}
        <img
          src="/hero/image_mobile.jpg"
          alt="Opulent luxury sunset waterfront wedding mandap staging mobile portrait"
          className="w-full h-full object-cover object-[65%_center] xs:object-center select-none block md:hidden"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        {/* Desktop View: High-Resolution Landscape Cover Image */}
        <img
          src="/hero/image.jpg"
          alt="Opulent luxury sunset waterfront wedding mandap staging desktop landscape"
          className="w-full h-full object-cover object-center select-none hidden md:block"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        {/* Subtle Dark Gradient Overlays for optimal text legibility & background clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/85 via-[#08090B]/40 to-transparent md:from-[#08090B]/60 md:via-[#08090B]/20 md:to-transparent z-1 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/95 via-[#08090B]/50 to-transparent md:from-[#08090B]/80 md:via-transparent md:to-[#08090B]/20 z-1 pointer-events-none"></div>
      </div>

      {/* Hero Content Layout Container - Shifted Down 20px on Responsive Mobile View */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 flex flex-col justify-end sm:justify-center pb-4 sm:pb-0">
        <div className="w-full lg:w-[54%] max-w-[660px] flex flex-col items-start text-left pt-5 sm:pt-0">
          {/* Eyebrow Line & Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-5"
          >
            <div className="w-5 sm:w-8 h-[1.5px] bg-[#E5C887] shrink-0"></div>
            <span className="text-[9.5px] sm:text-[11px] lg:text-[13px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#E5C887] font-bold">
              BESPOKE EVENTS • WEDDINGS • CELEBRATIONS
            </span>
          </motion.div>

          {/* Master Editorial Headline with Fluid Clamp Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-[clamp(27px,7.5vw,54px)] sm:text-[46px] lg:text-[54px] text-[#FAF8F5] leading-[1.08] tracking-tight font-light mb-3 sm:mb-5 drop-shadow-md"
          >
            Where Extraordinary <br />
            Visions Become <br />
            <span className="italic font-serif gold-gradient-text font-normal">
              Cinematic Realities.
            </span>
          </motion.h1>

          {/* Dynamic Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[clamp(11.5px,3vw,16px)] sm:text-sm lg:text-base text-[#FAF8F5]/85 max-w-[340px] sm:max-w-md font-light leading-relaxed mb-4 sm:mb-8"
          >
            From intimate celebrations to grand productions, we design unforgettable experiences that tell your unique story.
          </motion.p>

          {/* Compact Action Buttons with Dynamic Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-row items-center gap-2.5 sm:gap-4 mb-2 sm:mb-10 w-full sm:w-auto"
          >
            {/* Primary Champagne Gold Button */}
            <button
              onClick={onOpenPlanner}
              className="group inline-flex items-center justify-center gap-1.5 sm:gap-2.5 h-[38px] sm:h-[48px] px-3.5 sm:px-6 text-[9.5px] sm:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-[#08090B] bg-gradient-to-r from-[#D5B069] via-[#C5A059] to-[#B59049] hover:from-[#E5C887] hover:to-[#C5A059] transition-all duration-300 rounded-md shadow-lg shadow-[#C5A059]/25 shrink-0"
            >
              <span>PLAN YOUR EVENT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Glassmorphism Button - Hidden on Mobile View */}
            <a
              href="#portfolio"
              className="hidden sm:inline-flex group items-center justify-center gap-1.5 sm:gap-2.5 h-[38px] sm:h-[48px] px-3.5 sm:px-6 text-[9.5px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-[#FAF8F5] border border-white/25 hover:border-[#E5C887] hover:text-[#E5C887] transition-all duration-300 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-md shrink-0 text-center"
            >
              <span>EXPLORE PORTFOLIO</span>
            </a>
          </motion.div>

          {/* Minimal Scroll Discover Element */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden sm:flex items-center gap-2 text-[#FAF8F5]/60 text-[9px] font-mono tracking-[0.2em] uppercase"
          >
            <span>SCROLL TO DISCOVER</span>
            <ChevronDown className="w-3 h-3 text-[#E5C887] animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
