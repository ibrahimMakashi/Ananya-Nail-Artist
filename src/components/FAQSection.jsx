import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/faqs';
import { SectionHeading } from './SectionHeading';
import { AnimatedReveal } from './AnimatedReveal';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export function FAQSection() {
  const [openId, setOpenId] = useState('faq-1');

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="bg-[#F8F5F0] py-20 md:py-28 lg:py-32 border-t border-[#E8DFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="FAQ"
          title="Quick Answers for You"
          subtitle="Everything you need to know about our atelier appointments, nail wellness, and aftercare."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Rounded Visual Frame */}
          <div className="lg:col-span-5 flex justify-center sticky top-28">
            <AnimatedReveal delay={0.1} className="w-full max-w-sm sm:max-w-md">
              <div className="relative">
                <div className="aspect-[4/5] rounded-full overflow-hidden shadow-2xl border-4 border-white bg-[#F2ECE5]">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                    alt="Restorative hand therapy with botanical oils and cuticle elixir"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Floating Capsule */}
                <div className="absolute -bottom-4 right-4 sm:right-8 bg-[#231A19] text-white px-5 py-3 rounded-2xl shadow-xl text-center">
                  <span className="text-[10px] text-[#E8C8C7] uppercase tracking-widest font-semibold block">
                    Have more questions?
                  </span>
                  <a
                    href="#contact"
                    className="font-serif text-sm hover:text-[#E8C8C7] transition-colors underline-offset-4 hover:underline"
                  >
                    Ask our team directly
                  </a>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Accessible Interactive Accordion */}
          <div className="lg:col-span-7">
            <AnimatedReveal delay={0.2} className="space-y-4">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-white border border-[#E8DFC] overflow-hidden shadow-[0_2px_10px_rgba(48,35,33,0.03)] transition-all"
                  >
                    <h3>
                      <button
                        type="button"
                        id={`faq-btn-${faq.id}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${faq.id}`}
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-[#F2ECE5]"
                      >
                        <span className="font-serif text-lg sm:text-xl text-[#302321] font-medium leading-snug">
                          {faq.question}
                        </span>
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? 'bg-[#B65C70] text-white rotate-180'
                              : 'bg-[#F8F5F0] text-[#73635E]'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${faq.id}`}
                          role="region"
                          aria-labelledby={`faq-btn-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#5C4D4A] font-light leading-relaxed border-t border-[#F8F5F0]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </AnimatedReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
