import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Calendar, Mail, CheckCircle } from "lucide-react";

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your VelocityIQ Pilot Discussion
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)]">
              Let's discuss how VelocityIQ can provide systematic risk mitigation, exam-ready
              compliance documentation, and competitive AI intelligence for your platform.
            </p>
          </div>
        </section>

        {/* What We'll Discuss */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">20-Minute Focused Conversation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </section>

        {/* Calendly Embed */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-xl border border-[var(--color-border-subtle)] p-12 text-center">
              <Calendar className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Schedule Your Pilot Discussion</h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Meeting type: "VelocityIQ Pilot Discussion" | Duration: 20 minutes
              </p>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  Calendly embed will be configured here. Pre-call questions:
                </p>
                <ul className="text-left text-sm text-[var(--color-text-secondary)] space-y-2 max-w-md mx-auto">
                  <li>• Company/Platform Name</li>
                  <li>• Your Role</li>
                  <li>• Number of Advisors</li>
                  <li>• Primary Niches Your Advisors Serve</li>
                  <li>• What Interested You Most in the Demo?</li>
                  <li>• Timeline for Evaluation/Decision</li>
                </ul>
              </div>
              <Button href="mailto:admin@getvelocityiq.com?subject=VelocityIQ Pilot Discussion Request" variant="primary">
                Book via Email (Calendly Coming Soon)
              </Button>
            </div>
          </div>
        </section>

        {/* Prefer Email */}
        <section className="py-12 bg-white border-t border-[var(--color-border-subtle)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Not Ready to Schedule Yet?</h3>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Have questions first? Email us directly:
            </p>
            <a
              href="mailto:admin@getvelocityiq.com"
              className="text-[var(--color-primary)] hover:underline font-semibold text-lg"
            >
              admin@getvelocityiq.com
            </a>
            <p className="text-sm text-[var(--color-text-secondary)] mt-4">
              We typically respond within 24 business hours.
            </p>
          </div>
        </section>

        {/* Pilot Program Snapshot */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6">
            <Card className="bg-[var(--color-primary)] text-white border-none">
              <h2 className="text-3xl font-bold mb-8 text-center !text-white">Pilot Program Snapshot</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold mb-2">Duration:</p>
                  <p className="mb-4">60-90 days</p>
                  <p className="font-semibold mb-2">Participants:</p>
                  <p className="mb-4">5-10 advisors per platform</p>
                  <p className="font-semibold mb-2">Niche:</p>
                  <p>Business-owning HNWIs (tech startups initially)</p>
                </div>
                <div>
                  <p className="font-semibold mb-4">Includes:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Full system access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Training and onboarding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Direct development team access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Influence on roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Early adopter pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Testimonial opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="font-semibold mb-4">Requirements:</p>
                <ul className="space-y-2 text-sm">
                  <li>• 50+ advisor platform or large RIA firm</li>
                  <li>• Active usage and feedback commitment</li>
                  <li>• Testimonials upon successful validation</li>
                  <li>• Strong compliance culture</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Is Your Platform a Good Fit */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Ideal Pilot Partners</h2>
            <Card>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text-secondary)]">RIA platforms with 50+ advisors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text-secondary)]">Large RIA firms committed to AI-powered advisory</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text-secondary)]">Advisors serving business-owning HNWIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text-secondary)]">Strong compliance culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text-secondary)]">Decision-makers with budget authority</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text-secondary)]">Timeline: Evaluation complete by end of January 2026</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-blue-50 rounded border-l-4 border-[var(--color-primary)]">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  <strong>Not Sure?</strong> Book the call anyway—we'll discuss fit and alternatives.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12 bg-[var(--color-surface)] border-t border-[var(--color-border-subtle)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[var(--color-text-secondary)]">
              Questions? Email{" "}
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

