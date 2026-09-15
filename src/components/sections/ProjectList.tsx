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
        
        {/* Monumental Section Header */}
        <div
          className="mb-12 sm:mb-20 pb-8 border-b border-black/10"
          onMouseEnter={() => setActiveProject(null)}
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal font-display text-black tracking-[-0.01em] leading-[1.06] sm:leading-[1.1]">
            {t.projects.headerLine1}<br />
            <span className="sm:pl-16 lg:pl-24 inline-block text-black/50 hover:text-black transition-colors duration-500">
              {t.projects.headerLine2}
            </span>
          </h2>
        </div>

        {/* Clean Editorial Project Rows */}
        <div
          className="border-t border-black/10"
          onMouseLeave={() => setActiveProject(null)}
        >
          {siteConfig.projects.map((project) => {
            const isCurrentActive = activeProject?.id === project.id;
            const theme = project.theme;

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  setIsHoveringSection(true);
                  setActiveProject(project);
                }}
                onClick={() => setModalProject(project)}
                className={`py-12 sm:py-16 lg:py-20 border-b border-black/10 transition-all duration-500 group cursor-pointer relative px-4 sm:px-8 -mx-4 sm:-mx-8 rounded-3xl ${
                  isCurrentActive
                    ? 'bg-black/[0.02]'
                    : 'bg-transparent'
                }`}
                data-interactive
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
                  
                  {/* Left: Index Number & Monumental Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-sm sm:text-base font-light font-display text-black/35 group-hover:text-black transition-colors duration-300 select-none">
                      {project.number}
                    </span>
                    <h3 className="text-4xl sm:text-6xl lg:text-7xl font-light font-display tracking-[-0.01em] text-black group-hover:translate-x-3 transition-transform duration-500 ease-out">
                      {t.projects.items[project.id]?.title || project.title}
                    </h3>
                  </div>

                  {/* Right: Editorial Discipline, Location & Action Arrow */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-12 pl-12 lg:pl-0">
                    <div className="space-y-1 text-left lg:text-right">
                      <div className="text-sm sm:text-base font-sans text-black/75 font-normal">
                        {t.projects.items[project.id]?.category || project.category}
                      </div>
                      <div className="text-xs sm:text-sm font-sans text-black/45 flex items-center lg:justify-end gap-2">
                        <span>{project.location}</span>
                        <span className="text-black/25">•</span>
                        <span>{t.projects.conceptDemoBadge}</span>
                      </div>
                    </div>

                    {/* Circular Magnetic Action Icon */}
                    <Magnetic strength={0.4} radius={60}>
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black/15 bg-white flex items-center justify-center text-sm font-sans transition-all duration-300 shadow-xs group-hover:bg-black group-hover:text-white group-hover:border-black"
                        style={{
                          backgroundColor: isCurrentActive
                            ? theme?.accentColor || '#000000'
                            : undefined,
                          color: isCurrentActive
                            ? '#ffffff'
                            : undefined,
                          borderColor: isCurrentActive
                            ? theme?.accentColor || '#000000'
                            : undefined,
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
            <div className="w-[420px] rounded-3xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.25)] p-4 overflow-hidden space-y-3">
              {/* Card Meta Header */}
              <div className="flex items-center justify-between text-xs font-sans pb-2 border-b border-black/5">
                <span className="text-black font-medium">
                  {t.projects.items[displayedProject.id]?.title || displayedProject.title}
                </span>
                <span className="text-black/45">
                  {t.projects.items[displayedProject.id]?.category || displayedProject.category}
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
              <div className="flex items-center justify-between text-xs font-sans text-black/60 pt-0.5">
                <span>{displayedProject.location}</span>
                <span className="text-black/80 font-medium">
                  {t.projects.futureVisionDemo}
                </span>
              </div>
            </div>

            {/* Floating Snellenberg View Badge */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-[#1C1D20] text-white flex items-center justify-center text-xs font-sans font-medium shadow-2xl border border-white/20">
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
