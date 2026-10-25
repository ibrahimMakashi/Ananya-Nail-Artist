import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { StudioFeature } from './components/StudioFeature';
import { DiscountSection } from './components/DiscountSection';
import { TeamSection } from './components/TeamSection';
import { NailGallery } from './components/NailGallery';
import { ContactSection } from './components/ContactSection';
import { DarkPromoSection } from './components/DarkPromoSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { OversizedWordmark } from './components/OversizedWordmark';
import { BookingModal } from './components/BookingModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [promoCode, setPromoCode] = useState('');

  // Mobile navigation drawer state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handlers
  const handleOpenBooking = (serviceName = '', promo = '') => {
    setSelectedService(serviceName);
    setPromoCode(promo);
    setIsBookingOpen(true);
  };

  const handleSelectServiceFromCard = (service) => {
    handleOpenBooking(service.title);
  };

  const handleClaimDiscount = () => {
    handleOpenBooking('', 'SHINE40');
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#302321] selection:bg-[#E8C8C7] selection:text-[#302321] font-sans">
      
      {/* 1. Thin Top Announcement Bar */}
      <AnnouncementBar onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Sticky Elegant Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        
        {/* Section 2: Split Luxury Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Section 3: About the Studio */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 4: Nail Services Grid */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* Section 5: Studio Feature / Why Choose Us */}
        <StudioFeature />

        {/* Section 6: 40% Promotional Wave Section */}
        <DiscountSection onOpenBooking={handleClaimDiscount} />

        {/* Section 7: Meet the Team */}
        <TeamSection />

        {/* Section 8: Nail Art Gallery & Lightbox */}
        <NailGallery />

        {/* Section 9: Contact & Appointment Booking Form */}
        <ContactSection selectedServiceId={selectedService} />

        {/* Section 10: Dark Promotional / Nourish Your Nails Section */}
        <DarkPromoSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 11: Client Testimonials Carousel */}
        <TestimonialsSection />

        {/* Section 12: FAQ Accordion */}
        <FAQSection />

      </main>

      {/* Section 13: Main Multi-Column Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Final Section 14: Oversized ANANYA Finishing Wordmark */}
      <OversizedWordmark />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        promoCode={promoCode}
      />

      {/* Back to top floating button */}
      <BackToTop />

    </div>
  );
}
