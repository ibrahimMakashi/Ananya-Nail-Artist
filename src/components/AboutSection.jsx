import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedReveal } from './AnimatedReveal';
import { brandConfig } from '../data/brandConfig';
import { Sparkles, ArrowRight } from 'lucide-react';

export function AboutSection({ onOpenBooking }) {
  return (
    <section
      id="about"
      aria-label="About Ananya Nail Atelier"
      className="relative bg-[#F2ECE5] py-20 md:py-28 lg:py-32 overflow-hidden border-t border-[#E8DFC]"
    >
      {/* Delicate background watermark */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E8C8C7]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-6 xl:col-span-6">
            <AnimatedReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-[#B65C70]/60" />
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B65C70]">
                  {brandConfig.about.eyebrow}
                </span>
                <span className="h-[1px] w-6 bg-[#B65C70]/60" />
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#302321] leading-[1.14]">
                {brandConfig.about.heading}
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.25}>
              <p className="mt-6 text-base text-[#5C4D4A] font-light leading-relaxed">
                {brandConfig.about.paragraph}
              </p>
            </AnimatedReveal>

            {/* Studio Statistics */}
            <AnimatedReveal delay={0.35}>
              <div className="mt-8 pt-8 border-t border-[#DECFC4] grid grid-cols-2 gap-6">
                {brandConfig.about.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-serif text-3xl sm:text-4xl font-normal text-[#302321] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-wider uppercase text-[#73635E] font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedReveal>

            {/* CTA Button */}
            <AnimatedReveal delay={0.45}>
              <div className="mt-10 flex items-center gap-6">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#B65C70] hover:bg-[#A04E61] active:scale-[0.98] text-white text-xs tracking-[0.2em] font-medium uppercase rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>{brandConfig.about.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="font-serif italic text-[#73635E] text-sm hidden sm:block">
                  Handcrafted with devotion
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Editorial Asymmetric Collage */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Top Collage Photo: Hands Framing Face */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="relative ml-auto w-[75%] sm:w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F8F5F0] z-10 hover:scale-[1.02] transition-transform duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=800&q=80"
                  alt="Editorial portrait of woman in green sweater resting hands with immaculate manicure"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>

              {/* Bottom Collage Photo: Gold Rings & Nude Polish */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: 0.2 }}
                className="relative -mt-24 sm:-mt-32 w-[65%] sm:w-[260px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F5F0] z-20 hover:scale-[1.02] transition-transform duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80"
                  alt="Close up of hands with gold rings and immaculate nude manicured nails"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>

              {/* Handwritten Script Annotation */}
              <motion.div
                initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="absolute bottom-2 right-4 sm:right-12 z-30 bg-[#F8F5F0]/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg border border-[#E2D8CF]"
              >
                <span className="font-['Pinyon_Script'] text-2xl sm:text-3xl text-[#B65C70]">
                  {brandConfig.about.quoteScript}
                </span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
