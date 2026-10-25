import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brandConfig } from '../data/brandConfig';
import { services } from '../data/services';
import { SectionHeading } from './SectionHeading';
import { AnimatedReveal } from './AnimatedReveal';
import { Send, CheckCircle2, AlertCircle, Calendar, Sparkles, Clock, Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection({ selectedServiceId }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: selectedServiceId || '',
    date: '',
    time: 'Morning (10:00 AM - 1:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.service) {
      errs.service = 'Please choose a preferred service.';
    }
    if (!formData.date) {
      errs.date = 'Please pick a preferred date.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    // Simulate brief network submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: 'Morning (10:00 AM - 1:00 PM)',
        message: '',
      });
    }, 1000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Appointment Inquiries"
      className="bg-[#F8F5F0] py-20 md:py-28 lg:py-32 border-t border-[#E8DFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CONTACT & APPOINTMENTS"
          title="Reach Out to Us"
          subtitle="Ready for your next nail transformation? Tell us what you have in mind, and let's plan your bespoke appointment."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <AnimatedReveal delay={0.1}>
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFC] shadow-[0_10px_35px_rgba(48,35,33,0.05)]">
                
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#E8C8C7]/50 flex items-center justify-center text-[#B65C70]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-3xl text-[#302321]">
                      Inquiry Received With Pleasure
                    </h3>
                    <p className="text-sm text-[#5C4D4A] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting ANANYA Nail Atelier. Our studio concierge will contact you within 24 hours to confirm your reservation.
                    </p>
                    <div className="pt-4 p-4 rounded-xl bg-[#F8F5F0] border border-[#E8DFC] text-xs text-[#73635E] max-w-md mx-auto">
                      <span className="font-semibold text-[#B65C70]">Demonstration Mode:</span> This form is running client-side. In production, this can be connected directly to your email service (e.g. Resend, EmailJS) or appointment calendar (Calendly / Square).
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-6 py-2.5 bg-[#B65C70] hover:bg-[#A04E61] text-white text-xs font-medium tracking-widest uppercase rounded-full cursor-pointer transition-colors"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    
                    {/* Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-medium uppercase tracking-wider text-[#302321] mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Camilla Dupont"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border ${
                            errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-[#E2D8CF]'
                          } focus:outline-none focus:border-[#B65C70] focus:ring-1 focus:ring-[#B65C70] text-sm text-[#302321] placeholder-[#A99A8E] transition-all`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium uppercase tracking-wider text-[#302321] mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="camilla@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border ${
                            errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-[#E2D8CF]'
                          } focus:outline-none focus:border-[#B65C70] focus:ring-1 focus:ring-[#B65C70] text-sm text-[#302321] placeholder-[#A99A8E] transition-all`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Preferred Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-medium uppercase tracking-wider text-[#302321] mb-1.5"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border border-[#E2D8CF] focus:outline-none focus:border-[#B65C70] focus:ring-1 focus:ring-[#B65C70] text-sm text-[#302321] placeholder-[#A99A8E] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-medium uppercase tracking-wider text-[#302321] mb-1.5"
                        >
                          Preferred Service *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border ${
                            errors.service ? 'border-red-400 ring-1 ring-red-400' : 'border-[#E2D8CF]'
                          } focus:outline-none focus:border-[#B65C70] focus:ring-1 focus:ring-[#B65C70] text-sm text-[#302321] transition-all`}
                        >
                          <option value="">Select a treatment</option>
                          {services.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title} ({s.price})
                            </option>
                          ))}
                          <option value="Custom Consultation">Custom Bridal / Bespoke Art Consultation</option>
                        </select>
                        {errors.service && (
                          <p className="mt-1 text-xs text-red-500">{errors.service}</p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Date & Time Window */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-xs font-medium uppercase tracking-wider text-[#302321] mb-1.5"
                        >
                          Preferred Appointment Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border ${
                            errors.date ? 'border-red-400 ring-1 ring-red-400' : 'border-[#E2D8CF]'
                          } focus:outline-none focus:border-[#B65C70] focus:ring-1 focus:ring-[#B65C70] text-sm text-[#302321] transition-all`}
                        />
                        {errors.date && (
                          <p className="mt-1 text-xs text-red-500">{errors.date}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="time"
                          className="block text-xs font-medium uppercase tracking-wider text-[#302321] mb-1.5"
                        >
                          Time Window
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border border-[#E2D8CF] focus:outline-none focus:border-[#B65C70] focus:ring-1 focus:ring-[#B65C70] text-sm text-[#302321] transition-all"
                        >
                          <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                          <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                          <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium uppercase tracking-wider text-[#302321] mb-1.5"
                      >
                        Nail Art Ideas or Special Notes
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your desired shape, length, or inspiration (e.g. almond glazed chrome, French micro-line, wedding set)..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border border-[#E2D8CF] focus:outline-none focus:border-[#B65C70] focus:ring-1 focus:ring-[#B65C70] text-sm text-[#302321] placeholder-[#A99A8E] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-4 px-6 bg-[#B65C70] hover:bg-[#A04E61] active:scale-[0.99] disabled:opacity-60 text-white font-medium text-xs tracking-[0.22em] uppercase rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {status === 'submitting' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>SENDING INQUIRY...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND INQUIRY</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-center text-[11px] text-[#73635E]">
                      We treat your privacy with utmost care. Expect a reply within 24 hours.
                    </div>

                  </form>
                )}

              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Editorial Portrait in Organic Oval Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedReveal delay={0.25} className="w-full max-w-sm sm:max-w-md">
              <div className="relative">
                {/* Organic Circular / Arch Frame */}
                <div className="aspect-[4/5] sm:aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white bg-[#F2ECE5]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Ananya, smiling master nail artist in chic black atelier shirt"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Floating Information Capsule */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-[#231A19] text-white px-6 py-3.5 rounded-full shadow-xl text-center whitespace-nowrap">
                  <div className="font-serif text-sm tracking-wide">
                    Personalized Nail Consultations
                  </div>
                  <div className="text-[10px] text-[#E8C8C7] uppercase tracking-widest">
                    By Appointment Only
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
