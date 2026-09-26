import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Quote, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenPlanner }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl w-full bg-[#0D0F14] border border-[#C5A059]/40 rounded-2xl overflow-hidden my-auto shadow-2xl max-h-[90vh] flex flex-col"
        >
          {/* Header Bar with Category & Prominent Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12151E]/90 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
                {project.categoryTag || project.categoryKey || 'FEATURED EVENT'}
              </span>
            </div>

            {/* Prominent Exit / Cross Icon Button */}
            <button
              onClick={onClose}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#08090B] transition-all duration-300 border border-white/20 hover:border-[#C5A059] cursor-pointer"
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest group-hover:font-bold hidden sm:inline">
                Close
              </span>
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Compact Image Gallery Banner */}
          <div className="relative h-56 sm:h-64 bg-black shrink-0 overflow-hidden group">
            <img
              src={images[activeImageIndex] || project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-black/30"></div>

            {/* Gallery Arrows if multiple images */}
            {images.length > 1 && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev - 1 + images.length) % images.length
                    )
                  }
                  className="w-7 h-7 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center hover:bg-[#C5A059] hover:text-[#08090B] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-white font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10">
                  {activeImageIndex + 1} / {images.length}
                </span>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev + 1) % images.length)
                  }
                  className="w-7 h-7 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center hover:bg-[#C5A059] hover:text-[#08090B] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Body Content - Scrollable if content overflows */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] mb-2 font-normal leading-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
                {project.subtitle || project.summary}
              </p>
            </div>

            {/* Key Event Specs Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#141720] border border-white/10 rounded-xl">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <div className="truncate">
                  <span className="block text-[9px] uppercase font-mono text-[#A1A1AA]">Location</span>
                  <span className="text-xs text-[#FAF8F5] font-medium truncate block">{project.location || 'Kerala'}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <div className="truncate">
                  <span className="block text-[9px] uppercase font-mono text-[#A1A1AA]">Guest Scale</span>
                  <span className="text-xs text-[#FAF8F5] font-medium truncate block">{project.guests || '300+ Guests'}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <div className="truncate">
                  <span className="block text-[9px] uppercase font-mono text-[#A1A1AA]">Timeline</span>
                  <span className="text-xs text-[#FAF8F5] font-medium truncate block">{project.year || '2024'}</span>
                </div>
              </div>
            </div>

            {/* Testimonial Quote if available */}
            {project.testimonial && (
              <div className="p-4 bg-[#161922] border-l-2 border-[#C5A059] rounded-r-xl relative">
                <Quote className="w-6 h-6 text-[#C5A059]/20 absolute top-3 right-3" />
                <p className="font-serif italic text-xs sm:text-sm text-[#FAF8F5]/90 mb-2">
                  {project.testimonial}
                </p>
                <span className="text-[10px] font-mono text-[#C5A059] tracking-wider uppercase">
                  — Verified Host Review
                </span>
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 sm:px-8 border-t border-white/10 bg-[#12151E]/90 flex items-center justify-between gap-4 shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/70 hover:text-white transition-colors"
            >
              Close Window
            </button>

            <button
              onClick={() => {
                onClose();
                if (onOpenPlanner) onOpenPlanner();
              }}
              className="group flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#08090B] bg-[#C5A059] hover:bg-[#E5C887] transition-all rounded-full shadow-lg"
            >
              <span>Plan Similar Event</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

