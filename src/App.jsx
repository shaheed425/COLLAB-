import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Packages from './components/Packages';
import CateringMenu from './components/CateringMenu';
import ExtraServices from './components/ExtraServices';
import FeaturedPortfolio from './components/FeaturedPortfolio';
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
    <div className="min-h-screen bg-[#08090B] text-[#FAF8F5] selection:bg-[#E5C887] selection:text-[#08090B]">
      {/* Navigation */}
      <Navbar onOpenPlanner={() => setPlannerOpen(true)} />

      {/* Main Page Flow - Concise, Minimal & Luxurious */}
      <main className="pb-20 md:pb-0">
        {/* 1. Hero Section */}
        <Hero
          onOpenPlanner={() => setPlannerOpen(true)}
          onOpenStory={() => setStoryOpen(true)}
        />

        {/* 2. About Preview & Philosophy */}
        <Introduction onOpenPlanner={() => setPlannerOpen(true)} />

        {/* 3. Services Preview (4 Cards) + Explore All 12 Services */}
        <Services onOpenPlanner={() => setPlannerOpen(true)} />

        {/* 4. Packages (Silver 435/-, Golden 925/-, Platinum 1450/-) */}
        <Packages onOpenPlanner={() => setPlannerOpen(true)} />

        {/* 5. Dedicated Catering Menu */}
        <CateringMenu />

        {/* 6. Extra Services (6 Arrangements) */}
        <ExtraServices onOpenPlanner={() => setPlannerOpen(true)} />

        {/* 7. Event Photography & Decor Portfolio */}
        <FeaturedPortfolio onOpenPlanner={() => setPlannerOpen(true)} />

        {/* 8. Live Instagram Reels Showcase */}
        <InstagramSection />

        {/* 9. Contact & Event Enquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenPlanner={() => setPlannerOpen(true)} />

      {/* Mobile Floating Capsule Dock */}
      <MobileBottomDock />

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
