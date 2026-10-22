import React, { useState } from 'react';
import { ArrowUpRight, Camera, Check, Phone, MapPin, MessageCircle } from 'lucide-react';
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
    <footer className="bg-[#050608] border-t border-white/10 pt-14 sm:pt-20 pb-12 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#" className="flex items-center gap-3 mb-4 group">
                <img
                  src="/collab_logo.jpg"
                  alt="Collab Events & Wedding Planner"
                  className="h-10 sm:h-12 w-auto object-contain rounded-full border border-[#E5C887]/60 group-hover:border-[#E5C887] transition-all shadow-md shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-semibold text-[#FAF8F5]">
                    {BRAND_INFO.brand}
                  </span>
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#E5C887] font-mono">
                    {BRAND_INFO.descriptor}
                  </span>
                </div>
              </a>

              <p className="text-xs text-[#FAF8F5]/75 font-light leading-relaxed mb-4 max-w-sm">
                “At Collab Events &amp; Weddings, we believe every celebration tells a story. Our passion is to turn your dreams into timeless memories with creativity, precision and perfection.”
              </p>

              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E5C887] block mb-5 font-semibold">
                {BRAND_INFO.supportingLine}
              </span>
            </div>

            {/* Newsletter */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E5C887] block mb-2 font-semibold">
                STAY CONNECTED
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#E5C887] font-mono bg-[#E5C887]/10 p-2.5 rounded-lg border border-[#E5C887]/30">
                  <Check className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-[#141722] border border-white/15 focus:border-[#E5C887] px-3.5 py-2 text-xs text-[#FAF8F5] rounded-lg focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-[10.5px] uppercase font-mono bg-[#E5C887] text-[#08090B] font-bold rounded-lg hover:bg-[#FAF6EE] transition-colors shrink-0 cursor-pointer"
                  >
                    JOIN
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col py-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E5C887] block mb-4 font-semibold">
              NAVIGATION
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-[#FAF8F5]/80 font-light">
              <li>
                <a href="#" className="hover:text-[#E5C887] transition-colors block py-0.5">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E5C887] transition-colors block py-0.5">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E5C887] transition-colors block py-0.5">Services</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#E5C887] transition-colors block py-0.5">Packages</a>
              </li>
              <li>
                <a href="#catering" className="hover:text-[#E5C887] transition-colors block py-0.5">Catering Menu</a>
              </li>
              <li>
                <a href="#extra-services" className="hover:text-[#E5C887] transition-colors block py-0.5">Extra Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#E5C887] transition-colors block py-0.5">Our Work</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E5C887] transition-colors block py-0.5">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Packages & Services */}
          <div className="lg:col-span-3 flex flex-col py-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E5C887] block mb-4 font-semibold">
              FEATURED PACKAGES
            </span>
            <ul className="flex flex-col gap-3 text-xs text-[#FAF8F5]/80 font-light mb-6">
              <li>
                <a href="#packages" className="hover:text-[#E5C887] transition-colors block">
                  <span className="text-[#E5C887] font-mono font-medium block">Silver Package</span>
                  <span className="text-white/60 text-[11px]">Starting from 435/-</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#E5C887] transition-colors block">
                  <span className="text-[#E5C887] font-mono font-medium block">Golden Package</span>
                  <span className="text-white/60 text-[11px]">Starting from 925/-</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#E5C887] transition-colors block">
                  <span className="text-[#E5C887] font-mono font-medium block">Platinum Package</span>
                  <span className="text-white/60 text-[11px]">Starting from 1450/-</span>
                </a>
              </li>
            </ul>

            <button
              onClick={onOpenPlanner}
              className="text-[11px] font-mono uppercase tracking-wider text-[#E5C887] hover:underline text-left"
            >
              Request Custom Quotation →
            </button>
          </div>

          {/* Column 4: Verified Direct Concierge */}
          <div className="lg:col-span-3 p-5 sm:p-6 rounded-2xl bg-[#0B0D12] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E5C887] block mb-4 font-semibold">
                DIRECT CONCIERGE
              </span>
              
              <div className="flex flex-col gap-3 text-xs text-[#FAF8F5]/85 font-light mb-5">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-2.5 hover:text-[#E5C887] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E5C887] shrink-0" />
                  <span className="font-mono">{BRAND_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={BRAND_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="font-mono">{BRAND_INFO.whatsappDisplay}</span>
                </a>

                <div className="flex items-center gap-2.5 text-[#FAF8F5]/70">
                  <MapPin className="w-4 h-4 text-[#E5C887] shrink-0" />
                  <span>{BRAND_INFO.location}, {BRAND_INFO.state}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[11px] font-mono text-[#E5C887] hover:underline"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>@{BRAND_INFO.instagramHandle}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={BRAND_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 transition-all text-[11px] font-mono font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F5]/60 gap-4">
          <p>© 2026 {BRAND_INFO.brand} {BRAND_INFO.descriptor}. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Kannur, Kerala</span>
            <span>•</span>
            <a href="#contact" className="hover:text-[#E5C887] transition-colors">Plan Your Event</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
