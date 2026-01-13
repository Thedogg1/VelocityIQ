"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { CheckCircle, Calendar, FileText, Users, Shield, AlertTriangle, Mail, X } from "lucide-react";

export default function BookPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    contactTitle: "",
    email: "",
    phone: "",
    website: "",
    numAdvisors: "",
    numClients: "",
    aum: "",
    markets: "",
    crm: "",
    otherTech: "",
    integrationPriorities: "",
    interestReason: "",
    challenges: "",
    pilotAdvisors: "",
    timeline: "",
    complianceOfficer: "",
    suitabilityApproach: "",
    fintechExperience: "",
    acknowledgments: {
      decisionSupport: false,
      advisorResponsibility: false,
      noComplianceGuarantee: false,
      authority: false,
      agreementTerms: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showConfirmationErrorModal, setShowConfirmationErrorModal] = useState(false);
  const [applicantEmail, setApplicantEmail] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      acknowledgments: {
        ...prev.acknowledgments,
        [name]: !prev.acknowledgments[name as keyof typeof prev.acknowledgments],
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Store applicant email before resetting form
        setApplicantEmail(formData.email);
        
        // Reset form
        setFormData({
          companyName: "",
          contactName: "",
          contactTitle: "",
          email: "",
          phone: "",
          website: "",
          numAdvisors: "",
          numClients: "",
          aum: "",
          markets: "",
          crm: "",
          otherTech: "",
          integrationPriorities: "",
          interestReason: "",
          challenges: "",
          pilotAdvisors: "",
          timeline: "",
          complianceOfficer: "",
          suitabilityApproach: "",
          fintechExperience: "",
          acknowledgments: {
            decisionSupport: false,
            advisorResponsibility: false,
            noComplianceGuarantee: false,
            authority: false,
            agreementTerms: false,
          },
        });
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setSubmitStatus('error');
        
        // Show modal if initial submission failed
        if (errorData.initialSubmissionFailed) {
          setShowConfirmationErrorModal(true);
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setShowConfirmationErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Application Submitted Successfully!</h3>
                  <p className="text-green-800 mb-2">
                    Thank you for your application{applicantEmail && ` from ${applicantEmail}`}. We&apos;ve received your application and will review it shortly.
                  </p>
                  <p className="text-green-800">
                    We&apos;ll review your application and contact you within 2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Submission Error</h3>
                  <p className="text-red-800 mb-2">
                    There was an error submitting your application. Please try again or contact us directly at <a href="mailto:admin@getvelocityiq.com" className="underline font-semibold">admin@getvelocityiq.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submission Error Modal */}
        {showConfirmationErrorModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
              <button
                onClick={() => setShowConfirmationErrorModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Submission Error
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We encountered an issue submitting your application. Please try again later, or contact us directly via SMS at <a href="sms:+447842024151" className="text-[var(--color-primary)] hover:underline font-semibold">+44 7842 024151</a>.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    We&apos;ve been notified of this issue and will investigate immediately.
                  </p>
                  <button
                    onClick={() => setShowConfirmationErrorModal(false)}
                    className="w-full px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Apply for January 2026 Pilot Program
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                Limited pilot spots available for RIA platforms and large RIA firms committed to
                systematic analysis tools and clear professional responsibility framework.
              </p>
              <div className="mb-8">
                <Image
                  src="/images/pilot-application-responsibility.v2.png"
                  alt="Application interface with advisor responsibility acknowledgment"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Calendly Scheduling Widget */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Schedule a Call
            </h2>
            <p className="text-xl text-center text-[var(--color-text-secondary)] mb-8">
              Book a 30-minute qualification call to discuss the pilot program
            </p>
            <Card className="p-6">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/velocityiq/30min" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </Card>
          </div>
        </section>

        {/* Pilot Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Pilot Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-2xl font-semibold mb-4">What&apos;s Included:</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>FINRA 2111 suitability analysis framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>73-rule risk identification system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>FinCEN-aligned AML risk assessment tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Business-owning HNWI niche (production-ready)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>In-meeting scenario analysis capability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Complete documentation and audit trail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Direct access to development team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Influence on feature priorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Early adopter pricing</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-2xl font-semibold mb-4">Pilot Duration:</h3>
                <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                  January 2026 launch - 3-month initial pilot period with option to extend
                </p>
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-semibold mb-2 text-sm">What We Provide:</h4>
                  <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                    <li>• Comprehensive onboarding and training</li>
                    <li>• Direct support from development team</li>
                    <li>• Priority for enhancement requests</li>
                    <li>• Regular check-ins and feedback sessions</li>
                    <li>• Early adopter pricing advantages</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What We're Looking For */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">What We&apos;re Looking For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <Users className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Ideal Pilot Partners:</h3>
                <div className="mb-6">
                  <p className="font-semibold mb-2 text-sm">Platform Requirements:</p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                      <span>RIA platforms with 50+ advisors OR large RIA firms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                      <span>Strong compliance and supervisory culture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                      <span>Commitment to systematic analysis methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                      <span>Understanding of decision-support tool positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                      <span>Willingness to provide structured feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                      <span>Advisors serving business-owning HNWIs</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card>
                <Shield className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Pilot Commitments:</h3>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>5-10 advisors actively using platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Regular feedback on analysis tool effectiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Compliance review of documentation approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Willingness to provide testimonial upon successful validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                    <span>Participation in post-pilot case study (if appropriate)</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3">Submit Application</h3>
                <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                  <li>→ Complete application form</li>
                  <li>→ Provide platform/firm information</li>
                  <li>→ Describe advisor network</li>
                  <li>→ Explain pilot interest</li>
                </ul>
              </Card>

              <Card>
                <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3">Qualification Call</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mb-2">30 minutes</p>
                <ul className="space-y-1 text-xs text-[var(--color-text-secondary)] mb-3">
                  <li>→ Review platform fit</li>
                  <li>→ Discuss needs</li>
                  <li>→ Explain pilot structure</li>
                  <li>→ Assess mutual fit</li>
                </ul>
                <Link 
                  href="https://calendly.com/velocityiq/30min"
                  className="inline-flex items-center justify-center w-full text-xs py-2 px-4 rounded-lg bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-gray-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Call
                </Link>
              </Card>

              <Card>
                <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3">Technical Review</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mb-2">45 minutes</p>
                <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                  <li>→ Deeper demonstration</li>
                  <li>→ Architecture discussion</li>
                  <li>→ Security review</li>
                  <li>→ Customization options</li>
                </ul>
              </Card>

              <Card>
                <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-3">Pilot Agreement</h3>
                <ul className="space-y-1 text-xs text-[var(--color-text-secondary)]">
                  <li>→ Review legal terms</li>
                  <li>→ Finalize scope</li>
                  <li>→ Establish metrics</li>
                  <li>→ Sign agreement</li>
                  <li>→ Schedule onboarding</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-[var(--color-surface)]" id="application-form">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Application Form</h2>
            <Card>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Company Information */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Company Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-semibold mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-semibold mb-2">
                        Primary Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactTitle" className="block text-sm font-semibold mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        id="contactTitle"
                        name="contactTitle"
                        required
                        value={formData.contactTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-semibold mb-2">
                        Company Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Platform/Firm Profile */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Platform/Firm Profile</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="numAdvisors" className="block text-sm font-semibold mb-2">
                        Number of Advisors *
                      </label>
                      <input
                        type="number"
                        id="numAdvisors"
                        name="numAdvisors"
                        required
                        value={formData.numAdvisors}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="numClients" className="block text-sm font-semibold mb-2">
                        Estimated Business-Owning HNWI Clients
                      </label>
                      <input
                        type="number"
                        id="numClients"
                        name="numClients"
                        value={formData.numClients}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="aum" className="block text-sm font-semibold mb-2">
                        Current AUM or Annual Revenue Range
                      </label>
                      <input
                        type="text"
                        id="aum"
                        name="aum"
                        value={formData.aum}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="markets" className="block text-sm font-semibold mb-2">
                        Primary Geographic Markets
                      </label>
                      <input
                        type="text"
                        id="markets"
                        name="markets"
                        value={formData.markets}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Technology Environment */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Technology Environment</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="crm" className="block text-sm font-semibold mb-2">
                        Current CRM System
                      </label>
                      <input
                        type="text"
                        id="crm"
                        name="crm"
                        value={formData.crm}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="otherTech" className="block text-sm font-semibold mb-2">
                        Other Key Technology Systems
                      </label>
                      <input
                        type="text"
                        id="otherTech"
                        name="otherTech"
                        value={formData.otherTech}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="integrationPriorities" className="block text-sm font-semibold mb-2">
                        Integration Priorities
                      </label>
                      <textarea
                        id="integrationPriorities"
                        name="integrationPriorities"
                        rows={3}
                        value={formData.integrationPriorities}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Pilot Interest */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Pilot Interest</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="interestReason" className="block text-sm font-semibold mb-2">
                        Why are you interested in VelocityIQ pilot? *
                      </label>
                      <textarea
                        id="interestReason"
                        name="interestReason"
                        required
                        rows={4}
                        value={formData.interestReason}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="challenges" className="block text-sm font-semibold mb-2">
                        What specific challenges are you looking to address? *
                      </label>
                      <textarea
                        id="challenges"
                        name="challenges"
                        required
                        rows={4}
                        value={formData.challenges}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="pilotAdvisors" className="block text-sm font-semibold mb-2">
                        How many advisors would participate in pilot? *
                      </label>
                      <input
                        type="number"
                        id="pilotAdvisors"
                        name="pilotAdvisors"
                        required
                        value={formData.pilotAdvisors}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold mb-2">
                        Timeline and decision-making process
                      </label>
                      <textarea
                        id="timeline"
                        name="timeline"
                        rows={3}
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Compliance Structure */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Compliance Structure</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="complianceOfficer" className="block text-sm font-semibold mb-2">
                        Who oversees advisor compliance and supervision?
                      </label>
                      <input
                        type="text"
                        id="complianceOfficer"
                        name="complianceOfficer"
                        value={formData.complianceOfficer}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="suitabilityApproach" className="block text-sm font-semibold mb-2">
                        Current approach to suitability documentation
                      </label>
                      <textarea
                        id="suitabilityApproach"
                        name="suitabilityApproach"
                        rows={3}
                        value={formData.suitabilityApproach}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="fintechExperience" className="block text-sm font-semibold mb-2">
                        Experience with fintech/AI tools in advisory practice
                      </label>
                      <textarea
                        id="fintechExperience"
                        name="fintechExperience"
                        rows={3}
                        value={formData.fintechExperience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Understanding and Acknowledgment */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Understanding and Acknowledgment</h3>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.acknowledgments.decisionSupport}
                        onChange={() => handleCheckboxChange("decisionSupport")}
                        className="mt-1 w-5 h-5"
                        required
                      />
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        I understand VelocityIQ provides decision-support tools, not investment advice
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.acknowledgments.advisorResponsibility}
                        onChange={() => handleCheckboxChange("advisorResponsibility")}
                        className="mt-1 w-5 h-5"
                        required
                      />
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        I understand advisors remain responsible for all determinations and recommendations
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.acknowledgments.noComplianceGuarantee}
                        onChange={() => handleCheckboxChange("noComplianceGuarantee")}
                        className="mt-1 w-5 h-5"
                        required
                      />
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        I understand use of tools does not ensure compliance or eliminate liability
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.acknowledgments.authority}
                        onChange={() => handleCheckboxChange("authority")}
                        className="mt-1 w-5 h-5"
                        required
                      />
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        I have authority to explore pilot participation on behalf of my organization
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.acknowledgments.agreementTerms}
                        onChange={() => handleCheckboxChange("agreementTerms")}
                        className="mt-1 w-5 h-5"
                        required
                      />
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        I understand pilot agreement will include specific terms regarding responsibilities and liability
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </section>

        {/* Rest of sections remain the same... */}
        {/* What Happens After Application */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Timeline and Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <h3 className="text-lg font-semibold mb-3">Within 2 Business Days</h3>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                  <li>→ Application review</li>
                  <li>→ Email confirmation</li>
                  <li>→ Initial fit assessment</li>
                </ul>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold mb-3">Within 1 Week</h3>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)] mb-3">
                  <li>→ Qualification call scheduled</li>
                  <li>→ Or polite decline (if not fit)</li>
                </ul>
                <Link 
                  href="https://calendly.com/velocityiq/30min"
                  className="inline-flex items-center justify-center w-full text-xs py-2 px-4 rounded-lg bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-gray-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Now
                </Link>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold mb-3">If Qualified - Week 2</h3>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                  <li>→ Technical review session</li>
                  <li>→ Pilot structure discussion</li>
                  <li>→ Q&A about capabilities</li>
                </ul>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold mb-3">If Proceeding - Week 3-4</h3>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                  <li>→ Pilot agreement review</li>
                  <li>→ Onboarding scheduled</li>
                  <li>→ January 2026 launch</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Questions Before Applying */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Questions Before Applying?</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-6">
              Contact: <a href="mailto:admin@getvelocityiq.com" className="text-[var(--color-primary)] hover:underline font-semibold">admin@getvelocityiq.com</a>
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">Subject line: &quot;January 2026 Pilot Inquiry&quot;</p>
            <Card className="bg-blue-50">
              <h3 className="text-xl font-semibold mb-4">We&apos;re Happy to Discuss:</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] text-left max-w-2xl mx-auto">
                <li>• Whether your platform/firm is a good fit for pilot</li>
                <li>• Specific capabilities and legal positioning questions</li>
                <li>• Technical requirements and integration considerations</li>
                <li>• Pilot structure and commitment details</li>
                <li>• Post-pilot options and pricing</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <Card className="bg-red-50 border-l-4 border-[var(--color-critical)]">
              <h3 className="text-2xl font-semibold mb-4">IMPORTANT NOTICE:</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                Application for pilot program does not constitute agreement or commitment by either
                party. Pilot participation subject to execution of pilot agreement containing specific
                terms regarding tool usage, responsibilities, liability limitations, and other conditions.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                VelocityIQ provides decision-support tools. Advisors remain solely responsible for
                all determinations, recommendations, and compliance obligations. Use of VelocityIQ
                tools does not ensure regulatory compliance or eliminate advisor liability.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                Pilot agreement will include detailed terms and conditions, limitations of liability,
                warranties and disclaimers, and allocation of responsibilities. Legal review by your
                counsel is strongly recommended before signing pilot agreement.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                By applying, you acknowledge understanding that VelocityIQ provides technology tools,
                not investment advice or regulatory compliance services, and that professional
                responsibility for all advisory activities remains with licensed advisors and their
                supervising firms.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 !text-white">
              Ready to Join January 2026 Pilot?
            </h2>
            <p className="text-xl mb-12 text-white">
              Limited pilot spots for platforms committed to systematic analysis tools with
              clear professional responsibility framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="#application-form" variant="secondary" className="bg-white text-[var(--color-primary)] hover:bg-blue-50">
                Complete Application
              </Button>
              <Link
                href="https://calendly.com/velocityiq/30min"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[var(--color-primary)] hover:bg-blue-50 transition-colors font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-5 h-5" />
                Schedule Discussion First
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
