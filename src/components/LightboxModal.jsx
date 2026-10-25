import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export function LightboxModal({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}) {
  const currentItem = items[currentIndex];

  // Prevent background scrolling while open
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

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Nail Art Lightbox"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#171513]/90 backdrop-blur-md"
        />

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black text-white hover:text-[#E8C8C7] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={onPrev}
            aria-label="Previous image"
            className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 max-h-[75vh] flex items-center justify-center">
            <img
              src={currentItem.image}
              alt={currentItem.alt}
              className="max-h-[75vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Caption Bar */}
          <div className="w-full mt-4 flex items-center justify-between text-white text-xs sm:text-sm px-2">
            <div>
              <span className="font-serif text-lg sm:text-xl text-[#F8F5F0]">
                {currentItem.title}
              </span>
              <span className="ml-3 text-[11px] text-[#E8C8C7] uppercase tracking-widest font-medium">
                • {currentItem.category}
              </span>
            </div>
            <div className="text-white/60 text-xs">
              {currentIndex + 1} / {items.length}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
