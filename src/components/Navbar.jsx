import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Calendar, MessageCircle, Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/eventData';

export default function Navbar({ onOpenPlanner }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#', active: true },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'OUR WORK', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-[24px] sm:top-5 left-0 right-0 z-50 transition-all duration-500 pointer-events-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pointer-events-auto">
        {/* Glassmorphism Luxury Floating Capsule Pill Navbar */}
        <div
          className={`transition-all duration-500 rounded-full px-4 sm:px-8 py-2 sm:py-3 flex items-center justify-between border backdrop-blur-xl ${
            scrolled
              ? 'bg-[#08090B]/85 backdrop-blur-2xl border-[#E5C887]/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)] ring-1 ring-[#E5C887]/20'
              : 'bg-[#08090B]/50 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
          }`}
        >
          {/* Official Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <img
              src="/collab_logo.jpg"
              alt="Collab Event & Wedding Planner Official Logo"
              className="h-8 sm:h-10 w-auto object-contain rounded-full border border-[#E5C887]/60 group-hover:border-[#E5C887] transition-all shadow-md shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-lg tracking-[0.16em] sm:tracking-[0.2em] font-semibold text-[#FAF8F5] group-hover:text-[#E5C887] transition-colors leading-none">
                COLLAB
              </span>
              <span className="hidden sm:block text-[8px] uppercase tracking-[0.25em] text-[#E5C887] font-mono mt-0.5 font-bold">
                EVENT &amp; WEDDING PLANNER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative py-1 ${
                  link.active ? 'text-[#E5C887] font-bold' : 'text-[#FAF8F5]/85 hover:text-[#E5C887]'
                }`}
              >
                {link.name}
                {link.active ? (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E5C887] shadow-[0_0_8px_#E5C887]"></span>
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5C887] hover:w-full transition-all duration-300"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenPlanner}
              className="group relative inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#08090B] bg-gradient-to-r from-[#D5B069] via-[#C5A059] to-[#B59049] hover:from-[#E5C887] hover:to-[#C5A059] transition-all duration-300 rounded-full shadow-md shadow-[#C5A059]/25 hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#08090B]" />
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#08090B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Top-Right Actions: Icon-Only WhatsApp + Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Icon-Only WhatsApp Badge */}
            <a
              href={BRAND_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/60 text-[#25D366] shadow-md hover:bg-[#25D366] hover:text-white transition-all active:scale-95 backdrop-blur-md"
              aria-label="WhatsApp Concierge"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
            </a>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 text-[#E5C887] hover:bg-[#E5C887] hover:text-[#08090B] transition-all active:scale-95 backdrop-blur-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 stroke-[2.5]" /> : <Menu className="w-4 h-4 stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Glassmorphism Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-2xl bg-[#08090B]/95 backdrop-blur-2xl border border-[#E5C887]/40 shadow-[0_12px_40px_rgba(0,0,0,0.8)] flex flex-col gap-4 animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="flex flex-col divide-y divide-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 text-xs uppercase tracking-[0.2em] font-mono transition-colors flex items-center justify-between ${
                    link.active ? 'text-[#E5C887] font-bold' : 'text-[#FAF8F5]/85 hover:text-[#E5C887]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E5C887]/60" />
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#08090B] bg-gradient-to-r from-[#D5B069] via-[#C5A059] to-[#B59049] rounded-full shadow-lg text-center flex items-center justify-center gap-2 mt-1"
            >
              <Calendar className="w-3.5 h-3.5 text-[#08090B]" />
              <span>PLAN YOUR EVENT</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
