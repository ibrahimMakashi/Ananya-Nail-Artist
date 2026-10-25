import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomNailCursor
 * Renders an elegant glossy blush-pink almond nail cursor for desktop users.
 * Automatically disabled on touch devices.
 */
export function CustomNailCursor() {
  const cursorRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices with hover capability and fine pointer (desktop mice/trackpads)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add('custom-nail-cursor-active');

    // Smooth position interpolation via requestAnimationFrame
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animFrameId;

    const render = () => {
      // Gentle smoothing factor for natural fluid motion without perceptible lag
      const factor = 0.42;
      currentX += (mouseX - currentX) * factor;
      currentY += (mouseY - currentY) * factor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if hovering an interactive element
      const target = e.target;
      if (target && target.closest) {
        const interactive = target.closest(
          'a, button, input, select, textarea, [role="button"], [role="link"], label, .cursor-pointer, [data-interactive="true"]'
        );
        setIsHoveringInteractive(Boolean(interactive));
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHoveringInteractive(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animFrameId);
      document.documentElement.classList.remove('custom-nail-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform select-none"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.25s ease-out',
      }}
    >
      {/* 
        The nail's tapered almond tip is at (16px, 2px).
        Transform origin is set to (16px, 2px) with -16px, -2px offset
        so the apex lands precisely at the pointer click hotspot (0, 0).
      */}
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transformOrigin: '16px 2px',
          transform: `
            translate(-16px, -2px)
            rotate(${isHoveringInteractive ? '-16deg' : '-24deg'})
            scale(${isClicking ? 0.86 : isHoveringInteractive ? 1.14 : 1})
          `,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 40"
          width="26"
          height="32.5"
          className="filter drop-shadow-[0_2px_4px_rgba(48,35,33,0.22)]"
        >
          <defs>
            {/* Base Nail Polish Gradient: Soft Blush to Rich Dusty Rose */}
            <linearGradient id="nailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDF4F2" />
              <stop offset="35%" stopColor="#E8C8C7" />
              <stop offset="75%" stopColor="#C97A8B" />
              <stop offset="100%" stopColor="#9E475A" />
            </linearGradient>

            {/* High-Gloss Specular Shine Gradient */}
            <linearGradient id="nailGloss" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Cuticle crescent highlight */}
            <radialGradient id="lunulaShine" cx="50%" cy="100%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Almond Nail Silhouette */}
          <path
            d="M 16 2 C 10 9, 6 22, 7 32 C 8 37, 24 37, 25 32 C 26 22, 22 9, 16 2 Z"
            fill="url(#nailGradient)"
            stroke="#8C3B4E"
            strokeWidth="0.85"
            strokeOpacity="0.75"
          />

          {/* Natural Cuticle Base Shadow (Lunula) */}
          <path
            d="M 10 32 C 12 30, 20 30, 22 32 C 24 35, 8 35, 10 32 Z"
            fill="url(#lunulaShine)"
          />

          {/* Curved High-Gloss Specular Reflection */}
          <path
            d="M 15 5 C 11.5 11, 9 20, 10 28 C 11 28.5, 12 28.2, 12.3 27 C 11.5 20, 13 12, 16 6 Z"
            fill="url(#nailGloss)"
          />

          {/* Delicate Top Apex Gloss Dot */}
          <circle cx="16" cy="4" r="0.9" fill="#FFFFFF" fillOpacity="0.9" />

          {/* Click Gleam Flare */}
          {isClicking && (
            <circle
              cx="16"
              cy="2"
              r="2.5"
              fill="#FFFFFF"
              className="animate-ping opacity-75"
            />
          )}
        </svg>
      </div>
    </div>
  );
}
