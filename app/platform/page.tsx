import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Book, Zap, Calculator, Layers, FileText, Grid } from "lucide-react";

export default function PlatformPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Banking-Grade Compliance Architecture for Wealth Management
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)]">
              VelocityIQ combines three layers—curated knowledge bases, live business
              intelligence, and deterministic financial calculations—into a glass-box system
              built for regulatory scrutiny.
            </p>
          </div>
        </section>

        {/* Three-Layer Architecture */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Foundational Knowledge + Current Intelligence + Validated Calculations
            </h2>
            <p className="text-xl text-center text-[var(--color-text-secondary)] mb-16 max-w-3xl mx-auto">
              Most AI systems use either RAG (static knowledge) OR live data OR calculations.
              VelocityIQ combines all three with complete transparency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <Book className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Layer 1: RAG Knowledge Base</h3>
                <p className="font-semibold mb-4 text-[var(--color-primary)]">
                  Foundational, Cited
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>• 200,000 words of curated content per niche</li>
                  <li>• 1,333 semantic chunks (150 words each)</li>
                  <li>• 2-3 authoritative citations per chunk (mandatory)</li>
                  <li>• Two-tier retrieval: Universal principles + Niche expertise</li>
                  <li>• Azure AI Search vector database</li>
                  <li>• Complete retrieval logs for audit</li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded">
                  <p className="text-xs font-semibold mb-2">Why RAG:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>✓ Complete transparency</li>
                    <li>✓ Easy updates (no model retraining)</li>
                    <li>✓ Full provenance</li>
                    <li>✓ Compliance-friendly</li>
                    <li>✓ Reduced hallucination risk</li>
                  </ul>
                </div>
              </Card>

              <Card>
                <Zap className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Layer 2: Live Intelligence</h3>
                <p className="font-semibold mb-4 text-[var(--color-primary)]">
                  Timely, Current
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>• 8-10 sector-specific queries per client</li>
                  <li>• Current market conditions and regulatory changes</li>
                  <li>• Perplexity API integration</li>
                  <li>• All responses documented with source URLs</li>
                  <li>• Ensures recommendations reflect today's conditions</li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded">
                  <p className="text-xs font-semibold mb-2">What It Captures:</p>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>→ Current market data</li>
                    <li>→ Recent regulations</li>
                    <li>→ Industry intelligence</li>
                    <li>→ Real-time data</li>
                  </ul>
                </div>
              </Card>

              <Card>
                <Calculator className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Layer 3: Deterministic Calculations</h3>
                <p className="font-semibold mb-4 text-[var(--color-primary)]">
                  Accurate, Verifiable
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>• 52 universal formulas (net worth, debt-to-income, estate tax, cash flow)</li>
                  <li>• ~20 niche-specific formulas (ISO AMT, QSBS exclusion, practice valuation)</li>
                  <li>• All hardcoded—zero AI in mathematics</li>
                  <li>• Number Audit Report provides complete transparency</li>
                  <li>• Regulatory-grade documentation</li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded">
                  <p className="text-xs font-semibold">Why This Matters:</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-2">
                    Same inputs always produce same outputs. Calculations are verifiable,
                    explainable, and defensible.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Six Core Capabilities */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Features That Deliver Risk Mitigation, Compliance, and Innovation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card hover>
                <Layers className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Triple-Layer Validation</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  101 Rules Check Before, During, and After
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Input validation during data entry catches issues in real-time. Processing
                  validation (65 critical + 28 warning rules) checks during generation. Output
                  validation performs final sweep. Three chances to catch critical errors.
                </p>
                <p className="text-sm font-semibold text-[var(--color-primary)] mt-4">
                  Business Value: Issues identified at entry, not discovered after client harm.
                </p>
              </Card>

              <Card hover>
                <Zap className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">In-Meeting Intelligence</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  40-Second Scenario Analysis
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Client asks "what if?" during meeting. Advisor inputs new scenario. 40 seconds
                  later, complete validated report appears side-by-side with baseline for instant
                  comparison. Up to 8 specific questions per scenario. Full audit trail maintained.
                </p>
                <p className="text-sm font-semibold text-[var(--color-primary)] mt-4">
                  Business Value: Answers delivered immediately in meeting. No opportunity for client
                  to seek advice elsewhere.
                </p>
              </Card>

              <Card hover>
                <FileText className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Complete Audit Trail</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  Multi-Level Documentation for Regulatory Defense
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Documents everything: niche creation trail, report generation trail, validation
                  results, calculation transparency. Answer "why?" at every level. Complete
                  documentation for regulatory examinations and litigation defense.
                </p>
                <p className="text-sm font-semibold text-[var(--color-primary)] mt-4">
                  Business Value: Complete documentation for regulatory examinations and litigation
                  defense.
                </p>
              </Card>

              <Card hover>
                <Grid className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Granular Personalization</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  Multi-Layer Intelligence Integration
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Combines RAG knowledge (200,000 cited words), live data (Perplexity API),
                  personal context (family circumstances), and validated calculations. Each report
                  addresses actual client complexity.
                </p>
                <p className="text-sm font-semibold text-[var(--color-primary)] mt-4">
                  Business Value: Beyond generic AI. Addresses private equity, exit scenarios,
                  multi-entity structures—the complexity that creates liability risk.
                </p>
              </Card>

              <Card hover>
                <Book className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Glass-Box Architecture</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  Transparent, Auditable, Explainable
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Every fact traces to cited source. Every calculation shows inputs/formulas/outputs.
                  Every risk systematically identified. Complete visibility for regulators. No "the
                  AI said so" black boxes.
                </p>
                <p className="text-sm font-semibold text-[var(--color-primary)] mt-4">
                  Business Value: Transform AI from regulatory liability into defensible asset.
                </p>
              </Card>

              <Card hover>
                <Grid className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Niche-Agnostic Platform</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  Deploy New Verticals Rapidly
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Platform supports any wealth management vertical. Each niche maintains separate
                  knowledge base, validation rules, formulas, and audit trail. Tech startups
                  operational now. Post-pilot: expert-validated Niche Packs as revenue stream.
                </p>
                <p className="text-sm font-semibold text-[var(--color-primary)] mt-4">
                  Business Value: Serve 20-30+ specialized verticals profitably. New revenue stream
                  selling Niche Packs to advisors.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Enterprise Infrastructure</h2>
            <Card className="bg-gray-50 font-mono text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Storage:</p>
                  <p className="text-[var(--color-text-secondary)]">Azure AI Search (vector database)</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Embeddings:</p>
                  <p className="text-[var(--color-text-secondary)]">Azure OpenAI</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Generation:</p>
                  <p className="text-[var(--color-text-secondary)]">Azure OpenAI (GPT-4 class)</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Chunk Size:</p>
                  <p className="text-[var(--color-text-secondary)]">150 words per semantic unit</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Citations:</p>
                  <p className="text-[var(--color-text-secondary)]">2-3 mandatory per chunk</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Retrieval:</p>
                  <p className="text-[var(--color-text-secondary)]">Two-tier semantic search</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Validation:</p>
                  <p className="text-[var(--color-text-secondary)]">101 deterministic rules per niche</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Formulas:</p>
                  <p className="text-[var(--color-text-secondary)]">52 universal + ~20 niche-specific (hardcoded)</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Privacy:</p>
                  <p className="text-[var(--color-text-secondary)]">No client PII stored permanently</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Generation Time:</p>
                  <p className="text-[var(--color-text-secondary)]">40 seconds per scenario</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Report Output:</p>
                  <p className="text-[var(--color-text-secondary)]">10-15 pages PDF with citations</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 !text-white">See the Complete Platform</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Watch Platform Demo
              </Button>
              <Button href="/book" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Schedule Deep-Dive Discussion
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

