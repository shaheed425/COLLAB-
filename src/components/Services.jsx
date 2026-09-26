import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  X,
  MapPin,
  Briefcase,
  Heart,
  Sparkles,
  PartyPopper,
  Crown,
  Camera,
  Volume2,
  Users,
  Music,
  ClipboardCheck,
  Play
} from 'lucide-react';

export default function Services({ onOpenPlanner }) {
  const [showAllServicesModal, setShowAllServicesModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // 4 Primary Hero Cards matching Image 1
  const primaryCards = [
    {
      id: '01',
      number: '01',
      title: 'Wedding Events',
      subtitle: 'Full planning and coordination for traditional, themed and destination weddings.',
      image: '/services/serv_1.png',
      icon: Heart,
      categoryKey: 'weddings'
    },
    {
      id: '02',
      number: '02',
      title: 'Destination Events',
      subtitle: 'Bespoke celebrations at beautiful locations, planned from concept to execution.',
      image: '/services/serv_2.png',
      icon: MapPin,
      categoryKey: 'destination'
    },
    {
      id: '03',
      number: '03',
      title: 'Corporate Events',
      subtitle: 'Conferences, brand launches, business gatherings and professional experiences.',
      image: '/services/serv_3.png',
      icon: Briefcase,
      categoryKey: 'corporate'
    },
    {
      id: '04',
      number: '04',
      title: 'Stage & Entrance Decor',
      subtitle: 'Elegant stage, entrance and venue styling designed around the event.',
      image: '/portfolio/port_1.png',
      icon: Sparkles,
      categoryKey: 'decor'
    }
  ];

  // Full 12 Services Catalog matching Image 2
  const all12Services = [
    {
      id: 's-01',
      title: 'WEDDING EVENTS',
      description: 'Full planning and coordination for traditional, theme and destination weddings.',
      icon: Heart,
      tag: 'Core Specialization',
      image: '/services/serv_1.png'
    },
    {
      id: 's-02',
      title: 'DESTINATION EVENTS',
      description: 'Exquisite experiences at beautiful locations worldwide.',
      icon: MapPin,
      tag: 'Global Venues',
      image: '/services/serv_2.png'
    },
    {
      id: 's-03',
      title: 'ENGAGEMENT CEREMONIES',
      description: 'Memorable moments that celebrate your love.',
      icon: Sparkles,
      tag: 'Pre-Wedding',
      image: '/portfolio/port_3.png'
    },
    {
      id: 's-04',
      title: 'STAGE AND ENTRANCE DECOR',
      description: 'Elegant stage & entrance setups that leave a lasting impression.',
      icon: Sparkles,
      tag: 'Spatial Architecture',
      image: '/portfolio/port_1.png'
    },
    {
      id: 's-05',
      title: 'BIRTHDAY PARTIES',
      description: 'Fun-filled and customized celebrations for all ages.',
      icon: PartyPopper,
      tag: 'Private Gatherings',
      image: '/portfolio/port_3.png'
    },
    {
      id: 's-06',
      title: 'BRIDE AND GROOM MAKEOVER',
      description: 'Look your best on your special day.',
      icon: Crown,
      tag: 'Bridal Concierge',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=85'
    },
    {
      id: 's-07',
      title: 'CORPORATE EVENTS',
      description: 'Professional and impactful events for businesses.',
      icon: Briefcase,
      tag: 'Business Galas',
      image: '/services/serv_3.png'
    },
    {
      id: 's-08',
      title: 'PHOTOGRAPHY AND VIDEOGRAPHY',
      description: 'Capturing every precious moment beautifully.',
      icon: Camera,
      tag: 'Cinematic Coverage',
      image: '/reels/reel_3.png'
    },
    {
      id: 's-09',
      title: 'SOUND, LIGHT & LED SOLUTIONS',
      description: 'Advanced audio, lighting and LED setups for stunning experiences.',
      icon: Volume2,
      tag: 'Technical Staging',
      image: '/reels/reel_2.png'
    },
    {
      id: 's-10',
      title: 'GUEST MANAGEMENT TEAM',
      description: 'Seamless hospitality and guest coordination.',
      icon: Users,
      tag: 'VIP Hospitality',
      image: '/portfolio/port_2.png'
    },
    {
      id: 's-11',
      title: 'ENTERTAINMENT PROGRAMS',
      description: 'Qawwali, Gazal, Islah, Muttipatt and more.',
      icon: Music,
      tag: 'Live Talent',
      image: '/portfolio/port_4.png'
    },
    {
      id: 's-12',
      title: 'COMPLETE EVENT PLANNING & EXECUTION',
      description: 'From concept to celebration – we handle everything so you can enjoy every moment stress-free.',
      icon: ClipboardCheck,
      tag: 'End-To-End Master Direction',
      image: '/portfolio/port_5.png'
    }
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 bg-[#08090B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header - Matching Image 1 EXACTLY */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A059] uppercase">
                OUR SERVICES
              </span>
              <div className="h-[1px] w-12 bg-[#C5A059]"></div>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.08] font-light">
              Event Experiences <br />
              <span className="italic font-serif gold-gradient-text font-normal">
                for Every Occasion.
              </span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 border-l-0 sm:border-l border-white/10 sm:pl-6 pt-2 sm:pt-0">
            <p className="text-xs sm:text-sm text-[#FAF8F5]/75 font-light leading-relaxed max-w-sm">
              From intimate celebrations to grand global events, we bring creativity, planning and flawless execution to make every moment unforgettable.
            </p>

            {/* Header Right Stats */}
            <div className="grid grid-cols-3 sm:flex items-center gap-3 sm:gap-5 text-center sm:text-left pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-3xl text-[#FAF8F5] font-light">10+</span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.18em] font-mono text-[#A1A1AA]">
                  SERVICE CATEGORIES
                </span>
              </div>
              <div className="hidden sm:block h-7 w-[1px] bg-white/15"></div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-3xl text-[#FAF8F5] font-light">500+</span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.18em] font-mono text-[#A1A1AA]">
                  HAPPY CLIENTS
                </span>
              </div>
              <div className="hidden sm:block h-7 w-[1px] bg-white/15"></div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-3xl text-[#FAF8F5] font-light">10+</span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.18em] font-mono text-[#A1A1AA]">
                  YEARS OF EXPERIENCE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Main Cards Horizontal Touch Slider on Mobile & Grid on Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory gap-4 mb-6 scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0">
          {primaryCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => {
                  const match = all12Services.find(s => s.title.toLowerCase().includes(card.title.toLowerCase()));
                  if (match) setSelectedService(match);
                  else setShowAllServicesModal(true);
                }}
                className="relative w-[82vw] max-w-[320px] shrink-0 snap-center sm:w-auto sm:shrink sm:max-w-none h-[280px] sm:h-[380px] p-5 sm:p-6 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/80 cursor-pointer group flex flex-col justify-between transition-all duration-500 shadow-xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/40 to-black/20 group-hover:via-[#08090B]/60 transition-all duration-500"></div>
                </div>

                {/* Top Index & Icon Badge Overlay */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg text-[#C5A059] font-medium">{card.number}</span>
                    <div className="w-6 h-[1px] bg-[#C5A059]"></div>
                  </div>
                </div>

                {/* Center Circle Icon Badge */}
                <div className="relative z-10 my-auto flex justify-start">
                  <div className="w-11 h-11 rounded-full bg-black/60 border border-[#C5A059]/60 backdrop-blur-md flex items-center justify-center text-[#C5A059] group-hover:scale-110 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#08090B] transition-all duration-300 shadow-lg">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content & Arrow Button */}
                <div className="relative z-10 flex items-end justify-between gap-3 pt-2">
                  <div className="flex flex-col">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] mb-1.5 font-normal leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed line-clamp-2">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Golden Circle Arrow Button */}
                  <div className="w-9 h-9 rounded-full border border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] shrink-0 group-hover:bg-[#C5A059] group-hover:text-[#08090B] transition-all duration-300 shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Bar - Pitch Black Container Background */}
        <div className="p-6 sm:p-8 rounded-2xl bg-black border border-white/15 hover:border-[#C5A059]/50 transition-all flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 z-10">
            {/* Thumbnail Stack Video Box on Left */}
            <div className="relative w-24 h-16 rounded-xl overflow-hidden border border-white/20 shrink-0 group cursor-pointer" onClick={() => setShowAllServicesModal(true)}>
              <img
                src="/portfolio/port_1.png"
                alt="More services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-[#C5A059] text-[#08090B] flex items-center justify-center shadow-lg">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            <div className="flex flex-col text-center sm:text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C5A059] uppercase font-semibold mb-1">
                AND MORE SERVICES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] mb-1">
                Explore All <span className="italic font-serif gold-gradient-text">Our Services</span>
              </h3>
              <p className="text-xs text-[#FAF8F5]/75 font-light leading-relaxed max-w-xl">
                From engagement ceremonies to entertainment, photography, guest management and complete event planning – discover everything we offer.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 z-10 shrink-0">
            {/* Pill CTA Button */}
            <button
              onClick={() => setShowAllServicesModal(true)}
              className="group inline-flex items-center gap-2.5 px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#08090B] bg-gradient-to-r from-[#FAF6EE] via-[#E5C887] to-[#C5A059] hover:brightness-110 transition-all rounded-full shadow-lg shadow-[#C5A059]/20 cursor-pointer"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Avatar Stack & Category Badge */}
            <div className="hidden sm:flex items-center gap-3 border-l border-white/15 pl-5">
              <div className="flex -space-x-2">
                <img src="/services/serv_1.png" alt="Thumb" className="w-8 h-8 rounded-full border border-[#C5A059] object-cover" />
                <img src="/services/serv_2.png" alt="Thumb" className="w-8 h-8 rounded-full border border-[#C5A059] object-cover" />
                <img src="/services/serv_3.png" alt="Thumb" className="w-8 h-8 rounded-full border border-[#C5A059] object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm text-[#FAF8F5] font-light">10+</span>
                <span className="text-[8px] uppercase tracking-[0.15em] font-mono text-[#A1A1AA]">
                  SERVICE CATEGORIES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALL 12 SERVICES MODAL - Matching Image 2 EXACTLY */}
      <AnimatePresence>
        {showAllServicesModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setShowAllServicesModal(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#0D0F14] border border-[#C5A059]/40 rounded-2xl overflow-hidden shadow-2xl my-auto flex flex-col max-h-[90vh]"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12151E] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C5A059]"></div>
                  <span className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
                    COLLAB EVENT HUB • ALL 12 SERVICE CATEGORIES
                  </span>
                </div>

                <button
                  onClick={() => setShowAllServicesModal(false)}
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#08090B] transition-all border border-white/20 hover:border-[#C5A059] cursor-pointer"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest hidden sm:inline">Close</span>
                  <X className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Modal Body - 12 Services Grid matching Image 2 */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="text-center mb-8 max-w-2xl mx-auto">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
                    OUR COMPLETE SERVICE PORTFOLIO
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] mb-2 font-normal">
                    Crafting Every Layer of <span className="italic gold-gradient-text font-serif">Your Celebration</span>
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/75 font-light">
                    Select any service below to discuss custom arrangements, spatial staging, or culinary and hospitality logistics with our team.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {all12Services.map((service, idx) => {
                    const ServiceIcon = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.04 }}
                        onClick={() => setSelectedService(service)}
                        className="p-5 rounded-xl bg-[#131620] border border-white/10 hover:border-[#C5A059] cursor-pointer group flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#C5A059]/10"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-full bg-black/60 border border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#08090B] transition-all">
                              <ServiceIcon className="w-5 h-5" />
                            </div>
                            <span className="text-[9px] font-mono text-[#C5A059] uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded border border-white/10">
                              {service.tag}
                            </span>
                          </div>

                          <h4 className="font-serif text-lg text-[#FAF8F5] group-hover:text-[#C5A059] transition-colors mb-2 font-medium">
                            {service.title}
                          </h4>
                          <p className="text-xs text-[#FAF8F5]/75 font-light leading-relaxed mb-4">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono text-[#C5A059] pt-2 border-t border-white/10">
                          <span>INQUIRE THIS SERVICE</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:px-8 border-t border-white/10 bg-[#12151E] flex items-center justify-between gap-4 shrink-0">
                <span className="text-xs text-[#A1A1AA] font-light hidden sm:inline">
                  All 12 services are managed in-house by Collab Event Hub master producers.
                </span>

                <button
                  onClick={() => {
                    setShowAllServicesModal(false);
                    onOpenPlanner();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#08090B] bg-[#C5A059] hover:bg-[#E5C887] transition-all rounded-full shadow-lg"
                >
                  START CUSTOM EVENT PLANNER →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SINGLE SERVICE INQUIRY MODAL */}
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
              className="relative max-w-xl w-full bg-[#0D0F14] border border-[#C5A059]/40 rounded-2xl overflow-hidden p-6 sm:p-8 shadow-2xl my-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 text-white/60 hover:text-[#C5A059] rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                  {React.createElement(selectedService.icon, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A059] block">
                    {selectedService.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-[#FAF8F5]">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {selectedService.image && (
                <div className="h-44 rounded-xl overflow-hidden mb-5 border border-white/10">
                  <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#FAF8F5]/85 font-light leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-2.5 text-xs font-mono uppercase tracking-wider text-[#FAF8F5]/70 hover:text-white border border-white/15 rounded-full"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setShowAllServicesModal(false);
                    onOpenPlanner();
                  }}
                  className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#08090B] bg-[#C5A059] hover:bg-[#E5C887] transition-all rounded-full text-center"
                >
                  INQUIRE FOR THIS EVENT →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

