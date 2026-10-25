import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/gallery';
import { SectionHeading } from './SectionHeading';
import { LightboxModal } from './LightboxModal';
import { Maximize2, Sparkles } from 'lucide-react';

export function NailGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const categories = [
    'All',
    'French & Nude',
    'Glazed & Chrome',
    'Couture Art',
    'Pastel & Floral',
    'Gel Extensions',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setActivePhotoIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActivePhotoIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="gallery"
      aria-label="Nail Art Gallery Portfolio"
      className="bg-[#F8F5F0] py-20 md:py-28 lg:py-32 border-t border-[#E8DFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR PORTFOLIO"
          title="Our Nail Art Gallery"
          subtitle="A curated moodboard of our latest studio creations, runway styles, and everyday couture sets."
          centered={true}
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[#B65C70] text-white shadow-sm'
                  : 'bg-[#F2ECE5] text-[#5C4D4A] hover:bg-[#E8DFC] hover:text-[#302321]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dense Asymmetric Tiled Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px]"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              // Create dynamic editorial spans to match the reference look
              const isTall = index % 5 === 0 || index % 7 === 0;
              const rowSpanClass = isTall ? 'row-span-2' : 'row-span-1';

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative rounded-2xl overflow-hidden bg-[#F2ECE5] border border-[#E8DFC] shadow-sm hover:shadow-xl cursor-pointer ${rowSpanClass}`}
                  onClick={() => handleOpenLightbox(index)}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Editorial Meta */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/85 via-[#171513]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                    <div className="flex justify-end">
                      <span className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-[#E8C8C7]">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-lg leading-snug text-white mt-0.5">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center text-xs text-[#73635E]">
          <span>Inspired by a design? Save it and bring it to your atelier appointment.</span>
        </div>

      </div>

      {/* Lightbox Modal Component */}
      <LightboxModal
        isOpen={lightboxOpen}
        currentIndex={activePhotoIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
