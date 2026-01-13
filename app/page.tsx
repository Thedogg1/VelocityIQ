import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reduce FINRA Violations by 80% While Recruiting Better Advisors | VelocityIQ',
  description: 'Compliance-first AI platform that prevents errors before they happen, systematizes FINRA Rule 2111 documentation, and gives regulators complete transparency—so your platform stands out to advisors and withstands regulatory scrutiny.',
  keywords: ['FINRA violations', 'compliance platform', 'RIA platform', 'FINRA Rule 2111', 'banking compliance', 'risk mitigation', 'audit trail', 'regulatory compliance'],
  openGraph: {
    title: 'Reduce FINRA Violations by 80% While Recruiting Better Advisors | VelocityIQ',
    description: 'Compliance-first AI platform that prevents errors before they happen, systematizes FINRA Rule 2111 documentation, and gives regulators complete transparency.',
    type: 'website',
    url: 'https://getvelocityiq.com/',
    images: [{ url: '/images/hero-audit-trail.png' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reduce FINRA Violations by 80% While Recruiting Better Advisors | VelocityIQ',
    description: 'Compliance-first AI platform that prevents errors before they happen, systematizes FINRA Rule 2111 documentation.',
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
                  Reduce FINRA Violations by 80% While Recruiting Better Advisors
                </h1>
                <p className='text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed'>
                  Compliance-first AI platform that prevents errors before they happen, systematizes FINRA Rule 2111 documentation, and gives regulators complete transparency—so your platform stands out to advisors and withstands regulatory scrutiny.
                </p>
                <div className='mb-6'>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    Built by former NatWest banking compliance systems developer
                  </p>
                  <div className='flex flex-wrap gap-4 text-sm font-semibold text-[var(--color-primary)]'>
                    <span className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5' />
                      101 validation rules
                    </span>
                    <span className='flex items-center gap-2'>
                      <Shield className='w-5 h-5' />
                      Zero silent errors
                    </span>
                    <span className='flex items-center gap-2'>
                      <FileText className='w-5 h-5' />
                      Complete audit trail
                    </span>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button href='/book' variant='primary'>
                    Schedule 15-Minute Demo
                  </Button>
                  <Button href='/how-it-works' variant='secondary'>
                    See How It Works
                  </Button>
                </div>
              </div>
              <div className='relative'>
                <Image
                  src='/images/hero-audit-trail.png'
                  alt='VelocityIQ complete audit trail showing validation rules, timestamps, and regulatory documentation'
                  width={800}
                  height={600}
                  className='rounded-xl shadow-lg'
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM RIA PLATFORMS FACE */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              The Problem RIA Platforms Face
            </h2>
            <p className='text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto'>
              Your advisors need AI tools. But most AI in wealth management creates more risk than it solves:
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
                <div className='flex items-start gap-3'>
                  <XCircle className='w-6 h-6 text-[var(--color-critical)] mt-1 flex-shrink-0' />
                  <div>
                    <p className='font-semibold mb-2'>Black-box calculations</p>
                    <p className='text-sm text-[var(--color-text-secondary)]'>
                      You can&apos;t explain them when FINRA asks questions
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
                <div className='flex items-start gap-3'>
                  <XCircle className='w-6 h-6 text-[var(--color-critical)] mt-1 flex-shrink-0' />
                  <div>
                    <p className='font-semibold mb-2'>Silent errors</p>
                    <p className='text-sm text-[var(--color-text-secondary)]'>
                      Go undetected until client harm occurs
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
                <div className='flex items-start gap-3'>
                  <XCircle className='w-6 h-6 text-[var(--color-critical)] mt-1 flex-shrink-0' />
                  <div>
                    <p className='font-semibold mb-2'>Unpredictable outputs</p>
                    <p className='text-sm text-[var(--color-text-secondary)]'>
                      Change with identical inputs
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
                <div className='flex items-start gap-3'>
                  <XCircle className='w-6 h-6 text-[var(--color-critical)] mt-1 flex-shrink-0' />
                  <div>
                    <p className='font-semibold mb-2'>Generic risk questionnaires</p>
                    <p className='text-sm text-[var(--color-text-secondary)]'>
                      Don&apos;t satisfy 2111 suitability requirements
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='bg-red-50 border-l-4 border-[var(--color-critical)] md:col-span-2'>
                <div className='flex items-start gap-3'>
                  <XCircle className='w-6 h-6 text-[var(--color-critical)] mt-1 flex-shrink-0' />
                  <div>
                    <p className='font-semibold mb-2'>Audit failures</p>
                    <p className='text-sm text-[var(--color-text-secondary)]'>
                      Because you can&apos;t show your methodology
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className='bg-amber-50 border-l-4 border-[var(--color-warning)] mb-8'>
              <h3 className='text-2xl font-semibold mb-4 text-[var(--color-text-primary)]'>
                The Stakes
              </h3>
              <p className='text-lg text-[var(--color-text-secondary)] mb-2'>
                Average FINRA violation costs <span className='font-bold text-[var(--color-critical)]'>$150K</span>. Most platforms face <span className='font-bold text-[var(--color-critical)]'>15+ violations annually</span>. That&apos;s <span className='font-bold text-[var(--color-critical)]'>$2.25M in fines</span>—plus the recruiting damage when word spreads that your compliance is shaky.
              </p>
            </Card>
          </div>
        </section>

        {/* HOW VELOCITYIQ SOLVES THIS */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              How VelocityIQ Solves This
            </h2>

            <div className='space-y-12'>
              {/* Solution 1 */}
              <Card className='border-2 border-[var(--color-primary)]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                  <div>
                    <div className='flex items-center gap-3 mb-4'>
                      <Shield className='w-8 h-8 text-[var(--color-primary)]' />
                      <h3 className='text-2xl font-semibold'>
                        Catch Every Error Before Recommendations Go Out
                      </h3>
                    </div>
                    <p className='text-lg text-[var(--color-text-secondary)] mb-4'>
                      101 automated validation rules check data completeness, calculation integrity, and logical consistency before any analysis reaches an advisor. Nothing fails silently. Ever. When you see &quot;FinCEN Residual Risk: 2.8/10,&quot; you know the analysis passed 101 quality checks.
                    </p>
                    <Button href='/platform#validation-architecture' variant='secondary' className='mt-4'>
                      Learn about our validation architecture <ArrowRight className='w-4 h-4 ml-2 inline' />
                    </Button>
                  </div>
                  <div>
                    <Image
                      src='/images/validation-pipeline.png'
                      alt='101 validation rules executing in real-time'
                      width={600}
                      height={400}
                      className='rounded-xl shadow-lg'
                    />
                  </div>
                </div>
              </Card>

              {/* Solution 2 */}
              <Card className='border-2 border-[var(--color-primary)]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                  <div className='order-2 lg:order-1'>
                    <Image
                      src='/images/compliance-approved-personalized-reports.png'
                      alt='Complete FINRA Rule 2111 documentation'
                      width={600}
                      height={400}
                      className='rounded-xl shadow-lg'
                    />
                  </div>
                  <div className='order-1 lg:order-2'>
                    <div className='flex items-center gap-3 mb-4'>
                      <FileText className='w-8 h-8 text-[var(--color-primary)]' />
                      <h3 className='text-2xl font-semibold'>
                        Document FINRA 2111 Compliance Systematically
                      </h3>
                    </div>
                    <p className='text-lg text-[var(--color-text-secondary)] mb-4'>
                      Stop relying on generic questionnaires. VelocityIQ generates complete FINRA Rule 2111 documentation for every strategy: reasonable-basis suitability, customer-specific scoring (quantified 0-100 across four factors), and quantitative suitability assessment. When FINRA asks how you assessed suitability, you hand them systematic documentation.
                    </p>
                    <Button href='/suitability' variant='secondary' className='mt-4'>
                      See sample compliance reports <ArrowRight className='w-4 h-4 ml-2 inline' />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Solution 3 */}
              <Card className='border-2 border-[var(--color-primary)]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                  <div>
                    <div className='flex items-center gap-3 mb-4'>
                      <Eye className='w-8 h-8 text-[var(--color-primary)]' />
                      <h3 className='text-2xl font-semibold'>
                        Show Regulators Every Formula and Assumption
                      </h3>
                    </div>
                    <p className='text-lg text-[var(--color-text-secondary)] mb-4'>
                      200+ deterministic formulas per assessment. Every calculation traceable to source. Complete methodology documentation. Audits become box-ticking exercises because you can show exactly how every decision was made—no black-box explanations, no AI hand-waving.
                    </p>
                    <Button href='/platform#audit-transparency' variant='secondary' className='mt-4'>
                      Explore audit transparency <ArrowRight className='w-4 h-4 ml-2 inline' />
                    </Button>
                  </div>
                  <div>
                    <Image
                      src='/images/glass-box-transparent-architecture.v2.png'
                      alt='Transparent architecture showing all formulas and calculations'
                      width={600}
                      height={400}
                      className='rounded-xl shadow-lg'
                    />
                  </div>
                </div>
              </Card>

              {/* Solution 4 */}
              <Card className='border-2 border-[var(--color-primary)]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                  <div className='order-2 lg:order-1'>
                    <Image
                      src='/images/niche-icons-grid.png'
                      alt='Professional Niche Packs for specialized markets'
                      width={600}
                      height={400}
                      className='rounded-xl shadow-lg'
                    />
                  </div>
                  <div className='order-1 lg:order-2'>
                    <div className='flex items-center gap-3 mb-4'>
                      <Target className='w-8 h-8 text-[var(--color-primary)]' />
                      <h3 className='text-2xl font-semibold'>
                        Expand Into New Client Niches in 48 Hours
                      </h3>
                    </div>
                    <p className='text-lg text-[var(--color-text-secondary)] mb-4'>
                      Professional Niche Packs give your advisors expert-level analysis in specialized markets (medical practice owners, tech executives, real estate investors, family offices). One client in a new niche pays for the entire pack. Your advisors win business your competitors can&apos;t touch.
                    </p>
                    <Button href='/platform#niche-packs' variant='secondary' className='mt-4'>
                      Browse niche packs <ArrowRight className='w-4 h-4 ml-2 inline' />
                    </Button>
                  </div>
                </div>
              </Card>
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
                  You&apos;re not buying experimental AI from a tech startup. You&apos;re buying compliance-first architecture from someone who brings 25+ years of financial services rigor to wealth management.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* SEE IT IN ACTION - FINAL CTA */}
        <section className='py-20 bg-[var(--color-primary)]'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold mb-6 !text-white'>
              See It In Action
            </h2>
            <p className='text-xl mb-8 text-white'>
              Schedule a 15-minute demonstration to see how VelocityIQ&apos;s compliance-first architecture provides systematic risk assessment and FINRA Rule 2111 documentation your platform can defend.
            </p>

            <Card className='bg-white/10 backdrop-blur mb-8 text-white border-white/20'>
              <h3 className='text-2xl font-semibold mb-4 text-white'>
                In the demo, you&apos;ll see:
              </h3>
              <ul className='space-y-3 text-left text-white'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-white mt-0.5 flex-shrink-0' />
                  <span>101 validation rules executing in real-time</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-white mt-0.5 flex-shrink-0' />
                  <span>Zero silent errors—every issue flagged explicitly</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-white mt-0.5 flex-shrink-0' />
                  <span>Complete FINRA Rule 2111 documentation generated automatically</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-white mt-0.5 flex-shrink-0' />
                  <span>Full audit transparency and methodology you can show regulators</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-white mt-0.5 flex-shrink-0' />
                  <span>Banking-grade validation applied to wealth management</span>
                </li>
              </ul>
            </Card>

            <p className='text-lg mb-8 text-white'>
              No pressure. No lengthy sales process. Just a clear demonstration of what professional compliance intelligence looks like.
            </p>

            <div className='mb-8'>
              <Button
                href='/book'
                variant='secondary'
                className='bg-white text-[var(--color-primary)] hover:bg-blue-50'
              >
                Schedule 15-Minute Demo
              </Button>
            </div>

            <div className='space-y-2 text-white'>
              <p className='flex items-center justify-center gap-2'>
                <Mail className='w-5 h-5' />
                <span>Or contact directly: </span>
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
