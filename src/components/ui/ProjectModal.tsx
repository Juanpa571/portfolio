import React, { useEffect } from 'react';
import type { ProjectItem } from '../../config/site';
import { siteConfig } from '../../config/site';
import { PlaceholderImage } from './PlaceholderImage';
import { Magnetic } from './Magnetic';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappInquiryUrl = `${siteConfig.profile.contact.whatsapp}%20regarding%20a%20project%20like%20${encodeURIComponent(project.title)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#fafaf8] text-black rounded-[2rem] border border-black/10 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-10 pt-7 pb-4 border-b border-black/[0.08] select-none shrink-0">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono px-3 py-1 rounded-full font-bold tracking-wider border flex items-center gap-2"
              style={{
                backgroundColor: project.theme?.badgeBg || '#000000',
                color: project.theme?.badgeText || '#ffffff',
                borderColor: project.theme?.badgeBorder || 'transparent',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: project.theme?.accentColor || '#10b981' }}
              ></span>
              <span>{project.clientTag}</span>
            </span>
            <span className="text-xs font-mono text-black/50 font-semibold">
              {project.number}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-xs font-mono text-black/65">
              {project.theme?.tagline || project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-black/5 hover:bg-black hover:text-white flex items-center justify-center text-sm font-mono text-black transition-all cursor-pointer"
            data-interactive
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1">
          {/* Main Title & Tagline */}
          <div className="space-y-3">
            <h3
              id="modal-project-title"
              className="text-3xl sm:text-4xl md:text-5xl font-normal font-display tracking-tight text-black leading-tight"
            >
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-black/75 font-sans leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Visual Specimen Container */}
          <div className="rounded-2xl border border-black/10 bg-white p-3 sm:p-4 shadow-xs overflow-hidden">
            <PlaceholderImage
              id={project.id}
              title={project.title}
              recommendedAspect={project.aspectRatio}
              dimensions={project.dimensions}
              src={project.image}
            />
          </div>

          {/* Metadata & Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-black/[0.08] text-xs font-mono">
            <div className="space-y-1.5">
              <span className="text-black/40 uppercase tracking-wider text-[10px]">Location & Scope</span>
              <p className="text-black/85 font-medium">{project.location} • Bespoke Web Architecture</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-black/40 uppercase tracking-wider text-[10px]">Core Stack & Craft</span>
              <p className="text-black/85 font-medium">{project.tech}</p>
            </div>
          </div>
        </div>

        {/* Bottom Sticky Action Bar */}
        <div className="px-6 sm:px-10 py-5 bg-white border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 select-none shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-black/60">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: project.theme?.accentColor || '#10b981' }}
            ></span>
            <span>Available for custom commissions</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Magnetic strength={0.3} radius={60}>
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-sans font-medium transition-all flex items-center justify-center gap-2 shadow-xs"
                style={{
                  backgroundColor: project.theme?.buttonHoverBg || '#1C1D20',
                  color: project.theme?.buttonHoverText || '#ffffff',
                }}
                data-interactive
              >
                <span>Discuss a similar project</span>
                <span className="font-mono">↗</span>
              </a>
            </Magnetic>
          </div>
        </div>

      </div>
    </div>
  );
};
