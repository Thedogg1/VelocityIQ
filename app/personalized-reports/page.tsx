import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import type { Metadata } from 'next';
import {
  Calculator,
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Shield,
  ClipboardCheck,
  Sparkles,
  Eye,
  Users,
  Star,
  BarChart3,
  Globe,
  Lock,
  Quote,
  CheckCircle2,
  X,
  User,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compliance-Ready Personalized Reports | VelocityIQ',
  description:
    'Glass-box personalization: HNWI-grade personalized reports with full calculation transparency, source attribution, and audit trail. Solve the AI compliance paradox.',
  keywords: [
    'personalized reports',
    'AI compliance',
    'glass-box architecture',
    'HNWI reports',
    'compliance-ready AI',
    'auditable personalization',
    'financial advisor reports',
  ],
  openGraph: {
    title: 'Compliance-Ready Personalized Reports | VelocityIQ',
    description:
      'Glass-box personalization: HNWI-grade personalized reports with full calculation transparency',
    type: 'website',
    url: 'https://getvelocityiq.com/personalized-reports',
    images: [{ url: '/images/compliance-approved-personalized-reports.png' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compliance-Ready Personalized Reports | VelocityIQ',
    description:
      'Glass-box personalization: HNWI-grade personalized reports with full calculation transparency',
    images: ['/images/compliance-approved-personalized-reports.png'],
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/personalized-reports',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PersonalizedReportsPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section
          className='relative py-20 bg-cover bg-center'
          style={{
            backgroundImage:
              "url('/images/compliance-approved-personalized-reports.png')",
          }}
        >
          <div className='absolute inset-0 bg-black/50'></div>
          <div className='relative max-w-7xl mx-auto px-6'>
            <div className='max-w-4xl mx-auto text-center text-white'>
              <h1 className='text-5xl font-bold mb-6'>
                Compliance-Ready Personalized Reports: Auditable Analysis with
                Client-Tailored Communication
              </h1>
              <p className='text-xl mb-8 leading-relaxed'>
                High-net-worth clients demand personalized, sophisticated
                analysis—but most AI tools produce black-box outputs compliance
                officers can&apos;t verify. VelocityIQ solves this with
                glass-box architecture: every number is auditable, every
                calculation transparent, while the presentation is deeply
                personalized. Compliance-ready meets client-ready.
              </p>
              <p className='text-sm mb-8 text-gray-200'>
                VelocityIQ generates personalized reports with full audit trail
                and calculation transparency. Advisors remain responsible for
                reviewing reports, verifying accuracy, and making all
                professional determinations before client delivery.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button href='/how-it-works' variant='primary'>
                  See How It Works
                </Button>
                <Button href='#compliance-ready-analysis' variant='secondary'>
                  View Compliance Features
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: PROBLEM - THE AI PERSONALIZATION PARADOX */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              HNWIs Want Personalization. Compliance Needs Transparency. Most AI
              Can&apos;t Deliver Both.
            </h2>

            {/* Subsection 1.1: The Client Demand */}
            <div className='mb-16'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8'>
                <div>
                  <h3 className='text-3xl font-semibold mb-6'>
                    What Research Shows HNWIs Expect
                  </h3>
                  <div className='space-y-4 mb-6'>
                    <p className='text-lg'>
                      <strong>79%</strong> of younger HNWIs want AI-powered
                      advisory tools
                    </p>
                    <p className='text-lg'>
                      <strong>35%</strong> would switch advisors if technology
                      capabilities lag behind
                    </p>
                    <p className='text-lg'>
                      <strong>93%</strong> of RIAs planning to adopt AI in next
                      12-18 months
                    </p>
                  </div>
                  <p className='font-semibold mb-4'>
                    But HNWIs specifically demand:
                  </p>
                  <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                    <li>
                      • Sophisticated, personalized analysis (not generic
                      templates)
                    </li>
                    <li>
                      • Communication that reflects their unique situation
                    </li>
                    <li>
                      • Insights tailored to their business, industry, goals
                    </li>
                    <li>
                      • Explanations at appropriate depth for their
                      sophistication
                    </li>
                    <li>
                      • Reports that demonstrate deep understanding of their
                      context
                    </li>
                  </ul>
                  <p className='text-sm text-[var(--color-text-secondary)] mt-6'>
                    Source: Boosted.ai/InvestmentNews HNWI Survey 2024, RFI
                    Global Private Banking 2025
                  </p>
                </div>
                <div>
                  <Image
                    src='/images/hnwi-expectations-stats.png'
                    alt='HNWI expectations statistics'
                    width={800}
                    height={450}
                    className='rounded-xl shadow-lg'
                  />
                </div>
              </div>

              <Card className='bg-blue-50 border-l-4 border-blue-500'>
                <h4 className='text-xl font-semibold mb-4'>
                  The Market Reality:
                </h4>
                <p className='mb-4'>
                  Business-owning HNWIs are sophisticated clients who:
                </p>
                <ul className='space-y-2'>
                  <li>
                    • Run complex businesses—they understand nuance and context
                  </li>
                  <li>
                    • Expect professional-grade analysis equal to what they
                    receive in business
                  </li>
                  <li>
                    • Can tell immediately if analysis is generic vs. truly
                    personalized
                  </li>
                  <li>
                    • Value advisors who demonstrate deep understanding of their
                    situation
                  </li>
                  <li>
                    • Will pay premium fees for genuinely customized service
                  </li>
                </ul>
              </Card>
            </div>

            {/* Subsection 1.2: The Compliance Problem */}
            <div className='mb-16'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8'>
                <div className='order-2 lg:order-1'>
                  <Image
                    src='/images/black-box-ai-warning.png'
                    alt='Black-box AI compliance warning'
                    width={800}
                    height={450}
                    className='rounded-xl shadow-lg'
                  />
                </div>
                <div className='order-1 lg:order-2'>
                  <h3 className='text-3xl font-semibold mb-6'>
                    Black-Box AI Creates Unacceptable Compliance Risk
                  </h3>
                  <p className='font-semibold mb-6'>
                    Why most AI tools are unusable:
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <Card>
                      <Calculator className='w-8 h-8 text-red-500 mb-3' />
                      <h4 className='font-semibold mb-2'>
                        Unverifiable Calculations
                      </h4>
                      <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            AI produces numbers but doesn&apos;t show how they
                            were calculated
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            Compliance officer can&apos;t verify accuracy
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            In regulatory exam, can&apos;t demonstrate where
                            numbers came from
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            If challenged, can&apos;t defend the analysis
                            methodology
                          </span>
                        </li>
                      </ul>
                    </Card>
                    <Card>
                      <AlertTriangle className='w-8 h-8 text-red-500 mb-3' />
                      <h4 className='font-semibold mb-2'>Hallucination Risk</h4>
                      <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            AI can generate plausible-sounding but factually
                            incorrect information
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            May cite non-existent sources or regulations
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            Can create &quot;facts&quot; that sound credible but
                            aren&apos;t verifiable
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            Compliance officer has no way to catch fabrications
                            without manual fact-checking
                          </span>
                        </li>
                      </ul>
                    </Card>
                    <Card>
                      <FileText className='w-8 h-8 text-red-500 mb-3' />
                      <h4 className='font-semibold mb-2'>No Audit Trail</h4>
                      <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            Can&apos;t recreate how AI arrived at conclusions
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            No documentation of decision-making process
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            Can&apos;t show systematic methodology to regulators
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            If client challenges recommendation, no defensible
                            record
                          </span>
                        </li>
                      </ul>
                    </Card>
                    <Card>
                      <FileText className='w-8 h-8 text-red-500 mb-3' />
                      <h4 className='font-semibold mb-2'>
                        Attribution Problems
                      </h4>
                      <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            Factual statements without source citations
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            Can&apos;t verify where information came from
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            Compliance can&apos;t assess reliability of sources
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <XCircle className='w-4 h-4 text-red-500 mt-0.5 flex-shrink-0' />
                          <span>
                            Opens firm to liability for inaccurate information
                          </span>
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <Card className='bg-amber-50 border-l-4 border-amber-500'>
                <h4 className='text-xl font-semibold mb-4'>
                  The Compliance Officer&apos;s Nightmare:
                </h4>
                <p className='italic text-lg'>
                  &quot;The AI-generated report looks great and clients love it,
                  but I have no idea if the numbers are correct, where the facts
                  came from, or how to defend this in an audit. I can&apos;t
                  approve something I can&apos;t verify—which means we
                  can&apos;t use AI for personalization, which means we
                  can&apos;t compete for sophisticated HNWIs who expect
                  it.&quot;
                </p>
                <p className='mt-4 font-semibold'>
                  Result: Platforms caught between client demands and compliance
                  requirements.
                </p>
              </Card>
            </div>

            {/* Subsection 1.3: The Advisor Dilemma */}
            <div className='mb-16'>
              <h3 className='text-3xl font-semibold mb-6 text-center'>
                Caught Between Client Expectations and Compliance Reality
              </h3>
              <div className='mb-8'>
                <Image
                  src='/images/advisor-caught-between.png'
                  alt='Advisor caught between client and compliance'
                  width={1200}
                  height={600}
                  className='rounded-xl shadow-lg mx-auto'
                />
              </div>
              <h4 className='text-2xl font-semibold mb-6 text-center'>
                The Impossible Choice:
              </h4>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                <Card className='border-2 border-red-200'>
                  <h4 className='text-xl font-semibold mb-2 text-red-600'>
                    Option A: Generic Reports
                  </h4>
                  <p className='text-sm text-red-600 mb-4'>
                    Compliance-Safe, Client-Unsatisfying
                  </p>
                  <div className='space-y-2 mb-4'>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span className='text-sm'>
                        All calculations verifiable
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span className='text-sm'>
                        Compliance can audit everything
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span className='text-sm'>
                        Defensible in regulatory exams
                      </span>
                    </div>
                  </div>
                  <p className='font-semibold mb-2'>BUT:</p>
                  <div className='space-y-2'>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        Generic, template-driven output
                      </span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        Reads like it was written for anyone
                      </span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        Doesn&apos;t demonstrate deep client understanding
                      </span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        Sophisticated HNWIs see through it immediately
                      </span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        Can&apos;t compete for high-value clients who expect
                        better
                      </span>
                    </div>
                  </div>
                </Card>
                <Card className='border-2 border-red-200'>
                  <h4 className='text-xl font-semibold mb-2 text-red-600'>
                    Option B: AI-Personalized Reports
                  </h4>
                  <p className='text-sm text-red-600 mb-4'>
                    Client-Delighting, Compliance-Risky
                  </p>
                  <div className='space-y-2 mb-4'>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span className='text-sm'>
                        Highly personalized, sophisticated analysis
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span className='text-sm'>
                        Tailored to clients&apos; specific situation
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span className='text-sm'>
                        Impressive client experience
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span className='text-sm'>
                        Competitive differentiation
                      </span>
                    </div>
                  </div>
                  <p className='font-semibold mb-2'>BUT:</p>
                  <div className='space-y-2'>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        Black-box calculations compliance can&apos;t verify
                      </span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        Potential hallucinations and inaccuracies
                      </span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        No audit trail for regulatory defense
                      </span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        Unattributed factual claims
                      </span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-sm'>
                        Compliance officer can&apos;t approve it
                      </span>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className='mb-6'>
                <h4 className='text-xl font-semibold mb-4'>
                  The Market Impact:
                </h4>
                <p className='mb-4'>
                  Platforms that can&apos;t solve this paradox will:
                </p>
                <ul className='space-y-2'>
                  <li>
                    • Lose sophisticated HNWI clients to competitors who can
                  </li>
                  <li>
                    • Fail to attract top advisors who want to serve high-value
                    clients
                  </li>
                  <li>
                    • Miss the 1-1.5M business-owning HNWI market opportunity
                  </li>
                  <li>
                    • Fall behind in technology arms race for advisor talent
                  </li>
                  <li>
                    • See AUM concentration shift to platforms with better
                    technology
                  </li>
                </ul>
              </Card>

              <Card className='bg-red-50 border-l-4 border-red-500'>
                <h4 className='text-xl font-semibold mb-4'>
                  Why This Matters Urgently:
                </h4>
                <ul className='space-y-2'>
                  <li>
                    • 93% of RIAs planning AI adoption in next 12-18 months
                  </li>
                  <li>
                    • Platforms need solutions that work NOW, not promises
                  </li>
                  <li>
                    • Every month without compliant personalization is lost
                    competitive ground
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 2: SOLUTION - GLASS-BOX PERSONALIZATION ARCHITECTURE */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              The Only Platform That Delivers Both Compliance Rigor and
              HNWI-Grade Personalization
            </h2>
            <div className='mb-12'>
              <Image
                src='/images/glass-box-personalization-architecture.png'
                alt='Glass-box personalization architecture'
                width={1200}
                height={600}
                className='rounded-xl shadow-lg mx-auto'
              />
            </div>
            <div className='max-w-4xl mx-auto'>
              <div className='text-2xl font-semibold mb-8 text-center'>
                The Breakthrough:
              </div>
              <p className='text-xl text-center mb-12 text-[var(--color-text-secondary)]'>
                VelocityIQ solves the paradox with glass-box architecture that
                separates WHAT is calculated from HOW it&apos;s communicated:
              </p>

              <div className='space-y-6 mb-8'>
                <Card className='!bg-[var(--color-primary)] text-white'>
                  <div className='flex items-start gap-4'>
                    <Calculator className='w-12 h-12 flex-shrink-0 text-white' />
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <h3 className='text-2xl font-semibold text-white'>
                          Layer 1: Deterministic Calculation Engine
                        </h3>
                        <span className='px-3 py-1 bg-white text-[var(--color-primary)] rounded-full text-sm font-semibold'>
                          Compliance-Ready
                        </span>
                      </div>
                      <ul className='space-y-2 text-white'>
                        <li>
                          → All math done with explicit, verifiable formulas
                        </li>
                        <li>→ Every number shows its calculation</li>
                        <li>→ Complete audit trail of inputs and processes</li>
                        <li>→ Zero black-box calculations</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className='!bg-blue-600 text-white'>
                  <div className='flex items-start gap-4'>
                    <FileText className='w-12 h-12 flex-shrink-0 text-white' />
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <h3 className='text-2xl font-semibold text-white'>
                          Layer 2: Source Attribution System
                        </h3>
                        <span className='px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-semibold'>
                          Fact-Verifiable
                        </span>
                      </div>
                      <ul className='space-y-2 text-white'>
                        <li>→ 2-3 citations per factual statement</li>
                        <li>→ All sources referenced and checkable</li>
                        <li>→ No AI hallucinations possible in facts</li>
                        <li>→ Compliance can verify every claim</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className='!bg-purple-600 text-white'>
                  <div className='flex items-start gap-4'>
                    <ClipboardCheck className='w-12 h-12 flex-shrink-0 text-white' />
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <h3 className='text-2xl font-semibold text-white'>
                          Layer 3: Audit Trail Infrastructure
                        </h3>
                        <span className='px-3 py-1 bg-white text-purple-600 rounded-full text-sm font-semibold'>
                          Exam-Ready
                        </span>
                      </div>
                      <ul className='space-y-2 text-white'>
                        <li>→ Complete documentation of analysis process</li>
                        <li>→ Timestamp and version control</li>
                        <li>→ Decision points documented</li>
                        <li>→ Supports regulatory examination defense</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className='!bg-teal-600 text-white'>
                  <div className='flex items-start gap-4'>
                    <Sparkles className='w-12 h-12 flex-shrink-0 text-white' />
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <h3 className='text-2xl font-semibold text-white'>
                          Layer 4: Personalization Layer
                        </h3>
                        <span className='px-3 py-1 bg-white text-teal-600 rounded-full text-sm font-semibold'>
                          Client-Tailored
                        </span>
                      </div>
                      <ul className='space-y-2 text-white'>
                        <li>→ AI personalizes HOW analysis is communicated</li>
                        <li>→ Adapts language, tone, examples to client</li>
                        <li>→ References client context and situations</li>
                        <li>→ Creates exceptional client experience</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className='bg-green-50 border-l-4 border-green-500'>
                <h4 className='text-xl font-semibold mb-4'>
                  WHILE MAINTAINING:
                </h4>
                <ul className='space-y-2'>
                  <li>→ Full calculation transparency (Layer 1)</li>
                  <li>→ Factual verifiability (Layer 2)</li>
                  <li>→ Audit defensibility (Layer 3)</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW IT WORKS - COMPLIANCE FIRST, PERSONALIZATION SECOND */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Auditable Foundation, Personalized Presentation
            </h2>
            <div className='mb-12'>
              <Image
                src='/images/compliance-then-personalization-flow.png'
                alt='Compliance then personalization flow'
                width={1200}
                height={600}
                className='rounded-xl shadow-lg mx-auto'
              />
            </div>

            {/* Step 1 */}
            <div className='mb-16' id='compliance-ready-analysis'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold'>
                  1
                </div>
                <h3 className='text-3xl font-semibold'>
                  Compliance-Ready Analysis Generation
                </h3>
              </div>
              <div className='mb-6'>
                <p className='font-semibold mb-4'>What Happens:</p>
                <p className='mb-4'>
                  System generates base analysis with full transparency:
                </p>
                <ul className='space-y-2 mb-6'>
                  <li>• All calculations performed with explicit formulas</li>
                  <li>
                    • Every number shows: [Input Values] → [Formula] → [Result]
                  </li>
                  <li>
                    • All factual statements attributed to verifiable sources
                  </li>
                  <li>• Complete audit trail of analysis process</li>
                  <li>
                    • All data anomolies require human review - no silent errors
                  </li>
                  <li>• Zero black-box operations</li>
                </ul>
                <Card className='bg-blue-50 mb-6'>
                  <h4 className='font-semibold mb-3'>
                    Compliance Officer Can Verify:
                  </h4>
                  <ul className='space-y-1'>
                    <li>✓ Where every number came from</li>
                    <li>✓ How every calculation was performed</li>
                    <li>✓ Source of every factual statement</li>
                    <li>✓ Systematic methodology applied</li>
                    <li>✓ Decision points and logic</li>
                  </ul>
                </Card>
                <Card className='bg-gray-100 p-6 font-mono text-sm'>
                  <div className='mb-4'>
                    <strong>Example - Base Analysis Output:</strong>
                  </div>
                  <div className='space-y-2'>
                    <div>ISO Exercise AMT Calculation:</div>
                    <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
                    <div className='mt-4'>
                      <strong>Input Values:</strong>
                      <ul className='list-disc list-inside ml-4 mt-2'>
                        <li>Options exercised: 500,000</li>
                        <li>Strike price: $0.50/share</li>
                        <li>Fair market value: $1.40/share</li>
                        <li>Filing status: Married Filing Jointly</li>
                        <li>
                          AMT exemption (2025): $133,300 [Source: IRS Rev. Proc.
                          2024-40]
                        </li>
                        <li>AMT rate: 28% [Source: IRC §55(b)(1)(A)(ii)]</li>
                      </ul>
                    </div>
                    <div className='mt-4'>
                      <strong>Formula:</strong>
                      <div className='mt-2'>
                        Bargain Element = (FMV - Strike) × Shares
                      </div>
                      <div>
                        Bargain Element = ($1.40 - $0.50) × 500,000 = $450,000
                      </div>
                    </div>
                    <div className='mt-4'>
                      <div>AMT Preference Item = $450,000</div>
                      <div>Less: AMT Exemption = $133,300</div>
                      <div>AMT Taxable = $316,700</div>
                      <div>AMT Liability = $316,700 × 28% = $88,676</div>
                    </div>
                    <div className='mt-4'>
                      <strong>Result:</strong> Estimated AMT liability of
                      $88,676
                    </div>
                    <div className='mt-4 text-xs'>
                      [Complete calculation details available in filtered audit
                      reports]
                    </div>
                    <div className='text-xs'>
                      [Sources Cited: IRS Rev. Proc. 2024-40, IRC
                      §55(b)(1)(A)(ii)]
                    </div>
                    <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
                  </div>
                </Card>
                <Card className='bg-green-50 border-l-4 border-green-500 mt-6'>
                  <h4 className='font-semibold mb-2'>Compliance Value:</h4>
                  <p>
                    Every number is defensible. Every fact is sourced. Every
                    calculation can be verified in seconds.
                  </p>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className='mb-16'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold'>
                  2
                </div>
                <h3 className='text-3xl font-semibold'>
                  Personalization Layer Applied
                </h3>
              </div>
              <div className='mb-6'>
                <p className='font-semibold mb-4'>What Happens:</p>
                <p className='mb-4'>
                  AI personalizes HOW the analysis is communicated to THIS
                  client:
                </p>
                <ul className='space-y-2 mb-6'>
                  <li>
                    • Adjusts language complexity to client sophistication
                  </li>
                  <li>
                    • References client&apos;s specific situation and context
                  </li>
                  <li>
                    • Uses analogies relevant to client&apos;s
                    business/experience
                  </li>
                  <li>• Matches tone to how advisor and client communicate</li>
                  <li>
                    • Organizes information around client&apos;s priorities
                  </li>
                </ul>
                <p className='font-semibold mb-4'>WHILE PRESERVING:</p>
                <ul className='space-y-2 mb-6'>
                  <li>• All calculation transparency</li>
                  <li>• All source attribution</li>
                  <li>• Complete audit trail</li>
                  <li>• Verifiable accuracy</li>
                </ul>
                <Card className='bg-blue-50 p-6 mb-6'>
                  <div className='mb-4'>
                    <strong>
                      Example - Same Analysis, Personalized for Client:
                    </strong>
                  </div>
                  <div className='space-y-4 text-[var(--color-text-secondary)]'>
                    <div>
                      <strong className='text-lg text-[var(--color-text-primary)]'>
                        Understanding Your ISO Exercise Tax Implications
                      </strong>
                    </div>
                    <p>
                      You asked about exercising 500,000 of your ISOs before
                      your company&apos;s IPO next year. Here&apos;s the tax
                      situation you&apos;ll want to understand:
                    </p>
                    <p>
                      When you exercise at $0.50 per share while the company
                      valuation puts fair market value at $1.40, the IRS sees
                      that $0.90 difference as taxable income—even though you
                      haven&apos;t sold the stock yet. This triggers the
                      Alternative Minimum Tax.
                    </p>
                    <p>
                      Think of AMT as the IRS&apos;s backup system to ensure you
                      pay some tax even when using strategies (like ISO
                      exercises) that defer regular income tax. For your
                      situation:
                    </p>
                    <ul className='list-disc list-inside ml-4'>
                      <li>
                        Your bargain element: $450,000 ($0.90 × 500,000 shares)
                      </li>
                      <li>After AMT exemption: $316,700 subject to AMT</li>
                      <li>AMT liability: approximately $88,676</li>
                    </ul>
                    <p className='text-sm'>
                      [Complete calculation details available in filtered audit
                      reports]
                    </p>
                    <p>
                      This is roughly what you mentioned spending on your last
                      two product development cycles—meaningful but manageable
                      given your company&apos;s cash position. The trade-off is
                      locking in your QSBS eligibility now, which could save you
                      $10M+ in capital gains taxes at exit, as we discussed in
                      our last meeting.
                    </p>
                    <p>
                      Given your IPO timeline of 12-18 months and your stated
                      goal of minimizing tax drag on wealth building for your
                      kids&apos; futures, we should consider whether paying
                      ~$89K now is worthwhile to protect the potential QSBS
                      exclusion.
                    </p>
                    <p></p>
                    <div className='text-sm'>
                      [Complete calculation details and source citations
                      available in filtered audit reports]
                    </div>
                  </div>
                </Card>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <Card>
                    <h4 className='font-semibold mb-4'>What Changed:</h4>
                    <ul className='space-y-2 text-sm'>
                      <li>✓ Conversational, client-appropriate language</li>
                      <li>
                        ✓ References to actual client situation (IPO timeline,
                        product development costs)
                      </li>
                      <li>
                        ✓ Connection to client goals (kids&apos; futures,
                        minimizing tax drag)
                      </li>
                      <li>✓ Analogies from client&apos;s business context</li>
                      <li>✓ Acknowledges previous conversation</li>
                      <li>✓ Offers next steps</li>
                    </ul>
                  </Card>
                  <Card>
                    <h4 className='font-semibold mb-4'>
                      What Didn&apos;t Change:
                    </h4>
                    <ul className='space-y-2 text-sm'>
                      <li>
                        ✓ The $88,676 calculation (still 100% accurate and
                        verifiable)
                      </li>
                      <li>
                        ✓ Source attribution (still cited to IRS guidance)
                      </li>
                      <li>✓ Audit trail (complete documentation maintained)</li>
                      <li>
                        ✓ Compliance defensibility (all numbers still
                        transparent)
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className='mb-16'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold'>
                  3
                </div>
                <h3 className='text-3xl font-semibold'>
                  Advisor Review and Approval
                </h3>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8'>
                <div>
                  <Image
                    src='/images/advisor-reviewing-both-layers.png'
                    alt='Advisor reviewing both layers'
                    width={800}
                    height={450}
                    className='rounded-xl shadow-lg'
                  />
                </div>
                <div>
                  <p className='font-semibold mb-4'>Advisor Can Review:</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <Card>
                      <h4 className='font-semibold mb-3'>Compliance View</h4>
                      <ul className='space-y-2 text-sm'>
                        <li>→ All calculations with formulas</li>
                        <li>→ Source citations for all facts</li>
                        <li>→ Audit trail documentation</li>
                        <li>→ Verify accuracy and defensibility</li>
                      </ul>
                    </Card>
                    <Card>
                      <h4 className='font-semibold mb-3'>Client View</h4>
                      <ul className='space-y-2 text-sm'>
                        <li>→ Personalized narrative presentation</li>
                        <li>→ Language and tone appropriateness</li>
                        <li>→ Contextual references accuracy</li>
                        <li>→ Overall client communication quality</li>
                      </ul>
                    </Card>
                  </div>
                  <Card className='bg-blue-50 mb-6'>
                    <h4 className='font-semibold mb-3'>
                      Toggle Between Views:
                    </h4>
                    <ul className='space-y-1 text-sm'>
                      <li>→ See compliance layer anytime</li>
                      <li>→ Verify personalization accuracy</li>
                      <li>→ Ensure both layers align</li>
                      <li>→ Approve when satisfied</li>
                    </ul>
                  </Card>
                  <Card className='bg-amber-50 border-l-4 border-amber-500'>
                    <h4 className='font-semibold mb-3'>
                      Advisor Responsibilities:
                    </h4>
                    <ul className='space-y-1 text-sm'>
                      <li>→ Review both compliance and client views</li>
                      <li>→ Verify accuracy of all numbers and facts</li>
                      <li>
                        → Confirm personalization appropriate for this client
                      </li>
                      <li>→ Ensure client context references are correct</li>
                      <li>→ Make any needed adjustments</li>
                      <li>→ Approve before client delivery</li>
                      <li>→ Take responsibility for all content</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className='mb-16'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold'>
                  4
                </div>
                <h3 className='text-3xl font-semibold'>
                  Dual-Track Documentation
                </h3>
              </div>
              <div className='mb-8'>
                <Image
                  src='/images/dual-track-documentation.png'
                  alt='Dual-track documentation'
                  width={1200}
                  height={600}
                  className='rounded-xl shadow-lg mx-auto'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                <Card>
                  <FileText className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                  <h4 className='text-xl font-semibold mb-4'>
                    Client-Facing Report
                  </h4>
                  <ul className='space-y-2 text-sm'>
                    <li>• Personalized narrative presentation</li>
                    <li>• Client-appropriate language and tone</li>
                    <li>• Contextual examples and analogies</li>
                    <li>• Organized around client priorities</li>
                    <li>• Professional, engaging format</li>
                    <li>
                      • Filtered audit reports available for calculation details
                    </li>
                  </ul>
                </Card>
                <Card>
                  <ClipboardCheck className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                  <h4 className='text-xl font-semibold mb-4'>
                    Compliance Documentation (Parallel)
                  </h4>
                  <ul className='space-y-2 text-sm'>
                    <li>• All calculations with transparent formulas</li>
                    <li>• Complete source attribution</li>
                    <li>• Audit trail of analysis process</li>
                    <li>• Systematic methodology documentation</li>
                    <li>• Timestamp and version control</li>
                    <li>• Advisor review and approval records</li>
                  </ul>
                </Card>
              </div>
              <Card className='bg-blue-50 border-l-4 border-blue-500 mt-8'>
                <h4 className='font-semibold mb-4'>Report Output Options:</h4>
                <ul className='space-y-2 text-sm'>
                  <li>• Generate official PDF client report</li>
                  <li>• Export filtered audit reports to PDF</li>
                  <li>
                    • Generated validation warnings, FINRA 2111 tests and
                    residual risk reports are also outputted to a text file as
                    standard
                  </li>
                  <li>• Print compliance documentation for files</li>
                  <li>• Archive scenarios for client reference</li>
                </ul>
                <div className='mt-4 pt-4 border-t border-blue-300'>
                  <p className='text-sm font-semibold mb-2'>
                    Filtered Audit Reports Available:
                  </p>
                  <ul className='space-y-1 text-sm'>
                    <li>→ FINRA 2111 Suitability Analysis calculations</li>
                    <li>→ Risk identification (73 rules) details</li>
                    <li>→ AML assessment methodology</li>
                    <li>→ Source attribution report</li>
                    <li>→ Complete number audit</li>
                  </ul>
                  <p className='text-xs mt-3 text-[var(--color-text-secondary)]'>
                    Filter by section to view specific analysis components.
                    Print or save each audit report to PDF.
                  </p>
                </div>
              </Card>
              <Card className='bg-blue-50 border-l-4 border-blue-500'>
                <h4 className='font-semibold mb-4'>
                  For Regulatory Examinations:
                </h4>
                <p className='mb-4 italic'>
                  Examiner asks: &quot;How did you determine this was
                  suitable?&quot;
                </p>
                <p className='mb-2'>Advisor shows:</p>
                <ol className='list-decimal list-inside space-y-1 ml-4'>
                  <li>Personalized client report (what client received)</li>
                  <li>
                    Underlying compliance documentation (how determination was
                    made)
                  </li>
                  <li>Audit trail showing systematic process</li>
                  <li>All calculations and sources verifiable</li>
                </ol>
                <p className='mt-4 font-semibold'>
                  Result: Demonstrates both client service quality AND
                  compliance rigor
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* NEW SECTION: IN-MEETING SCENARIO ANALYSIS */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Real-Time Scenario Comparison During Client Meetings
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='mb-8'>
                <p className='text-xl text-center mb-6 text-[var(--color-text-secondary)]'>
                  Explore multiple strategies with your client in real-time
                  during meetings. Generate side-by-side scenario comparisons in
                  40 seconds, each maintaining full compliance transparency and
                  personalization.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                  <Card className='bg-blue-50'>
                    <h4 className='font-semibold mb-4 text-lg'>
                      Scenario Generation Capability
                    </h4>
                    <ul className='space-y-2 text-sm'>
                      <li>✓ Generate new scenarios in 40 seconds</li>
                      <li>✓ Up to 8 scenarios per meeting</li>
                      <li>✓ Each scenario fully personalized</li>
                      <li>✓ Complete compliance transparency maintained</li>
                      <li>✓ Side-by-side comparison view</li>
                    </ul>
                  </Card>
                  <Card className='bg-green-50'>
                    <h4 className='font-semibold mb-4 text-lg'>
                      Example Scenario Questions
                    </h4>
                    <ul className='space-y-2 text-sm'>
                      <li>
                        • &quot;What if client increased ownership from 40% to
                        50% before exit?&quot;
                      </li>
                      <li>
                        • &quot;How would exercising ISOs in tranches across two
                        tax years affect AMT?&quot;
                      </li>
                      <li>
                        • &quot;What&apos;s the impact of delaying exit by 12
                        months?&quot;
                      </li>
                      <li>
                        • &quot;Compare QSBS eligibility under different exit
                        structures&quot;
                      </li>
                    </ul>
                  </Card>
                </div>
                <Card className='bg-amber-50 border-l-4 border-amber-500 mb-8'>
                  <h4 className='font-semibold mb-3'>Meeting Workflow:</h4>
                  <ol className='space-y-2 text-sm list-decimal list-inside ml-4'>
                    <li>Generate base scenario during client meeting</li>
                    <li>Client asks &quot;what if&quot; question</li>
                    <li>Generate comparison scenario in 40 seconds</li>
                    <li>Display side-by-side comparison on screen</li>
                    <li>Both scenarios maintain full audit trail</li>
                    <li>Export both scenarios to PDF for client</li>
                  </ol>
                </Card>
                <div className='mb-8'>
                  <Image
                    src='/images/compare-scenarios.png'
                    alt='Side-by-side scenario comparison showing two reports with different ownership percentages, with highlighted differences and professional comparison interface'
                    width={1200}
                    height={600}
                    className='rounded-xl shadow-lg mx-auto'
                  />
                </div>
                <Card>
                  <h4 className='font-semibold mb-4'>Key Benefits:</h4>
                  <ul className='space-y-2 text-sm'>
                    <li>
                      ✓ Explore multiple strategies with client in real-time
                    </li>
                    <li>
                      ✓ Demonstrate sophisticated analysis capabilities during
                      meetings
                    </li>
                    <li>
                      ✓ Each scenario maintains full calculation transparency
                    </li>
                    <li>✓ All scenarios documented for compliance files</li>
                    <li>
                      ✓ Export comparison reports to PDF for client delivery
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE COMPLIANCE OFFICER&apos;S PERSPECTIVE */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              &quot;Finally, AI Personalization I Can Actually Approve&quot;
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12'>
              <div className='order-2 lg:order-1'>
                <Image
                  src='/images/compliance-officer-approval.png'
                  alt='Compliance officer approval'
                  width={800}
                  height={450}
                  className='rounded-xl shadow-lg'
                />
              </div>
              <div className='order-1 lg:order-2'>
                <p className='font-semibold mb-6'>
                  What Compliance Officers Get:
                </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <Card>
                    <Shield className='w-8 h-8 text-green-500 mb-3' />
                    <h4 className='font-semibold mb-3'>Full Verifiability</h4>
                    <ul className='space-y-1 text-sm'>
                      <li>✓ Can verify every calculation in seconds</li>
                      <li>✓ Can check source of every factual statement</li>
                      <li>✓ Can review complete audit trail</li>
                      <li>✓ Can demonstrate systematic methodology</li>
                      <li>✓ Can defend in regulatory examinations</li>
                    </ul>
                  </Card>
                  <Card>
                    <Shield className='w-8 h-8 text-green-500 mb-3' />
                    <h4 className='font-semibold mb-3'>Risk Mitigation</h4>
                    <ul className='space-y-1 text-sm'>
                      <li>✓ No black-box calculations creating liability</li>
                      <li>✓ No AI hallucinations in factual content</li>
                      <li>✓ No unattributed claims to defend</li>
                      <li>
                        ✓ No mysterious numbers that can&apos;t be explained
                      </li>
                      <li>
                        ✓ No compliance risk from advisor-delighting features
                      </li>
                    </ul>
                  </Card>
                  <Card>
                    <ClipboardCheck className='w-8 h-8 text-green-500 mb-3' />
                    <h4 className='font-semibold mb-3'>Exam Readiness</h4>
                    <ul className='space-y-1 text-sm'>
                      <li>✓ Documentation demonstrates systematic approach</li>
                      <li>✓ Can show exactly how determinations were made</li>
                      <li>✓ Can verify accuracy of all analysis</li>
                      <li>✓ Can defend client communications</li>
                      <li>
                        ✓ Passes regulatory scrutiny while delivering great
                        client experience
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
            <Card className='bg-blue-50 border-l-4 border-blue-500 max-w-4xl mx-auto'>
              <Quote className='w-8 h-8 text-blue-500 mb-4' />
              <p className='text-lg italic mb-4'>
                &quot;For years, we&apos;ve had to choose between generic
                reports compliance could verify and personalized reports clients
                wanted. VelocityIQ finally gives us both. I can verify every
                number, check every source, and audit the complete process—while
                advisors deliver the sophisticated, personalized experience
                HNWIs expect. This is the breakthrough we&apos;ve needed.&quot;
              </p>
              <p className='text-sm'>— Chief Compliance Officer perspective</p>
            </Card>
          </div>
        </section>

        {/* SECTION 5: MEETING HNWI EXPECTATIONS */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Now You Can Deliver What HNWIs Demand—Without Compliance Risk
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12'>
              <div>
                <p className='font-semibold mb-6'>What HNWIs Experience:</p>
                <div className='grid grid-cols-1 gap-6'>
                  <Card>
                    <Star className='w-8 h-8 text-[var(--color-primary)] mb-3' />
                    <h4 className='font-semibold mb-3'>
                      Sophisticated Personalization
                    </h4>
                    <ul className='space-y-1 text-sm'>
                      <li>
                        ✓ Analysis that reflects deep understanding of their
                        situation
                      </li>
                      <li>
                        ✓ Communication at appropriate sophistication level
                      </li>
                      <li>
                        ✓ References to their business, industry, specific
                        concerns
                      </li>
                      <li>✓ Analogies from their experience that resonate</li>
                      <li>
                        ✓ Tone that matches how they think and communicate
                      </li>
                      <li>
                        ✓ Demonstrates advisor has truly listened and understood
                      </li>
                    </ul>
                  </Card>
                  <Card>
                    <BarChart3 className='w-8 h-8 text-[var(--color-primary)] mb-3' />
                    <h4 className='font-semibold mb-3'>
                      Professional-Grade Analysis
                    </h4>
                    <ul className='space-y-1 text-sm'>
                      <li>
                        ✓ Comprehensive evaluation of their complex situation
                      </li>
                      <li>
                        ✓ Nuanced consideration of business-specific factors
                      </li>
                      <li>
                        ✓ Tax implications explained with depth and clarity
                      </li>
                      <li>✓ Risk analysis relevant to their wealth level</li>
                      <li>
                        ✓ Strategic thinking that matches their business acumen
                      </li>
                    </ul>
                  </Card>
                  <Card>
                    <Eye className='w-8 h-8 text-[var(--color-primary)] mb-3' />
                    <h4 className='font-semibold mb-3'>
                      Transparency and Confidence
                    </h4>
                    <ul className='space-y-1 text-sm'>
                      <li>
                        ✓ Can access filtered audit reports for calculation
                        details
                      </li>
                      <li>✓ Can verify sources of factual information</li>
                      <li>
                        ✓ Can understand exactly how analysis was performed
                      </li>
                      <li>
                        ✓ Builds confidence in advisor&apos;s systematic
                        approach
                      </li>
                      <li>✓ Sophisticated enough to appreciate the rigor</li>
                    </ul>
                  </Card>
                </div>
              </div>
              <div>
                <Image
                  src='/images/hnwi-client-delighted.png'
                  alt='HNWI client delighted'
                  width={800}
                  height={450}
                  className='rounded-xl shadow-lg'
                />
              </div>
            </div>
            <Card className='bg-blue-50 border-l-4 border-blue-500 max-w-4xl mx-auto'>
              <h4 className='font-semibold mb-4'>
                Example - What Business Owner Sees:
              </h4>
              <p className='italic text-lg mb-4'>
                &quot;This isn&apos;t a template with my name plugged in. This
                advisor clearly understands my business model, knows my industry
                challenges, and is thinking about my specific situation. The
                analysis references our conversation about the supply chain
                issues we discussed, uses examples from my manufacturing
                experience, and even remembers what I said about my timeline for
                semi-retirement.
              </p>
              <p className='italic text-lg mb-4'>
                And when I clicked through on the AMT calculation, I could see
                exactly how they arrived at the number—it&apos;s all there,
                transparent and verifiable. That level of both personalization
                AND rigor is what I expect from professionals I&apos;m paying to
                manage my wealth.&quot;
              </p>
            </Card>
          </div>
        </section>

        {/* SECTION 6: HOW PERSONALIZATION WORKS (ADVISOR INPUT) */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Better Client Discovery → Richer Documentation → More Personalized
              Reports
            </h2>
            <div className='mb-12'>
              <Image
                src='/images/client-discovery-insights.png'
                alt='Advisor client discovery insights'
                width={1200}
                height={600}
                className='rounded-xl shadow-lg mx-auto'
              />
            </div>
            <h3 className='text-3xl font-semibold text-center mb-8'>
              What Advisors Provide (Input to Personalization)
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
              <Card>
                <ClipboardCheck className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h4 className='text-xl font-semibold mb-4'>
                  Required Investment Profile Data
                </h4>
                <ul className='space-y-2 text-sm mb-4'>
                  <li>• Standard FINRA nine factors</li>
                  <li>• Financial situation and goals</li>
                  <li>• Business and tax information</li>
                  <li>• Risk tolerance and time horizon</li>
                </ul>
                <p className='text-xs text-[var(--color-text-secondary)]'>
                  [This is required for compliance analysis regardless]
                </p>
              </Card>
              <Card>
                <Star className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h4 className='text-xl font-semibold mb-2'>
                  Optional Client Context
                </h4>
                <p className='text-sm font-semibold mb-4 text-[var(--color-primary)]'>
                  The Personalization Multiplier
                </p>
                <div className='space-y-4 text-sm'>
                  <div>
                    <h5 className='font-semibold mb-2'>
                      Communication Profile
                    </h5>
                    <ul className='space-y-1 text-[var(--color-text-secondary)]'>
                      <li>
                        • Client&apos;s sophistication level with financial
                        concepts
                      </li>
                      <li>
                        • Preferred communication style (technical vs.
                        conversational)
                      </li>
                      <li>
                        • Areas where client needs more education vs. grasps
                        quickly
                      </li>
                      <li>
                        • How client makes decisions (detail-oriented vs.
                        big-picture)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className='font-semibold mb-2'>
                      Business and Industry Context
                    </h5>
                    <ul className='space-y-1 text-[var(--color-text-secondary)]'>
                      <li>
                        • Client&apos;s industry and how their business operates
                      </li>
                      <li>
                        • Specific business challenges they&apos;ve mentioned
                      </li>
                      <li>• Company growth stage and strategic plans</li>
                      <li>• Unique aspects of their business model</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className='font-semibold mb-2'>
                      Personal Context and Goals
                    </h5>
                    <ul className='space-y-1 text-[var(--color-text-secondary)]'>
                      <li>• Family dynamics relevant to planning</li>
                      <li>• Specific concerns client has expressed</li>
                      <li>• Legacy intentions and values</li>
                      <li>• Life transitions or timeline factors</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className='font-semibold mb-2'>Conversation History</h5>
                    <ul className='space-y-1 text-[var(--color-text-secondary)]'>
                      <li>• Topics discussed in previous meetings</li>
                      <li>• Questions client has asked</li>
                      <li>• Analogies or examples that have resonated</li>
                      <li>• Decisions client is working through</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
            <Card className='bg-blue-50 border-l-4 border-blue-500 max-w-4xl mx-auto mb-12'>
              <h4 className='font-semibold mb-4'>The Quality Equation:</h4>
              <div className='space-y-3'>
                <div>
                  <p className='font-semibold'>Minimum profile data</p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    → Technically accurate, compliance-ready, but generic
                    presentation
                  </p>
                </div>
                <div>
                  <p className='font-semibold'>Rich profile + client context</p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    → Technically accurate, compliance-ready, AND highly
                    personalized presentation
                  </p>
                </div>
                <p className='mt-4 text-sm'>
                  The more client insights you document, the better the
                  personalization—but compliance rigor is maintained regardless.
                </p>
              </div>
            </Card>

            <Card className='bg-purple-50 border-l-4 border-purple-500 max-w-4xl mx-auto mb-12'>
              <h4 className='font-semibold mb-4 text-lg'>
                Your Competitive Advantage:
              </h4>
              <p className='mb-4 text-sm'>
                Every advisor using VelocityIQ has access to the same analysis
                tools and personalization engine. Your differentiation comes
                from the quality of your client relationships.
              </p>
              <p className='mb-4 text-sm'>
                Advisors who invest in deeper discovery conversations, practice
                active listening, and document richer client insights will
                produce more valuable, highly personalized reports. The platform
                amplifies your relationship skills—it doesn&apos;t replace them.
              </p>
              <p className='font-semibold text-sm'>
                Better relationships → Better insights → Better reports →
                Stronger client loyalty
              </p>
            </Card>

            {/* Advisor Controls */}
            <h3 className='text-3xl font-semibold text-center mb-8'>
              What Advisors Control
            </h3>
            <div className='mb-8'>
              <div className='mb-8 flex justify-center'>
                <Image
                  src='/images/advisor-personalization-controls.png'
                  alt='Advisor personalization controls'
                  width={800}
                  height={450}
                  className='rounded-xl shadow-lg'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
                <Card>
                  <Users className='w-8 h-8 text-[var(--color-primary)] mb-3' />
                  <h4 className='font-semibold mb-3'>Tone and Complexity</h4>
                  <ul className='space-y-1 text-sm'>
                    <li>→ Technical/Professional/Conversational spectrum</li>
                    <li>→ Detail level (executive summary to comprehensive)</li>
                    <li>→ Complexity matching client sophistication</li>
                    <li>→ Analogy usage (frequent, moderate, minimal)</li>
                  </ul>
                </Card>
                <Card>
                  <FileText className='w-8 h-8 text-[var(--color-primary)] mb-3' />
                  <h4 className='font-semibold mb-3'>Content Organization</h4>
                  <ul className='space-y-1 text-sm'>
                    <li>→ What to emphasize based on client priorities</li>
                    <li>
                      → Order of presentation (most important to client first)
                    </li>
                    <li>→ How much detail on different topics</li>
                    <li>→ Which risks to highlight prominently</li>
                  </ul>
                </Card>
                <Card>
                  <Sparkles className='w-8 h-8 text-[var(--color-primary)] mb-3' />
                  <h4 className='font-semibold mb-3'>Personalization Depth</h4>
                  <ul className='space-y-1 text-sm'>
                    <li>→ How much client context to include</li>
                    <li>→ References to previous conversations</li>
                    <li>→ Industry-specific analogies and examples</li>
                    <li>→ Personal situation mentions</li>
                  </ul>
                </Card>
                <Card>
                  <FileText className='w-8 h-8 text-[var(--color-primary)] mb-3' />
                  <h4 className='font-semibold mb-3'>Report Management</h4>
                  <ul className='space-y-1 text-sm'>
                    <li>→ Generate multiple scenarios for comparison</li>
                    <li>→ Filter audit reports by analysis component</li>
                    <li>→ Export reports to PDF for client delivery</li>
                    <li>→ Print compliance documentation for files</li>
                    <li>→ Archive scenarios for client reference</li>
                  </ul>
                </Card>
              </div>
              <Card className='bg-amber-50 border-l-4 border-amber-500'>
                <Lock className='w-8 h-8 text-amber-600 mb-3' />
                <h4 className='font-semibold mb-3'>The Critical Point</h4>
                <p className='text-sm mb-2'>
                  Advisors control personalization presentation. Compliance
                  controls calculation accuracy. Both are maintained
                  simultaneously.
                </p>
                <p className='text-sm mb-2'>
                  Advisor can adjust how analysis is communicated. Advisor
                  cannot change underlying calculations or sources. This
                  preserves compliance rigor while enabling personalization.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 7: COMPETITIVE ADVANTAGE */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              The Only Platform That Solves Both Sides of the Equation
            </h2>
            <div className='mb-12'>
              <Image
                src='/images/platform-competitive-advantage.png'
                alt='Platform competitive advantage'
                width={1200}
                height={600}
                className='rounded-xl shadow-lg mx-auto'
              />
            </div>
            <h3 className='text-3xl font-semibold text-center mb-8'>
              The Competitive Landscape
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <Card className='border-2 border-gray-300'>
                <FileText className='w-12 h-12 text-gray-500 mb-4' />
                <h4 className='text-xl font-semibold mb-4'>
                  Traditional Compliance-Focused Tools
                </h4>
                <div className='mb-4'>
                  <p className='font-semibold mb-2 text-green-600'>Pros:</p>
                  <ul className='space-y-1 text-sm'>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Calculations verifiable</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Audit trail complete</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Compliance officer approves</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className='font-semibold mb-2 text-red-600'>Cons:</p>
                  <ul className='space-y-1 text-sm'>
                    <li className='flex items-center gap-2'>
                      <XCircle className='w-4 h-4 text-red-500' />
                      <span>Generic, template-driven reports</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <XCircle className='w-4 h-4 text-red-500' />
                      <span>No personalization capability</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <XCircle className='w-4 h-4 text-red-500' />
                      <span>Can&apos;t compete for sophisticated HNWIs</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <XCircle className='w-4 h-4 text-red-500' />
                      <span>
                        Advisors see them as &quot;compliance burden&quot; not
                        client value
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className='border-2 border-gray-300'>
                <Sparkles className='w-12 h-12 text-gray-500 mb-4' />
                <h4 className='text-xl font-semibold mb-4'>
                  Black-Box AI Personalization Tools
                </h4>
                <div className='mb-4'>
                  <p className='font-semibold mb-2 text-green-600'>Pros:</p>
                  <ul className='space-y-1 text-sm'>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Highly personalized output</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Impressive client experience</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Advisors love them</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className='font-semibold mb-2 text-red-600'>Cons:</p>
                  <ul className='space-y-1 text-sm'>
                    <li className='flex items-center gap-2'>
                      <XCircle className='w-4 h-4 text-red-500' />
                      <span>Calculations unverifiable</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <XCircle className='w-4 h-4 text-red-500' />
                      <span>Hallucination risk</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <XCircle className='w-4 h-4 text-red-500' />
                      <span>Compliance can&apos;t approve</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <XCircle className='w-4 h-4 text-red-500' />
                      <span>Regulatory examination risk</span>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className='border-2 border-[var(--color-primary)] bg-blue-50'>
                <Shield className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h4 className='text-xl font-semibold mb-4'>
                  VelocityIQ Unique Position
                </h4>
                <div className='mb-4'>
                  <p className='font-semibold mb-2 text-green-600'>
                    Compliance-Ready:
                  </p>
                  <ul className='space-y-1 text-sm'>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Fully verifiable calculations</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Complete source attribution</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Audit trail documentation</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Glass-box transparency</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className='font-semibold mb-2 text-green-600'>
                    AND SIMULTANEOUSLY:
                  </p>
                  <ul className='space-y-1 text-sm'>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Sophisticated personalization</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Client-tailored communication</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Context-aware presentation</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      <span>Exceptional client experience</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
            <Card className='bg-green-50 border-l-4 border-green-500 max-w-4xl mx-auto mt-12'>
              <h4 className='text-2xl font-bold text-center'>
                NO OTHER PLATFORM DELIVERS BOTH.
              </h4>
            </Card>
          </div>
        </section>

        {/* SECTION 8: PLATFORM VALUE PROPOSITION */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Why RIA Platforms Need This Capability Now
            </h2>
            <div className='space-y-12'>
              {/* For Platforms */}
              <Card>
                <h3 className='text-2xl font-semibold mb-6'>For Platforms</h3>
                <div className='mb-6'>
                  <h4 className='font-semibold mb-4'>
                    Competitive Requirements
                  </h4>
                  <p className='mb-4'>
                    The 1-1.5M business-owning HNWI market demands:
                  </p>
                  <ul className='space-y-2 mb-6'>
                    <li>→ Sophisticated, personalized analysis</li>
                    <li>→ Technology-enabled advisor capabilities</li>
                    <li>→ Professional-grade client experiences</li>
                  </ul>
                  <p className='font-semibold mb-4'>
                    Platforms without compliant personalization will:
                  </p>
                  <ul className='space-y-2 mb-6'>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 shrink-0' />
                      <span>Lose sophisticated clients to competitors</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 shrink-0' />
                      <span>Fail to attract top advisors</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 shrink-0' />
                      <span>Miss the highest-value market segment</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-5 h-5 text-red-500 mt-0.5 shrink-0' />
                      <span>Fall behind in technology arms race</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold mb-4'>
                    The VelocityIQ Platform Advantage
                  </h4>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>
                        Differentiate with HNWI-grade client experience
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>
                        Maintain full compliance rigor and exam readiness
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>
                        Attract advisors who want to serve complex clients
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Compete for highest-value market segment</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>
                        Future-proof with AI capabilities compliance approves
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>

              {/* For Advisors */}
              <Card>
                <h3 className='text-2xl font-semibold mb-6'>For Advisors</h3>
                <div className='mb-6'>
                  <h4 className='font-semibold mb-4'>The Market Opportunity</h4>
                  <p className='mb-4'>
                    Business-owning HNWIs (1-1.5M market) will choose advisors
                    who can:
                  </p>
                  <ul className='space-y-2 mb-6'>
                    <li>→ Demonstrate deep understanding of their situation</li>
                    <li>→ Deliver sophisticated, personalized analysis</li>
                    <li>→ Use technology to provide better service</li>
                    <li>→ Maintain professional rigor and documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold mb-4'>
                    What VelocityIQ Enables
                  </h4>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>
                        Deliver exceptional personalized client experiences
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Compete for sophisticated, high-value clients</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>
                        Differentiate from advisors using generic tools
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>
                        Build stronger relationships through better
                        communication
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>
                        Scale personalization that used to take hours per client
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Do it all with compliance confidence</span>
                    </li>
                  </ul>
                </div>
              </Card>

              {/* For Compliance Officers */}
              <Card>
                <h3 className='text-2xl font-semibold mb-6'>
                  For Compliance Officers
                </h3>
                <div className='mb-6'>
                  <h4 className='font-semibold mb-4'>
                    The Solution to the Paradox
                  </h4>
                  <p className='mb-4'>
                    Finally approve AI personalization without creating risk:
                  </p>
                  <ul className='space-y-2 mb-6'>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Every calculation verifiable</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Every fact source-attributed</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Complete audit trail maintained</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Systematic methodology documented</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Regulatory examination defensible</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold mb-4'>WHILE enabling:</h4>
                  <ul className='space-y-2'>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Advisor competitiveness for HNWIs</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Platform differentiation in market</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Client experience that drives growth</span>
                    </li>
                    <li className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-green-500' />
                      <span>Technology adoption with confidence</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 9: LEGAL POSITIONING AND RESPONSIBILITIES */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Understanding Personalized Reports and Advisor Accountability
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
              <Card>
                <CheckCircle2 className='w-12 h-12 text-green-500 mb-4' />
                <h4 className='text-xl font-semibold mb-4'>
                  What Personalized Reporting Provides
                </h4>
                <ul className='space-y-2 text-sm'>
                  <li>✓ Glass-box calculation transparency</li>
                  <li>✓ Complete source attribution</li>
                  <li>✓ Full audit trail documentation</li>
                  <li>✓ AI-powered presentation personalization</li>
                  <li>✓ Client-tailored communication formatting</li>
                </ul>
              </Card>
              <Card>
                <X className='w-12 h-12 text-red-500 mb-4' />
                <h4 className='text-xl font-semibold mb-4'>
                  What Personalized Reporting Does NOT Do
                </h4>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-start gap-2'>
                    <X className='w-4 h-4 text-red-500 mt-0.5 shrink-0' />
                    <span>
                      Make suitability determinations or recommendations
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <X className='w-4 h-4 text-red-500 mt-0.5 shrink-0' />
                    <span>Replace advisor professional judgment</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <X className='w-4 h-4 text-red-500 mt-0.5 shrink-0' />
                    <span>Eliminate need for advisor review</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <X className='w-4 h-4 text-red-500 mt-0.5 shrink-0' />
                    <span>Guarantee accuracy of personalization</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <X className='w-4 h-4 text-red-500 mt-0.5 shrink-0' />
                    <span>Reduce advisor responsibility for content</span>
                  </li>
                </ul>
              </Card>
              <Card>
                <User className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h4 className='text-xl font-semibold mb-4'>
                  Advisor Responsibilities
                </h4>
                <p className='text-sm font-semibold mb-3'>
                  You are solely responsible for:
                </p>
                <ul className='space-y-2 text-sm'>
                  <li>→ Accuracy of all client information provided</li>
                  <li>→ Appropriateness of personalization for each client</li>
                  <li>→ Reviewing and verifying all report content</li>
                  <li>→ Approving reports before client delivery</li>
                  <li>
                    → Ensuring recommendations reflect your determinations
                  </li>
                  <li>→ Compliance with firm policies and regulations</li>
                  <li>→ All content delivered to clients</li>
                  <li>→ Professional quality of all communications</li>
                </ul>
              </Card>
            </div>
            <Card className='bg-gray-100 p-6 text-sm'>
              <p className='mb-4'>
                VelocityIQ generates personalized report presentations with
                transparent calculations and source attribution. VelocityIQ does
                not make investment recommendations or provide advice. Advisors
                must review all reports, verify accuracy of calculations and
                personalization, ensure appropriateness, and approve content
                before client delivery. Advisors are solely responsible for all
                report content, recommendations made, and compliance with
                applicable regulations.
              </p>
              <p className='mb-4'>
                Reports are provided &quot;as is&quot; and may contain errors
                despite transparency measures. VelocityIQ disclaims liability
                for report content, advisor use of reports, client outcomes, or
                damages arising from report generation or delivery.
              </p>
              <p>
                Use of personalized reporting does not ensure accuracy,
                regulatory compliance, or eliminate advisor liability for report
                content and client communications.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className='py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'>
          <div className='max-w-7xl mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold mb-6'>
              Deliver HNWI-Grade Personalization With Compliance Confidence
            </h2>
            <p className='text-xl text-[var(--color-text-secondary)] mb-8 max-w-3xl mx-auto'>
              See how VelocityIQ solves the AI personalization
              paradox—delivering sophisticated, client-tailored reports with
              full calculation transparency, source attribution, and audit trail
              documentation. The only platform that gives compliance officers
              AND HNWIs what they demand.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Button href='#compliance-ready-analysis' variant='primary'>
                See Compliance Features
              </Button>
              <Button href='/demo' variant='secondary'>
                View Report Examples
              </Button>
              <Button href='/book' variant='primary'>
                Apply for Pilot
              </Button>
            </div>
            <p className='text-xs text-[var(--color-text-secondary)]'>
              VelocityIQ provides glass-box personalization with full compliance
              transparency. Advisors review, verify, and approve all content
              before client delivery.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
