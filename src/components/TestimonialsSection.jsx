import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { SectionHeading } from './SectionHeading';
import { AnimatedReveal } from './AnimatedReveal';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="bg-[#F2ECE5] py-20 md:py-28 lg:py-32 border-t border-[#E8DFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="Happy Clients, Happy Us"
          subtitle="Real reflections from clients who entrust their hands and personal style to our atelier."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Arched Photography Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatedReveal delay={0.1} className="w-full max-w-sm sm:max-w-md">
              <div className="relative">
                <div className="aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-[#F8F5F0] bg-[#F8F5F0]">
                  <img
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
                    alt="Close up of manicured hands with gold rings resting gracefully"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="absolute -bottom-4 right-4 sm:right-8 bg-[#F8F5F0] px-4 py-2.5 rounded-2xl shadow-lg border border-[#E2D8CF] text-center">
                  <div className="flex items-center gap-1 text-[#B65C70] justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest text-[#302321] uppercase mt-0.5 block">
                    5-Star Atelier Standard
                  </span>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Dynamic Testimonial Carousel */}
          <div className="lg:col-span-7">
            <AnimatedReveal delay={0.25}>
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFC] shadow-[0_8px_30px_rgba(48,35,33,0.04)] relative">
                
                {/* Quote Icon */}
                <div className="mb-6 text-[#E8C8C7]">
                  <Quote className="w-10 h-10 rotate-180" />
                </div>

                {/* Animated Testimonial Text */}
                <div className="min-h-[160px] sm:min-h-[140px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl font-light text-[#302321] leading-relaxed">
                        "{current.quote}"
                      </p>

                      <div className="pt-4 border-t border-[#F0E6DE] flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h4 className="font-serif text-lg font-semibold text-[#302321]">
                            {current.name}
                          </h4>
                          <p className="text-xs text-[#B65C70] tracking-wider uppercase font-medium">
                            {current.service}
                          </p>
                          <p className="text-xs text-[#73635E] font-light mt-0.5">
                            {current.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls & Pagination Indicators */}
                <div className="mt-8 pt-6 border-t border-[#F0E6DE] flex items-center justify-between">
                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 transition-all rounded-full cursor-pointer ${
                          currentIndex === idx
                            ? 'w-6 bg-[#B65C70]'
                            : 'w-2 bg-[#D8CCC3] hover:bg-[#B65C70]/50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Prev / Next Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="p-2.5 rounded-full bg-[#F8F5F0] hover:bg-[#F2ECE5] text-[#302321] hover:text-[#B65C70] transition-colors cursor-pointer border border-[#E2D8CF]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="p-2.5 rounded-full bg-[#F8F5F0] hover:bg-[#F2ECE5] text-[#302321] hover:text-[#B65C70] transition-colors cursor-pointer border border-[#E2D8CF]"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
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
