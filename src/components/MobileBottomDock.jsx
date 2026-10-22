import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Package, Utensils, PhoneCall } from 'lucide-react';

export default function MobileBottomDock() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const contactEl = document.getElementById('contact');
      const cateringEl = document.getElementById('catering');
      const packagesEl = document.getElementById('packages');
      const servicesEl = document.getElementById('services');

      if (contactEl && scrollPos >= contactEl.offsetTop - 300) {
        setActiveTab('contact');
      } else if (cateringEl && scrollPos >= cateringEl.offsetTop - 300) {
        setActiveTab('catering');
      } else if (packagesEl && scrollPos >= packagesEl.offsetTop - 300) {
        setActiveTab('packages');
      } else if (servicesEl && scrollPos >= servicesEl.offsetTop - 300) {
        setActiveTab('services');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home, href: '#' },
    { id: 'services', label: 'SERVICES', icon: Sparkles, href: '#services' },
    { id: 'packages', label: 'PACKAGES', icon: Package, href: '#packages' },
    { id: 'catering', label: 'CATERING', icon: Utensils, href: '#catering' },
    { id: 'contact', label: 'CONTACT', icon: PhoneCall, href: '#contact' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-xs pointer-events-auto">
      {/* Luxury Capsule Mobile Dock */}
      <div className="relative bg-[#08090B]/90 backdrop-blur-2xl border border-white/20 px-3 py-1.5 rounded-full flex items-center justify-around shadow-[0_12px_40px_rgba(0,0,0,0.8)] ring-1 ring-[#E5C887]/30">
        {navItems.map((item) => {
          const IconComp = item.icon;
          const isActive = activeTab === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-[#D5B069] via-[#C5A059] to-[#B59049] text-[#08090B] shadow-[0_0_16px_rgba(197,160,89,0.7)] scale-105 font-bold'
                  : 'text-[#FAF8F5]/80 hover:text-[#E5C887]'
              }`}
              aria-label={item.label}
            >
              <IconComp className="w-4 h-4 stroke-[2.2]" />
              <span className="text-[7.5px] font-mono tracking-tighter uppercase font-bold mt-0.5 leading-none">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
