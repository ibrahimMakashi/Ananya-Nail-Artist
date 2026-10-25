import React, { useState, useEffect } from 'react';
import { Menu, Calendar, Phone } from 'lucide-react';
import { brandConfig } from '../data/brandConfig';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function Navbar({ onOpenBooking, onToggleMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'EXPERIENCE', href: '#features' },
    { label: 'PORTFOLIO', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFC] py-3.5'
          : 'bg-[#F8F5F0] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B65C70] rounded-sm"
          aria-label="ANANYA NAIL ATELIER Home"
        >
          <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.18em] text-[#302321] group-hover:text-[#B65C70] transition-colors leading-none">
            {brandConfig.name}
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.32em] font-medium text-[#B65C70] mt-0.5 uppercase">
            {brandConfig.descriptor}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center space-x-7 xl:space-x-9"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-medium tracking-[0.2em] text-[#302321] hover:text-[#B65C70] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B65C70] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B65C70] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`tel:${brandConfig.contact.phoneFormatted}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#5C4D4A] hover:text-[#B65C70] tracking-wider transition-colors mr-2"
            title="Call Atelier"
          >
            <Phone className="w-3.5 h-3.5 text-[#B65C70]" />
            <span className="text-[11px] font-medium">{brandConfig.contact.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#B65C70] hover:bg-[#A04E61] active:scale-[0.98] text-white text-[11px] tracking-[0.22em] font-medium uppercase rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B65C70] focus-visible:ring-offset-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK YOUR VISIT</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={onToggleMobileMenu}
            aria-label="Open mobile navigation"
            className="lg:hidden p-2 text-[#302321] hover:text-[#B65C70] hover:bg-[#F2ECE5] rounded-lg transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Subtle Scroll Progress Indicator */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#B65C70]/70 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
