import React from 'react';
import { motion } from 'framer-motion';
import { Film, Play, ArrowUpRight, Camera } from 'lucide-react';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data/eventData';

export default function InstagramSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#08090B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Film className="w-4 h-4 text-[#E5C887]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                INSTAGRAM REELS &amp; HIGHLIGHTS
              </span>
              <div className="h-[1px] w-12 bg-[#E5C887]"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.08] font-light">
              Follow The Journey. <br />
              <span className="italic font-serif gold-gradient-text font-normal">
                @{BRAND_INFO.instagramHandle}
              </span>
            </h2>
          </div>

          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit flex items-center justify-center gap-2 sm:gap-2.5 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#08090B] bg-[#E5C887] hover:bg-[#FAF6EE] transition-all duration-300 rounded-full shadow-lg shadow-[#E5C887]/20 cursor-pointer"
          >
            <Camera className="w-4 h-4 text-[#08090B]" />
            <span>VIEW INSTAGRAM PROFILE</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </div>

        {/* 4-Card Instagram Reel Feed Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={BRAND_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#E5C887] transition-all duration-500 h-[280px] sm:h-[360px] flex flex-col justify-between p-5 shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-black/30 group-hover:via-[#08090B]/70 transition-all duration-500"></div>
              </div>

              {/* Top Reel Badge */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.18em] text-[#E5C887] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/10 font-semibold">
                  <Film className="w-3 h-3" />
                  <span>REEL HIGHLIGHT</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#E5C887] group-hover:text-[#08090B] transition-all">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 flex justify-center items-center my-auto">
                <div className="w-12 h-12 rounded-full bg-black/60 border border-[#E5C887]/80 backdrop-blur-md flex items-center justify-center text-[#E5C887] group-hover:scale-110 group-hover:bg-[#E5C887] group-hover:text-[#08090B] transition-all duration-300 shadow-2xl">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10">
                <h3 className="font-serif text-base sm:text-lg text-[#FAF8F5] group-hover:text-[#E5C887] transition-colors mb-1 font-normal">
                  {post.title}
                </h3>
                <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed mb-3 line-clamp-2">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#E5C887] pt-2 border-t border-white/10 font-medium">
                  <span>WATCH ON INSTAGRAM</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
