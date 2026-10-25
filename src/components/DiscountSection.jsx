import React from 'react';
import { motion } from 'framer-motion';
import { brandConfig } from '../data/brandConfig';
import { Sparkles, ArrowRight, Tag } from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

export function DiscountSection({ onOpenBooking }) {
  return (
    <section
      id="promotion"
      aria-label="Atelier Exclusive Offer"
      className="relative bg-[#231A19] text-[#F8F5F0] overflow-hidden"
    >
      {/* Top Organic SVG Wave Divider (transition from #F2ECE5) */}
      <div className="w-full overflow-hidden leading-none rotate-180 -mb-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 md:h-20 text-[#F2ECE5] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Atmospheric Background Photograph with Dark Vignette */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80"
          alt="Atmospheric nail studio texture"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#231A19] via-[#231A19]/80 to-[#231A19]" />
      </div>

      {/* Inner Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        
        {/* Eyebrow */}
        <AnimatedReveal delay={0.05}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <Tag className="w-3.5 h-3.5 text-[#E8C8C7]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#E8C8C7] uppercase">
              {brandConfig.promo.eyebrow}
            </span>
          </div>
        </AnimatedReveal>

        {/* Heading */}
        <AnimatedReveal delay={0.15}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#F8F5F0]">
            {brandConfig.promo.heading}
          </h2>
        </AnimatedReveal>

        {/* Large Discount Typography */}
        <AnimatedReveal delay={0.25}>
          <div className="my-6 sm:my-8">
            <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#E8C8C7] tracking-tight block drop-shadow-md">
              {brandConfig.promo.discount}
            </span>
          </div>
        </AnimatedReveal>

        {/* Condition & Subtext */}
        <AnimatedReveal delay={0.35}>
          <p className="max-w-lg mx-auto text-sm sm:text-base text-[#D8CCC3] font-light leading-relaxed">
            {brandConfig.promo.condition}
          </p>
        </AnimatedReveal>

        {/* CTA Button */}
        <AnimatedReveal delay={0.45}>
          <div className="mt-8 sm:mt-10">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B65C70] hover:bg-[#A04E61] active:scale-[0.98] text-white text-xs tracking-[0.22em] font-medium uppercase rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <span>{brandConfig.promo.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </AnimatedReveal>

      </div>

      {/* Bottom Organic SVG Wave Divider (transition to #F8F5F0) */}
      <div className="w-full overflow-hidden leading-none -mt-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 md:h-20 text-[#F8F5F0] fill-current"
        >
          <path d="M0,0 C200,90 400,-20 600,60 C800,140 1000,20 1200,70 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
