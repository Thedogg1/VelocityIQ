import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Platform Demo: Risk Mitigation, Compliance Documentation, and AI Intelligence
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-4">
              This 10-minute walkthrough shows how VelocityIQ delivers systematic liability
              defense through 101 validation rules, exam-ready compliance documentation through
              glass-box architecture, and competitive AI capabilities through in-meeting
              intelligence.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Designed for: RIA platform executives, large RIA firm leadership, and compliance
              officers evaluating AI-powered advisory tools.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-black rounded-xl overflow-hidden aspect-video mb-8 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xl mb-4">Video Player Placeholder</p>
                <p className="text-sm opacity-75">
                  Duration: 10-12 minutes | Platform: Vimeo or YouTube (unlisted)
                </p>
                <p className="text-sm opacity-75 mt-2">
                  Video content will be embedded here
                </p>
              </div>
            </div>

            {/* Immediate CTAs */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-6">Ready for Next Steps?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/book" variant="primary">
                  Schedule Pilot Discussion
                </Button>
                <Button
                  href={`mailto:admin@getvelocityiq.com?subject=${encodeURIComponent('Sample Report Request - Tech Startup Niche')}&body=${encodeURIComponent(`I watched the VelocityIQ platform demo and would like to request a sample report.

My Information:
Name:
Company/Platform:
Business Email:
Number of Advisors:

I'd like to use:
[ ] Sample dummy data (you provide scenario)
[ ] My own anonymized client scenario (I'll provide details below)

[If providing own scenario, include details here]`)}`}
                  variant="secondary"
                >
                  Request Sample Report
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Calendly Embed Section */}
        <section className="py-16 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Schedule Your Pilot Discussion
            </h2>
            <p className="text-center text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
              Let's discuss how VelocityIQ can provide systematic risk mitigation and
              compliance documentation for your platform. This 20-minute call will cover:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <h3 className="font-semibold mb-3">Your Platform's Needs</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>• Current liability and compliance challenges</li>
                  <li>• Advisor feedback on AI tools</li>
                  <li>• Target client niches and complexity</li>
                </ul>
              </Card>
              <Card>
                <h3 className="font-semibold mb-3">VelocityIQ Capabilities</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>• 101-rule validation system demonstration</li>
                  <li>• Glass-box compliance architecture</li>
                  <li>• In-meeting intelligence capabilities</li>
                </ul>
              </Card>
              <Card>
                <h3 className="font-semibold mb-3">January 2026 Pilot Program</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>• Requirements and timeline</li>
                  <li>• What we provide vs. what we need from you</li>
                  <li>• Early adopter benefits</li>
                </ul>
              </Card>
              <Card>
                <h3 className="font-semibold mb-3">Next Steps</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>• Technical evaluation process</li>
                  <li>• Integration planning</li>
                  <li>• Pilot agreement terms</li>
                </ul>
              </Card>
            </div>

            {/* Calendly Embed Placeholder */}
            <div className="bg-white rounded-xl border border-[var(--color-border-subtle)] p-12 text-center">
              <p className="text-lg font-semibold mb-4">Calendly Calendar Embed</p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                Meeting type: "VelocityIQ Pilot Discussion" | Duration: 20 minutes
              </p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Calendly embed will be configured here. Pre-call questions: Company name,
                Number of advisors, Primary niches served, What interested you most in demo?,
                Timeline for decision
              </p>
              <div className="mt-6">
                <Button href="/book" variant="primary">
                  Book via Calendly
                </Button>
              </div>
            </div>

            <p className="text-center mt-8 text-[var(--color-text-secondary)]">
              Prefer email? Contact{" "}
              <a
                href="mailto:admin@getvelocityiq.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                admin@getvelocityiq.com
              </a>
            </p>
          </div>
        </section>

        {/* Supporting Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick FAQs */}
              <Card>
                <h3 className="text-xl font-semibold mb-4">Common Questions</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold mb-2">Q: Can we see niches beyond tech startups?</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      A: Post-pilot. We're starting with business-owning HNWIs (tech focus for
                      January). Your input shapes which niches we build next—including Niche Packs
                      as potential revenue stream.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Q: What's the implementation timeline?</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      A: Pilot starts January 2026. 5-10 advisors from your platform. Full rollout
                      depends on pilot success, typically 30-60 days after.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Q: How much does this cost?</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      A: Pilot pricing is part of our discussion. We're optimizing for learning
                      and feedback. Let's talk about fit first.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Pilot Overview */}
              <Card>
                <h3 className="text-xl font-semibold mb-4">Pilot Program</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Start:</p>
                    <p className="text-[var(--color-text-secondary)]">January 2026</p>
                  </div>
                  <div>
                    <p className="font-semibold">Duration:</p>
                    <p className="text-[var(--color-text-secondary)]">60-90 days</p>
                  </div>
                  <div>
                    <p className="font-semibold">Participants:</p>
                    <p className="text-[var(--color-text-secondary)]">5-10 advisors per platform</p>
                  </div>
                  <div>
                    <p className="font-semibold">Niche:</p>
                    <p className="text-[var(--color-text-secondary)]">
                      Business-owning HNWIs (tech startups)
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="font-semibold mb-2">Includes:</p>
                    <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                      <li>• Full system access</li>
                      <li>• Training and onboarding</li>
                      <li>• Direct development team access</li>
                      <li>• Influence on roadmap</li>
                      <li>• Early adopter pricing</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Market Context */}
              <Card>
                <h3 className="text-xl font-semibold mb-4">The Opportunity</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-[var(--color-primary)]">
                      → 1-1.5 million US business-owning HNWIs seeking AI-assisted insights
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-primary)]">
                      → 79% of younger HNWIs want advisors using AI
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-primary)]">
                      → 35% would switch advisors without technology
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-primary)]">
                      → Business owners have highest liability exposure and complexity
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)]">
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      <strong>Source:</strong> Henley & Partners 2024, Boosted.ai/InvestmentNews
                      2024, RFI 2025
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 bg-[var(--color-surface)] border-t border-[var(--color-border-subtle)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[var(--color-text-secondary)]">
              Questions before booking? Email{" "}
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

