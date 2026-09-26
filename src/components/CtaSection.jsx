import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CtaSection({ onOpenPlanner }) {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-[#08090B] border-b border-white/10">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury event celebration background"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/90 via-[#08090B]/60 to-[#08090B]/90"></div>
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-4"
        >
          <Calendar className="w-4 h-4 text-[#C5A059]" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-[#C5A059]">
            COMMISSION YOUR EVENT
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight font-light mb-5"
        >
          Let's Create Something{' '}
          <span className="italic font-serif gold-gradient-text block sm:inline">
            Unforgettable.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-base text-[#FAF8F5]/80 max-w-xl font-light leading-relaxed mb-8"
        >
          Tell us about your event, your vision, and your preferred location, and let's begin crafting an extraordinary experience together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button
            onClick={onOpenPlanner}
            className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-3.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#08090B] bg-[#C5A059] hover:bg-[#E5C887] transition-all duration-300 rounded-full shadow-2xl shadow-[#C5A059]/30"
          >
            <span>START PLANNING</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

