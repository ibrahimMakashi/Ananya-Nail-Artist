import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { brandConfig } from '../data/brandConfig';

export function MobileMenu({ isOpen, onClose, onOpenBooking }) {
  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Atelier', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Why Choose Us', href: '#features' },
    { label: 'Team', href: '#team' },
    { label: 'Art Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#171513]/70 backdrop-blur-sm z-50 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.nav
            aria-label="Mobile Navigation"
            role="dialog"
            aria-modal="true"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F8F5F0] z-50 flex flex-col justify-between p-6 sm:p-8 shadow-2xl border-l border-[#E2D8CF] overflow-y-auto lg:hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E2D8CF]">
                <a href="#hero" onClick={onClose} className="flex flex-col">
                  <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#302321]">
                    {brandConfig.name}
                  </span>
                  <span className="text-[9px] tracking-[0.3em] font-medium text-[#B65C70] -mt-1 uppercase">
                    {brandConfig.descriptor}
                  </span>
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 text-[#302321] hover:text-[#B65C70] hover:bg-[#F2ECE5] rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <ul className="flex flex-col gap-1 py-6">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block py-2.5 px-3 rounded-lg text-lg font-serif text-[#302321] hover:text-[#B65C70] hover:bg-[#F2ECE5] transition-all"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom actions & info */}
            <div className="pt-6 border-t border-[#E2D8CF] space-y-5">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-6 bg-[#B65C70] hover:bg-[#A04E61] text-white font-medium text-xs tracking-[0.2em] uppercase rounded-full shadow-md transition-all text-center cursor-pointer"
              >
                BOOK YOUR VISIT
              </button>

              <div className="space-y-2 text-xs text-[#5C4D4A]">
                <a
                  href={`tel:${brandConfig.contact.phoneFormatted}`}
                  className="flex items-center gap-2 hover:text-[#B65C70] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B65C70]" />
                  <span>{brandConfig.contact.phone}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B65C70] flex-shrink-0" />
                  <span className="truncate">{brandConfig.contact.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#302321]">
                {brandConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium tracking-wider text-[#73635E] hover:text-[#B65C70] transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
