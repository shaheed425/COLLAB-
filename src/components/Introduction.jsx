import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, ShieldCheck } from 'lucide-react';

export default function Introduction() {
  const philosophyStats = [
    {
      icon: Calendar,
      value: '350+',
      line1: 'EXTRAORDINARY EVENTS',
      line2: 'DELIVERED'
    },
    {
      icon: MapPin,
      value: '15+',
      line1: 'GLOBAL DESTINATIONS',
      line2: '& VENUES'
    },
    {
      icon: Star,
      value: '100%',
      line1: 'FLAWLESS',
      line2: 'EXECUTION RATE'
    },
    {
      icon: ShieldCheck,
      value: '10+',
      line1: 'YEARS OF',
      line2: 'CREATIVE DIRECTION'
    }
  ];

  return (
    <section id="about" className="relative py-14 sm:py-24 bg-[#07080A] border-b border-white/10 overflow-hidden">
      {/* Background Soft Golden Arc Glow */}
      <div className="absolute -left-36 -bottom-36 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full border border-[#C5A059]/15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
            02 • OUR PHILOSOPHY
          </span>
          <div className="h-[1px] w-12 sm:w-14 bg-[#E5C887]"></div>
        </div>

        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-10 sm:mb-16">
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.1] font-light tracking-tight"
            >
              More Than An{' '}
              <span className="gold-gradient-text font-serif italic font-normal">Event.</span>
              <span className="block font-serif text-2xl sm:text-4xl lg:text-5xl text-[#FAF8F5]/85 font-light mt-2">
                An Experience.
              </span>
            </motion.h2>
          </div>

          {/* Right Brand Story Paragraphs */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 pt-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-xs sm:text-base text-[#FAF8F5]/90 font-light leading-relaxed"
            >
              At Collab Event Hub, we believe an extraordinary event is defined by emotional resonance and flawless execution. We bridge architectural planning, creative direction, and seamless guest logistics to curate moments that transcend expectations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-xs sm:text-sm text-[#FAF8F5]/60 font-light leading-relaxed"
            >
              From bespoke destination weddings across South India and international resorts to high-profile corporate galas in Dubai, every atmosphere we construct is tailored, cinematic, and memorable.
            </motion.p>
          </div>
        </div>

        {/* Responsive Stats Section: Neat Compact Cards Grid on Mobile & Inline Divider Columns on Desktop */}
        <div className="pt-6 sm:pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {philosophyStats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.line1}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-3.5 sm:p-5 rounded-2xl bg-[#0D0F16] lg:bg-transparent border border-white/10 lg:border-none lg:border-r lg:border-white/10 lg:pr-6 last:lg:border-r-0 hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-lg lg:shadow-none"
                >
                  {/* Dark Circle Icon Badge */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] shrink-0 shadow-md">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  {/* Stat Text Details */}
                  <div className="flex flex-col">
                    <span className="font-sans text-xl sm:text-3xl text-[#FAF8F5] font-bold tracking-tight mb-0.5">
                      {stat.value}
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.16em] uppercase text-[#FAF8F5]/65 font-medium leading-tight">
                      {stat.line1}
                      <br />
                      {stat.line2}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
