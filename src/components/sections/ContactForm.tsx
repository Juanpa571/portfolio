import React, { useState } from 'react';
import { Magnetic } from '../ui/Magnetic';
import { siteConfig } from '../../config/site';

type ProjectType = 'sprint' | 'general';

interface FormState {
  projectType: ProjectType;
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    projectType: 'sprint',
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Por favor completa todos los campos requeridos.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', 'd8b435e9-81f7-4483-abe5-1962a54053ca');
      formPayload.append('from_name', 'JP Studios Web');
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('subject', `Nuevo mensaje de ${formData.name} [${formData.projectType === 'sprint' ? 'Sprint 7 Días' : 'Consulta General'}]`);
      formPayload.append('tipo_de_proyecto', formData.projectType === 'sprint' ? 'Nuevo Proyecto (Sprint 7 Días)' : 'Consulta General / Otros');
      formPayload.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Error al enviar el mensaje. Por favor intenta de nuevo.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Hubo un problema de conexión al enviar. Por favor contáctame por WhatsApp.');
    }
  };

  const resetForm = () => {
    setFormData({
      projectType: 'sprint',
      name: '',
      email: '',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-28 sm:py-40 scroll-mt-20">
      {/* Top Hairline Divider */}
      <div className="w-full h-px bg-black/[0.08] mb-20 sm:mb-28"></div>

      {/* Section Header: Monumental & Confident */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 sm:mb-28 gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono tracking-widest text-black/40 uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.02em] text-[#1a1a1e] leading-[1.06]">
            Iniciar un Proyecto
          </h2>
        </div>
        <p className="text-base sm:text-xl text-black/60 max-w-lg font-sans leading-relaxed">
          Cuéntame sobre tu marca o negocio. Respondo directamente en menos de 24 horas hábiles a tu correo o WhatsApp.
        </p>
      </div>

      {/* Form Container: Full Width, Expansive & Architectural */}
      <div className="w-full">
        {status === 'success' ? (
          <div className="p-12 sm:p-20 rounded-3xl sm:rounded-[36px] bg-white border border-black/10 text-center space-y-8 shadow-sm">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl font-mono">
              ✓
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1e] tracking-tight">
                Mensaje recibido con éxito
              </h3>
              <p className="text-black/60 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Gracias, <span className="text-black font-medium">{formData.name}</span>. He recibido tu solicitud para{' '}
                <span className="text-black font-medium">
                  {formData.projectType === 'sprint' ? 'Nuevo Proyecto (Sprint 7 Días)' : 'Consulta General'}
                </span>
                . Me pondré en contacto contigo en{' '}
                <span className="text-black font-medium">{formData.email}</span> lo antes posible.
              </p>
            </div>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-5">
              <button
                type="button"
                onClick={resetForm}
                className="px-8 py-4.5 rounded-full border border-black/15 hover:border-black text-sm sm:text-base font-sans font-medium transition-all"
                data-interactive
              >
                Enviar otro mensaje
              </button>
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4.5 rounded-full bg-[#1C1D20] text-white hover:bg-black text-sm sm:text-base font-sans font-medium transition-all"
                data-interactive
              >
                Abrir chat en WhatsApp ↗
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12 sm:space-y-16">
            {/* Row 1: Tipo de Consulta (Radio Pills) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start">
              <div className="lg:col-span-4 flex items-center gap-3.5 pt-3">
                <span className="px-3 py-1 rounded-full bg-[#1C1D20] text-white text-xs font-mono font-medium tracking-wider uppercase">
                  Requerido
                </span>
                <label className="text-lg sm:text-xl font-normal text-black/90">
                  Tipo de consulta
                </label>
              </div>
              <div className="lg:col-span-8 flex flex-col sm:flex-row gap-4">
                <label
                  onClick={() => setFormData({ ...formData, projectType: 'sprint' })}
                  className={`flex-1 flex items-center gap-4 px-7 py-5 sm:py-6 rounded-full cursor-pointer border transition-all select-none ${
                    formData.projectType === 'sprint'
                      ? 'bg-white border-[#1C1D20] shadow-sm'
                      : 'bg-white/70 border-black/10 hover:border-black/25'
                  }`}
                  data-interactive
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      formData.projectType === 'sprint'
                        ? 'border-[#1C1D20]'
                        : 'border-black/25'
                    }`}
                  >
                    {formData.projectType === 'sprint' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1C1D20]"></div>
                    )}
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-normal text-black/90">
                    Nuevo Proyecto (Sprint 7 Días)
                  </span>
                </label>

                <label
                  onClick={() => setFormData({ ...formData, projectType: 'general' })}
                  className={`flex-1 flex items-center gap-4 px-7 py-5 sm:py-6 rounded-full cursor-pointer border transition-all select-none ${
                    formData.projectType === 'general'
                      ? 'bg-white border-[#1C1D20] shadow-sm'
                      : 'bg-white/70 border-black/10 hover:border-black/25'
                  }`}
                  data-interactive
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      formData.projectType === 'general'
                        ? 'border-[#1C1D20]'
                        : 'border-black/25'
                    }`}
                  >
                    {formData.projectType === 'general' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1C1D20]"></div>
                    )}
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-normal text-black/90">
                    Consulta General / Otro
                  </span>
                </label>
              </div>
            </div>

            {/* Row 2: Nombre Completo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
              <div className="lg:col-span-4 flex items-center gap-3.5">
                <span className="px-3 py-1 rounded-full bg-[#1C1D20] text-white text-xs font-mono font-medium tracking-wider uppercase">
                  Requerido
                </span>
                <label htmlFor="contact-name" className="text-lg sm:text-xl font-normal text-black/90">
                  Nombre o negocio
                </label>
              </div>
              <div className="lg:col-span-8">
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Juan Pérez — Hotel Boutique"
                  className="w-full px-8 py-5 sm:py-6 rounded-full bg-white border border-black/10 text-base sm:text-xl leading-normal text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                  data-interactive
                />
              </div>
            </div>

            {/* Row 3: Correo Electrónico */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
              <div className="lg:col-span-4 flex items-center gap-3.5">
                <span className="px-3 py-1 rounded-full bg-[#1C1D20] text-white text-xs font-mono font-medium tracking-wider uppercase">
                  Requerido
                </span>
                <label htmlFor="contact-email" className="text-lg sm:text-xl font-normal text-black/90">
                  Correo electrónico
                </label>
              </div>
              <div className="lg:col-span-8">
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contacto@tunegocio.com"
                  className="w-full px-8 py-5 sm:py-6 rounded-full bg-white border border-black/10 text-base sm:text-xl leading-normal text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                  data-interactive
                />
              </div>
            </div>

            {/* Row 4: Mensaje / Detalles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start">
              <div className="lg:col-span-4 flex items-center gap-3.5 pt-4">
                <span className="px-3 py-1 rounded-full bg-[#1C1D20] text-white text-xs font-mono font-medium tracking-wider uppercase">
                  Requerido
                </span>
                <label htmlFor="contact-message" className="text-lg sm:text-xl font-normal text-black/90">
                  Detalles del proyecto
                </label>
              </div>
              <div className="lg:col-span-8">
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame sobre tu negocio, tu web actual (si tienes) o los objetivos que buscas lograr..."
                  className="w-full p-8 sm:p-10 rounded-3xl sm:rounded-[32px] bg-white border border-black/10 text-base sm:text-xl leading-normal text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all resize-none shadow-[0_4px_20px_rgba(0,0,0,0.02)] min-h-[200px]"
                  data-interactive
                />
              </div>
            </div>

            {/* Error banner if any */}
            {errorMessage && (
              <div className="text-red-600 text-sm font-mono text-right">
                {errorMessage}
              </div>
            )}

            {/* Row 5: Action Button (Generous Monumental Pill) */}
            <div className="flex justify-end pt-4">
              <Magnetic strength={0.25} radius={90}>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-[#1C1D20] hover:bg-black text-white text-base sm:text-xl font-normal leading-normal tracking-[-0.01em] transition-all duration-300 shadow-xl active:scale-95 inline-flex items-center gap-4 cursor-pointer group disabled:opacity-60"
                  data-interactive
                >
                  <span>{status === 'submitting' ? 'Enviando...' : 'Enviar consulta'}</span>
                  <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-sm text-white group-hover:bg-white group-hover:text-black transition-all">
                    →
                  </span>
                </button>
              </Magnetic>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
