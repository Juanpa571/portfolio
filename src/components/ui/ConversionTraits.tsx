import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { highlightBrandKeywords } from '../../utils/textHighlight';

interface TraitData {
  id: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
}

const TRAITS: TraitData[] = [
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

export const ConversionTraits: React.FC = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="border-t border-b border-black/[0.08] divide-y divide-black/[0.08]">
      {TRAITS.map((trait) => {
        const title = isSpanish ? trait.titleEs : trait.titleEn;
        const desc = isSpanish ? trait.descEs : trait.descEn;

        return (
          <div
            key={trait.id}
            className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-start px-2 sm:px-4"
          >
            <div className="md:col-span-5">
              <div
                role="heading"
                aria-level={4}
                className="text-xl sm:text-2xl font-normal font-display text-black leading-snug"
              >
                {highlightBrandKeywords(title)}
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="text-sm sm:text-base text-black/75 font-sans leading-relaxed font-normal max-w-[58ch]">
                {highlightBrandKeywords(desc)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
