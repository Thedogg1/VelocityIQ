import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { OpenExternalButton } from '@/components/OpenExternalButton';
import type { Metadata } from 'next';
import {
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  XCircle,
  FileText,
  AlertTriangle,
  Play,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Powered FINRA 2111 Suitability Assessment: From Natural Language to Audit-Ready Documentation | VelocityIQ',
  description: 'Transform how your advisors document strategy recommendations. Natural language input, intelligent AI classification, and automated three-prong analysis deliver complete FINRA-compliant documentation in minutes—not hours. Scalable across your entire platform with consistent methodology, transparent calculations, and complete audit trails.',
  keywords: ['AI-powered suitability assessment', 'FINRA Rule 2111', 'natural language input', 'automated suitability analysis', 'platform scalability', 'compliance documentation', 'advisor productivity'],
  openGraph: {
    title: 'AI-Powered FINRA 2111 Suitability Assessment',
    description: 'Natural language input to audit-ready documentation in minutes. Scalable across your entire platform.',
    type: 'website',
    url: 'https://getvelocityiq.com/suitability',
    images: [{ url: '/images/three-prong-framework-advisor-decides.v2.png' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered FINRA 2111 Suitability Assessment',
    description: 'Natural language input to audit-ready documentation in minutes. Scalable across your entire platform.',
    images: ['/images/three-prong-framework-advisor-decides.v2.png'],
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/suitability',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SuitabilityAnalysisPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h1 className='text-5xl font-bold text-[var(--color-text-primary)] mb-6'>
                  AI-Powered FINRA 2111 Suitability Assessment: From Natural Language to Audit-Ready Documentation
                </h1>
                <p className='text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed'>
                  Transform how your advisors document strategy recommendations. Natural language input, intelligent AI classification, and automated three-prong analysis deliver complete FINRA-compliant documentation in minutes—not hours. Scalable across your entire platform with consistent methodology, transparent calculations, and complete audit trails. Advisors maintain full professional responsibility while productivity soars.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                  <Button href='/system-demo' variant='primary' className='flex items-center gap-2'>
                    <Play className='w-5 h-5' />
                    Watch Assessment Demo
                  </Button>
                  <Button href='#sample-output' variant='secondary'>
                    See Sample Output
                  </Button>
                </div>
                <div className='bg-red-50 p-6 rounded-lg border-l-4 border-[var(--color-critical)]'>
                  <p className='font-semibold mb-2 text-[var(--color-critical)]'>IMPORTANT:</p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    VelocityIQ provides analysis tools and evaluation frameworks to support advisor decision-making. The system analyses strategies and generates documentation, but does NOT make suitability determinations. Advisors must review system analysis, apply professional judgment, and make their own suitability determinations. Advisors are solely responsible for all determinations and recommendations to clients.
                  </p>
                </div>
              </div>
              <div className='relative'>
                <Image
                  src='/images/hero-advisor-suitability-judgment.png'
                  alt='Professional advisor reviewing AI-powered suitability assessment and making professional determination'
                  width={800}
                  height={600}
                  className='rounded-xl shadow-2xl'
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* What FINRA Rule 2111 Requires of Advisors */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              The Advisor&apos;s Regulatory Obligation
            </h2>
            <div className='max-w-4xl mx-auto'>
              <Card className='mb-8'>
                <h3 className='text-2xl font-semibold mb-4'>The Rule:</h3>
                <p className='text-lg text-[var(--color-text-secondary)] mb-6'>
                  FINRA Rule 2111 requires that advisors have a reasonable basis
                  to believe that a recommended transaction or investment
                  strategy is suitable for the customer, based on information
                  obtained through reasonable diligence about the
                  customer&apos;s investment profile.
                </p>
                <div className='mb-6'>
                  <p className='font-semibold mb-3'>Key Points:</p>
                  <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                    <li>• The ADVISOR must have reasonable basis</li>
                    <li>
                      • The ADVISOR must obtain information through reasonable
                      diligence
                    </li>
                    <li>
                      • The ADVISOR must make the suitability determination
                    </li>
                    <li>
                      • Burden of proof is on the ADVISOR to demonstrate
                      reasonable basis
                    </li>
                  </ul>
                </div>
                <div className='mb-6'>
                  <h4 className='font-semibold mb-3'>The Documentation Challenge:</h4>
                  <p className='text-[var(--color-text-secondary)] mb-4'>
                    Traditional approach requires advisors to:
                  </p>
                  <ul className='space-y-2 text-[var(--color-text-secondary)] mb-4'>
                    <li>• Manually evaluate all investment profile factors</li>
                    <li>• Document consideration of each FINRA-required element</li>
                    <li>• Apply three-prong suitability framework</li>
                    <li>• Create defensible audit trail</li>
                    <li>• Maintain consistency across all clients</li>
                    <li>• Complete documentation that withstands regulatory scrutiny</li>
                  </ul>
                  <p className='font-semibold text-[var(--color-text-secondary)] mb-2'>
                    Time Required: 2-5 hours per complex strategy recommendation
                  </p>
                </div>
                <div className='bg-green-50 p-4 rounded-lg border-l-4 border-[var(--color-success)]'>
                  <h4 className='font-semibold mb-3'>The VelocityIQ Solution:</h4>
                  <p className='text-[var(--color-text-secondary)] mb-4'>
                    AI-powered assessment that:
                  </p>
                  <ul className='space-y-2 text-[var(--color-text-secondary)] mb-4'>
                    <li>• Automates framework application</li>
                    <li>• Generates complete documentation</li>
                    <li>• Ensures consistent methodology</li>
                    <li>• Creates transparent audit trail</li>
                    <li>• Maintains advisor control and responsibility</li>
                  </ul>
                  <p className='font-semibold text-[var(--color-success)]'>
                    Time Required: 5-15 minutes per assessment (80-90% reduction)
                  </p>
                </div>
                <div className='bg-blue-50 p-4 rounded mb-4'>
                  <p className='font-semibold mb-3'>
                    Investment Profile - Factors Advisors Must Consider:
                  </p>
                  <ol className='space-y-1 text-sm text-[var(--color-text-secondary)] list-decimal list-inside'>
                    <li>Age</li>
                    <li>Other investments and current holdings</li>
                    <li>Financial situation and needs</li>
                    <li>Tax status</li>
                    <li>Investment objectives</li>
                    <li>Investment experience</li>
                    <li>Time horizon</li>
                    <li>Liquidity needs</li>
                    <li>Risk tolerance</li>
                    <li>Any other relevant information disclosed</li>
                  </ol>
                </div>
                <div className='bg-green-50 p-4 rounded'>
                  <p className='font-semibold mb-3'>
                    Three Evaluation Components:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-2'>
                    FINRA guidance explains that advisors should consider three
                    components:
                  </p>
                  <ol className='space-y-1 text-sm text-[var(--color-text-secondary)] list-decimal list-inside'>
                    <li>
                      Reasonable-basis suitability (product-level evaluation)
                    </li>
                    <li>
                      Customer-specific suitability (client profile alignment)
                    </li>
                    <li>
                      Quantitative suitability (transaction pattern
                      reasonableness)
                    </li>
                  </ol>
                  <div className='mt-4 pt-4 border-t border-[var(--color-border-subtle)]'>
                    <p className='font-semibold mb-2'>
                      How VelocityIQ Supports This:
                    </p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li>
                        • We provide analysis tools that help you evaluate each
                        component systematically.
                      </li>
                      <li>
                        • We structure investment profile data around
                        FINRA&apos;s required factors.
                      </li>
                      <li>
                        • We document your analysis process for regulatory
                        review.
                      </li>
                    </ul>
                    <p className='mt-3 font-semibold text-sm'>
                      You apply professional judgment to the analysis. You make
                      the final suitability determination. You take
                      responsibility for your recommendations.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How the AI-Powered Assessment Works */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Four Steps from Strategy Description to Complete Documentation
            </h2>
            <p className='text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto'>
              VelocityIQ&apos;s AI-powered assessment transforms suitability documentation from hours of manual work to minutes of automated analysis—while maintaining advisor control and professional responsibility.
            </p>

            <div className='mb-12'>
              <Image
                src='/images/three-prong-framework-advisor-decides.v2.png'
                alt='Four-step AI-powered suitability assessment process flowchart'
                width={1200}
                height={600}
                className='rounded-xl shadow-lg mx-auto'
              />
            </div>

            {/* Step 1: Natural Language Strategy Input */}
            <Card className='mb-8 border-2 border-[var(--color-primary)]'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='bg-[var(--color-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0'>
                  <span className='text-2xl font-bold'>1</span>
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-[var(--color-text-primary)]'>
                    Natural Language Strategy Input
                  </h3>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='text-xl font-semibold mb-4'>What Makes This Different:</h4>
                  <div className='mb-4'>
                    <p className='font-semibold mb-2 text-sm'>Traditional systems require:</p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Complex forms with dozens of fields</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Product codes and classification systems</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Manual calculations and data entry</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Rigid category selections</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-semibold mb-2 text-sm'>VelocityIQ accepts natural language:</p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>&quot;Post-exit portfolio: low-volatility, cash-flow-focused allocation to support lifestyle and legacy&quot;</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>&quot;Sell the business and build an income portfolio&quot;</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                        <span>&quot;Execute QSBS-optimised exit with post-liquidity diversification&quot;</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='bg-blue-50 p-4 rounded-lg'>
                  <p className='font-semibold mb-2'>Platform Benefit:</p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    Eliminates training overhead on complex classification systems. Advisors can describe strategies naturally without learning proprietary coding schemes.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 2: AI Classification with Advisor Review */}
            <Card className='mb-8 border-2 border-[var(--color-primary)]'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='bg-[var(--color-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0'>
                  <span className='text-2xl font-bold'>2</span>
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-[var(--color-text-primary)]'>
                    AI Classification & Advisor Review
                  </h3>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='text-xl font-semibold mb-4'>What the AI Does:</h4>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    The system analyses the strategy description alongside the client&apos;s investment profile and automatically classifies:
                  </p>
                  <div className='space-y-3'>
                    <div>
                      <p className='font-semibold mb-1 text-sm'>1. Risk Level Classification</p>
                      <ul className='text-xs text-[var(--color-text-secondary)] ml-4'>
                        <li>• Low Risk: Capital preservation, stable income</li>
                        <li>• Medium Risk: Balanced growth/income</li>
                        <li>• High Risk: Aggressive growth, concentration, leverage</li>
                      </ul>
                    </div>
                    <div>
                      <p className='font-semibold mb-1 text-sm'>2. Strategy Type Identification</p>
                      <ul className='text-xs text-[var(--color-text-secondary)] ml-4'>
                        <li>• Liquidity Event: Business sale, inheritance</li>
                        <li>• Portfolio Restructuring: Reallocation, diversification</li>
                        <li>• Ongoing Management: Regular investment</li>
                      </ul>
                    </div>
                    <div>
                      <p className='font-semibold mb-1 text-sm'>3. Time Horizon Assessment</p>
                      <ul className='text-xs text-[var(--color-text-secondary)] ml-4'>
                        <li>• Short-term: 0-3 years</li>
                        <li>• Medium-term: 3-10 years</li>
                        <li>• Long-term: 10+ years</li>
                      </ul>
                    </div>
                    <div>
                      <p className='font-semibold mb-1 text-sm'>4. Experience Level Required</p>
                      <ul className='text-xs text-[var(--color-text-secondary)] ml-4'>
                        <li>• Basic: Plain-vanilla investments</li>
                        <li>• Intermediate: Some complexity</li>
                        <li>• Advanced: Sophisticated strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='bg-green-50 p-4 rounded-lg'>
                  <p className='font-semibold mb-2'>Advisor Control:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>• Review each AI classification</li>
                    <li>• See rationale for AI&apos;s determination</li>
                    <li>• Modify any classification as needed</li>
                    <li>• Proceed when satisfied with categorization</li>
                  </ul>
                  <p className='mt-4 text-sm text-[var(--color-text-secondary)]'>
                    <span className='font-semibold'>Why This Matters:</span> Advisor maintains professional judgment while benefiting from AI assistance. AI handles initial categorization (saves time). Advisor verifies appropriateness (maintains control).
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 3: Automated Three-Prong Suitability Analysis */}
            <div className='mb-8'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='bg-[var(--color-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0'>
                  <span className='text-2xl font-bold'>3</span>
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-[var(--color-text-primary)]'>
                    Automated Three-Prong Suitability Analysis
                  </h3>
                  <p className='text-lg text-[var(--color-text-secondary)] mt-2'>
                    Comprehensive FINRA Framework Evaluation with Transparent Scoring
                  </p>
                </div>
              </div>
              <p className='text-[var(--color-text-secondary)] mb-6 max-w-3xl'>
                Using the AI classifications and client investment profile, the system automatically evaluates the strategy against FINRA&apos;s three-prong framework, generating quantified scores with factual basis for each indicator.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
              {/* Framework Component 1: Reasonable-Basis Analysis */}
              <Card hover>
                <Shield className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h3 className='text-2xl font-semibold mb-4'>
                  Framework Component 1: Reasonable-Basis Analysis
                </h3>
                <div className='mb-4'>
                  <p className='font-semibold mb-2'>
                    The Evaluation Question Advisors Must Answer:
                  </p>
                  <p className='text-[var(--color-text-secondary)] mb-4'>
                    Is this product or strategy appropriate for at least some
                    investors?
                  </p>
                  <p className='font-semibold mb-2'>
                    What FINRA Requires Advisors Understand:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    Product risks, characteristics, complexity, liquidity,
                    costs, leverage, and structure before recommending to any
                    client.
                  </p>
                </div>
                <div className='mb-4'>
                  <p className='font-semibold mb-2 text-sm'>
                    Analysis Tools VelocityIQ Provides:
                  </p>
                  <p className='text-sm font-semibold mb-2'>
                    System analyzes and presents:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] mb-4'>
                    <li>• Complexity classification</li>
                    <li>• Liquidity characteristics</li>
                    <li>• Leverage usage</li>
                    <li>• Risk and volatility profile</li>
                    <li>• Fee and expense structure</li>
                    <li>• Due diligence requirements</li>
                  </ul>
                  <p className='text-sm font-semibold mb-2 mt-4'>
                    Output format:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] mb-4'>
                    <li>→ Product characteristic summary</li>
                    <li>→ Complexity assessment</li>
                    <li>→ Risk factor identification</li>
                    <li>→ Considerations for advisor review</li>
                  </ul>
                </div>
                <div className='mb-4 bg-gray-50 p-4 rounded border-l-4 border-[var(--color-primary)]'>
                  <p className='font-semibold mb-2 text-sm'>
                    Example Analysis Output:
                  </p>
                  <p className='text-sm font-semibold mb-2'>
                    Strategy: QSBS-eligible business exit with diversification
                  </p>
                  <p className='text-sm font-semibold mb-2'>
                    Reasonable-Basis Analysis Provided:
                  </p>
                  <ul className='space-y-1 text-xs text-[var(--color-text-secondary)] mb-3'>
                    <li>
                      → Complexity: Moderate (QSBS rules, standard
                      diversification)
                    </li>
                    <li>
                      → Liquidity: Improved post-exit (liquid securities vs.
                      private business)
                    </li>
                    <li>→ Leverage: None</li>
                    <li>→ Risk Level: Moderate (diversified portfolio)</li>
                    <li>→ Fees: Standard advisory fees</li>
                    <li>
                      → Considerations: Ensure understanding of QSBS rules, tax
                      implications, diversification benefits
                    </li>
                  </ul>
                  <div className='bg-amber-50 p-3 rounded mt-3'>
                    <p className='font-semibold mb-2 text-xs'>
                      ADVISOR ACTION REQUIRED:
                    </p>
                    <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                      <li>→ Review analysis</li>
                      <li>→ Confirm due diligence adequate</li>
                      <li>
                        → Determine if strategy appropriate for any investors
                      </li>
                      <li>→ Document your determination</li>
                    </ul>
                  </div>
                </div>
                <div className='bg-blue-50 p-4 rounded'>
                  <p className='font-semibold mb-2 text-sm'>
                    How You Use This:
                  </p>
                  <ol className='space-y-1 text-xs text-[var(--color-text-secondary)] list-decimal list-inside'>
                    <li>Review system analysis of product characteristics</li>
                    <li>Confirm due diligence is adequate for your needs</li>
                    <li>
                      Consider whether strategy is appropriate for any clients
                    </li>
                    <li>Apply your professional judgment</li>
                    <li>Document your reasonable-basis determination</li>
                  </ol>
                  <p className='mt-3 text-xs font-semibold text-[var(--color-primary)]'>
                    Critical Note: System provides analysis. You make
                    determination. You document conclusion.
                  </p>
                </div>
              </Card>

              {/* Framework Component 2: Customer-Specific Analysis */}
              <Card hover>
                <Users className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h3 className='text-2xl font-semibold mb-4'>
                  Framework Component 2: Customer-Specific Analysis
                </h3>
                <div className='mb-4'>
                  <p className='font-semibold mb-2'>
                    The Evaluation Question Advisors Must Answer:
                  </p>
                  <p className='text-[var(--color-text-secondary)] mb-4'>
                    Is this strategy appropriate for THIS specific client&apos;s
                    investment profile?
                  </p>
                  <p className='font-semibold mb-2'>
                    What FINRA Requires Advisors Consider:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    All nine investment profile factors plus any other relevant
                    client information.
                  </p>
                </div>
                <div className='mb-4'>
                  <p className='font-semibold mb-2 text-sm'>
                    Analysis Tools VelocityIQ Provides:
                  </p>
                  <p className='text-sm font-semibold mb-2'>
                    System structures client profile data and provides
                    comparison framework:
                  </p>
                  <p className='text-sm font-semibold mb-2'>
                    Investment Profile Captured:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] mb-4'>
                    <li>
                      • All 9 FINRA-required factors systematically documented
                    </li>
                    <li>• Client-specific information organized</li>
                  </ul>
                  <p className='text-sm font-semibold mb-2'>
                    Alignment Analysis Provided:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] mb-4'>
                    <li>→ Risk tolerance vs. strategy risk assessment</li>
                    <li>→ Liquidity needs vs. strategy liquidity analysis</li>
                    <li>
                      → Experience level vs. strategy complexity comparison
                    </li>
                    <li>→ Time horizon vs. strategy timeline alignment</li>
                    <li>→ Concentration implications evaluated</li>
                  </ul>
                  <p className='text-sm font-semibold mb-2'>Output format:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] mb-4'>
                    <li>→ Profile-to-strategy comparison</li>
                    <li>→ Alignment factors and concerns identified</li>
                    <li>→ Considerations for advisor judgment</li>
                  </ul>
                </div>
                <div className='mb-4 bg-gray-50 p-4 rounded border-l-4 border-[var(--color-primary)]'>
                  <p className='font-semibold mb-2 text-sm'>
                    Example Analysis Output:
                  </p>
                  <div className='mb-3'>
                    <p className='text-sm font-semibold mb-2'>
                      Client Profile Summary:
                    </p>
                    <p className='text-xs text-[var(--color-text-secondary)] mb-2'>
                      Age: 40 | Risk Tolerance: Moderate-Aggressive (7/10)
                    </p>
                    <p className='text-xs text-[var(--color-text-secondary)] mb-2'>
                      Experience: High with private business, moderate with
                      public markets
                    </p>
                    <p className='text-xs text-[var(--color-text-secondary)] mb-2'>
                      Time Horizon: 25+ years
                    </p>
                    <p className='text-xs text-[var(--color-text-secondary)] mb-2'>
                      Liquidity Needs: $650K annual, $10M trust funding (5
                      years)
                    </p>
                    <p className='text-xs text-[var(--color-text-secondary)] mb-3'>
                      Current: 90% concentration in private business
                    </p>
                    <p className='text-sm font-semibold mb-2'>
                      Strategy: QSBS exit with diversification to 60/30/10
                      portfolio
                    </p>
                  </div>
                  <div className='mb-3'>
                    <p className='text-sm font-semibold mb-2'>
                      Customer-Specific Alignment Analysis:
                    </p>
                    <div className='mb-2'>
                      <p className='text-xs font-semibold mb-1'>
                        RISK ALIGNMENT:
                      </p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>→ Current: 90% concentration (very high risk)</li>
                        <li>
                          → Proposed: Diversified portfolio (moderate-aggressive
                          risk)
                        </li>
                        <li>→ Client tolerance: Moderate-aggressive (7/10)</li>
                        <li>
                          → Analysis: Strategy reduces overall risk while
                          maintaining appropriate risk level
                        </li>
                        <li>
                          → ADVISOR CONSIDERATION: Alignment appears strong, but
                          confirm client comfort with transition from
                          concentrated to diversified
                        </li>
                      </ul>
                    </div>
                    <div className='mb-2'>
                      <p className='text-xs font-semibold mb-1'>
                        LIQUIDITY ALIGNMENT:
                      </p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>→ Current: Illiquid private business</li>
                        <li>
                          → Post-strategy: Liquid portfolio ($70M proceeds)
                        </li>
                        <li>
                          → Can fund: Annual needs ($650K), trust ($10M),
                          emergency ($5M)
                        </li>
                        <li>
                          → Analysis: Strategy dramatically improves liquidity
                          position
                        </li>
                        <li>
                          → ADVISOR CONSIDERATION: Ensure client understands
                          liquidity improvement
                        </li>
                      </ul>
                    </div>
                    <div className='mb-2'>
                      <p className='text-xs font-semibold mb-1'>
                        EXPERIENCE ALIGNMENT:
                      </p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>
                          → Client has private equity experience (business
                          owner)
                        </li>
                        <li>→ Moderate public markets experience</li>
                        <li>
                          → Limited alternatives experience (10% allocation
                          proposed)
                        </li>
                        <li>
                          → Analysis: Experience generally adequate,
                          alternatives allocation conservative
                        </li>
                        <li>
                          → ADVISOR CONSIDERATION: Discuss alternatives
                          education, confirm comfort level
                        </li>
                      </ul>
                    </div>
                    <div className='mb-2'>
                      <p className='text-xs font-semibold mb-1'>
                        OVERALL ANALYSIS SUMMARY:
                      </p>
                      <p className='text-xs text-[var(--color-text-secondary)] mb-1'>
                        Strategy appears well-aligned with client profile. Key
                        considerations:
                      </p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)] ml-4'>
                        <li>• Dramatic risk reduction from concentration</li>
                        <li>• Significant liquidity improvement</li>
                        <li>• Risk level matches stated tolerance</li>
                        <li>• Time horizon supports equity allocation</li>
                        <li>• May need education on alternatives component</li>
                      </ul>
                    </div>
                  </div>
                  <div className='bg-amber-50 p-3 rounded'>
                    <p className='font-semibold mb-2 text-xs'>
                      ADVISOR ACTION REQUIRED:
                    </p>
                    <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                      <li>
                        → Review this analysis in context of complete client
                        relationship
                      </li>
                      <li>
                        → Consider any additional factors unique to this client
                      </li>
                      <li>→ Discuss considerations with client</li>
                      <li>→ Apply your professional judgment</li>
                      <li>
                        → Make customer-specific suitability determination
                      </li>
                      <li>→ Document your determination</li>
                    </ul>
                  </div>
                </div>
                <div className='bg-blue-50 p-4 rounded'>
                  <p className='font-semibold mb-2 text-sm'>
                    How You Use This:
                  </p>
                  <ol className='space-y-1 text-xs text-[var(--color-text-secondary)] list-decimal list-inside'>
                    <li>
                      Review system analysis of profile-to-strategy alignment
                    </li>
                    <li>
                      Consider additional client factors not captured by system
                    </li>
                    <li>
                      Evaluate whether strategy is appropriate for THIS client
                    </li>
                    <li>Apply your professional judgment and experience</li>
                    <li>Make customer-specific suitability determination</li>
                    <li>Document your determination and reasoning</li>
                  </ol>
                  <p className='mt-3 text-xs font-semibold text-[var(--color-primary)]'>
                    Critical Note: System provides alignment analysis and
                    highlights considerations. You must evaluate all factors,
                    apply judgment, make determination. System analysis supports
                    but does not replace your professional evaluation.
                  </p>
                </div>
              </Card>

              {/* Framework Component 3: Quantitative Analysis */}
              <Card hover>
                <BarChart3 className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h3 className='text-2xl font-semibold mb-4'>
                  Framework Component 3: Quantitative Analysis
                </h3>
                <div className='mb-4'>
                  <p className='font-semibold mb-2'>
                    The Evaluation Question Advisors Must Answer:
                  </p>
                  <p className='text-[var(--color-text-secondary)] mb-4'>
                    Is the overall transaction pattern reasonable and
                    appropriate for this client?
                  </p>
                  <p className='font-semibold mb-2'>
                    What FINRA Requires Advisors Consider:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    Whether series of transactions is excessive, considering
                    turnover, costs, and whether pattern serves client
                    interests.
                  </p>
                </div>
                <div className='mb-4'>
                  <p className='font-semibold mb-2 text-sm'>
                    Analysis Tools VelocityIQ Provides:
                  </p>
                  <p className='text-sm font-semibold mb-2'>
                    For active trading strategies:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] mb-4'>
                    <li>• Annual turnover rate calculation</li>
                    <li>• Cost-to-equity ratio analysis</li>
                    <li>• Transaction pattern assessment</li>
                  </ul>
                  <p className='text-sm font-semibold mb-2'>
                    For one-off strategies:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] mb-4'>
                    <li>• Transaction sequence evaluation</li>
                    <li>• Cost reasonableness analysis</li>
                    <li>• Client benefit assessment</li>
                  </ul>
                  <p className='text-sm font-semibold mb-2 mt-4'>
                    Output format:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] mb-4'>
                    <li>→ Quantitative metrics calculated</li>
                    <li>→ Pattern analysis provided</li>
                    <li>→ Benchmarks for reference</li>
                    <li>→ Considerations for advisor review</li>
                  </ul>
                </div>
                <div className='mb-4 bg-gray-50 p-4 rounded border-l-4 border-[var(--color-primary)]'>
                  <p className='font-semibold mb-2 text-sm'>
                    Example Analysis Output:
                  </p>
                  <p className='text-sm font-semibold mb-2'>
                    Strategy: Business exit with diversification (one-time
                    restructuring)
                  </p>
                  <div className='mb-3'>
                    <p className='text-xs font-semibold mb-1'>
                      TRANSACTION SEQUENCE:
                    </p>
                    <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                      <li>→ Exit: Sale of private business ($70M proceeds)</li>
                      <li>
                        → Diversification: Initial portfolio construction
                        (60/30/10)
                      </li>
                      <li>→ Ongoing: Buy-and-hold with minimal trading</li>
                    </ul>
                  </div>
                  <div className='mb-3'>
                    <p className='text-xs font-semibold mb-1'>
                      METRICS CALCULATED:
                    </p>
                    <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                      <li>
                        → One-time restructuring cost: ~$700K (advisory fees,
                        transaction costs)
                      </li>
                      <li>→ Cost as % of proceeds: 1.0%</li>
                      <li>→ Projected ongoing turnover: &lt;0.3 annually</li>
                      <li>→ Projected ongoing cost-to-equity: &lt;0.7%</li>
                    </ul>
                  </div>
                  <div className='mb-3'>
                    <p className='text-xs font-semibold mb-1'>
                      PATTERN ASSESSMENT:
                    </p>
                    <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                      <li>→ Single exit event (not repetitive trading)</li>
                      <li>→ Followed by strategic allocation</li>
                      <li>→ Minimal ongoing transaction activity</li>
                      <li>
                        → Costs reasonable for value delivered (concentration
                        reduction, diversification)
                      </li>
                    </ul>
                  </div>
                  <div className='mb-3'>
                    <p className='text-xs font-semibold mb-1'>
                      BENEFIT-TO-CLIENT ANALYSIS:
                    </p>
                    <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                      <li>
                        → Reduces concentration risk from 90% to diversified
                      </li>
                      <li>→ Improves liquidity significantly</li>
                      <li>→ Positions for long-term wealth preservation</li>
                      <li>
                        → Transaction pattern serves stated client objectives
                      </li>
                    </ul>
                  </div>
                  <div className='mb-3'>
                    <p className='text-xs font-semibold mb-1'>
                      ADVISOR CONSIDERATIONS:
                    </p>
                    <ul className='space-y-1 text-xs text-[var(--color-text-secondary)] ml-4'>
                      <li>
                        • One-time restructuring appropriate for significant
                        life event
                      </li>
                      <li>• Costs proportional to benefits received</li>
                      <li>• No indication of excessive trading</li>
                      <li>
                        • Pattern aligns with client&apos;s long-term objectives
                      </li>
                    </ul>
                  </div>
                  <div className='bg-amber-50 p-3 rounded'>
                    <p className='font-semibold mb-2 text-xs'>
                      ADVISOR ACTION REQUIRED:
                    </p>
                    <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                      <li>→ Review analysis in context of client objectives</li>
                      <li>
                        → Confirm transaction pattern is reasonable for this
                        client
                      </li>
                      <li>→ Apply your professional judgment</li>
                      <li>→ Make quantitative suitability determination</li>
                      <li>→ Document your determination</li>
                    </ul>
                  </div>
                </div>
                <div className='bg-blue-50 p-4 rounded'>
                  <p className='font-semibold mb-2 text-sm'>
                    How You Use This:
                  </p>
                  <ol className='space-y-1 text-xs text-[var(--color-text-secondary)] list-decimal list-inside'>
                    <li>
                      Review system-calculated metrics and pattern analysis
                    </li>
                    <li>
                      Consider client-specific objectives and sophistication
                    </li>
                    <li>Evaluate whether transaction pattern is reasonable</li>
                    <li>Apply professional judgment about appropriateness</li>
                    <li>Make quantitative suitability determination</li>
                    <li>Document your assessment</li>
                  </ol>
                  <p className='mt-3 text-xs font-semibold text-[var(--color-primary)]'>
                    Critical Note: System provides quantitative analysis and
                    metrics calculation. You evaluate reasonableness in context
                    of client relationship. You make determination about pattern
                    appropriateness.
                  </p>
                </div>
              </Card>
            </div>

            {/* Step 4: Complete Compliance Documentation */}
            <Card className='mt-8 border-2 border-[var(--color-primary)]'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='bg-[var(--color-primary)] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0'>
                  <span className='text-2xl font-bold'>4</span>
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-[var(--color-text-primary)]'>
                    Complete Compliance Documentation
                  </h3>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='text-xl font-semibold mb-4'>What the System Produces:</h4>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    The system automatically generates comprehensive suitability assessment documentation including:
                  </p>
                  <div className='space-y-3'>
                    <div>
                      <p className='font-semibold mb-1 text-sm'>1. Executive Summary</p>
                      <ul className='text-xs text-[var(--color-text-secondary)] ml-4'>
                        <li>• Overall suitability score (0-100)</li>
                        <li>• System assessment: Clearly Suitable / Suitable / Marginal / Unsuitable</li>
                        <li>• Key findings summary</li>
                        <li>• Notable considerations flagged</li>
                      </ul>
                    </div>
                    <div>
                      <p className='font-semibold mb-1 text-sm'>2. Three-Prong Detailed Analysis</p>
                      <ul className='text-xs text-[var(--color-text-secondary)] ml-4'>
                        <li>• All indicator scores with factual basis</li>
                        <li>• AI-generated explanations for each indicator</li>
                        <li>• Pass/Fail determination for each prong</li>
                        <li>• Supporting data and calculations</li>
                      </ul>
                    </div>
                    <div>
                      <p className='font-semibold mb-1 text-sm'>3. Complete Audit Trail</p>
                      <ul className='text-xs text-[var(--color-text-secondary)] ml-4'>
                        <li>• Strategy description (original natural language input)</li>
                        <li>• AI classifications with rationale</li>
                        <li>• Any advisor modifications to classifications</li>
                        <li>• Client investment profile data used</li>
                        <li>• Timestamp and system version</li>
                        <li>• Complete calculation methodology</li>
                      </ul>
                    </div>
                    <div>
                      <p className='font-semibold mb-1 text-sm'>4. Advisor Action Required Section</p>
                      <ul className='text-xs text-[var(--color-text-secondary)] ml-4'>
                        <li>• Clear statement that advisor must review and determine</li>
                        <li>• Checklist of advisor responsibilities</li>
                        <li>• Space for advisor determination and signature</li>
                        <li>• Documentation of professional judgment applied</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='bg-amber-50 p-4 rounded-lg border-l-4 border-[var(--color-warning)]'>
                  <p className='font-semibold mb-2'>What Advisor Does:</p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    Reviews system output, applies professional judgment, and records their final determination.
                  </p>
                  <p className='text-sm font-semibold text-[var(--color-primary)]'>
                    System analyses. Advisor determines.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Using the Analysis Framework */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Your Process for Making Suitability Determinations
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='mb-8'>
                <Image
                  src='/images/advisor-client-reviewing-analysis.png'
                  alt='Advisor and client reviewing analysis report together'
                  width={1000}
                  height={600}
                  className='rounded-xl shadow-lg mx-auto'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    What You&apos;re Responsible For:
                  </h3>
                  <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>
                        Obtaining client information through reasonable
                        diligence
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Reviewing and understanding system analysis</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>
                        Applying professional judgment to unique client factors
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Making the suitability determination</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Documenting your determination and reasoning</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Discussing recommendations with client</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Taking responsibility for all recommendations</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Complying with all applicable regulations</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Following firm policies and procedures</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Maintaining appropriate supervision</span>
                    </li>
                  </ul>
                </Card>

                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    What the System Provides:
                  </h3>
                  <ul className='space-y-2 text-[var(--color-text-secondary)] mb-6'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Structured data collection framework</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Analysis tools for three-prong evaluation</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Documented methodology for audit trail</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Considerations and factors to review</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Supporting documentation for your file</span>
                    </li>
                  </ul>
                  <div className='bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)]'>
                    <p className='font-semibold mb-2 text-sm'>
                      System does NOT:
                    </p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Make determinations</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Provide investment advice</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Guarantee compliance</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Eliminate advisor responsibility</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>

              {/* Step-by-Step Workflow */}
              <Card className='mb-8'>
                <h3 className='text-2xl font-semibold mb-6'>
                  Step-by-Step Workflow:
                </h3>
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 1: System Generates Analysis
                    </h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>
                        → Investment profile structured around FINRA factors
                      </li>
                      <li>→ Strategy characteristics analyzed</li>
                      <li>→ Three-prong evaluation framework applied</li>
                      <li>→ Analysis output generated for your review</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 2: You Review the Analysis
                    </h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>→ Read all system-generated analysis</li>
                      <li>→ Verify accuracy of profile data</li>
                      <li>→ Understand strategy characteristics presented</li>
                      <li>
                        → Note alignment factors and considerations highlighted
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 3: You Apply Professional Judgment
                    </h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>
                        → Consider factors unique to this client relationship
                      </li>
                      <li>→ Evaluate information not captured in system</li>
                      <li>→ Apply your experience and expertise</li>
                      <li>→ Consider regulatory guidance and firm policies</li>
                      <li>→ Think through implications and risks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 4: You Make Determination
                    </h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>
                        → Determine if strategy is suitable for this client
                      </li>
                      <li>→ Decide if strategy is unsuitable</li>
                      <li>
                        → Identify if additional information or analysis needed
                      </li>
                      <li>
                        → Consider modifications that might improve suitability
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 5: You Document Your Determination
                    </h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>
                        → Document your suitability determination in client file
                      </li>
                      <li>
                        → Include key factors that supported your determination
                      </li>
                      <li>
                        → Note any considerations or discussions with client
                      </li>
                      <li>
                        → Reference system analysis as supporting documentation
                      </li>
                      <li>→ Take responsibility for your determination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>
                      Step 6: You Discuss with Client (if suitable)
                    </h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>
                        → Present strategy to client with your recommendation
                      </li>
                      <li>→ Discuss considerations and risks</li>
                      <li>→ Confirm client understanding and agreement</li>
                      <li>→ Document client discussion and decision</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Documentation Support */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Audit Trail Supporting Your Determination Process
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='mb-8'>
                <Image
                  src='/images/analysis-requires-advisor-determination.v2.png'
                  alt='Analysis document showing advisor action required'
                  width={1000}
                  height={600}
                  className='rounded-xl shadow-lg mx-auto'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    What Gets Documented:
                  </h3>
                  <p className='font-semibold mb-2 text-sm'>
                    System maintains record of:
                  </p>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Complete investment profile (9 FINRA factors)</li>
                    <li>→ Strategy characteristics analyzed</li>
                    <li>→ Three-prong analysis framework applied</li>
                    <li>→ Alignment factors identified</li>
                    <li>→ Considerations highlighted</li>
                    <li>→ Timestamp of analysis generation</li>
                  </ul>
                </Card>

                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    What You Must Document:
                  </h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Your review of system analysis</li>
                    <li>→ Additional factors you considered</li>
                    <li>→ Your professional judgment applied</li>
                    <li>→ Your suitability determination</li>
                    <li>→ Your reasoning for determination</li>
                    <li>→ Client discussions and decisions</li>
                    <li>→ Ongoing monitoring and review</li>
                  </ul>
                </Card>
              </div>

              <Card>
                <h3 className='text-xl font-semibold mb-4'>
                  How This Supports Regulatory Examinations:
                </h3>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  When FINRA asks about your suitability determination, you can
                  show:
                </p>
                <ol className='space-y-3 text-[var(--color-text-secondary)]'>
                  <li>
                    <span className='font-semibold'>
                      Systematic methodology:
                    </span>{' '}
                    &quot;I used three-prong analysis framework
                  </li>
                  <li>
                    <span className='font-semibold'>Complete profile:</span>{' '}
                    &quot;All 9 FINRA factors were captured and considered&quot;
                  </li>
                  <li>
                    <span className='font-semibold'>Documented analysis:</span>{' '}
                    &quot;Here&apos;s the evaluation framework I reviewed&quot;
                  </li>
                  <li>
                    <span className='font-semibold'>
                      Professional judgment:
                    </span>{' '}
                    &quot;Here&apos;s my determination and reasoning&quot;
                  </li>
                  <li>
                    <span className='font-semibold'>Client discussion:</span>{' '}
                    &quot;Here&apos;s documentation of client conversation&quot;
                  </li>
                </ol>
                <div className='mt-6 bg-blue-50 p-4 rounded'>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    This demonstrates reasonable basis for your determination
                    while showing systematic approach to evaluation.
                  </p>
                </div>
                <div className='mt-4 bg-amber-50 p-4 rounded border-l-4 border-[var(--color-warning)]'>
                  <p className='font-semibold mb-2 text-sm'>
                    Important Clarification:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    System documentation shows you used systematic analysis
                    tools. Your documentation shows you made the determination.
                    Combined: Demonstrates thorough, professional approach to
                    suitability.
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)] mt-2'>
                    System analysis supports but does not replace your
                    documentation of professional judgment and determination.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Sample Complete Assessment Output */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4' id='sample-output'>
              Example: Business Exit with Portfolio Diversification
            </h2>
            <div className='max-w-5xl mx-auto'>
              <Card className='bg-gray-50 font-mono text-xs'>
                <div className='space-y-4'>
                  <div className='border-b-2 border-[var(--color-primary)] pb-2'>
                    <p className='font-bold text-sm'>VELOCITYIQ FINRA 2111 SUITABILITY ASSESSMENT</p>
                    <p>Generated: 2026-01-15 14:22:35 EST</p>
                    <p>Advisor: Jennifer Martinez, CFP® | Platform: Quantum Wealth RIA</p>
                    <p>Client: Michael Harrington (Age 40) | Net Worth: $70M</p>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>STRATEGY DESCRIPTION (Natural Language Input)</p>
                    <p className='italic'>&quot;Post-exit portfolio: low-volatility, cash-flow-focused allocation to support lifestyle and legacy goals following business sale. Diversify from concentrated position while maintaining growth potential for multi-generational wealth.&quot;</p>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>AI CLASSIFICATION (Advisor Reviewed: ✓)</p>
                    <ul className='ml-4 space-y-1'>
                      <li>• Risk Level: MEDIUM</li>
                      <li>• Strategy Type: LIQUIDITY EVENT + PORTFOLIO CONSTRUCTION</li>
                      <li>• Time Horizon: LONG-TERM (25+ years)</li>
                      <li>• Experience Required: INTERMEDIATE</li>
                    </ul>
                  </div>
                  <div className='bg-green-50 p-3 rounded'>
                    <p className='font-semibold mb-2'>✓ PRONG 1: REASONABLE-BASIS SUITABILITY - PASS</p>
                    <p className='ml-4'>Strategy Configuration: 100/100</p>
                    <p className='ml-4'>Risk Level vs Experience: 100/100</p>
                  </div>
                  <div className='bg-green-50 p-3 rounded'>
                    <p className='font-semibold mb-2'>✓ PRONG 2: CUSTOMER-SPECIFIC SUITABILITY - PASS</p>
                    <p className='ml-4'>Risk Tolerance Alignment: 80/100</p>
                    <p className='ml-4'>Time Horizon Match: 100/100</p>
                    <p className='ml-4'>Liquidity Coverage: 100/100</p>
                    <p className='ml-4'>Concentration Level: 100/100</p>
                  </div>
                  <div className='bg-green-50 p-3 rounded'>
                    <p className='font-semibold mb-2'>✓ PRONG 3: QUANTITATIVE SUITABILITY - PASS</p>
                    <p className='ml-4'>Strategy Size vs Net Worth: 100/100</p>
                    <p className='ml-4'>Concentration Change: 100/100</p>
                    <p className='ml-4'>Net Risk Direction: 100/100</p>
                  </div>
                  <div className='border-t-2 border-[var(--color-primary)] pt-4'>
                    <p className='font-bold mb-2'>OVERALL SYSTEM ASSESSMENT</p>
                    <p className='text-lg font-bold text-[var(--color-success)]'>Total Score: 97/100</p>
                    <p className='font-semibold'>Assessment: CLEARLY SUITABLE</p>
                  </div>
                  <div className='bg-amber-50 p-3 rounded border-l-4 border-[var(--color-warning)]'>
                    <p className='font-semibold mb-2'>⚠ ADVISOR ACTION REQUIRED</p>
                    <p className='text-xs mb-2'>This assessment provides analysis and documentation to support your suitability determination. You must:</p>
                    <ul className='ml-4 space-y-1 text-xs'>
                      <li>☐ Review complete assessment and all indicator scores</li>
                      <li>☐ Verify accuracy of client profile data used</li>
                      <li>☐ Consider factors unique to client relationship</li>
                      <li>☐ Apply professional judgment and expertise</li>
                      <li>☐ Make final suitability determination</li>
                      <li>☐ Document your determination and reasoning</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <p className='text-xs text-[var(--color-text-secondary)] mt-4 italic text-center'>
                LEGAL NOTICE: This assessment provides analysis tools and evaluation frameworks. The system analyses strategies and generates documentation but does NOT make suitability determinations. The advisor must review all system analysis, apply independent professional judgment, and make the final suitability determination.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Scalability */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              One System, Every Advisor, Uniform Quality
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
                  <h3 className='text-xl font-semibold mb-4'>Without Systematic Tools:</h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Each advisor documents suitability differently</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Quality varies based on individual thoroughness</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>No visibility into methodology consistency</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Difficult to demonstrate systematic approach in exams</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                      <span>Training new advisors takes weeks</span>
                    </li>
                  </ul>
                </Card>

                <Card className='bg-green-50 border-l-4 border-[var(--color-success)]'>
                  <h3 className='text-xl font-semibold mb-4'>With VelocityIQ Platform Deployment:</h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Same AI-powered analysis for all advisors</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Identical scoring framework applied uniformly</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>80-90% time reduction per assessment</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Compliance dashboard showing usage patterns</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-4 h-4 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Demonstrate systematic approach to examiners</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className='bg-blue-50 border-l-4 border-[var(--color-primary)] mb-8'>
                <h3 className='text-xl font-semibold mb-4'>ROI Example for 50-Advisor Platform:</h3>
                <div className='space-y-3 text-sm text-[var(--color-text-secondary)]'>
                  <div>
                    <p className='font-semibold mb-2'>Traditional approach:</p>
                    <ul className='ml-4 space-y-1'>
                      <li>• Average assessments per advisor per month: 12</li>
                      <li>• Time per assessment: 3 hours</li>
                      <li>• Total monthly hours: 1,800 hours</li>
                      <li>• Annual hours: 21,600 hours</li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>With VelocityIQ:</p>
                    <ul className='ml-4 space-y-1'>
                      <li>• Time per assessment: 15 minutes</li>
                      <li>• Total monthly hours: 150 hours</li>
                      <li>• Annual hours: 1,800 hours</li>
                      <li>• <span className='font-bold'>Time saved: 19,800 hours annually</span></li>
                      <li>• <span className='font-bold'>At $150/hour: $2.97M recovered advisor productivity</span></li>
                    </ul>
                  </div>
                  <p className='mt-4 text-xs'>
                    Plus: Compliance cost reduction, improved advisor satisfaction, enhanced recruitment capability, reduced regulatory risk
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Positioning and Disclaimers */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Understanding VelocityIQ&apos;s Role and Your Responsibilities
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
              <Card>
                <h3 className='text-2xl font-semibold mb-4'>
                  What VelocityIQ Is:
                </h3>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>Decision-support tool for financial advisors</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>Analysis framework aligned with FINRA Rule 2111</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>Data structuring and evaluation methodology</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Documentation support for advisor determinations
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Technology platform providing analysis capabilities
                    </span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className='text-2xl font-semibold mb-4'>
                  What VelocityIQ Is NOT:
                </h3>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Investment advisor or broker-dealer</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>
                      Provider of investment advice or recommendations
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Maker of suitability determinations</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Guarantee of regulatory compliance</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Replacement for professional advisor judgment</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>
                      Elimination of advisor liability or responsibility
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className='mb-8'>
              <h3 className='text-2xl font-semibold mb-4'>
                Advisor Responsibilities:
              </h3>
              <p className='font-semibold mb-3'>YOU are responsible for:</p>
              <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                <li>
                  → Obtaining client information through reasonable diligence
                </li>
                <li>→ Reviewing and evaluating all system analysis</li>
                <li>→ Applying professional judgment to client situations</li>
                <li>→ Making all suitability determinations</li>
                <li>→ Determining appropriateness of recommendations</li>
                <li>→ Discussing strategies with clients</li>
                <li>→ Documenting determinations and client interactions</li>
                <li>→ Complying with all applicable securities regulations</li>
                <li>→ Following your firm&apos;s policies and procedures</li>
                <li>→ Maintaining appropriate supervisory oversight</li>
                <li>
                  → All aspects of client relationships and recommendations
                </li>
              </ul>
            </Card>

            <Card className='mb-8'>
              <h3 className='text-2xl font-semibold mb-4'>
                What System Analysis Cannot Do:
              </h3>
              <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                <li>→ Cannot make suitability determinations on your behalf</li>
                <li>→ Cannot provide investment advice or recommendations</li>
                <li>→ Cannot guarantee regulatory compliance</li>
                <li>→ Cannot eliminate your professional responsibilities</li>
                <li>→ Cannot replace your judgment or expertise</li>
                <li>→ Cannot absolve you of liability for determinations</li>
                <li>→ Cannot ensure client outcomes or satisfaction</li>
              </ul>
            </Card>

            <Card className='mb-8'>
              <h3 className='text-2xl font-semibold mb-4'>
                Limitations of Analysis:
              </h3>
              <p className='font-semibold mb-3'>System analysis is based on:</p>
              <ul className='space-y-2 text-sm text-[var(--color-text-secondary)] mb-4'>
                <li>
                  → Information you provide (quality depends on input accuracy)
                </li>
                <li>
                  → Structured rules and frameworks (may not capture all
                  nuances)
                </li>
                <li>
                  → General evaluation methodology (may miss client-specific
                  factors)
                </li>
                <li>
                  → Available data at time of analysis (market conditions
                  change)
                </li>
              </ul>
              <p className='font-semibold mb-3'>You must:</p>
              <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                <li>→ Verify accuracy of all input data</li>
                <li>→ Consider factors not captured by system</li>
                <li>→ Apply judgment about unique client circumstances</li>
                <li>→ Stay current on regulatory requirements</li>
                <li>
                  → Use analysis as one input to your determination, not sole
                  basis
                </li>
              </ul>
            </Card>

            <Card className='mb-8 bg-amber-50 border-l-4 border-[var(--color-warning)]'>
              <h3 className='text-2xl font-semibold mb-4'>
                Use at Your Own Risk:
              </h3>
              <p className='text-sm text-[var(--color-text-secondary)] mb-3'>
                By using VelocityIQ tools, you acknowledge and agree that:
              </p>
              <ol className='space-y-2 text-sm text-[var(--color-text-secondary)] list-decimal list-inside'>
                <li>
                  You are solely responsible for all suitability determinations
                  and client recommendations
                </li>
                <li>
                  You will review all system analysis and apply independent
                  professional judgment
                </li>
                <li>
                  You will not rely solely on system analysis for determinations
                </li>
                <li>
                  You understand system analysis is decision-support, not advice
                  or determinations
                </li>
                <li>
                  You will comply with all applicable regulations regardless of
                  system output
                </li>
                <li>
                  You will maintain appropriate supervision over use of analysis
                  tools
                </li>
                <li>
                  VelocityIQ is not liable for advisor determinations or client
                  outcomes
                </li>
                <li>
                  Use of analysis tools does not ensure regulatory compliance
                </li>
                <li>
                  You will review and understand all limitations and disclaimers
                </li>
                <li>
                  You accept full responsibility for how you use analysis tools
                  and outputs
                </li>
              </ol>
            </Card>

            <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
              <h3 className='text-2xl font-semibold mb-4'>
                IMPORTANT LEGAL NOTICE:
              </h3>
              <p className='text-[var(--color-text-secondary)] mb-4'>
                VelocityIQ provides technology-based decision-support tools and
                analysis frameworks. VelocityIQ does not make suitability
                determinations, provide investment advice, or act as an
                investment advisor or broker-dealer.
              </p>
              <p className='text-[var(--color-text-secondary)] mb-4'>
                All suitability determinations, investment recommendations, and
                client advice must be made by licensed financial professionals
                who review system analysis, apply independent professional
                judgment, and take full responsibility for their determinations.
              </p>
              <p className='text-[var(--color-text-secondary)] mb-4'>
                System analysis is provided &quot;as is&quot; without warranties
                of any kind. VelocityIQ disclaims all liability for advisor
                determinations, client outcomes, regulatory compliance, or any
                damages arising from use of analysis tools.
              </p>
              <p className='text-[var(--color-text-secondary)] mb-4'>
                Users are solely responsible for: (1) verifying accuracy of all
                data and analysis, (2) applying appropriate professional
                judgment, (3) making all suitability determinations, (4)
                complying with applicable regulations, and (5) all aspects of
                client relationships and recommendations.
              </p>
              <p className='text-[var(--color-text-secondary)]'>
                Use of VelocityIQ tools does not ensure regulatory compliance or
                eliminate advisor liability. Consult your compliance department
                and legal counsel regarding proper use of analysis tools in your
                practice.
              </p>
            </Card>
          </div>
        </section>

        {/* Value Proposition */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Why Analysis Frameworks Support Better Determinations
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <Card>
                <h3 className='text-2xl font-semibold mb-4'>For Advisors</h3>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Systematic approach: Framework helps evaluate all FINRA
                      factors consistently
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Time efficiency: Analysis tools structure evaluation vs.
                      starting from scratch
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Documentation support: Audit trail helps demonstrate
                      systematic methodology
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Consistency: Same framework applied across all clients and
                      strategies
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Thoroughness: Reduces risk of overlooking important
                      factors
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Regulatory support: Documentation helps in examinations
                    </span>
                  </li>
                </ul>
                <p className='mt-4 text-sm text-[var(--color-text-secondary)] italic'>
                  Note: These benefits support your work while you retain full
                  responsibility for determinations.
                </p>
              </Card>

              <Card>
                <h3 className='text-2xl font-semibold mb-4'>
                  For Compliance Officers
                </h3>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Methodology oversight: Can review analysis framework for
                      appropriateness
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Consistency monitoring: Can verify advisors use systematic
                      approach
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Documentation review: Can assess quality of determination
                      documentation
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Training tool: Framework demonstrates proper three-prong
                      evaluation
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Examination support: Can show supervisory use of
                      systematic tools
                    </span>
                  </li>
                </ul>
                <p className='mt-4 text-sm text-[var(--color-text-secondary)] italic'>
                  Note: Compliance must still supervise advisor determinations
                  and documentation.
                </p>
              </Card>

              <Card>
                <h3 className='text-2xl font-semibold mb-4'>For Platforms</h3>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Professional tools: Provide advisors with sophisticated
                      analysis capabilities
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Systematic approach: Support consistent methodology across
                      advisor network
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Documentation support: Help advisors demonstrate
                      reasonable basis
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Regulatory positioning: Show commitment to systematic
                      compliance support
                    </span>
                  </li>
                </ul>
                <p className='mt-4 text-sm text-[var(--color-text-secondary)] italic'>
                  Note: Platform remains responsible for supervision of advisor
                  determinations.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-[var(--color-primary)]'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold mb-4 !text-white'>
              Transform Suitability Documentation Across Your Platform
            </h2>
            <p className='text-xl mb-12 text-white'>
              See how VelocityIQ&apos;s AI-powered FINRA 2111 suitability assessment transforms advisor productivity while ensuring consistent, defensible methodology across your entire network—with natural language input, transparent scoring, and complete advisor control.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center mb-8'>
              <Button
                href='/system-demo'
                variant='secondary'
                className='bg-white text-[var(--color-primary)] hover:bg-blue-50 border-0 flex items-center gap-2'
              >
                <Play className='w-5 h-5' />
                Watch Assessment Demo
              </Button>
              <Button
                href='/book'
                variant='secondary'
                className='bg-white text-[var(--color-primary)] hover:bg-blue-50'
              >
                Apply for January Pilot
              </Button>
            </div>
            <Card className='bg-white/10 backdrop-blur text-white border-white/20 text-left'>
              <p className='text-sm text-white'>
                <span className='font-semibold'>Legal Notice:</span> VelocityIQ provides analysis tools and frameworks. Advisors review system output, apply professional judgment, and make all suitability determinations. Advisors are solely responsible for recommendations. Platforms maintain all supervisory responsibilities.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
