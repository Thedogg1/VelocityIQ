import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Shield, FileText, Zap, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                  When Regulators Ask "Why This Recommendation?", You'll Have Answers
                </h1>
                <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                  VelocityIQ delivers the liability defense RIAs need first, compliance
                  documentation regulators demand second, and AI-powered intelligence that
                  differentiates your platform third. Built by banking-grade developers.
                  Compliant by default.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button href="/demo" variant="primary">
                    Watch 10-Minute Demo
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-[var(--color-text-secondary)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    <span>101 validation rules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    <span>Triple-layer validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    <span>Complete audit trail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)]" />
                    <span>Serving the 1.5M HNWI opportunity</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/hero-audit-trail.png"
                  alt="Professional advisor reviewing transparent audit trail"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Liability Question Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              The Question That Keeps Compliance Officers Awake
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - The Exposure */}
              <Card>
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-4">The Exposure</h3>
                  <p className="text-lg font-medium mb-4">
                    Scenario: Client's attorney asks: "Did your advisor identify and
                    disclose this concentration risk?"
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Relies on advisor memory and handwritten notes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>No systematic risk identification process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Subjective, incomplete documentation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Weak defense: "I think we discussed it"</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Discovery reveals gaps in documentation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[var(--color-critical)] mt-0.5 flex-shrink-0" />
                    <span>Settlement pressure, reputation damage, rising E&O premiums</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-[var(--color-critical)] rounded">
                  <p className="font-semibold text-[var(--color-critical)]">
                    Legal Exposure: HIGH
                  </p>
                </div>
              </Card>

              {/* Right Column - The Defense */}
              <Card>
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-4">The Defense</h3>
                  <p className="text-lg font-medium mb-4">
                    Scenario: Client's attorney asks: "Did your advisor identify and
                    disclose this concentration risk?"
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>
                      Warnings Report systematically flagged concentration risk on [date]
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>101 validation rules checked and documented</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Warning shared with client via email (delivery timestamp)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Strong defense: "Here's the documented warning we provided"</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Discovery shows systematic, documented process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Case dismissal or favorable settlement</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 border-l-4 border-[var(--color-success)] rounded">
                  <p className="font-semibold text-[var(--color-success)]">
                    Legal Exposure: LOW
                  </p>
                </div>
              </Card>
            </div>
            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-[var(--color-primary)] rounded-lg">
              <p className="font-semibold mb-2">The Legal Principle:</p>
              <p className="mb-2">
                If a risk was identified by validation system → documented in warnings file
                → shared with client = <strong>Strong advisor defense</strong>
              </p>
              <p>
                If not identified or not disclosed → No documentation ={" "}
                <strong>Advisor liability exposure</strong>
              </p>
            </div>
            <div className="text-center mt-8">
              <Button href="/risk-defense" variant="primary">
                See Complete Liability Defense System →
              </Button>
            </div>
          </div>
        </section>

        {/* Risk Mitigation: The Primary Value */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Liability Defense: The Non-Negotiable First Benefit
            </h2>
            <p className="text-xl text-center text-[var(--color-text-secondary)] mb-16 max-w-3xl mx-auto">
              Risk mitigation isn't a feature—it's the foundation. Industry research shows
              RIAs adopt AI compliance tools primarily to reduce risk and avoid costly
              errors, not for innovation's sake. VelocityIQ was architected from day one to
              serve this primary need.
            </p>

            {/* Three Risk Mitigation Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card hover>
                <div className="mb-4">
                  <Shield className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">
                    Systematic Risk Identification
                  </h3>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2">The Problem:</p>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    Advisors miss critical risks through oversight, time pressure, or
                    knowledge gaps. Undocumented risk = liability exposure.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">VelocityIQ Solution:</p>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>• 101 deterministic validation rules check every client engagement</li>
                    <li>• 65 critical rules STOP generation if data errors detected</li>
                    <li>• 28 warning rules FLAG risks requiring advisor attention</li>
                    <li>
                      • Portfolio concentration, insurance gaps, tax exposure, estate
                      planning issues all systematically checked
                    </li>
                  </ul>
                </div>
                <p className="mt-4 font-semibold text-[var(--color-primary)]">
                  Result: Risk identification no longer dependent on individual advisor
                  memory or judgment. It's systematic, documented, and defensible.
                </p>
              </Card>

              <Card hover>
                <div className="mb-4">
                  <FileText className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Documented Disclosure</h3>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2">The Problem:</p>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    "He said / she said" disputes. Client claims advisor never warned about
                    risk. Advisor has no documentation proving otherwise.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">VelocityIQ Solution:</p>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>• Warnings Report documents all identified risks with timestamp</li>
                    <li>• Each warning categorized: "Warning" or "Critical"</li>
                    <li>• Advisor reviews warnings before client delivery</li>
                    <li>• Warnings file shared with client = documented disclosure</li>
                    <li>• Email/delivery timestamp = proof of when disclosure occurred</li>
                  </ul>
                </div>
                <p className="mt-4 font-semibold text-[var(--color-primary)]">
                  Result: Transform verbal discussions into documented evidence. Strong
                  defense against failure-to-warn claims.
                </p>
              </Card>

              <Card hover>
                <div className="mb-4">
                  <AlertTriangle className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Triple-Layer Validation</h3>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2">The Problem:</p>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    Errors compound. Bad data → bad calculations → bad recommendations →
                    regulatory violations and client harm.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">VelocityIQ Solution:</p>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>
                      • Input Validation: Real-time questionnaire checks catch issues during
                      data entry
                    </li>
                    <li>
                      • Processing Validation: 101 rules check during report generation
                    </li>
                    <li>
                      • Output Validation: Final verification sweep before advisor review
                    </li>
                  </ul>
                </div>
                <p className="mt-4 font-semibold text-[var(--color-primary)]">
                  Result: Three chances to catch critical errors. Issues identified at entry,
                  not discovered after client harm occurs.
                </p>
              </Card>
            </div>

            {/* Research Support */}
            <div className="bg-white p-6 rounded-lg border border-[var(--color-border-subtle)]">
              <p className="text-[var(--color-text-secondary)]">
                <strong>Research Support:</strong> Financial firms now rank "AI in risk and
                compliance" as a top AI use case, ahead of customer-facing experimentation,
                because regulators and boards view unmanaged AI as a new source of
                operational and conduct risk.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance & Audit Documentation */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Exam-Ready Documentation: The Second Critical Benefit
            </h2>
            <p className="text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto">
              Once liability defense is secured, compliance officers need exam-ready records.
              VelocityIQ's glass-box architecture provides the comprehensive audit trail
              regulators demand—not as an afterthought, but as core design.
            </p>

            {/* Five Questions Regulators Ask */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-center mb-8">
                The Five Questions Regulators Ask
              </h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <Card>
                  <h4 className="font-semibold text-lg mb-3">
                    Question 1: "Show me the basis for this recommendation."
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>→ Complete source attribution with 2-3 authoritative citations per fact</li>
                    <li>→ RAG retrieval logs show which content was used</li>
                    <li>→ "Here's the exact 150-word chunk and its sources"</li>
                  </ul>
                </Card>

                <Card>
                  <h4 className="font-semibold text-lg mb-3">
                    Question 2: "How did you identify relevant risks?"
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>→ Warnings Report documents 101 validation rules checked</li>
                    <li>→ All flagged risks categorized by severity</li>
                    <li>→ Systematic detection at three validation layers</li>
                  </ul>
                </Card>

                <Card>
                  <h4 className="font-semibold text-lg mb-3">
                    Question 3: "What calculations support this advice?"
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>→ Number Audit Report shows all inputs, formulas, outputs</li>
                    <li>→ Zero AI in mathematics—only verified, deterministic formulas</li>
                    <li>→ Complete calculation transparency</li>
                  </ul>
                </Card>

                <Card>
                  <h4 className="font-semibold text-lg mb-3">
                    Question 4: "How do you supervise AI usage?"
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>→ Mandatory advisor review checkpoints documented</li>
                    <li>→ Approval timestamps recorded</li>
                    <li>→ Human oversight at every decision point</li>
                  </ul>
                </Card>

                <Card>
                  <h4 className="font-semibold text-lg mb-3">
                    Question 5: "Where did this information come from?"
                  </h4>
                  <ul className="space-y-2 text-[var(--color-text-secondary)]">
                    <li>→ Every fact traces to cited source</li>
                    <li>→ 200,000-word knowledge base per niche, all cited</li>
                    <li>→ Complete information provenance</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Research Support */}
            <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border-subtle)] mb-8">
              <p className="text-[var(--color-text-secondary)]">
                <strong>Research Support:</strong> RIA compliance guidance emphasizes documenting
                supervision, creating exam-ready records, and avoiding enforcement as core drivers
                to invest in compliance technology.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button href="/risk-defense" variant="primary">
                Explore Complete Compliance Architecture →
              </Button>
            </div>
          </div>
        </section>

        {/* Glass-Box vs. Black-Box Architecture */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Glass-Box Architecture Matters for Compliance
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Black-Box AI */}
              <Card className="bg-gray-900 text-white border-none">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2">Black-Box AI (Most Systems)</h3>
                  <div className="bg-gray-800 p-4 rounded mb-4">
                    <p className="font-semibold mb-1">Examiner: "Why did your advisor recommend this?"</p>
                    <p>You: "The AI generated it."</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>No source traceability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Calculations unexplained</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Can't verify recommendation basis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Hallucination risk</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>No systematic risk detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Weak regulatory defense</span>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded mb-4">
                  <p className="font-semibold mb-1">Regulatory Response:</p>
                  <p>"That's not acceptable."</p>
                </div>
                <div className="p-4 bg-red-900/30 border-l-4 border-red-500 rounded">
                  <p className="font-semibold text-red-300">Compliance Risk: HIGH</p>
                </div>
              </Card>

              {/* VelocityIQ Glass-Box */}
              <Card className="bg-white border-2 border-[var(--color-primary)]">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2 text-[var(--color-text-primary)]">VelocityIQ Glass-Box</h3>
                  <div className="bg-blue-50 p-4 rounded mb-4">
                    <p className="font-semibold mb-1 text-[var(--color-text-primary)]">Examiner: "Why did your advisor recommend this?"</p>
                    <p className="text-[var(--color-text-primary)]">You: "Here's the complete documented trail."</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">Exact knowledge base chunk retrieved (with citations)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">Calculation breakdown (inputs, formula, output)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">101 validation rules checked results</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">Risk identification documentation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">Advisor review and approval timestamps</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--color-text-secondary)]">Complete audit trail from data → recommendation</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <p className="font-semibold mb-1 text-[var(--color-text-primary)]">Regulatory Response:</p>
                  <p className="text-[var(--color-text-primary)]">"This demonstrates systematic compliance."</p>
                </div>
                <div className="p-4 bg-green-50 border-l-4 border-[var(--color-success)] rounded">
                  <p className="font-semibold text-[var(--color-success)]">Compliance Risk: LOW</p>
                </div>
              </Card>
            </div>

            {/* Visual Comparison */}
            <div className="mb-8">
              <Image
                src="/images/glass-box-comparison.png"
                alt="Glass-box vs Black-box architecture comparison"
                width={1200}
                height={675}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

            {/* Bottom Statement */}
            <div className="bg-white p-6 rounded-lg border border-[var(--color-border-subtle)] mb-8">
              <p className="text-center text-[var(--color-text-secondary)]">
                Built by developers with insider knowledge of banking-grade application development.
                VelocityIQ wasn't adapted for compliance—it was architected from day one to meet
                regulatory standards required in banking.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button href="/platform" variant="primary">
                Explore Glass-Box Architecture →
              </Button>
            </div>
          </div>
        </section>

        {/* The Market Opportunity */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              1-1.5 Million Business-Owning HNWIs Demanding AI-Powered Insights
            </h2>
            <p className="text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto">
              Business-owning HNWIs represent the intersection of highest complexity, greatest
              liability exposure, and strongest AI demand. This is precisely where systematic
              risk identification and compliance documentation matter most.
            </p>

            {/* Four Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">~6 Million</p>
                  <p className="font-semibold mb-2">US HNWIs</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    High-net-worth individuals with $1M+ investable wealth
                  </p>
                </div>
              </Card>

              <Card>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">1-2 Million</p>
                  <p className="font-semibold mb-2">Business Owners</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Complex situations: private equity, exit scenarios, multi-entity structures
                  </p>
                </div>
              </Card>

              <Card>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">79%</p>
                  <p className="font-semibold mb-2">Want AI-Powered Advice</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Among younger HNWIs; 35% would leave advisor without it
                  </p>
                </div>
              </Card>

              <Card>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">1-1.5 Million</p>
                  <p className="font-semibold mb-2">Active Demand</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Business-owning HNWIs seeking validated, AI-assisted insights today
                  </p>
                </div>
              </Card>
            </div>

            {/* Liability Context */}
            <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border-subtle)] mb-4">
              <p className="text-[var(--color-text-secondary)] mb-2">
                <strong>Liability Context:</strong> The more complex the client situation, the greater
                the advisor's liability exposure if risks are missed or inadequately disclosed. This
                market segment needs VelocityIQ's systematic approach most.
              </p>
            </div>

            {/* Source Citation */}
            <p className="text-xs text-center text-[var(--color-text-secondary)]">
              Based on: Henley & Partners Global Wealth Report 2024, Boosted.ai/InvestmentNews
              2024 HNWI Survey, RFI Global Private Banking 2025, Forbes Advisor 2025
            </p>
          </div>
        </section>

        {/* AI Innovation: Third-Order Benefit */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Once Risk and Compliance Are Secured: Competitive Differentiation
            </h2>
            <p className="text-xl text-center text-[var(--color-text-secondary)] mb-16 max-w-3xl mx-auto">
              With liability defense and audit documentation in place, VelocityIQ delivers the
              AI innovation that differentiates your platform. This is the third-order benefit—important,
              but only valuable after addressing risk and compliance foundations.
            </p>

            {/* Three Innovation Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card hover>
                <div className="mb-4">
                  <Zap className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">In-Meeting Intelligence</h3>
                  <p className="font-semibold text-[var(--color-primary)] mb-4">
                    40-Second Scenario Analysis
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2">The Client Moment:</p>
                  <p className="text-[var(--color-text-secondary)] italic mb-4">
                    "What if I exercise my ISOs now instead of waiting?"
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2">Traditional Response:</p>
                  <p className="text-[var(--color-text-secondary)] mb-2">
                    "Let me run the numbers and get back to you."
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Risk: Client researches elsewhere during wait.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">VelocityIQ Response:</p>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    40 seconds later: Complete validated report appears side-by-side with baseline.
                  </p>
                  <p className="font-semibold mb-2 text-sm">Client Impact:</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Answers delivered in the meeting</li>
                    <li>• No opportunity to seek advice elsewhere</li>
                    <li>• Up to 8 specific questions per scenario</li>
                    <li>• Full audit trail maintained at speed</li>
                  </ul>
                </div>
              </Card>

              <Card hover>
                <div className="mb-4">
                  <Zap className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Granular Personalization</h3>
                  <p className="font-semibold text-[var(--color-primary)] mb-4">
                    Beyond Generic Portfolio Advice
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2">What Business Owners Need:</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Private equity positions and illiquid holdings</li>
                    <li>• Exit scenarios and timing implications</li>
                    <li>• Multi-entity structures and tax complexity</li>
                    <li>• Family obligations and multi-generational needs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-sm">Multi-Layer Intelligence:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ RAG Knowledge: 200,000 cited words per niche</li>
                    <li>→ Live Data: Current market intelligence via Perplexity API</li>
                    <li>→ Personal Context: Family circumstances from conversation</li>
                    <li>→ Validated Calculations: 52 universal + ~20 niche-specific formulas</li>
                  </ul>
                </div>
                <p className="mt-4 font-semibold text-[var(--color-primary)] text-sm">
                  Result: Each report addresses client's actual complexity, not simplified assumptions.
                </p>
              </Card>

              <Card hover>
                <div className="mb-4">
                  <Zap className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Niche-Specific Depth</h3>
                  <p className="font-semibold text-[var(--color-primary)] mb-4">
                    Serve Complex Situations Others Can't
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2">Not "One Size Fits All":</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Tech founders: ISO, NSO, RSU, QSBS, AMT, 83(b)</li>
                    <li>• Business owners: Valuation, succession, entity structure, exit</li>
                    <li>• Medical professionals: Practice valuation, partnership, student loans</li>
                    <li>• [More niches post-pilot]</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-sm">Coming Post-Pilot:</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Expert-Validated Niche Packs: Production-ready niches delivered in 48 hours.
                    New revenue stream for platforms selling to advisors on-demand.
                  </p>
                </div>
              </Card>
            </div>

            {/* Research Support */}
            <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border-subtle)] mb-8">
              <p className="text-[var(--color-text-secondary)]">
                <strong>Research Support:</strong> Advisor commentary describes 25-40% operational
                efficiency gains and improved client experience, but notes firms prioritize AI for
                risk management and compliance initiatives first. Innovation benefits are compelling
                once compliant, auditable usage is in place.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button href="/platform" variant="primary">
                Explore Platform Innovation Capabilities →
              </Button>
            </div>
          </div>
        </section>

        {/* Why RIA Platforms Choose VelocityIQ */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Three Reasons Platforms Invest—In Order of Priority
            </h2>

            <div className="space-y-8">
              {/* Reason 1: Primary */}
              <Card className="border-2 border-[var(--color-primary)]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">Reduce Platform Liability Exposure (Primary)</h3>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">The Risk:</p>
                      <p className="text-[var(--color-text-secondary)] mb-3">
                        Every advisor recommendation is potential liability. If advisors miss risks,
                        clients sue, regulators investigate, and platforms face:
                      </p>
                      <ul className="space-y-1 text-[var(--color-text-secondary)] ml-4">
                        <li>• Legal defense costs</li>
                        <li>• Settlements and judgments</li>
                        <li>• Regulatory fines</li>
                        <li>• Reputational damage</li>
                        <li>• Advisor departures</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">VelocityIQ Mitigation:</p>
                      <ul className="space-y-1 text-[var(--color-text-secondary)] ml-4">
                        <li>• Systematic risk identification across all advisors</li>
                        <li>• Documented warnings for every engagement</li>
                        <li>• Triple-layer validation prevents most common errors</li>
                        <li>• Strong defensive documentation for litigation and audits</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="font-semibold text-[var(--color-primary)]">Platform Value:</p>
                      <p className="text-[var(--color-text-secondary)]">Sleep better knowing systematic controls are in place.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Reason 2: Secondary */}
              <Card>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Exam-Ready Compliance Documentation (Secondary)</h3>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">The Need:</p>
                      <p className="text-[var(--color-text-secondary)] mb-3">
                        Regulatory examinations are inevitable. Compliance officers need demonstrable
                        supervision, systematic processes, and complete records.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">VelocityIQ Delivery:</p>
                      <ul className="space-y-1 text-[var(--color-text-secondary)] ml-4">
                        <li>• Glass-box architecture shows complete audit trail</li>
                        <li>• 101 validation rules demonstrate systematic supervision</li>
                        <li>• Documentation packages ready for examiner review</li>
                        <li>• Enhanced record-keeping reduces compliance error risk</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="font-semibold text-[var(--color-primary)]">Platform Value:</p>
                      <p className="text-[var(--color-text-secondary)]">Confident regulatory posture attracts quality advisors, reduces enforcement risk.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Reason 3: Tertiary */}
              <Card>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4">Competitive Differentiation & Advisor Recruitment (Tertiary)</h3>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">The Reality:</p>
                      <p className="text-[var(--color-text-secondary)] mb-3">
                        Once risk and compliance are addressed, innovation becomes competitive advantage.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold mb-2">VelocityIQ Differentiation:</p>
                      <ul className="space-y-1 text-[var(--color-text-secondary)] ml-4">
                        <li>• "Our platform provides banking-grade AI intelligence"</li>
                        <li>• In-meeting intelligence (40-second scenarios)</li>
                        <li>• Granular personalization for complex clients</li>
                        <li>• Niche-specific expertise across 20+ verticals (post-pilot)</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="font-semibold text-[var(--color-primary)]">Platform Value:</p>
                      <p className="text-[var(--color-text-secondary)]">Recruit and retain advisors competitors want. Serve previously unprofitable niches profitably.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Research Support */}
            <div className="mt-12 bg-white p-6 rounded-lg border border-[var(--color-border-subtle)] mb-8">
              <p className="text-[var(--color-text-secondary)]">
                <strong>Research Support:</strong> Industry guidance confirms RIAs prioritize AI tools
                first for risk reduction and compliance documentation, treating innovation and
                experience as important but secondary benefits once acceptable risk posture is established.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button href="/demo" variant="primary">
                Watch Platform Demo
              </Button>
            </div>
          </div>
        </section>

        {/* January 2026 Pilot Program */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="bg-[var(--color-primary)] text-white border-none">
              <h2 className="text-4xl font-bold text-center mb-6 !text-white">
                Join the Pilot: Validate the System, Shape the Roadmap
              </h2>
              <p className="text-xl text-center mb-12 text-white max-w-3xl mx-auto">
                VelocityIQ launches January 2026 with a pilot focused on business-owning HNWIs.
                We're seeking RIA platforms and large RIA firms to partner in validating our
                liability defense and compliance architecture.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* What's Included */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">What's Included</h3>
                  
                  <div className="mb-6">
                    <p className="font-semibold mb-3 text-white">Risk & Liability Defense (Primary Focus):</p>
                    <ul className="space-y-2 text-white">
                      <li>✅ 101 validation rules operational (65 critical + 28 warning)</li>
                      <li>✅ Triple-layer validation system active</li>
                      <li>✅ Warnings Report generation for documented disclosure</li>
                      <li>✅ Complete audit trail for every engagement</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold mb-3 text-white">Compliance & Documentation:</p>
                    <ul className="space-y-2 text-white">
                      <li>✅ Glass-box architecture with full source attribution</li>
                      <li>✅ Number Audit Report for calculation transparency</li>
                      <li>✅ RAG retrieval logs and citation tracking</li>
                      <li>✅ Exam-ready documentation packages</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-3 text-white">Innovation Capabilities:</p>
                    <ul className="space-y-2 text-white">
                      <li>✅ Business-owning HNWI niche (production-ready)</li>
                      <li>✅ In-meeting intelligence (40-second scenarios)</li>
                      <li>✅ Granular personalization with multi-layer intelligence</li>
                    </ul>
                  </div>
                </div>

                {/* Pilot Benefits */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Pilot Benefits</h3>
                  <ul className="space-y-3 text-white">
                    <li>• Direct access to development team</li>
                    <li>• Influence feature priorities</li>
                    <li>• Early adopter pricing</li>
                    <li>• Prominent testimonial opportunities</li>
                    <li>• Shape post-pilot niche pack offerings</li>
                  </ul>
                </div>

                {/* What We Need */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">What We Need</h3>
                  <div className="mb-6">
                    <p className="font-semibold mb-3 text-white">Commitment:</p>
                    <ul className="space-y-2 text-white">
                      <li>• 5-10 advisors using platform actively</li>
                      <li>• Feedback on risk mitigation effectiveness</li>
                      <li>• Compliance documentation review</li>
                      <li>• Testimonials upon successful validation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-3 text-white">Ideal Pilot Partners:</p>
                    <ul className="space-y-2 text-white">
                      <li>• RIA platforms with 50+ advisors</li>
                      <li>• Large RIA firms with commitment to AI-powered advisory</li>
                      <li>• Strong compliance culture</li>
                      <li>• Advisors serving business-owning HNWIs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Post-Pilot Roadmap */}
              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Post-Pilot Roadmap</h3>
                <p className="font-semibold mb-3 text-white">Coming After Successful Pilot:</p>
                <ul className="space-y-2 text-white">
                  <li>• Expert-validated Niche Packs (new revenue stream for platforms)</li>
                  <li>• Additional vertical niches based on advisor needs</li>
                  <li>• Enhanced customization of validation rules</li>
                  <li>• Expanded integration capabilities</li>
                </ul>
              </div>

              {/* Selection Priority */}
              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <p className="text-white text-center">
                  <strong>Selection Priority:</strong> Limited pilot spots. Priority given to platforms
                  demonstrating commitment to systematic risk management and regulatory excellence.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/book" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                  Apply for January 2026 Pilot
                </Button>
                <Button href="/book" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                  Schedule Qualification Call
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 !text-white">
              Built for Risk Mitigation. Designed for Regulatory Confidence. Ready for Your
              Platform.
            </h2>
            <p className="text-xl mb-12 text-white">
              Join the January 2026 pilot and bring systematic liability defense,
              exam-ready compliance documentation, and competitive AI intelligence to your
              advisor network—in that order of priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button href="/demo" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Watch Platform Demo
              </Button>
              <Button href="/book" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Apply for Pilot Program
              </Button>
            </div>
            <p className="text-white text-sm">
              Built by banking-grade developers. Validated through triple-layer architecture.
              Documented with glass-box transparency. The liability defense RIAs need,
              compliance documentation regulators demand, and innovation clients expect.
            </p>
            <p className="mt-8 text-white">
              Questions? Email:{" "}
              <a
                href="mailto:admin@getvelocityiq.com"
                className="underline hover:opacity-80 transition-opacity"
              >
                admin@getvelocityiq.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
