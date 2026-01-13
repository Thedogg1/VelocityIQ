"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='bg-white border-b border-[var(--color-border-subtle)] sticky top-0 z-50'>
      <nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-3' onClick={closeMenu}>
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

        {/* Desktop menu */}
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
        <button
          className='md:hidden p-2 text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors'
          onClick={toggleMenu}
          aria-label='Toggle menu'
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden border-t border-[var(--color-border-subtle)] bg-white'>
          <div className='max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4'>
            <Link
              href='/suitability'
              className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors py-2'
              onClick={closeMenu}
            >
              Suitability Analysis
            </Link>
            <Link
              href='/risk-defense'
              className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors py-2'
              onClick={closeMenu}
            >
              Risk Defense
            </Link>
            <Link
              href='/risk-assessment'
              className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors py-2'
              onClick={closeMenu}
            >
              Risk Assessment
            </Link>
            <Link
              href='/personalized-reports'
              className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors py-2'
              onClick={closeMenu}
            >
              Personalized Reports
            </Link>
            <Link
              href='/platform'
              className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors py-2'
              onClick={closeMenu}
            >
              Platform
            </Link>
            <Link
              href='/how-it-works'
              className='text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors py-2'
              onClick={closeMenu}
            >
              How It Works
            </Link>
            <Link
              href='/book'
              className='px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-cta-hover)] transition-colors font-semibold text-center mt-2'
              onClick={closeMenu}
            >
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
