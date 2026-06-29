'use client';

import dynamic from 'next/dynamic';

const LandingUsExitCalculator = dynamic(
  () => import('@/components/usa-landing/LandingUsExitCalculator'),
  {
    ssr: false,
    loading: () => (
      <div className='rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8 text-center text-[var(--color-text-secondary)]'>
        Loading calculator…
      </div>
    ),
  },
);

export default function EmbeddedUsExitCalculator() {
  return <LandingUsExitCalculator />;
}
