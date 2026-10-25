import React, { useState, useEffect, useCallback, useRef } from 'react';

// Palette colors for luxury nail sparkles
const SPARKLE_COLORS = [
  '#B65C70', // Dusty Rose
  '#E8C8C7', // Blush Pink
  '#F4DFB8', // Champagne Gold
  '#F8F5F0', // Warm Ivory
  '#D99BA8', // Rose Shimmer
];

const SHAPES = ['diamond', 'twinkle', 'dot', 'plus'];

/**
 * Sparkle particle SVG renderer
 */
function SparkleShape({ shape, color, size }) {
  if (shape === 'diamond') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className="drop-shadow-[0_0_4px_rgba(232,200,199,0.8)]"
      >
        <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
      </svg>
    );
  }

  if (shape === 'twinkle') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className="drop-shadow-[0_0_4px_rgba(244,223,184,0.9)]"
      >
        <path d="M12 0 L13.8 8.2 L22 12 L13.8 15.8 L12 24 L10.2 15.8 L2 12 L10.2 8.2 Z" />
        <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  if (shape === 'plus') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill={color}
        className="drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]"
      >
        <path d="M6.5 1h3v14h-3z" />
        <path d="M1 6.5h14v3H1z" />
      </svg>
    );
  }

  // Dot / glitter circle
  return (
    <svg
      width={size * 0.7}
      height={size * 0.7}
      viewBox="0 0 10 10"
      fill={color}
      className="drop-shadow-[0_0_3px_rgba(232,200,199,0.9)]"
    >
      <circle cx="5" cy="5" r="4.5" />
    </svg>
  );
}

/**
 * SparkleClickEffect component
 * Renders an ethereal sparkle burst around click/tap coordinates.
 * Completely safe for underlying clicks (pointer-events: none, passive listener).
 */
export function SparkleClickEffect() {
  const [bursts, setBursts] = useState([]);
  const lastTouchTime = useRef(0);

  const createBurst = useCallback((x, y, isTouch = false) => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const burstId = Date.now() + '-' + Math.random().toString(36).substring(2, 7);
    const particleCount = isTouch ? 6 : 9;
    const maxRadius = isTouch ? 26 : 38;

    const particles = Array.from({ length: particleCount }).map((_, i) => {
      // Golden angle distribution for natural spread
      const angle = (i * (Math.PI * 2) / particleCount) + (Math.random() * 0.4 - 0.2);
      const distance = 14 + Math.random() * (maxRadius - 14);
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const size = 9 + Math.floor(Math.random() * 8);
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
      const rotation = -60 + Math.random() * 120;
      const duration = 0.5 + Math.random() * 0.25;

      return {
        id: i,
        dx: `${dx.toFixed(1)}px`,
        dy: `${dy.toFixed(1)}px`,
        size,
        shape,
        color,
        rotation: `${rotation.toFixed(0)}deg`,
        duration: `${duration.toFixed(2)}s`,
      };
    });

    const newBurst = {
      id: burstId,
      x,
      y,
      particles,
    };

    setBursts((prev) => [...prev, newBurst]);

    // Automatically remove burst after animation duration to prevent DOM growth
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 850);
  }, []);

  useEffect(() => {
    // Pointerdown handles both touch and mouse without blocking actions
    const handlePointerDown = (e) => {
      if (e.pointerType === 'touch') {
        lastTouchTime.current = Date.now();
        createBurst(e.clientX, e.clientY, true);
      } else if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
        // Prevent duplicate firing if a touch was recently processed
        if (Date.now() - lastTouchTime.current > 500) {
          createBurst(e.clientX, e.clientY, false);
        }
      }
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [createBurst]);

  if (bursts.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[99998] overflow-hidden"
    >
      {bursts.map((burst) => (
        <div
          key={burst.id}
          style={{
            position: 'absolute',
            left: `${burst.x}px`,
            top: `${burst.y}px`,
            width: 0,
            height: 0,
            pointerEvents: 'none',
          }}
        >
          {burst.particles.map((p) => (
            <div
              key={p.id}
              className="absolute select-none pointer-events-none animate-sparkle-burst"
              style={{
                '--dx': p.dx,
                '--dy': p.dy,
                '--rot': p.rotation,
                animationDuration: p.duration,
                willChange: 'transform, opacity',
              }}
            >
              <SparkleShape shape={p.shape} color={p.color} size={p.size} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
