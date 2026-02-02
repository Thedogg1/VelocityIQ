import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { OpenExternalButton } from '@/components/OpenExternalButton';
import type { Metadata } from 'next';
import {
  Shield,
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Zap,
  Users,
  TrendingUp,
  BarChart3,
  Calculator,
  Eye,
  Target,
  DollarSign,
  User,
  Mail,
  ArrowRight,
  Lock,
  Search,
  Layers,
  Play,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Turn Your RIA Platform Into a Scalable, AI-Driven Growth Engine | VelocityIQ',
  description: 'Give every advisor on your platform a fully auditable AI research partner that turns complex portfolios into deterministic, compliance-ready insights in minutes. Our prompt-driven reporting engine plugs into your existing tech stack to automate high-value analysis, standardise documentation, and deliver premium, HNW-grade client reports at scale—without adding developer overhead or compliance risk.',
  keywords: ['RIA platform', 'AI-powered advisor tools', 'FINRA Rule 2111', 'platform scalability', 'advisor productivity', 'compliance automation', 'HNW client analysis', 'platform integration'],
  openGraph: {
    title: 'Turn Your RIA Platform Into a Scalable, AI-Driven Growth Engine | VelocityIQ',
    description: 'AI-powered reporting engine that automates high-value analysis and delivers premium client reports at scale across your entire advisor network.',
    type: 'website',
    url: 'https://getvelocityiq.com/',
    images: [{ url: '/images/hero-audit-trail.png' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turn Your RIA Platform Into a Scalable, AI-Driven Growth Engine | VelocityIQ',
    description: 'AI-powered reporting engine that automates high-value analysis and delivers premium client reports at scale.',
    images: ['/images/hero-audit-trail.png'],
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        {/* HERO SECTION */}
        <section className='bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12'>
              <div>
                <h1 className='text-5xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight'>
                  Turn Your RIA Platform Into a Scalable, AI-Driven Growth Engine
                </h1>
                <p className='text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed'>
                  Give every advisor on your platform a fully auditable AI research partner that turns complex portfolios into deterministic, compliance-ready insights in minutes. Our prompt-driven reporting engine plugs into your existing tech stack to automate high-value analysis, standardise documentation, and deliver premium, HNW-grade client reports at scale—without adding developer overhead or compliance risk. By combining advisor-level productivity gains with platform-wide risk controls, you attract and retain top advisors while operating with the efficiency of a much larger firm.
                </p>
                <div className='mb-6'>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    Built by former NatWest banking compliance systems developer
                  </p>
                  <div className='flex flex-wrap gap-4 text-sm font-semibold text-[var(--color-primary)]'>
                    <span className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5' />
                      AI-powered suitability assessment
                    </span>
                    <span className='flex items-center gap-2'>
                      <Shield className='w-5 h-5' />
                      73 risk validation rules
                    </span>
                    <span className='flex items-center gap-2'>
                      <FileText className='w-5 h-5' />
                      Complete audit trail
                    </span>
                    <span className='flex items-center gap-2'>
                      <TrendingUp className='w-5 h-5' />
                      Scalable across 1.5M HNWI opportunity
                    </span>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                  <OpenExternalButton
                    url='https://www.loom.com/share/PLACEHOLDER'
                    label='Watch 10-Minute Platform Demo'
                    variant='primary'
                  />
                  <Button href='/suitability' variant='secondary'>
                    See FINRA Assessment Tools
                  </Button>
                </div>
                <p className='text-xs text-[var(--color-text-secondary)] italic'>
                  VelocityIQ provides decision-support tools and analysis frameworks. Advisors are solely responsible for all suitability determinations and recommendations to clients.
                </p>
              </div>
              <div className='relative'>
                <Image
                  src='/images/hero-audit-trail.png'
                  alt='Platform dashboard showing multiple advisors using VelocityIQ simultaneously, with AI-powered suitability assessments generating in real-time, compliance metrics visible, and advisor productivity analytics displayed'
                  width={800}
                  height={600}
                  className='rounded-xl shadow-lg'
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* PLATFORM VALUE PROPOSITION: FOUR-LAYER BENEFIT STACK */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Why Leading RIA Platforms Choose VelocityIQ
            </h2>
            <p className='text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto'>
              Modern RIA platforms compete on technology, efficiency, and advisor support. VelocityIQ delivers integrated AI-powered analysis that scales across your entire advisor network—driving recruitment, reducing costs, and ensuring compliance at every touchpoint.
            </p>

            <div className='space-y-12'>
              {/* Layer 1: Scalable Efficiency & Integrated Workflows */}
              <Card className='border-2 border-[var(--color-primary)]'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='bg-[var(--color-primary)] text-white rounded-lg p-6 flex-shrink-0'>
                    <span className='text-4xl font-bold'>1</span>
                  </div>
                  <div>
                    <span className='text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide'>Platform Efficiency</span>
                    <h3 className='text-3xl font-bold text-[var(--color-text-primary)]'>
                      Scalable Efficiency & Integrated Workflows
                    </h3>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                  <div>
                    <h4 className='text-xl font-semibold mb-4 text-[var(--color-text-primary)]'>
                      The Platform Challenge:
                    </h4>
                    <ul className='space-y-2 text-[var(--color-text-secondary)] mb-6'>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Fragmented tools create silos and inefficiency</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Operational cost per advisor keeps rising</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Manual analysis doesn&apos;t scale across growing advisor networks</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Integration overhead limits technology adoption</span>
                      </li>
                    </ul>
                    <h4 className='text-xl font-semibold mb-4 text-[var(--color-text-primary)]'>
                      How VelocityIQ Solves This:
                    </h4>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-semibold mb-2'>Integrated AI-Powered Reporting:</p>
                        <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                          <li>• Plugs into your existing tech stack (CRM, portfolio management, document systems)</li>
                          <li>• Prompt-driven analysis eliminates forms and manual data entry</li>
                          <li>• Natural language input: &quot;Analyse post-exit portfolio for business owner with $70M proceeds&quot;</li>
                          <li>• System generates complete analysis in minutes, not hours</li>
                        </ul>
                      </div>
                      <div>
                        <p className='font-semibold mb-2'>Scalable Across Entire Platform:</p>
                        <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                          <li>• One methodology applied consistently across all advisors</li>
                          <li>• Automatic compliance documentation for every strategy</li>
                          <li>• Reduces operational cost per advisor by 40-60% on complex cases</li>
                          <li>• No per-advisor licensing complexity—built for platform scale</li>
                        </ul>
                      </div>
                      <div>
                        <p className='font-semibold mb-2'>Advisor Productivity Gains:</p>
                        <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                          <li>• 3-5 hours saved per complex client analysis</li>
                          <li>• AI classification of strategies (risk level, time horizon, liquidity events)</li>
                          <li>• Automated FINRA 2111 suitability assessment generation</li>
                          <li>• More time for client relationships, less time on paperwork</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src='/images/validation-pipeline.png'
                      alt='Integrated AI-powered reporting workflow'
                      width={600}
                      height={400}
                      className='rounded-xl shadow-lg'
                    />
                  </div>
                </div>
                <div className='mt-6 bg-blue-50 p-4 rounded-lg'>
                  <p className='font-semibold text-[var(--color-primary)]'>
                    Platform Value:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    Transform advisor productivity across your entire network while reducing operational complexity. Integration that enhances your stack rather than competing with it.
                  </p>
                </div>
              </Card>

              {/* Layer 2: Advisor Recruitment, Retention & Differentiation */}
              <Card className='border-2 border-[var(--color-primary)]'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='bg-[var(--color-primary)] text-white rounded-lg p-5 flex-shrink-0'>
                    <span className='text-3xl font-bold'>2</span>
                  </div>
                  <div>
                    <span className='text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide'>Advisor Growth</span>
                    <h3 className='text-3xl font-bold text-[var(--color-text-primary)]'>
                      Advisor Recruitment, Retention & Differentiation
                    </h3>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                  <div className='order-2 lg:order-1'>
                    <Image
                      src='/images/platform-competitive-advantage.png'
                      alt='Advisor recruitment and retention advantages'
                      width={600}
                      height={400}
                      className='rounded-xl shadow-lg'
                    />
                  </div>
                  <div className='order-1 lg:order-2'>
                    <h4 className='text-xl font-semibold mb-4 text-[var(--color-text-primary)]'>
                      The Competitive Reality:
                    </h4>
                    <p className='text-[var(--color-text-secondary)] mb-6'>
                      Top advisors choose platforms based on technology, support, and competitive advantages. Modern AI-powered tools are now table stakes for recruiting and retaining elite talent.
                    </p>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-semibold mb-2'>Advisor Recruitment Value:</p>
                        <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                          <li>• &quot;We give you an AI research partner for complex client analysis&quot;</li>
                          <li>• Premium technology positioning attracts sophisticated advisors</li>
                          <li>• Demonstrate commitment to advisor success with cutting-edge tools</li>
                          <li>• Competitive advantage in recruiting from legacy platforms</li>
                        </ul>
                      </div>
                      <div>
                        <p className='font-semibold mb-2'>Advisor Retention Through Capability:</p>
                        <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                          <li>• Advisors deliver more sophisticated analysis to clients</li>
                          <li>• Handle complex HNW cases with confidence</li>
                          <li>• Professional-grade documentation impresses clients</li>
                          <li>• Technology reduces frustration with compliance overhead</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-6 bg-blue-50 p-4 rounded-lg'>
                  <p className='font-semibold text-[var(--color-primary)]'>
                    Platform Value:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    Position your platform as the technology leader that empowers advisors to serve complex clients efficiently. Make advisor recruitment and retention easier with demonstrable capability advantages.
                  </p>
                </div>
              </Card>

              {/* Layer 3: Risk Mitigation & Compliance at Scale */}
              <Card className='border-2 border-[var(--color-primary)]'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='bg-[var(--color-primary)] text-white rounded-lg p-4 flex-shrink-0'>
                    <span className='text-2xl font-bold'>3</span>
                  </div>
                  <div>
                    <span className='text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide'>Enterprise Compliance</span>
                    <h3 className='text-3xl font-bold text-[var(--color-text-primary)]'>
                      Risk Mitigation & Compliance at Scale
                    </h3>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                  <div>
                    <h4 className='text-xl font-semibold mb-4 text-[var(--color-text-primary)]'>
                      The Regulatory Environment:
                    </h4>
                    <p className='text-[var(--color-text-secondary)] mb-6'>
                      SEC exam priorities, 2025 regulatory agenda, and rising fines mean platforms must demonstrate strong, tech-enabled compliance across all affiliated advisors. Manual compliance doesn&apos;t scale.
                    </p>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-semibold mb-2'>Automated FINRA 2111 Compliance:</p>
                        <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                          <li>• Every strategy automatically assessed against three-prong framework</li>
                          <li>• Consistent methodology across all advisors eliminates interpretation variation</li>
                          <li>• Complete documentation generated for every analysis</li>
                          <li>• Audit trail from initial input through final advisor determination</li>
                        </ul>
                      </div>
                      <div>
                        <p className='font-semibold mb-2'>Risk Controls at Scale:</p>
                        <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                          <li>• 73 validation rules checking every client situation</li>
                          <li>• Data quality controls catch errors before they become problems</li>
                          <li>• Warning flags for planning risks requiring disclosure</li>
                          <li>• Platform-wide visibility into risk identification patterns</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src='/images/compliance-approved-personalized-reports.png'
                      alt='Platform-wide compliance infrastructure'
                      width={600}
                      height={400}
                      className='rounded-xl shadow-lg'
                    />
                  </div>
                </div>
                <div className='mt-6 bg-blue-50 p-4 rounded-lg'>
                  <p className='font-semibold text-[var(--color-primary)]'>
                    Platform Value:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    Demonstrate robust, tech-enabled compliance infrastructure that scales across your entire advisor network. Show examiners systematic methodology with complete audit trails—reducing platform regulatory risk while lowering compliance costs.
                  </p>
                </div>
              </Card>

              {/* Layer 4: Premium Client Experience & Personalised Insights */}
              <Card className='border-2 border-[var(--color-primary)]'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='bg-[var(--color-primary)] text-white rounded-lg p-3 flex-shrink-0'>
                    <span className='text-xl font-bold'>4</span>
                  </div>
                  <div>
                    <span className='text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide'>Client Excellence</span>
                    <h3 className='text-3xl font-bold text-[var(--color-text-primary)]'>
                      Premium Client Experience & Personalised Insights
                    </h3>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                  <div className='order-2 lg:order-1'>
                    <Image
                      src='/images/hnwi-client-delighted.png'
                      alt='Premium HNW-grade client experience'
                      width={600}
                      height={400}
                      className='rounded-xl shadow-lg'
                    />
                  </div>
                  <div className='order-1 lg:order-2'>
                    <h4 className='text-xl font-semibold mb-4 text-[var(--color-text-primary)]'>
                      The Client Expectation:
                    </h4>
                    <p className='text-[var(--color-text-secondary)] mb-6'>
                      HNW clients expect sophisticated, data-driven analysis. Generic reporting doesn&apos;t meet the standards of business owners with complex situations.
                    </p>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-semibold mb-2'>Premium, HNW-Grade Analysis:</p>
                        <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                          <li>• Niche-specific expertise (business exit, equity compensation, estate planning)</li>
                          <li>• Personalised insights based on individual client situations</li>
                          <li>• Professional documentation clients can review and understand</li>
                          <li>• Transparency in how recommendations are evaluated</li>
                        </ul>
                      </div>
                      <div>
                        <p className='font-semibold mb-2'>Client-Facing Deliverables:</p>
                        <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                          <li>• Clear suitability assessment showing alignment to their profile</li>
                          <li>• Transparent scoring with factual basis</li>
                          <li>• AI-generated explanations specific to their situation</li>
                          <li>• Professional reports suitable for client meetings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-6 bg-blue-50 p-4 rounded-lg'>
                  <p className='font-semibold text-[var(--color-primary)]'>
                    Platform Value:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    Strengthen platform brand with premium client experience tools. Differentiate on client-facing sophistication, supporting AUM growth across your advisor network.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* THE AI-POWERED FINRA 2111 SUITABILITY ASSESSMENT */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              From Natural Language to Compliant Documentation in Minutes
            </h2>
            <p className='text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto'>
              VelocityIQ&apos;s AI-powered suitability assessment transforms how advisors document strategy recommendations. Natural language input, intelligent classification, and automated three-prong analysis deliver audit-ready compliance documentation without forms, codes, or manual calculations.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
              <Card className='text-center'>
                <div className='bg-[var(--color-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-bold'>1</span>
                </div>
                <h3 className='text-lg font-semibold mb-2'>Natural Language Strategy Description</h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  Advisor describes strategy in plain English. No forms. No codes. Just natural description.
                </p>
              </Card>

              <Card className='text-center'>
                <div className='bg-[var(--color-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-bold'>2</span>
                </div>
                <h3 className='text-lg font-semibold mb-2'>AI Classification & Advisor Review</h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  AI analyses strategy and classifies risk level, strategy type, time horizon, and experience required. Advisor reviews and adjusts.
                </p>
              </Card>

              <Card className='text-center'>
                <div className='bg-[var(--color-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-bold'>3</span>
                </div>
                <h3 className='text-lg font-semibold mb-2'>Automated Three-Prong Suitability Analysis</h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  System evaluates strategy against client profile using FINRA&apos;s three-prong framework with transparent scoring.
                </p>
              </Card>

              <Card className='text-center'>
                <div className='bg-[var(--color-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-bold'>4</span>
                </div>
                <h3 className='text-lg font-semibold mb-2'>Complete Compliance Documentation</h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  Comprehensive suitability assessment with scores, factual basis, AI explanations, and complete audit trail.
                </p>
              </Card>
            </div>

            <Card className='bg-amber-50 border-l-4 border-[var(--color-warning)] mb-8'>
              <h3 className='text-xl font-semibold mb-4 text-[var(--color-text-primary)]'>
                Critical Distinction: AI Analyses, Advisor Determines
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <p className='font-semibold mb-2'>What VelocityIQ Does:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Analyses strategy against client profile</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Evaluates alignment across FINRA framework</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Documents methodology with transparent calculations</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Provides AI-generated contextual explanations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className='font-semibold mb-2'>What VelocityIQ Does NOT Do:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Make final suitability determinations</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Provide investment advice or recommendations</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Approve or disapprove strategies</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Replace advisor professional judgment</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='mt-4 pt-4 border-t border-[var(--color-border-subtle)]'>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  <span className='font-semibold'>Advisor Responsibility:</span> The advisor reviews system analysis, applies professional judgment considering factors unique to the client relationship, makes the final suitability determination, and takes full responsibility for the recommendation.
                </p>
              </div>
            </Card>

            <div className='text-center'>
              <Button href='/suitability' variant='primary'>
                Learn More About Suitability Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* THE BUSINESS IMPACT */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              The Business Impact
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
              <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
                <h3 className='text-2xl font-semibold mb-6 text-[var(--color-text-primary)]'>
                  Current State Without VelocityIQ:
                </h3>
                <ul className='space-y-3 text-[var(--color-text-secondary)] mb-6'>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>15 FINRA violations/year × $150K = <span className='font-bold'>$2.25M in fines</span></span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Manual analysis errors slip through to clients</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>10 hours/month per advisor on compliance-heavy analysis</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Reactive compliance staff putting out fires</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Questioned credibility in regulatory audits</span>
                  </li>
                </ul>
              </Card>

              <Card className='bg-green-50 border-l-4 border-[var(--color-success)]'>
                <h3 className='text-2xl font-semibold mb-6 text-[var(--color-text-primary)]'>
                  With VelocityIQ:
                </h3>
                <ul className='space-y-3 text-[var(--color-text-secondary)] mb-6'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span><span className='font-bold'>80% fewer violations</span> through systematic error prevention</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span><span className='font-bold'>Zero silent failures</span>—every issue caught before recommendations</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span><span className='font-bold'>70% time savings</span> on analysis through validated automation</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>Proactive compliance with complete audit trails</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>Recruiting advantage—advisors join platforms with better tools</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className='bg-blue-50 border-l-4 border-[var(--color-primary)] mb-8'>
              <div className='text-center mb-6'>
                <p className='text-sm text-[var(--color-text-secondary)] mb-2'>
                  Platform Investment: <span className='font-semibold'>Mid five figures annually</span> for 200+ advisor platforms
                </p>
                <p className='text-3xl font-bold text-[var(--color-primary)] mb-2'>
                  Net Annual Benefit: $2M+ in reduced violations and efficiency
                </p>
                <p className='text-2xl font-bold text-[var(--color-success)]'>
                  ROI: 900%+
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg'>
                <p className='font-semibold mb-2 text-[var(--color-text-primary)]'>
                  Plus strategic advantages your competitors can&apos;t match:
                </p>
                <ul className='grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-[var(--color-text-secondary)]'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-[var(--color-success)] flex-shrink-0' />
                    <span>Advisor recruiting differentiator</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-[var(--color-success)] flex-shrink-0' />
                    <span>Regulatory audit confidence</span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-[var(--color-success)] flex-shrink-0' />
                    <span>Professional market positioning</span>
                  </li>
                </ul>
              </div>
            </Card>

            <div className='text-center'>
              <Button href='/book' variant='primary'>
                Calculate your specific ROI
              </Button>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Who This Is For
            </h2>
            <p className='text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto'>
              Built for RIA platforms (200-2,000 advisors) whose advisors serve:
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
              <Card>
                <Target className='w-8 h-8 text-[var(--color-primary)] mb-4' />
                <h3 className='text-xl font-semibold mb-2'>
                  Technology Executives
                </h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  Navigating equity compensation complexity
                </p>
              </Card>

              <Card>
                <Target className='w-8 h-8 text-[var(--color-primary)] mb-4' />
                <h3 className='text-xl font-semibold mb-2'>
                  Business Owners
                </h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  Planning exits, succession, or QSBS strategies
                </p>
              </Card>

              <Card>
                <Target className='w-8 h-8 text-[var(--color-primary)] mb-4' />
                <h3 className='text-xl font-semibold mb-2'>
                  High-Net-Worth Individuals
                </h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  Requiring sophisticated tax optimization
                </p>
              </Card>

              <Card>
                <Target className='w-8 h-8 text-[var(--color-primary)] mb-4' />
                <h3 className='text-xl font-semibold mb-2'>
                  Medical, Legal, Dental Practice Owners
                </h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  Needing niche expertise
                </p>
              </Card>

              <Card>
                <Target className='w-8 h-8 text-[var(--color-primary)] mb-4' />
                <h3 className='text-xl font-semibold mb-2'>
                  Real Estate Investors
                </h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  Managing 1031 exchanges and depreciation
                </p>
              </Card>
            </div>

            <Card className='bg-blue-50 border-l-4 border-[var(--color-primary)] text-center'>
              <p className='text-lg text-[var(--color-text-secondary)]'>
                If your platform needs systematic risk assessment and compliance documentation that regulators actually accept—and a recruiting edge over platforms still using generic tools—VelocityIQ is built for you.
              </p>
            </Card>
          </div>
        </section>

        {/* WHY THIS WORKS: BANKING-GRADE FOUNDATIONS */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Why This Works: Banking-Grade Foundations
            </h2>
            <p className='text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto'>
              VelocityIQ wasn&apos;t built by developers learning compliance from consultants. It was built by someone who spent years building compliance systems at NatWest and understands what regulators actually require.
            </p>

            <div className='max-w-4xl mx-auto mb-12'>
              <Card className='text-center mb-8'>
                <User className='w-16 h-16 text-[var(--color-primary)] mx-auto mb-4' />
                <h3 className='text-3xl font-bold mb-2'>Terry Martin</h3>
                <p className='text-xl text-[var(--color-text-secondary)] mb-6'>
                  Founder & Chief Architect
                </p>
              </Card>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <Card>
                  <h4 className='text-lg font-semibold mb-4'>Background:</h4>
                  <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>3 years at NatWest building banking compliance systems</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>11 years software development experience</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Banking-grade validation methodology expertise</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Microsoft AI certifications (AZ-900, AI-102)</span>
                    </li>
                  </ul>
                </Card>

                <Card>
                  <h4 className='text-lg font-semibold mb-4'>This background shows in the architecture:</h4>
                  <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <Lock className='w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0' />
                      <span>Multiple verification touchpoints—automated validation, advisor review, client acknowledgment, compliance oversight</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Calculator className='w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0' />
                      <span>Deterministic execution—same inputs always produce same outputs, fully reproducible for audits</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <Shield className='w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0' />
                      <span>Zero silent errors by design—validation before calculation, consistency checking during processing, result verification after computation</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <FileText className='w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0' />
                      <span>Regulatory framework integration—FINRA Rule 2111 and FinCEN methodology embedded in core architecture</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className='bg-amber-50 border-l-4 border-[var(--color-warning)] text-center'>
                <p className='text-lg font-semibold text-[var(--color-text-primary)]'>
                  You&apos;re not buying experimental AI from a tech startup. You&apos;re buying compliance-first architecture built by someone with banking-grade compliance experience and over a decade of software development rigor.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* SCALABILITY: PLATFORM-WIDE EFFICIENCY GAINS */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              One System, Entire Advisor Network, Consistent Methodology
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
                  <h3 className='text-xl font-semibold mb-4'>Traditional Approach:</h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Each advisor documents suitability differently</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Manual analysis varies in quality and completeness</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Compliance reviews are time-consuming and inconsistent</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>No visibility into methodology across advisor network</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>High operational cost per advisor on complex cases</span>
                    </li>
                  </ul>
                </Card>

                <Card className='bg-green-50 border-l-4 border-[var(--color-success)]'>
                  <h3 className='text-xl font-semibold mb-4'>VelocityIQ Platform Solution:</h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Same AI-powered analysis applied across all advisors</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Standardised documentation format</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>40-60% reduction in time per complex analysis</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Compliance dashboard showing usage across network</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Lower operational cost per advisor</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className='bg-blue-50 border-l-4 border-[var(--color-primary)] mb-8'>
                <h3 className='text-xl font-semibold mb-4'>ROI Calculation Example:</h3>
                <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                  <span className='font-semibold'>For 100-advisor platform:</span>
                </p>
                <ul className='space-y-2 text-sm text-[var(--color-text-secondary)] mb-4'>
                  <li>• Average complex cases per advisor per month: 8</li>
                  <li>• Time saved per case: 4 hours</li>
                  <li>• Total monthly time savings: 3,200 hours</li>
                  <li>• At $150/hour advisor time: $480,000 monthly value</li>
                  <li>• <span className='font-bold'>Annual value: $5.76M in recovered advisor productivity</span></li>
                </ul>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  Plus: Compliance risk reduction, improved advisor satisfaction, enhanced recruitment capability
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* THE MARKET OPPORTUNITY */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Position Your Platform for the Highest-Value Client Segment
            </h2>
            <p className='text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto'>
              Why Business-Owning HNWIs Drive Platform Growth
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              <Card className='text-center'>
                <Users className='w-12 h-12 text-[var(--color-primary)] mx-auto mb-4' />
                <div className='text-3xl font-bold text-[var(--color-primary)] mb-2'>~6M</div>
                <p className='text-sm text-[var(--color-text-secondary)]'>US HNWIs with $1M+ investable wealth</p>
              </Card>

              <Card className='text-center'>
                <Target className='w-12 h-12 text-[var(--color-primary)] mx-auto mb-4' />
                <div className='text-3xl font-bold text-[var(--color-primary)] mb-2'>1-2M</div>
                <p className='text-sm text-[var(--color-text-secondary)]'>Business owners with complex situations</p>
              </Card>

              <Card className='text-center'>
                <Zap className='w-12 h-12 text-[var(--color-primary)] mx-auto mb-4' />
                <div className='text-3xl font-bold text-[var(--color-primary)] mb-2'>79%</div>
                <p className='text-sm text-[var(--color-text-secondary)]'>Want AI-powered tools (younger HNWIs)</p>
              </Card>

              <Card className='text-center'>
                <TrendingUp className='w-12 h-12 text-[var(--color-primary)] mx-auto mb-4' />
                <div className='text-3xl font-bold text-[var(--color-primary)] mb-2'>1-1.5M</div>
                <p className='text-sm text-[var(--color-text-secondary)]'>Active opportunity seeking sophisticated capabilities</p>
              </Card>
            </div>

            <Card className='bg-blue-50 border-l-4 border-[var(--color-primary)] mb-8'>
              <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                <span className='font-semibold'>Source Citation:</span> Based on: Henley & Partners Global Wealth Report 2024, Boosted.ai/InvestmentNews 2024 HNWI Survey, RFI Global Private Banking 2025, Forbes Advisor 2025
              </p>
              <div className='space-y-3'>
                <p className='font-semibold mb-2'>This segment represents:</p>
                <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                  <li>• Largest wealth transfer events ($70M+ typical exit proceeds)</li>
                  <li>• Most complex planning situations (concentration, liquidity, tax)</li>
                  <li>• Highest advisory fees (comprehensive planning + AUM)</li>
                  <li>• Strongest advisor loyalty (relationship-driven, not transactional)</li>
                  <li>• Platform differentiation opportunity (few platforms excel here)</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* JANUARY 2026 PILOT PROGRAM */}
        <section className='py-20 bg-[var(--color-primary)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4 !text-white'>
              Join Leading RIA Platforms Validating AI-Powered Compliance
            </h2>
            <p className='text-xl text-center mb-12 text-white max-w-3xl mx-auto'>
              VelocityIQ launches January 2026 with a strategic pilot focused on RIA platforms ready to differentiate with AI-powered advisor tools. We&apos;re seeking forward-thinking platforms to validate our integrated analysis infrastructure and shape post-pilot development.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
              <Card>
                <h3 className='text-2xl font-semibold mb-4'>What&apos;s Included</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='font-semibold mb-2'>Core Platform Infrastructure:</p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>AI-powered FINRA 2111 suitability assessment</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>Natural language strategy input and AI classification</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>Automated three-prong analysis framework</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>73-rule risk identification system</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>Complete audit trail and documentation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>Enterprise Features:</p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>Platform-wide deployment across your advisor network</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>Compliance dashboard and reporting</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>API access for integration planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className='text-2xl font-semibold mb-4'>What We Need</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='font-semibold mb-2'>Platform Commitment:</p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0' />
                        <span>5-10 advisors actively using system</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0' />
                        <span>Regular feedback sessions with platform leadership</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0' />
                        <span>Compliance officer evaluation of methodology</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0' />
                        <span>Willingness to provide testimonial upon successful validation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>Ideal Pilot Partners:</p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>• RIA platforms with 50+ advisors</li>
                      <li>• Technology-forward culture and existing tech stack</li>
                      <li>• Strong compliance and supervisory infrastructure</li>
                      <li>• Advisors serving business-owning HNWIs or complex clients</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className='text-center mb-8'>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  href='/book'
                  variant='secondary'
                  className='bg-white text-[var(--color-primary)] hover:bg-blue-50'
                >
                  Apply for January 2026 Pilot
                </Button>
                <Button
                  href='/book'
                  variant='secondary'
                  className='bg-white text-[var(--color-primary)] hover:bg-blue-50'
                >
                  Schedule Platform Qualification Call
                </Button>
              </div>
            </div>

            <Card className='bg-white/10 backdrop-blur text-white border-white/20'>
              <p className='text-sm text-white'>
                <span className='font-semibold'>Legal Notice:</span> Pilot participants acknowledge that VelocityIQ provides decision-support tools and analysis frameworks. Advisors remain solely responsible for all suitability determinations and client recommendations. Platform maintains all supervisory and compliance responsibilities.
              </p>
            </Card>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold mb-4'>
              Scale Your RIA Platform with AI-Powered Advisor Intelligence
            </h2>
            <p className='text-xl mb-12 text-[var(--color-text-secondary)]'>
              Join the January 2026 pilot and transform your platform with integrated analysis tools that drive efficiency, support compliance, enable advisor growth, and deliver premium client experiences—all from a single, scalable infrastructure.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              <Card className='text-center'>
                <Zap className='w-10 h-10 text-[var(--color-primary)] mx-auto mb-3' />
                <h3 className='font-semibold mb-2'>Scalable Efficiency</h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>40-60% time savings per complex case across your advisor network</p>
              </Card>

              <Card className='text-center'>
                <TrendingUp className='w-10 h-10 text-[var(--color-primary)] mx-auto mb-3' />
                <h3 className='font-semibold mb-2'>Advisor Growth</h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>Modern AI tools attract and retain elite advisors</p>
              </Card>

              <Card className='text-center'>
                <Shield className='w-10 h-10 text-[var(--color-primary)] mx-auto mb-3' />
                <h3 className='font-semibold mb-2'>Enterprise Compliance</h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>Platform-wide risk controls and audit-ready documentation</p>
              </Card>

              <Card className='text-center'>
                <Target className='w-10 h-10 text-[var(--color-primary)] mx-auto mb-3' />
                <h3 className='font-semibold mb-2'>Premium Experience</h3>
                <p className='text-sm text-[var(--color-text-secondary)]'>HNW-grade insights differentiate your platform</p>
              </Card>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <OpenExternalButton
                url='https://www.loom.com/share/PLACEHOLDER'
                label='Watch Platform Demo'
                variant='primary'
              />
              <Button href='/book' variant='secondary'>
                Apply for Pilot Program
              </Button>
            </div>

            <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
              Built with deterministic AI and transparent calculations. Integrated with your existing stack. Scalable across your entire advisor network. The decision-support infrastructure that transforms RIA platforms into efficiency and growth engines.
            </p>

            <Card className='bg-amber-50 border-l-4 border-[var(--color-warning)] text-left'>
              <p className='text-xs text-[var(--color-text-secondary)]'>
                <span className='font-semibold'>Legal Disclaimer:</span> VelocityIQ provides decision-support tools, analysis frameworks, and documentation capabilities. VelocityIQ does not make suitability determinations, provide investment advice, or guarantee regulatory outcomes. Advisors are solely responsible for all suitability determinations, investment recommendations, and compliance with applicable regulations. Platforms maintain all supervisory and compliance responsibilities. Use of VelocityIQ tools does not ensure regulatory compliance or eliminate advisor or platform liability.
              </p>
            </Card>

            <div className='mt-8 space-y-2 text-[var(--color-text-secondary)]'>
              <p className='flex items-center justify-center gap-2'>
                <Mail className='w-5 h-5' />
                <span>Questions? Email: </span>
                <a
                  href='mailto:admin@getvelocityiq.com'
                  className='underline hover:opacity-80 transition-opacity'
                >
                  admin@getvelocityiq.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
