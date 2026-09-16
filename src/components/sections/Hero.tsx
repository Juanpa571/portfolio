import React, { useState } from 'react';
import { HeroConcept1 } from './hero/HeroConcept1';
import { HeroConcept2 } from './hero/HeroConcept2';
import { HeroConcept3 } from './hero/HeroConcept3';

type ConceptId = '1' | '2' | '3';

export const Hero: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<ConceptId>('1');

  const concepts: { id: ConceptId; label: string; tag: string }[] = [
    { id: '1', label: 'Bisel Flotante 3D', tag: 'Concepto 1' },
    { id: '2', label: 'Portada Editorial', tag: 'Concepto 2' },
    { id: '3', label: 'Portal Cinemático', tag: 'Concepto 3' },
  ];

  return (
    <section className="relative min-h-[calc(100vh-5.5rem)] min-h-[calc(100dvh-5.5rem)] flex flex-col justify-between border-b border-black/[0.08] overflow-hidden">
      
      {/* Floating Interactive Concept Switcher Pill */}
      <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 select-none">
        <div className="flex items-center gap-1 p-1.5 rounded-full bg-[#141517]/90 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.3)]">
          {concepts.map((concept) => {
            const isActive = activeConcept === concept.id;
            return (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept.id)}
                className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-sans transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-medium shadow-sm'
                    : 'text-white/70 hover:text-white hover:bg-white/10 font-normal'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : 'bg-white/40'}`} />
                  <span className="hidden sm:inline">{concept.tag}:</span>
                  <span>{concept.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Active Hero Concept */}
      <div className="w-full flex-1 flex flex-col pt-12 sm:pt-14">
        {activeConcept === '1' && <HeroConcept1 key="concept-1" />}
        {activeConcept === '2' && <HeroConcept2 key="concept-2" />}
        {activeConcept === '3' && <HeroConcept3 key="concept-3" />}
      </div>

    </section>
  );
};

export default Hero;
