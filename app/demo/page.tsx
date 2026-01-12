import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import type { Metadata } from 'next';
import {
  Play,
  Calendar,
  CheckCircle,
  Users,
  Shield,
  FileText,
  Eye,
  AlertTriangle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Platform Demo: See Decision-Support Tools in Action | VelocityIQ',
  description:
    'Watch 5-minute demo of suitability analysis, risk identification, and AML assessment tools—all designed to support advisor professional judgment.',
  keywords: [
    'platform demo',
    'software demonstration',
    'advisor tools demo',
    'suitability analysis demo',
    'compliance software demo',
    'financial planning platform demo',
  ],
  openGraph: {
    title: 'Platform Demo - See Decision-Support Tools in Action',
    description: '5-minute demonstration of comprehensive analysis platform',
    type: 'website',
    url: 'https://getvelocityiq.com/demo',
    images: [{ url: '/images/demo-advisor-control-interface.jpg' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Demo - See Decision-Support Tools in Action',
    description: '5-minute demonstration of comprehensive analysis platform',
    images: ['/images/demo-advisor-control-interface.jpg'],
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/demo',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DemoPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl font-bold text-[var(--color-text-primary)] mb-6'>
                See the Decision-Support Platform in Action
              </h1>
              <p className='text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed'>
                Watch how VelocityIQ&apos;s analysis tools support advisor
                judgment from suitability evaluation through risk identification
                to AML assessment—all while maintaining clear advisor
                responsibility for determinations.
              </p>
              <div className='mb-8'>
                <Image
                  src='/images/demo-advisor-control-interface.v2.png'
                  alt='Platform interface showing advisor control actions'
                  width={1000}
                  height={600}
                  className='rounded-xl shadow-lg mx-auto'
                  priority
                />
              </div>
              <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                <Button
                  href='#watch-demo'
                  variant='primary'
                  className='flex items-center gap-2'
                >
                  <Play className='w-5 h-5' />
                  Watch 5-Minute Platform Demo
                </Button>
                <Button href='/book' variant='secondary'>
                  Schedule Live Demo with Q&A
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We&apos;ll Show You */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Platform Capabilities and Advisor Workflow
            </h2>
            <p className='text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto'>
              Demo Structure (5 minutes)
            </p>

            <div className='space-y-8'>
              {/* Segment 1 */}
              <Card hover>
                <div className='flex items-start gap-4'>
                  <div className='bg-[var(--color-primary)] text-white rounded-lg p-4 flex-shrink-0'>
                    <span className='text-2xl font-bold'>1</span>
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-3'>
                      <h3 className='text-2xl font-semibold'>
                        Segment 1: Suitability Analysis Framework
                      </h3>
                      <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full'>
                        3 minutes
                      </span>
                    </div>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>
                        • How client profile data is structured around FINRA
                        factors
                      </li>
                      <li>• Three-prong analysis framework in action</li>
                      <li>
                        • How advisors review analysis and make determinations
                      </li>
                      <li>
                        • Documentation supporting advisor suitability file
                      </li>
                      <li>
                        • Clear separation: System provides analysis / Advisor
                        determines suitability
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Segment 2 */}
              <Card hover>
                <div className='flex items-start gap-4'>
                  <div className='bg-[var(--color-primary)] text-white rounded-lg p-4 flex-shrink-0'>
                    <span className='text-2xl font-bold'>2</span>
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-3'>
                      <h3 className='text-2xl font-semibold'>
                        Segment 2: Risk Identification Tools
                      </h3>
                      <span className='bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full'>
                        2 minutes
                      </span>
                    </div>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>• 73 validation rules identifying potential risks</li>
                      <li>• Triple-layer validation demonstration</li>
                      <li>• Risk analysis output for advisor review</li>
                      <li>
                        • How advisors assess materiality and determine
                        disclosure
                      </li>
                      <li>
                        • Clear separation: System identifies risks / Advisor
                        determines significance
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Segment 3 */}
              <Card hover>
                <div className='flex items-start gap-4'>
                  <div className='bg-[var(--color-primary)] text-white rounded-lg p-4 flex-shrink-0'>
                    <span className='text-2xl font-bold'>3</span>
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-3'>
                      <h3 className='text-2xl font-semibold'>
                        Segment 3: AML Risk Assessment Framework
                      </h3>
                      <span className='bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full'>
                        2 minutes
                      </span>
                    </div>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>• Seven-dimension risk analysis in action</li>
                      <li>• Dual scoring methodology (inherent + residual)</li>
                      <li>• Risk tier suggestions for advisor evaluation</li>
                      <li>• How advisors make final risk determinations</li>
                      <li>
                        • Clear separation: System analyzes factors / Advisor
                        determines risk level
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Segment 4 */}
              <Card hover>
                <div className='flex items-start gap-4'>
                  <div className='bg-[var(--color-primary)] text-white rounded-lg p-4 flex-shrink-0'>
                    <span className='text-2xl font-bold'>4</span>
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-3'>
                      <h3 className='text-2xl font-semibold'>
                        Segment 4: In-Meeting Intelligence
                      </h3>
                      <span className='bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full'>
                        2 minutes
                      </span>
                    </div>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>• 40-second scenario generation capability</li>
                      <li>• How advisors use scenarios in client meetings</li>
                      <li>• Maintaining full analysis framework at speed</li>
                      <li>• Advisor review and presentation to clients</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Segment 5 */}
              <Card hover>
                <div className='flex items-start gap-4'>
                  <div className='bg-[var(--color-primary)] text-white rounded-lg p-4 flex-shrink-0'>
                    <span className='text-2xl font-bold'>5</span>
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-3'>
                      <h3 className='text-2xl font-semibold'>
                        Segment 5: Documentation and Compliance
                      </h3>
                      <span className='bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full'>
                        1 minute
                      </span>
                    </div>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>• Glass-box architecture and audit trail</li>
                      <li>
                        • How documentation supports regulatory examinations
                      </li>
                      <li>
                        • Combined system and advisor documentation approach
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FINRA Rule 211 Suitability Assessment Video */}
        <section className='py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-4xl font-bold text-center mb-4'>
                FINRA Rule 211 Suitability Assessment Demonstration
              </h2>
              <p className='text-xl text-center text-[var(--color-text-secondary)] mb-8'>
                Watch a 5-minute walkthrough of how VelocityIQ supports FINRA
                Rule 2111 compliance through structured suitability analysis and
                advisor decision-making.
              </p>
              <div className='rounded-xl shadow-lg overflow-hidden bg-white p-4'>
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '62.28373702422145%',
                    height: 0,
                  }}
                >
                  <iframe
                    src='https://www.loom.com/embed/22bf0104e8e24b0795d05b0604b69d22'
                    frameBorder='0'
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    title='FINRA Rule 211 Suitability Assessment Demonstration'
                  />
                </div>
              </div>
              <div className='mt-6 text-center'>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  This demonstration shows how the platform structures client
                  profile data, performs three-prong suitability analysis, and
                  provides documentation to support advisor suitability
                  determinations in compliance with FINRA Rule 2111.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Watch */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Demo Designed for Platform Decision-Makers
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                <Card>
                  <Users className='w-10 h-10 text-[var(--color-primary)] mb-4' />
                  <h3 className='text-xl font-semibold mb-4'>
                    Primary Audience:
                  </h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>RIA Platform executives</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Compliance officers</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Chief Technology Officers</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Advisory practice leaders</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Large RIA firm principals</span>
                    </li>
                  </ul>
                </Card>

                <Card>
                  <Eye className='w-10 h-10 text-[var(--color-primary)] mb-4' />
                  <h3 className='text-xl font-semibold mb-4'>
                    What You&apos;ll Learn:
                  </h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ How analysis tools support advisor determinations</li>
                    <li>
                      → How legal positioning protects platforms and advisors
                    </li>
                    <li>
                      → How documentation supports regulatory examinations
                    </li>
                    <li>→ How supervision and oversight work with system</li>
                    <li>→ Integration and deployment considerations</li>
                    <li>→ Pilot program structure and requirements</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Themes Emphasized Throughout Demo */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              How We Position Platform and Advisor Responsibilities
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <Card>
                <Shield className='w-10 h-10 text-[var(--color-primary)] mb-4' />
                <h3 className='text-xl font-semibold mb-4'>
                  Clear Separation of Roles:
                </h3>
                <div className='space-y-3 text-sm text-[var(--color-text-secondary)]'>
                  <div>
                    <p className='font-semibold mb-1'>System provides:</p>
                    <p>Analysis, frameworks, documentation tools</p>
                  </div>
                  <div>
                    <p className='font-semibold mb-1'>Advisors provide:</p>
                    <p>
                      Professional judgment, determinations, recommendations
                    </p>
                  </div>
                  <div className='bg-blue-50 p-3 rounded'>
                    <p className='font-semibold text-xs'>
                      Repeated throughout:
                    </p>
                    <p className='text-xs italic'>
                      &quot;System analyzes / Advisor determines&quot;
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <Users className='w-10 h-10 text-[var(--color-primary)] mb-4' />
                <h3 className='text-xl font-semibold mb-4'>Advisor Control:</h3>
                <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                  <li>• Advisors review all system output</li>
                  <li>• Advisors apply professional judgment</li>
                  <li>• Advisors make all determinations</li>
                  <li>• Advisors take responsibility for recommendations</li>
                </ul>
              </Card>

              <Card>
                <FileText className='w-10 h-10 text-[var(--color-primary)] mb-4' />
                <h3 className='text-xl font-semibold mb-4'>
                  Legal Protection:
                </h3>
                <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                  <li>
                    • Decision-support positioning protects platforms and
                    advisors
                  </li>
                  <li>• Clear disclaimers and legal notices</li>
                  <li>• Documented separation of responsibilities</li>
                  <li>• Strong liability protections</li>
                </ul>
              </Card>

              <Card>
                <Eye className='w-10 h-10 text-[var(--color-primary)] mb-4' />
                <h3 className='text-xl font-semibold mb-4'>
                  Regulatory Value:
                </h3>
                <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                  <li>• Systematic methodology supports examinations</li>
                  <li>• Documentation demonstrates thoroughness</li>
                  <li>• Audit trail shows professional process</li>
                  <li>
                    • But compliance responsibility remains with advisors/firms
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='max-w-4xl mx-auto'>
              <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
                <h3 className='text-2xl font-semibold mb-4'>
                  Legal Disclaimer
                </h3>
                <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                  Demo shows decision-support platform capabilities. VelocityIQ
                  does not make professional determinations, provide investment
                  advice, or act as investment advisor or broker-dealer.
                </p>
                <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                  All determinations, recommendations, and advice must be made
                  by licensed financial professionals who review system
                  analysis, apply independent judgment, and take full
                  responsibility for their decisions.
                </p>
                <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                  Demo is for informational purposes only and does not
                  constitute recommendation to use platform or guarantee of
                  specific outcomes. Platform capabilities are provided &quot;as
                  is&quot; without warranties.
                </p>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  See full legal terms and conditions before entering pilot
                  agreement.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-[var(--color-primary)]'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold mb-4 !text-white' id='watch-demo'>
              See How Analysis Tools Support Professional Advisory Practice
            </h2>
            <p className='text-xl mb-8 text-white'>
              5-minute demonstration of comprehensive analysis platform designed
              to support advisor judgment while maintaining clear professional
              responsibility.
            </p>

            {/* Full Platform Demo Video Embed */}
            <div className='mb-8 rounded-xl shadow-lg overflow-hidden bg-white p-4'>
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                }}
              >
                <iframe
                  src='https://www.loom.com/embed/22bf0104e8e24b0795d05b0604b69d22'
                  frameBorder='0'
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title='VelocityIQ Platform Demonstration'
                />
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <Button
                href='/book'
                variant='secondary'
                className='bg-white text-[var(--color-primary)] hover:bg-blue-50 flex items-center gap-2'
              >
                <Calendar className='w-5 h-5' />
                Schedule Live Demo with Q&A
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
