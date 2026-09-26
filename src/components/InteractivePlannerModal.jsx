import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, Calendar, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractivePlannerModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState('Luxury Destination Wedding');
  const [selectedGuests, setSelectedGuests] = useState('100 - 300 Guests');
  const [selectedVibe, setSelectedVibe] = useState('Candlelit Heritage & Floral Architecture');
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFinish = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#C5A059', '#E5C887', '#FAF6EE']
    });
  };

  const types = [
    { title: 'Luxury Destination Wedding', desc: 'Private estates, multi-day celebrations & floral sanctuaries.' },
    { title: 'Corporate Gala & Summit', desc: 'High-impact keynotes, international brand galas & VIP summits.' },
    { title: 'Private Milestone Soirée', desc: 'Intimate anniversaries, birthday galas & cliffside receptions.' },
    { title: 'Stage & Concert Production', desc: 'Audiovisual engineering, kinetic lights & pyrotechnics.' }
  ];

  const guestRanges = [
    'Intimate (< 80 Guests)',
    'Medium (100 - 300 Guests)',
    'Grand (300 - 800 Guests)',
    'Mega Stadium (800+ Guests)'
  ];

  const vibes = [
    'Candlelit Heritage & Floral Architecture',
    'Haute Couture Minimalist & Architectural',
    'High-Tech Futuristic & Kinetic Light',
    'Opulent Royal Palace & Classical Symphony'
  ];

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
          className="relative max-w-3xl w-full bg-[#0E1015] border border-white/20 rounded-sm overflow-hidden p-6 sm:p-10 shadow-2xl my-auto"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#FAF8F5]/60 hover:text-[#C5A059] rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059]">
              INTERACTIVE EVENT ARCHITECT
            </span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] mb-2 font-light">
            Design Your Event Concept
          </h3>
          <p className="text-xs text-[#A1A1AA] mb-8 font-light">
            Step {step} of 4 — Tell us your vision to build your tailored production blueprint.
          </p>

          {/* Step 1: Select Type */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase font-mono tracking-[0.18em] text-[#FAF8F5]/90 mb-1">
                Select Event Category:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {types.map((t) => (
                  <div
                    key={t.title}
                    onClick={() => setSelectedType(t.title)}
                    className={`p-5 rounded-sm border cursor-pointer transition-all ${
                      selectedType === t.title
                        ? 'border-[#C5A059] bg-[#C5A059]/10 text-[#FAF8F5]'
                        : 'border-white/10 bg-[#13151D] hover:border-white/30 text-[#FAF8F5]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg text-[#FAF8F5]">{t.title}</span>
                      {selectedType === t.title && <Check className="w-4 h-4 text-[#C5A059]" />}
                    </div>
                    <p className="text-xs text-[#A1A1AA] font-light">{t.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-3 text-xs uppercase tracking-[0.18em] text-[#08090B] bg-[#C5A059] font-semibold rounded-sm hover:bg-[#E5C887] transition-colors inline-flex items-center gap-2"
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
                Select Expected Guest Count:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {guestRanges.map((g) => (
                  <div
                    key={g}
                    onClick={() => setSelectedGuests(g)}
                    className={`p-5 rounded-sm border cursor-pointer transition-all ${
                      selectedGuests === g
                        ? 'border-[#C5A059] bg-[#C5A059]/10 text-[#FAF8F5]'
                        : 'border-white/10 bg-[#13151D] hover:border-white/30 text-[#FAF8F5]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg text-[#FAF8F5]">{g}</span>
                      {selectedGuests === g && <Check className="w-4 h-4 text-[#C5A059]" />}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#FAF8F5]/70 hover:text-[#FAF8F5] inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>BACK</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-8 py-3 text-xs uppercase tracking-[0.18em] text-[#08090B] bg-[#C5A059] font-semibold rounded-sm hover:bg-[#E5C887] transition-colors inline-flex items-center gap-2"
                >
                  <span>NEXT: ATMOSPHERE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Select Atmosphere/Vibe */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase font-mono tracking-[0.18em] text-[#FAF8F5]/90 mb-1">
                Select Aesthetic Vibe &amp; Atmosphere:
              </span>
              <div className="grid grid-cols-1 gap-3">
                {vibes.map((v) => (
                  <div
                    key={v}
                    onClick={() => setSelectedVibe(v)}
                    className={`p-4 rounded-sm border cursor-pointer transition-all ${
                      selectedVibe === v
                        ? 'border-[#C5A059] bg-[#C5A059]/10 text-[#FAF8F5]'
                        : 'border-white/10 bg-[#13151D] hover:border-white/30 text-[#FAF8F5]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-base text-[#FAF8F5]">{v}</span>
                      {selectedVibe === v && <Check className="w-4 h-4 text-[#C5A059]" />}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#FAF8F5]/70 hover:text-[#FAF8F5] inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>BACK</span>
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-8 py-3 text-xs uppercase tracking-[0.18em] text-[#08090B] bg-[#C5A059] font-semibold rounded-sm hover:bg-[#E5C887] transition-colors inline-flex items-center gap-2"
                >
                  <span>FINAL STEP: CONTACT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation / Contact Details */}
          {step === 4 && (
            <div>
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <Sparkles className="w-12 h-12 text-[#C5A059] mb-4 animate-bounce" />
                  <h4 className="font-serif text-3xl text-[#FAF8F5] mb-3">
                    Blueprint Successfully Submitted
                  </h4>
                  <p className="text-xs text-[#FAF8F5]/80 font-light max-w-md mb-6 leading-relaxed">
                    We have received your concept specifications for {selectedType} ({selectedGuests}). An Executive Creative Director will reach out shortly.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 text-xs uppercase tracking-[0.18em] text-[#08090B] bg-[#C5A059] font-semibold rounded-sm"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFinish} className="flex flex-col gap-5">
                  <div className="p-4 bg-[#141722] border border-[#C5A059]/30 rounded-sm mb-2">
                    <span className="text-[10px] uppercase font-mono text-[#C5A059] block mb-1">
                      YOUR DESIGN BLUEPRINT SUMMARY
                    </span>
                    <p className="text-xs text-[#FAF8F5]">
                      <strong className="text-white">{selectedType}</strong> • {selectedGuests} • {selectedVibe}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-[0.18em] text-[#A1A1AA] font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Vivienne Montgomery"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="bg-[#13151D] border border-white/15 focus:border-[#C5A059] px-4 py-3 text-sm text-[#FAF8F5] rounded-sm focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] uppercase tracking-[0.18em] text-[#A1A1AA] font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vivienne@domain.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="bg-[#13151D] border border-white/15 focus:border-[#C5A059] px-4 py-3 text-sm text-[#FAF8F5] rounded-sm focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] uppercase tracking-[0.18em] text-[#A1A1AA] font-mono">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+33 6 12 34 56 78"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="bg-[#13151D] border border-white/15 focus:border-[#C5A059] px-4 py-3 text-sm text-[#FAF8F5] rounded-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#FAF8F5]/70 hover:text-[#FAF8F5] inline-flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>BACK</span>
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 text-xs uppercase tracking-[0.18em] text-[#08090B] bg-[#C5A059] font-semibold rounded-sm hover:bg-[#E5C887] transition-colors"
                    >
                      TRANSMIT BLUEPRINT →
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
