import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/eventData';

export default function Process() {
  return (
    <section id="process" className="relative py-16 sm:py-20 bg-[#08090B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A059] uppercase">
                06 • METHODOLOGY
              </span>
              <div className="h-[1px] w-12 bg-[#C5A059]/40"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] font-light">
              From Blueprint to Celebration
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md font-light leading-relaxed">
            A structured, 5-stage production pipeline designed to grant you peace of mind throughout every phase.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative">
          {/* Thin Horizontal Connecting Line */}
          <div className="absolute top-[24px] left-8 right-8 h-[1px] bg-gradient-to-r from-[#C5A059] via-white/20 to-[#C5A059] z-0"></div>

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-start group"
            >
              {/* Timeline Indicator Dot */}
              <div className="w-12 h-12 rounded-full bg-[#08090B] border border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] font-serif text-xs font-semibold mb-6 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#08090B] transition-all duration-300 shadow-xl">
                {step.number}
              </div>

              {/* Title & Subtitle */}
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#C5A059] mb-1">
                {step.subtitle}
              </span>
              <h3 className="font-serif text-xl text-[#FAF8F5] mb-2 font-normal">
                {step.title}
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-8 relative pl-8 border-l border-[#C5A059]/40 ml-4">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex flex-col items-start"
            >
              {/* Dot on the line */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#08090B] border-2 border-[#C5A059]"></div>

              <div className="flex items-center gap-3 mb-2">
                <span className="font-serif text-sm text-[#C5A059]">{step.number}</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A1A1AA]">
                  {step.subtitle}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#FAF8F5] mb-2 font-normal">
                {step.title}
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

