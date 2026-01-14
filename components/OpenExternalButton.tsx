"use client";

import React from "react";
import { Play } from "lucide-react";

type OpenExternalButtonProps = {
  url: string;          // e.g. https://www.loom.com/share/your-video-id
  label?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  showIcon?: boolean;
};

export const OpenExternalButton: React.FC<OpenExternalButtonProps> = ({
  url,
  label = "Watch video",
  variant = 'primary',
  className = '',
  showIcon = true,
}) => {
  const handleClick = () => {
    // open in new tab, with security flags
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200';

  const variantStyles = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-cta-hover)]',
    secondary:
      'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={combinedClassName}
    >
      {showIcon && <Play className="w-5 h-5" />}
      {label}
    </button>
  );
};
