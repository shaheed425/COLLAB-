import React, { useState } from 'react';
import { ArrowUpRight, Globe, Camera, Check, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/eventData';

export default function Footer({ onOpenPlanner }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-12 sm:pt-20 pb-10 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        {/* Mobile View: Compact Card Grid | Desktop View: Clean Normal 12-Column Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Journal (Desktop: Normal Layout | Mobile: Card) */}
          <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-[#0B0D12] border border-white/10 shadow-xl lg:bg-transparent lg:border-none lg:p-0 lg:rounded-none lg:shadow-none flex flex-col justify-between">
            <div>
              <a href="#" className="flex items-center gap-3 mb-3 group">
                <img
                  src="/collab_logo.jpg"
                  alt="Collab Event & Wedding Planner Logo"
                  className="h-10 sm:h-12 w-auto object-contain rounded-full border border-[#C5A059]/40 group-hover:border-[#C5A059] transition-all shadow-md shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-semibold text-[#FAF8F5]">
                    COLLAB
                  </span>
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#C5A059] font-mono">
                    EVENT &amp; WEDDING PLANNER
                  </span>
                </div>
              </a>
              <p className="hidden sm:block text-xs text-[#FAF8F5]/75 font-light leading-relaxed mb-5 max-w-sm">
                Designing and producing benchmark destination weddings, corporate summits, and private celebrations across India &amp; international venues.
              </p>
            </div>

            {/* Newsletter */}
            <div className="pt-3 sm:pt-4 border-t border-white/10">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A059] block mb-2 font-semibold">
                THE COLLAB JOURNAL
              </span>
              <p className="hidden sm:block text-[11px] text-[#A1A1AA] mb-3 font-light">
                Private invitations &amp; event case studies.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#C5A059] font-mono bg-[#C5A059]/10 p-2 rounded-lg border border-[#C5A059]/30">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed to Journal</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-[#141722] border border-white/15 focus:border-[#C5A059] px-3 py-1.5 text-xs text-[#FAF8F5] rounded-lg focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 text-[11px] uppercase font-mono bg-[#C5A059] text-[#08090B] font-semibold rounded-lg hover:bg-[#E5C887] transition-colors shrink-0"
                  >
                    JOIN
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links (Standard List) */}
          <div className="lg:col-span-2 flex flex-col py-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A059] block mb-4 font-semibold">
              NAVIGATION
            </span>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs text-[#FAF8F5]/80 font-light">
              <li>
                <a href="#about" className="hover:text-[#C5A059] transition-colors block py-0.5">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A059] transition-colors block py-0.5">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#C5A059] transition-colors block py-0.5">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A059] transition-colors block py-0.5">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services (Standard List) */}
          <div className="lg:col-span-3 flex flex-col py-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A059] block mb-4 font-semibold">
              EVENT SERVICES
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#FAF8F5]/80 font-light">
              <li>
                <button onClick={onOpenPlanner} className="hover:text-[#C5A059] transition-colors text-left py-0.5">
                  • Luxury Weddings
                </button>
              </li>
              <li>
                <button onClick={onOpenPlanner} className="hover:text-[#C5A059] transition-colors text-left py-0.5">
                  • Destination Events
                </button>
              </li>
              <li>
                <button onClick={onOpenPlanner} className="hover:text-[#C5A059] transition-colors text-left py-0.5">
                  • Corporate Summits
                </button>
              </li>
              <li>
                <button onClick={onOpenPlanner} className="hover:text-[#C5A059] transition-colors text-left py-0.5">
                  • Stage &amp; Entrance Decor
                </button>
              </li>
              <li>
                <button onClick={onOpenPlanner} className="hover:text-[#C5A059] transition-colors text-left py-0.5">
                  • Sound, Light &amp; LED Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Concierge (Desktop: Normal Layout | Mobile: Card) */}
          <div className="lg:col-span-3 p-5 sm:p-6 rounded-2xl bg-[#0B0D12] border border-white/10 shadow-xl lg:bg-transparent lg:border-none lg:p-0 lg:rounded-none lg:shadow-none flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A059] block mb-4 font-semibold">
                DIRECT CONCIERGE
              </span>
              <div className="flex flex-col gap-2.5 text-xs text-[#FAF8F5]/80 font-light mb-5">
                <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="font-mono">{BRAND_INFO.phone}</span>
                </a>
                <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center gap-2 hover:text-[#C5A059] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="truncate">{BRAND_INFO.email}</span>
                </a>
                <div className="flex items-center gap-2 text-[#A1A1AA]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{BRAND_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[11px] font-mono text-[#C5A059] hover:underline"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.handle}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={BRAND_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all text-xs font-mono"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A1A1AA] gap-3">
          <p>© 2026 COLLAB EVENT HUB. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#FAF8F5] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF8F5] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
