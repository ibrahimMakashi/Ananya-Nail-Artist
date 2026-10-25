import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { AnimatedReveal } from './AnimatedReveal';
import { ArrowRight, Clock, Sparkles, MapPin, Phone } from 'lucide-react';

export function DarkPromoSection({ onOpenBooking }) {
  return (
    <section
      id="nourish"
      aria-label="Atelier Experience"
      className="relative bg-[#171513] text-[#F8F5F0] py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background ambient nail artistry with soft overlay */}
      <div className="absolute inset-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury nail art creation ambience"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171513] via-[#171513]/90 to-[#171513]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Ethos */}
          <div className="lg:col-span-7">
            <AnimatedReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-[#E8C8C7]/50" />
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#E8C8C7]">
                  {brandConfig.darkPromo.eyebrow}
                </span>
                <span className="h-[1px] w-6 bg-[#E8C8C7]/50" />
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#F8F5F0] leading-[1.14]">
                {brandConfig.darkPromo.heading}
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.25}>
              <p className="mt-4 font-serif italic text-lg sm:text-xl text-[#E8C8C7]/90 font-light">
                "{brandConfig.darkPromo.subheading}"
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.35}>
              <p className="mt-5 text-sm sm:text-base text-[#C2B4AA] font-light leading-relaxed max-w-xl">
                {brandConfig.darkPromo.description}
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.45}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B65C70] hover:bg-[#A04E61] active:scale-[0.98] text-white text-xs tracking-[0.22em] font-medium uppercase rounded-full shadow-lg transition-all cursor-pointer"
                >
                  <span>{brandConfig.darkPromo.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/20 text-xs tracking-[0.22em] font-medium uppercase rounded-full transition-all"
                >
                  <span>INQUIRE ONLINE</span>
                </a>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Opening Hours & Studio Snapshot Card */}
          <div className="lg:col-span-5">
            <AnimatedReveal delay={0.25}>
              <div className="rounded-3xl bg-white/5 backdrop-blur-md p-6 sm:p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8C8C7] mb-6">
                  <Clock className="w-4 h-4 text-[#B65C70]" />
                  <span>Studio Hours &amp; Access</span>
                </div>

                <div className="space-y-4 divide-y divide-white/10 text-sm">
                  {brandConfig.hours.map((item, idx) => (
                    <div key={idx} className="pt-3 first:pt-0 flex justify-between items-center">
                      <span className="text-[#C2B4AA] font-light">{item.days}</span>
                      <span className="text-[#F8F5F0] font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-xs text-[#C2B4AA]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#B65C70] flex-shrink-0 mt-0.5" />
                    <span>{brandConfig.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#B65C70] flex-shrink-0" />
                    <span>{brandConfig.contact.phone}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 text-center">
                  <span className="text-[11px] text-[#E8C8C7] uppercase tracking-widest font-serif italic">
                    Boutique appointments curated for you
                  </span>
                </div>
              </div>
            </AnimatedReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
