import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import type { Metadata } from "next";
import { Shield, AlertTriangle, FileText, Target, Zap, Layers, Building2, CheckCircle, XCircle, Eye, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Decision-Support Platform for Financial Advisors | VelocityIQ",
  description: "Integrated analysis tools from suitability evaluation to AML assessment. Comprehensive decision-support platform for professional advisory practice.",
  keywords: ["advisor platform", "financial planning software", "compliance tools", "suitability analysis platform", "risk management software", "RegTech platform", "advisor technology"],
  openGraph: {
    title: "Decision-Support Platform for Financial Advisors",
    description: "Integrated analysis tools supporting professional advisory practice",
    type: "website",
    url: "https://getvelocityiq.com/platform",
    images: [{ url: "/images/glass-box-transparent-architecture.jpg" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decision-Support Platform for Financial Advisors",
    description: "Integrated analysis tools supporting professional advisory practice",
    images: ["/images/glass-box-transparent-architecture.jpg"],
  },
  alternates: {
    canonical: "https://getvelocityiq.com/platform",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Comprehensive Decision-Support Platform: Analysis Tools from Suitability to AML
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                VelocityIQ provides integrated analysis tools supporting every aspect of advisor
                decision-making—from FINRA 2111 suitability evaluation through risk identification
                to AML assessment. All designed to support your professional judgment, not replace it.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-[var(--color-warning)]">
                <p className="font-semibold mb-2">Legal Notice:</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  VelocityIQ provides decision-support tools and analysis frameworks. Advisors are
                  solely responsible for all determinations, recommendations, and compliance obligations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seven Core Analysis Capabilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Integrated Tools Supporting Professional Advisory Practice
            </h2>
            <p className="text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto">
              Each capability provides systematic analysis tools. You review system output,
              apply professional judgment, and make all determinations and recommendations.
            </p>

            <div className="space-y-8">
              {/* Capability 1 */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white rounded-lg p-3">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold">Capability 1: FINRA 2111 Suitability Analysis Framework</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Decision-Support Foundation
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">What It Provides:</p>
                      <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                        <li>• Three-prong analysis tools (Reasonable-Basis, Customer-Specific, Quantitative)</li>
                        <li>• Investment profile structuring around FINRA&apos;s nine required factors</li>
                        <li>• Strategy evaluation methodology</li>
                        <li>• Alignment analysis and considerations</li>
                        <li>• Documentation supporting your suitability determinations</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded mb-4">
                      <p className="font-semibold mb-2 text-sm">How You Use It:</p>
                      <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                        <li>→ System structures client profile and provides analysis framework</li>
                        <li>→ You review analysis output</li>
                        <li>→ You apply professional judgment</li>
                        <li>→ You make suitability determination</li>
                        <li>→ You document your determination</li>
                        <li>→ You take responsibility for recommendations</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2 text-sm">Business Value:</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Systematic framework helps you evaluate strategies thoroughly and document your
                        determination process—while you maintain complete responsibility for all suitability
                        determinations and recommendations.
                      </p>
                    </div>
                    <Button href="/suitability" variant="primary" className="text-sm">
                      See Complete Suitability Framework →
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Capability 2 */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white rounded-lg p-3">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold">Capability 2: Risk Identification Tools (73 Validation Rules)</h3>
                      <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Planning Risk Analysis
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">What It Provides:</p>
                      <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                        <li>• 101 critical rules identifying data quality issues</li>
                        <li>• 28 warning rules flagging planning risks</li>
                        <li>• Triple-layer validation system</li>
                        <li>• Risk analysis output for your review</li>
                        <li>• Documentation supporting your risk management</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded mb-4">
                      <p className="font-semibold mb-2 text-sm">How You Use It:</p>
                      <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                        <li>→ System identifies potential risks for your consideration</li>
                        <li>→ You review identified risks and issues</li>
                        <li>→ You assess significance for each client</li>
                        <li>→ You determine which risks to discuss with clients</li>
                        <li>→ You document risk discussions and decisions</li>
                        <li>→ You take responsibility for risk management approach</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2 text-sm">Business Value:</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Systematic risk identification helps ensure thorough review while you maintain
                        professional responsibility for assessing risk materiality and managing client
                        communications.
                      </p>
                    </div>
                    <Button href="/risk-defense" variant="primary" className="text-sm">
                      Learn About Risk Identification Tools →
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Capability 3 */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white rounded-lg p-3">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold">Capability 3: Compliance Documentation Support</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Audit Trail Infrastructure
                      </span>
                    </div>
                    <div className="mb-6">
                      <Image
                        src="/images/combined-documentation-trail.png"
                        alt="Split visualization linking system-generated audit trail with advisor documentation"
                        width={1000}
                        height={600}
                        className="rounded-xl shadow-lg mx-auto"
                      />
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">What It Provides:</p>
                      <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                        <li>• Complete audit trail of analysis processes</li>
                        <li>• Source attribution (2-3 citations per fact)</li>
                        <li>• Calculation transparency (Number Audit)</li>
                        <li>• Glass-box architecture (vs. black-box AI)</li>
                        <li>• Documentation supporting regulatory examinations</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded mb-4">
                      <p className="font-semibold mb-2 text-sm">How You Use It:</p>
                      <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                        <li>→ System maintains comprehensive documentation of analysis</li>
                        <li>→ You document your review, judgments, and determinations</li>
                        <li>→ Combined documentation demonstrates systematic approach</li>
                        <li>→ Supports your responses in regulatory examinations</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2 text-sm">Business Value:</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Systematic documentation helps demonstrate thorough analysis process while you
                        maintain responsibility for all professional determinations and compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Capability 4 */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white rounded-lg p-3">
                    <Target className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold">Capability 4: FinCEN-Aligned AML Risk Assessment Framework</h3>
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Financial Crime Risk Analysis
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">What It Provides:</p>
                      <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                        <li>• Seven-dimension risk analysis framework</li>
                        <li>• Dual scoring (inherent + residual risk)</li>
                        <li>• Risk tier mapping suggestions</li>
                        <li>• AI-generated contextual analysis</li>
                        <li>• Confidential documentation for AML files</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded mb-4">
                      <p className="font-semibold mb-2 text-sm">How You Use It:</p>
                      <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                        <li>→ System provides structured risk assessment framework</li>
                        <li>→ You review risk analysis output</li>
                        <li>→ You make final AML risk determination</li>
                        <li>→ You determine appropriate due diligence level</li>
                        <li>→ You implement required CDD/EDD procedures</li>
                        <li>→ You take responsibility for AML compliance</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2 text-sm">Business Value:</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Structured risk framework supports your AML compliance process while you maintain
                        responsibility for all risk determinations and due diligence decisions.
                      </p>
                    </div>
                    <Button href="/risk-assessment" variant="primary" className="text-sm">
                      Explore AML Assessment Framework →
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Capability 5 */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white rounded-lg p-3">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold">Capability 5: In-Meeting Scenario Analysis</h3>
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Real-Time Intelligence
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">What It Provides:</p>
                      <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                        <li>• 40-second scenario generation capability</li>
                        <li>• Side-by-side comparison with baseline</li>
                        <li>• Up to 8 client questions per scenario</li>
                        <li>• Full analysis framework maintained at speed</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded mb-4">
                      <p className="font-semibold mb-2 text-sm">How You Use It:</p>
                      <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                        <li>→ System generates rapid scenario analysis</li>
                        <li>→ You present scenarios to clients during meetings</li>
                        <li>→ You use analysis to support client discussions</li>
                        <li>→ You apply judgment to scenario implications</li>
                        <li>→ You make recommendations based on your assessment</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2 text-sm">Business Value:</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Rapid scenario capability helps you explore alternatives with clients efficiently
                        while you maintain responsibility for all recommendations and advice.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Capability 6 */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white rounded-lg p-3">
                    <Layers className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold">Capability 6: Multi-Layer Intelligence Integration</h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Comprehensive Data Integration
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">What It Provides:</p>
                      <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                        <li>• RAG knowledge base (200K cited words per niche)</li>
                        <li>• Live market data integration (Perplexity API)</li>
                        <li>• Personal client context</li>
                        <li>• Validated calculations</li>
                        <li>• Transparent formulas</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded mb-4">
                      <p className="font-semibold mb-2 text-sm">How You Use It:</p>
                      <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                        <li>→ System integrates multiple data sources for analysis</li>
                        <li>→ You review integrated information</li>
                        <li>→ You verify accuracy and relevance</li>
                        <li>→ You apply judgment to information</li>
                        <li>→ You determine how to use in client service</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2 text-sm">Business Value:</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Comprehensive intelligence helps inform your professional judgment while you
                        remain responsible for all client advice and recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Capability 7 */}
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-primary)] text-white rounded-lg p-3">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold">Capability 7: Niche-Specific Analysis Frameworks</h3>
                      <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Specialized Expertise
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">What It Provides:</p>
                      <div className="mb-3">
                        <p className="font-semibold text-sm mb-2">Current (January 2026 pilot):</p>
                        <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                          <li>• Business-owning HNWI analysis tools (production-ready)</li>
                          <li>• Tech founder-specific frameworks (ISO, NSO, RSU, QSBS, AMT, 83(b))</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-2">Post-pilot roadmap:</p>
                        <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                          <li>• Medical professionals (practice valuation, partnership)</li>
                          <li>• Real estate professionals</li>
                          <li>• Corporate executives</li>
                          <li>• [Additional niches based on advisor needs]</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded mb-4">
                      <p className="font-semibold mb-2 text-sm">How You Use It:</p>
                      <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                        <li>→ System provides niche-specific analysis frameworks</li>
                        <li>→ You review specialized analysis</li>
                        <li>→ You apply your expertise to client situation</li>
                        <li>→ You make determinations appropriate for this client</li>
                        <li>→ You take responsibility for specialized advice</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2 text-sm">Business Value:</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Specialized frameworks support your service to complex clients while you maintain
                        professional responsibility for all niche-specific advice and recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8">
              Glass-Box Platform: Transparency Supporting Professional Confidence
            </h2>
            <div className="mb-12">
              <Image
                src="/images/glass-box-transparent-architecture.v2.png"
                alt="Glass-box transparent platform architecture visualization"
                width={1200}
                height={600}
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Why Transparency Matters:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)]">
                    <p className="font-semibold mb-2">Black-box AI:</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                    &quot;The system says this is suitable&quot; → No rationale, no confidence
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border-l-4 border-[var(--color-success)]">
                    <p className="font-semibold mb-2">Glass-box architecture:</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                    &quot;Here&apos;s the analysis framework and reasoning&quot; → You can verify, understand, and make informed determinations
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <Eye className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Deterministic Rules</h3>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Clearly defined evaluation logic</li>
                    <li>• Consistent application across all clients</li>
                    <li>• Explicit thresholds and criteria</li>
                    <li>• Transparent decision points</li>
                    <li>• You can understand and verify all rules</li>
                  </ul>
                </Card>

                <Card>
                  <FileText className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Source Attribution</h3>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• 2-3 citations per factual statement</li>
                    <li>• Referenced to authoritative sources</li>
                    <li>• Verifiable information</li>
                    <li>• You can check sources yourself</li>
                    <li>• Builds confidence in information quality</li>
                  </ul>
                </Card>

                <Card>
                  <Layers className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Calculation Transparency (Number Audit)</h3>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Every calculation shows formula</li>
                    <li>• Input values documented</li>
                    <li>• Step-by-step computation</li>
                    <li>• You can verify all math</li>
                    <li>• No hidden calculations</li>
                  </ul>
                </Card>

                <Card>
                  <Shield className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Complete Audit Trail</h3>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Every analysis step documented</li>
                    <li>• Timestamp and user records</li>
                    <li>• Decision points captured</li>
                    <li>• You can demonstrate systematic process</li>
                    <li>• Supports regulatory examinations</li>
                  </ul>
                </Card>
              </div>

              <Card className="bg-blue-50 mb-6">
                <h3 className="text-xl font-semibold mb-4">Business Value:</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  Transparency allows you to:
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>→ Understand how analysis was generated</li>
                  <li>→ Verify accuracy and appropriateness</li>
                  <li>→ Confidently apply analysis to determinations</li>
                  <li>→ Explain methodology to clients and regulators</li>
                  <li>→ Maintain professional control over process</li>
                </ul>
              </Card>

              <Card className="bg-amber-50 border-l-4 border-[var(--color-warning)]">
                <p className="font-semibold mb-2">Legal Positioning:</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Glass-box architecture shows you the analysis process, but you remain responsible
                  for verifying accuracy, applying professional judgment, and making all determinations.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Privacy and Security */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Enterprise-Grade Security for Sensitive Client Information 
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="mb-6">
                <Lock className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Security Measures:</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>• Data encryption in transit</li>
                  <li>• Secure cloud infrastructure (Azure)</li>
                  <li>• Compliance with data protection standards</li>
                </ul>
              </Card>

              <Card className="bg-blue-50 mb-6">
                <h3 className="text-xl font-semibold mb-4">Your Responsibilities:</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>→ Ensure appropriate data handling under your firm&apos;s policies</li>
                  <li>→ Maintain client confidentiality</li>
                  <li>→ Follow data protection regulations</li>
                  <li>→ Implement appropriate access controls</li>
                  <li>→ Monitor data usage and security</li>
                </ul>
              </Card>

              <Card className="bg-amber-50 border-l-4 border-[var(--color-warning)]">
                <p className="font-semibold mb-2">Legal Notice:</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  While VelocityIQ implements security measures, advisors and firms remain responsible
                  for data protection compliance, client confidentiality, and appropriate data handling
                  under all applicable regulations and firm policies.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Positioning */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Understanding Platform Capabilities and Your Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <h3 className="text-2xl font-semibold mb-4">What the Platform Provides:</h3>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Analysis tools and evaluation frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Data structuring and organization capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Systematic methodology support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Documentation infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Intelligence integration capabilities</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-2xl font-semibold mb-4">What the Platform Does NOT Provide:</h3>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Investment advice or recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Suitability determinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Risk management decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Compliance certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Guarantee of regulatory compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Elimination of advisor responsibility</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="bg-blue-50 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Your Responsibilities When Using Platform:</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                You remain solely responsible for:
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>→ All professional determinations and judgments</li>
                <li>→ All client recommendations and advice</li>
                <li>→ All suitability determinations</li>
                <li>→ All risk management decisions</li>
                <li>→ All AML compliance obligations</li>
                <li>→ All client communications</li>
                <li>→ All documentation of your determinations</li>
                <li>→ Supervision of platform use</li>
                <li>→ Compliance with all regulations</li>
                <li>→ All aspects of client relationships</li>
              </ul>
            </Card>

            <Card className="bg-red-50 border-l-4 border-[var(--color-critical)]">
              <h3 className="text-2xl font-semibold mb-4">Legal Disclaimer:</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                VelocityIQ provides technology-based decision-support tools. VelocityIQ does not
                make professional determinations, provide investment advice, or act as investment
                advisor or broker-dealer. All determinations, recommendations, and advice must be
                made by licensed financial professionals who review system analysis, apply independent
                judgment, and take full responsibility for their decisions.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Platform capabilities are provided &quot;as is&quot; without warranties. VelocityIQ disclaims
                liability for advisor determinations, client outcomes, regulatory compliance, or
                any damages arising from use of platform.
              </p>
              <p className="text-[var(--color-text-secondary)]">
                Use of platform does not ensure regulatory compliance or eliminate advisor liability.
                Users are solely responsible for all professional activities and compliance obligations.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 !text-white">
              Comprehensive Analysis Tools Supporting Professional Advisory Practice
            </h2>
            <p className="text-xl mb-12 text-white">
              See how VelocityIQ&apos;s integrated platform provides analysis tools for every aspect
              of your advisory practice—from suitability evaluation through risk identification
              to AML assessment—all designed to support your professional judgment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button href="/demo" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Watch Platform Demo
              </Button>
              <Button href="/book" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Apply for January Pilot
              </Button>
            </div>
            <p className="text-white text-sm">
              Platform provides analysis tools. Advisors make all determinations and are solely
              responsible for recommendations and compliance.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
