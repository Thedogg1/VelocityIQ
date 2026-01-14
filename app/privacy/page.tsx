import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import type { Metadata } from 'next';
import { Shield, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | VelocityIQ Data Protection and Security',
  description:
    'VelocityIQ Privacy Policy. Learn how we collect, use, and protect your data with enterprise-grade security measures and compliance standards.',
  keywords: [
    'privacy policy',
    'data protection',
    'data security',
    'GDPR compliance',
    'data privacy',
    'information security',
  ],
  openGraph: {
    title: 'Privacy Policy - VelocityIQ',
    description: 'Data protection and privacy practices',
    type: 'website',
    url: 'https://getvelocityiq.com/privacy',
    images: [{ url: '/images/legal-notice-badge.jpg' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - VelocityIQ',
    description: 'Data protection and privacy practices',
    images: ['/images/legal-notice-badge.jpg'],
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/privacy',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='max-w-4xl mx-auto text-center'>
              <Shield className='w-16 h-16 text-[var(--color-primary)] mx-auto mb-6' />
              <h1 className='text-5xl font-bold text-[var(--color-text-primary)] mb-6'>
                Privacy Policy
              </h1>
              <p className='text-lg text-[var(--color-text-secondary)]'>
                Last Updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        {/* Privacy Content */}
        <section className='py-20 bg-white'>
          <div className='max-w-4xl mx-auto px-6'>
            <div className='prose prose-lg max-w-none space-y-8'>
              {/* Section 1 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  1. About This Privacy Policy
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  This privacy policy applies to the VelocityIQ marketing
                  website (getvelocityiq.com) only.
                </p>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  VelocityIQ software is licensed to financial services
                  platforms and runs entirely on their infrastructure.
                  VelocityIQ Ltd does not collect, process, or store any client
                  data processed by the software platform.
                </p>
                <p className='text-[var(--color-text-secondary)]'>
                  Licensed customers receive separate documentation regarding
                  data processing responsibilities and compliance obligations.
                </p>
              </Card>

              {/* Section 2 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  2. Information We Collect on This Website
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  When you visit our marketing website, we may collect:
                </p>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li>
                    <strong>Contact Form Submissions:</strong> Name, email
                    address, company name, phone number (optional), and your
                    message
                  </li>
                  <li>
                    <strong>Technical Information:</strong> IP address, browser
                    type, device information, and pages visited (via server
                    logs)
                  </li>
                </ul>
                <p className='text-[var(--color-text-secondary)] mt-4'>
                  We do not use analytics tools, advertising cookies, or
                  tracking technologies on this website.
                </p>
              </Card>

              {/* Section 3 - KEEP EXACTLY AS IS */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  3. Cookies and Tracking Technologies
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  <strong>Last Updated:</strong> 14/01/2026
                </p>

                <h3 className='text-xl font-semibold mb-3 mt-6'>
                  Do We Use Cookies?
                </h3>
                <p className='text-[var(--color-text-secondary)] mb-6'>
                  No. The VelocityIQ website does not currently use cookies or
                  similar tracking technologies.
                </p>

                <h3 className='text-xl font-semibold mb-3'>
                  What Technologies Do We Use?
                </h3>

                <p className='text-[var(--color-text-secondary)] mb-2 font-semibold'>
                  Fonts:
                </p>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  We use self-hosted Google Fonts (Inter, Roboto Mono) via
                  Next.js font optimization. These fonts are served directly
                  from our domain and do not contact Google servers or set any
                  cookies.
                </p>

                <p className='text-[var(--color-text-secondary)] mb-2 font-semibold'>
                  External Services:
                </p>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  Some pages contain links to external services (such as Loom
                  videos or Calendly scheduling). These links open in new tabs
                  and do not set cookies on our website. When you visit these
                  external services, their own privacy policies and cookie
                  practices apply.
                </p>

                <p className='text-[var(--color-text-secondary)] mb-2 font-semibold'>
                  Email Services:
                </p>
                <p className='text-[var(--color-text-secondary)] mb-6'>
                  We use Resend for transactional emails (contact forms). This
                  service operates server-side only and does not set cookies in
                  your browser.
                </p>

                <h3 className='text-xl font-semibold mb-3'>Browser Storage</h3>
                <p className='text-[var(--color-text-secondary)] mb-6'>
                  Our website does not use cookies, local storage, session
                  storage, or other browser-based tracking mechanisms.
                </p>

                <h3 className='text-xl font-semibold mb-3'>Future Changes</h3>
                <p className='text-[var(--color-text-secondary)] mb-2'>
                  If we decide to use cookies or analytics tools in the future,
                  we will:
                </p>
                <ol className='list-decimal list-inside space-y-1 text-[var(--color-text-secondary)] mb-6'>
                  <li>Update this privacy policy</li>
                  <li>Implement appropriate consent mechanisms</li>
                  <li>Provide clear information about cookie usage</li>
                </ol>

                <h3 className='text-xl font-semibold mb-3'>Your Rights</h3>
                <p className='text-[var(--color-text-secondary)] mb-6'>
                  Since we don&apos;t use cookies, there are no cookie
                  preferences to manage. However, you retain all rights
                  regarding any personal data we process (see Section 7 below
                  for details).
                </p>

                <h3 className='text-xl font-semibold mb-3'>Contact</h3>
                <p className='text-[var(--color-text-secondary)]'>
                  If you have questions about our approach to cookies and
                  privacy, contact us at{' '}
                  <a
                    href='mailto:privacy@getvelocityiq.com'
                    className='text-[var(--color-primary)] hover:underline'
                  >
                    privacy@getvelocityiq.com
                  </a>
                  .
                </p>
              </Card>

              {/* Section 4 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  4. How We Use Your Information
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  We use information collected through this website to:
                </p>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li>
                    • Respond to your inquiries and contact form submissions
                  </li>
                  <li>
                    • Provide information about VelocityIQ software licensing
                  </li>
                  <li>• Improve our website and marketing materials</li>
                  <li>• Comply with legal obligations</li>
                </ul>
                <p className='text-[var(--color-text-secondary)] mt-4 font-semibold'>
                  We do not sell, rent, or share your personal information with
                  third parties for marketing purposes.
                </p>
              </Card>

              {/* Section 5 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  5. How We Share Information
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  We may share your information with:
                </p>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li>
                    <strong>Service Providers:</strong> Resend (email delivery
                    service) - operates under a Data Processing Agreement
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law,
                    court order, or legal process
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets (with notice to you)
                  </li>
                </ul>
                <p className='text-[var(--color-text-secondary)] mt-4'>
                  We do not share information for any other purposes without
                  your consent.
                </p>
              </Card>

              {/* Section 6 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  6. Data Security
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  We implement appropriate technical and organizational measures
                  to protect your information, including:
                </p>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li>• Encryption in transit (HTTPS/TLS)</li>
                  <li>• Secure server infrastructure</li>
                  <li>• Limited access to personal information</li>
                  <li>• Regular security assessments</li>
                </ul>
                <div className='bg-blue-50 p-4 rounded border-l-4 border-[var(--color-primary)] mt-4'>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    <strong>Note:</strong> While we implement strong security
                    measures, no method of transmission over the internet is
                    100% secure. We cannot guarantee absolute security.
                  </p>
                </div>
              </Card>

              {/* Section 7 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  7. Your Privacy Rights
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className='space-y-2 text-[var(--color-text-secondary)] mb-4'>
                  <li>
                    <strong>Access:</strong> Request a copy of the personal
                    information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information (subject to legal obligations)
                  </li>
                  <li>
                    <strong>Object:</strong> Object to processing of your
                    personal information
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing in certain circumstances
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Receive your data in a
                    structured, machine-readable format
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent where
                    processing is based on consent
                  </li>
                </ul>
                <p className='text-[var(--color-text-secondary)]'>
                  To exercise these rights, contact us at{' '}
                  <a
                    href='mailto:privacy@getvelocityiq.com'
                    className='text-[var(--color-primary)] hover:underline'
                  >
                    privacy@getvelocityiq.com
                  </a>
                </p>
              </Card>

              {/* Section 8 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  8. Data Retention
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  We retain your personal information only as long as necessary
                  for the purposes described in this policy:
                </p>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li>
                    <strong>Contact Form Submissions:</strong> Retained for up
                    to 2 years or until you request deletion
                  </li>
                  <li>
                    <strong>Server Logs:</strong> Retained for up to 90 days for
                    security and troubleshooting purposes
                  </li>
                  <li>
                    <strong>Legal Obligations:</strong> Some information may be
                    retained longer if required by law
                  </li>
                </ul>
              </Card>

              {/* Section 9 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  9. International Data Transfers
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  VelocityIQ Ltd is based in the United Kingdom. If you access
                  our website from outside the UK, your information may be
                  transferred to, stored, and processed in the UK or other
                  countries.
                </p>
                <p className='text-[var(--color-text-secondary)]'>
                  We ensure appropriate safeguards are in place for
                  international transfers in accordance with applicable data
                  protection laws, including the UK GDPR and EU GDPR.
                </p>
              </Card>

              {/* Section 10 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  10. Childrens Privacy
                </h2>
                <p className='text-[var(--color-text-secondary)]'>
                  Our website is not directed to individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If you believe we have inadvertently collected
                  information from a child, please contact us immediately.
                </p>
              </Card>

              {/* Section 11 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  11. Third-Party Links
                </h2>
                <p className='text-[var(--color-text-secondary)]'>
                  Our website may contain links to external services (Loom,
                  Calendly, LinkedIn, etc.). We are not responsible for the
                  privacy practices of these third-party services. We encourage
                  you to review their privacy policies before providing any
                  information.
                </p>
              </Card>

              {/* Section 12 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  12. Changes to This Privacy Policy
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  We may update this privacy policy from time to time. Changes
                  will be posted on this page with an updated &quot;Last Updated
                  date at the top.
                </p>
                <p className='text-[var(--color-text-secondary)]'>
                  Material changes will be communicated through prominent notice
                  on our website or via email (if we have your email address).
                  Continued use of our website after changes constitutes
                  acceptance of the updated policy.
                </p>
              </Card>

              {/* Section 13 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  13. VelocityIQ Software Platform
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  <strong>Important:</strong> This privacy policy covers only
                  this marketing website.
                </p>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  The VelocityIQ software platform is licensed to financial
                  services organizations and deployed on their own
                  infrastructure. VelocityIQ Ltd:
                </p>
                <ul className='space-y-2 text-[var(--color-text-secondary)] mb-4'>
                  <li>• Does not host or operate the software platform</li>
                  <li>
                    • Does not collect, process, or store client data processed
                    by the software
                  </li>
                  <li>
                    • Does not have access to data on customer infrastructure
                  </li>
                </ul>
                <p className='text-[var(--color-text-secondary)]'>
                  Licensed customers are solely responsible for data protection
                  compliance when using the VelocityIQ software, including
                  compliance with GDPR, UK GDPR, SEC regulations, FINRA rules,
                  and other applicable laws. Software licensing terms and
                  compliance responsibilities are documented in separate
                  agreements provided to licensed customers.
                </p>
              </Card>

              {/* Section 14 */}
              <Card>
                <h2 className='text-2xl font-semibold mb-4'>
                  14. Contact Information
                </h2>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  For questions about this privacy policy or our privacy
                  practices:
                </p>
                <div className='bg-gray-50 p-6 rounded'>
                  <p className='text-[var(--color-text-secondary)] mb-2'>
                    <strong>VelocityIQ Ltd</strong>
                  </p>
                  <p className='text-[var(--color-text-secondary)] mb-2'>
                    Email:{' '}
                    <a
                      href='mailto:privacy@getvelocityiq.com'
                      className='text-[var(--color-primary)] hover:underline'
                    >
                      privacy@getvelocityiq.com
                    </a>
                  </p>
                  <p className='text-[var(--color-text-secondary)] mb-2'>
                    General Inquiries:{' '}
                    <a
                      href='mailto:admin@getvelocityiq.com'
                      className='text-[var(--color-primary)] hover:underline'
                    >
                      admin@getvelocityiq.com
                    </a>
                  </p>
                  <p className='text-[var(--color-text-secondary)]'>
                    Address: Nottingham, United Kingdom
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
