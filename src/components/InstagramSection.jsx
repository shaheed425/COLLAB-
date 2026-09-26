import React from 'react';
import { motion } from 'framer-motion';
import { Film, Play, Heart, Eye, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data/eventData';

export default function InstagramSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#090A0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Film className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#C5A059] uppercase">
                INSTAGRAM REELS &amp; LIVE HIGHLIGHTS
              </span>
              <div className="h-[1px] w-12 bg-[#C5A059]"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] leading-[1.08] font-light">
              Follow The Journey. <br />
              <span className="italic font-serif gold-gradient-text font-normal">
                {BRAND_INFO.handle}
              </span>
            </h2>
          </div>

          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#08090B] bg-[#C5A059] hover:bg-[#E5C887] transition-all duration-300 rounded-full shadow-xl shadow-[#C5A059]/15"
          >
            <span>VIEW INSTAGRAM PROFILE</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </div>

        {/* 4-Card Instagram Reel Feed Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/80 transition-all duration-500 min-h-[250px] sm:min-h-[360px] flex flex-col justify-between p-4 sm:p-5 shadow-2xl"
            >
              {/* Generated Luxury Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/50 to-black/30 group-hover:via-[#08090B]/70 transition-all duration-500"></div>
              </div>

              {/* Top Reel Badge & External Arrow */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.18em] text-[#C5A059] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/10">
                  <Film className="w-3 h-3" />
                  <span>REEL • {BRAND_INFO.handle}</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#C5A059] group-hover:text-[#08090B] transition-all">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 flex justify-center items-center my-auto">
                <div className="w-12 h-12 rounded-full bg-black/50 border border-[#C5A059]/80 backdrop-blur-md flex items-center justify-center text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-[#08090B] transition-all duration-300 shadow-2xl">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Details & Engagement Stats */}
              <div className="relative z-10">
                <h3 className="font-serif text-base text-[#FAF8F5] group-hover:text-[#C5A059] transition-colors mb-1.5 font-normal">
                  {post.title}
                </h3>
                <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed mb-3 line-clamp-2">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA] pt-2.5 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-white/90">
                      <Heart className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/30" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-white/70">
                      <Eye className="w-3 h-3 text-[#C5A059]" />
                      {post.views}
                    </span>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#C5A059] font-medium group-hover:underline">
                    WATCH REEL →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

