import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, Check } from 'lucide-react';
import { ABOUT_CONTENT, BRAND_INFO } from '../data/eventData';

export default function Introduction({ onOpenPlanner }) {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="relative py-16 sm:py-20 bg-[#07080A] border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-12 relative z-10">
        
        {/* Editorial Split Layout - Minimal & Breathable */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Headline, Brand Story & Direct Action */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                ABOUT COLLAB
              </span>
              <div className="h-[1px] w-8 bg-[#E5C887]"></div>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl text-[#FAF8F5] leading-[1.12] font-light mb-5 tracking-tight">
              More Than An{' '}
              <span className="gold-gradient-text font-serif italic font-normal">Event.</span>
              <span className="block font-serif text-2xl sm:text-4xl text-[#FAF8F5]/90 font-light mt-1">
                An Experience.
              </span>
            </h2>

            <p className="font-serif text-base sm:text-lg text-[#FAF8F5]/85 font-light leading-relaxed italic mb-4 max-w-lg">
              “At Collab Events &amp; Weddings, we believe every celebration tells a story. Our passion is to turn your dreams into timeless memories with creativity, precision and perfection.”
            </p>

            <button
              onClick={() => setShowStoryModal(true)}
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#E5C887] hover:text-white transition-colors cursor-pointer mt-2"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Vision, Mission & Why Choose Us in Clean Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pt-2">
            
            {/* Vision & Mission - Clean Typography, No Clunky Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-6 border-b border-white/10">
              <div className="border-l border-[#E5C887]/50 pl-4">
                <span className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#E5C887] font-semibold block mb-1">
                  OUR VISION
                </span>
                <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed">
                  {ABOUT_CONTENT.vision}
                </p>
              </div>

              <div className="border-l border-[#E5C887]/50 pl-4">
                <span className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#E5C887] font-semibold block mb-1">
                  OUR MISSION
                </span>
                <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed">
                  {ABOUT_CONTENT.mission}
                </p>
              </div>
            </div>

            {/* Why Choose Us: Clean Minimal 2-Column Checklist */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#E5C887] uppercase font-semibold block mb-3">
                WHY CHOOSE US?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {ABOUT_CONTENT.whyChooseUs.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 text-xs text-[#FAF8F5]/85 font-light">
                    <Check className="w-3.5 h-3.5 text-[#E5C887] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {showStoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setShowStoryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-[#0D0F14] border border-[#E5C887]/40 rounded-2xl overflow-hidden p-6 sm:p-8 shadow-2xl my-auto"
            >
              <button
                onClick={() => setShowStoryModal(false)}
                className="absolute top-5 right-5 p-2 text-white/60 hover:text-[#E5C887] rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#E5C887]" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                  OUR STORY
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] mb-3">
                {BRAND_INFO.brand} • {BRAND_INFO.descriptor}
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#FAF8F5]/85 font-light leading-relaxed mb-6">
                <p>
                  At Collab Events &amp; Weddings, we believe every celebration tells a story.
                </p>
                <p>
                  Our passion is to turn your dreams into timeless memories with creativity, precision and perfection. From traditional gatherings to grand destination weddings, our team in Kannur works closely with you to ensure every moment is effortless and memorable.
                </p>
                <div className="p-3.5 rounded-xl bg-black/40 border-l-2 border-[#E5C887]">
                  <p className="italic font-serif text-xs sm:text-sm text-[#FAF8F5]/90">
                    “{ABOUT_CONTENT.mission}”
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-[#FAF8F5]/60">
                  {BRAND_INFO.location}, {BRAND_INFO.state}
                </span>
                <button
                  onClick={() => {
                    setShowStoryModal(false);
                    if (onOpenPlanner) onOpenPlanner();
                  }}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#08090B] bg-[#E5C887] hover:bg-[#FAF6EE] rounded-full transition-colors cursor-pointer"
                >
                  Plan With Us →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
