import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';
import { trackDiagnosticoSubmit } from '../../utils/analytics';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OptionIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = 'w-6 h-6' }) => {
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
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <rect x="8" y="8" width="8" height="8" rx="2" />
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

  // Step state (1: Project Type, 2: Sector, 3: Contact Info)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('');
  const [selectedSector, setSelectedSector] = useState<string>('');

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
    t.contact.projectOptions.find((p) => p.id === selectedProjectType);

  const currentSectorObj =
    t.contact.sectorOptions.find((s) => s.id === selectedSector);

  const handleNext = () => {
    if (currentStep === 1) {
      if (!selectedProjectType) return;
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedSector) return;
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

  const handlePhoneChange = (val: string) => {
    // Only allow digits, spaces, hyphens, parentheses, and an optional single leading '+'
    let sanitized = val.replace(/[^\d+\s\-()]/g, '');
    if (sanitized.includes('+')) {
      const hasLeadingPlus = sanitized.startsWith('+');
      sanitized = (hasLeadingPlus ? '+' : '') + sanitized.replace(/\+/g, '');
    }
    const digitsOnly = sanitized.replace(/\D/g, '');
    if (digitsOnly.length > 15) return;
    setPhone(sanitized);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatus('error');
      setErrorMessage(t.contact.validationError);
      return;
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) {
      setStatus('error');
      setErrorMessage(
        isSpanish
          ? 'Por favor ingresa un número de teléfono o WhatsApp válido (mínimo 7 dígitos).'
          : 'Please enter a valid phone or WhatsApp number (minimum 7 digits).'
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const projectLabel = currentProjectObj?.label || (isSpanish ? 'No especificado' : 'Not specified');
      const sectorLabel = currentSectorObj?.label || (isSpanish ? 'No especificado' : 'Not specified');

      const formPayload = new FormData();
      formPayload.append('access_key', 'd8b435e9-81f7-4483-abe5-1962a54053ca');
      formPayload.append('from_name', 'JP Studios Web');
      formPayload.append('name', name);
      formPayload.append('telefono_whatsapp', phone);
      formPayload.append('tipo_de_proyecto', projectLabel);
      formPayload.append('sector_de_negocio', sectorLabel);
      formPayload.append('email', 'notificaciones@jpchacon.com');
      formPayload.append(
        'subject',
        `Nueva cotización de ${name} [${projectLabel} | ${sectorLabel}] - Tel: ${phone}`
      );
      formPayload.append(
        'message',
        `Nueva solicitud recibida desde el cotizador de JP Studios:
- Nombre / Empresa: ${name}
- Teléfono / WhatsApp: ${phone}
- Tipo de Solución: ${projectLabel}
- Sector / Negocio: ${sectorLabel}`
      );

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        trackDiagnosticoSubmit({
          projectType: projectLabel,
          sector: sectorLabel,
          name: name.trim(),
        });
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
    setSelectedProjectType('');
    setSelectedSector('');
    setName('');
    setPhone('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-16 sm:py-24 lg:py-32"
    >
      {/* Mobile Form View (lg:hidden) matching media_1790038095365.png */}
      <div className="lg:hidden space-y-5">
        {status === 'success' ? (
          /* Success Confirmation Screen */
          <div className="p-8 rounded-[2rem] bg-white border border-black/[0.08] shadow-sm text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-sans">
              ✓
            </div>
            <div className="space-y-2 max-w-sm mx-auto">
              <div className="text-2xl font-bold font-display text-[#111111] tracking-tight">
                {t.contact.successTitle}
              </div>
              <p className="text-black/65 text-xs font-sans leading-relaxed">
                {t.contact.successSubtitle(name || 'Cliente')}
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#111111] text-white hover:bg-black text-xs font-sans font-medium transition-all"
              >
                {isSpanish ? 'Abrir chat en WhatsApp ↗' : 'Open WhatsApp chat ↗'}
              </a>
              <button
                type="button"
                onClick={resetForm}
                className="w-full py-2.5 rounded-full border border-black/15 hover:border-black text-xs font-sans font-medium transition-all cursor-pointer"
              >
                {t.contact.resetButton}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* 1. Mobile Section Header */}
            <div className="space-y-2">
              <div className="text-[2.55rem] font-bold font-display tracking-tight text-[#111111] leading-[1.06]">
                {t.contact.titleLine1.trim()}{' '}{t.contact.titleLine2}
              </div>
              <p className="text-xs sm:text-sm text-black/65 font-sans font-normal leading-relaxed pt-1">
                {t.contact.description}
              </p>
            </div>

            {/* Hairline Divider */}
            <div className="w-full h-px bg-black/[0.08] my-5" />

            {/* 2. Step Header */}
            <div className="space-y-1 mb-4">
              <div className="text-xl font-bold font-display text-[#111111] tracking-tight leading-snug">
                {currentStep === 1 && t.contact.step1Question}
                {currentStep === 2 && t.contact.step2Question}
                {currentStep === 3 && t.contact.step3Question}
              </div>
              <p className="text-xs text-black/60 font-sans">
                {currentStep === 1 && t.contact.step1Subtitle}
                {currentStep === 2 && t.contact.step2Subtitle}
                {currentStep === 3 && t.contact.step3Subtitle}
              </p>
            </div>

            {/* 3. Step Options */}
            {currentStep === 1 && (
              <div className="space-y-2.5">
                {t.contact.projectOptions.map((opt) => {
                  const isSelected = selectedProjectType === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedProjectType(opt.id)}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 select-none ${
                        isSelected
                          ? 'bg-[#141517] border-[#141517] text-white shadow-md'
                          : 'bg-white border-black/[0.08] text-black hover:border-black/20'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-white/10 text-white' : 'bg-black/[0.04] text-black/70'
                          }`}
                        >
                          <OptionIcon icon={opt.icon} className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 pr-1">
                          <p
                            className={`text-sm font-display font-medium leading-snug ${
                              isSelected ? 'text-white' : 'text-[#111111]'
                            }`}
                          >
                            {opt.label}
                          </p>
                          <p
                            className={`text-xs font-sans leading-snug mt-0.5 line-clamp-2 ${
                              isSelected ? 'text-white/70' : 'text-black/55'
                            }`}
                          >
                            {opt.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'border-white bg-white/20' : 'border-black/20'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-2.5">
                {t.contact.sectorOptions.map((opt) => {
                  const isSelected = selectedSector === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedSector(opt.id)}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 select-none ${
                        isSelected
                          ? 'bg-[#141517] border-[#141517] text-white shadow-md'
                          : 'bg-white border-black/[0.08] text-black hover:border-black/20'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-white/10 text-white' : 'bg-black/[0.04] text-black/70'
                          }`}
                        >
                          <OptionIcon icon={opt.icon} className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 pr-1">
                          <p
                            className={`text-sm font-display font-medium leading-snug ${
                              isSelected ? 'text-white' : 'text-[#111111]'
                            }`}
                          >
                            {opt.label}
                          </p>
                          <p
                            className={`text-xs font-sans leading-snug mt-0.5 line-clamp-2 ${
                              isSelected ? 'text-white/70' : 'text-black/55'
                            }`}
                          >
                            {opt.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'border-white bg-white/20' : 'border-black/20'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {currentStep === 3 && (
              <div className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-4">
                {/* Summary of chosen options - No card-inside-card anti-pattern */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-black/70 pb-1">
                  <span className="text-black/40 text-[11px] font-medium tracking-wide">
                    {isSpanish ? 'Selección:' : 'Selected:'}
                  </span>
                  {currentProjectObj && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] text-[#111111] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {currentProjectObj.label}
                    </span>
                  )}
                  {currentSectorObj && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] text-[#111111] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {currentSectorObj.label}
                    </span>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-sans font-medium text-black/70">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-black/10 focus:border-black focus:outline-none text-base sm:text-sm text-black placeholder:text-black/30 transition-colors shadow-2xs min-h-[48px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-sans font-medium text-black/70">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-black/10 focus:border-black focus:outline-none text-base sm:text-sm text-black placeholder:text-black/30 transition-colors shadow-2xs min-h-[48px]"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-rose-600 font-sans">{errorMessage}</p>
                  )}
                </form>
              </div>
            )}

            {/* 4. Bottom WhatsApp Assistance Bar */}
            <div className="flex items-center justify-between gap-3 pt-5 mt-5 border-t border-black/[0.06]">
              <div className="text-xs text-black/70 font-sans leading-snug">
                <p>{t.contact.whatsappQuestion}</p>
                <p className="text-black font-bold">{t.contact.whatsappAction}</p>
              </div>
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-full bg-[#111111] text-white text-xs font-sans font-medium hover:bg-black transition-colors shrink-0 shadow-xs active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t.contact.whatsappButton}</span>
                <span className="text-xs">↗</span>
              </a>
            </div>

            {/* 5. Mobile Navigation Button */}
            <div className="mt-4 space-y-2">
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentStep === 1 ? !selectedProjectType : !selectedSector}
                  className="w-full py-3.5 min-h-[48px] rounded-full bg-[#111111] text-white text-sm font-sans font-medium hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
                >
                  <span>{t.contact.nextButton}</span>
                  <span>→</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 min-h-[48px] rounded-full bg-[#111111] text-white text-sm font-sans font-medium hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer"
                >
                  <span>{status === 'submitting' ? t.contact.submitSending : t.contact.submitIdle}</span>
                  <span>→</span>
                </button>
              )}

              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-full py-3 min-h-[44px] rounded-full border border-black/15 text-xs font-sans font-medium text-black/70 hover:text-black transition-colors cursor-pointer flex items-center justify-center"
                >
                  ← {t.contact.prevButton}
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout (hidden lg:grid - 100% UNTOUCHED) */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & WhatsApp Assistance */}
        <div
          ref={headerRef}
          className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between self-stretch space-y-10 sm:space-y-14"
        >
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-display tracking-tight text-[#111111] leading-[1.1]">
              {t.contact.titleLine1.trim()}{' '}<br />
              {t.contact.titleLine2}
            </h2>

            <p className="text-sm sm:text-base text-black/65 font-sans font-normal leading-relaxed pt-2 max-w-sm">
              {t.contact.description}
            </p>
          </div>

          {/* Bottom WhatsApp assistance block matching mockup */}
          <div className="pt-8 border-t border-black/[0.08] space-y-3.5">
            <div className="text-xs sm:text-sm text-black/70 font-sans leading-snug">
              <p>{t.contact.whatsappQuestion}</p>
              <p className="text-black font-medium">{t.contact.whatsappAction}</p>
            </div>
            <a
              href={siteConfig.profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs sm:text-sm font-sans font-medium hover:bg-black/85 transition-all duration-300 active:scale-95 group cursor-pointer shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{t.contact.whatsappButton}</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Multi-step Estimator Grid */}
        <div ref={quizCardRef} className="lg:col-span-8 xl:col-span-8 w-full">
          {status === 'success' ? (
            /* Success Confirmation Screen */
            <div className="p-8 sm:p-14 rounded-[2.2rem] bg-white border border-black/[0.08] shadow-sm text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl font-sans">
                ✓
              </div>
              <div className="space-y-2.5 max-w-md mx-auto">
                <div className="text-2xl sm:text-3xl font-normal font-display text-[#111111] tracking-tight">
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
                >
                  {t.contact.resetButton}
                </button>
                <a
                  href={siteConfig.profile.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#111111] text-white hover:bg-black text-xs sm:text-sm font-sans font-medium transition-all"
                >
                  {isSpanish ? 'Abrir chat en WhatsApp ↗' : 'Open WhatsApp chat ↗'}
                </a>
              </div>
            </div>
          ) : (
            <div>
              {/* Step Header */}
              <div className="space-y-1.5 mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-display tracking-tight text-[#111111] leading-snug">
                  {currentStep === 1 && t.contact.step1Question}
                  {currentStep === 2 && t.contact.step2Question}
                  {currentStep === 3 && t.contact.step3Question}
                </h3>
                <p className="text-xs sm:text-sm text-black/60 font-sans">
                  {currentStep === 1 && t.contact.step1Subtitle}
                  {currentStep === 2 && t.contact.step2Subtitle}
                  {currentStep === 3 && t.contact.step3Subtitle}
                </p>
              </div>

              {/* Step 1: Project Type 6-Card Grid (Exact match to Mockup) */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-in fade-in duration-200">
                  {t.contact.projectOptions.map((opt) => {
                    const isSelected = selectedProjectType === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedProjectType(opt.id)}
                        className={`p-6 sm:p-7 rounded-[1.6rem] sm:rounded-[1.8rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[175px] select-none group ${
                          isSelected
                            ? 'bg-[#1C1D20] border-[#1C1D20] text-white shadow-xl scale-[1.01]'
                            : 'bg-white border-black/[0.08] text-black/80 hover:border-black/20 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <OptionIcon
                            icon={opt.icon}
                            className={`w-6 h-6 transition-colors duration-200 ${
                              isSelected ? 'text-white' : 'text-black/80 group-hover:text-black'
                            }`}
                          />
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                              isSelected
                                ? 'border-white bg-white/20'
                                : 'border-black/20 group-hover:border-black/40'
                            }`}
                          >
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                        </div>

                        <div className="space-y-1.5 mt-6">
                          <p
                            className={`text-base sm:text-lg font-display font-medium leading-snug ${
                              isSelected ? 'text-white' : 'text-[#111111]'
                            }`}
                          >
                            {opt.label}
                          </p>
                          <p
                            className={`text-xs font-sans leading-relaxed ${
                              isSelected ? 'text-white/70' : 'text-black/55'
                            }`}
                          >
                            {opt.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Step 2: Business Sector 6-Card Grid */}
              {currentStep === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-in fade-in duration-200">
                  {t.contact.sectorOptions.map((opt) => {
                    const isSelected = selectedSector === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedSector(opt.id)}
                        className={`p-6 sm:p-7 rounded-[1.6rem] sm:rounded-[1.8rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[175px] select-none group ${
                          isSelected
                            ? 'bg-[#1C1D20] border-[#1C1D20] text-white shadow-xl scale-[1.01]'
                            : 'bg-white border-black/[0.08] text-black/80 hover:border-black/20 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <OptionIcon
                            icon={opt.icon}
                            className={`w-6 h-6 transition-colors duration-200 ${
                              isSelected ? 'text-white' : 'text-black/80 group-hover:text-black'
                            }`}
                          />
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                              isSelected
                                ? 'border-white bg-white/20'
                                : 'border-black/20 group-hover:border-black/40'
                            }`}
                          >
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                        </div>

                        <div className="space-y-1.5 mt-6">
                          <p
                            className={`text-base sm:text-lg font-display font-medium leading-snug ${
                              isSelected ? 'text-white' : 'text-[#111111]'
                            }`}
                          >
                            {opt.label}
                          </p>
                          <p
                            className={`text-xs font-sans leading-relaxed ${
                              isSelected ? 'text-white/70' : 'text-black/55'
                            }`}
                          >
                            {opt.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Step 3: Contact Details & Fast Proposal Dispatch */}
              {currentStep === 3 && (
                <div className="p-7 sm:p-10 rounded-[2rem] bg-white border border-black/[0.08] shadow-xs space-y-6 animate-in fade-in duration-200">
                  {/* Summary of chosen options - No card-inside-card anti-pattern */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-black/70 pb-1">
                    <span className="text-black/40 text-xs font-medium tracking-wide">
                      {isSpanish ? 'Solución seleccionada:' : 'Selected solution:'}
                    </span>
                    {currentProjectObj && (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/[0.04] text-[#111111] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {currentProjectObj.label}
                      </span>
                    )}
                    {currentSectorObj && (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/[0.04] text-[#111111] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {currentSectorObj.label}
                      </span>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-sans font-medium text-black/70">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-5 py-3.5 rounded-2xl bg-white border border-black/10 focus:border-black focus:outline-none text-sm text-black placeholder:text-black/30 transition-colors shadow-2xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-sans font-medium text-black/70">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-5 py-3.5 rounded-2xl bg-white border border-black/10 focus:border-black focus:outline-none text-sm text-black placeholder:text-black/30 transition-colors shadow-2xs"
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-xs text-rose-600 font-sans">{errorMessage}</p>
                    )}
                  </form>
                </div>
              )}

              {/* Bottom Navigation Bar */}
              <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-3 rounded-full border border-black/15 text-xs sm:text-sm font-sans font-medium text-black/70 hover:text-black hover:border-black/40 transition-colors cursor-pointer"
                  >
                    ← {t.contact.prevButton}
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentStep === 1 ? !selectedProjectType : !selectedSector}
                    className="px-7 py-3 rounded-full bg-[#111111] text-white text-xs sm:text-sm font-sans font-medium hover:bg-black/85 transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-2 shadow-xs disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#111111] disabled:active:scale-100"
                  >
                    <span>{t.contact.nextButton}</span>
                    <span>→</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === 'submitting'}
                    className="px-8 py-3.5 rounded-full bg-[#111111] text-white text-xs sm:text-sm font-sans font-medium hover:bg-black/85 transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-2 shadow-md disabled:opacity-50"
                  >
                    <span>{status === 'submitting' ? t.contact.submitSending : t.contact.submitIdle}</span>
                    <span>→</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
