import React from 'react';
import { useTilt } from '../../hooks/useTilt';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  'data-project-card'?: boolean;
  'data-interactive'?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 5,
  scale = 1.01,
  'data-project-card': isProjectCard,
  'data-interactive': isInteractive,
  ...props
}) => {
  const { ref, style } = useTilt<HTMLDivElement>({ max: maxTilt, scale });

  const isDark =
    className.includes('bg-[#0c0d12]') ||
    className.includes('bg-[#1C1D20]') ||
    className.includes('bg-[#0e382b]');

  return (
    <div
      ref={ref}
      style={style}
      className={`relative will-change-transform overflow-hidden ${className}`}
      data-project-card={isProjectCard ? '' : undefined}
      data-interactive={isInteractive ? '' : undefined}
      {...props}
    >
      {/* Specular Dynamic Spotlight (Adapts to light & dark surfaces) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: isDark
            ? 'radial-gradient(450px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.12), transparent 70%)'
            : 'radial-gradient(450px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.045), transparent 70%)',
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};
