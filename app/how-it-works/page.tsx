import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Clock, CheckCircle, FileText, Zap, Layers, Users } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              From Client Meeting to Validated Report in Under 2 Minutes
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)]">
              See the complete workflow: triple-layer validation, 8-step wizard, 40-second
              generation, comprehensive audit documentation.
            </p>
          </div>
        </section>

        {/* Time Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Six Phases: Total Time Breakdown</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <span className="font-semibold">Phase 1: Client Meeting</span>
                <span className="text-[var(--color-text-secondary)]">30-60 minutes</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <span className="font-semibold">Phase 2: Prompt Generation (automated)</span>
                <span className="text-[var(--color-text-secondary)]">2-3 minutes</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <span className="font-semibold">Phase 3: Advisor Review of Prompt</span>
                <span className="text-[var(--color-text-secondary)]">2-5 minutes</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <span className="font-semibold">Phase 4: Report Generation (automated)</span>
                <span className="text-[var(--color-text-secondary)]">40 seconds</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <span className="font-semibold">Phase 5: Advisor Review of Outputs</span>
                <span className="text-[var(--color-text-secondary)]">5-10 minutes</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <span className="font-semibold">Phase 6: Client Delivery</span>
                <span className="text-[var(--color-text-secondary)]">Immediate</span>
              </div>
            </div>
            <div className="bg-[var(--color-primary)] text-white p-6 rounded-lg text-center">
              <p className="text-2xl font-bold mb-2 text-white">Total: Client meeting + ~15 minutes of advisor work</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-white">Traditional comprehensive analysis:</p>
                  <p className="text-xl font-semibold text-white">6-10 hours</p>
                </div>
                <div>
                  <p className="text-sm text-white">VelocityIQ:</p>
                  <p className="text-xl font-semibold text-white">~15 minutes</p>
                </div>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">Time savings: 90%+</p>
            </div>
          </div>
        </section>

        {/* Phase 1: Client Engagement */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h2 className="text-4xl font-bold">Smart Questionnaire with Real-Time Validation</h2>
            </div>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              Advisor conducts structured questionnaire and conversation with client, capturing
              demographics, financial position, niche details, goals, and concerns.
            </p>
            <Card>
              <h3 className="font-semibold mb-4">Real-Time Input Validation:</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                As advisor enters data, system validates immediately:
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span>Missing fields: "ISO grant date required for calculations"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span>Impossible values: "Exercise date cannot be before grant date"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span>Math conflicts: "Total assets cannot be less than liabilities"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span>Inconsistencies: "Income below poverty line with luxury assets"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span>Regulatory violations: "83(b) election must be filed within 30 days"</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded border-l-4 border-[var(--color-success)]">
                <p className="font-semibold text-sm mb-2">Why This Matters:</p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Traditional: Discover data issues days later → Must re-contact client → Delays
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  VelocityIQ: Issues flagged during conversation → Addressed immediately → Complete
                  data captured in one meeting
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Phase 2-4: Generation Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Prompt Generation</h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  8-Step Wizard Processes Data (2-3 minutes, automated)
                </p>
                <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                  <li>• Data Integration</li>
                  <li>• Client Profile Extraction</li>
                  <li>• JavaScript Parser</li>
                  <li>• Strategic Questions Generation</li>
                  <li>• Perplexity Query Generation</li>
                  <li>• Research + Narrative Extraction</li>
                  <li>• Framework Selection</li>
                  <li>• Final Sections Generation</li>
                </ul>
              </Card>

              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Human Review</h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  Advisor Reviews Generation Instructions (2-5 minutes)
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] mb-4">
                  Mandatory advisor review checkpoint before generation begins.
                </p>
                <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                  <li>• Reviews complete JSON payload</li>
                  <li>• Verifies client details accurate</li>
                  <li>• Checks questions and concerns correctly identified</li>
                  <li>• Reviews Perplexity research results</li>
                  <li>• Can edit, adjust, or regenerate if needed</li>
                </ul>
              </Card>

              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold">Report Generation</h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  Validated Report Generated (40 seconds, automated)
                </p>
                <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                  <li>• RAG Retrieval</li>
                  <li>• Content Assembly</li>
                  <li>• Narrative Generation</li>
                  <li>• Deterministic Calculations</li>
                  <li>• Validation Layer</li>
                  <li>• Output Generation</li>
                  <li>• Audit Documentation</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* In-Meeting Scenario Analysis */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[var(--color-primary)] text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6 !text-white">40-Second Scenarios During Client Meeting</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-2 text-white text-lg">The Client Moment:</p>
                  <p className="italic text-white text-base">"What if I exercise my ISOs now instead of waiting two years?"</p>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-white text-lg">Traditional:</p>
                  <p className="text-white text-base">"Let me get back to you in a few days."</p>
                  <p className="text-sm text-white mt-1">Risk: Client researches elsewhere.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-white text-lg">VelocityIQ:</p>
                  <p className="text-white text-base">Advisor inputs new scenario → 40 seconds later → Complete report appears side-by-side with baseline</p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold mb-3 text-white text-lg">Capabilities:</p>
                  <ul className="space-y-2 text-base text-white list-disc list-inside">
                    <li>40-second generation per scenario</li>
                    <li>Side-by-side comparison</li>
                    <li>Up to 8 specific questions per scenario</li>
                    <li>Full validation maintained</li>
                    <li>Complete audit trail at speed</li>
                  </ul>
                </div>
                <div className="mt-6 p-4 bg-white/20 rounded border border-white/30">
                  <p className="font-semibold text-white mb-2 text-base">Client Impact:</p>
                  <p className="text-base text-white">Answer delivered in the meeting. No opportunity to seek advice elsewhere.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 5: Advisor Review */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <h2 className="text-4xl font-bold">Advisor Reviews Three Deliverables</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <FileText className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="font-semibold mb-2">Client Insight Report</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mb-3">10-15 pages</p>
                <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                  <li>• Personalized analysis</li>
                  <li>• Discussion points</li>
                  <li>• Validated calculations</li>
                  <li>• All content cited</li>
                </ul>
              </Card>
              <Card>
                <FileText className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="font-semibold mb-2">Number Audit Report</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mb-3">Calculation transparency</p>
                <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                  <li>• All inputs</li>
                  <li>• All formulas</li>
                  <li>• All outputs</li>
                  <li>• Complete transparency</li>
                </ul>
              </Card>
              <Card>
                <FileText className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="font-semibold mb-2">Warnings Report</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mb-3">Text file</p>
                <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                  <li>• All 101 rules checked</li>
                  <li>• Critical issues (if any)</li>
                  <li>• Warning-level risks</li>
                  <li>• Documented disclosure</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Phase 6: Client Delivery */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <h2 className="text-4xl font-bold">Advisor Delivers Materials</h2>
            </div>

            <Card>
              <div className="mb-6">
                <h3 className="font-semibold mb-4 text-lg">Required:</h3>
                <div className="flex items-start gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Client Insight Report (10-15 page PDF)</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4 text-lg">Optional (Advisor Discretion):</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--color-text-secondary)]">□</span>
                    <div>
                      <span className="text-[var(--color-text-secondary)] font-medium">Warnings Report</span>
                      <span className="text-[var(--color-text-secondary)]"> - Recommended for liability protection</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--color-text-secondary)]">□</span>
                    <div>
                      <span className="text-[var(--color-text-secondary)] font-medium">Number Audit Report</span>
                      <span className="text-[var(--color-text-secondary)]"> - If client requests calculation transparency</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-lg">Distribution:</h3>
                <p className="text-[var(--color-text-secondary)]">
                  Advisor maintains delivery record (email timestamp). VelocityIQ does not
                  store client data or track deliveries.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded border-l-4 border-[var(--color-success)]">
                <p className="font-semibold mb-2 text-sm">Best Practice:</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Send Warnings Report with Client Insight Report to document risk disclosure.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* The Multi-Layer Integration */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Makes VelocityIQ Unique
            </h2>

            <div className="mb-8">
              <p className="text-xl text-center text-[var(--color-text-secondary)] mb-8 max-w-3xl mx-auto">
                Most AI systems use RAG (static) OR live data OR calculations. Rarely all three.
                Never with this transparency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <h3 className="text-xl font-semibold mb-3">Layer 1: RAG Knowledge</h3>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">Foundational, Cited</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  200,000 curated words, two-tier retrieval, 2-3 citations mandatory
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold mb-3">Layer 2: Live Intelligence</h3>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">Timely, Current</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Perplexity API, 8-10 queries, current market data, all documented
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold mb-3">Layer 3: Deterministic Calculations</h3>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">Accurate, Verifiable</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Hardcoded formulas, zero AI in math, Number Audit transparency
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold mb-3">Layer 4: Personal Context</h3>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">Human, Nuanced</p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Family circumstances, concerns, goals—life-aware recommendations
                </p>
              </Card>
            </div>

            <div className="bg-[var(--color-primary)] text-white p-8 rounded-lg text-center">
              <p className="text-2xl font-semibold">
                Result: Reports simultaneously foundational, timely, verifiable, and deeply personalized—
                a combination competitors cannot match.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 !text-white">Experience the Complete Workflow</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Watch Platform Demo
              </Button>
              <Button href="/book" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Schedule Discussion
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

