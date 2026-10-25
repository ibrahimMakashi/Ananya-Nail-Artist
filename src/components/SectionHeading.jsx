import React from 'react';
import { AnimatedReveal } from './AnimatedReveal';

/**
 * Editorial section header component
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = '',
}) {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className}`}
    >
      {eyebrow && (
        <AnimatedReveal delay={0.05}>
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className={`h-[1px] w-6 ${dark ? 'bg-[#E8C8C7]/50' : 'bg-[#B65C70]/60'}`}
            />
            <span
              className={`text-xs uppercase tracking-[0.25em] font-medium ${
                dark ? 'text-[#E8C8C7]' : 'text-[#B65C70]'
              }`}
            >
              {eyebrow}
            </span>
            <span
              className={`h-[1px] w-6 ${dark ? 'bg-[#E8C8C7]/50' : 'bg-[#B65C70]/60'}`}
            />
          </div>
        </AnimatedReveal>
      )}

      <AnimatedReveal delay={0.15}>
        <h2
          className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] ${
            dark ? 'text-[#F8F5F0]' : 'text-[#302321]'
          }`}
        >
          {title}
        </h2>
      </AnimatedReveal>

      {subtitle && (
        <AnimatedReveal delay={0.25}>
          <p
            className={`mt-4 text-sm sm:text-base leading-relaxed font-light ${
              dark ? 'text-[#D8CCC3]' : 'text-[#5C4D4A]'
            }`}
          >
            {subtitle}
          </p>
        </AnimatedReveal>
      )}
    </div>
  );
}
