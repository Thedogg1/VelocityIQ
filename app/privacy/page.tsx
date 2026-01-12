import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import type { Metadata } from "next";
import { Shield, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | VelocityIQ Data Protection and Security",
  description: "VelocityIQ Privacy Policy. Learn how we collect, use, and protect your data with enterprise-grade security measures and compliance standards.",
  keywords: ["privacy policy", "data protection", "data security", "GDPR compliance", "data privacy", "information security"],
  openGraph: {
    title: "Privacy Policy - VelocityIQ",
    description: "Data protection and privacy practices",
    type: "website",
    url: "https://getvelocityiq.com/privacy",
    images: [{ url: "/images/legal-notice-badge.jpg" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - VelocityIQ",
    description: "Data protection and privacy practices",
    images: ["/images/legal-notice-badge.jpg"],
  },
  alternates: {
    canonical: "https://getvelocityiq.com/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Last Updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Section 1 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Types of information collected:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Account information (name, email, firm details)</li>
                  <li>• Client data entered into platform</li>
                  <li>• Usage data (features used, session logs)</li>
                  <li>• Technical data (IP address, browser type)</li>
                </ul>
              </Card>

              {/* Section 2 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Information used for:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Providing and improving platform services</li>
                  <li>• Generating analysis and reports</li>
                  <li>• Customer support</li>
                  <li>• Security and fraud prevention</li>
                  <li>• Compliance with legal obligations</li>
                  <li>• Anonymized data analysis for platform improvement</li>
                </ul>
              </Card>

              {/* Section 3 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">3. How We Share Information</h2>
                <p className="text-[var(--color-text-secondary)] mb-4 font-semibold">
                  We do not sell user data.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  We may share information with:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Service providers (hosting, security)</li>
                  <li>• As required by law</li>
                  <li>• With user consent</li>
                  <li>• In anonymized/aggregated form for research</li>
                </ul>
              </Card>

              {/* Section 4 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Security measures include:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] mb-4">
                  <li>• Encryption in transit and at rest</li>
                  <li>• Access controls and authentication</li>
                  <li>• Regular security audits</li>
                  <li>• Incident response procedures</li>
                </ul>
                <div className="bg-amber-50 p-4 rounded border-l-4 border-[var(--color-warning)]">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    However, no system is completely secure. Users remain responsible for data
                    protection compliance.
                  </p>
                </div>
              </Card>

              {/* Section 5 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">5. User Responsibilities</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Users must:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Maintain security of login credentials</li>
                  <li>• Comply with data protection regulations (GDPR, CCPA, etc.)</li>
                  <li>• Protect client confidentiality</li>
                  <li>• Follow firm data handling policies</li>
                  <li>• Report security incidents</li>
                </ul>
              </Card>

              {/* Section 6 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Data retained as long as account active</li>
                  <li>• May retain for legal/compliance purposes after termination</li>
                  <li>• Users may request data deletion subject to legal requirements</li>
                </ul>
              </Card>

              {/* Section 7 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Depending on jurisdiction, users may have rights to:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li>• Access personal data</li>
                  <li>• Correct inaccurate data</li>
                  <li>• Delete data</li>
                  <li>• Object to processing</li>
                  <li>• Data portability</li>
                </ul>
              </Card>

              {/* Section 8 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
                <p className="text-[var(--color-text-secondary)]">
                  Data may be transferred to and processed in countries with different data
                  protection laws. Appropriate safeguards implemented.
                </p>
              </Card>

              {/* Section 9 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">9. Changes to Privacy Policy</h2>
                <p className="text-[var(--color-text-secondary)]">
                  May update policy with notice. Continued use constitutes acceptance of changes.
                </p>
              </Card>

              {/* Section 10 */}
              <Card>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p className="text-[var(--color-text-secondary)]">
                  Questions about privacy: <a href="mailto:privacy@getvelocityiq.com" className="text-[var(--color-primary)] hover:underline">privacy@getvelocityiq.com</a>
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


















