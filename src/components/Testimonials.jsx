import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Testimonials({ onOpenPlanner }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonialsList = [
    {
      id: '01',
      number: '01',
      quote: '“They turned our dream wedding into a magical reality. Every detail was beyond perfect!”',
      author: 'Aparna & Rithvik',
      category: 'WEDDING',
      location: 'KERALA',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bgImage: '/portfolio/port_1.png'
    },
    {
      id: '02',
      number: '02',
      quote: '“Seamless execution and exceptional professionalism. Truly a world-class team.”',
      author: 'Karan Mehta',
      category: 'CORPORATE',
      location: 'DUBAI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      bgImage: '/services/serv_3.png'
    },
    {
      id: '03',
      number: '03',
      quote: '“From concept to completion, everything felt effortless. Our guests are still talking about it!”',
      author: 'Nisha Varghese',
      category: 'PRIVATE EVENT',
      location: 'GOA',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      bgImage: '/portfolio/port_3.png'
    }
  ];


  // Auto-scroll carousel every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, testimonialsList.length]);

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 bg-[#07080B] border-b border-white/10 overflow-hidden">
      {/* High-Quality Clean Luxury Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=90"
          alt="Dark luxury ambient ballroom background"
          className="w-full h-full object-cover filter brightness-[0.2] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080B] via-[#07080B]/90 to-[#07080B]"></div>
        <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Description & Trust Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A059] uppercase">
                  CLIENT EXPERIENCES
                </span>
                <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                <span className="text-[11px] font-mono text-[#FAF8F5]/50">07</span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] leading-[1.08] font-light mb-4">
                Stories <br />
                That Stay <br />
                <span className="italic font-serif gold-gradient-text font-normal">
                  Forever.
                </span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-[#FAF8F5]/75 font-light leading-relaxed mb-6 max-w-md">
                Every event is a relationship, a vision, and a shared journey. Here's what our clients feel about creating their special moments with us.
              </p>
            </div>

            {/* Trust Stats Row */}
            <div className="flex items-center gap-5 py-4 border-y border-white/10 mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#FAF8F5] font-light">500+</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#A1A1AA]">
                  HAPPY CLIENTS
                </span>
              </div>
              <div className="h-6 w-[1px] bg-white/15"></div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#FAF8F5] font-light">4.9★</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#A1A1AA]">
                  AVERAGE RATING
                </span>
              </div>
              <div className="h-6 w-[1px] bg-white/15"></div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#FAF8F5] font-light">10+</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#A1A1AA]">
                  YEARS OF TRUST
                </span>
              </div>
            </div>

            {/* Bottom Action Button */}
            <button
              onClick={onOpenPlanner}
              className="group flex items-center gap-3 text-xs uppercase font-mono tracking-[0.2em] text-[#FAF8F5] hover:text-[#C5A059] transition-colors w-fit"
            >
              <div className="w-9 h-9 rounded-full border border-[#C5A059] flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#08090B] transition-all">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold">MORE CLIENT STORIES →</span>
            </button>
          </div>

          {/* Right Column: Smooth Non-Jerking Carousel with Compact Heights & Wider Focus */}
          <div
            className="lg:col-span-7 flex flex-col items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-3.5 w-full justify-start py-2 scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0">
              {testimonialsList.map((item, idx) => {
                const isActive = activeCardIndex === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`relative rounded-xl overflow-hidden border cursor-pointer transition-all duration-500 ease-out flex flex-col justify-between shrink-0 snap-center ${
                      isActive
                        ? 'w-[82vw] max-w-[300px] h-[260px] sm:w-[48%] sm:h-[310px] border-[#C5A059] ring-1 ring-[#C5A059]/40 z-20 shadow-2xl shadow-black/80 scale-100 opacity-100'
                        : 'w-[76vw] max-w-[270px] h-[250px] sm:w-[24%] sm:h-[270px] border-white/10 hover:border-[#C5A059]/50 z-10 scale-[0.98] opacity-80'
                    } p-4 sm:p-5`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img
                        src={item.bgImage}
                        alt={item.author}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-[#07080B]/65 to-black/30"></div>
                    </div>

                    {/* Top Index Number */}
                    <div className="relative z-10 flex items-center gap-2">
                      <span className="font-serif text-xs text-[#C5A059] font-medium">{item.number}</span>
                      <div className="w-6 h-[1px] bg-[#C5A059]"></div>
                    </div>

                    {/* Quote Content */}
                    <div className="relative z-10 flex flex-col my-auto">
                      <span className="font-serif text-xl sm:text-2xl text-[#C5A059] leading-none mb-1">
                        “
                      </span>
                      <p
                        className={`font-serif text-[#FAF8F5] leading-relaxed font-light ${
                          isActive ? 'text-xs sm:text-sm line-clamp-3 sm:line-clamp-none' : 'text-[11px] line-clamp-2'
                        }`}
                      >
                        {item.quote.replace(/^“|”$/g, '')}
                      </p>
                    </div>

                    {/* Bottom Author Info & Action Arrow */}
                    <div className="relative z-10 flex items-end justify-between pt-2 border-t border-white/10 gap-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.avatar}
                          alt={item.author}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-[#C5A059] shrink-0"
                        />
                        <div className="flex flex-col overflow-hidden">
                          <span className="font-serif text-xs text-[#FAF8F5] font-medium leading-tight truncate">
                            {item.author}
                          </span>
                          <span className="text-[7.5px] uppercase tracking-[0.18em] font-mono text-[#C5A059] truncate">
                            {item.category} • {item.location}
                          </span>
                        </div>
                      </div>

                      {isActive && (
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#C5A059] flex items-center justify-center text-[#08090B] bg-[#C5A059] shrink-0 shadow-md">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Pagination Indicators */}
            <div className="flex items-center gap-2.5 mt-5">
              {testimonialsList.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === activeCardIndex
                      ? 'w-8 bg-[#C5A059]'
                      : 'w-3 bg-white/20 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


