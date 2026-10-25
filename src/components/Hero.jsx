import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Play, Pause, Eye } from 'lucide-react';
import { brandConfig } from '../data/brandConfig';

export function Hero({ onOpenBooking }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVividMode, setIsVividMode] = useState(true);

  // Guarantee continuous autoplay with proper muted attributes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Autoplay waiting for user gesture:', err);
            // Autoplay blocked by browser policy: play on first user interaction
            const handleFirstGesture = () => {
              video.play().then(() => setIsPlaying(true)).catch(() => {});
              window.removeEventListener('click', handleFirstGesture);
              window.removeEventListener('touchstart', handleFirstGesture);
              window.removeEventListener('scroll', handleFirstGesture);
            };
            window.addEventListener('click', handleFirstGesture, { once: true });
            window.addEventListener('touchstart', handleFirstGesture, { once: true });
            window.addEventListener('scroll', handleFirstGesture, { once: true });
          });
      }
    };

    startPlayback();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="hero"
      aria-label="Welcome Hero"
      className="relative overflow-hidden bg-[#F8F5F0] pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-18 lg:pb-28 min-h-[640px] flex flex-col justify-center"
    >
      {/* 
        CINEMATIC HERO VIDEO BACKGROUND
        Macro close-up video of nail technician applying vibrant berry-rose polish to client's nails.
        The nails, manicured fingers, and brushwork are prominently in focus and clearly visible.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          src="/videos/hero-nail-background.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-nail-poster.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.02] transition-opacity duration-700 ${
            isVividMode ? 'opacity-80 md:opacity-75' : 'opacity-45'
          }`}
        >
          <source src="/videos/hero-nail-background.mp4" type="video/mp4" />
        </video>

        {/* 
          Soft selective scrim:
          Provides high text contrast on the left while leaving the video
          in clear, vibrant view across the center and right.
        */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isVividMode
              ? 'bg-gradient-to-r from-[#F8F5F0]/85 via-[#F8F5F0]/35 to-transparent'
              : 'bg-gradient-to-r from-[#F8F5F0]/92 via-[#F8F5F0]/60 to-[#F8F5F0]/30'
          }`}
          aria-hidden="true"
        />

        {/* Subtle top & bottom edge blending */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#F8F5F0]/30 via-transparent to-[#F8F5F0]/70"
          aria-hidden="true"
        />
      </div>

      {/* Subtle background ambient blush glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E8C8C7]/20 rounded-full blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy with soft glass backing */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 bg-[#F8F5F0]/80 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-[#DECFC4]/50 shadow-xs">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#F2ECE5]/95 backdrop-blur-md border border-[#E2D8CF] shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B65C70]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#302321] uppercase">
                {brandConfig.hero.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-normal tracking-tight text-[#302321] leading-[1.08] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                Our Awesome <br />
                <span className="relative inline-block italic font-light text-[#B65C70]">
                  Nail studio
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full h-2 text-[#E8C8C7]/60 -z-10"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 15 Q 50 0, 100 15"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#4A3B38] font-normal leading-relaxed max-w-xl"
            >
              {brandConfig.hero.paragraph}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#B65C70] hover:bg-[#A04E61] active:scale-[0.98] text-white text-xs tracking-[0.22em] font-medium uppercase rounded-full shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
              >
                <span>{brandConfig.hero.primaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/90 backdrop-blur-sm hover:bg-white text-[#302321] border border-[#302321]/30 hover:border-[#302321] text-xs tracking-[0.22em] font-medium uppercase rounded-full shadow-xs transition-all text-center cursor-pointer"
              >
                <span>{brandConfig.hero.secondaryCta}</span>
              </button>
            </motion.div>

            {/* Trust Micro-Badge & Video Mood Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 pt-6 border-t border-[#DECFC4] flex flex-wrap items-center justify-between gap-4 text-xs text-[#73635E]"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-medium text-[#4A3B38]">
                  <Heart className="w-3.5 h-3.5 text-[#B65C70]" />
                  <span>100% Non-Toxic Japanese Gels</span>
                </div>
                <div className="hidden sm:block text-[#D8CCC3]">•</div>
                <div className="hidden sm:inline">Sterilized Medical-Grade Tools</div>
              </div>

              {/* Video Controls Pill */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#DECFC4] text-[10px] tracking-wider uppercase font-medium text-[#302321] hover:text-[#B65C70] hover:bg-white shadow-xs transition-all cursor-pointer"
                  title={isPlaying ? 'Pause background video' : 'Play background video'}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-2.5 h-2.5 text-[#B65C70]" />
                      <span>Motion: On</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-2.5 h-2.5 text-[#B65C70]" />
                      <span>Motion: Paused</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsVividMode(!isVividMode)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#DECFC4] text-[10px] tracking-wider uppercase font-medium text-[#73635E] hover:text-[#302321] hover:bg-white shadow-xs transition-all cursor-pointer"
                  title="Toggle video visibility mode"
                >
                  <Eye className="w-2.5 h-2.5 text-[#B65C70]" />
                  <span>{isVividMode ? 'Vivid' : 'Subtle'}</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Layered Editorial Photo Composition */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative max-w-lg mx-auto sm:max-w-none flex items-center justify-center lg:justify-end">
              
              {/* Image 1: Oblong Arched Pill - Hand with Polish Bottle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
                className="relative z-10 w-[45%] sm:w-[220px] md:w-[250px] aspect-[9/15] rounded-full overflow-hidden shadow-2xl border-4 border-[#F8F5F0] -mr-8 sm:-mr-12 -mt-6 hover:scale-[1.02] transition-transform duration-500 bg-[#F2ECE5]"
              >
                <img
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80"
                  alt="Close up of manicured hand holding luxury nail polish bottle"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#302321]/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Image 2: Tall Arched Frame - Beauty Model with Manicure */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
                className="relative z-20 w-[58%] sm:w-[270px] md:w-[310px] aspect-[9/14] rounded-t-full rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-[#F8F5F0] hover:scale-[1.02] transition-transform duration-500 bg-[#F2ECE5]"
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="Elegant portrait of model showcasing immaculate manicured nails"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#302321]/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Atelier Stamp */}
              <motion.div
                initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                animate={{ opacity: 1, rotate: -6, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="absolute -bottom-4 right-4 sm:right-10 z-30 bg-[#F8F5F0]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#E2D8CF] text-center"
              >
                <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#B65C70]">
                  Atelier Pure
                </div>
                <div className="font-serif text-sm font-semibold text-[#302321]">
                  Signature Art
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
