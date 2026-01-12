import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] mt-24'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
          {/* Company Column */}
          <div className='col-span-1'>
            <div className='flex items-center gap-3 mb-4'>
              <Image
                src='/Velocity IQ Logo_only.png'
                alt='VelocityIQ Logo'
                width={32}
                height={32}
                className='h-8 w-auto'
                unoptimized
              />
              <span className='text-lg font-bold'>VelocityIQ</span>
            </div>
            <p className='text-sm text-white mb-4'>
              AI-Assisted Compliance Intelligence for Wealth Management
            </p>
            <p className='text-xs text-white opacity-90'>
              Mission: To build AI systems for financial advisors that meet the
              regulatory standards required in banking—not because compliance is
              innovative, but because it&apos;s the foundation advisors deserve.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className='font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/suitability'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Suitability Analysis
                </Link>
              </li>
              <li>
                <Link
                  href='/risk-defense'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Risk Defense
                </Link>
              </li>
              <li>
                <Link
                  href='/risk-assessment'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Risk Assessment
                </Link>
              </li>
              <li>
                <Link
                  href='/personalized-reports'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Personalized Reports
                </Link>
              </li>
              <li>
                <Link
                  href='/platform'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href='/how-it-works'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href='/book'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className='font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className='font-semibold mb-4'>Contact</h3>
            <p className='text-sm text-white mb-2'>Email:</p>
            <a
              href='mailto:admin@getvelocityiq.com'
              className='text-sm text-[var(--color-info)] hover:text-white transition-colors'
            >
              admin@getvelocityiq.com
            </a>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className='font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/terms'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/legal-disclaimers'
                  className='text-sm text-white hover:opacity-80 transition-opacity'
                >
                  Legal Disclaimers
                </Link>
              </li>
            </ul>
            <p className='text-xs text-white opacity-90 mt-8'>
              © 2025 VelocityIQ Ltd. All rights reserved.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className='mt-12 pt-8 border-t border-white/20'>
          <p className='text-xs text-white opacity-90 text-center max-w-4xl mx-auto'>
            IMPORTANT: VelocityIQ provides technology-based decision-support
            tools and analysis frameworks for financial advisors. VelocityIQ
            does not make suitability determinations, risk assessments, provide
            investment advice, or act as an investment advisor or broker-dealer.
            All suitability determinations, risk assessments, client
            recommendations, and professional advice must be made by licensed
            financial professionals who review system analysis, apply
            independent professional judgment, and take full responsibility for
            their determinations. Use of VelocityIQ tools does not ensure
            regulatory compliance or eliminate advisor liability. See full Terms
            of Service for complete legal terms and limitations.
          </p>
        </div>
      </div>
    </footer>
  );
}
