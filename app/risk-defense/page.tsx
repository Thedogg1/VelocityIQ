import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import type { Metadata } from 'next';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Layers,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '73 Risk Identification Rules for Financial Planning | VelocityIQ',
  description: 'Systematic risk identification tools with 73 validation rules. Help advisors identify planning risks and data quality issues for client discussions.',
  keywords: ['risk identification', 'planning risk analysis', 'financial planning validation', 'advisor risk tools', 'client risk disclosure', 'data quality checks', 'compliance documentation'],
  openGraph: {
    title: '73 Risk Identification Rules for Financial Planning',
    description: 'Systematic risk analysis tools supporting advisor client discussions',
    type: 'website',
    url: 'https://getvelocityiq.com/risk-defense',
    images: [{ url: '/images/advisor-assessing-risk-materiality.jpg' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '73 Risk Identification Rules for Financial Planning',
    description: 'Systematic risk analysis tools supporting advisor client discussions',
    images: ['/images/advisor-assessing-risk-materiality.jpg'],
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/risk-defense',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RiskDefensePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl font-bold text-[var(--color-text-primary)] mb-6'>
                Risk Identification Tools: Supporting Your Planning Discussions
                with Clients
              </h1>
              <p className='text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed'>
                Once you&apos;ve determined strategy suitability,
                VelocityIQ&apos;s 73 validation rules help identify planning
                risks and data quality issues—providing systematic analysis to
                support your client discussions. You determine which risks to
                address and how to document your disclosure.
              </p>
              <div className='bg-amber-50 p-6 rounded-lg border-l-4 border-[var(--color-warning)]'>
                <p className='font-semibold mb-2'>Legal Notice:</p>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  VelocityIQ provides risk identification and analysis tools.
                  Advisors determine which risks to discuss with clients, how to
                  address identified risks, and are solely responsible for all
                  client communications and recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Two Complementary Analysis Systems */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Suitability Analysis vs. Risk Identification: Different Tools,
              Both Support Your Work
            </h2>
            <div className='max-w-5xl mx-auto'>
              <Card className='mb-8'>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr className='border-b-2 border-[var(--color-border-strong)]'>
                        <th className='text-left p-4 font-semibold'>
                          Analysis System
                        </th>
                        <th className='text-left p-4 font-semibold'>Purpose</th>
                        <th className='text-left p-4 font-semibold'>
                          What It Evaluates
                        </th>
                        <th className='text-left p-4 font-semibold'>Output</th>
                        <th className='text-left p-4 font-semibold'>
                          Advisor Uses It To
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-b border-[var(--color-border-subtle)]'>
                        <td className='p-4 font-semibold'>
                          FINRA 2111 Suitability Analysis
                        </td>
                        <td className='p-4 text-[var(--color-text-secondary)]'>
                          Support suitability determination
                        </td>
                        <td className='p-4 text-[var(--color-text-secondary)]'>
                          Reasonable-basis, Customer-specific, Quantitative fit
                        </td>
                        <td className='p-4 text-[var(--color-text-secondary)]'>
                          Analysis framework showing alignment/concerns
                        </td>
                        <td className='p-4 text-[var(--color-text-secondary)]'>
                          Evaluate whether strategy is suitable; make
                          determination
                        </td>
                      </tr>
                      <tr>
                        <td className='p-4 font-semibold'>
                          73 Validation Rules
                        </td>
                        <td className='p-4 text-[var(--color-text-secondary)]'>
                          Identify planning risks
                        </td>
                        <td className='p-4 text-[var(--color-text-secondary)]'>
                          Data quality, calculation accuracy, planning exposures
                        </td>
                        <td className='p-4 text-[var(--color-text-secondary)]'>
                          Risk identification analysis
                        </td>
                        <td className='p-4 text-[var(--color-text-secondary)]'>
                          Identify risks to discuss with clients; determine
                          disclosure approach
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card className='mb-8'>
                <h3 className='text-2xl font-semibold mb-4'>
                  How They Support Your Work Together:
                </h3>
                <div className='space-y-4 text-[var(--color-text-secondary)]'>
                  <p className='font-semibold'>
                    Suitability Analysis → Supports your determination that
                    strategy is appropriate
                  </p>
                  <p className='ml-4'>↓</p>
                  <p className='font-semibold'>
                    Risk Identification → Helps you identify specific risks
                    within that strategy
                  </p>
                  <p className='ml-4'>↓</p>
                  <p className='font-semibold'>
                    Your Professional Judgment → You determine which risks to
                    discuss, how to address them
                  </p>
                  <p className='ml-4'>↓</p>
                  <p className='font-semibold'>
                    Your Documentation → You document client discussions and
                    decisions
                  </p>
                </div>
              </Card>

              <Card>
                <h3 className='text-2xl font-semibold mb-4'>Example:</h3>
                <p className='font-semibold mb-2'>
                  Strategy: Business exit with diversification
                </p>
                <div className='space-y-4 mb-4'>
                  <div>
                    <p className='font-semibold mb-2'>
                      Suitability Analysis Framework Provides:
                    </p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>→ Prong 1: Strategy characteristics evaluated</li>
                      <li>→ Prong 2: Client profile alignment analyzed</li>
                      <li>→ Prong 3: Transaction pattern assessed</li>
                      <li>
                        → YOU DETERMINE: Strategy is suitable for this client
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>
                      Risk Identification Analysis Provides:
                    </p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>
                        → IDENTIFIED: 87% concentration during transition period
                      </li>
                      <li>
                        → IDENTIFIED: Potential AMT exposure from ISO exercise
                        timing
                      </li>
                      <li>
                        → IDENTIFIED: Estate tax exposure ($18.5M estate, $13.6M
                        exemption)
                      </li>
                      <li>→ IDENTIFIED: Transition liquidity considerations</li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-semibold mb-2'>YOU DETERMINE:</p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)] ml-4'>
                      <li>→ Which risks to discuss with client</li>
                      <li>→ How to frame risk discussion</li>
                      <li>→ What disclosures to provide</li>
                      <li>→ How to document client understanding</li>
                      <li>→ Whether risks require strategy modification</li>
                    </ul>
                  </div>
                </div>
                <div className='bg-green-50 p-4 rounded border-l-4 border-[var(--color-success)]'>
                  <p className='font-semibold mb-2'>Outcome:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>✓ Strategy suitable (your determination)</li>
                    <li>✓ Risks identified (system analysis)</li>
                    <li>✓ Risks discussed (your client conversation)</li>
                    <li>✓ Client informed (your disclosure)</li>
                    <li>✓ Decisions documented (your file)</li>
                  </ul>
                </div>
              </Card>

              <div className='text-center mt-8'>
                <Button href='/suitability' variant='primary'>
                  Learn About Suitability Analysis Framework →
                </Button>
              </div>

              <div className='mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-[var(--color-primary)]'>
                <p className='font-semibold mb-2'>Legal Notice:</p>
                <p className='text-sm text-[var(--color-text-secondary)]'>
                  System identifies potential risks for your consideration. You
                  determine risk significance, appropriate disclosure, and
                  client communication approach. You are responsible for all
                  risk management and disclosure decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 73-Rule Risk Identification System */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Systematic Risk Detection Supporting Your Client Discussions
            </h2>
            <div className='max-w-4xl mx-auto'>
              <Card className='mb-8'>
                <h3 className='text-2xl font-semibold mb-4'>The Challenge:</h3>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  Even experienced advisors can overlook planning risks due to:
                </p>
                <ul className='space-y-2 text-[var(--color-text-secondary)] mb-6'>
                  <li>• Time pressure in client meetings</li>
                  <li>• Complexity of business owner situations</li>
                  <li>• Multiple interconnected financial factors</li>
                  <li>• Evolving tax and regulatory landscape</li>
                  <li>• Human oversight in manual review processes</li>
                </ul>
                <div className='bg-blue-50 p-4 rounded'>
                  <p className='font-semibold mb-2'>
                    How Risk Identification Tools Help:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-2'>
                    Systematic analysis flags potential issues for your
                    consideration:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>• Data quality problems that could affect accuracy</li>
                    <li>• Planning risks that may warrant client discussion</li>
                    <li>• Tax exposure areas requiring attention</li>
                    <li>• Calculation inconsistencies needing resolution</li>
                    <li>• Documentation gaps requiring clarification</li>
                  </ul>
                </div>
                <div className='mt-4 bg-green-50 p-4 rounded'>
                  <p className='font-semibold mb-2'>Your Role:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Review identified risks and flagged issues</li>
                    <li>→ Determine which are material for this client</li>
                    <li>→ Decide which risks to discuss with client</li>
                    <li>→ Frame risk discussion appropriately</li>
                    <li>→ Document client understanding and decisions</li>
                    <li>→ Take responsibility for risk management approach</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 73Critical Rules */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Data Quality and Calculation Integrity Checks
            </h2>
            <div className='max-w-4xl mx-auto'>
              <Card>
                <h3 className='text-2xl font-semibold mb-4'>
                  73 Critical Rules
                </h3>
                <div className='mb-6'>
                  <p className='font-semibold mb-3'>
                    What These Rules Identify:
                  </p>
                  <p className='text-[var(--color-text-secondary)] mb-3'>
                    Issues that could affect accuracy of analysis or
                    calculations:
                  </p>
                  <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                    <li>
                      • Data integrity violations (mathematically impossible
                      scenarios)
                    </li>
                    <li>• Missing required information for calculations</li>
                    <li>• Logical inconsistencies in client profile</li>
                    <li>• Regulatory requirement timeline violations</li>
                    <li>• Calculation input errors or conflicts</li>
                  </ul>
                </div>
                <div className='mb-6 bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)]'>
                  <p className='font-semibold mb-2'>System Response:</p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-2'>
                    If critical rule identifies issue:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Analysis process flags the problem</li>
                    <li>→ Issue description provided for your review</li>
                    <li>→ You determine how to address the issue</li>
                    <li>
                      → You decide whether to proceed, modify inputs, or gather
                      additional information
                    </li>
                  </ul>
                </div>
                <div className='mb-6'>
                  <p className='font-semibold mb-3'>Examples:</p>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li>
                      → ISO exercise date before grant date (data conflict)
                    </li>
                    <li>
                      → Age entered outside reasonable range (data quality)
                    </li>
                    <li>
                      → Total assets less than stated liabilities
                      (inconsistency)
                    </li>
                    <li>
                      → Required tax information missing (incomplete data)
                    </li>
                    <li>
                      → 83(b) election timing violation (regulatory deadline
                      missed)
                    </li>
                  </ul>
                </div>
                <div className='bg-blue-50 p-4 rounded'>
                  <p className='font-semibold mb-2'>Your Responsibility:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Review identified data quality issues</li>
                    <li>→ Verify information with client</li>
                    <li>→ Correct data or gather additional information</li>
                    <li>→ Determine whether to proceed with analysis</li>
                    <li>→ Document resolution of identified issues</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 28 Warning Rules */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Planning Risk Identification for Client Discussion
            </h2>
            <div className='max-w-4xl mx-auto'>
              <Card>
                <h3 className='text-2xl font-semibold mb-4'>
                  28 Warning Rules
                </h3>
                <div className='mb-6'>
                  <p className='font-semibold mb-3'>
                    What These Rules Identify:
                  </p>
                  <p className='text-[var(--color-text-secondary)] mb-3'>
                    Planning considerations that may warrant client discussion:
                  </p>
                  <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                    <li>
                      • Portfolio concentration concerns (&gt;40% single
                      position)
                    </li>
                    <li>
                      • Insurance coverage gaps (life, disability, umbrella)
                    </li>
                    <li>
                      • Tax exposure areas (AMT, estate, gift implications)
                    </li>
                    <li>• Retirement savings shortfalls relative to goals</li>
                    <li>• Asset allocation concerns for stated risk profile</li>
                    <li>• Planning deficiencies requiring attention</li>
                  </ul>
                </div>
                <div className='mb-6 bg-amber-50 p-4 rounded border-l-4 border-[var(--color-warning)]'>
                  <p className='font-semibold mb-2'>System Response:</p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-2'>
                    If warning rule identifies potential risk:
                  </p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Risk description provided for your review</li>
                    <li>→ Context and implications outlined</li>
                    <li>→ Considerations highlighted</li>
                    <li>
                      → You determine risk significance and disclosure approach
                    </li>
                  </ul>
                </div>
                <div className='mb-6'>
                  <p className='font-semibold mb-3'>Examples:</p>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ 87% net worth concentrated in single equity</li>
                    <li>
                      → No umbrella liability coverage with $10M+ net worth
                    </li>
                    <li>
                      → Potential AMT exposure of $126K from ISO exercise timing
                    </li>
                    <li>→ Estate value exceeds exemption threshold by $4.9M</li>
                    <li>
                      → Retirement savings rate below target for stated goals
                    </li>
                  </ul>
                </div>
                <div className='bg-blue-50 p-4 rounded'>
                  <p className='font-semibold mb-2'>Your Responsibility:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Review identified potential risks</li>
                    <li>→ Assess materiality for this specific client</li>
                    <li>→ Determine which risks to discuss with client</li>
                    <li>
                      → Frame discussion appropriately for client understanding
                    </li>
                    <li>→ Document client discussion and acknowledgment</li>
                    <li>→ Decide on appropriate follow-up actions</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Risk Analysis Output Format */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              What the System Provides for Your Review
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='mb-8'>
                <Image
                  src='/images/advisor-assessing-risk-materiality.png'
                  alt='Advisor reviewing risk analysis with flagged items'
                  width={1200}
                  height={600}
                  className='rounded-xl shadow-lg mx-auto'
                />
              </div>
              <Card className='bg-gray-50 font-mono text-sm mb-8'>
                <div className='space-y-6'>
                  <div>
                    <p className='font-semibold mb-2 text-base font-sans'>
                      Sample Risk Identification Analysis:
                    </p>
                    <p className='font-bold text-lg mb-2'>
                      VELOCITYIQ RISK IDENTIFICATION ANALYSIS
                    </p>
                    <p>Generated: 2025-12-15 14:32:15</p>
                    <p>Advisor: [Name] | Client: [Name]</p>
                  </div>
                  <div>
                    <p className='font-bold mb-2'>
                      === DATA QUALITY ISSUES (0) ===
                    </p>
                    <p>No critical data quality issues identified.</p>
                  </div>
                  <div>
                    <p className='font-bold mb-2'>
                      === PLANNING RISKS IDENTIFIED (4) ===
                    </p>
                    <div className='space-y-4 mt-4'>
                      <div className='pl-4 border-l-4 border-[var(--color-warning)] bg-white p-4 rounded'>
                        <p className='font-semibold mb-2'>
                          IDENTIFIED RISK: High Portfolio Concentration
                        </p>
                        <ul className='list-disc list-inside space-y-1 text-xs text-[var(--color-text-secondary)]'>
                          <li>
                            87% of net worth in single equity position (Company
                            XYZ stock)
                          </li>
                          <li>
                            Industry benchmark: &lt;40% in single position
                            typically recommended
                          </li>
                          <li>
                            Consideration: Lack of diversification increases
                            volatility and downside exposure
                          </li>
                          <li>
                            For advisor review: Determine if concentration level
                            appropriate for this client&apos;s situation, risk
                            tolerance, and objectives
                          </li>
                        </ul>
                      </div>
                      <div className='pl-4 border-l-4 border-[var(--color-warning)] bg-white p-4 rounded'>
                        <p className='font-semibold mb-2'>
                          IDENTIFIED RISK: Potential AMT Exposure
                        </p>
                        <ul className='list-disc list-inside space-y-1 text-xs text-[var(--color-text-secondary)]'>
                          <li>
                            ISO exercise of $500,000 may trigger Alternative
                            Minimum Tax
                          </li>
                          <li>
                            Bargain element: $450,000 exceeds AMT exemption
                            threshold
                          </li>
                          <li>Estimated AMT impact: $126,000</li>
                          <li>
                            For advisor review: Assess if client aware of AMT
                            implications; consider exercise timing strategies
                          </li>
                        </ul>
                      </div>
                      <div className='pl-4 border-l-4 border-[var(--color-warning)] bg-white p-4 rounded'>
                        <p className='font-semibold mb-2'>
                          IDENTIFIED RISK: Estate Tax Exposure
                        </p>
                        <ul className='list-disc list-inside space-y-1 text-xs text-[var(--color-text-secondary)]'>
                          <li>Estimated estate value: $18.5M</li>
                          <li>Current estate tax exemption: $13.61M (2025)</li>
                          <li>
                            Potential estate tax on excess: $1.96M on $4.89M
                            over exemption
                          </li>
                          <li>
                            For advisor review: Evaluate if estate planning
                            strategies warranted
                          </li>
                        </ul>
                      </div>
                      <div className='pl-4 border-l-4 border-[var(--color-warning)] bg-white p-4 rounded'>
                        <p className='font-semibold mb-2'>
                          IDENTIFIED RISK: Umbrella Liability Coverage Gap
                        </p>
                        <ul className='list-disc list-inside space-y-1 text-xs text-[var(--color-text-secondary)]'>
                          <li>
                            Net worth exceeds $10M with no umbrella policy
                            identified
                          </li>
                          <li>
                            Standard auto/home liability limits may be
                            insufficient for wealth level
                          </li>
                          <li>
                            For advisor review: Assess if additional liability
                            coverage appropriate
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='font-bold mb-2'>=== END OF ANALYSIS ===</p>
                    <div className='mt-4 bg-blue-50 p-4 rounded'>
                      <p className='font-semibold mb-2'>
                        ADVISOR ACTION REQUIRED:
                      </p>
                      <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                        <li>→ Review all identified risks</li>
                        <li>→ Assess significance for this client</li>
                        <li>→ Determine which risks to discuss</li>
                        <li>→ Plan client discussion approach</li>
                        <li>→ Document discussion and client decisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className='text-2xl font-semibold mb-6'>
                  How You Use This Analysis:
                </h3>
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-semibold mb-2'>Step 1: Review</h4>
                    <p className='text-sm text-[var(--color-text-secondary)]'>
                      Read all identified risks and considerations
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>Step 2: Assess</h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li>
                        • Determine which risks are material for this client
                      </li>
                      <li>
                        • Consider client sophistication, objectives, and
                        circumstances
                      </li>
                      <li>
                        • Apply your professional judgment about significance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>Step 3: Prioritize</h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li>
                        • Decide which risks are most important to discuss
                      </li>
                      <li>• Determine appropriate timing for discussions</li>
                      <li>
                        • Consider whether risks require immediate attention
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>Step 4: Discuss</h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li>• Frame risk discussion appropriately for client</li>
                      <li>
                        • Explain implications in client-appropriate language
                      </li>
                      <li>• Ensure client understanding</li>
                      <li>• Discuss potential mitigation strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>Step 5: Document</h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li>• Document which risks were discussed</li>
                      <li>• Record client responses and understanding</li>
                      <li>• Note any decisions or action items</li>
                      <li>• Maintain documentation in client file</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold mb-2'>Step 6: Act</h4>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li>• Follow through on any agreed actions</li>
                      <li>• Monitor risks on ongoing basis</li>
                      <li>• Update risk analysis as circumstances change</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    What You&apos;re Responsible For:
                  </h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Reviewing system-identified risks</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Assessing risk materiality and significance</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>
                        Determining which risks to discuss with clients
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Framing risk discussions appropriately</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Ensuring client understanding of risks</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>
                        Documenting risk discussions and client decisions
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>
                        Following through on risk mitigation strategies
                      </span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Monitoring risks on ongoing basis</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>All risk management and disclosure decisions</span>
                    </li>
                  </ul>
                </Card>

                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    What the System Provides:
                  </h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)] mb-6'>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Systematic identification of potential risks</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Structured risk analysis output</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                      <span>Context and considerations for your review</span>
                    </li>
                  </ul>
                  <div className='bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)]'>
                    <p className='font-semibold mb-2 text-sm'>
                      System does NOT:
                    </p>
                    <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Determine which risks are material</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Make disclosure decisions</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Communicate with clients</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Replace your professional judgment</span>
                      </li>
                      <li className='flex items-start gap-2'>
                        <XCircle className='w-4 h-4 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                        <span>Eliminate your responsibility</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Triple-Layer Validation */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Three Analysis Checkpoints Supporting Data Quality
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
              <Card>
                <Layers className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h3 className='text-2xl font-semibold mb-4'>
                  Layer 1: Input Validation
                </h3>
                <div className='mb-4'>
                  <p className='font-semibold mb-2'>When:</p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    During data entry in client questionnaire
                  </p>
                  <p className='font-semibold mb-2'>What It Identifies:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>• Missing required fields</li>
                    <li>• Impossible values (dates, percentages, ages)</li>
                    <li>• Mathematical conflicts</li>
                    <li>• Logical inconsistencies</li>
                    <li>• Regulatory timeline issues</li>
                  </ul>
                </div>
                <div className='bg-blue-50 p-4 rounded'>
                  <p className='font-semibold mb-2 text-sm'>
                    Advisor Experience:
                  </p>
                  <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                    <li>• Inline notifications appear immediately</li>
                    <li>• Issues highlighted for correction</li>
                    <li>• Suggested resolutions offered</li>
                    <li>• You determine how to address flagged items</li>
                  </ul>
                  <p className='font-semibold mt-3 mb-2 text-sm'>Example:</p>
                  <p className='text-xs text-[var(--color-text-secondary)]'>
                    Advisor enters ISO exercise date: 2020-01-15. System shows
                    grant date: 2021-06-01. → System identifies: &quot;Exercise
                    date before grant date appears inconsistent&quot; → You
                    verify correct dates with client → You correct data as
                    appropriate
                  </p>
                </div>
                <div className='mt-4 bg-green-50 p-4 rounded'>
                  <p className='font-semibold mb-2 text-sm'>
                    Your Responsibility:
                  </p>
                  <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                    <li>→ Review identified data quality issues</li>
                    <li>→ Verify information with client</li>
                    <li>→ Correct data or gather additional information</li>
                    <li>→ Determine accuracy before proceeding</li>
                  </ul>
                </div>
              </Card>

              <Card>
                <Layers className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h3 className='text-2xl font-semibold mb-4'>
                  Layer 2: Processing Validation
                </h3>
                <div className='mb-4'>
                  <p className='font-semibold mb-2'>When:</p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    During analysis generation
                  </p>
                  <p className='font-semibold mb-2'>What It Checks:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>• All 73 rules evaluated</li>
                    <li>• Cross-validation between calculations</li>
                    <li>• Range checks on computed values</li>
                    <li>• Consistency across analysis</li>
                  </ul>
                </div>
                <div className='bg-blue-50 p-4 rounded'>
                  <p className='font-semibold mb-2 text-sm'>System Response:</p>
                  <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                    <li>• Data quality issues → Flagged for your attention</li>
                    <li>• Planning risks → Identified in analysis output</li>
                    <li>• Both → Documented for your review</li>
                  </ul>
                </div>
                <div className='mt-4 bg-green-50 p-4 rounded'>
                  <p className='font-semibold mb-2 text-sm'>
                    Your Responsibility:
                  </p>
                  <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                    <li>→ Review all identified issues and risks</li>
                    <li>→ Determine appropriate response</li>
                    <li>→ Make decisions about proceeding</li>
                  </ul>
                </div>
              </Card>

              <Card>
                <Layers className='w-12 h-12 text-[var(--color-primary)] mb-4' />
                <h3 className='text-2xl font-semibold mb-4'>
                  Layer 3: Output Validation
                </h3>
                <div className='mb-4'>
                  <p className='font-semibold mb-2'>When:</p>
                  <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                    Final check before advisor review
                  </p>
                  <p className='font-semibold mb-2'>What It Confirms:</p>
                  <ul className='space-y-1 text-sm text-[var(--color-text-secondary)]'>
                    <li>• Analysis consistency maintained</li>
                    <li>• All risks properly documented</li>
                    <li>• No issues overlooked</li>
                    <li>• Documentation integrity complete</li>
                  </ul>
                </div>
                <div className='bg-green-50 p-4 rounded'>
                  <p className='font-semibold mb-2 text-sm'>
                    Your Responsibility:
                  </p>
                  <ul className='space-y-1 text-xs text-[var(--color-text-secondary)]'>
                    <li>→ Final review of complete analysis</li>
                    <li>→ Verification of output quality</li>
                    <li>→ Determination of next steps</li>
                  </ul>
                </div>
              </Card>
            </div>

            <Card className='bg-[var(--color-primary)] text-white'>
              <p className='text-xl font-semibold mb-2'>Bottom Line:</p>
              <p className='mb-4'>
                Traditional approach: Single manual review (may miss issues)
              </p>
              <p className='mb-4'>
                VelocityIQ: Three automated checkpoints identifying issues for
                your review
              </p>
              <p className='font-semibold'>
                Result: You have systematic analysis to support your quality
                control, but you make all decisions about how to address
                identified issues.
              </p>
            </Card>
          </div>
        </section>

        {/* Documentation Supporting Your Risk Management */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-4'>
              Audit Trail of Risk Identification Analysis
            </h2>
            <div className='max-w-4xl mx-auto'>
              <div className='mb-8'>
                <Image
                  src='/images/combined-documentation-trail.png'
                  alt='Split visualization linking system-generated audit trail with advisor documentation'
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
                    <li>→ Risk identification analysis performed</li>
                    <li>→ Date and time of analysis</li>
                    <li>→ Which rules were evaluated</li>
                    <li>→ What risks or issues were identified</li>
                    <li>→ Analysis output provided to advisor</li>
                  </ul>
                </Card>

                <Card>
                  <h3 className='text-xl font-semibold mb-4'>
                    What You Must Document:
                  </h3>
                  <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                    <li>→ Your review of identified risks</li>
                    <li>→ Your assessment of risk materiality</li>
                    <li>→ Which risks you discussed with client</li>
                    <li>→ Client&apos;s understanding and responses</li>
                    <li>→ Decisions made regarding risks</li>
                    <li>→ Follow-up actions planned or taken</li>
                    <li>→ Ongoing monitoring approach</li>
                  </ul>
                </Card>
              </div>

              <Card>
                <h3 className='text-2xl font-semibold mb-4'>
                  How This Supports Your Practice:
                </h3>
                <p className='text-[var(--color-text-secondary)] mb-4'>
                  When asked about risk management, you can show:
                </p>
                <ol className='space-y-3 text-[var(--color-text-secondary)]'>
                  <li>
                    <span className='font-semibold'>Systematic approach:</span>{' '}
                    &quot;I used risk identification tools&quot;
                  </li>
                  <li>
                    <span className='font-semibold'>Comprehensive review:</span>{' '}
                    &quot;All 73 rules checked my client situation&quot;
                  </li>
                  <li>
                    <span className='font-semibold'>Documented analysis:</span>{' '}
                    &quot;Here&apos;s what was identified for my review&quot;
                  </li>
                  <li>
                    <span className='font-semibold'>
                      Professional judgment:
                    </span>{' '}
                    &quot;Here&apos;s my assessment of materiality&quot;
                  </li>
                  <li>
                    <span className='font-semibold'>Client discussion:</span>{' '}
                    &quot;Here&apos;s documentation of our risk
                    conversation&quot;
                  </li>
                </ol>
                <div className='mt-6 bg-blue-50 p-4 rounded'>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    This demonstrates thoroughness while showing you made all
                    risk management decisions.
                  </p>
                </div>
                <div className='mt-4 bg-amber-50 p-4 rounded border-l-4 border-[var(--color-warning)]'>
                  <p className='font-semibold mb-2 text-sm'>
                    Important Clarification:
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)]'>
                    System documentation shows systematic risk identification
                    was performed. Your documentation shows you reviewed,
                    assessed, and acted on identified risks. Combined:
                    Demonstrates professional risk management approach.
                  </p>
                  <p className='text-sm text-[var(--color-text-secondary)] mt-2'>
                    System analysis supports but does not replace your
                    documentation of risk management decisions and client
                    discussions.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Positioning */}
        <section className='py-20 bg-[var(--color-surface)]'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-center mb-12'>
              Understanding Risk Identification Tools and Your Responsibilities
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
              <Card>
                <h3 className='text-2xl font-semibold mb-4'>
                  What Risk Identification Tools Do:
                </h3>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Systematically analyze client situations against 73 rules
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Identify potential data quality issues for your review
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Flag planning risks that may warrant consideration
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>
                      Provide analysis output for your professional evaluation
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0' />
                    <span>Support documentation of systematic approach</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className='text-2xl font-semibold mb-4'>
                  What Risk Identification Tools Do NOT Do:
                </h3>
                <ul className='space-y-2 text-[var(--color-text-secondary)]'>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>
                      Do NOT determine which risks are material for specific
                      clients
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Do NOT make disclosure decisions</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Do NOT communicate with clients about risks</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Do NOT guarantee all risks will be identified</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>Do NOT replace professional risk assessment</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <XCircle className='w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0' />
                    <span>
                      Do NOT eliminate advisor responsibility for risk
                      management
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className='mb-8'>
              <h3 className='text-2xl font-semibold mb-4'>
                Your Responsibilities:
              </h3>
              <p className='font-semibold mb-3'>
                You are solely responsible for:
              </p>
              <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                <li>→ Reviewing system-identified risks</li>
                <li>→ Assessing risk materiality and significance</li>
                <li>→ Determining appropriate disclosure</li>
                <li>→ Communicating risks to clients effectively</li>
                <li>→ Ensuring client understanding</li>
                <li>→ Documenting risk discussions</li>
                <li>→ Implementing risk mitigation strategies</li>
                <li>→ Monitoring risks on ongoing basis</li>
                <li>→ All risk management decisions</li>
                <li>→ All client communications about risks</li>
              </ul>
            </Card>

            <Card className='mb-8'>
              <h3 className='text-2xl font-semibold mb-4'>Limitations:</h3>
              <p className='font-semibold mb-3'>
                Risk identification analysis:
              </p>
              <ul className='space-y-2 text-sm text-[var(--color-text-secondary)]'>
                <li>
                  → Is based on rules and data you provide (accuracy depends on
                  inputs)
                </li>
                <li>
                  → May not identify all risks relevant to specific clients
                </li>
                <li>
                  → Cannot assess materiality or significance for individual
                  situations
                </li>
                <li>
                  → Cannot determine appropriate disclosure for specific clients
                </li>
                <li>
                  → Cannot replace your professional judgment and expertise
                </li>
                <li>→ Cannot guarantee complete risk identification</li>
                <li>→ Cannot eliminate possibility of unidentified risks</li>
              </ul>
            </Card>

            <Card className='bg-red-50 border-l-4 border-[var(--color-critical)]'>
              <h3 className='text-2xl font-semibold mb-4'>Legal Disclaimer:</h3>
              <p className='text-[var(--color-text-secondary)] mb-4'>
                VelocityIQ provides risk identification and analysis tools.
                VelocityIQ does not assess risk materiality, make disclosure
                decisions, or manage client risks. Advisors must review all
                system analysis, apply independent professional judgment, assess
                risk significance, determine appropriate disclosure, and take
                full responsibility for all risk management decisions and client
                communications.
              </p>
              <p className='text-[var(--color-text-secondary)] mb-4'>
                System analysis is provided &quot;as is&quot; without
                warranties. VelocityIQ disclaims liability for advisor risk
                management decisions, client outcomes, adequacy of risk
                identification, or any damages arising from use of risk
                identification tools.
              </p>
              <p className='text-[var(--color-text-secondary)]'>
                Use of risk identification tools does not ensure complete risk
                identification, appropriate risk disclosure, or eliminate
                advisor liability for risk management.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-[var(--color-primary)]'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl font-bold mb-4 !text-white'>
              Systematic Risk Identification Supporting Your Client Service
            </h2>
            <p className='text-xl mb-12 text-white'>
              See how VelocityIQ&apos;s 73-rule risk identification system helps
              you identify planning risks and data quality issues
              systematically—supporting your professional judgment about which
              risks to address and how to discuss them with clients.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center mb-8'>
              <Button
                href='/demo'
                variant='secondary'
                className='bg-white text-[var(--color-primary)] hover:bg-blue-50'
              >
                Watch Risk Tools Demo
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
              VelocityIQ provides risk identification tools. Advisors assess
              risk materiality, determine disclosure approach, and are solely
              responsible for all risk management decisions.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
