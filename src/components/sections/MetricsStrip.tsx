import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export const MetricsStrip: React.FC = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Telemetry technical labels for the top bar of each card
  const telemetryTags = useMemo(() => {
    return language === 'en'
      ? ['Lighthouse 4G', 'Payload Assets', 'Zero-Trust Edge', 'Schema Graph', 'Accessibility']
      : ['Lighthouse 4G', 'Carga Optimizada', 'Zero-Trust Edge', 'Schema Graph', 'Accesibilidad'];
  }, [language]);

  // Duplicate items 4 times (20 items total, 10 per half) to guarantee seamless infinite wrap
  const repeatedItems = useMemo(() => {
    const base = t.metrics.items;
    return [...base, ...base, ...base, ...base];
  }, [t.metrics.items]);

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return;

    let x = 0;
    const baseSpeed = 0.20; // Ultra-calm, slow drift (~12px/sec at 60fps)
    let velocityBoost = 0;
    let isHovered = false;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let isHorizontalSwipe = false;

    // ScrollTrigger to add subtle aerodynamic acceleration when scrolling the page
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const v = self.getVelocity();
        velocityBoost = Math.max(Math.min(v * 0.0005, 1.2), -1.2);
      },
    });

    const updateTicker = () => {
      const el = trackRef.current;
      if (!el) return;

      if (!isHovered && !isDragging) {
        // Inertial damping of scroll velocity boost
        velocityBoost *= 0.88;
        x -= baseSpeed + (velocityBoost >= 0 ? velocityBoost * 0.35 : velocityBoost * 0.2);
      }

      const halfWidth = el.scrollWidth / 2;
      if (halfWidth > 0) {
        if (x <= -halfWidth) x += halfWidth;
        if (x > 0) x -= halfWidth;
        el.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
      }
    };

    gsap.ticker.add(updateTicker);

    const trackEl = trackRef.current;

    // Desktop hover & drag handlers
    const onMouseEnter = () => {
      isHovered = true;
    };
    const onMouseLeave = () => {
      isHovered = false;
      isDragging = false;
    };
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      startX = e.clientX;
      x += dx;
      if (trackEl) {
        const halfWidth = trackEl.scrollWidth / 2;
        if (halfWidth > 0) {
          if (x <= -halfWidth) x += halfWidth;
          if (x > 0) x -= halfWidth;
          trackEl.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
        }
      }
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    // Mobile touch handlers with intelligent directional lock
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isHorizontalSwipe = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const dx = currentX - startX;
      const dy = currentY - startY;

      if (!isHorizontalSwipe) {
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 6) {
          isHorizontalSwipe = true;
        } else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 6) {
          isDragging = false;
          return;
        }
      }

      if (isHorizontalSwipe) {
        if (e.cancelable) e.preventDefault();
        startX = currentX;
        x += dx;
        if (trackEl) {
          const halfWidth = trackEl.scrollWidth / 2;
          if (halfWidth > 0) {
            if (x <= -halfWidth) x += halfWidth;
            if (x > 0) x -= halfWidth;
            trackEl.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
          }
        }
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      isHorizontalSwipe = false;
    };

    trackEl.addEventListener('mouseenter', onMouseEnter);
    trackEl.addEventListener('mouseleave', onMouseLeave);
    trackEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    trackEl.addEventListener('touchstart', onTouchStart, { passive: true });
    trackEl.addEventListener('touchmove', onTouchMove, { passive: false });
    trackEl.addEventListener('touchend', onTouchEnd, { passive: true });
    trackEl.addEventListener('touchcancel', onTouchEnd, { passive: true });

    return () => {
      gsap.ticker.remove(updateTicker);
      scrollTrigger.kill();

      trackEl.removeEventListener('mouseenter', onMouseEnter);
      trackEl.removeEventListener('mouseleave', onMouseLeave);
      trackEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      trackEl.removeEventListener('touchstart', onTouchStart);
      trackEl.removeEventListener('touchmove', onTouchMove);
      trackEl.removeEventListener('touchend', onTouchEnd);
      trackEl.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  const formatMetricValue = (val: string) => {
    if (val.includes('/')) {
      const [num, den] = val.split('/');
      return (
        <div className="flex items-baseline font-sans">
          <span className="text-2xl sm:text-[28px] lg:text-[32px] font-light tracking-tight text-neutral-950 leading-none tabular-nums">
            {num}
          </span>
          <span className="text-xs sm:text-sm font-light text-neutral-400 tracking-tight ml-0.5">
            /{den}
          </span>
        </div>
      );
    }
    if (val.includes('KB')) {
      const num = val.replace('KB', '').trim();
      return (
        <div className="flex items-baseline font-sans">
          <span className="text-2xl sm:text-[28px] lg:text-[32px] font-light tracking-tight text-neutral-950 leading-none tabular-nums">
            {num}
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-neutral-400 tracking-normal ml-1 uppercase font-medium">
            KB
          </span>
        </div>
      );
    }
    if (val.includes('%')) {
      const num = val.replace('%', '').trim();
      return (
        <div className="flex items-baseline font-sans">
          <span className="text-2xl sm:text-[28px] lg:text-[32px] font-light tracking-tight text-neutral-950 leading-none tabular-nums">
            {num}
          </span>
          <span className="text-xs sm:text-sm font-light text-neutral-400 tracking-normal ml-0.5">
            %
          </span>
        </div>
      );
    }
    if (val.includes('Brechas') || val.includes('Breaches')) {
      const num = val.split(' ')[0];
      const unit = val.split(' ').slice(1).join(' ');
      return (
        <div className="flex items-baseline font-sans">
          <span className="text-2xl sm:text-[28px] lg:text-[32px] font-light tracking-tight text-neutral-950 leading-none tabular-nums">
            {num}
          </span>
          <span className="text-[11px] sm:text-xs font-light text-neutral-400 tracking-normal ml-1.5">
            {unit}
          </span>
        </div>
      );
    }
    return (
      <div className="text-2xl sm:text-[28px] lg:text-[32px] font-light tracking-tight text-neutral-950 leading-none tabular-nums">
        {val}
      </div>
    );
  };

  const renderHighlightedDesc = (desc: string) => {
    const highlights = [
      '0 ms de bloqueo de CPU',
      '0 ms CPU blocking time',
      '1.8s FCP',
      '3.5 MB de WordPress',
      'WordPress bloat',
      'Cloudflare Edge',
      'ChatGPT, Perplexity y Google',
      'ChatGPT, Perplexity & Google',
      'Schema.org',
      'WCAG AA/AAA'
    ];

    const regex = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
    const parts = desc.split(regex);

    return parts.map((part, i) => {
      if (highlights.includes(part)) {
        return (
          <span key={i} className="text-neutral-950 font-medium">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section
      ref={sectionRef}
      id="metrics"
      aria-label={language === 'en' ? 'Audited Performance Standards' : 'Estándares de Rendimiento Auditados'}
      className="w-full bg-[#fafaf8] border-b border-black/[0.08] relative z-20 py-4 sm:py-6 scroll-mt-14 sm:scroll-mt-20 overflow-hidden select-text"
    >
      {/* Infinite Sliding Belt Ribbon (Compact, Title-Free, Serene Pace) */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[#fafaf8] to-transparent z-10"
          aria-hidden="true"
        />

        {/* Right Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[#fafaf8] to-transparent z-10"
          aria-hidden="true"
        />

        {/* Sliding Belt Track */}
        <div
          ref={trackRef}
          className="flex w-max gap-3 sm:gap-4 py-1.5 px-3 cursor-grab active:cursor-grabbing will-change-transform"
          style={{ willChange: 'transform' }}
        >
          {repeatedItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="w-[200px] sm:w-[230px] lg:w-[255px] shrink-0 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-black/[0.08] shadow-[0_1px_6px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-black/25 hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 relative group/card select-text"
            >
              {/* Top Accent Line on Hover */}
              <div
                className="absolute top-0 left-4 right-4 h-[1.5px] bg-neutral-950 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left"
                aria-hidden="true"
              />

              <div>
                {/* Telemetry Header */}
                <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-black/[0.05]">
                  <span className="font-mono text-[10px] text-neutral-400 font-medium">
                    {String((index % 5) + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
                    {telemetryTags[index % 5]}
                  </span>
                </div>

                {/* Metric Value */}
                <div className="mb-1.5">
                  {formatMetricValue(item.value)}
                </div>

                {/* Metric Title */}
                <h3 className="text-xs sm:text-[13px] font-medium text-neutral-950 tracking-tight mb-1 line-clamp-1">
                  {item.title}
                </h3>
              </div>

              {/* Description Text */}
              <p className="text-[10px] sm:text-[11px] text-neutral-600 font-normal leading-snug m-0 pt-1.5 border-t border-black/[0.04] line-clamp-2">
                {renderHighlightedDesc(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
