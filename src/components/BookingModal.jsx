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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0f1014] border border-[#2c2f3b] rounded-3xl w-full max-w-xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#22242c] flex items-center justify-between bg-[#14161c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-white">
                Book Your Grooming Session
              </h2>
              <p className="text-xs text-neutral-400">
                Urban Cuts • Zaraj Housing Society, Sector A, Islamabad
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Booking Request Prepared!</h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName || 'Sir'}</strong>. Your appointment for <strong className="text-white">{currentServiceObj?.name}</strong> has been logged.
              </p>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                For immediate confirmation, you can send your booking directly to our front desk on WhatsApp below:
              </p>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="px-5 py-3 rounded-xl text-xs font-semibold bg-white/5 border border-neutral-700 text-neutral-300 hover:text-white"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleStandardSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Select Service <span className="text-white">*</span>
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                >
                  {services.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} ({srv.duration})
                    </option>
                  ))}
                </select>
                {currentServiceObj && (
                  <p className="text-[11px] text-neutral-400 mt-1 italic">
                    "{currentServiceObj.benefit}"
                  </p>
                )}
              </div>

              {/* Stylist Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Preferred Stylist
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedStylist('any')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      selectedStylist === 'any'
                        ? 'bg-white text-black border-white font-bold'
                        : 'bg-[#171920] text-neutral-300 border-[#2c2f3b] hover:border-neutral-500'
                    }`}
                  >
                    Any Barber
                  </button>
                  {team.map((stylist) => (
                    <button
                      key={stylist.id}
                      type="button"
                      onClick={() => setSelectedStylist(stylist.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedStylist === stylist.id
                          ? 'bg-white text-black border-white font-bold'
                          : 'bg-[#171920] text-neutral-300 border-[#2c2f3b] hover:border-neutral-500'
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
                    Your Name <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asad Rehman"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Phone / WhatsApp <span className="text-white">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="03XX XXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Hair / Beard Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Skin fade with low temple taper, beard shape-up"
                  value={bookingNotes}
                  onChange={(e) => setBookingNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#171920] border border-[#2c2f3b] text-white text-sm focus:outline-none focus:border-white"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book Instantly via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all shadow"
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
