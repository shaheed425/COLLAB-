import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Car, Hotel, Camera, MapPin, Sliders, MessageCircle, ArrowRight } from 'lucide-react';
import { EXTRA_SERVICES, getWhatsAppUrl } from '../data/eventData';

export default function ExtraServices({ onOpenPlanner }) {
  const getIcon = (id) => {
    switch (id) {
      case 'evening-arrangements':
        return Moon;
      case 'travel-arrangements':
        return Car;
      case 'hotel-arrangements':
        return Hotel;
      case 'photobooth-setup':
        return Camera;
      case 'destination-weddings':
        return MapPin;
      case 'custom-event-planning':
      default:
        return Sliders;
    }
  };

  return (
    <section id="extra-services" className="relative py-16 sm:py-24 bg-[#07080A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                COMPREHENSIVE CONCIERGE
              </span>
              <div className="h-[1px] w-12 bg-[#E5C887]"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] leading-[1.1] font-light">
              Extra Services <br />
              <span className="italic font-serif gold-gradient-text font-normal">
                &amp; Arrangements.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed max-w-md">
            Beyond staging and catering, we orchestrate hospitality, logistics, accommodations, and custom evening setups so your celebration unfolds effortlessly.
          </p>
        </div>

        {/* 6 Elegant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {EXTRA_SERVICES.map((item, idx) => {
            const Icon = getIcon(item.id);
            const whatsappUrl = getWhatsAppUrl(`Hello Collab Events, I would like to inquire about "${item.title}".`);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0B0D14] border border-white/10 hover:border-[#E5C887]/70 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:bg-[#0E1119]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-black/60 border border-[#E5C887]/50 flex items-center justify-center text-[#E5C887] group-hover:scale-110 group-hover:bg-[#E5C887] group-hover:text-[#08090B] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#E5C887] font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] group-hover:text-[#E5C887] transition-colors mb-2 font-normal">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E5C887] hover:underline uppercase tracking-wider font-semibold"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>

                  <button
                    onClick={onOpenPlanner}
                    className="text-[10px] font-mono uppercase text-[#FAF8F5]/60 hover:text-white"
                  >
                    Add to Plan
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
