import React, { useState } from 'react';
import { Magnetic } from '../ui/Magnetic';
import { siteConfig } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

type ProjectType = 'new_project' | 'general';

interface FormState {
  projectType: ProjectType;
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    projectType: 'new_project',
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
      setErrorMessage(t.contact.validationError);
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
      formPayload.append(
        'subject',
        `Nuevo mensaje de ${formData.name} [${
          formData.projectType === 'new_project' ? 'Nuevo Proyecto' : 'Consulta General'
        }]`
      );
      formPayload.append(
        'tipo_de_proyecto',
        formData.projectType === 'new_project' ? 'Nuevo Proyecto' : 'Consulta General / Otros'
      );
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
        setErrorMessage(data.message || t.contact.networkError);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.contact.networkError);
    }
  };

  const resetForm = () => {
    setFormData({
      projectType: 'new_project',
      name: '',
      email: '',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-16 sm:py-20 lg:py-24 scroll-mt-16 flex flex-col justify-center">
      {/* Top Hairline Divider */}
      <div className="w-full h-px bg-black/[0.08] mb-12 sm:mb-16"></div>

      {/* Section Header: Balanced & Architectural */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1e] leading-[1.08]">
            {t.contact.title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-black/60 max-w-md font-sans leading-relaxed">
          {t.contact.description}
        </p>
      </div>

      {/* Form Container: Full Width with Screen-Fit Proportions */}
      <div className="w-full">
        {status === 'success' ? (
          <div className="p-10 sm:p-16 rounded-3xl bg-white border border-black/10 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-mono">
              ✓
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1a1a1e] tracking-tight">
                {t.contact.successTitle}
              </h3>
              <p className="text-black/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                {t.contact.successMessage(
                  formData.name,
                  formData.projectType === 'new_project' ? t.contact.newProject : t.contact.generalInquiry,
                  formData.email
                )}
              </p>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3.5 rounded-full border border-black/15 hover:border-black text-xs sm:text-sm font-sans font-medium transition-all"
                data-interactive
              >
                {t.contact.sendAnother}
              </button>
              <a
                href={siteConfig.profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#1C1D20] text-white hover:bg-black text-xs sm:text-sm font-sans font-medium transition-all"
                data-interactive
              >
                {t.contact.openWhatsApp}
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
            {/* Row 1: Tipo de Consulta */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 items-center">
              <div className="lg:col-span-4">
                <label className="text-base sm:text-lg font-normal text-black/90">
                  {t.contact.inquiryType}
                </label>
              </div>
              <div className="lg:col-span-8 flex flex-col sm:flex-row gap-3">
                <label
                  onClick={() => setFormData({ ...formData, projectType: 'new_project' })}
                  className={`flex-1 flex items-center gap-3.5 px-6 py-3.5 sm:py-4 rounded-full cursor-pointer border transition-all select-none ${
                    formData.projectType === 'new_project'
                      ? 'bg-white border-[#1C1D20] shadow-xs'
                      : 'bg-white/70 border-black/10 hover:border-black/25'
                  }`}
                  data-interactive
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      formData.projectType === 'new_project'
                        ? 'border-[#1C1D20]'
                        : 'border-black/25'
                    }`}
                  >
                    {formData.projectType === 'new_project' && (
                      <div className="w-2 h-2 rounded-full bg-[#1C1D20]"></div>
                    )}
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-normal text-black/90">
                    {t.contact.newProject}
                  </span>
                </label>

                <label
                  onClick={() => setFormData({ ...formData, projectType: 'general' })}
                  className={`flex-1 flex items-center gap-3.5 px-6 py-3.5 sm:py-4 rounded-full cursor-pointer border transition-all select-none ${
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
                  <span className="text-xs sm:text-sm lg:text-base font-normal text-black/90">
                    {t.contact.generalInquiry}
                  </span>
                </label>
              </div>
            </div>

            {/* Row 2: Nombre Completo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 items-center">
              <div className="lg:col-span-4">
                <label htmlFor="contact-name" className="text-base sm:text-lg font-normal text-black/90">
                  {t.contact.nameLabel}
                </label>
              </div>
              <div className="lg:col-span-8">
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-7 py-3.5 sm:py-4 rounded-full bg-white border border-black/10 text-sm sm:text-base leading-normal text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                  data-interactive
                />
              </div>
            </div>

            {/* Row 3: Correo Electrónico */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 items-center">
              <div className="lg:col-span-4">
                <label htmlFor="contact-email" className="text-base sm:text-lg font-normal text-black/90">
                  {t.contact.emailLabel}
                </label>
              </div>
              <div className="lg:col-span-8">
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full px-7 py-3.5 sm:py-4 rounded-full bg-white border border-black/10 text-sm sm:text-base leading-normal text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                  data-interactive
                />
              </div>
            </div>

            {/* Row 4: Mensaje / Detalles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-10 items-start">
              <div className="lg:col-span-4 pt-3">
                <label htmlFor="contact-message" className="text-base sm:text-lg font-normal text-black/90">
                  {t.contact.messageLabel}
                </label>
              </div>
              <div className="lg:col-span-8">
                <textarea
                  id="contact-message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-black/10 text-sm sm:text-base leading-normal text-black placeholder:text-black/30 focus:outline-none focus:border-[#1C1D20] focus:ring-1 focus:ring-[#1C1D20] transition-all resize-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] min-h-[120px]"
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

            {/* Row 5: Action Button (Proportionate Monumental Pill) */}
            <div className="flex justify-end pt-2">
              <Magnetic strength={0.25} radius={80}>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-9 sm:px-12 py-3.5 sm:py-4 rounded-full bg-[#1C1D20] hover:bg-black text-white text-sm sm:text-base font-normal leading-normal tracking-[-0.01em] transition-all duration-300 shadow-md active:scale-95 inline-flex items-center gap-3.5 cursor-pointer group disabled:opacity-60"
                  data-interactive
                >
                  <span>{status === 'submitting' ? t.contact.submitSending : t.contact.submitIdle}</span>
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
