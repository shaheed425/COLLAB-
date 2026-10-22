import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Camera,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { BRAND_INFO } from '../data/eventData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    package: 'Silver Package (435/-)',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const eventTypes = [
    'Wedding Events',
    'Destination Events',
    'Engagement Ceremony',
    'Birthday Party',
    'Corporate Event',
    'Stage & Entrance Decor',
    'Sound, Light & LED Setup',
    'Complete Event Planning',
    'Other Celebration'
  ];

  const packagesList = [
    'Silver Package — 435/-',
    'Golden Package — 925/-',
    'Platinum Package — 1450/-',
    'Custom Event Package'
  ];

  const generateMessageText = () => {
    return `*EVENT ENQUIRY — COLLAB EVENTS & WEDDINGS*
----------------------------------
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ''}*Event Type:* ${formData.eventType}
*Preferred Date:* ${formData.eventDate || 'To be decided'}
*Location / Venue:* ${formData.eventLocation || 'Kannur / Kerala'}
*Estimated Guests:* ${formData.guestCount || 'Not specified'}
*Selected Package:* ${formData.package}
${formData.requirements ? `*Additional Requirements:* ${formData.requirements}\n` : ''}----------------------------------
Please let me know your availability and customized proposal. Thank you!`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = generateMessageText();
    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMessageText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-[#08090B] border-b border-white/10">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E5C887]/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#E5C887]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C887]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#E5C887] uppercase font-semibold">
              PLAN WITH COLLAB
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.08] font-light mb-4">
            Let’s Create <br className="hidden sm:block" />
            <span className="italic font-serif gold-gradient-text font-normal">
              Your Dream Event.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-[#FAF8F5]/80 font-light leading-relaxed max-w-xl mx-auto">
            Reach out directly to our planning team in Kannur. Submit your event details below to receive a direct WhatsApp consultation and tailored quotation.
          </p>
        </div>

        {/* Contact Layout: Split Left Cards + Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Verified Business Information & Direct Actions */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Business Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0D14] border border-white/10 shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E5C887] block mb-2 font-semibold">
                OFFICIAL BUSINESS CONTACT
              </span>
              <h3 className="font-serif text-2xl text-[#FAF8F5] mb-1 font-normal">
                {BRAND_INFO.name}
              </h3>
              <p className="text-xs text-[#FAF8F5]/70 font-light leading-relaxed mb-6">
                Event &amp; Wedding Planner based in Kannur, curating memorable celebrations across South India.
              </p>

              <div className="space-y-4 text-xs font-mono">
                {/* Click-to-call Phone */}
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#121520] border border-white/10 hover:border-[#E5C887] text-[#FAF8F5] transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-black/60 border border-[#E5C887]/60 flex items-center justify-center text-[#E5C887] group-hover:bg-[#E5C887] group-hover:text-[#08090B] transition-all shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-white/50">Direct Telephone</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#E5C887]">{BRAND_INFO.phoneDisplay}</span>
                  </div>
                </a>

                {/* Direct WhatsApp Action */}
                <a
                  href={BRAND_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#121520] border border-white/10 hover:border-[#25D366] text-[#FAF8F5] transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all shrink-0">
                    <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-white/50">WhatsApp Concierge</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#25D366]">{BRAND_INFO.whatsappDisplay}</span>
                  </div>
                </a>

                {/* Instagram Action */}
                <a
                  href={BRAND_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#121520] border border-white/10 hover:border-[#E5C887] text-[#FAF8F5] transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-black/60 border border-[#E5C887]/60 flex items-center justify-center text-[#E5C887] group-hover:bg-[#E5C887] group-hover:text-[#08090B] transition-all shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-white/50">Instagram Profile</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#FAF8F5]">@{BRAND_INFO.instagramHandle}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-white/40 group-hover:text-[#E5C887]" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#121520] border border-white/10 text-[#FAF8F5]">
                  <div className="w-9 h-9 rounded-full bg-black/60 border border-[#E5C887]/60 flex items-center justify-center text-[#E5C887] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-white/50">Base Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#FAF8F5]">{BRAND_INFO.location}, {BRAND_INFO.state}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note Box */}
            <div className="p-5 rounded-2xl bg-[#0A0C12] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E5C887] block mb-1 font-semibold">
                DIRECT BOOKING WORKFLOW
              </span>
              <p className="text-xs text-[#FAF8F5]/75 font-light leading-relaxed">
                1. Submit your event specifications.<br />
                2. Our team connects directly via WhatsApp or phone.<br />
                3. We verify availability, confirm final menus, and arrange your bespoke quotation.
              </p>
            </div>
          </div>

          {/* Right Column: Full Client Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0D14] border border-white/15 shadow-2xl">
              
              <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#FAF8F5]">
                    Event Enquiry Form
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/70 font-light mt-0.5">
                    Fill in your event details for an immediate WhatsApp quotation.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#E5C887] bg-[#E5C887]/10 px-2.5 py-1 rounded-full border border-[#E5C887]/30">
                  Instant Response
                </span>
              </div>

              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366] mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] mb-2 font-light">
                    Enquiry Formatted for WhatsApp
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light max-w-md mb-6 leading-relaxed">
                    WhatsApp has opened with your pre-filled event specifications. If it didn't open automatically, you can copy the details below and message +91 8157069016.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <button
                      onClick={handleCopy}
                      className="flex-1 py-2.5 px-4 rounded-full border border-[#E5C887]/60 text-xs font-mono uppercase tracking-wider text-[#E5C887] hover:bg-[#E5C887] hover:text-[#08090B] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Enquiry Text'}</span>
                    </button>

                    <a
                      href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(generateMessageText())}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current stroke-none" />
                      <span>Re-Open WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[11px] font-mono text-white/50 hover:text-white underline"
                  >
                    ← Edit or Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 font-mono mb-1.5">
                        Full Name <span className="text-[#E5C887]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#131620] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 font-mono mb-1.5">
                        Phone Number <span className="text-[#E5C887]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#131620] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email (Optional) & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 font-mono mb-1.5">
                        Email Address <span className="text-white/40 text-[9px]">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#131620] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 font-mono mb-1.5">
                        Event Type <span className="text-[#E5C887]">*</span>
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-[#131620] border border-white/15 focus:border-[#E5C887] px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none transition-colors"
                      >
                        {eventTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#131620] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Event Date & Event Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 font-mono mb-1.5">
                        Preferred Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full bg-[#131620] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 font-mono mb-1.5">
                        Event Location / Venue
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kannur, Calicut, or Destination"
                        value={formData.eventLocation}
                        onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                        className="w-full bg-[#131620] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Estimated Guest Count & Selected Package */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 font-mono mb-1.5">
                        Estimated Guest Count
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 250 - 500 Guests"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full bg-[#131620] border border-white/15 focus:border-[#E5C887] px-4 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 font-mono mb-1.5">
                        Selected Package <span className="text-[#E5C887]">*</span>
                      </label>
                      <select
                        value={formData.package}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="w-full bg-[#131620] border border-white/15 focus:border-[#E5C887] px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none transition-colors"
                      >
                        {packagesList.map((pkg) => (
                          <option key={pkg} value={pkg} className="bg-[#131620] text-white">
                            {pkg}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Additional Requirements */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#FAF8F5]/80 font-mono mb-1.5">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your theme, catering preferences, decor ideas, or specific cultural programs..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full bg-[#131620] border border-white/15 focus:border-[#E5C887] p-3.5 text-xs sm:text-sm text-[#FAF8F5] rounded-xl focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.16em] text-[#08090B] bg-gradient-to-r from-[#D5B069] via-[#C5A059] to-[#B59049] hover:from-[#E5C887] hover:to-[#C5A059] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/25 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#08090B]" />
                      <span>SUBMIT ENQUIRY VIA WHATSAPP</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-[10.5px] font-mono text-[#FAF8F5]/50 mt-2.5">
                      Direct connection to Collab Events Concierge • No automated bots
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
