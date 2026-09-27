import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface TraitData {
  id: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
}

const MARANATHA_TRAITS: TraitData[] = [
  {
    id: 'catalog-whatsapp',
    titleEs: 'Catálogo directo a WhatsApp con cero comisiones de pasarela',
    titleEn: 'Direct WhatsApp catalog with zero gateway transaction fees',
    descEs:
      'En lugar de carritos de compra engorrosos y pasarelas de pago que descuentan del 3% al 5% por transacción, estructuramos un catálogo ágil donde cada producto genera un mensaje contextual prellenado directamente al WhatsApp de la creadora en un solo toque, cerrando pedidos al instante.',
    descEn:
      'Instead of cumbersome shopping carts and payment gateways taking 3% to 5% fees per transaction, we engineered an agile catalog where each product generates an instant, prefilled order inquiry directly into WhatsApp with a single tap.',
  },
  {
    id: 'mobile-speed',
    titleEs: 'Carga instantánea sub-segundo en redes móviles 4G',
    titleEn: 'Sub-second mobile loading on cellular networks',
    descEs:
      'La papelería creativa depende de galerías y fotografías atractivas. Convertimos todos los recursos visuales a WebP ligero e implementamos carga diferida (lazy loading), permitiendo que la web completa responda en menos de un segundo en celulares sin consumir datos excesivos.',
    descEn:
      'Creative stationery relies on heavy photography galleries. We converted all visual assets into lightweight WebP and implemented responsive lazy loading, enabling the entire catalog to load in under a second on mobile phones without data bloat.',
  },
  {
    id: 'geo-seo',
    titleEs: 'SEO local en Cali y preparación para motores de IA (AEO)',
    titleEn: 'Local Cali SEO and AI search engine discovery (AEO)',
    descEs:
      'Optimizamos la plataforma para búsquedas locales con alta intención de compra en Cali ("stickers personalizados cali", "cajas temáticas cali"), integrando marcado Schema.org LocalBusiness, catálogos en JSON y manifiestos de IA (llms.txt) para que Google Maps y ChatGPT citen al taller como referente.',
    descEn:
      'Optimized for high-intent commercial searches in Cali ("stickers personalizados cali", "cajas temáticas cali"), integrating LocalBusiness Schema.org data, JSON catalogs, and AI manifests (llms.txt) so Google Maps and ChatGPT cite Maranatha as the top local reference.',
  },
  {
    id: 'art-direction',
    titleEs: 'Diseño de autor con estética de taller artesanal',
    titleEn: 'Bespoke art direction with artisan workshop craft',
    descEs:
      'Rompimos con las plantillas predecibles de Shopify o WordPress. Creamos una dirección visual propia inspirada en un taller físico (notas adhesivas, paleta lila institucional, tipografía editorial y micro-interacciones suaves) que transmite calidez humana y justifica tarifas prémium.',
    descEn:
      'Broke away from generic e-commerce templates. Crafted a distinct visual narrative inspired by a real creative workshop (sticky notes, signature lilac palette, editorial typography, and tactile motion) that projects artisan warmth and commands premium prices.',
  },
];

const GENERIC_TRAITS: TraitData[] = [
  {
    id: 'performance',
    titleEs: 'Carga instantánea sub-segundo',
    titleEn: 'Sub-second instant loading',
    descEs:
      'El 53% de los usuarios en teléfonos móviles abandonan un sitio si tarda más de tres segundos en responder. Al compilar a código puro desplegado en la red edge de Cloudflare, la página responde en milisegundos sin pantallas blancas de carga, capturando a clientes que la competencia pierde.',
    descEn:
      'Over 53% of mobile visitors leave a site that takes longer than three seconds to open. Deployed directly to Cloudflare edge network, this architecture responds in milliseconds with zero blank loading states, capturing prospects competitors lose.',
  },
  {
    id: 'usability',
    titleEs: 'Triaje de decisión en un toque',
    titleEn: 'One-tap decision triage',
    descEs:
      'Más del 70% de las decisiones de compra en salud, derecho u hotelería ocurren desde el smartphone. Los accesos prioritarios (llamada directa, dirección en Google Maps y botón de WhatsApp) se ubican bajo el pulgar sin exigir desplazamientos innecesarios.',
    descEn:
      'More than 70% of inquiries in medical, legal, or hospitality practices happen via smartphone. Priority actions (direct call, map directions, WhatsApp chat) sit directly under the thumb without unnecessary scrolling.',
  },
  {
    id: 'authority',
    titleEs: 'Psicología de autoridad visual',
    titleEn: 'Visual brand authority',
    descEs:
      'Los negocios con servicios de alto ticket no pueden verse como una plantilla genérica descuidada. La tipografía editorial sobria y los acabados milimétricos transmiten solvencia técnica instantánea, justificando honorarios prémium frente a alternativas del mercado.',
    descEn:
      'High-ticket practices cannot afford generic template styling. Restrained editorial typography and meticulous finishing establish instant technical authority, justifying premium rates.',
  },
  {
    id: 'conversion',
    titleEs: 'Enrutamiento directo sin fricción',
    titleEn: 'Frictionless direct routing',
    descEs:
      'Eliminamos los formularios de diez campos que casi ningún usuario completa en su teléfono. El prospecto conecta en tres segundos mediante enlaces directos a WhatsApp con mensajes contextuales o llamadas a recepción, reduciendo drásticamente el abandono.',
    descEn:
      'We remove ten-field contact forms that mobile users consistently abandon. Prospects connect in seconds through direct WhatsApp routing with contextual prefilled messages, dramatically cutting drop-off.',
  },
];

interface ConversionTraitsProps {
  projectId?: string;
}

export const ConversionTraits: React.FC<ConversionTraitsProps> = ({ projectId }) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const traits = projectId === 'maranatha' ? MARANATHA_TRAITS : GENERIC_TRAITS;

  return (
    <div className="border-t border-b border-black/[0.08] divide-y divide-black/[0.08]">
      {traits.map((trait, index) => {
        const title = isSpanish ? trait.titleEs : trait.titleEn;
        const desc = isSpanish ? trait.descEs : trait.descEn;
        const indexStr = String(index + 1).padStart(2, '0');

        return (
          <div
            key={trait.id}
            className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-start"
          >
            {/* 1. Index Column */}
            <div className="md:col-span-1 text-sm sm:text-base font-mono text-black/45 font-normal pt-1">
              {indexStr}
            </div>

            {/* 2. Bold Title Column */}
            <div className="md:col-span-5 pr-0 sm:pr-4">
              <h4 className="text-xl sm:text-2xl font-semibold font-sans text-black leading-snug tracking-tight">
                {title}
              </h4>
            </div>

            {/* 3. Description Paragraph Column */}
            <div className="md:col-span-6">
              <p className="text-sm sm:text-base text-black/70 font-sans leading-relaxed font-normal">
                {desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
