import React from 'react';
import { motion } from 'framer-motion';

export function OversizedWordmark() {
  return (
    <section
      aria-label="Atelier Signature Wordmark"
      className="relative bg-[#F8F5F0] overflow-hidden pt-4 pb-8 sm:pb-12 text-center select-none border-t border-[#E8DFC]"
    >
      <div className="max-w-[100vw] px-2 sm:px-4 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif font-light text-[#302321] tracking-[0.14em] sm:tracking-[0.18em] uppercase transition-all duration-300 leading-none"
          style={{
            fontSize: 'clamp(3.8rem, 16vw, 17rem)',
          }}
        >
          ANANYA
        </motion.h2>
      </div>
    </section>
  );
}
