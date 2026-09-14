import React, { useState, useEffect, useRef } from 'react';
import { siteConfig, type ProjectItem } from '../../config/site';
import { PlaceholderImage } from '../ui/PlaceholderImage';
import { Magnetic } from '../ui/Magnetic';
import { ProjectModal } from '../ui/ProjectModal';
import { useLanguage } from '../../context/LanguageContext';

export const ProjectList: React.FC = () => {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [displayedProject, setDisplayedProject] = useState<ProjectItem | null>(null);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  const mousePos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (activeProject) {
      setDisplayedProject(activeProject);
    }
  }, [activeProject]);

  useEffect(() => {
    // Only track fine pointer movements (mouse/trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      setActiveProject(null);
      setIsHoveringSection(false);
    };

    const handleDocLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        setActiveProject(null);
        setIsHoveringSection(false);
      }
    };

    const handleBlur = () => {
      setActiveProject(null);
      setIsHoveringSection(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('blur', handleBlur);
    document.addEventListener('mouseleave', handleDocLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('mouseleave', handleDocLeave);
    };
  }, []);

  // Run the floating preview lerp loop strictly when hovering or active
  useEffect(() => {
    if (!isHoveringSection && !activeProject) {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
        animFrameId.current = null;
      }
      return;
    }

    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const loop = () => {
      const ease = 0.16;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (floatingCardRef.current) {
        floatingCardRef.current.style.transform = `translate3d(${currentPos.current.x + 35}px, ${currentPos.current.y - 140}px, 0) rotate(1.5deg)`;
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
        animFrameId.current = null;
      }
    };
  }, [isHoveringSection, activeProject]);

  // Asymmetric indentation classes per project index for deliberate diagonal tension
  const getAsymmetricIndent = (index: number) => {
    switch (index) {
      case 0:
        return 'lg:pl-0'; // Anchored hard left (monumental flagship)
      case 1:
        return 'lg:pl-36'; // Pushed aggressively right
      case 2:
        return 'lg:pl-12'; // Counter-balance center-left
      case 3:
        return 'lg:pl-44'; // Pushed far right
      default:
        return 'lg:pl-0';
    }
  };

  return (
    <section
      id="work"
      className="py-24 lg:py-36 relative overflow-hidden"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => {
        setIsHoveringSection(false);
        setActiveProject(null);
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Asymmetric Section Header with Monumental Scale Contrast */}
        <div
          className="mb-16 pb-8 border-b border-black/10"
          onMouseEnter={() => setActiveProject(null)}
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal font-display text-black tracking-[-0.01em] leading-[1.06] sm:leading-[1.1] pb-1">
            {t.projects.headerLine1}<br />
            <span className="sm:pl-16 lg:pl-24 inline-block text-black/55 hover:text-black transition-colors duration-500">
              {t.projects.headerLine2}
            </span>
          </h2>
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-black/65 select-none">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.projects.tagline}</span>
            </div>
            <div className="text-black/45 text-[11px]">
              {t.projects.subtagline}
            </div>
          </div>
        </div>

        {/* Asymmetric Diagonal Project List with bespoke themed rows */}
        <div
          className="flex flex-col gap-5 border-b border-black/10 pb-6"
          onMouseLeave={() => setActiveProject(null)}
        >
          {siteConfig.projects.map((project, idx) => {
            const isCurrentActive = activeProject?.id === project.id;
            const indentClass = getAsymmetricIndent(idx);
            const theme = project.theme;

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  setIsHoveringSection(true);
                  setActiveProject(project);
                }}
                onClick={() => setModalProject(project)}
                style={{
                  backgroundColor: isCurrentActive
                    ? theme?.hoverBg || 'rgba(0,0,0,0.03)'
                    : theme?.cardBg || 'rgba(0,0,0,0.01)',
                  borderColor: isCurrentActive
                    ? theme?.borderColor || 'rgba(0,0,0,0.2)'
                    : theme?.borderColor || 'rgba(0,0,0,0.08)',
                  boxShadow: isCurrentActive && theme
                    ? `0 20px 45px -15px ${theme.glowColor}`
                    : 'none',
                }}
                className={`py-10 sm:py-14 transition-all duration-500 group cursor-pointer relative px-6 sm:px-10 rounded-[2rem] border ${
                  isCurrentActive
                    ? 'opacity-100 scale-[1.008]'
                    : activeProject
                    ? 'opacity-35 blur-[0.2px]'
                    : 'opacity-100'
                }`}
                data-interactive
              >
                {/* Subtle Background Watermark Number tinted with accent color */}
                <div
                  className="absolute top-4 right-8 text-7xl sm:text-9xl font-display font-bold transition-all duration-500 pointer-events-none select-none"
                  style={{
                    color: theme?.accentColor || 'currentColor',
                    opacity: isCurrentActive ? 0.14 : 0.04,
                  }}
                >
                  {project.number}
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${indentClass} transition-all duration-500`}>
                  
                  {/* Client Identifier & Meta Badges (Col 1-3) */}
                  <div className="md:col-span-4 lg:col-span-3 space-y-2 z-10">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full font-bold tracking-wider transition-all duration-300 border flex items-center gap-2"
                        style={{
                          backgroundColor: isCurrentActive
                            ? theme?.buttonHoverBg || '#000000'
                            : theme?.badgeBg || 'rgba(0,0,0,0.05)',
                          color: isCurrentActive
                            ? theme?.buttonHoverText || '#ffffff'
                            : theme?.badgeText || '#000000',
                          borderColor: theme?.badgeBorder || 'transparent',
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: isCurrentActive
                              ? theme?.accentColor || '#10b981'
                              : theme?.accentColor || '#000000',
                          }}
                        ></span>
                        <span>{project.clientTag}</span>
                      </span>
                      <span className="text-xs font-mono text-black/40 font-semibold">
                        {project.number}
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/5 text-black/55 font-semibold">
                        {t.projects.conceptDemoBadge}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-black/65 pt-0.5 space-y-0.5">
                      <div className="font-semibold text-black/85">
                        {t.projects.items[project.id]?.tagline || theme?.tagline || project.category}
                      </div>
                      <div className="text-black/50">
                        {project.location}
                      </div>
                    </div>
                  </div>

                  {/* Monumental Asymmetric Project Title (Col 4-11) */}
                  <div className="md:col-span-7 lg:col-span-8 z-10">
                    <h3 className={`font-normal font-display tracking-tight text-black transition-all duration-300 ${
                      idx === 0
                        ? 'text-4xl sm:text-5xl lg:text-6xl'
                        : 'text-3xl sm:text-4xl lg:text-5xl'
                    } ${isCurrentActive ? 'translate-x-3 sm:translate-x-5' : ''}`}>
                      {t.projects.items[project.id]?.title || project.title}
                    </h3>
                  </div>

                  {/* Right Action Circle with Magnetic Physics (Col 12) */}
                  <div className="md:col-span-1 flex justify-start md:justify-end z-10">
                    <Magnetic strength={0.45} radius={60}>
                      <div
                        className="w-12 h-12 rounded-full border flex items-center justify-center text-sm font-mono transition-all duration-300 shadow-xs"
                        style={{
                          backgroundColor: isCurrentActive
                            ? theme?.buttonHoverBg || '#000000'
                            : '#ffffff',
                          color: isCurrentActive
                            ? theme?.buttonHoverText || '#ffffff'
                            : '#000000',
                          borderColor: isCurrentActive
                            ? theme?.buttonHoverBg || '#000000'
                            : theme?.borderColor || 'rgba(0,0,0,0.15)',
                        }}
                      >
                        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                          ↗
                        </span>
                      </div>
                    </Magnetic>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Floating Projected Image Preview Card (Snellenberg Style Cursor Follower) */}
      <div
        ref={floatingCardRef}
        className={`hidden md:block pointer-events-none fixed z-[9999] top-0 left-0 will-change-transform transition-all duration-300 ease-out ${
          isHoveringSection && activeProject ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {displayedProject && (
          <div className="relative">
            <div className="w-[380px] rounded-3xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.35)] p-4 overflow-hidden space-y-3 animate-in fade-in duration-200">
              {/* Card Meta Header */}
              <div className="flex items-center justify-between text-xs font-mono pb-1.5 border-b border-black/5">
                <span className="px-2 py-0.5 rounded-full bg-black/5 text-black font-semibold text-[10px]">
                  {t.projects.items[displayedProject.id]?.category || displayedProject.category}
                </span>
                <span className="text-black/50 text-[10px] font-mono">
                  {displayedProject.clientTag} • {displayedProject.number}
                </span>
              </div>

              {/* High-Craft Image Container */}
              <div className="overflow-hidden rounded-2xl bg-[#f8f8f6] border border-black/5">
                <PlaceholderImage
                  id={displayedProject.id}
                  title={t.projects.items[displayedProject.id]?.title || displayedProject.title}
                  recommendedAspect={displayedProject.aspectRatio}
                  dimensions={displayedProject.dimensions}
                  src={displayedProject.image}
                  className="transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between text-[11px] font-mono text-black/75 pt-0.5">
                <span className="truncate max-w-[200px]">{t.projects.items[displayedProject.id]?.tech || displayedProject.tech}</span>
                <span className="text-black font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{t.projects.futureVisionDemo}</span>
                </span>
              </div>
            </div>

            {/* Floating Snellenberg View Badge */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-[#1C1D20] text-white flex items-center justify-center text-xs font-mono font-medium shadow-2xl border border-white/20 animate-in zoom-in-75 duration-300">
              <span>{t.projects.demoButton}</span>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Concept Case Study Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />

    </section>
  );
};
