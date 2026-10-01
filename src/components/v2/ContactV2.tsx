import React, { useState } from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { trackDiagnosticoSubmit } from '../../utils/analytics';

/**
 * OptionIcon
 * Renderizado nítido de iconos vectoriales para las opciones del cotizador.
 */
const OptionIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = 'w-6 h-6' }) => {
  switch (icon) {
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'rocket':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2z" />
        </svg>
      );
    case 'refresh':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      );
    case 'search':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'cpu':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 'store':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M2 7h20" />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'home':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'star':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
  }
};

/**
 * ContactV2
 * 
 * Sección 07: Cierre Comercial & Cotizador Interactivo de Cero Fricción.
 * Rescata la arquitectura de 3 pasos de alta conversión del portafolio original:
 * Paso 1: Tipo de Proyecto
 * Paso 2: Sector Comercial del Negocio
 * Paso 3: Datos de Contacto Directos (Nombre + WhatsApp/Celular)
 * 
 * Adaptado a la estética V2: Dark obsidian, tipografía pura, acentos en cian y cero píldoras flotantes.
 */
export const ContactV2: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('');
  const [selectedSector, setSelectedSector] = useState<string>('');

  // Datos de contacto
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectOptions = [
    {
      id: 'web-scratch',
      label: 'Página Web desde Cero',
      description: 'Un sitio web completo y personalizado para tu negocio en React 19.',
      icon: 'globe',
    },
    {
      id: 'landing',
      label: 'Landing Page de Venta',
      description: 'Una página ultrarrápida enfocada en convertir visitas en clientes.',
      icon: 'rocket',
    },
    {
      id: 'seo',
      label: 'Posicionamiento Google & Maps',
      description: 'Mejora tu visibilidad en Google para captar clientes en tu ciudad.',
      icon: 'search',
    },
    {
      id: 'ai',
      label: 'Catálogo & Automatización',
      description: 'Catálogo de productos con pedidos ágiles y conversión a WhatsApp.',
      icon: 'cpu',
    },
    {
      id: 'redesign',
      label: 'Rediseño de Web Actual',
      description: 'Reemplaza una web lenta o desactualizada por código de alto rendimiento.',
      icon: 'refresh',
    },
    {
      id: 'other',
      label: 'Otro Proyecto a Medida',
      description: 'Cuéntame qué necesitas y te planteo la solución técnica más adecuada.',
      icon: 'compass',
    },
  ];

  const sectorOptions = [
    {
      id: 'health',
      label: 'Salud o Clínica',
      description: 'Consultorios médicos, clínicas, odontología y especialistas.',
      icon: 'heart',
    },
    {
      id: 'services',
      label: 'Servicios Profesionales',
      description: 'Firmas de ingeniería, abogados, consultoría y asesoría B2B.',
      icon: 'briefcase',
    },
    {
      id: 'retail',
      label: 'Comercio o Alimentos',
      description: 'Restaurantes, marcas de consumo y tiendas con punto físico.',
      icon: 'store',
    },
    {
      id: 'b2b',
      label: 'Empresa o B2B',
      description: 'Distribuidoras, manufactura, logística e industria.',
      icon: 'layers',
    },
    {
      id: 'property',
      label: 'Inmobiliaria o Construcción',
      description: 'Venta de inmuebles, arquitectura y proyectos residenciales.',
      icon: 'home',
    },
    {
      id: 'other',
      label: 'Otro Sector Comercial',
      description: 'Cualquier otro tipo de modelo comercial o actividad empresarial.',
      icon: 'star',
    },
  ];

  const currentProjectObj = projectOptions.find((p) => p.id === selectedProjectType);
  const currentSectorObj = sectorOptions.find((s) => s.id === selectedSector);

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
      setErrorMessage('Por favor ingresa tu nombre o el de tu empresa.');
      return;
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) {
      setStatus('error');
      setErrorMessage('Por favor ingresa un número de teléfono o WhatsApp válido (mínimo 7 dígitos).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const projectLabel = currentProjectObj?.label || 'No especificado';
      const sectorLabel = currentSectorObj?.label || 'No especificado';

      const formPayload = new FormData();
      formPayload.append('access_key', 'd8b435e9-81f7-4483-abe5-1962a54053ca');
      formPayload.append('from_name', 'JP Studios Web V2');
      formPayload.append('name', name);
      formPayload.append('telefono_whatsapp', phone);
      formPayload.append('tipo_de_proyecto', projectLabel);
      formPayload.append('sector_de_negocio', sectorLabel);
      formPayload.append('email', 'notificaciones@jpchacon.com');
      formPayload.append(
        'subject',
        `Nueva cotización V2 de ${name} [${projectLabel} | ${sectorLabel}] - Tel: ${phone}`
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
        setErrorMessage(data.message || 'Hubo un error al enviar. Por favor escríbeme directamente por WhatsApp.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Error de conexión al enviar el formulario. Por favor comunícate por WhatsApp.');
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
      id="contacto" 
      data-ambient-theme="emerald"
      className="relative py-28 sm:py-36 lg:py-44 xl:py-48 bg-transparent text-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================= */}
          {/* COLUMNA IZQUIERDA: PROPUESTA EDITORIAL & CONTACTO DIRECTO */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch space-y-10">
            <div id="contacto-header">
              <div className="text-xs font-mono tracking-wider text-emerald-400 uppercase mb-4">
                Cotización sin Fricción
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-white leading-[1.1]">
                Inicia tu proyecto{' '}
                <span className="text-emerald-400">
                  de diseño web hoy.
                </span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Cuéntame brevemente qué busca tu empresa. En menos de 24 horas hábiles te responderé con una propuesta técnica clara y presupuesto cerrado.
              </p>
            </div>

            {/* Asistencia Directa por WhatsApp */}
            <div className="pt-8 border-t border-white/[0.08] space-y-4">
              <div className="text-xs sm:text-sm text-slate-400 leading-snug">
                <p>¿Prefieres hablar directamente antes de cotizar?</p>
                <p className="text-white font-semibold mt-0.5">Escríbeme por WhatsApp.</p>
              </div>

              <a
                href="https://wa.me/573177371301?text=Hola%20Juan%20Pablo,%20quiero%20cotizar%20un%20proyecto%20web%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-emerald-400/40 text-xs sm:text-sm font-semibold transition-all duration-300 group cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-emerald-400 shrink-0" />
                <span>Hablemos por WhatsApp</span>
                <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform duration-200">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMNA DERECHA: COTIZADOR INTERACTIVO PASO A PASO        */}
          {/* ========================================================= */}
          <div className="lg:col-span-8 w-full">
            {status === 'success' ? (
              /* PANTALLA DE ÉXITO */
              <div className="p-8 sm:p-14 rounded-3xl bg-white/[0.025] border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-3xl font-bold font-mono">
                  ✓
                </div>

                <div className="space-y-3 max-w-md mx-auto">
                  <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Solicitud recibida con éxito
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Gracias, <strong className="text-white font-semibold">{name}</strong>. He recibido los detalles de tu proyecto. Revisaré la información y me pondré en contacto contigo hoy mismo.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/573177371301?text=${encodeURIComponent(`Hola Juan Pablo, acabo de enviar el cotizador en tu web. Soy ${name} y me interesa el proyecto de ${currentProjectObj?.label || 'diseño web'}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-slate-950 shrink-0" />
                    <span>Avisar a Juan Pablo por WhatsApp</span>
                    <span>↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3.5 rounded-xl border border-white/15 hover:border-white/30 text-slate-300 hover:text-white text-xs sm:text-sm font-mono font-medium transition-all cursor-pointer"
                  >
                    Iniciar nueva cotización
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl p-6 sm:p-9 bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
                
                {/* Cabecera del Paso Actual */}
                <div className="space-y-2 mb-8 pb-6 border-b border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                      Paso {currentStep} de 3
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {currentStep === 1 && '¿Qué tipo de proyecto buscas?'}
                      {currentStep === 2 && '¿Cuál es el sector de tu negocio?'}
                      {currentStep === 3 && '¿A dónde te enviamos la propuesta?'}
                    </p>
                  </div>

                  {/* Indicador de barra miniatura */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {[1, 2, 3].map((stepNumber) => (
                      <div
                        key={stepNumber}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentStep === stepNumber
                            ? 'w-8 bg-emerald-400'
                            : currentStep > stepNumber
                            ? 'w-4 bg-emerald-500'
                            : 'w-4 bg-white/15'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* PASO 1: TIPO DE PROYECTO */}
                {currentStep === 1 && (
                  <>
                    {/* Versión Móvil: Lista Horizontal Compacta (Inspirada en la captura V1) */}
                    <div className="sm:hidden space-y-2.5">
                      {projectOptions.map((opt) => {
                        const isSelected = selectedProjectType === opt.id;

                        return (
                          <div
                            key={opt.id}
                            onClick={() => setSelectedProjectType(opt.id)}
                            className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 select-none ${
                              isSelected
                                ? 'bg-emerald-500/10 border-emerald-400/70 text-white shadow-[0_0_20px_rgba(16,185,129,0.18)]'
                                : 'bg-white/[0.02] border-white/[0.08] text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40'
                                    : 'bg-white/[0.04] text-slate-400 border border-white/5'
                                }`}
                              >
                                <OptionIcon icon={opt.icon} className="w-5 h-5" />
                              </div>
                              <div className="min-w-0 pr-1">
                                <p
                                  className={`text-sm font-bold leading-snug ${
                                    isSelected ? 'text-white' : 'text-slate-200'
                                  }`}
                                >
                                  {opt.label}
                                </p>
                                <p
                                  className={`text-xs leading-snug mt-0.5 line-clamp-1 ${
                                    isSelected ? 'text-slate-300' : 'text-slate-400'
                                  }`}
                                >
                                  {opt.description}
                                </p>
                              </div>
                            </div>

                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                isSelected ? 'border-emerald-400 bg-emerald-400/20' : 'border-white/20'
                              }`}
                            >
                              {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Versión Escritorio: Grid de 3 columnas */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                      {projectOptions.map((opt) => {
                        const isSelected = selectedProjectType === opt.id;

                        return (
                          <div
                            key={opt.id}
                            onClick={() => setSelectedProjectType(opt.id)}
                            className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[160px] select-none group ${
                              isSelected
                                ? 'bg-emerald-500/10 border-emerald-400/60 shadow-[0_0_25px_rgba(16,185,129,0.18)] translate-y-[-2px]'
                                : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <OptionIcon
                                icon={opt.icon}
                                className={`w-6 h-6 transition-colors duration-200 ${
                                  isSelected ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'
                                }`}
                              />
                              
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                                  isSelected
                                    ? 'border-emerald-400 bg-emerald-400/20'
                                    : 'border-white/20 group-hover:border-white/40'
                                }`}
                              >
                                {isSelected && (
                                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                )}
                              </div>
                            </div>

                            <div className="space-y-1 mt-5">
                              <p
                                className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                                  isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                                }`}
                              >
                                {opt.label}
                              </p>
                              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                                {opt.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* PASO 2: SECTOR DEL NEGOCIO */}
                {currentStep === 2 && (
                  <>
                    {/* Versión Móvil: Lista Horizontal Compacta (Inspirada en la captura V1) */}
                    <div className="sm:hidden space-y-2.5">
                      {sectorOptions.map((opt) => {
                        const isSelected = selectedSector === opt.id;

                        return (
                          <div
                            key={opt.id}
                            onClick={() => setSelectedSector(opt.id)}
                            className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 select-none ${
                              isSelected
                                ? 'bg-emerald-500/10 border-emerald-400/70 text-white shadow-[0_0_20px_rgba(16,185,129,0.18)]'
                                : 'bg-white/[0.02] border-white/[0.08] text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40'
                                    : 'bg-white/[0.04] text-slate-400 border border-white/5'
                                }`}
                              >
                                <OptionIcon icon={opt.icon} className="w-5 h-5" />
                              </div>
                              <div className="min-w-0 pr-1">
                                <p
                                  className={`text-sm font-bold leading-snug ${
                                    isSelected ? 'text-white' : 'text-slate-200'
                                  }`}
                                >
                                  {opt.label}
                                </p>
                                <p
                                  className={`text-xs leading-snug mt-0.5 line-clamp-1 ${
                                    isSelected ? 'text-slate-300' : 'text-slate-400'
                                  }`}
                                >
                                  {opt.description}
                                </p>
                              </div>
                            </div>

                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                isSelected ? 'border-emerald-400 bg-emerald-400/20' : 'border-white/20'
                              }`}
                            >
                              {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Versión Escritorio: Grid de 3 columnas */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                      {sectorOptions.map((opt) => {
                        const isSelected = selectedSector === opt.id;

                        return (
                          <div
                            key={opt.id}
                            onClick={() => setSelectedSector(opt.id)}
                            className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[160px] select-none group ${
                              isSelected
                                ? 'bg-emerald-500/10 border-emerald-400/60 shadow-[0_0_25px_rgba(16,185,129,0.18)] translate-y-[-2px]'
                                : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <OptionIcon
                                icon={opt.icon}
                                className={`w-6 h-6 transition-colors duration-200 ${
                                  isSelected ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'
                                }`}
                              />
                              
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                                  isSelected
                                    ? 'border-emerald-400 bg-emerald-400/20'
                                    : 'border-white/20 group-hover:border-white/40'
                                }`}
                              >
                                {isSelected && (
                                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                )}
                              </div>
                            </div>

                            <div className="space-y-1 mt-5">
                              <p
                                className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                                  isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                                }`}
                              >
                                {opt.label}
                              </p>
                              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                                {opt.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* PASO 3: DATOS DE CONTACTO (Cero fricción, solo Nombre + Teléfono/WhatsApp) */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    {/* Resumen de opciones elegidas */}
                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 pb-2">
                      <span className="font-mono uppercase tracking-wider text-slate-400">
                        Selección:
                      </span>
                      {currentProjectObj && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-white font-medium">
                          <span className="text-emerald-400 font-bold">✓</span>
                          {currentProjectObj.label}
                        </span>
                      )}
                      {currentSectorObj && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-white font-medium">
                          <span className="text-emerald-400 font-bold">✓</span>
                          {currentSectorObj.label}
                        </span>
                      )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                          Tu nombre o nombre de la empresa
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ej: Carlos Mendoza (Clínica Dental)"
                          className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 focus:border-emerald-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors shadow-inner"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                          WhatsApp o Celular de contacto
                        </label>
                        <input
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          value={phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          placeholder="Ej: +57 317 000 0000"
                          className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 focus:border-emerald-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors shadow-inner"
                        />
                      </div>

                      {errorMessage && (
                        <p className="text-xs text-rose-400 font-medium">{errorMessage}</p>
                      )}
                    </form>
                  </div>
                )}

                {/* Barra de Navegación del Cotizador */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-xl border border-white/15 text-xs font-mono font-medium text-slate-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
                    >
                      ← Anterior
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={currentStep === 1 ? !selectedProjectType : !selectedSector}
                      className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-mono font-bold transition-all shadow-[0_0_18px_rgba(16,185,129,0.3)] hover:shadow-[0_0_24px_rgba(16,185,129,0.5)] cursor-pointer flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      <span>Siguiente paso</span>
                      <span>→</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={status === 'submitting'}
                      className="px-7 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-mono font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_28px_rgba(16,185,129,0.5)] cursor-pointer flex items-center gap-2 disabled:opacity-50"
                    >
                      <span>{status === 'submitting' ? 'Enviando solicitud...' : 'Enviar y Recibir Propuesta'}</span>
                      <span>→</span>
                    </button>
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
