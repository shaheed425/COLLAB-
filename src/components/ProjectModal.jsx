import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, MessageCircle } from 'lucide-react';
import { BRAND_INFO, getWhatsAppUrl } from '../data/eventData';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const whatsappUrl = getWhatsAppUrl(
    `Hello Collab Events, I saw your "${project.title}" (${project.category}) work and would like to inquire about similar staging for my event.`
  );

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
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-xl w-full bg-[#0D0F14] border border-[#E5C887]/40 rounded-2xl overflow-hidden my-auto shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12151E] shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5C887]"></span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#E5C887] text-white hover:text-[#08090B] transition-all border border-white/20 hover:border-[#E5C887] cursor-pointer"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest hidden sm:inline">Close</span>
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Image */}
          <div className="relative h-60 sm:h-72 bg-black shrink-0 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-black/30"></div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-7 space-y-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] mb-2 font-normal">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/85 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141720] border border-white/10 flex items-center justify-between text-xs font-mono text-[#FAF8F5]/80">
              <span className="flex items-center gap-1.5 text-[#E5C887]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.location}, {BRAND_INFO.state}</span>
              </span>
              <span className="text-white/50">Collab Events Hub</span>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-4 sm:px-7 border-t border-white/10 bg-[#12151E] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/70 hover:text-white"
            >
              Close
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#08090B] bg-[#E5C887] hover:bg-[#FAF6EE] transition-all rounded-full flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire This Setup</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
