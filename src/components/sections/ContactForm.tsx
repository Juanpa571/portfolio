import React, { useState, useEffect, useRef } from 'react';
import { Magnetic } from '../ui/Magnetic';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OptionIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = 'w-7 h-7' }) => {
  switch (icon) {
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'rocket':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2z" />
        </svg>
      );
    case 'map':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'refresh':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      );
    case 'search':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'cpu':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    case 'building':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
        </svg>
      );
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'store':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M2 7h20" />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'home':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'star':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
  }
};

export const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();
  const isSpanish = language === 'es';

  // Step state (1: Project Type, 2: Sector, 3: Contact Info, 4: Success)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('web-scratch');
  const [selectedSector, setSelectedSector] = useState<string>('health');

  // Contact inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const quizCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          0
        );
      }

      if (quizCardRef.current) {
        tl.fromTo(
          quizCardRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          0.12
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentProjectObj =
    t.contact.projectOptions.find((p) => p.id === selectedProjectType) || t.contact.projectOptions[0];
  const currentSectorObj =
    t.contact.sectorOptions.find((s) => s.id === selectedSector) || t.contact.sectorOptions[0];

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handlePrev = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus('error');
      setErrorMessage(t.contact.validationError);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', 'd8b435e9-81f7-4483-abe5-1962a54053ca');
      formPayload.append('from_name', 'JP Studios Web');
      formPayload.append('name', name);
      formPayload.append('telefono_whatsapp', phone);
      formPayload.append('tipo_de_proyecto', currentProjectObj.label);
      formPayload.append('sector_de_negocio', currentSectorObj.label);
      formPayload.append('email', 'notificaciones@jpchacon.com');
      formPayload.append(
        'subject',
        `Nueva cotización de ${name} [${currentProjectObj.label} | ${currentSectorObj.label}] - Tel: ${phone}`
      );
      formPayload.append(
        'message',
        `Nueva solicitud recibida desde el cotizador de JP Studios:
- Nombre / Empresa: ${name}
- Teléfono / WhatsApp: ${phone}
- Tipo de Solución: ${currentProjectObj.label}
- Sector / Negocio: ${currentSectorObj.label}`
      );

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || t.contact.networkError);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.contact.networkError);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSelectedProjectType('web');
    setSelectedSector('health');
    setName('');
    setPhone('');
    setStatus('idle');
    setErrorMessage('');
  };

  const progressPercent = currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-16 sm:py-20 lg:py-24 scroll-mt-16 flex flex-col justify-center"
    >
      {/* Top Hairline Divider */}
      <div className="w-full h-px bg-black/[0.08] mb-12 sm:mb-16" />

      {/* Section Header */}
      <div
        ref={headerRef}
        className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6 will-change-[transform,opacity]"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1e] leading-[1.08]">
            {t.contact.title}
          </h2>
        </div>
        <p className="text-base sm:text-lg text-[#555557] max-w-md font-sans leading-relaxed">
          {t.contact.description}
        </p>
      </div>

      {/* Quiz Card Container (Minimal Friction, Visual Cards Architecture) */}
      <div ref={quizCardRef} className="max-w-2xl sm:max-w-3xl w-full mx-auto will-change-[transform,opacity]">
        <div className="rounded-[2.2rem] sm:rounded-[2.5rem] bg-white border border-black/[0.08] shadow-sm overflow-hidden transition-all duration-300">
          
          {/* Top Subtle Progress Bar */}
          <div className="w-full h-1.5 bg-black/[0.04] relative">
            <div
              className="h-full bg-[#1C1D20] transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="p-7 sm:p-12 space-y-8 sm:space-y-10">
            {status === 'success' ? (
              /* Success Confirmation Screen */
              <div className="py-8 sm:py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl font-sans">
                  ✓
                </div>
                <div className="space-y-2.5 max-w-md mx-auto">
                  <div className="text-2xl sm:text-3xl font-normal text-[#1a1a1e] tracking-tight">
                    {t.contact.successTitle}
                  </div>
                  <p className="text-black/65 text-sm sm:text-base font-sans leading-relaxed">
                    {t.contact.successSubtitle(name || 'Cliente')}
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 rounded-full border border-black/15 hover:border-black text-xs sm:text-sm font-sans font-medium transition-all cursor-pointer"
                    data-interactive
                  >
                    {t.contact.resetButton}
                  </button>
                  <a
                    href={siteConfig.profile.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#1C1D20] text-white hover:bg-black text-xs sm:text-sm font-sans font-medium transition-all"
                    data-interactive
                  >
                    {isSpanish ? 'Abrir chat en WhatsApp ↗' : 'Open WhatsApp chat ↗'}
                  </a>
                </div>
              </div>
            ) : (
              <div>
                {/* Step Header */}
                <div className="text-center space-y-2 mb-8 sm:mb-10">
                  <span className="text-xs uppercase tracking-widest text-black/40 font-mono">
                    {isSpanish ? `Paso ${currentStep} de 3` : `Step ${currentStep} of 3`}
                  </span>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1a1a1e] tracking-tight">
                    {currentStep === 1 && t.contact.step1Question}
                    {currentStep === 2 && t.contact.step2Question}
                    {currentStep === 3 && t.contact.step3Question}
                  </div>
                  {currentStep === 3 && (
                    <p className="text-xs sm:text-sm text-black/55 font-sans max-w-md mx-auto pt-1">
                      {t.contact.step3Subtitle}
                    </p>
                  )}
                </div>

                {/* Step 1: Project Type Options Grid */}
                {currentStep === 1 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 animate-in fade-in duration-200">
                    {t.contact.projectOptions.map((opt) => {
                      const isSelected = selectedProjectType === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedProjectType(opt.id)}
                          className={`p-5 sm:p-7 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center gap-3.5 select-none ${
                            isSelected
                              ? 'bg-[#1C1D20] text-white border-[#1C1D20] shadow-md scale-[1.02]'
                              : 'bg-white text-black/80 border-black/10 hover:border-black/30 hover:bg-black/[0.02]'
                          }`}
                          data-interactive
                        >
                          <OptionIcon
                            icon={opt.icon}
                            className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                              isSelected ? 'text-white' : 'text-black/70'
                            }`}
                          />
                          <span className="text-xs sm:text-sm font-medium tracking-tight">
                            {opt.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Step 2: Business Sector Options Grid */}
                {currentStep === 2 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 animate-in fade-in duration-200">
                    {t.contact.sectorOptions.map((opt) => {
                      const isSelected = selectedSector === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedSector(opt.id)}
                          className={`p-5 sm:p-7 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center gap-3.5 select-none ${
                            isSelected
                              ? 'bg-[#1C1D20] text-white border-[#1C1D20] shadow-md scale-[1.02]'
                              : 'bg-white text-black/80 border-black/10 hover:border-black/30 hover:bg-black/[0.02]'
                          }`}
                          data-interactive
                        >
                          <OptionIcon
                            icon={opt.icon}
                            className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                              isSelected ? 'text-white' : 'text-black/70'
                            }`}
                          />
                          <span className="text-xs sm:text-sm font-medium tracking-tight">
                            {opt.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Step 3: Contact Inputs */}
                {currentStep === 3 && (
                  <form onSubmit={handleSubmit} id="quiz-contact-form" className="space-y-6 max-w-lg mx-auto animate-in fade-in duration-200">
                    {/* Summary of chosen options */}
                    <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-black/5 text-xs text-black/80 font-medium">
                        {currentProjectObj.label}
                      </span>
                      <span className="text-black/30 text-xs">•</span>
                      <span className="px-3.5 py-1.5 rounded-full bg-black/5 text-xs text-black/80 font-medium">
                        {currentSectorObj.label}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="quiz-name" className="block text-xs font-medium text-black/70 mb-1.5 font-sans">
                          {t.contact.nameLabel}
                        </label>
                        <input
                          id="quiz-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.contact.namePlaceholder}
                          className="w-full px-5 py-3.5 rounded-xl sm:rounded-2xl bg-[#fafaf8] border border-black/10 text-sm sm:text-base leading-normal text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all"
                          data-interactive
                        />
                      </div>

                      <div>
                        <label htmlFor="quiz-phone" className="block text-xs font-medium text-black/70 mb-1.5 font-sans">
                          {t.contact.phoneLabel}
                        </label>
                        <input
                          id="quiz-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={t.contact.phonePlaceholder}
                          className="w-full px-5 py-3.5 rounded-xl sm:rounded-2xl bg-[#fafaf8] border border-black/10 text-sm sm:text-base leading-normal text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all"
                          data-interactive
                        />
                      </div>
                    </div>

                    {errorMessage && (
                      <div className="text-red-600 text-xs font-sans text-center">
                        {errorMessage}
                      </div>
                    )}
                  </form>
                )}

                {/* Bottom Navigation Buttons */}
                <div className="pt-8 sm:pt-10 border-t border-black/[0.06] flex items-center justify-between gap-4">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border border-black/15 hover:border-black text-xs sm:text-sm font-medium text-black/80 hover:text-black transition-all cursor-pointer flex items-center gap-2"
                      data-interactive
                    >
                      <span>‹</span>
                      <span>{t.contact.prevButton}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <Magnetic strength={0.2} radius={60}>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-8 py-3 sm:px-10 sm:py-3.5 rounded-full bg-[#1C1D20] text-white hover:bg-black text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95 cursor-pointer flex items-center gap-2 ml-auto"
                        data-interactive
                      >
                        <span>{t.contact.nextButton}</span>
                        <span>›</span>
                      </button>
                    </Magnetic>
                  ) : (
                    <Magnetic strength={0.2} radius={60}>
                      <button
                        type="submit"
                        form="quiz-contact-form"
                        disabled={status === 'submitting'}
                        className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-[#1C1D20] text-white hover:bg-black text-xs sm:text-sm font-medium transition-all shadow-md active:scale-95 disabled:opacity-60 cursor-pointer flex items-center gap-2.5 ml-auto"
                        data-interactive
                      >
                        <span>{status === 'submitting' ? t.contact.submitSending : t.contact.submitIdle}</span>
                        <span>→</span>
                      </button>
                    </Magnetic>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
