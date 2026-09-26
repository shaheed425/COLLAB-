import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Briefcase, Award, PhoneCall } from 'lucide-react';

export default function MobileBottomDock() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const servicesEl = document.getElementById('services');
      const portfolioEl = document.getElementById('portfolio');
      const whyUsEl = document.getElementById('why-us');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPos >= contactEl.offsetTop - 300) {
        setActiveTab('contact');
      } else if (whyUsEl && scrollPos >= whyUsEl.offsetTop - 300) {
        setActiveTab('why-us');
      } else if (portfolioEl && scrollPos >= portfolioEl.offsetTop - 300) {
        setActiveTab('portfolio');
      } else if (servicesEl && scrollPos >= servicesEl.offsetTop - 300) {
        setActiveTab('services');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly 5 Navigation Items for clean iPhone Dock
  const navItems = [
    { id: 'home', label: 'HOME', icon: Home, href: '#' },
    { id: 'services', label: 'SERVICES', icon: Sparkles, href: '#services' },
    { id: 'portfolio', label: 'WORK', icon: Briefcase, href: '#portfolio' },
    { id: 'why-us', label: 'WHY US', icon: Award, href: '#why-us' },
    { id: 'contact', label: 'CONTACT', icon: PhoneCall, href: '#contact' },
  ];

  return (
    <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 md:hidden w-[88%] max-w-xs pointer-events-auto">
      {/* Premium Glassmorphism iPhone Dock Container - 5 Items */}
      <div className="relative bg-[#08090B]/45 backdrop-blur-xl border border-white/25 px-3 py-1.5 rounded-full flex items-center justify-around shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)] ring-1 ring-[#E5C887]/30">
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
                  ? 'bg-gradient-to-r from-[#D5B069] via-[#C5A059] to-[#B59049] text-[#08090B] shadow-[0_0_16px_rgba(197,160,89,0.75)] scale-105 font-bold'
                  : 'text-[#FAF8F5]/80 hover:text-[#E5C887] hover:bg-white/10'
              }`}
              aria-label={item.label}
            >
              <IconComp className="w-4 h-4 stroke-[2.2]" />
              <span className="text-[7px] font-mono tracking-tighter uppercase font-bold mt-0.5 leading-none">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
