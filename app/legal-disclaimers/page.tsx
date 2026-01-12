import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import type { Metadata } from "next";
import { AlertTriangle, Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimers | VelocityIQ Platform Limitations",
  description: "Important legal disclaimers about VelocityIQ decision-support tools. Understand advisor responsibilities and platform limitations.",
  keywords: ["legal disclaimers", "investment advice disclaimer", "compliance disclaimer", "liability limitations", "professional responsibility"],
  openGraph: {
    title: "Legal Disclaimers - VelocityIQ",
    description: "Platform limitations and advisor responsibilities",
    type: "website",
    url: "https://getvelocityiq.com/legal-disclaimers",
    images: [{ url: "/images/legal-notice-badge.jpg" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Disclaimers - VelocityIQ",
    description: "Platform limitations and advisor responsibilities",
    images: ["/images/legal-notice-badge.jpg"],
  },
  alternates: {
    canonical: "https://getvelocityiq.com/legal-disclaimers",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegalDisclaimersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <AlertTriangle className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Legal Disclaimers
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Consolidated disclaimers for reference
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimers Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-8">
              {/* Investment Advice Disclaimer */}
              <Card className="bg-red-50 border-l-4 border-[var(--color-critical)]">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 text-[var(--color-critical)] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Investment Advice Disclaimer</h2>
                    <p className="text-[var(--color-text-secondary)]">
                      VelocityIQ does not provide investment advice, make investment recommendations,
                      or act as an investment advisor or broker-dealer. All investment advice must be
                      provided by licensed financial professionals who are solely responsible for their
                      recommendations.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Suitability Determination Disclaimer */}
              <Card className="bg-amber-50 border-l-4 border-[var(--color-warning)]">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="w-8 h-8 text-[var(--color-warning)] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Suitability Determination Disclaimer</h2>
                    <p className="text-[var(--color-text-secondary)]">
                      VelocityIQ provides analysis tools to support advisor suitability determinations.
                      VelocityIQ does not make suitability determinations. Advisors must review system
                      analysis, apply independent professional judgment, and make their own suitability
                      determinations for which they are solely responsible.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Regulatory Compliance Disclaimer */}
              <Card className="bg-red-50 border-l-4 border-[var(--color-critical)]">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 text-[var(--color-critical)] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Regulatory Compliance Disclaimer</h2>
                    <p className="text-[var(--color-text-secondary)]">
                      Use of VelocityIQ does not ensure compliance with FINRA Rule 2111, AML/BSA
                      regulations, or any other regulatory requirements. Advisors and firms remain
                      solely responsible for all regulatory compliance obligations.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Accuracy Disclaimer */}
              <Card className="bg-amber-50 border-l-4 border-[var(--color-warning)]">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-[var(--color-warning)] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Accuracy Disclaimer</h2>
                    <p className="text-[var(--color-text-secondary)]">
                      While VelocityIQ strives for accuracy, system analysis may contain errors,
                      omissions, or inaccuracies. Users must independently verify all information and
                      analysis. VelocityIQ is not liable for errors or reliance on system output.
                    </p>
                  </div>
                </div>
              </Card>

              {/* No Warranty Disclaimer */}
              <Card className="bg-red-50 border-l-4 border-[var(--color-critical)]">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 text-[var(--color-critical)] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">No Warranty Disclaimer</h2>
                    <p className="text-[var(--color-text-secondary)]">
                      Platform provided "as is" without warranties of any kind. VelocityIQ disclaims
                      all warranties regarding accuracy, completeness, reliability, fitness for purpose,
                      or outcomes.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Liability Limitation */}
              <Card className="bg-red-50 border-l-4 border-[var(--color-critical)]">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 text-[var(--color-critical)] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Liability Limitation</h2>
                    <p className="text-[var(--color-text-secondary)]">
                      VelocityIQ is not liable for advisor determinations, client outcomes, regulatory
                      violations, or any direct, indirect, incidental, or consequential damages arising
                      from platform use.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Professional Responsibility */}
              <Card className="bg-blue-50 border-l-4 border-[var(--color-primary)]">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Professional Responsibility</h2>
                    <p className="text-[var(--color-text-secondary)]">
                      All professional determinations, judgments, recommendations, and advisory services
                      remain sole responsibility of licensed financial professionals. Platform use does
                      not transfer, reduce, or eliminate professional responsibility.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact */}
              <Card className="bg-blue-50">
                <h3 className="text-xl font-semibold mb-2">Questions About These Disclaimers?</h3>
                <p className="text-[var(--color-text-secondary)]">
                  Contact: <a href="mailto:admin@getvelocityiq.com" className="text-[var(--color-primary)] hover:underline">admin@getvelocityiq.com</a>
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                  For complete legal terms, please review our <a href="/terms" className="text-[var(--color-primary)] hover:underline">Terms of Service</a>.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


















