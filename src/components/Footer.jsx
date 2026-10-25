import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Atelier', href: '#about' },
    { label: 'Nail Services', href: '#services' },
    { label: 'Why Choose Us', href: '#features' },
    { label: 'Our Team', href: '#team' },
    { label: 'Nail Art Gallery', href: '#gallery' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact & Inquiries', href: '#contact' },
  ];

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      aria-label="Atelier Footer"
      className="bg-[#F2ECE5] text-[#302321] pt-16 sm:pt-20 pb-8 border-t border-[#DECFC4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#DECFC4]">
          
          {/* Column 1: Brand & Manifesto (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold tracking-[0.2em] text-[#302321]">
                {brandConfig.name}
              </span>
              <span className="text-[10px] tracking-[0.35em] font-medium text-[#B65C70] uppercase">
                {brandConfig.descriptor}
              </span>
            </div>

            <p className="text-sm text-[#5C4D4A] font-light leading-relaxed max-w-sm">
              An independent luxury nail studio dedicated to mindful care, haute couture designs, and enduring nail wellness. Your nails, your signature.
            </p>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-3">
              {brandConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-[#F8F5F0] hover:bg-[#B65C70] hover:text-white text-[#302321] flex items-center justify-center text-xs font-semibold tracking-wider transition-colors border border-[#E2D8CF]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore Navigation (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-medium text-[#302321] tracking-wider uppercase text-xs">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {exploreLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#5C4D4A] hover:text-[#B65C70] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-medium text-[#302321] tracking-wider uppercase text-xs">
              Contact Atelier
            </h4>
            <div className="space-y-3 text-sm text-[#5C4D4A]">
              <a
                href={`tel:${brandConfig.contact.phoneFormatted}`}
                className="flex items-start gap-2.5 hover:text-[#B65C70] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B65C70] flex-shrink-0 mt-0.5" />
                <span>{brandConfig.contact.phone}</span>
              </a>

              <a
                href={`mailto:${brandConfig.contact.email}`}
                className="flex items-start gap-2.5 hover:text-[#B65C70] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B65C70] flex-shrink-0 mt-0.5" />
                <span>{brandConfig.contact.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B65C70] flex-shrink-0 mt-0.5" />
                <span>{brandConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Studio Open Hours (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-medium text-[#302321] tracking-wider uppercase text-xs">
              Open Hours
            </h4>
            <div className="space-y-2 text-xs text-[#5C4D4A]">
              {brandConfig.hours.map((h, i) => (
                <div key={i}>
                  <div className="font-medium text-[#302321]">{h.days}</div>
                  <div className="text-[#73635E]">{h.time}</div>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-4 block w-full py-2.5 px-4 bg-[#B65C70] hover:bg-[#A04E61] text-white text-[11px] font-medium tracking-[0.2em] uppercase rounded-full transition-all text-center cursor-pointer"
            >
              BOOK NOW
            </button>
          </div>

        </div>

        {/* Copyright & Back to Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73635E]">
          <div>
            &copy; {currentYear} {brandConfig.fullName}. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#302321] hover:text-[#B65C70] transition-colors font-medium cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
