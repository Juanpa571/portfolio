import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, type SpringOptions } from 'framer-motion';

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export const HeroPhoneMockup: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });
  const [lastY, setLastY] = useState(0);

  const rotateAmplitude = 12;

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left + 15);
    y.set(e.clientY - rect.top + 15);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(1.08);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] flex items-center justify-end select-none cursor-pointer [perspective:1000px] group"
    >
      {/* Background Layer: City Atmosphere (100% static) */}
      <div className="relative w-[88%] sm:w-[90%] aspect-square rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-black/[0.08] ml-auto">
        <picture className="w-full h-full block">
          <source type="image/webp" srcSet="/cali-posicionamiento-local-fondo.webp" />
          <img
            src="/cali-posicionamiento-local-fondo.png"
            alt="Panorámica urbana de Cali y entorno comercial para posicionamiento SEO local y Google Maps"
            className="w-full h-full object-cover object-center pointer-events-none"
            draggable={false}
            loading="eager"
            width={1536}
            height={1024}
          />
        </picture>
        {/* Subtle edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Foreground Layer: Interactive 3D Tilted Phone Mockup using framer-motion */}
      <div className="absolute -left-3 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 w-[78%] sm:w-[80%] z-20 pointer-events-none">
        <motion.div
          className="relative w-full h-auto [transform-style:preserve-3d]"
          style={{
            rotateX,
            rotateY,
            scale,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Dedicated Ambient Depth Shadow (prevents browser from rasterizing and blurring the image) */}
          <div
            className="absolute inset-x-6 top-8 bottom-4 rounded-[42px] bg-black/30 blur-2xl -z-10 pointer-events-none transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Razor-sharp Phone Mockup Image */}
          <picture className="w-full h-auto block">
            <source type="image/webp" srcSet="/google-maps-posicionamiento-cali-phone.webp" />
            <img
              src="/google-maps-posicionamiento-cali-phone.png"
              alt="Mockup de celular mostrando el primer lugar en Google Maps en Cali para Hábitat Clínica Veterinaria"
              className="w-full h-auto object-contain block pointer-events-none [image-rendering:-webkit-optimize-contrast]"
              draggable={false}
              loading="eager"
              width={1024}
              height={1536}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            />
          </picture>

          {/* Floating Metric Badge in genuine 3D space with translateZ depth */}
          <div
            className="absolute -bottom-3 sm:-bottom-5 right-1 sm:right-0 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-black/[0.06] flex flex-col gap-1.5 sm:gap-2 min-w-[155px] sm:min-w-[170px] pointer-events-none [transform:translateZ(35px)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] sm:text-xs font-semibold text-[#111111]">Más clientes locales</span>
              <span className="text-emerald-500 font-bold text-xs sm:text-sm">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </span>
            </div>
            <div className="flex flex-col gap-1 text-[10px] sm:text-[11px] text-black/75">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold text-xs">✓</span>
                <span>Visibilidad</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold text-xs">✓</span>
                <span>Llamados</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold text-xs">✓</span>
                <span className="text-[#00a854]">Ventas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Tooltip following the cursor (from TiltedCard spec) */}
      <motion.figcaption
        className="pointer-events-none absolute left-0 top-0 rounded-full bg-[#141517]/95 text-white backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-sans shadow-xl opacity-0 z-40 hidden sm:flex items-center gap-1.5 whitespace-nowrap"
        style={{
          x,
          y,
          opacity,
          rotate: rotateFigcaption
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A] animate-pulse" />
        <span>Top 1 en <span className="text-[#174ea6]">Google</span> Maps</span>
      </motion.figcaption>
    </div>
  );
};
