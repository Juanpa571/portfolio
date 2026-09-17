import React, { useState, useEffect, useRef } from 'react';
import { siteConfig, type ProjectItem } from '../../config/site';
import { Magnetic } from '../ui/Magnetic';
import { ProjectModal } from '../ui/ProjectModal';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProjectList: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [displayedProject, setDisplayedProject] = useState<ProjectItem | null>(null);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const rowsRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          once: true,
        },
      });

      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
          },
          0
        );
      }

      if (rowsRef.current) {
        const rows = rowsRef.current.querySelectorAll('.project-row-item');
        tl.fromTo(
          rows,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
          },
          0.1
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      ref={sectionRef}
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
          ref={headerRef}
          className="mb-12 sm:mb-20 pb-8 border-b border-black/10 will-change-[transform,opacity]"
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
          ref={rowsRef}
          className="border-t border-black/10"
          onMouseLeave={() => setActiveProject(null)}
        >
          {siteConfig.projects.map((project) => {
            const isInteractive = !project.isCta && project.id !== 'next-project';
            const isCurrentActive = isInteractive && activeProject?.id === project.id;
            const theme = project.theme;

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  if (isInteractive) {
                    setIsHoveringSection(true);
                    setActiveProject(project);
                  } else {
                    setActiveProject(null);
                  }
                }}
                onClick={() => {
                  if (isInteractive) {
                    setModalProject(project);
                  } else {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className={`project-row-item will-change-[transform,opacity] py-12 sm:py-16 lg:py-20 border-b border-black/10 transition-all duration-500 relative px-4 sm:px-8 -mx-4 sm:-mx-8 rounded-3xl cursor-pointer ${
                  isInteractive
                    ? 'group ' + (isCurrentActive ? 'bg-black/[0.02]' : 'bg-transparent')
                    : 'group hover:bg-black/[0.015]'
                }`}
                data-interactive
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
                  
                  {/* Left: Index Number & Monumental Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-sm sm:text-base font-light font-display text-black/35 select-none">
                      {project.number}
                    </span>
                    <h3 className={`text-4xl sm:text-6xl lg:text-7xl font-light font-display tracking-[-0.01em] text-black ${
                      isInteractive
                        ? 'group-hover:translate-x-3 transition-transform duration-500 ease-out'
                        : 'group-hover:translate-x-2 transition-transform duration-500 ease-out'
                    }`}>
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
                        {isInteractive ? (
                          <>
                            <span>{project.location}</span>
                            <span className="text-black/25">•</span>
                            <span>{t.projects.conceptDemoBadge}</span>
                          </>
                        ) : (
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-black/60 group-hover:text-black transition-colors">
                              {language === 'es'
                                ? 'Espacio reservado para tu marca • Clic para reservar'
                                : 'Reserved for your brand • Click to inquire'}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Circular Magnetic Action Icon */}
                    {isInteractive ? (
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
                    ) : (
                      <Magnetic strength={0.3} radius={50}>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black/15 bg-white flex items-center justify-center text-sm font-sans transition-all duration-300 shadow-xs group-hover:bg-[#1C1D20] group-hover:text-white group-hover:border-[#1C1D20]">
                          <span className="group-hover:translate-y-0.5 transition-transform duration-200">
                            ↓
                          </span>
                        </div>
                      </Magnetic>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Floating Projected Image Preview (Snellenberg Style Cursor Follower) */}
      <div
        ref={floatingCardRef}
        className={`hidden md:block pointer-events-none fixed z-[9999] top-0 left-0 will-change-transform transition-all duration-300 ease-out ${
          isHoveringSection && activeProject ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {displayedProject && (
          <div className="w-[380px] lg:w-[420px] aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_30px_90px_-15px_rgba(0,0,0,0.35)] border border-black/10 bg-[#1C1D20]">
            <img
              src={displayedProject.image}
              alt={t.projects.items[displayedProject.id]?.title || displayedProject.title}
              className="w-full h-full object-cover"
              decoding="async"
            />
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
