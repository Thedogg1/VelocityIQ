import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import type { Metadata } from "next";
import { FileText, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | VelocityIQ Decision-Support Platform",
  description: "Terms of Service for VelocityIQ platform. Review user responsibilities, limitations of liability, and legal terms for decision-support tool usage.",
  keywords: ["terms of service", "user agreement", "platform terms", "legal terms", "software license agreement"],
  openGraph: {
    title: "Terms of Service - VelocityIQ",
    description: "Legal terms and conditions for platform use",
    type: "website",
    url: "https://getvelocityiq.com/terms",
    images: [{ url: "/images/legal-notice-badge.jpg" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - VelocityIQ",
    description: "Legal terms and conditions for platform use",
    images: ["/images/legal-notice-badge.jpg"],
  },
  alternates: {
    canonical: "https://getvelocityiq.com/terms",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <FileText className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Last Updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Section 1 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-[var(--color-text-secondary)]">
                  By accessing or using VelocityIQ platform, you agree to be bound by these Terms
                  of Service. If you do not agree to these terms, do not use the platform.
                </p>
              </Card>

              {/* Section 2 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  VelocityIQ provides software-as-a-service decision-support tools and analysis
                  frameworks designed to support financial advisors in evaluating investment
                  strategies and managing client relationships.
                </p>
                <div className="bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)]">
                  <p className="font-semibold mb-2">VelocityIQ DOES NOT:</p>
                  <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                    <li>• Make suitability determinations</li>
                    <li>• Provide investment advice or recommendations</li>
                    <li>• Act as investment advisor or broker-dealer</li>
                    <li>• Make risk assessments or compliance determinations</li>
                    <li>• Guarantee regulatory compliance</li>
                    <li>• Replace professional advisor judgment</li>
                  </ul>
                </div>
              </Card>

              {/* Section 3 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">3. User Eligibility and Requirements</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Platform may only be used by:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Licensed financial professionals</li>
                  <li>• Individuals under appropriate supervisory oversight</li>
                  <li>• Users who comply with all applicable securities regulations</li>
                  <li>• Users who maintain required professional credentials</li>
                </ul>
                <p className="text-[var(--color-text-secondary)] mt-4">
                  Users represent and warrant they have authority to enter into these terms.
                </p>
              </Card>

              {/* Section 4 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Users are solely responsible for:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Reviewing all system-generated analysis</li>
                  <li>• Applying independent professional judgment</li>
                  <li>• Making all suitability determinations</li>
                  <li>• Making all risk assessments and compliance decisions</li>
                  <li>• Providing all investment advice and recommendations to clients</li>
                  <li>• Documenting all determinations and client interactions</li>
                  <li>• Complying with all applicable securities regulations</li>
                  <li>• Following firm policies and procedures</li>
                  <li>• Maintaining appropriate supervision</li>
                  <li>• Verifying accuracy of all data and analysis</li>
                  <li>• All aspects of client relationships and advisory services</li>
                </ul>
              </Card>

              {/* Section 5 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Users may not:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Rely solely on system analysis for determinations</li>
                  <li>• Use platform in violation of securities regulations</li>
                  <li>• Use platform without appropriate supervision</li>
                  <li>• Share access credentials with unauthorized persons</li>
                  <li>• Attempt to reverse engineer or copy platform</li>
                  <li>• Use platform for unlawful purposes</li>
                  <li>• Misrepresent platform capabilities to clients or regulators</li>
                </ul>
              </Card>

              {/* Section 6 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">6. Disclaimers and "AS IS" Provision</h2>
                <div className="bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)] mb-4">
                  <p className="font-semibold text-lg mb-2">PLATFORM PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND</p>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  VelocityIQ disclaims all warranties, express or implied, including:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] mb-4">
                  <li>• Warranties of merchantability or fitness for particular purpose</li>
                  <li>• Warranties regarding accuracy or completeness of analysis</li>
                  <li>• Warranties regarding regulatory compliance</li>
                  <li>• Warranties regarding client outcomes</li>
                  <li>• Warranties regarding freedom from errors</li>
                </ul>
                <p className="text-[var(--color-text-secondary)]">
                  System analysis may contain errors, omissions, or inaccuracies. Users must
                  independently verify all information.
                </p>
              </Card>

              {/* Section 7 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <div className="bg-red-50 p-4 rounded border-l-4 border-[var(--color-critical)] mb-4">
                  <p className="font-semibold mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  VelocityIQ shall not be liable for:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] mb-4">
                  <li>• Advisor determinations or client recommendations</li>
                  <li>• Client outcomes or investment results</li>
                  <li>• Regulatory violations or enforcement actions</li>
                  <li>• Errors or omissions in system analysis</li>
                  <li>• Loss of data or business interruption</li>
                  <li>• Any indirect, incidental, special, consequential, or punitive damages</li>
                </ul>
                <div className="bg-amber-50 p-4 rounded">
                  <p className="font-semibold">MAXIMUM LIABILITY LIMITED TO FEES PAID IN PRECEDING 12 MONTHS</p>
                </div>
              </Card>

              {/* Section 8 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Users agree to indemnify, defend, and hold harmless VelocityIQ from all claims,
                  damages, losses, and expenses (including legal fees) arising from:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• User&apos;s use or misuse of platform</li>
                  <li>• User&apos;s determinations and recommendations to clients</li>
                  <li>• User&apos;s violation of these terms</li>
                  <li>• User&apos;s violation of applicable laws or regulations</li>
                  <li>• Client claims related to user&apos;s advisory services</li>
                </ul>
              </Card>

              {/* Section 9 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">9. Data and Privacy</h2>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• User data subject to Privacy Policy</li>
                  <li>• VelocityIQ maintains security measures but users remain responsible for data protection compliance</li>
                  <li>• Users grant VelocityIQ right to use anonymized data for platform improvement</li>
                  <li>• Client data remains property of user/firm</li>
                </ul>
              </Card>

              {/* Section 10 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">10. Modification and Termination</h2>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• VelocityIQ may modify terms with notice</li>
                  <li>• Either party may terminate with notice</li>
                  <li>• Certain provisions survive termination (liability limitations, indemnification)</li>
                </ul>
              </Card>

              {/* Section 11 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Dispute Resolution</h2>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Governed by laws of [Jurisdiction]</li>
                  <li>• Disputes subject to binding arbitration</li>
                  <li>• Class action waiver</li>
                </ul>
              </Card>

              {/* Section 12 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">12. Entire Agreement</h2>
                <p className="text-[var(--color-text-secondary)]">
                  These terms constitute entire agreement between parties regarding platform use.
                </p>
              </Card>

              {/* Contact */}
              <Card className="bg-blue-50">
                <h3 className="text-xl font-semibold mb-2">Questions About These Terms?</h3>
                <p className="text-[var(--color-text-secondary)]">
                  Contact: <a href="mailto:admin@getvelocityiq.com" className="text-[var(--color-primary)] hover:underline">admin@getvelocityiq.com</a>
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


















