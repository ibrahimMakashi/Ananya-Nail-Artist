import React from 'react';
import { motion } from 'framer-motion';
import { brandConfig } from '../data/brandConfig';
import { AnimatedReveal, FadeInStagger, FadeInItem } from './AnimatedReveal';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function StudioFeature() {
  return (
    <section
      id="features"
      aria-label="Why Choose Ananya Atelier"
      className="bg-[#F2ECE5] py-20 md:py-28 lg:py-32 border-t border-[#E8DFC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & 4 Distinct Features */}
          <div className="lg:col-span-6 xl:col-span-6">
            <AnimatedReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-[#B65C70]/60" />
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B65C70]">
                  {brandConfig.feature.eyebrow}
                </span>
                <span className="h-[1px] w-6 bg-[#B65C70]/60" />
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#302321] leading-[1.15]">
                The Best Place for a <br className="hidden sm:inline" />
                <span className="italic font-light text-[#B65C70]">
                  Manicure
                </span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.25}>
              <p className="mt-5 text-base text-[#5C4D4A] font-light leading-relaxed">
                {brandConfig.feature.description}
              </p>
            </AnimatedReveal>

            {/* 4 Feature Descriptions */}
            <FadeInStagger
              staggerDelay={0.1}
              className="mt-8 space-y-6 pt-6 border-t border-[#DECFC4]"
            >
              {brandConfig.feature.items.map((item, idx) => (
                <FadeInItem key={idx}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C8C7]/50 flex items-center justify-center text-[#B65C70]">
                      <span className="text-[11px] font-serif font-bold">0{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-[#302321] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5C4D4A] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>

          {/* Right Column: Layered Photo Collage */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Main Top Image: Almond Manicure Display */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85 }}
                className="relative ml-auto w-[82%] sm:w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F5F0] z-10 hover:scale-[1.02] transition-transform duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80"
                  alt="Flawless almond-shaped manicure held against black knitwear"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>

              {/* Overlapping Bottom Image: Precision Polish Application */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: 0.2 }}
                className="relative -mt-28 sm:-mt-36 w-[65%] sm:w-[270px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F5F0] z-20 hover:scale-[1.02] transition-transform duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80"
                  alt="Nail technician carefully applying fine lacquer on client fingertips"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>

              {/* Decorative Atelier Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute top-8 left-4 z-30 bg-[#F8F5F0]/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-[#E2D8CF] flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B65C70]" />
                <span className="text-[11px] font-medium tracking-wider text-[#302321] uppercase">
                  Hospital Grade Cleanliness
                </span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
