import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { SectionHeading } from './SectionHeading';
import { AnimatedReveal, FadeInStagger, FadeInItem } from './AnimatedReveal';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

export function ServicesSection({ onSelectService }) {
  return (
    <section
      id="services"
      aria-label="Nail Atelier Services"
      className="bg-[#F8F5F0] py-20 md:py-28 lg:py-32 border-t border-[#E8DFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Transform Your Look at Our Nail Salon"
          subtitle="Discover artisanal nail rituals designed to enhance your natural beauty with enduring strength, health, and couture aesthetics."
          centered={true}
        />

        {/* 6 Services Grid */}
        <FadeInStagger
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service) => (
            <FadeInItem key={service.id} className="h-full">
              <article className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E8DFC] shadow-[0_4px_20px_rgba(48,35,33,0.04)] hover:shadow-[0_12px_30px_rgba(48,35,33,0.08)] transition-all duration-300">
                
                {/* Image Container with Consistent 4:5 Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F2ECE5]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#F8F5F0]/90 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B65C70] rounded-full border border-[#E2D8CF]">
                      {service.badge}
                    </span>
                  )}

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#231A19]/80 backdrop-blur-md text-xs font-serif text-[#F8F5F0] rounded-full">
                    {service.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Duration / Tag */}
                    <div className="flex items-center gap-1.5 text-xs text-[#73635E] mb-2 font-light">
                      <Clock className="w-3.5 h-3.5 text-[#B65C70]" />
                      <span>{service.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl text-[#302321] group-hover:text-[#B65C70] transition-colors leading-tight mb-2.5">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#5C4D4A] font-light leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="mt-6 pt-5 border-t border-[#F0E6DE] flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#B65C70] hover:text-[#302321] transition-colors group/btn cursor-pointer"
                    >
                      <span>BOOK THIS SERVICE</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-xs font-serif italic text-[#A99A8E]">
                      Signature Care
                    </span>
                  </div>
                </div>

              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>

      </div>
    </section>
  );
}
