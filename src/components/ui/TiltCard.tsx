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

  return (
    <div
      ref={ref}
      style={style}
      className={`relative will-change-transform ${className}`}
      data-project-card={isProjectCard ? '' : undefined}
      data-interactive={isInteractive ? '' : undefined}
      {...props}
    >
      {children}
    </div>
  );
};
