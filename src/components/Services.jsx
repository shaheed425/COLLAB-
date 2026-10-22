import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  X,
  MessageCircle,
  Sparkles,
  Heart,
  MapPin,
  Briefcase,
  PartyPopper,
  Volume2,
  Music,
  Crown,
  Camera,
  Users,
  ClipboardCheck
} from 'lucide-react';
import { HOMEPAGE_SERVICES, ALL_12_SERVICES, getWhatsAppUrl } from '../data/eventData';

export default function Services({ onOpenPlanner }) {
  const [showAllServicesModal, setShowAllServicesModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Helper icon mapper for services
  const getServiceIcon = (id) => {
    switch (id) {
      case 's-1':
      case 's-wedding':
        return Heart;
      case 's-2':
      case 's-destination':
        return MapPin;
      case 's-3':
        return Sparkles;
      case 's-4':
        return PartyPopper;
      case 's-5':
      case 's-corporate':
        return Briefcase;
      case 's-6':
        return Volume2;
      case 's-7':
        return Music;
      case 's-8':
      case 's-stage-decor':
        return Sparkles;
      case 's-9':
        return Crown;
      case 's-10':
        return Camera;
      case 's-11':
        return Users;
      case 's-12':
      default:
        return ClipboardCheck;
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-[#08090B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                OUR SERVICES
              </span>
              <div className="h-[1px] w-12 bg-[#E5C887]"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.08] font-light">
              Event Experiences <br />
              <span className="italic font-serif gold-gradient-text font-normal">
                for Every Occasion.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
              We design, manage, and execute every celebration with meticulous precision and creative elegance.
            </p>
          </div>
        </div>

        {/* Homepage Preview: Exactly 4 Featured Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {HOMEPAGE_SERVICES.map((service, idx) => {
            const IconComp = getServiceIcon(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => {
                  const match = ALL_12_SERVICES.find((s) => s.title.toLowerCase() === service.title.toLowerCase());
                  setSelectedService(match || service);
                }}
                className="relative h-[320px] sm:h-[400px] p-6 rounded-2xl overflow-hidden border border-white/10 hover:border-[#E5C887] cursor-pointer group flex flex-col justify-between transition-all duration-500 shadow-xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/60 to-black/20 group-hover:via-[#08090B]/70 transition-all duration-500"></div>
                </div>

                {/* Top Number & Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg text-[#E5C887] font-medium">{service.number}</span>
                    <div className="w-6 h-[1px] bg-[#E5C887]"></div>
                  </div>
                  <span className="text-[9px] font-mono tracking-wider uppercase text-[#FAF8F5]/70 bg-black/50 px-2 py-0.5 rounded border border-white/10">
                    {service.tag}
                  </span>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 my-auto flex justify-start">
                  <div className="w-12 h-12 rounded-full bg-black/60 border border-[#E5C887]/60 backdrop-blur-md flex items-center justify-center text-[#E5C887] group-hover:scale-110 group-hover:border-[#E5C887] group-hover:bg-[#E5C887] group-hover:text-[#08090B] transition-all duration-300 shadow-lg">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content & Action */}
                <div className="relative z-10 flex items-end justify-between gap-3 pt-2">
                  <div className="flex flex-col">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] mb-2 font-normal leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-full border border-[#E5C887]/60 flex items-center justify-center text-[#E5C887] shrink-0 group-hover:bg-[#E5C887] group-hover:text-[#08090B] transition-all duration-300 shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All 12 Services Action */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs text-[#FAF8F5]/70 font-light text-center sm:text-left">
            Looking for sound, photography, bridal makeover, or complete event execution?
          </p>

          <button
            onClick={() => setShowAllServicesModal(true)}
            className="group inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#08090B] bg-[#E5C887] hover:bg-[#FAF6EE] transition-all rounded-full shadow-md shrink-0 cursor-pointer"
          >
            <span>Explore All 12 Services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* ALL 12 SERVICES MODAL */}
      <AnimatePresence>
        {showAllServicesModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setShowAllServicesModal(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-[#0D0F14] border border-[#E5C887]/40 rounded-2xl overflow-hidden shadow-2xl my-auto flex flex-col max-h-[92vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12151E] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5C887]"></div>
                  <span className="text-xs font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                    COMPLETE SERVICES DIRECTORY • ALL 12 SERVICES
                  </span>
                </div>

                <button
                  onClick={() => setShowAllServicesModal(false)}
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#E5C887] text-white hover:text-[#08090B] transition-all border border-white/20 hover:border-[#E5C887] cursor-pointer"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest hidden sm:inline">Close</span>
                  <X className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="text-center mb-8 max-w-2xl mx-auto">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#E5C887] uppercase block mb-1">
                    BESPOKE SERVICES
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] mb-2 font-normal">
                    Complete Event Management <span className="italic gold-gradient-text font-serif">Solutions</span>
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/75 font-light">
                    Every service is coordinated by our team in Kannur. Inquire directly on WhatsApp for tailored planning and arrangements.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ALL_12_SERVICES.map((service, idx) => {
                    const ServiceIcon = getServiceIcon(service.id);
                    const whatsappInquiryUrl = getWhatsAppUrl(`Hello Collab Events, I would like to inquire about your "${service.title}" service.`);

                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.03 }}
                        className="p-5 rounded-xl bg-[#131620] border border-white/10 hover:border-[#E5C887] flex flex-col justify-between transition-all duration-300 group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-full bg-black/60 border border-[#E5C887]/60 flex items-center justify-center text-[#E5C887] group-hover:bg-[#E5C887] group-hover:text-[#08090B] transition-all">
                              <ServiceIcon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono text-[#E5C887] font-semibold">
                              {service.number}
                            </span>
                          </div>

                          <h4 className="font-serif text-lg text-[#FAF8F5] group-hover:text-[#E5C887] transition-colors mb-2 font-medium">
                            {service.title}
                          </h4>
                          <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed mb-4">
                            {service.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                          <button
                            onClick={() => setSelectedService(service)}
                            className="text-[10px] font-mono text-[#FAF8F5]/70 hover:text-white uppercase tracking-wider"
                          >
                            View Details
                          </button>
                          
                          <a
                            href={whatsappInquiryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#E5C887] hover:underline uppercase tracking-wider font-semibold"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                            <span>Inquire</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:px-8 border-t border-white/10 bg-[#12151E] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <span className="text-xs text-[#A1A1AA] font-light">
                  Direct coordination &amp; transparent consultation for all services.
                </span>

                <button
                  onClick={() => {
                    setShowAllServicesModal(false);
                    onOpenPlanner();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#08090B] bg-[#E5C887] hover:bg-[#FAF6EE] transition-all rounded-full shadow-lg cursor-pointer"
                >
                  START EVENT PLANNER →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SINGLE SERVICE DETAIL MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#0D0F14] border border-[#E5C887]/40 rounded-2xl overflow-hidden p-6 sm:p-8 shadow-2xl my-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 text-white/60 hover:text-[#E5C887] rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-[#E5C887]/20 border border-[#E5C887] flex items-center justify-center text-[#E5C887]">
                  {React.createElement(getServiceIcon(selectedService.id), { className: 'w-5 h-5' })}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E5C887] block font-semibold">
                    SERVICE #{selectedService.number || '01'}
                  </span>
                  <h3 className="font-serif text-2xl text-[#FAF8F5]">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {selectedService.image && (
                <div className="h-48 rounded-xl overflow-hidden mb-5 border border-white/10">
                  <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#FAF8F5]/90 font-light leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-2.5 px-4 text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/70 hover:text-white border border-white/15 rounded-full"
                >
                  Close
                </button>
                <a
                  href={getWhatsAppUrl(`Hello Collab Events, I would like to inquire about your "${selectedService.title}" service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-[0.14em] text-[#08090B] bg-[#E5C887] hover:bg-[#FAF6EE] transition-all rounded-full text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#08090B]" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
