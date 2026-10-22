import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO } from '../data/eventData';

export default function InteractivePlannerModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState('Wedding Events');
  const [selectedGuests, setSelectedGuests] = useState('100 - 300 Guests');
  const [selectedPackage, setSelectedPackage] = useState('Golden Package (925/-)');
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '', date: '', location: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const types = [
    { title: 'Wedding Events', desc: 'Full planning and coordination for traditional, theme & destination weddings.' },
    { title: 'Destination Events', desc: 'Exquisite experiences at beautiful locations worldwide.' },
    { title: 'Engagement Ceremonies', desc: 'Memorable moments that celebrate your love.' },
    { title: 'Corporate Events', desc: 'Professional and impactful events for businesses.' },
    { title: 'Stage and Entrance Decor', desc: 'Elegant stage & entrance setups that leave a lasting impression.' },
    { title: 'Complete Event Planning', desc: 'From concept to celebration — stress-free end-to-end execution.' }
  ];

  const guestRanges = [
    'Intimate (< 100 Guests)',
    'Medium (100 - 300 Guests)',
    'Grand (300 - 800 Guests)',
    'Mega Celebration (800+ Guests)'
  ];

  const packageOptions = [
    { title: 'Silver Package (435/-)', desc: 'Welcome drinks, biriyani/mandhi, basic stage decor, sound, and dining setup.' },
    { title: 'Golden Package (925/-)', desc: 'Live juice counters, multiple bread varieties, photography, makeover, muttipatt & ceramic crockery.' },
    { title: 'Platinum Package (1450/-)', desc: 'Gourmet live stations, dessert lounge, premium stage/vehicle decor, pyro, photo & video team.' },
    { title: 'Custom Event Plan', desc: 'Tailored specifically to your guest count, venue, and bespoke culinary wishes.' }
  ];

  const handleFinish = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#C5A059', '#E5C887', '#FAF6EE']
    });

    const msg = `*NEW EVENT PLANNER BLUEPRINT — COLLAB EVENTS*
----------------------------------
*Name:* ${contactInfo.name}
*Phone:* ${contactInfo.phone}
${contactInfo.email ? `*Email:* ${contactInfo.email}\n` : ''}*Event Category:* ${selectedType}
*Expected Guests:* ${selectedGuests}
*Selected Package:* ${selectedPackage}
*Preferred Date:* ${contactInfo.date || 'TBD'}
*Location:* ${contactInfo.location || 'Kannur / Kerala'}
----------------------------------
Please confirm availability and share the quotation. Thank you!`;

    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full bg-[#0E1015] border border-white/20 rounded-2xl overflow-hidden p-6 sm:p-10 shadow-2xl my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#FAF8F5]/60 hover:text-[#E5C887] rounded-full hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-4 h-4 text-[#E5C887]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E5C887] font-semibold">
              EVENT ARCHITECT
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF8F5] mb-2 font-light">
            Plan Your Event Blueprint
          </h3>
          <p className="text-xs text-[#A1A1AA] mb-8 font-light">
            Step {step} of 4 — Tell us about your vision to craft your personalized event quotation.
          </p>

          {/* Step 1: Select Type */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase font-mono tracking-[0.18em] text-[#FAF8F5]/90 mb-1">
                Select Event Category:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {types.map((t) => (
                  <div
                    key={t.title}
                    onClick={() => setSelectedType(t.title)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedType === t.title
                        ? 'border-[#E5C887] bg-[#E5C887]/15 text-[#FAF8F5]'
                        : 'border-white/10 bg-[#13151D] hover:border-white/30 text-[#FAF8F5]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif text-base text-[#FAF8F5]">{t.title}</span>
                      {selectedType === t.title && <Check className="w-4 h-4 text-[#E5C887]" />}
                    </div>
                    <p className="text-xs text-[#A1A1AA] font-light">{t.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-7 py-3 text-xs uppercase tracking-[0.16em] text-[#08090B] bg-[#E5C887] font-bold rounded-full hover:bg-[#FAF6EE] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>NEXT: GUEST SCALE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Guest Scale */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase font-mono tracking-[0.18em] text-[#FAF8F5]/90 mb-1">
                Select Estimated Guest Scale:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guestRanges.map((g) => (
                  <div
                    key={g}
                    onClick={() => setSelectedGuests(g)}
                    className={`p-5 rounded-xl border cursor-pointer transition-all ${
                      selectedGuests === g
                        ? 'border-[#E5C887] bg-[#E5C887]/15 text-[#FAF8F5]'
                        : 'border-white/10 bg-[#13151D] hover:border-white/30 text-[#FAF8F5]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg text-[#FAF8F5]">{g}</span>
                      {selectedGuests === g && <Check className="w-4 h-4 text-[#E5C887]" />}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-[#FAF8F5]/70 hover:text-[#FAF8F5] inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>BACK</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-7 py-3 text-xs uppercase tracking-[0.16em] text-[#08090B] bg-[#E5C887] font-bold rounded-full hover:bg-[#FAF6EE] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>NEXT: PACKAGE TIER</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Select Package Option */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase font-mono tracking-[0.18em] text-[#FAF8F5]/90 mb-1">
                Choose Preferred Package:
              </span>
              <div className="grid grid-cols-1 gap-3">
                {packageOptions.map((pkg) => (
                  <div
                    key={pkg.title}
                    onClick={() => setSelectedPackage(pkg.title)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedPackage === pkg.title
                        ? 'border-[#E5C887] bg-[#E5C887]/15 text-[#FAF8F5]'
                        : 'border-white/10 bg-[#13151D] hover:border-white/30 text-[#FAF8F5]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif text-lg text-[#FAF8F5]">{pkg.title}</span>
                      {selectedPackage === pkg.title && <Check className="w-4 h-4 text-[#E5C887]" />}
                    </div>
                    <p className="text-xs text-[#A1A1AA] font-light">{pkg.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-[#FAF8F5]/70 hover:text-[#FAF8F5] inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>BACK</span>
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-7 py-3 text-xs uppercase tracking-[0.16em] text-[#08090B] bg-[#E5C887] font-bold rounded-full hover:bg-[#FAF6EE] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>FINAL STEP: CONTACT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact & WhatsApp Transmission */}
          {step === 4 && (
            <div>
              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366] mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] mb-2">
                    Blueprint Ready on WhatsApp
                  </h4>
                  <p className="text-xs text-[#FAF8F5]/80 font-light max-w-md mb-6 leading-relaxed">
                    Your selections for {selectedType} with {selectedPackage} have been formatted for our concierge in Kannur.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 text-xs uppercase tracking-[0.16em] text-[#08090B] bg-[#E5C887] font-bold rounded-full cursor-pointer"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFinish} className="flex flex-col gap-4">
                  <div className="p-3.5 bg-[#141722] border border-[#E5C887]/30 rounded-xl mb-1 text-xs text-[#FAF8F5]">
                    <span className="text-[10px] uppercase font-mono text-[#E5C887] block mb-0.5">
                      YOUR SELECTIONS
                    </span>
                    <strong className="text-white">{selectedType}</strong> • {selectedGuests} • {selectedPackage}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.16em] text-[#A1A1AA] font-mono block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anjali Nair"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="w-full bg-[#13151D] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-[0.16em] text-[#A1A1AA] font-mono block mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="w-full bg-[#13151D] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.16em] text-[#A1A1AA] font-mono block mb-1">
                        Preferred Event Date
                      </label>
                      <input
                        type="date"
                        value={contactInfo.date}
                        onChange={(e) => setContactInfo({ ...contactInfo, date: e.target.value })}
                        className="w-full bg-[#13151D] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-[0.16em] text-[#A1A1AA] font-mono block mb-1">
                        Event Location / Venue
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kannur, Thalassery, or Destination"
                        value={contactInfo.location}
                        onChange={(e) => setContactInfo({ ...contactInfo, location: e.target.value })}
                        className="w-full bg-[#13151D] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-[#FAF8F5]/70 hover:text-[#FAF8F5] inline-flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>BACK</span>
                    </button>

                    <button
                      type="submit"
                      className="px-7 py-3 text-xs uppercase tracking-[0.16em] text-[#08090B] bg-[#E5C887] font-bold rounded-full hover:bg-[#FAF6EE] transition-colors inline-flex items-center gap-2 shadow-lg cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#08090B]" />
                      <span>SEND VIA WHATSAPP</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
