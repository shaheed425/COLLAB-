import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/eventData';

export default function WhyChooseUs({ onOpenPlanner }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="why-us" className="relative py-16 sm:py-20 bg-[#090A0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A059] uppercase">
                05 • UNCOMPROMISING STANDARDS
              </span>
              <div className="h-[1px] w-12 bg-[#C5A059]/40"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] font-light">
              Why Clients Choose Us
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md font-light leading-relaxed">
            We operate as artistic directors and precision producers, ensuring your experience is as serene to host as it is mesmerizing to attend.
          </p>
        </div>

        {/* Editorial Interactive Accordion / Hover Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Minimal Editorial List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {WHY_CHOOSE_US.map((item, idx) => {
              const isHovered = hoveredIndex === idx;
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => setExpandedIndex(idx)}
                  className="py-5 sm:py-6 cursor-pointer group transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span
                        className={`font-serif text-base tracking-wider transition-colors ${
                          isHovered || isExpanded ? 'text-[#C5A059]' : 'text-[#A1A1AA]'
                        }`}
                      >
                        {item.number}
                      </span>
                      <h3
                        className={`font-serif text-xl sm:text-2xl transition-colors font-light ${
                          isHovered || isExpanded ? 'text-[#FAF8F5]' : 'text-[#FAF8F5]/70'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#FAF8F5]/60 group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-colors">
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  {/* Expandable Paragraph Description */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-3 pl-10 pr-4"
                      >
                        <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed mb-3">
                          {item.shortDesc}
                        </p>
                        <p className="text-xs text-[#A1A1AA] font-light leading-relaxed mb-3">
                          {item.detailedDesc}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenPlanner();
                          }}
                          className="text-[11px] uppercase tracking-[0.18em] text-[#C5A059] font-medium inline-flex items-center gap-1 hover:underline"
                        >
                          <span>Discuss This Pillar</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Revealing Image Preview */}
          <div className="lg:col-span-5 h-[380px] relative rounded-xl overflow-hidden border border-white/10 shadow-2xl hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={WHY_CHOOSE_US[hoveredIndex].image}
                  alt={WHY_CHOOSE_US[hoveredIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg">
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.2em] block mb-1">
                    {WHY_CHOOSE_US[hoveredIndex].number} • CREATIVE EXECUTION
                  </span>
                  <p className="font-serif text-base text-[#FAF8F5]">
                    {WHY_CHOOSE_US[hoveredIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

