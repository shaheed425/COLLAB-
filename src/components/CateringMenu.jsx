import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Utensils, Flame, Salad, Sparkles, MessageCircle, Check } from 'lucide-react';
import { CATERING_MENU, getWhatsAppUrl } from '../data/eventData';

export default function CateringMenu() {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return Coffee;
      case 1:
        return Utensils;
      case 2:
        return Flame;
      case 3:
        return Salad;
      case 4:
      default:
        return Sparkles;
    }
  };

  const categoryImages = [
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <section id="catering" className="relative py-16 sm:py-20 bg-[#08090B] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
                CULINARY EXCELLENCE
              </span>
              <div className="h-[1px] w-8 bg-[#E5C887]"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] leading-[1.08] font-light">
              Catering <span className="italic font-serif gold-gradient-text font-normal">&amp; Feasts</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#FAF8F5]/70 max-w-sm font-light leading-relaxed">
            Authentic Kerala feasts, biriyanis, live bread counters, and sweets crafted with perfection.
          </p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-2.5 mb-8 overflow-x-auto pb-2 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
          {CATERING_MENU.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);
            const isActive = activeTab === idx;

            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#E5C887] text-[#08090B] font-bold shadow-md'
                    : 'bg-[#12151F] text-[#FAF8F5]/70 hover:text-white border border-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#08090B]' : 'text-[#E5C887]'}`} />
                <span>{cat.category.split('—')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Category Content: Image + Clean List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
          >
            {/* Left Preview Image */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 h-[220px] sm:h-[320px] shadow-xl flex flex-col justify-end p-5">
              <img
                src={categoryImages[activeTab]}
                alt={CATERING_MENU[activeTab].category}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/40 to-transparent"></div>

              <div className="relative z-10">
                <span className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#E5C887] block mb-1 font-semibold">
                  0{activeTab + 1} • {CATERING_MENU[activeTab].items.length} SELECTIONS
                </span>
                <h3 className="font-serif text-2xl text-[#FAF8F5]">
                  {CATERING_MENU[activeTab].category}
                </h3>
              </div>
            </div>

            {/* Right Clean List */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {CATERING_MENU[activeTab].items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="py-2.5 px-3.5 rounded-lg bg-[#0C0E15] border border-white/10 flex items-center gap-2.5"
                  >
                    <Check className="w-3.5 h-3.5 text-[#E5C887] shrink-0" />
                    <span className="text-xs text-[#FAF8F5]/90 font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Minimal Inquire Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#FAF8F5]/60 font-light">
                  * Inclusions depend on chosen package tier
                </span>

                <a
                  href={getWhatsAppUrl(`Hello Collab Events, I would like to inquire about catering options for ${CATERING_MENU[activeTab].category}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-[#08090B] bg-[#E5C887] hover:bg-[#FAF6EE] transition-all flex items-center gap-1.5 font-bold cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Customize on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
