import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='bg-white border-b border-[var(--color-border-subtle)] sticky top-0 z-50'>
      <nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src='/Velocity IQ Logo_only.png'
            alt='VelocityIQ Logo'
            width={40}
            height={40}
            priority
            className='h-10 w-auto'
            unoptimized
          />
          <span className='text-xl font-bold text-[var(--color-primary)]'>
            VelocityIQ
          </span>
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          <Link
            href='/suitability'
            className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors'
          >
            Suitability Analysis
          </Link>
          <Link
            href='/risk-defense'
            className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors'
          >
            Risk Defense
          </Link>
          <Link
            href='/risk-assessment'
            className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors'
          >
            Risk Assessment
          </Link>
          <Link
            href='/personalized-reports'
            className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors'
          >
            Personalized Reports
          </Link>
          <Link
            href='/platform'
            className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors'
          >
            Platform
          </Link>
          <Link
            href='/how-it-works'
            className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors'
          >
            How It Works
          </Link>
          <Link
            href='/book'
            className='px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-cta-hover)] transition-colors font-semibold'
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className='md:hidden p-2' aria-label='Toggle menu'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
