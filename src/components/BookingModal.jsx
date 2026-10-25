import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Sparkles, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { services } from '../data/services';
import { brandConfig } from '../data/brandConfig';

export function BookingModal({
  isOpen,
  onClose,
  initialService = '',
  promoCode = '',
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || '',
    date: '',
    time: 'Morning (10:00 AM - 1:00 PM)',
    promo: promoCode || '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update initial service or promo if passed
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (promoCode) {
      setFormData((prev) => ({ ...prev, promo: promoCode }));
    }
  }, [initialService, promoCode]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book Atelier Appointment"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#171513]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-lg bg-[#F8F5F0] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#DECFC4] my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="absolute top-5 right-5 p-2 rounded-full text-[#302321] hover:text-[#B65C70] hover:bg-[#F2ECE5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E8C8C7]/50 flex items-center justify-center text-[#B65C70]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl text-[#302321]">
                Reservation Request Received
              </h3>
              <p className="text-sm text-[#5C4D4A] max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-medium text-[#302321]">{formData.name || 'Valued Guest'}</span>. We have saved your appointment request for{' '}
                <span className="font-medium text-[#302321]">{formData.service || 'your atelier visit'}</span>.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-[#E8DFC] text-xs text-[#73635E] text-left space-y-1">
                <div><strong>Studio:</strong> {brandConfig.fullName}</div>
                <div><strong>Address:</strong> {brandConfig.contact.address}</div>
                <div><strong>Inquiry Mode:</strong> Preview Demonstration Mode</div>
              </div>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-3 bg-[#B65C70] hover:bg-[#A04E61] text-white text-xs font-medium tracking-[0.2em] uppercase rounded-full cursor-pointer transition-colors"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-[#B65C70] uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve Your Visit</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#302321] mt-1">
                  Book Your Atelier Appointment
                </h3>
                <p className="text-xs text-[#73635E] mt-1 font-light">
                  Tailored nail care, high-fashion art, and a relaxing sanctuary.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302321] font-medium mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D8CF] text-sm text-[#302321] focus:outline-none focus:border-[#B65C70]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302321] font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D8CF] text-sm text-[#302321] focus:outline-none focus:border-[#B65C70]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302321] font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D8CF] text-sm text-[#302321] focus:outline-none focus:border-[#B65C70]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302321] font-medium mb-1">
                    Select Service *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D8CF] text-sm text-[#302321] focus:outline-none focus:border-[#B65C70]"
                  >
                    <option value="">Choose a treatment...</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.price} • {s.duration})
                      </option>
                    ))}
                    <option value="Bridal Custom Package">Bridal &amp; Special Occasion Bespoke</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302321] font-medium mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D8CF] text-sm text-[#302321] focus:outline-none focus:border-[#B65C70]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302321] font-medium mb-1">
                      Time Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D8CF] text-sm text-[#302321] focus:outline-none focus:border-[#B65C70]"
                    >
                      <option>Morning (10:00 AM - 1:00 PM)</option>
                      <option>Afternoon (1:00 PM - 4:00 PM)</option>
                      <option>Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302321] font-medium mb-1">
                    Special Promo or Referral Code
                  </label>
                  <input
                    type="text"
                    value={formData.promo}
                    onChange={(e) => setFormData({ ...formData, promo: e.target.value })}
                    placeholder="e.g. SHINE40"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2D8CF] text-sm text-[#302321] focus:outline-none focus:border-[#B65C70]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3.5 px-6 bg-[#B65C70] hover:bg-[#A04E61] active:scale-[0.99] disabled:opacity-60 text-white font-medium text-xs tracking-[0.2em] uppercase rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? 'CONFIRMING...' : 'CONFIRM RESERVATION'}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
