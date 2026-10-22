import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/eventData';
import ProjectModal from './ProjectModal';

export default function FeaturedPortfolio({ onOpenPlanner }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: 'All Decor & Staging', value: 'all' },
    { label: 'Stage & Entrance Decor', value: 'Stage & Entrance Decor' },
    { label: 'Wedding Events', value: 'Wedding Events' },
    { label: 'Sound, Light & LED', value: 'Sound, Light & LED' },
    { label: 'Entertainment Staging', value: 'Entertainment Programs' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="portfolio" className="relative py-16 sm:py-24 bg-[#08090B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                EVENT GALLERY
              </span>
              <div className="h-[1px] w-12 bg-[#E5C887]"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.08] font-light">
              Event Photography <br />
              <span className="italic font-serif gold-gradient-text font-normal">
                &amp; Decor Showcase.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
              A curated look into our stage architecture, lighting setups, floral entrance styling, and celebration environments.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 overflow-x-auto pb-2 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] rounded-full transition-all duration-300 font-medium whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === tab.value
                  ? 'bg-[#E5C887] text-[#08090B] font-bold shadow-md shadow-[#E5C887]/20'
                  : 'bg-[#12141C] text-[#FAF8F5]/70 hover:text-[#FAF8F5] border border-white/10 hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedProject(item)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#E5C887] cursor-pointer h-[320px] sm:h-[380px] flex flex-col justify-end p-5 sm:p-6 transition-all duration-500 shadow-xl"
            >
              {/* Background Event Photo */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-transparent group-hover:via-[#08090B]/65 transition-all duration-500"></div>
              </div>

              {/* Top Tag & Number */}
              <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5C887] bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-xs font-semibold">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-white/50">{item.number}</span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 flex flex-col">
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] mb-1.5 font-normal leading-tight group-hover:text-[#E5C887] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#E5C887] font-mono font-medium">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onOpenPlanner}
            className="group inline-flex items-center gap-2.5 px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#08090B] bg-gradient-to-r from-[#FAF6EE] via-[#E5C887] to-[#C5A059] hover:brightness-110 transition-all rounded-full shadow-lg shadow-[#C5A059]/20 cursor-pointer"
          >
            <span>DISCUSS YOUR VENUE DECOR</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenPlanner={onOpenPlanner}
        />
      )}
    </section>
  );
}
