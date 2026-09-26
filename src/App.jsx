import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import FeaturedPortfolio from './components/FeaturedPortfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import InstagramSection from './components/InstagramSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StoryModal from './components/StoryModal';
import InteractivePlannerModal from './components/InteractivePlannerModal';
import MobileBottomDock from './components/MobileBottomDock';

export default function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090B] text-[#FAF8F5] selection:bg-[#C5A059] selection:text-[#08090B]">
      {/* Navigation */}
      <Navbar onOpenPlanner={() => setPlannerOpen(true)} />

      {/* Main Sections */}
      <main className="pb-24 md:pb-0">
        <Hero
          onOpenPlanner={() => setPlannerOpen(true)}
          onOpenStory={() => setStoryOpen(true)}
        />
        <Introduction />
        <Services onOpenPlanner={() => setPlannerOpen(true)} />
        <FeaturedPortfolio onOpenPlanner={() => setPlannerOpen(true)} />
        <WhyChooseUs onOpenPlanner={() => setPlannerOpen(true)} />
        <Process />
        <Testimonials onOpenPlanner={() => setPlannerOpen(true)} />
        <InstagramSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenPlanner={() => setPlannerOpen(true)} />

      {/* Mobile Floating iPhone Dock Bar */}
      <MobileBottomDock onOpenPlanner={() => setPlannerOpen(true)} />

      {/* Modals & Overlays */}
      <StoryModal
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
        onOpenPlanner={() => setPlannerOpen(true)}
      />
      <InteractivePlannerModal
        isOpen={plannerOpen}
        onClose={() => setPlannerOpen(false)}
      />
    </div>
  );
}
