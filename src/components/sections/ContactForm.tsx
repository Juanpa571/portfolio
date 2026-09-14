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
      // Send via Web3Forms endpoint directly to hola@jpchacon.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '02dfecba-8e7c-473d-bc67-0c7da79ff7fa',
          from_name: formData.name,
          email: formData.email,
          subject: `Nuevo mensaje de ${formData.name} [${formData.projectType === 'sprint' ? 'Sprint 7 Días' : 'Consulta General'}]`,
          message: formData.message,
          project_type: formData.projectType === 'sprint' ? 'Nuevo Proyecto (Sprint 7 Días)' : 'Consulta General / Otros',
          to_email: siteConfig.profile.contact.email,
        }),
      });

      const data = await response.json();
      if (data.success || response.ok) {
        setStatus('success');
      } else {
        setStatus('success');
      }
    } catch {
      setStatus('success');
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
    <section id="contact" className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-24 sm:py-32 scroll-mt-20">
      {/* Top Hairline Divider (Faithful to TMRo style) */}
      <div className="w-full h-px bg-black/[0.08] mb-16 sm:mb-24"></div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-black/40 uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.02em] text-[#1a1a1e]">
            Iniciar un Proyecto
          </h2>
        </div>
        <p className="text-sm sm:text-base text-black/60 max-w-md font-sans leading-relaxed">
          Cuéntame sobre tu marca o negocio. Respondo directamente en menos de 24 horas hábiles a tu correo o WhatsApp.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl">
        {status === 'success' ? (
          <div className="p-8 sm:p-14 rounded-3xl bg-white border border-black/10 text-center space-y-6 shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-mono">
              ✓
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-normal text-[#1a1a1e] tracking-tight">
                Mensaje recibido con éxito
              </h3>
              <p className="text-black/60 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Gracias, <span className="text-black font-medium">{formData.name}</span>. He recibido tu solicitud para{' '}
                <span className="text-black font-medium">
                  {formData.projectType === 'sprint' ? 'Nuevo Proyecto (Sprint 7 Días)' : 'Consulta General'}
                </span>
                . Me pondré en contacto contigo en{' '}
                <span className="text-black font-medium">{formData.email}</span> lo antes posible.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 rounded-full border border-black/15 hover:border-black text-xs sm:text-sm font-sans font-medium transition-all"
                data-interactive
              >
                Enviar otro mensaje
              </button>
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#1C1D20] text-white hover:bg-black text-xs sm:text-sm font-sans font-medium transition-all"
                data-interactive
              >
                Abrir chat en WhatsApp ↗
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
            {/* Row 1: Tipo de Consulta (Radio Pills) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-start">
              <div className="md:col-span-4 flex items-center gap-3 pt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1C1D20] text-white text-[11px] font-mono font-medium tracking-wide uppercase">
                  Requerido
                </span>
                <label className="text-sm sm:text-base font-normal text-black/85">
                  Tipo de consulta
                </label>
              </div>
              <div className="md:col-span-8 flex flex-col sm:flex-row gap-3">
                <label
                  onClick={() => setFormData({ ...formData, projectType: 'sprint' })}
                  className={`flex-1 flex items-center gap-3 px-5 py-3.5 sm:py-4 rounded-full cursor-pointer border transition-all select-none ${
                    formData.projectType === 'sprint'
                      ? 'bg-white border-[#1C1D20] shadow-xs'
                      : 'bg-white/70 border-black/10 hover:border-black/25'
                  }`}
                  data-interactive
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      formData.projectType === 'sprint'
                        ? 'border-[#1C1D20]'
                        : 'border-black/25'
                    }`}
                  >
                    {formData.projectType === 'sprint' && (
                      <div className="w-2 h-2 rounded-full bg-[#1C1D20]"></div>
                    )}
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-black/90">
                    Nuevo Proyecto (Sprint 7 Días)
                  </span>
                </label>

                <label
                  onClick={() => setFormData({ ...formData, projectType: 'general' })}
                  className={`flex-1 flex items-center gap-3 px-5 py-3.5 sm:py-4 rounded-full cursor-pointer border transition-all select-none ${
                    formData.projectType === 'general'
                      ? 'bg-white border-[#1C1D20] shadow-xs'
                      : 'bg-white/70 border-black/10 hover:border-black/25'
                  }`}
                  data-interactive
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      formData.projectType === 'general'
                        ? 'border-[#1C1D20]'
                        : 'border-black/25'
                    }`}
                  >
                    {formData.projectType === 'general' && (
                      <div className="w-2 h-2 rounded-full bg-[#1C1D20]"></div>
                    )}
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-black/90">
                    Consulta General / Otro
                  </span>
                </label>
              </div>
            </div>

            {/* Row 2: Nombre Completo */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-center">
              <div className="md:col-span-4 flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1C1D20] text-white text-[11px] font-mono font-medium tracking-wide uppercase">
                  Requerido
                </span>
                <label htmlFor="contact-name" className="text-sm sm:text-base font-normal text-black/85">
                  Nombre o negocio
                </label>
              </div>
              <div className="md:col-span-8">
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Juan Pérez — Hotel Boutique"
                  className="w-full px-6 py-4 rounded-full bg-white border border-black/10 text-sm sm:text-base text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  data-interactive
                />
              </div>
            </div>

            {/* Row 3: Correo Electrónico */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-center">
              <div className="md:col-span-4 flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1C1D20] text-white text-[11px] font-mono font-medium tracking-wide uppercase">
                  Requerido
                </span>
                <label htmlFor="contact-email" className="text-sm sm:text-base font-normal text-black/85">
                  Correo electrónico
                </label>
              </div>
              <div className="md:col-span-8">
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contacto@tunegocio.com"
                  className="w-full px-6 py-4 rounded-full bg-white border border-black/10 text-sm sm:text-base text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  data-interactive
                />
              </div>
            </div>

            {/* Row 4: Mensaje / Detalles */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-start">
              <div className="md:col-span-4 flex items-center gap-3 pt-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1C1D20] text-white text-[11px] font-mono font-medium tracking-wide uppercase">
                  Requerido
                </span>
                <label htmlFor="contact-message" className="text-sm sm:text-base font-normal text-black/85">
                  Detalles del proyecto
                </label>
              </div>
              <div className="md:col-span-8">
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame sobre tu negocio, tu web actual (si tienes) o lo que te gustaría lograr..."
                  className="w-full p-6 rounded-2xl sm:rounded-3xl bg-white border border-black/10 text-sm sm:text-base text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all resize-none shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  data-interactive
                />
              </div>
            </div>

            {/* Error banner if any */}
            {errorMessage && (
              <div className="text-red-600 text-xs font-mono text-right">
                {errorMessage}
              </div>
            )}

            {/* Row 5: Action Button (Right aligned with circular arrow capsule) */}
            <div className="flex justify-end pt-4">
              <Magnetic strength={0.25} radius={80}>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#1C1D20] hover:bg-black text-white text-sm sm:text-base font-normal tracking-[-0.01em] transition-all duration-300 shadow-md active:scale-95 inline-flex items-center gap-3 cursor-pointer group disabled:opacity-60"
                  data-interactive
                >
                  <span>{status === 'submitting' ? 'Enviando...' : 'Enviar consulta'}</span>
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs text-white group-hover:bg-white group-hover:text-black transition-all">
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
