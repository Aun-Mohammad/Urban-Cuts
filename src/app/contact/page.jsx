import React, { useState } from 'react';
import { getBusinessInfo, getServices, getFaqs } from '../../data/salonData';
import { FaqSection } from '../../components/FaqSection';
import { MapSection } from '../../components/MapSection';
import { JsonLd } from '../../components/JsonLd';
import { getContactSchema } from '../../data/schemas';
import { 
  Phone, MessageSquare, MapPin, Clock, Send, 
  CheckCircle2, Navigation, HelpCircle 
} from 'lucide-react';

/**
 * Contact Page (app/contact/page.jsx & app/contact/page.js)
 * Implements Schema.org (ContactPage, BarberShop with ContactPoint, OpeningHoursSpecification, BreadcrumbList).
 */
export default function ContactPage({ onNavigate, onOpenBooking }) {
  const businessInfo = getBusinessInfo();
  const services = getServices();
  const faqs = getFaqs();
  const contactSchemas = getContactSchema(businessInfo, faqs);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [service, setService] = useState(services[0]?.name || 'Haircuts & Styling');
  const [dateTime, setDateTime] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*Urban Cuts Contact Inquiry*\n` +
      `👤 *Name:* ${fullName || 'Guest'}\n` +
      `📞 *Phone:* ${phone || 'Not provided'}\n` +
      (whatsapp ? `💬 *WhatsApp:* ${whatsapp}\n` : '') +
      `✂️ *Service:* ${service}\n` +
      (dateTime ? `📅 *Preferred Date/Time:* ${dateTime}\n` : '') +
      (message ? `📝 *Message:* ${message}\n` : '') +
      `📍 *Location:* Street 2 B, Zaraj Housing Society, Sector A, Islamabad`
    );
    window.open(`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full space-y-16 py-8">
      {/* Schema.org Structured Data */}
      {contactSchemas.map((schema, index) => (
        <JsonLd key={index} id={`contact-schema-${index}`} schema={schema} />
      ))}

      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c8a45d]/10 border border-[#c8a45d]/30 text-xs font-bold text-[#dfba73] font-display">
          <Navigation className="w-3.5 h-3.5 text-[#dfba73]" />
          <span>Visit & Connect • Zaraj Sector A</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Find Us in Zaraj Housing Society
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
          Book an appointment, ask a question, or stop by for a fresh cut. We are open every single day from 11:00 AM until midnight.
        </p>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="leather-surface border border-[#c8a45d]/35 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl shadow-black/80 relative overflow-hidden">
              <h2 className="font-serif text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span>Salon Information</span>
                <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#c8a45d]/15 text-[#dfba73] border border-[#c8a45d]/30 font-display">
                  Islamabad
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#141722] border border-[#c8a45d]/40 flex items-center justify-center text-[#dfba73] shrink-0 shadow-sm shadow-[#c8a45d]/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#dfba73] font-display">Street Address</h3>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Street 2 B, Zaraj Housing Society, Sector A
                    </p>
                    <p className="text-xs text-neutral-400 font-light">Islamabad, 44000, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#141722] border border-[#c8a45d]/40 flex items-center justify-center text-[#dfba73] shrink-0 shadow-sm shadow-[#c8a45d]/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#dfba73] font-display">Operating Hours</h3>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Monday – Sunday: 11:00 AM – 12:00 Midnight
                    </p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#c8a45d]/15 text-[#dfba73] border border-[#c8a45d]/35 text-[10px] font-bold tracking-wider font-display">
                      Open 7 Days a Week
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#141722] border border-[#c8a45d]/40 flex items-center justify-center text-[#dfba73] shrink-0 shadow-sm shadow-[#c8a45d]/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#dfba73] font-display">Phone Consultation</h3>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-sm font-semibold text-white hover:text-[#dfba73] mt-0.5 block transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-sm shadow-emerald-950/30">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-display">WhatsApp Instant Line</h3>
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-emerald-400 mt-0.5 block transition-colors"
                    >
                      {businessInfo.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Booking Shortcut Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c8a45d]/20 active:scale-95 font-display"
                >
                  <span>Open Quick Booking Modal</span>
                </button>
              </div>
            </div>

            {/* Quick Directions Helper */}
            <div className="leather-surface border border-[#c8a45d]/25 p-6 rounded-3xl space-y-2 shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 font-display">
                <Navigation className="w-4 h-4 text-[#dfba73]" />
                <span>Directions & Landmarks</span>
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Located right off the main boulevard in Sector A, Zaraj Housing Society. Ample customer parking is available directly in front of the salon.
              </p>
            </div>
          </div>

          {/* Right Column: Send Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="leather-surface border border-[#c8a45d]/35 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl shadow-black/80 relative overflow-hidden">
              <div>
                <h2 className="font-serif text-xl font-bold text-white uppercase tracking-wider">
                  Send an Inquiry or Pre-Book
                </h2>
                <p className="text-xs text-neutral-300 mt-1 font-light">
                  Fill out your details below to dispatch directly to our reception via WhatsApp or register for appointment callback.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-sm shadow-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">Thank You, {fullName}!</h3>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto font-light">
                    Your appointment request for <strong className="text-[#dfba73] font-semibold">{service}</strong> has been logged. For immediate priority confirmation, transmit directly to our reception desk.
                  </p>
                  <button
                    onClick={handleWhatsAppSend}
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-black transition-all inline-flex items-center gap-2 shadow-lg shadow-emerald-950/50 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#dfba73] mb-1 font-display">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Bilal Khan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/30 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#dfba73] mb-1 font-display">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0300-1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/30 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#dfba73] mb-1 font-display">
                        Select Service
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/30 text-white text-xs focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-colors"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.name} className="bg-[#090b10] text-white">
                            {s.name} ({s.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#dfba73] mb-1 font-display">
                        Preferred Date & Time
                      </label>
                      <input
                        type="text"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        placeholder="e.g. Tomorrow at 6:00 PM"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/30 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#dfba73] mb-1 font-display">
                      Notes or Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Skin fade with scissor work on top, beard line-up, or capillary therapy consultation..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/30 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c8a45d]/20 active:scale-95 font-display"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 active:scale-95 font-display"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Direct via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. GOOGLE MAPS SECTION */}
      <MapSection onOpenBooking={onOpenBooking} />

      {/* 4. FAQ SECTION */}
      <FaqSection />
    </div>
  );
}
