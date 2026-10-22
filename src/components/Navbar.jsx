import React, { useState, useEffect } from 'react';
import {
  Calendar,
  ArrowRight,
  Menu,
  X,
  Home,
  User,
  Settings,
  Package,
  Utensils,
  Phone,
} from 'lucide-react';
import { BRAND_INFO } from '../data/eventData';

// Authentic WhatsApp SVG Icon with brand green
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Navbar({ onOpenPlanner }) {
  const [activeSection, setActiveSection] = useState('HOME');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean navigation links with icons for mobile flyout menu
  const navLinks = [
    { name: 'HOME', href: '#', icon: Home },
    { name: 'ABOUT', href: '#about', icon: User },
    { name: 'SERVICES', href: '#services', icon: Settings },
    { name: 'PACKAGES', href: '#packages', icon: Package },
    { name: 'CATERING', href: '#catering', icon: Utensils },
    { name: 'CONTACT', href: '#contact', icon: Phone },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = [
        { id: 'contact', name: 'CONTACT' },
        { id: 'catering', name: 'CATERING' },
        { id: 'packages', name: 'PACKAGES' },
        { id: 'services', name: 'SERVICES' },
        { id: 'about', name: 'ABOUT' },
      ];

      let current = 'HOME';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && scrollPos >= el.offsetTop) {
          current = section.name;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-[15px] sm:top-4 lg:top-5 left-0 right-0 z-40 pointer-events-none transition-all duration-300 w-full px-3 sm:px-5 lg:px-6">
        <div className="w-full max-w-[1140px] mx-auto pointer-events-auto">
          {/* Balanced Pill-Shaped Glassmorphic Navbar Container */}
          <div className="relative rounded-full bg-[rgba(15,12,10,0.88)] backdrop-blur-xl border border-[#C5A059]/35 shadow-[0_8px_32px_rgba(0,0,0,0.7)] px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2 lg:py-2.5 min-h-[58px] sm:min-h-[64px] lg:min-h-[74px] flex items-center justify-between transition-all duration-300">
            
            {/* 1. Brand Logo & Typography — Left Side */}
            <a
              href="#"
              onClick={() => setActiveSection('HOME')}
              className="flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 group shrink-0"
            >
              {/* Circular Gold-Outlined Frame */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-[48px] lg:h-[48px] rounded-full border border-[#C5A059]/65 p-[2px] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(197,160,89,0.2)] group-hover:border-[#F4D28A] transition-all duration-300 bg-[#0F0C0A]">
                <img
                  src="/collab_logo.jpg"
                  alt="COLLAB Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center">
                <span className="font-serif text-[15px] sm:text-base lg:text-[18.5px] font-bold tracking-[0.18em] lg:tracking-[0.2em] text-[#FAF8F5] group-hover:text-[#F4D28A] transition-colors leading-tight uppercase">
                  {BRAND_INFO.brand}
                </span>
                <span className="text-[7px] sm:text-[8px] lg:text-[8.5px] uppercase tracking-[0.2em] lg:tracking-[0.22em] text-[#E5C887] font-sans font-semibold mt-0.5 leading-none">
                  EVENT &amp; WEDDING PLANNER
                </span>
              </div>
            </a>

            {/* 2. Navigation Links — Center (Desktop) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.name)}
                    className={`text-[13px] xl:text-[13.5px] uppercase tracking-[0.16em] font-medium transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[#F4D28A] font-semibold drop-shadow-[0_0_8px_rgba(244,210,138,0.3)]'
                        : 'text-[#D5D0C9] hover:text-[#F4D28A]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* 3. Right-Side Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-2 lg:gap-2.5">
              {/* WhatsApp Button — Circular */}
              <a
                href={BRAND_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] rounded-full bg-[#12100D]/90 border border-[#C5A059]/35 hover:border-[#25D366] text-[#25D366] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(37,211,102,0.35)] hover:scale-105 active:scale-95 group shrink-0"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp (+91 81570 69016)"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
              </a>

              {/* Thin Vertical Gold Divider */}
              <div className="h-6 lg:h-7 w-[1px] bg-[#C5A059]/30 mx-1 lg:mx-1.5 shrink-0" />

              {/* Primary CTA Button — Pill with Gold Gradient */}
              <button
                onClick={onOpenPlanner}
                className="group relative inline-flex items-center justify-center gap-2 h-9 sm:h-10 lg:h-[42px] px-4.5 sm:px-5 lg:px-5.5 rounded-full bg-gradient-to-r from-[#F4D28A] via-[#E2BC6A] to-[#C49A4A] text-[#17130C] font-bold text-[12px] sm:text-[12.5px] lg:text-[13px] uppercase tracking-wider shadow-md hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 cursor-pointer shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#17130C] stroke-[2.2]" />
                <span className="font-sans font-bold">PLAN EVENT</span>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#17130C] stroke-[2.2] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 4. Mobile Right Controls: WhatsApp, Thin Divider, and Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-1.5 shrink-0">
              {/* WhatsApp Button */}
              <a
                href={BRAND_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#12100D]/90 border border-[#C5A059]/40 text-[#25D366] flex items-center justify-center shadow-sm active:scale-95 shrink-0"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </a>

              {/* Thin Vertical Gold Divider */}
              <div className="h-5 w-[1px] bg-[#C5A059]/40 mx-0.5 shrink-0" />

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 rounded-full bg-[#12100D]/90 border border-[#C5A059]/40 text-[#E5C887] hover:bg-[#E5C887] hover:text-[#0F0C0A] flex items-center justify-center transition-all active:scale-95 cursor-pointer shrink-0"
                aria-label="Toggle Navigation Menu"
              >
                <Menu className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 5. Mobile Flyout Menu (Exact Match to Reference Image) */}
      {mobileMenuOpen && (
        <>
          {/* Subtle Backdrop Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Floating Dark Glassmorphic Menu Card on Right Side */}
          <div className="fixed top-[18px] right-3 sm:top-4 sm:right-4 z-50 w-[82%] max-w-[290px] rounded-[26px] bg-[rgba(14,12,10,0.96)] backdrop-blur-2xl border border-[#C5A059]/40 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_25px_rgba(197,160,89,0.12)] p-4 sm:p-5 flex flex-col gap-4 md:hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Menu Header: Logo + Brand + Close Button */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 rounded-full border border-[#C5A059]/70 p-[1.5px] bg-[#0F0C0A] flex items-center justify-center shrink-0">
                  <img
                    src="/collab_logo.jpg"
                    alt="COLLAB"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-serif text-[12px] font-bold tracking-[0.16em] text-[#FAF8F5] uppercase leading-none truncate">
                    COLLAB
                  </span>
                  <span className="text-[5.5px] uppercase tracking-[0.18em] text-[#E5C887] font-sans font-semibold mt-0.5 leading-none whitespace-nowrap">
                    EVENT &amp; WEDDING PLANNER
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#FAF8F5]/80 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close Menu"
              >
                <X className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>

            {/* Menu Navigation Items with Icons */}
            <nav className="flex flex-col gap-3 py-1">
              {navLinks.map((link) => {
                const IconComp = link.icon;
                const isActive = activeSection === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 text-[12.5px] font-bold uppercase tracking-[0.14em] transition-colors py-1 ${
                      isActive
                        ? 'text-[#F4D28A]'
                        : 'text-[#FAF8F5]/90 hover:text-[#F4D28A]'
                    }`}
                  >
                    <IconComp
                      className={`w-4 h-4 stroke-[2] ${
                        isActive ? 'text-[#F4D28A]' : 'text-[#FAF8F5]/80'
                      }`}
                    />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons: PLAN EVENT & CHAT ON WHATSAPP */}
            <div className="pt-2 flex flex-col gap-2.5 border-t border-white/10">
              {/* Primary CTA: Plan Event Pill Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full py-2.5 px-3.5 rounded-full bg-gradient-to-r from-[#F4D28A] via-[#E2BC6A] to-[#C49A4A] text-[#17130C] font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:brightness-105 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#17130C] shrink-0" />
                <span>PLAN EVENT</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#17130C] shrink-0" />
              </button>

              {/* Secondary CTA: WhatsApp Pill Button */}
              <a
                href={BRAND_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3.5 rounded-full bg-[#14120F] border border-[#25D366]/40 text-[#FAF8F5] font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:border-[#25D366] active:scale-98 transition-all whitespace-nowrap"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
