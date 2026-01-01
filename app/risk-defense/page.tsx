import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Shield, FileText, AlertTriangle, CheckCircle, XCircle, Layers } from "lucide-react";

export default function RiskDefensePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Systematic Risk Identification: Your First Line of Defense
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8">
              VelocityIQ transforms risk identification from subjective advisor judgment to
              systematic, documented detection. When liability questions arise, you have
              evidence, not excuses.
            </p>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[var(--color-primary)] max-w-3xl mx-auto">
              <p className="text-lg italic text-[var(--color-text-secondary)]">
                "To build AI systems for financial advisors that meet the regulatory standards
                required in banking—not because compliance is innovative, but because it's the
                foundation advisors deserve."
              </p>
            </div>
          </div>
        </section>

        {/* The Liability Landscape */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">Why Risk Mitigation Must Come First</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[var(--color-info)]">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  <strong>Industry Context:</strong> Financial services firms report that "AI in
                  risk and compliance" is now a top AI use case, ahead of customer-facing
                  experimentation. Why? Because regulators and boards view unmanaged AI as a new
                  source of operational and conduct risk.
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  <strong>Translation:</strong> RIAs adopt AI compliance tools primarily to reduce
                  risk and avoid costly errors, not for innovation's sake.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-4">The Stakes:</p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Failure-to-warn lawsuits</li>
                  <li>• Regulatory enforcement actions</li>
                  <li>• Client harm from missed risks</li>
                  <li>• Reputational damage</li>
                  <li>• Advisor E&O claims</li>
                  <li>• Platform liability exposure</li>
                </ul>
              </div>
              <div className="bg-[var(--color-primary)] text-white p-6 rounded-lg">
                <p className="font-semibold text-lg">
                  VelocityIQ's Purpose: Address these existential risks first, before considering
                  innovation benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 101-Rule Validation Engine */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Systematic Detection of What Advisors Miss
            </h2>
            <p className="text-xl text-center text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto">
              Even experienced advisors miss critical risks due to time pressure, knowledge gaps,
              human oversight, inconsistent processes, and undocumented verbal discussions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* 65 Critical Rules */}
              <Card>
                <div className="mb-4">
                  <AlertTriangle className="w-12 h-12 text-[var(--color-critical)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">65 Critical Rules</h3>
                  <p className="font-semibold text-[var(--color-critical)]">
                    Generation Stops If Failed
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2">What They Check:</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Data integrity violations (assets &lt; liabilities)</li>
                    <li>• Mathematically impossible scenarios</li>
                    <li>• Regulatory requirement failures (83(b) filed &gt;30 days)</li>
                    <li>• Niche-specific compliance checks</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)]">
                  <p className="font-semibold text-sm">
                    System Response: If ANY critical rule fails → Report generation STOPS
                  </p>
                  <p className="text-sm mt-2">
                    No output produced until issue resolved. Prevents bad data from producing bad
                    recommendations.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-sm mb-2">Examples:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ ISO exercise date before grant date (CRITICAL - stops)</li>
                    <li>→ Age entered as 250 years (CRITICAL - stops)</li>
                    <li>→ Stock option quantity exceeds company shares (CRITICAL - stops)</li>
                  </ul>
                </div>
              </Card>

              {/* 28 Warning Rules */}
              <Card>
                <div className="mb-4">
                  <AlertTriangle className="w-12 h-12 text-[var(--color-warning)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">28 Warning Rules</h3>
                  <p className="font-semibold text-[var(--color-warning)]">
                    Risk Flagging for Advisor Review
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold mb-2">What They Check:</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li>• Portfolio concentration risk (&gt;40% single position)</li>
                    <li>• Insurance coverage gaps (life, disability, umbrella)</li>
                    <li>• Tax exposure (AMT, estate, gift implications)</li>
                    <li>• Retirement savings shortfalls</li>
                    <li>• Age-inappropriate allocations</li>
                    <li>• Planning deficiencies</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded border-l-4 border-[var(--color-warning)]">
                  <p className="font-semibold text-sm">
                    System Response: Warnings documented but don't prevent generation
                  </p>
                  <p className="text-sm mt-2">
                    Advisor reviews before client delivery. Advisor determines which warnings to
                    address with client. Warnings file can be shared for documented disclosure.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-sm mb-2">Examples:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ 87% net worth in single equity (WARNING - flagged)</li>
                    <li>→ No umbrella policy with $10M+ net worth (WARNING - flagged)</li>
                    <li>→ Potential AMT exposure of $126K from ISO exercise (WARNING - flagged)</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Sample Warnings Report */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">
              What the Warnings Report Looks Like
            </h2>
            <Card className="bg-gray-50 font-mono text-sm">
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-lg mb-2">VELOCITYIQ VALIDATION REPORT</p>
                  <p>Generated: 2025-12-15 14:32:15</p>
                  <p>Advisor: [Name] | Client: [Name]</p>
                </div>
                <div>
                  <p className="font-bold mb-2">=== CRITICAL ISSUES (0) ===</p>
                  <p>No critical validation failures.</p>
                </div>
                <div>
                  <p className="font-bold mb-2">=== WARNINGS (4) ===</p>
                  <div className="space-y-4 mt-4">
                    <div className="pl-4 border-l-4 border-[var(--color-warning)]">
                      <p className="font-semibold mb-1">WARNING: High Portfolio Concentration</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>87% of net worth in single equity position (Company XYZ stock)</li>
                        <li>Recommended threshold: &lt;40% in single position</li>
                        <li>Risk: Lack of diversification increases volatility and downside risk</li>
                        <li>Action: Discuss diversification strategy and risk tolerance</li>
                      </ul>
                    </div>
                    <div className="pl-4 border-l-4 border-[var(--color-warning)]">
                      <p className="font-semibold mb-1">WARNING: Potential AMT Exposure</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>ISO exercise of $500,000 may trigger Alternative Minimum Tax</li>
                        <li>Bargain element: $450,000 exceeds AMT exemption threshold</li>
                        <li>Estimated AMT liability: $126,000</li>
                        <li>Action: Review exercise timing and AMT planning strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* The Liability Shield */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Documented Risk Disclosure: Your Legal Defense
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-green-50 border-green-200">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">STRONG ADVISOR DEFENSE</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      If a risk was identified by validation system → documented in warnings file
                      → shared with client
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="bg-red-50 border-red-200">
                <div className="flex items-start gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-[var(--color-critical)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">ADVISOR LIABILITY EXPOSURE</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      If not identified or not disclosed → No documentation
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <Card>
              <h3 className="font-semibold mb-4">Advisor Workflow:</h3>
              <ol className="space-y-3 text-[var(--color-text-secondary)]">
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-primary)]">1.</span>
                  <span>System generates Warnings Report</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-primary)]">2.</span>
                  <span>Advisor reviews all warnings</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-primary)]">3.</span>
                  <span>Advisor determines which to discuss with client</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-primary)]">4.</span>
                  <span>Advisor delivers warnings file to client (documented disclosure)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--color-primary)]">5.</span>
                  <span>Advisor maintains email/delivery timestamp</span>
                </li>
              </ol>
            </Card>
            <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-[var(--color-primary)]">
              <p className="font-semibold mb-2">When Attorney Asks:</p>
              <p className="italic mb-2">
                "Did your advisor warn about concentration risk?"
              </p>
              <p className="font-semibold text-[var(--color-primary)]">
                Answer: "Yes. Here's the documented warning delivered on [date]."
              </p>
            </div>
          </div>
        </section>

        {/* Triple-Layer Validation */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Three Chances to Catch Critical Issues
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <div className="mb-4">
                  <Layers className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Layer 1: Input Validation</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    When: During data entry in client questionnaire
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-sm">What It Catches:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>• Missing required fields</li>
                    <li>• Impossible values (dates, percentages, ages)</li>
                    <li>• Mathematical conflicts</li>
                    <li>• Logical inconsistencies</li>
                    <li>• Regulatory timeline violations</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded text-xs">
                  <p className="font-semibold">Example:</p>
                  <p className="text-[var(--color-text-secondary)]">
                    Advisor enters ISO exercise date: 2020-01-15. System shows grant date:
                    2021-06-01. → Immediate error: "Exercise date cannot be before grant date"
                  </p>
                </div>
              </Card>

              <Card>
                <div className="mb-4">
                  <Layers className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Layer 2: Processing Validation</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    When: During 40-second report generation
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-sm">What It Checks:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>• All 101 rules executed</li>
                    <li>• Cross-validation between calculations</li>
                    <li>• Range checks on computed values</li>
                    <li>• Consistency across report sections</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded text-xs">
                  <p className="font-semibold">System Response:</p>
                  <p className="text-[var(--color-text-secondary)]">
                    Critical failures → STOP generation, return error. Warnings → Document in
                    Warnings Report. Both → Log in validation results.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="mb-4">
                  <Layers className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Layer 3: Output Validation</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    When: Final sweep before advisor review
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-sm">What It Confirms:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>• Report consistency maintained</li>
                    <li>• All warnings properly documented</li>
                    <li>• No critical issues slipped through</li>
                    <li>• Audit trail integrity complete</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded text-xs">
                  <p className="font-semibold">Safety Net:</p>
                  <p className="text-[var(--color-text-secondary)]">
                    Final check catches edge cases before advisor sees report. Multiple validation
                    stages reduce error probability exponentially.
                  </p>
                </div>
              </Card>
            </div>
            <div className="mt-12 bg-[var(--color-primary)] text-white p-8 rounded-lg text-center">
              <p className="text-xl font-semibold mb-2">
                Traditional systems: Check once, after generation (maybe)
              </p>
              <p className="text-xl font-semibold">
                VelocityIQ: Check three times—before, during, and after
              </p>
              <p className="mt-4 text-lg">
                Result: Issues caught at entry, not discovered after client harm
              </p>
            </div>
          </div>
        </section>

        {/* Glass-Box Compliance */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Complete Audit Trail for Regulatory Defense
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Source Attribution */}
              <Card>
                <h3 className="text-2xl font-semibold mb-4">Source Attribution</h3>
                <ul className="space-y-3 text-[var(--color-text-secondary)]">
                  <li>• Every fact traces to 2-3 authoritative citations</li>
                  <li>• 200,000-word knowledge base per niche, all cited</li>
                  <li>• RAG retrieval logs show what content was used</li>
                  <li>• "Here's the exact chunk and its sources"</li>
                </ul>
              </Card>

              {/* Calculation Transparency */}
              <Card>
                <h3 className="text-2xl font-semibold mb-4">Calculation Transparency</h3>
                <ul className="space-y-3 text-[var(--color-text-secondary)]">
                  <li>• Number Audit Report shows all inputs, formulas, outputs</li>
                  <li>• Zero AI in mathematics—only verified, deterministic formulas</li>
                  <li>• Complete calculation documentation</li>
                </ul>
              </Card>

              {/* Validation Records */}
              <Card>
                <h3 className="text-2xl font-semibold mb-4">Validation Records</h3>
                <ul className="space-y-3 text-[var(--color-text-secondary)]">
                  <li>• All 101 rules checked at three stages</li>
                  <li>• Warnings Report documents all flagged risks</li>
                  <li>• Validation occurs: during input, during processing, after output</li>
                </ul>
              </Card>

              {/* Supervisor Oversight */}
              <Card>
                <h3 className="text-2xl font-semibold mb-4">Supervisor Oversight</h3>
                <ul className="space-y-3 text-[var(--color-text-secondary)]">
                  <li>• Advisor review checkpoints documented</li>
                  <li>• Approval timestamps recorded</li>
                  <li>• Human oversight at every decision point</li>
                </ul>
              </Card>
            </div>

            {/* Complete Generation Trail */}
            <Card className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Complete Generation Trail</h3>
              <ul className="space-y-3 text-[var(--color-text-secondary)]">
                <li>• 8-step wizard process logged</li>
                <li>• Perplexity API queries documented with sources</li>
                <li>• RAG retrieval decisions visible</li>
              </ul>
            </Card>

            {/* Bottom Statement */}
            <div className="bg-[var(--color-primary)] text-white p-8 rounded-lg text-center">
              <p className="text-2xl font-semibold">
                When Examiner Asks "Why?": Show them the complete glass-box record.
              </p>
            </div>
          </div>
        </section>

        {/* ROI of Risk Mitigation */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              The Math of Avoiding One Lawsuit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Cost Breakdown */}
              <Card>
                <h3 className="text-2xl font-semibold mb-6">Cost of Advisor Liability Event</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Legal defense:</p>
                    <p className="text-[var(--color-text-secondary)]">$50K-$200K+</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Settlement/judgment:</p>
                    <p className="text-[var(--color-text-secondary)]">$100K-$1M+</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Regulatory investigation costs:</p>
                    <p className="text-[var(--color-text-secondary)]">$25K-$100K+</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">E&O premium increases:</p>
                    <p className="text-[var(--color-text-secondary)]">Ongoing</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Reputational damage:</p>
                    <p className="text-[var(--color-text-secondary)]">Immeasurable</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Advisor departures:</p>
                    <p className="text-[var(--color-text-secondary)]">Lost revenue</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-[var(--color-critical)] rounded">
                  <p className="font-semibold text-[var(--color-critical)]">
                    Total potential cost per incident: $175K-$1.3M+
                  </p>
                </div>
              </Card>

              {/* Break-Even Analysis */}
              <Card>
                <h3 className="text-2xl font-semibold mb-6">Break-Even Analysis</h3>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  If VelocityIQ's systematic risk identification and documented warnings prevent
                  ONE liability event, the system pays for itself multiple times over.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-4">Risk Reduction Value:</h4>
                  <ul className="space-y-3 text-[var(--color-text-secondary)]">
                    <li>• Systematic detection vs. advisor memory</li>
                    <li>• Documented disclosure vs. verbal discussions</li>
                    <li>• Triple-layer validation vs. single-check</li>
                    <li>• 101 rules vs. manual review</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-[var(--color-success)] rounded">
                  <p className="font-semibold text-[var(--color-success)]">
                    One prevented lawsuit = System pays for itself multiple times over
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Reduce Your Platform's Liability Exposure
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/demo" variant="primary">
                Watch Platform Demo
              </Button>
            </div>
            <p className="text-[var(--color-text-secondary)]">
              See how VelocityIQ's 101-rule validation engine, triple-layer architecture, and
              documented warnings system transform your platform's risk posture from reactive to
              systematically defensive.
            </p>
            <p className="mt-8">
              <a
                href="mailto:admin@getvelocityiq.com"
                className="text-[var(--color-primary)] hover:underline font-semibold"
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

