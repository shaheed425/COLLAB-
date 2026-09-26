import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Camera, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/eventData';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-white/10 bg-[#08090B] flex items-center justify-center">
      {/* Soft Ambient Gold Glow Halo for Luxury Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Content Container matching Screenshot EXACTLY */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4 sm:mb-5"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
            08 • DIRECT CONCIERGE &amp; INQUIRIES
          </span>
          <div className="h-[1px] w-12 sm:w-14 bg-[#E5C887]"></div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#FAF8F5] leading-[1.08] font-light mb-4 sm:mb-5"
        >
          Connect With <br />
          <span className="italic font-serif gold-gradient-text font-normal">
            Our Team
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs sm:text-base text-[#FAF8F5]/90 max-w-xl font-light leading-relaxed mb-8 sm:mb-10"
        >
          Let's bring your vision to life. Whether it's a wedding, a private celebration or a corporate event, our team is here to assist you.
        </motion.p>

        {/* Action Buttons with Mobile Full-Width Stretch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-6 w-full max-w-md sm:max-w-none"
        >
          {/* Button 1: Chat on WhatsApp */}
          <a
            href={BRAND_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#E5C887] text-[#08090B] border border-[#E5C887] shadow-xl shadow-[#E5C887]/20 transition-all duration-300 hover:bg-[#FFF6DF] hover:shadow-[0_0_35px_rgba(229,200,135,0.9)] hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-black/30 flex items-center justify-center shrink-0">
              <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current stroke-none" />
            </div>
            <div className="h-3.5 sm:h-4 w-[1px] bg-black/25"></div>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold">
              CHAT ON WHATSAPP
            </span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Button 2: Visit Instagram */}
          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black/60 backdrop-blur-md text-[#FAF8F5] border border-[#E5C887]/80 shadow-xl transition-all duration-300 hover:bg-[#E5C887] hover:text-[#08090B] hover:shadow-[0_0_35px_rgba(229,200,135,0.9)] hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md border border-[#E5C887] group-hover:border-black/40 flex items-center justify-center shrink-0 transition-colors">
              <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div className="h-3.5 sm:h-4 w-[1px] bg-white/25 group-hover:bg-black/25 transition-colors"></div>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold">
              VISIT INSTAGRAM
            </span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
