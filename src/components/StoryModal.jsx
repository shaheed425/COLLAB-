import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Film, ExternalLink } from 'lucide-react';

export default function StoryModal({ isOpen, onClose, onOpenPlanner }) {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full bg-[#0D0F14] border border-[#C5A059]/40 rounded-2xl overflow-hidden shadow-2xl my-auto flex flex-col max-h-[92vh]"
        >
          {/* Top Bar with Exit Cross Icon */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12151E] shrink-0">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
                COLLAB EVENT HUB • REEL HIGHLIGHT
              </span>
            </div>

            {/* Prominent Close Button */}
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

          {/* Embedded Instagram Reel Container */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] mb-2 font-normal leading-tight">
                Behind the Scenes: Opulent Banquet Transformation
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
                Experience the 48-hour transformation of our grand ballroom setup — featuring white floral chandeliers and kinetic candlelit architecture.
              </p>
            </div>

            {/* Reel Video Player Box */}
            <div className="relative w-full aspect-[9/16] sm:aspect-video rounded-xl overflow-hidden border border-white/15 bg-black flex items-center justify-center max-h-[460px] mx-auto">
              <iframe
                src="https://www.instagram.com/reel/DcNiLzlS4Ht/embed"
                className="w-full h-full border-0"
                allowTransparency="true"
                allow="encrypted-media"
                title="Collab Event Hub Instagram Reel"
              ></iframe>
            </div>

            {/* Production Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#FAF8F5]/80 font-light border-t border-b border-white/10 py-4">
              <div>
                <span className="block text-[9px] text-[#C5A059] uppercase font-mono mb-1">
                  Floral Architecture
                </span>
                <span>12,000 Imported White Orchids</span>
              </div>
              <div>
                <span className="block text-[9px] text-[#C5A059] uppercase font-mono mb-1">
                  Lighting Design
                </span>
                <span>Warm Amber Kinetic Candles</span>
              </div>
              <div>
                <span className="block text-[9px] text-[#C5A059] uppercase font-mono mb-1">
                  Event Location
                </span>
                <span>Luxury Banquet Hall</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="p-4 sm:px-8 border-t border-white/10 bg-[#12151E] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <a
              href="https://www.instagram.com/reel/DcNiLzlS4Ht/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C5A059] hover:text-[#E5C887] transition-colors"
            >
              <span>Open in Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                onClose();
                if (onOpenPlanner) onOpenPlanner();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#08090B] bg-[#C5A059] hover:bg-[#E5C887] transition-all rounded-full shadow-lg"
            >
              <span>Plan Your Event Story →</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

