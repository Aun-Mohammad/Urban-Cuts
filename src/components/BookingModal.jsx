import React, { useState, useEffect } from 'react';
import { getServices, getTeamMembers, getBusinessInfo } from '../data/salonData';
import { X, Calendar, Clock, User, Phone, MessageSquare, CheckCircle, Sparkles, Scissors } from 'lucide-react';

export const BookingModal = ({ isOpen, onClose, defaultServiceId }) => {
  const services = getServices();
  const team = getTeamMembers();
  const businessInfo = getBusinessInfo();

  const [selectedService, setSelectedService] = useState(defaultServiceId || services[0]?.id || '');
  const [selectedStylist, setSelectedStylist] = useState('any');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultServiceId) {
      setSelectedService(defaultServiceId);
    }
  }, [defaultServiceId]);

  if (!isOpen) return null;

  const currentServiceObj = services.find(s => s.id === selectedService) || services[0];

  const handleWhatsAppDirect = () => {
    const stylistName = selectedStylist === 'any' 
      ? 'Any Available Master Barber' 
      : team.find(t => t.id === selectedStylist)?.name || selectedStylist;

    const message = encodeURIComponent(
      `*Urban Cuts Appointment Request*\n` +
      `✂️ *Service:* ${currentServiceObj?.name || 'Haircut'}\n` +
      `👤 *Client Name:* ${fullName || 'Guest'}\n` +
      `📞 *Phone:* ${phoneNumber || 'Not provided'}\n` +
      `💈 *Stylist:* ${stylistName}\n` +
      (preferredDate ? `📅 *Date:* ${preferredDate}\n` : '') +
      (preferredTime ? `⏰ *Time:* ${preferredTime}\n` : '') +
      (bookingNotes ? `📝 *Notes:* ${bookingNotes}\n` : '') +
      `📍 *Location:* Street 2 B, Zaraj Housing Society, Sector A, Islamabad`
    );

    window.open(`https://wa.me/923164233912?text=${message}`, '_blank');
    setIsSuccess(true);
  };

  const handleStandardSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="leather-surface border border-[#c8a45d]/40 rounded-3xl w-full max-w-xl max-h-[92vh] flex flex-col shadow-2xl shadow-black/90 overflow-hidden animate-in fade-in zoom-in-95 duration-200 relative">
        
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#dfba73]/10 blur-3xl pointer-events-none rounded-full" />

        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#c8a45d]/20 flex items-center justify-between bg-[#080a0f]/80 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#141722] border border-[#c8a45d]/40 flex items-center justify-center text-[#dfba73] shrink-0 shadow-sm shadow-[#c8a45d]/10">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                  Reserve Atelier Session
                </h2>
                <span className="hidden sm:inline-block text-[9px] uppercase font-bold tracking-[0.2em] px-2 py-0.5 rounded-full bg-[#c8a45d]/15 border border-[#c8a45d]/35 text-[#dfba73] font-display">
                  Zaraj Sector A
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-light">
                Urban Cuts • Street 2 B, Sector A, Islamabad
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 hover:border-[#c8a45d]/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 relative z-10">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-950/40">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Grooming Request Prepared</h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed font-light">
                Thank you, <strong className="text-white font-semibold">{fullName || 'Sir'}</strong>. Your appointment for <strong className="text-[#dfba73] font-semibold">{currentServiceObj?.name}</strong> has been prepared.
              </p>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                For priority chair confirmation, dispatch your booking directly to our reception via WhatsApp below:
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmit to WhatsApp Desk</span>
                </button>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="px-5 py-3.5 rounded-xl text-xs font-semibold bg-[#111319] border border-[#c8a45d]/30 text-neutral-300 hover:text-white transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleStandardSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#dfba73] mb-1.5 font-display">
                  Select Service Tier <span className="text-[#dfba73]">*</span>
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/30 text-white text-sm focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-all cursor-pointer"
                >
                  {services.map((srv) => (
                    <option key={srv.id} value={srv.id} className="bg-[#090b10] text-white py-1">
                      {srv.name} — {srv.priceNote || srv.price} ({srv.duration})
                    </option>
                  ))}
                </select>
                {currentServiceObj && (
                  <p className="text-[11px] text-neutral-300 mt-1.5 italic font-artistic">
                    "{currentServiceObj.benefit}"
                  </p>
                )}
              </div>

              {/* Stylist Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#dfba73] mb-1.5 font-display">
                  Dedicated Artisan
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedStylist('any')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      selectedStylist === 'any'
                        ? 'bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black border-transparent font-bold shadow-md shadow-[#c8a45d]/20'
                        : 'bg-[#090b10] text-neutral-300 border-[#c8a45d]/25 hover:border-[#c8a45d]/60 hover:text-white'
                    }`}
                  >
                    Any Artisan
                  </button>
                  {team.map((stylist) => (
                    <button
                      key={stylist.id}
                      type="button"
                      onClick={() => setSelectedStylist(stylist.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedStylist === stylist.id
                          ? 'bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black border-transparent font-bold shadow-md shadow-[#c8a45d]/20'
                          : 'bg-[#090b10] text-neutral-300 border-[#c8a45d]/25 hover:border-[#c8a45d]/60 hover:text-white'
                      }`}
                    >
                      {stylist.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Your Name <span className="text-[#dfba73]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asad Rehman"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/25 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Phone / WhatsApp <span className="text-[#dfba73]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="03XX XXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/25 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-all"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/25 text-white text-sm focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Preferred Time (Till 12 AM)
                  </label>
                  <input
                    type="time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/25 text-white text-sm focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-all"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Custom Grooming Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Skin fade with low temple taper, beard line-up, or hot towel therapy"
                  value={bookingNotes}
                  onChange={(e) => setBookingNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b10] border border-[#c8a45d]/25 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#dfba73] focus:ring-1 focus:ring-[#dfba73]/30 transition-all"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book Instantly via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] via-[#c8a45d] to-[#9a7836] text-black hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c8a45d]/20"
                >
                  Submit Form
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
