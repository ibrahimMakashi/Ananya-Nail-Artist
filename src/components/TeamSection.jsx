import React from 'react';
import { teamMembers } from '../data/team';
import { SectionHeading } from './SectionHeading';
import { FadeInStagger, FadeInItem } from './AnimatedReveal';
import { Sparkles } from 'lucide-react';

export function TeamSection() {
  return (
    <section
      id="team"
      aria-label="Atelier Team"
      className="bg-[#F8F5F0] py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR TEAM"
          title="The Faces Behind the Beauty"
          subtitle="Meet the certified nail artisans, gel architects, and spa therapists dedicated to perfection."
          centered={true}
        />

        {/* 4 Cards Grid */}
        <FadeInStagger
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {teamMembers.map((member) => (
            <FadeInItem key={member.id}>
              <div className="group flex flex-col items-center text-center">
                
                {/* Portrait Container */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#F2ECE5] border border-[#E8DFC] shadow-[0_4px_20px_rgba(48,35,33,0.04)] group-hover:shadow-[0_12px_30px_rgba(48,35,33,0.08)] transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#302321]/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Experience Tag */}
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#F8F5F0]/90 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-medium text-[#302321] rounded-full border border-[#E2D8CF] whitespace-nowrap">
                    {member.experience}
                  </span>
                </div>

                {/* Info */}
                <div className="mt-4 space-y-1">
                  <h3 className="font-serif text-2xl text-[#302321] group-hover:text-[#B65C70] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-[#B65C70] tracking-[0.15em] uppercase">
                    {member.role}
                  </p>
                  <p className="mt-1 text-xs text-[#73635E] font-light max-w-xs leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>
                </div>

              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

      </div>
    </section>
  );
}
