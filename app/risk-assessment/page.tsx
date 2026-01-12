import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import type { Metadata } from "next";
import { Target, Scale, CheckCircle, XCircle, Shield, FileText, Users, Globe, Building2, TrendingUp, Activity, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "AML Risk Assessment Framework | FinCEN-Aligned CDD Tools",
  description: "FinCEN-aligned AML risk assessment with 7-dimension analysis. Support your customer due diligence determinations with structured risk evaluation framework.",
  keywords: ["AML risk assessment", "FinCEN compliance", "customer due diligence", "enhanced due diligence", "BSA compliance tools", "financial crime risk", "AML compliance software"],
  openGraph: {
    title: "AML Risk Assessment Framework - FinCEN-Aligned CDD Tools",
    description: "Structured AML risk analysis supporting advisor due diligence determinations",
    type: "website",
    url: "https://getvelocityiq.com/risk-assessment",
    images: [{ url: "/images/dual-risk-scoring-advisor-assessment.jpg" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AML Risk Assessment Framework - FinCEN-Aligned CDD Tools",
    description: "Structured AML risk analysis supporting advisor due diligence determinations",
    images: ["/images/dual-risk-scoring-advisor-assessment.jpg"],
  },
  alternates: {
    canonical: "https://getvelocityiq.com/risk-assessment",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RiskAssessmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                FinCEN-Aligned AML Risk Assessment Framework: Supporting Your Due Diligence Process
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                VelocityIQ provides structured AML risk analysis tools aligned with FinCEN guidelines—
                helping you evaluate client financial crime risk across multiple dimensions. You apply
                professional judgment to assessment results and determine appropriate CDD/EDD actions.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-[var(--color-warning)]">
                <p className="font-semibold mb-2">Legal Notice:</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  VelocityIQ provides AML risk analysis tools and frameworks. Advisors and compliance
                  professionals are solely responsible for making final AML risk assessments, determining
                  appropriate due diligence levels, and complying with all AML/BSA requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What AML Risk Assessment Tools Provide */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Decision-Support for Customer Due Diligence Obligations
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">The Regulatory Requirement:</h3>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Financial institutions must assess customer risk for anti-money laundering and
                  financial crime exposure as part of Customer Due Diligence (CDD) and Enhanced
                  Due Diligence (EDD) requirements.
                </p>
                <div className="mb-6">
                  <p className="font-semibold mb-3">The Challenge:</p>
                  <p className="text-[var(--color-text-secondary)] mb-3">
                    Manual AML risk assessment is:
                  </p>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>• Time-consuming and inconsistent</li>
                    <li>• Difficult to document systematically</li>
                    <li>• Hard to scale across client base</li>
                    <li>• Challenging to update as situations change</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded mb-6">
                  <p className="font-semibold mb-2">How VelocityIQ Supports This:</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                    Structured risk assessment framework that:
                  </p>
                  <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                    <li>→ Evaluates clients across 7 risk dimensions</li>
                    <li>→ Calculates risk scoring for your review</li>
                    <li>→ Maps scores to risk tier framework</li>
                    <li>→ Suggests CDD/EDD considerations</li>
                    <li>→ Documents analysis for your AML file</li>
                  </ul>
                  <p className="mt-3 font-semibold text-sm">
                    You review the analysis, apply your judgment, and make final risk determination.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <p className="font-semibold mb-2">Your Responsibilities:</p>
                  <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                    <li>✓ Review system-generated risk analysis</li>
                    <li>✓ Consider additional factors not captured</li>
                    <li>✓ Make final AML risk assessment</li>
                    <li>✓ Determine appropriate due diligence level (CDD/EDD)</li>
                    <li>✓ Implement required due diligence procedures</li>
                    <li>✓ Document your risk assessment and actions</li>
                    <li>✓ Monitor client risk on ongoing basis</li>
                    <li>✓ Report suspicious activity as required</li>
                    <li>✓ Comply with all AML/BSA regulations</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Dual Risk Scoring Framework */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8">
              Two Complementary Risk Scores for Your Assessment
            </h2>
            <div className="mb-12">
              <Image
                src="/images/dual-risk-scoring-advisor-assessment.v3.png"
                alt="Dual risk scoring framework showing inherent and residual risk"
                width={1200}
                height={600}
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card hover>
                <Target className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Score 1: Inherent Risk Analysis</h3>
                <div className="mb-4">
                  <p className="font-semibold mb-2">What It Analyzes:</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                    Baseline risk level based on client characteristics:
                  </p>
                  <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                    <li>• Geographic exposure (country-based risk)</li>
                    <li>• Industry sector (business activity risk)</li>
                    <li>• Client type (entity structure complexity)</li>
                    <li>• Product/service complexity</li>
                    <li>• Source of wealth transparency</li>
                    <li>• PEP (Politically Exposed Person) status</li>
                    <li>• Adverse media presence</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="font-semibold mb-2 text-sm">How Scoring Works:</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-2">
                    Each dimension scored 1 (lower risk) to 5 (higher risk)
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-2">
                    Scores aggregated for total inherent risk score
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Provides baseline risk profile for your assessment
                  </p>
                  <p className="font-semibold mt-3 mb-2 text-sm">Your Use:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Review inherent risk score and component factors</li>
                    <li>→ Consider whether scoring reflects your understanding</li>
                    <li>→ Assess if additional factors should be considered</li>
                    <li>→ Use as starting point for your risk determination</li>
                  </ul>
                </div>
              </Card>

              <Card hover>
                <Scale className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Score 2: Residual Risk Analysis</h3>
                <div className="mb-4">
                  <p className="font-semibold mb-2">What It Considers:</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                    Adjusted risk after accounting for:
                  </p>
                  <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                    <li>• Data quality and completeness</li>
                    <li>• Validation rule outcomes</li>
                    <li>• Documentation availability</li>
                    <li>• Control effectiveness</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="font-semibold mb-2 text-sm">How Adjustment Works:</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-2">
                    System evaluates:
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)] mb-2">
                    <li>→ If data quality controls passed (may reduce residual risk)</li>
                    <li>→ If critical validation issues identified (may increase residual risk)</li>
                    <li>→ Documentation completeness and quality</li>
                    <li>→ Overall control environment effectiveness</li>
                  </ul>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-3">
                    Provides adjusted risk score for your assessment
                  </p>
                  <p className="font-semibold mb-2 text-sm">Your Use:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Review how controls affected risk scoring</li>
                    <li>→ Assess whether adjustments are appropriate</li>
                    <li>→ Consider additional control factors</li>
                    <li>→ Use as input to your final risk determination</li>
                  </ul>
                </div>
              </Card>
            </div>

            <Card className="bg-amber-50 border-l-4 border-[var(--color-warning)]">
              <p className="font-semibold mb-2">Critical Clarification:</p>
              <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                <li>• System provides risk scoring analysis.</li>
                <li>• You determine whether scores accurately reflect client risk.</li>
                <li>• You make final AML risk assessment.</li>
                <li>• You determine appropriate due diligence level.</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Seven Risk Assessment Dimensions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8">
              Comprehensive Risk Factor Analysis Framework
            </h2>
            <div className="mb-12">
              <Image
                src="/images/seven-dimensions-advisor-checkpoints.v2.png"
                alt="Seven risk dimension cards showing advisor review checkpoints"
                width={1200}
                height={600}
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card hover>
                <Building2 className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dimension 1: Client Type</h3>
                <p className="font-semibold mb-2 text-sm">Analysis considers:</p>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)] mb-4">
                  <li>• Individual vs. business entity</li>
                  <li>• Private company vs. public company</li>
                  <li>• High-risk business classifications</li>
                  <li>• Regulated financial institution status</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-1 text-xs">For your assessment:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Review classification accuracy</li>
                    <li>→ Consider entity complexity factors</li>
                    <li>→ Assess ownership transparency</li>
                    <li>→ Determine appropriate documentation needs</li>
                  </ul>
                </div>
              </Card>

              <Card hover>
                <Globe className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dimension 2: Geographic Risk</h3>
                <p className="font-semibold mb-2 text-sm">Analysis considers:</p>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)] mb-4">
                  <li>• Country/jurisdiction exposure</li>
                  <li>• Risk ratings for countries involved</li>
                  <li>• Cross-border transaction patterns</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-1 text-xs">For your assessment:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Verify geographic exposure accuracy</li>
                    <li>→ Consider additional jurisdictions</li>
                    <li>→ Assess transaction pattern implications</li>
                    <li>→ Determine enhanced monitoring needs</li>
                  </ul>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-2 italic">
                    Current: US-focused (framework ready for international expansion)
                  </p>
                </div>
              </Card>

              <Card hover>
                <TrendingUp className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dimension 3: Industry Risk</h3>
                <p className="font-semibold mb-2 text-sm">Analysis categorizes industries as:</p>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)] mb-4">
                  <li>• Lower risk (professional services, technology)</li>
                  <li>• Medium risk (real estate, luxury goods)</li>
                  <li>• Higher risk (cash-intensive, cryptocurrency, certain high-risk sectors)</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-1 text-xs">For your assessment:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Confirm industry classification</li>
                    <li>→ Consider specific business activities</li>
                    <li>→ Assess actual risk vs. industry category</li>
                    <li>→ Determine sector-appropriate due diligence</li>
                  </ul>
                </div>
              </Card>

              <Card hover>
                <FileText className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dimension 4: Source of Wealth</h3>
                <p className="font-semibold mb-2 text-sm">Analysis evaluates:</p>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)] mb-4">
                  <li>• Transparency of wealth sources</li>
                  <li>• Documentation quality and completeness</li>
                  <li>• Clarity of income/asset origins</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-1 text-xs">For your assessment:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Review documentation adequacy</li>
                    <li>→ Determine if additional documentation needed</li>
                    <li>→ Assess transparency and plausibility</li>
                    <li>→ Decide on appropriate verification level</li>
                  </ul>
                </div>
              </Card>

              <Card hover>
                <Shield className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dimension 5: Product/Service Complexity</h3>
                <p className="font-semibold mb-2 text-sm">Analysis considers:</p>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)] mb-4">
                  <li>• Types of products/services used</li>
                  <li>• Complexity level (simple to complex)</li>
                  <li>• Risk characteristics of offerings</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-1 text-xs">For your assessment:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Verify product usage accuracy</li>
                    <li>→ Consider complexity implications</li>
                    <li>→ Assess appropriateness for client type</li>
                    <li>→ Determine monitoring approach</li>
                  </ul>
                </div>
              </Card>

              <Card hover>
                <Activity className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dimension 6: Activity Profile</h3>
                <p className="font-semibold mb-2 text-sm">Analysis evaluates:</p>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)] mb-4">
                  <li>• Transaction patterns and frequency</li>
                  <li>• Volume and size characteristics</li>
                  <li>• Geographic distribution</li>
                  <li>• Unusual activity indicators</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-1 text-xs">For your assessment:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Review pattern analysis</li>
                    <li>→ Assess if patterns are reasonable</li>
                    <li>→ Identify any unusual characteristics</li>
                    <li>→ Determine appropriate monitoring level</li>
                  </ul>
                </div>
              </Card>

              <Card hover>
                <AlertTriangle className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dimension 7: PEP/Adverse Media</h3>
                <p className="font-semibold mb-2 text-sm">Analysis flags:</p>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)] mb-4">
                  <li>• Politically Exposed Person status</li>
                  <li>• Negative media coverage</li>
                  <li>• Sanctions list presence</li>
                  <li>• Regulatory action history</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-1 text-xs">For your assessment:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Verify PEP status accuracy</li>
                    <li>→ Review adverse media findings</li>
                    <li>→ Assess significance of issues</li>
                    <li>→ Determine enhanced due diligence needs</li>
                  </ul>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-2 italic">
                    Current: Requires manual input (framework ready for automated screening integration)
                  </p>
                </div>
              </Card>
            </div>

            <Card className="bg-green-50 border-l-4 border-[var(--color-success)]">
              <p className="font-semibold mb-2">Your Professional Judgment Required:</p>
              <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                <li>• System provides analysis across dimensions.</li>
                <li>• You assess whether analysis accurately reflects client risk.</li>
                <li>• You consider factors not captured by system.</li>
                <li>• You make final risk determination for each dimension.</li>
                <li>• You determine overall client risk assessment.</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Risk Tier Framework */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Suggested Risk Classification for Your Assessment
            </h2>
            <p className="text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto">
              System maps risk scores to suggested tier framework. You review suggested tier and make final determination.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="border-2 border-[var(--color-success)]">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[var(--color-success)] text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    L
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--color-success)] mb-2">Lower Risk Tier</h3>
                  <p className="text-sm font-semibold">(Suggested for scores 0-8)</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2 text-sm">Typical Characteristics:</p>
                  <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                    <li>• Domestic operations, transparent industries</li>
                    <li>• Simple products, clear wealth sources</li>
                    <li>• No PEP/adverse media concerns</li>
                    <li>• Strong documentation</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <p className="font-semibold mb-2 text-sm">CDD/EDD Considerations for Your Review:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Standard Customer Due Diligence may be appropriate</li>
                    <li>→ Annual review cadence may be sufficient</li>
                    <li>→ Standard documentation requirements</li>
                    <li>→ Normal monitoring procedures</li>
                  </ul>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-3 italic">
                    You determine actual due diligence requirements based on your assessment.
                  </p>
                </div>
              </Card>

              <Card className="border-2 border-[var(--color-warning)]">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[var(--color-warning)] text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    M
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--color-warning)] mb-2">Medium Risk Tier</h3>
                  <p className="text-sm font-semibold">(Suggested for scores 9-16)</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2 text-sm">Typical Characteristics:</p>
                  <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                    <li>• Some elevated risk factors present</li>
                    <li>• Industry or activity requires attention</li>
                    <li>• Geographic considerations</li>
                    <li>• Documentation adequate but with gaps</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded">
                  <p className="font-semibold mb-2 text-sm">CDD/EDD Considerations for Your Review:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Enhanced monitoring may be appropriate</li>
                    <li>→ More frequent review cadence (semi-annual/quarterly) may be warranted</li>
                    <li>→ Additional documentation may be advisable</li>
                    <li>→ Increased scrutiny of transactions may be appropriate</li>
                  </ul>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-3 italic">
                    You determine actual due diligence requirements based on your assessment.
                  </p>
                </div>
              </Card>

              <Card className="border-2 border-[var(--color-critical)]">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[var(--color-critical)] text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    H
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--color-critical)] mb-2">Higher Risk Tier</h3>
                  <p className="text-sm font-semibold">(Suggested for scores 17+)</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2 text-sm">Typical Characteristics:</p>
                  <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                    <li>• Multiple elevated risk factors</li>
                    <li>• High-risk industry or jurisdiction</li>
                    <li>• PEP involvement or adverse media</li>
                    <li>• Complex structures or unclear sources</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded">
                  <p className="font-semibold mb-2 text-sm">CDD/EDD Considerations for Your Review:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Enhanced Due Diligence likely required</li>
                    <li>→ Senior management approval may be needed</li>
                    <li>→ Intensive ongoing monitoring may be appropriate</li>
                    <li>→ Comprehensive documentation likely needed</li>
                    <li>→ Frequent review cadence (quarterly or more) may be warranted</li>
                    <li>→ Consider whether relationship can be managed within risk appetite</li>
                  </ul>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-3 italic">
                    You determine actual due diligence requirements based on your assessment.
                  </p>
                </div>
              </Card>
            </div>

            <Card className="bg-red-50 border-l-4 border-[var(--color-critical)]">
              <p className="font-semibold mb-2">Critical Notice:</p>
              <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                <li>• System suggests risk tier based on scoring analysis.</li>
                <li>• You determine whether suggested tier is appropriate.</li>
                <li>• You make final risk classification.</li>
                <li>• You determine appropriate due diligence level.</li>
                <li>• You implement required due diligence procedures.</li>
                <li>• You remain responsible for all AML compliance decisions.</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* AI-Powered Risk Analysis */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Contextual Risk Insights for Your Consideration
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">What AI Analysis Provides:</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  System generates contextual analysis including:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] mb-6">
                  <li>• Plain-language interpretation of risk scoring</li>
                  <li>• Key risk drivers identified</li>
                  <li>• Risk mitigation considerations</li>
                  <li>• Monitoring approach suggestions</li>
                  <li>• Factors warranting attention</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm">
                  <p className="font-bold mb-2">Example AI Analysis Output:</p>
                  <p className="font-bold mb-2">AI RISK ANALYSIS (For Advisor Review)</p>
                  <div className="space-y-4 mt-4">
                    <div>
                      <p className="font-semibold mb-1">Risk Profile:</p>
                      <p className="text-[var(--color-text-secondary)]">
                        Based on analysis framework, this client presents medium risk profile
                        primarily driven by industry sector exposure and transaction complexity.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Key Risk Drivers Identified:</p>
                      <ul className="list-disc list-inside space-y-1 text-[var(--color-text-secondary)]">
                        <li>Industry: Cryptocurrency sector carries inherent AML risks</li>
                        <li>Transactions: Cross-border patterns warrant monitoring</li>
                        <li>Documentation: Source of wealth documented but sector-specific risks remain</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Mitigating Factors Noted:</p>
                      <ul className="list-disc list-inside space-y-1 text-[var(--color-text-secondary)]">
                        <li>Strong source of wealth documentation provided</li>
                        <li>Transparent business operations disclosed</li>
                        <li>No PEP status or adverse media identified</li>
                        <li>Comprehensive financial information available</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Considerations for Your Assessment:</p>
                      <ul className="list-disc list-inside space-y-1 text-[var(--color-text-secondary)]">
                        <li>Enhanced monitoring may be appropriate given sector risk</li>
                        <li>Detailed documentation of cryptocurrency sources may be advisable</li>
                        <li>Transaction pattern monitoring for unusual geographic concentrations</li>
                        <li>Regular review cadence due to evolving regulatory landscape</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded mt-4">
                      <p className="font-semibold mb-2">ADVISOR ACTION REQUIRED:</p>
                      <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                        <li>→ Review this analysis in context of complete client relationship</li>
                        <li>→ Verify accuracy of identified risk factors</li>
                        <li>→ Assess whether additional factors should be considered</li>
                        <li>→ Apply your professional judgment</li>
                        <li>→ Make final AML risk assessment</li>
                        <li>→ Determine appropriate due diligence level</li>
                        <li>→ Document your determination and actions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-amber-50 p-4 rounded border-l-4 border-[var(--color-warning)]">
                  <p className="font-semibold mb-2 text-sm">Transparency Note:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>• AI-generated analysis clearly labeled as AI &quot;ANALYSIS&quot;</li>
                    <li>• Provided for your consideration only</li>
                    <li>• You determine whether analysis is accurate and appropriate</li>
                    <li>• You make all AML risk and due diligence determinations</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Confidential Advisor-Only Reporting */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Separate AML Risk Documentation
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <h3 className="text-xl font-semibold mb-4">What System Generates:</h3>
                  <p className="text-sm font-semibold mb-2">Confidential analysis report (separate from client reports) including:</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>→ Complete risk scoring breakdown</li>
                    <li>→ Dimension-by-dimension analysis</li>
                    <li>→ Suggested risk tier</li>
                    <li>→ AI-generated risk analysis</li>
                    <li>→ CDD/EDD considerations</li>
                    <li>→ Documentation for your AML file</li>
                  </ul>
                </Card>

                <Card>
                  <h3 className="text-xl font-semibold mb-4">Confidentiality:</h3>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Analysis is advisor/compliance-only</li>
                    <li>• Not shared with clients</li>
                    <li>• Supports your internal AML processes</li>
                    <li>• Maintains confidentiality of risk assessments</li>
                  </ul>
                </Card>
              </div>

              <Card>
                <h3 className="text-xl font-semibold mb-4">Your Use:</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] mb-6">
                  <li>→ Review for your risk assessment process</li>
                  <li>→ Support your CDD/EDD determination</li>
                  <li>→ Document in your AML compliance file</li>
                  <li>→ Use for internal risk management</li>
                  <li>→ Support supervisory review</li>
                  <li>→ Maintain for regulatory examinations</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="font-semibold mb-2 text-sm">Your Documentation Requirements:</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-2">
                    Beyond system analysis, you must document:
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Your review of system analysis</li>
                    <li>→ Additional factors you considered</li>
                    <li>→ Your final risk assessment determination</li>
                    <li>→ Due diligence level determination</li>
                    <li>→ Actions taken or planned</li>
                    <li>→ Ongoing monitoring approach</li>
                    <li>→ Supervisory review and approval</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Positioning and Disclaimers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Understanding AML Risk Assessment Tools and Your Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <h3 className="text-2xl font-semibold mb-4">What AML Risk Assessment Tools Provide:</h3>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Structured risk analysis framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Multi-dimensional risk factor evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Risk scoring methodology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Tier mapping suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>AI-generated contextual analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Documentation supporting your AML file</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-2xl font-semibold mb-4">What AML Risk Assessment Tools Do NOT Provide:</h3>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Final AML risk determinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Due diligence level decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Compliance certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Guarantee of complete risk identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Suspicious activity determinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Regulatory compliance assurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Elimination of advisor/compliance responsibility</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="bg-red-50 border-l-4 border-[var(--color-critical)]">
              <h3 className="text-2xl font-semibold mb-4">IMPORTANT LEGAL NOTICE:</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                VelocityIQ provides AML risk assessment tools and analysis frameworks. VelocityIQ
                does not make AML risk determinations, determine due diligence requirements, or
                provide AML compliance services.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-4">
                All AML risk assessments, due diligence determinations, suspicious activity
                identification, and AML/BSA compliance obligations must be fulfilled by licensed
                financial professionals and compliance officers who review system analysis, apply
                independent professional judgment, and take full responsibility for AML compliance.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-4">
                System analysis is provided &quot;as is&quot; without warranties. VelocityIQ disclaims
                liability for AML risk assessments, due diligence determinations, compliance
                decisions, regulatory outcomes, or any damages arising from use of AML risk
                assessment tools.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Use of AML risk assessment tools does not ensure AML/BSA compliance, complete
                risk identification, appropriate due diligence, or eliminate advisor/firm liability
                for AML compliance.
              </p>
              <p className="text-[var(--color-text-secondary)]">
                Users must comply with all applicable AML/BSA regulations, maintain appropriate
                policies and procedures, conduct required due diligence, and fulfill all reporting
                obligations regardless of system analysis output.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 !text-white">
              AML Risk Assessment Framework Supporting Your Due Diligence Process
            </h2>
            <p className="text-xl mb-12 text-white">
              See how VelocityIQ&apos;s FinCEN-aligned risk assessment framework provides structured
              analysis across seven risk dimensions—supporting your professional judgment in
              making AML risk determinations and due diligence decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button href="/demo" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Watch AML Tools Demo
              </Button>
              <Button href="/book" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Apply for January Pilot
              </Button>
            </div>
            <p className="text-white text-sm">
              VelocityIQ provides AML risk assessment tools. Advisors and compliance professionals
              make final risk determinations, due diligence decisions, and are solely responsible
              for AML/BSA compliance.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}






























