import React from 'react';

interface HeroVisualStageProps {
  className?: string;
}

export const HeroVisualStage: React.FC<HeroVisualStageProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full aspect-[1000/690] max-h-[920px] select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. BACKGROUND FLOATING CARDS (Enlarged & Prominent) */}

      {/* Card 1: Rendimiento (97/100 PageSpeed) - Top Left */}
      <div
        className="absolute z-[8] transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 origin-center hero-float-a"
        style={{
          left: '-1.0%',
          top: '-6.0%',
          width: '33.0%',
        }}
      >
        <picture>
          <source type="image/webp" srcSet="/hero-page/card-rendimiento-tight.webp" />
          <img
            src="/hero-page/card-rendimiento.png"
            alt="Métrica de rendimiento web 97 sobre 100 en PageSpeed Insights"
            className="w-full h-auto object-contain drop-shadow-lg"
            loading="eager"
            decoding="async"
            width={520}
            height={392}
          />
        </picture>
      </div>

      {/* Card 2: Tráfico Orgánico (+284% Google Search) - Top Center */}
      <div
        className="absolute z-[8] transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 origin-center hero-float-b"
        style={{
          left: '33.5%',
          top: '-12.5%',
          width: '37.5%',
        }}
      >
        <picture>
          <source type="image/webp" srcSet="/hero-page/card-trafico-tight.webp" />
          <img
            src="/hero-page/card-trafico.png"
            alt="Gráfica de crecimiento en tráfico orgánico de Google en un 284 por ciento"
            className="w-full h-auto object-contain drop-shadow-lg"
            loading="eager"
            decoding="async"
            width={540}
            height={255}
          />
        </picture>
      </div>

      {/* Card 3: SEO LOCAL (Google Maps & Tu Negocio 4.8) - Top Right */}
      <div
        className="absolute z-[8] transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 origin-center hero-float-c"
        style={{
          left: '74.0%',
          top: '-13.5%',
          width: '31.5%',
        }}
      >
        <picture>
          <source type="image/webp" srcSet="/hero-page/card-seo-local-tight.webp" />
          <img
            src="/hero-page/card-seo-local.png"
            alt="SEO Local y visibilidad destacada en Google Maps con reseñas 4.8 estrellas"
            className="w-full h-auto object-contain drop-shadow-lg"
            loading="eager"
            decoding="async"
            width={500}
            height={369}
          />
        </picture>
      </div>

      {/* Badge 2: +156% Más conversiones (Bottom Right) */}
      <div
        className="absolute z-[15] transition-all duration-300 hover:scale-[1.05] hover:-translate-y-2 origin-center hero-float-a"
        style={{
          left: '75.0%',
          top: '69.0%',
          width: '30.0%',
        }}
      >
        <picture>
          <source type="image/webp" srcSet="/hero-page/badge-conversiones-tight.webp" />
          <img
            src="/hero-page/badge-conversiones.png"
            alt="Métrica de más del 156 por ciento en tasa de conversión web"
            className="w-full h-auto object-contain drop-shadow-lg"
            loading="lazy"
            decoding="async"
            width={460}
            height={170}
          />
        </picture>
      </div>

      {/* 2. CENTRAL HARDWARE DEVICES (Monumental Scale) */}

      {/* Central Laptop Mockup */}
      <div
        className="absolute z-[10] transition-transform duration-500 origin-bottom-right select-none pointer-events-none"
        style={{
          left: '-5.0%',
          top: '19.0%',
          width: '102.0%',
        }}
      >
        <picture>
          <source type="image/webp" srcSet="/laptop-hero-page.webp" />
          <img
            src="/laptop-hero-page.png"
            alt="Mockup de computador portátil mostrando diseño web y posicionamiento en Google en Cali — JP Studios"
            className="w-full h-auto object-contain object-right-bottom drop-shadow-2xl select-none"
            loading="eager"
            decoding="async"
            width={1200}
            height={800}
          />
        </picture>
      </div>

      {/* Foreground Smartphone Mockup (Overlapping Laptop Keyboard on the Left) */}
      <div
        className="absolute z-[25] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 origin-bottom select-none"
        style={{
          left: '-0.5%',
          top: '41.0%',
          width: '28.5%',
        }}
      >
        <picture>
          <source type="image/webp" srcSet="/celular-hero-page.webp" />
          <img
            src="/celular-hero-page.png"
            alt="Mockup de celular mostrando diseño web responsivo en Cali — JP Studios"
            className="w-full h-auto object-contain object-bottom drop-shadow-2xl select-none"
            loading="eager"
            decoding="async"
            width={512}
            height={768}
          />
        </picture>
      </div>
    </div>
  );
};

export default HeroVisualStage;
