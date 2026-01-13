'use client';

import Link from 'next/link';
import { ReactNode, ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-cta-hover)]',
    secondary:
      'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href && !disabled) {
    // Handle hash links (same-page anchors) with scroll behavior
    if (href.startsWith('#')) {
      return (
        <a
          href={href}
          className={combinedClassName}
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          {children}
        </a>
      );
    }
    // Handle external links (http/https) with regular <a> tag to support target/rel
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      );
    }
    // Internal links use next/link
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}
