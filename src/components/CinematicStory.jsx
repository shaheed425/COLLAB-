import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Film, Sparkles } from 'lucide-react';

export default function CinematicStory({ onOpenStory, onOpenPlanner }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay video when component mounts / scrolls into view
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <section className="relative w-full py-36 overflow-hidden bg-[#08090B] border-b border-white/10">
      {/* Background HTML5 Video with Autoplay on Scroll */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.2] scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-grand-hall-decorated-for-a-wedding-41380-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Gradient & Grain Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/60 to-[#08090B]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/80 via-transparent to-[#08090B]/80"></div>
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30"></div>
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        {/* Play Pulse Trigger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={onOpenStory}
          className="relative group cursor-pointer mb-8"
        >
          <div className="absolute -inset-3 rounded-full bg-[#C5A059]/20 blur-md group-hover:bg-[#C5A059]/40 transition-all duration-500 animate-pulse"></div>
          <div className="relative w-20 h-20 rounded-full border-2 border-[#C5A059] bg-black/60 backdrop-blur-md flex items-center justify-center text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-[#08090B] transition-all duration-300 shadow-2xl">
            <Play className="w-8 h-8 fill-current ml-1" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 mb-4"
        >
          <Film className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#C5A059] font-medium">
            THE PRODUCTION JOURNEY • CINEMATIC REEL
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#FAF8F5] leading-tight font-light mb-8 max-w-3xl"
        >
          "From the first idea to the final applause."
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-[#FAF8F5]/85 max-w-2xl font-light leading-relaxed mb-10"
        >
          We orchestrate every detail, every light cue, every floral arrangement, and every musical crescendo so that you can exist entirely in the moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <button
            onClick={onOpenStory}
            className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#08090B] bg-[#C5A059] hover:bg-[#E5C887] transition-all duration-300 rounded-full shadow-xl shadow-[#C5A059]/25 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>WATCH FULL EVENT REEL</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

