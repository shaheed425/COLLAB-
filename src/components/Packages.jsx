import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { PACKAGES, getWhatsAppUrl } from '../data/eventData';

export default function Packages({ onOpenPlanner }) {
  return (
    <section id="packages" className="relative py-16 sm:py-20 bg-[#07080B] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                CURATED PACKAGES
              </span>
              <div className="h-[1px] w-8 bg-[#E5C887]"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] leading-[1.1] font-light">
              Event <span className="italic font-serif gold-gradient-text font-normal">Packages</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#FAF8F5]/70 max-w-sm font-light leading-relaxed">
            Transparent packages covering dining, staging, and coordination. Customized to your venue and guest count.
          </p>
        </div>

        {/* 3 Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {PACKAGES.map((pkg, idx) => {
            const isPlatinum = pkg.id === 'platinum-package';
            const whatsappUrl = getWhatsAppUrl(
              `Hello Collab Events, I am interested in inquiring about the ${pkg.name} (starting from ${pkg.priceString}). Please share details.`
            );

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                  isPlatinum
                    ? 'bg-[#0E1119] border border-[#E5C887]/70 shadow-[0_12px_45px_rgba(229,200,135,0.12)]'
                    : 'bg-[#0A0C11] border border-white/15 hover:border-[#E5C887]/50'
                }`}
              >
                <div>
                  {/* Top Badge & Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-white/10 text-[#E5C887] font-semibold">
                      {pkg.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#FAF8F5]/50">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#FAF8F5] mb-1 font-normal">
                    {pkg.name}
                  </h3>

                  {/* Price Banner */}
                  <div className="py-3 my-3 border-y border-white/10 flex items-baseline gap-2">
                    <span className="text-[11px] uppercase font-mono text-[#FAF8F5]/60">Starting from</span>
                    <span className="font-serif text-3xl sm:text-4xl text-[#E5C887] font-semibold tracking-tight">
                      {pkg.priceString}
                    </span>
                  </div>

                  {/* Inclusions List */}
                  <div className="mb-6">
                    <span className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#E5C887] font-semibold block mb-2.5">
                      INCLUSIONS ({pkg.inclusions.length})
                    </span>

                    <ul className="space-y-2">
                      {pkg.inclusions.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs text-[#FAF8F5]/85 font-light">
                          <Check className="w-3.5 h-3.5 text-[#E5C887] shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-5 border-t border-white/10 flex flex-col gap-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#08090B] bg-[#E5C887] hover:bg-[#FAF6EE] transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#08090B]" />
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <button
                    onClick={onOpenPlanner}
                    className="w-full py-2 px-4 rounded-full text-xs font-mono uppercase tracking-[0.12em] text-[#FAF8F5]/70 hover:text-white border border-white/10 hover:border-white/25 transition-all text-center cursor-pointer"
                  >
                    Request Custom Quote
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
