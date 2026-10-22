import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BRAND_INFO } from '../data/eventData';

export default function Hero({ onOpenPlanner }) {
  return (
    <section className="relative w-full min-h-[72vh] sm:min-h-screen pt-20 sm:pt-32 pb-6 sm:pb-16 flex flex-col justify-center overflow-hidden bg-[#08090B] text-[#FAF8F5]">
      {/* Cinematic High-Resolution Event Hero Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile View: High-Resolution Portrait Cover */}
        <img
          src="/hero/image_mobile.jpg"
          alt="Luxury wedding mandap and floral staging"
          className="w-full h-full object-cover object-[65%_center] xs:object-center select-none block md:hidden"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        {/* Desktop View: High-Resolution Landscape Cover */}
        <img
          src="/hero/image.jpg"
          alt="Luxury wedding stage decor and atmospheric event lighting"
          className="w-full h-full object-cover object-center select-none hidden md:block"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />

        {/* Subtle Dark Overlays for maximum readability & sophisticated contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/90 via-[#08090B]/60 to-[#08090B]/30 md:from-[#08090B]/80 md:via-[#08090B]/40 md:to-transparent z-1 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/40 to-[#08090B]/30 md:from-[#08090B]/90 md:via-transparent md:to-[#08090B]/30 z-1 pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 flex flex-col justify-center">
        <div className="w-full lg:w-[62%] max-w-[700px] flex flex-col items-start text-left pt-[35px] sm:pt-0">
          
          {/* Brand & Descriptor Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4"
          >
            <div className="w-6 sm:w-8 h-[1.5px] bg-[#E5C887] shrink-0"></div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#E5C887] font-bold">
              {BRAND_INFO.brand} • {BRAND_INFO.descriptor}
            </span>
          </motion.div>

          {/* Master Headline: Crafting Unforgettable Wedding Experiences */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-[clamp(32px,7.5vw,62px)] sm:text-[52px] lg:text-[62px] text-[#FAF8F5] leading-[1.08] tracking-tight font-light mb-4 sm:mb-5 drop-shadow-md"
          >
            Crafting Unforgettable <br />
            <span className="italic font-serif gold-gradient-text font-normal">
              Wedding Experiences.
            </span>
          </motion.h1>

          {/* Calls to Action — Stacked on mobile as in reference image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-12 w-full sm:w-auto max-w-[340px] sm:max-w-none"
          >
            {/* Primary Action: Plan Your Event */}
            <button
              onClick={onOpenPlanner}
              className="group inline-flex items-center justify-center gap-2 h-[46px] sm:h-[48px] px-6 sm:px-7 text-xs font-bold uppercase tracking-[0.14em] text-[#08090B] bg-gradient-to-r from-[#D5B069] via-[#C5A059] to-[#B59049] hover:from-[#E5C887] hover:to-[#C5A059] transition-all duration-300 rounded-full shadow-lg shadow-[#C5A059]/25 cursor-pointer w-full sm:w-auto"
            >
              <span>PLAN YOUR EVENT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action: Explore Our Services */}
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 h-[46px] sm:h-[48px] px-6 sm:px-7 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF8F5] border border-white/25 hover:border-[#E5C887] hover:text-[#E5C887] transition-all duration-300 rounded-full bg-[#181512]/80 hover:bg-white/20 backdrop-blur-md text-center w-full sm:w-auto"
            >
              <span>EXPLORE OUR SERVICES</span>
            </a>
          </motion.div>

          {/* Location & Discover Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 sm:gap-3 text-[#FAF8F5]/60 text-[8.5px] xs:text-[9.5px] sm:text-[10px] font-mono tracking-[0.14em] sm:tracking-[0.2em] uppercase whitespace-nowrap"
          >
            <span>BASED IN KANNUR • SERVING PREMIER DESTINATIONS</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#E5C887] animate-bounce shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
