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
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-black text-white font-bold tracking-wider">
              {project.clientTag}
            </span>
            <span className="text-xs font-mono text-black/50">
              Project {project.number}
            </span>
            <span className="text-black/20">•</span>
            <span className="text-xs font-mono text-black/65">
              {project.category}
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
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Available for custom commissions</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Magnetic strength={0.3} radius={60}>
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1C1D20] text-white text-xs font-sans font-medium hover:bg-black transition-all flex items-center justify-center gap-2"
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
