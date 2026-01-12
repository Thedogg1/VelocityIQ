import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import type { Metadata } from 'next';
import {
  Clock,
  CheckCircle,
  FileText,
  Zap,
  Users,
  Eye,
  AlertTriangle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How VelocityIQ Works: 5-Phase Analysis Process for Advisors',
  description:
    'From client data to advisor-reviewed insights: systematic analysis process supporting professional judgment at every step with complete documentation.',
  keywords: [
    'advisor workflow',
    'analysis process',
    'suitability process',
    'compliance workflow',
    'client onboarding',
    'advisor tools process',
    'systematic analysis methodology',
  ],
  openGraph: {
    title: 'How VelocityIQ Works - 5-Phase Analysis Process',
    description:
      'Systematic analysis process supporting advisor professional judgment',
    type: 'website',
    url: 'https://getvelocityiq.com/how-it-works',
    images: [{ url: '/images/five-phase-process-advisor-control.jpg' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How VelocityIQ Works - 5-Phase Analysis Process',
    description:
      'Systematic analysis process supporting advisor professional judgment',
    images: ['/images/five-phase-process-advisor-control.jpg'],
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/how-it-works',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HowItWorksPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl font-bold text-[var(--color-text-primary)] mb-6'>
                The Analysis Process: From Client Data to Advisor-Reviewed
                Insights
              </h1>
              <p className='text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed'>
                VelocityIQ&apos;s systematic analysis process structures client
                information, generates evaluation frameworks, and provides
                comprehensive documentation—all designed to support your
                professional judgment at every step.
              </p>
              <div className='bg-amber-50 p-6 rounded-lg border-l-4 border-[var(--color-warning)]'>
                <p className='font-semibold mb-2'>Legal Notice:</p>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  Process generates analysis tools and frameworks. Advisors
                  review all system output, apply professional judgment, and
                  make all determinations and recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Five-Phase Process */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              The Five-Phase Process
            </h2>

            {/* Executive Summary */}
            <div className='max-w-4xl mx-auto mb-12'>
              <Card className='bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-[var(--color-primary)]'>
                <h3 className='text-2xl font-bold mb-4'>
                  Executive Summary: How VelocityIQ Works
                </h3>
                <div className='space-y-4 text-[var(--color-text-secondary)]'>
                  <p className='font-semibold'>
                    VelocityIQ transforms client onboarding and analysis into a
                    systematic, documented process that supports your
                    professional judgment—not replaces it.
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <h4 className='font-semibold mb-2 text-[var(--color-text-primary)]'>
                        The Process:
                      </h4>
                      <ol className='space-y-2 text-sm list-decimal list-inside'>
                        <li>
                          <strong>Data Collection:</strong> Structured profile
                          capture (30-45 min)
                        </li>
                        <li>
                          <strong>Analysis Generation:</strong> Automated
                          framework evaluation (2-3 min)
                        </li>
                        <li>
                          <strong>Advisor Review:</strong> Your professional
                          judgment applied (15-30 min)
                        </li>
                        <li>
                          <strong>Client Discussion:</strong> Strategy
                          presentation and decisions (45-60 min)
                        </li>
                        <li>
                          <strong>Implementation:</strong> Ongoing monitoring
                          and relationship management
                        </li>
                      </ol>
                    </div>
                    <div>
                      <h4 className='font-semibold mb-2 text-[var(--color-text-primary)]'>
                        What You Get:
                      </h4>
                      <ul className='space-y-2 text-sm'>
                        <li className='flex items-start gap-2'>
                          <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                          <span>
                            Systematic frameworks for suitability and risk
                            evaluation
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                          <span>
                            Complete documentation trail for compliance
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                          <span>
                            Transparent calculations with verifiable formulas
                          </span>
                        </li>
                        <li className='flex items-start gap-2'>
                          <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                          <span>
                            Support for real-time scenario exploration in
                            meetings
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='bg-white p-4 rounded border border-[var(--color-border-subtle)]'>
                    <p className='text-sm font-semibold mb-2'>
                      Critical Understanding:
                    </p>
                    <p className='text-xs'>
                      The system generates analysis tools and frameworks. You
                      review all output, apply professional judgment, make all
                      determinations, and take full responsibility for
                      recommendations and client advice.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Phase 1 */}
            <Card className='mb-8'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0'>
                  1
                </div>
                <div className='flex-1'>
                  <h3 className='text-3xl font-semibold mb-4'>
                    Phase 1: Client Profile Data Collection
                  </h3>
                  <div className='mb-6'>
                    <p className='font-semibold mb-3'>What Happens:</p>
                    <p className='text-[var(--color-text-secondary)] mb-3'>
                      Structured questionnaire captures:
                    </p>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>
                        • All nine FINRA-required investment profile factors
                      </li>
                      <li>• Business and financial situation details</li>
                      <li>• Tax information and objectives</li>
                      <li>• Risk tolerance and experience</li>
                      <li>• Time horizon and liquidity needs</li>
                      <li>• Additional relevant client information</li>
                    </ul>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-blue-50 p-4 rounded'>
                      <p className='font-semibold mb-2 text-sm'>System Role:</p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>→ Provides structured data collection framework</li>
                        <li>→ Ensures all required factors captured</li>
                        <li>→ Validates data quality during entry</li>
                        <li>→ Flags logical inconsistencies for review</li>
                      </ul>
                    </div>
                    <div className='bg-green-50 p-4 rounded'>
                      <p className='font-semibold mb-2 text-sm'>Your Role:</p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>
                          → Gather information from client through reasonable
                          diligence
                        </li>
                        <li>→ Enter accurate data into system</li>
                        <li>→ Verify accuracy and completeness</li>
                        <li>
                          → Determine what additional information is relevant
                        </li>
                        <li>→ Take responsibility for data quality</li>
                      </ul>
                    </div>
                  </div>
                  <div className='mt-4 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]'>
                    <Clock className='w-5 h-5' />
                    <span className='font-semibold'>Time:</span>
                    <span>30-45 minutes for comprehensive profile</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card className='mb-8'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0'>
                  2
                </div>
                <div className='flex-1'>
                  <h3 className='text-3xl font-semibold mb-4'>
                    Phase 2: Analysis Generation
                  </h3>
                  <div className='mb-6'>
                    <p className='font-semibold mb-3'>What Happens:</p>
                    <p className='text-[var(--color-text-secondary)] mb-3'>
                      System processes client data through:
                    </p>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>
                        • Suitability analysis framework (three-prong
                        evaluation)
                      </li>
                      <li>
                        • Risk identification rules (73 validation checks)
                      </li>
                      <li>• AML risk assessment framework (if enabled)</li>
                      <li>• Calculation engines (with transparent formulas)</li>
                      <li>
                        • Intelligence integration (knowledge base + live data)
                      </li>
                    </ul>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-blue-50 p-4 rounded'>
                      <p className='font-semibold mb-2 text-sm'>System Role:</p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>→ Structures data around evaluation frameworks</li>
                        <li>→ Applies deterministic rules systematically</li>
                        <li>→ Generates analysis output</li>
                        <li>→ Creates documentation for your review</li>
                      </ul>
                    </div>
                    <div className='bg-green-50 p-4 rounded'>
                      <p className='font-semibold mb-2 text-sm'>Your Role:</p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>→ Await analysis generation</li>
                        <li>→ System works autonomously during this phase</li>
                      </ul>
                    </div>
                  </div>
                  <div className='mt-4 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]'>
                    <Clock className='w-5 h-5' />
                    <span className='font-semibold'>Time:</span>
                    <span>2-3 minutes for complete analysis generation</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card className='mb-8'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0'>
                  3
                </div>
                <div className='flex-1'>
                  <h3 className='text-3xl font-semibold mb-4'>
                    Phase 3: Advisor Review and Professional Judgment
                  </h3>
                  <div className='mb-6'>
                    <Image
                      src='/images/supervisor-reviewing-advisor-work.png'
                      alt='Senior compliance officer reviewing advisor work alongside system analysis'
                      width={1000}
                      height={600}
                      className='rounded-xl shadow-lg mx-auto mb-6'
                    />
                  </div>
                  <div className='mb-6'>
                    <p className='font-semibold mb-3'>What Happens:</p>
                    <p className='text-[var(--color-text-secondary)] mb-3'>
                      You receive comprehensive analysis output:
                    </p>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>• Suitability analysis framework results</li>
                      <li>• Risk identification analysis</li>
                      <li>• AML risk assessment (if applicable)</li>
                      <li>• Supporting documentation and rationale</li>
                      <li>• Considerations and factors to review</li>
                    </ul>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div className='bg-blue-50 p-4 rounded'>
                      <p className='font-semibold mb-2 text-sm'>System Role:</p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>→ Presents analysis in organized format</li>
                        <li>→ Highlights key considerations</li>
                        <li>→ Provides documentation for your file</li>
                      </ul>
                    </div>
                    <div className='bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)]'>
                      <p className='font-semibold mb-2 text-sm'>
                        Your Role (CRITICAL PHASE):
                      </p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>
                          → Review ALL system-generated analysis thoroughly
                        </li>
                        <li>→ Verify accuracy of data and analysis</li>
                        <li>
                          → Consider factors unique to this client not captured
                          by system
                        </li>
                        <li>
                          → Apply your professional judgment and expertise
                        </li>
                        <li>
                          → Assess whether analysis appropriately reflects
                          client situation
                        </li>
                        <li>
                          → Determine areas requiring additional investigation
                        </li>
                        <li>
                          → Make all determinations (suitability, risk
                          assessment, etc.)
                        </li>
                        <li>→ Decide on appropriate recommendations</li>
                        <li>
                          → Take full responsibility for your determinations
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='mt-4 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]'>
                    <Clock className='w-5 h-5' />
                    <span className='font-semibold'>Time:</span>
                    <span>15-30 minutes for thorough professional review</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 4 */}
            <Card className='mb-8'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0'>
                  4
                </div>
                <div className='flex-1'>
                  <h3 className='text-3xl font-semibold mb-4'>
                    Phase 4: Client Discussion and Documentation
                  </h3>
                  <div className='mb-6'>
                    <p className='font-semibold mb-3'>What Happens:</p>
                    <p className='text-[var(--color-text-secondary)] mb-3'>
                      You discuss strategy with client based on your
                      determinations:
                    </p>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>
                        • Present your recommendations (informed by analysis)
                      </li>
                      <li>
                        • Discuss relevant risks you&apos;ve identified as
                        material
                      </li>
                      <li>• Answer client questions</li>
                      <li>• Ensure client understanding</li>
                      <li>• Obtain client decisions</li>
                    </ul>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-blue-50 p-4 rounded'>
                      <p className='font-semibold mb-2 text-sm'>System Role:</p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>
                          → Provides analysis documentation you can reference
                        </li>
                        <li>
                          → Supports your client discussion with systematic
                          framework
                        </li>
                        <li>
                          → Generates client-appropriate report (based on your
                          determinations)
                        </li>
                      </ul>
                    </div>
                    <div className='bg-green-50 p-4 rounded'>
                      <p className='font-semibold mb-2 text-sm'>Your Role:</p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>
                          → Present strategies and recommendations to client
                        </li>
                        <li>
                          → Frame risks appropriately for client understanding
                        </li>
                        <li>→ Discuss considerations and alternatives</li>
                        <li>→ Ensure informed client decision-making</li>
                        <li>→ Document client discussion and decisions</li>
                        <li>
                          → Take responsibility for all client communications
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='mt-4 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]'>
                    <Clock className='w-5 h-5' />
                    <span className='font-semibold'>Time:</span>
                    <span>45-60 minutes for client meeting</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 5 */}
            <Card className='mb-8'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0'>
                  5
                </div>
                <div className='flex-1'>
                  <h3 className='text-3xl font-semibold mb-4'>
                    Phase 5: Implementation and Ongoing Monitoring
                  </h3>
                  <div className='mb-6'>
                    <p className='font-semibold mb-3'>What Happens:</p>
                    <p className='text-[var(--color-text-secondary)] mb-3'>
                      You implement strategy based on client decision:
                    </p>
                    <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                      <li>• Execute agreed-upon strategy</li>
                      <li>• Implement risk mitigation measures</li>
                      <li>• Establish monitoring approach</li>
                      <li>• Schedule follow-up reviews</li>
                    </ul>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-blue-50 p-4 rounded'>
                      <p className='font-semibold mb-2 text-sm'>System Role:</p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>
                          → Maintains documentation of analysis and
                          determinations
                        </li>
                        <li>→ Supports periodic re-analysis</li>
                        <li>→ Enables ongoing monitoring framework</li>
                      </ul>
                    </div>
                    <div className='bg-green-50 p-4 rounded'>
                      <p className='font-semibold mb-2 text-sm'>Your Role:</p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>→ Implement client&apos;s chosen strategy</li>
                        <li>→ Monitor implementation progress</li>
                        <li>→ Conduct ongoing monitoring of risks</li>
                        <li>→ Perform periodic reviews and re-assessments</li>
                        <li>→ Adjust strategy as circumstances change</li>
                        <li>→ Maintain documentation of ongoing service</li>
                        <li>
                          → Take responsibility for ongoing client relationship
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='mt-4 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]'>
                    <Clock className='w-5 h-5' />
                    <span className='font-semibold'>Time:</span>
                    <span>Ongoing throughout client relationship</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Optional: In-Meeting Scenario Analysis */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Real-Time Scenario Exploration During Client Meetings
            </h2>
            <div className='max-w-4xl mx-auto'>
              <Card className='mb-8'>
                <div className='mb-6'>
                  <p className='font-semibold mb-3'>When to Use:</p>
                  <p className='text-[var(--color-text-secondary)]'>
                    During client meetings when exploring alternative strategies
                    or answering specific client questions about different
                    approaches.
                  </p>
                </div>
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 1: Client Question
                    </h4>
                    <p className='text-sm text-[var(--color-text-secondary)] italic'>
                      Client asks: &quot;What if I exercised half my ISOs now
                      and half next year?&quot;
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 2: Rapid Scenario Generation
                    </h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li>→ You input scenario parameters</li>
                      <li>→ System generates analysis in 40 seconds</li>
                      <li>
                        → Analysis maintains full framework (suitability, risk
                        identification)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 3: You Review and Present
                    </h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li>→ You quickly review scenario analysis</li>
                      <li>
                        → You apply judgment about scenario appropriateness
                      </li>
                      <li>
                        → You present scenario to client with your assessment
                      </li>
                      <li>
                        → You discuss implications based on your professional
                        judgment
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 4: Client Decision
                    </h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li>→ Client explores up to 8 scenarios per meeting</li>
                      <li>→ You guide client through pros/cons of each</li>
                      <li>→ Client makes informed decision</li>
                      <li>→ You document discussion and decision</li>
                    </ul>
                  </div>
                </div>
                <div className='mt-6 bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)]'>
                  <p className='font-semibold mb-2 text-sm'>
                    Your Responsibility:
                  </p>
                  <p className='text-xs text-[var(--color-text-secondary)] mb-2'>
                    Even with rapid scenario generation:
                  </p>
                  <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                    <li>→ You must review each scenario analysis</li>
                    <li>→ You determine if scenario is appropriate</li>
                    <li>→ You make recommendations based on your judgment</li>
                    <li>→ You take responsibility for scenarios presented</li>
                    <li>→ You document client discussion and decisions</li>
                  </ul>
                </div>
                <div className='mt-4 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]'>
                  <Clock className='w-5 h-5' />
                  <span className='font-semibold'>Time:</span>
                  <span>
                    40 seconds per scenario generation + your review time
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Documentation Trail */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              What Gets Documented and Your Documentation Responsibilities
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    System Documentation:
                  </h3>
                  <p className='text-sm font-semibold mb-2'>
                    Automatically maintains record of:
                  </p>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Client profile data captured</li>
                    <li>→ Analysis frameworks applied</li>
                    <li>→ Rules evaluated and results</li>
                    <li>→ Calculations performed with formulas</li>
                    <li>→ Sources cited</li>
                    <li>→ Timestamp and version control</li>
                  </ul>
                </Card>

                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    Your Required Documentation:
                  </h3>
                  <p className='text-sm font-semibold mb-2'>
                    You must document:
                  </p>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Your review of system analysis</li>
                    <li>→ Additional factors you considered</li>
                    <li>→ Your professional judgments applied</li>
                    <li>
                      → Your determinations (suitability, risk assessment, etc.)
                    </li>
                    <li>→ Client discussions and decisions</li>
                    <li>→ Recommendations provided</li>
                    <li>→ Ongoing monitoring activities</li>
                    <li>→ Follow-up actions taken</li>
                  </ul>
                </Card>
              </div>

              <Card className='bg-blue-50 mb-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Combined Documentation Value:
                </h3>
                <p className='text-sm text-[var(--color-text-secondary)] mb-3'>
                  System documentation + Your documentation = Complete record
                  showing:
                </p>
                <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                  <li>• Systematic methodology was used</li>
                  <li>• Professional judgment was applied</li>
                  <li>• Determinations were made by advisor</li>
                  <li>• Client was informed and involved</li>
                  <li>• Ongoing monitoring maintained</li>
                </ul>
              </Card>

              <Card className='bg-amber-50 border-l-4 border-[var(--color-warning)]'>
                <p className='font-semibold mb-2'>Critical Point:</p>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  System documentation supports but does not replace your
                  required documentation of professional judgments, client
                  interactions, and determinations.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Positioning */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Understanding the Process and Your Role
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    What the Process Provides:
                  </h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Structured data collection framework</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Systematic analysis generation</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Evaluation frameworks and tools</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Documentation infrastructure</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Support for your professional practice</span>
                    </li>
                  </ul>
                </Card>

                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    What the Process Does NOT Do:
                  </h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <AlertTriangle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Make determinations on your behalf</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <AlertTriangle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Provide investment advice or recommendations</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <AlertTriangle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Eliminate need for professional review</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <AlertTriangle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Replace your professional judgment</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <AlertTriangle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Reduce your professional responsibilities</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <AlertTriangle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Guarantee accuracy or appropriateness</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <AlertTriangle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Ensure regulatory compliance</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className='bg-blue-50 mb-8'>
                <h3 className='text-xl font-semibold mb-4'>
                  Your Responsibilities Throughout Process:
                </h3>
                <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                  <li>
                    <span className='font-semibold'>Phase 1:</span> Obtain
                    accurate client information through reasonable diligence
                  </li>
                  <li>
                    <span className='font-semibold'>Phase 2:</span> (System
                    processes - no advisor action required)
                  </li>
                  <li>
                    <span className='font-semibold'>Phase 3:</span> Review all
                    analysis, apply judgment, make all determinations
                  </li>
                  <li>
                    <span className='font-semibold'>Phase 4:</span> Communicate
                    with clients, ensure understanding, document discussions
                  </li>
                  <li>
                    <span className='font-semibold'>Phase 5:</span> Implement,
                    monitor, and maintain ongoing client relationship
                  </li>
                </ul>
                <p className='text-sm text-[var(--color-text-secondary)] mt-4'>
                  At every phase where advisor action is required, you are fully
                  responsible for professional quality, accuracy,
                  appropriateness, and compliance.
                </p>
              </Card>

              <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
                <h3 className='text-xl font-semibold mb-4'>
                  Legal Disclaimer:
                </h3>
                <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                  The analysis process generates decision-support tools.
                  Advisors must review all system output, apply independent
                  professional judgment, make all determinations, and take full
                  responsibility for recommendations and client advice.
                </p>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  System participation in process does not reduce advisor
                  responsibility, guarantee outcomes, or ensure compliance.
                  Advisors remain solely liable for all professional activities
                  regardless of system usage.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-[var(--color-primary)]'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold mb-4 !text-white'>
              Systematic Process Supporting Professional Advisory Practice
            </h2>
            <p className='text-xl mb-12 text-white'>
              See how VelocityIQ&apos;s five-phase process structures client
              information and generates comprehensive analysis—all designed to
              support your professional judgment and documentation requirements
              at every step.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center mb-8'>
              <Button
                href='/demo'
                variant='secondary'
                className='bg-white text-[var(--color-primary)] hover:bg-blue-50'
              >
                Watch Process Demo
              </Button>
              <Button
                href='/book'
                variant='secondary'
                className='bg-white text-[var(--color-primary)] hover:bg-blue-50'
              >
                Apply for January Pilot
              </Button>
            </div>
            <p className='text-white text-sm'>
              Process generates analysis. Advisors review, determine, and take
              responsibility for all recommendations.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
