import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function FeaturedPortfolio({ onOpenPlanner }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: 'All Events', value: 'all' },
    { label: 'Weddings', value: 'weddings' },
    { label: 'Corporate', value: 'corporate' },
    { label: 'Social Events', value: 'social' },
    { label: 'Exhibitions', value: 'exhibitions' },
    { label: 'Private Parties', value: 'private' },
  ];

  const projects = [
    {
      id: '01',
      number: '01',
      categoryTag: 'WEDDING',
      title: 'A Fairytale Celebration',
      subtitle: 'A beautiful union filled with love, elegance and unforgettable moments.',
      categoryKey: 'weddings',
      location: 'Kochi, Kerala',
      guests: '450 Guests',
      year: '2024',
      image: '/portfolio/port_1.png',
      gallery: ['/portfolio/port_1.png'],
      summary: 'A fairytale union filled with floral ceiling canopies, glass pathways, and candlelit lanterns.',
      testimonial: '"Collab Event Hub created a fairytale wedding beyond anything we could have ever imagined."'
    },
    {
      id: '02',
      number: '02',
      categoryTag: 'CORPORATE EVENT',
      title: 'Annual Business Summit 2024',
      subtitle: 'Immersive blue kinetic lighting architecture and keynote auditorium staging.',
      categoryKey: 'corporate',
      location: 'Dubai, UAE',
      guests: '800 Guests',
      year: '2024',
      image: '/portfolio/port_2.png',
      gallery: ['/portfolio/port_2.png'],
      summary: 'High-impact corporate summit featuring custom kinetic laser ceiling arches and VIP banquet seating.',
      testimonial: '"World-class execution and technical precision for our annual leadership summit."'
    },
    {
      id: '03',
      number: '03',
      categoryTag: 'PRIVATE PARTY',
      title: 'A Special Birthday',
      subtitle: 'Organic pastel champagne balloon arch and glowing amber neon birthday decor.',
      categoryKey: 'private',
      location: 'Goa',
      guests: '120 Guests',
      year: '2024',
      image: '/portfolio/port_3.png',
      gallery: ['/portfolio/port_3.png'],
      summary: 'A luxurious private birthday celebration featuring organic champagne balloon installations and neon lights.',
      testimonial: '"The decor was absolutely magical! Every guest was taking photos nonstop."'
    },
    {
      id: '04',
      number: '04',
      categoryTag: 'SOCIAL EVENT',
      title: 'Music Fest 2024',
      subtitle: 'High-energy arena stage production with synchronized lasers & pyrotechnics.',
      categoryKey: 'social',
      location: 'Trivandrum',
      guests: '5,000 Guests',
      year: '2024',
      image: '/portfolio/port_4.png',
      gallery: ['/portfolio/port_4.png'],
      summary: 'Electric music festival production with custom stage pyrotechnics, laser lighting, and broadcast audio.',
      testimonial: '"The energy was unmatched! Collab Event Hub delivered a concert experience like no other."'
    },
    {
      id: '05',
      number: '05',
      categoryTag: 'EXHIBITION',
      title: 'Design & Decor Expo',
      subtitle: 'Architectural gazebo lounge exhibit with lush hanging greenery and warm spotlights.',
      categoryKey: 'exhibitions',
      location: 'Bangalore',
      guests: '1,500 Guests',
      year: '2024',
      image: '/portfolio/port_5.png',
      gallery: ['/portfolio/port_5.png'],
      summary: 'Haute-couture architectural gazebo decor exhibit showcasing sustainable luxury wedding styling.',
      testimonial: '"The floral and wooden architecture was the highlight of the entire exposition."'
    },
    {
      id: '06',
      number: '06',
      categoryTag: 'WEDDING',
      title: 'Outdoor Reception',
      subtitle: 'Twinkling fairy light canopy strings and candlelit dining under the stars.',
      categoryKey: 'weddings',
      location: 'Wayanad, Kerala',
      guests: '300 Guests',
      year: '2024',
      image: '/portfolio/port_6.png',
      gallery: ['/portfolio/port_6.png'],
      summary: 'A romantic outdoor wedding reception illuminated by thousands of twinkling fairy lights.',
      testimonial: '"Magical night! The dining under the fairy lights felt like a dream come true."'
    }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.categoryKey === activeFilter);

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 bg-[#08090B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header - Matching Reference Screenshot */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A059] uppercase">
                OUR WORK
              </span>
              <div className="h-[1px] w-12 bg-[#C5A059]"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] leading-[1.1] font-light">
              Events <span className="italic font-serif gold-gradient-text font-normal">That Speak</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/75 font-light leading-relaxed mt-2 max-w-xl">
              A glimpse into the moments we've planned, designed and brought to life with creativity, precision and passion.
            </p>
          </div>

          {/* Right Header Stats & Navigation Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 border-l-0 sm:border-l border-white/10 sm:pl-6 pt-2 sm:pt-0">
            <div className="grid grid-cols-3 sm:flex items-center gap-3 sm:gap-5 text-center sm:text-left pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-3xl text-[#FAF8F5] font-light">100+</span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono text-[#A1A1AA]">
                  Events Delivered
                </span>
              </div>
              <div className="hidden sm:block h-7 w-[1px] bg-white/15"></div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-3xl text-[#FAF8F5] font-light">50+</span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono text-[#A1A1AA]">
                  Happy Clients
                </span>
              </div>
              <div className="hidden sm:block h-7 w-[1px] bg-white/15"></div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-3xl text-[#FAF8F5] font-light">5+</span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono text-[#A1A1AA]">
                  Cities Covered
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#FAF8F5]/70 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-[#C5A059] flex items-center justify-center text-[#08090B] font-bold shadow-lg hover:bg-[#E5C887] transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills Bar - Touch Scrollable on Mobile */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 overflow-x-auto pb-2 flex-nowrap sm:flex-wrap scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0">
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] rounded-full transition-all duration-300 font-medium whitespace-nowrap shrink-0 ${
                activeFilter === tab.value
                  ? 'bg-[#C5A059] text-[#08090B] font-semibold shadow-md shadow-[#C5A059]/20'
                  : 'bg-[#12141C] text-[#FAF8F5]/70 hover:text-[#FAF8F5] border border-white/10 hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6-Card Touch-Swipe Carousel on Mobile & Asymmetric Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-6 px-6 lg:grid lg:grid-cols-12 lg:gap-4 lg:mx-0 lg:px-0">
          {/* Card 01 - Left Tall Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => setSelectedProject(filteredProjects[0] || projects[0])}
            className="w-[82vw] max-w-[300px] shrink-0 snap-center lg:w-auto lg:shrink lg:max-w-none lg:col-span-5 relative min-h-[300px] sm:min-h-[450px] p-5 sm:p-7 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/80 cursor-pointer group flex flex-col justify-end transition-all duration-500 shadow-2xl"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={(filteredProjects[0] || projects[0]).image}
                alt={(filteredProjects[0] || projects[0]).title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-transparent group-hover:via-[#08090B]/70 transition-all duration-500"></div>
            </div>

            <div className="relative z-10 flex flex-col">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C5A059] mb-2 font-medium">
                {(filteredProjects[0] || projects[0]).categoryTag}
              </span>
              <h3 className="font-serif text-xl sm:text-4xl text-[#FAF8F5] mb-2 sm:mb-3 font-normal leading-tight">
                {(filteredProjects[0] || projects[0]).title}
              </h3>
              <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed mb-4 sm:mb-6 max-w-md line-clamp-2 sm:line-clamp-none">
                {(filteredProjects[0] || projects[0]).subtitle}
              </p>

              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#FAF8F5]/90 group-hover:text-[#C5A059] transition-colors font-mono">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#08090B] transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <span>View Details</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Layout (7 Columns out of 12: Top Row 2 Cards, Bottom Row 3 Cards) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-7 lg:gap-5">
            {/* Top Right Row (2 Cards on Desktop, Horizontal Scroll on Mobile) */}
            <div className="contents lg:grid lg:grid-cols-2 lg:gap-5">
              {/* Card 02 */}
              {projects[1] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  onClick={() => setSelectedProject(projects[1])}
                  className="w-[82vw] max-w-[300px] shrink-0 snap-center lg:w-auto lg:shrink lg:max-w-none relative h-[300px] sm:h-[250px] p-5 sm:p-6 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/80 cursor-pointer group flex flex-col justify-end transition-all duration-500 shadow-xl"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={projects[1].image}
                      alt={projects[1].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col">
                    <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-[#C5A059] mb-1 font-medium">
                      {projects[1].categoryTag}
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl text-[#FAF8F5] mb-2 font-normal leading-tight">
                      {projects[1].title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 group-hover:text-[#C5A059] transition-colors font-mono">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Card 03 */}
              {projects[2] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  onClick={() => setSelectedProject(projects[2])}
                  className="w-[82vw] max-w-[300px] shrink-0 snap-center lg:w-auto lg:shrink lg:max-w-none relative h-[300px] sm:h-[250px] p-5 sm:p-6 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/80 cursor-pointer group flex flex-col justify-end transition-all duration-500 shadow-xl"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={projects[2].image}
                      alt={projects[2].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col">
                    <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-[#C5A059] mb-1 font-medium">
                      {projects[2].categoryTag}
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl text-[#FAF8F5] mb-2 font-normal leading-tight">
                      {projects[2].title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 group-hover:text-[#C5A059] transition-colors font-mono">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Right Row (3 Cards on Desktop, Horizontal Scroll on Mobile) */}
            <div className="contents lg:grid lg:grid-cols-3 lg:gap-5">
              {/* Card 04 */}
              {projects[3] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  onClick={() => setSelectedProject(projects[3])}
                  className="w-[82vw] max-w-[300px] shrink-0 snap-center lg:w-auto lg:shrink lg:max-w-none relative h-[300px] sm:h-[255px] p-5 sm:p-5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/80 cursor-pointer group flex flex-col justify-end transition-all duration-500 shadow-xl"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={projects[3].image}
                      alt={projects[3].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col">
                    <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#C5A059] mb-1 font-medium">
                      {projects[3].categoryTag}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#FAF8F5] mb-2 font-normal leading-tight">
                      {projects[3].title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 group-hover:text-[#C5A059] transition-colors font-mono">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Card 05 */}
              {projects[4] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  onClick={() => setSelectedProject(projects[4])}
                  className="w-[82vw] max-w-[300px] shrink-0 snap-center lg:w-auto lg:shrink lg:max-w-none relative h-[300px] sm:h-[255px] p-5 sm:p-5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/80 cursor-pointer group flex flex-col justify-end transition-all duration-500 shadow-xl"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={projects[4].image}
                      alt={projects[4].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col">
                    <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#C5A059] mb-1 font-medium">
                      {projects[4].categoryTag}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#FAF8F5] mb-2 font-normal leading-tight">
                      {projects[4].title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 group-hover:text-[#C5A059] transition-colors font-mono">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Card 06 */}
              {projects[5] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  onClick={() => setSelectedProject(projects[5])}
                  className="w-[82vw] max-w-[300px] shrink-0 snap-center lg:w-auto lg:shrink lg:max-w-none relative h-[300px] sm:h-[255px] p-5 sm:p-5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/80 cursor-pointer group flex flex-col justify-end transition-all duration-500 shadow-xl"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={projects[5].image}
                      alt={projects[5].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col">
                    <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#C5A059] mb-1 font-medium">
                      {projects[5].categoryTag}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#FAF8F5] mb-2 font-normal leading-tight">
                      {projects[5].title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 group-hover:text-[#C5A059] transition-colors font-mono">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Center Action Button */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={onOpenPlanner}
            className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-3.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#FAF8F5] border border-[#C5A059] hover:bg-[#C5A059] hover:text-[#08090B] transition-all duration-300 rounded-full shadow-xl"
          >
            <span>View More Events</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Project Lightbox Modal */}
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
