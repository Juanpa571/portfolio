import React, { useState } from 'react';
import { GlowingEdgeCard } from '../ui/GlowingEdgeCard';
import { Sun, Moon, ExternalLink } from 'lucide-react';

export const GlowingEdgeCardDemo: React.FC = () => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  return (
    <div className={`w-full flex flex-col items-center justify-center p-6 sm:p-10 transition-colors duration-500 rounded-3xl ${
      mode === 'light' ? 'bg-[#e0e0e0] text-black' : 'bg-[#141517] text-white border border-white/10'
    }`}>
      
      <div className="mb-8 flex gap-4">
        <button 
          onClick={() => setMode('light')}
          className={`p-2.5 rounded-full transition-all duration-300 ${
            mode === 'light' ? 'bg-amber-400 text-slate-950 shadow-lg scale-110' : 'bg-transparent text-slate-500 hover:text-slate-300'
          }`}
          aria-label="Modo Claro"
        >
          <Sun size={20} />
        </button>
        <button 
          onClick={() => setMode('dark')}
          className={`p-2.5 rounded-full transition-all duration-300 ${
            mode === 'dark' ? 'bg-cyan-500 text-slate-950 shadow-lg scale-110' : 'bg-transparent text-slate-400 hover:text-slate-200'
          }`}
          aria-label="Modo Oscuro"
        >
          <Moon size={20} />
        </button>
      </div>

      <GlowingEdgeCard mode={mode} className="w-full max-w-[560px] min-h-[460px] shadow-2xl">
        <div className="flex flex-col h-full p-6 sm:p-10">
          <header className="flex justify-between items-center mb-6">
            <Sun className={`w-5 h-5 transition-opacity duration-300 ${mode === 'light' ? 'opacity-100 text-amber-500' : 'opacity-25'}`} />
            <h3 className="text-lg sm:text-xl font-bold tracking-wide">Colored, Glowing Edges</h3>
            <Moon className={`w-5 h-5 transition-opacity duration-300 ${mode === 'dark' ? 'opacity-100 text-cyan-400' : 'opacity-25'}`} />
          </header>
          
          <div className="flex-1 space-y-4 text-left pr-2 text-sm sm:text-base">
            <p className="leading-relaxed text-slate-300">
              Efecto de bordes magnéticos y resplandor dinámico que rastrea la posición angular y proximidad del cursor en tiempo real.
            </p>
            
            <p className="leading-relaxed text-slate-400 text-xs sm:text-sm">
              Combina gradientes de malla (<em className="font-mono text-cyan-400 not-italic">mesh gradients</em>) enmascarados con proyecciones cónicas (<code className="font-mono text-xs">conic-gradient</code>) y desacoplamiento de reflows en GPU mediante <code className="font-mono text-xs">requestAnimationFrame</code>.
            </p>
    
            <p className="leading-relaxed text-slate-400 text-xs sm:text-sm">
              La intensidad del resplandor se incrementa orgánicamente a medida que el puntero se acerca al perímetro exterior, creando una física magnética de alta fidelidad.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex justify-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-50 hover:opacity-100 hover:text-cyan-400 transition-all"
              aria-label="GitHub"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-50 hover:opacity-100 hover:text-cyan-400 transition-all"
              aria-label="X / Twitter"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </GlowingEdgeCard>

      <div className="mt-8 flex items-center gap-2 text-xs opacity-50 font-mono">
        <ExternalLink size={13} />
        <span>Pasa el cursor sobre la tarjeta o bordes para activar el resplandor reactivo</span>
      </div>
    </div>
  );
};

export default GlowingEdgeCardDemo;
