'use client';

import { useState } from 'react';
import Card from './Card';
import Button from './Button';

interface FeedbackData {
  name: string;
  clarity: string;
  workflow: string;
  usefulFeatures: string;
  missingFeatures: string;
  improvements: string;
  email: string;
  optIn: boolean;
}

export default function FeedbackForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedWithEmail, setSubmittedWithEmail] = useState(false);
  const [showNoAccessConfirm, setShowNoAccessConfirm] = useState(false);
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    clarity: '',
    workflow: '',
    usefulFeatures: '',
    missingFeatures: '',
    improvements: '',
    email: '',
    optIn: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FeedbackData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FeedbackData, string>> = {};

    // Name is required
    if (!formData.name || formData.name.trim() === '') {
      newErrors.name = 'Full Name is required.';
    }

    // Clarity and workflow ratings are required
    if (!formData.clarity) {
      newErrors.clarity = 'Please rate the clarity of the platform purpose.';
    }
    if (!formData.workflow) {
      newErrors.workflow = 'Please rate how easy it was to understand the workflow.';
    }
    if (!formData.usefulFeatures || formData.usefulFeatures.trim() === '') {
      newErrors.usefulFeatures = 'Please tell us which features you found most useful.';
    }

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Early access validation scenarios
    const hasEmail = formData.email && formData.email.trim() !== '';
    const hasOptIn = formData.optIn;

    // Scenario 1: Email provided but no opt-in
    if (hasEmail && !hasOptIn) {
      newErrors.optIn = 'Please opt in to receive early access.';
    }

    // Scenario 2: Opt-in checked but no email
    if (hasOptIn && !hasEmail) {
      newErrors.email = 'Please enter your email to receive early access.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkEarlyAccessPreference = (): boolean => {
    const hasEmail = formData.email && formData.email.trim() !== '';
    const hasOptIn = formData.optIn;

    // Scenario: No email AND no opt-in → show confirmation
    if (!hasEmail && !hasOptIn) {
      setShowNoAccessConfirm(true);
      return false; // Don't proceed with submission yet
    }

    return true; // Proceed with normal validation
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FeedbackData]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FeedbackData];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (field: 'clarity' | 'workflow', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user selects a rating
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check early access preference first
    if (!checkEarlyAccessPreference()) {
      return; // Show confirmation dialog
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Proceed with submission
    await submitForm();
  };

  const handleConfirmNoAccess = async (confirmed: boolean) => {
    setShowNoAccessConfirm(false);

    if (confirmed) {
      // User confirmed they don't want early access, proceed with submission
      if (validateForm()) {
        await submitForm();
      }
    }
    // If not confirmed, user goes back to form (no action needed)
  };

  const submitForm = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json();

      if (res.ok) {
        // Check if email was provided before resetting
        setSubmittedWithEmail(!!(formData.email && formData.email.trim() !== ''));

        setSubmitted(true);
        setFormData({
          name: '',
          clarity: '',
          workflow: '',
          usefulFeatures: '',
          missingFeatures: '',
          improvements: '',
          email: '',
          optIn: false,
        });
      } else {
        console.error('API Error:', responseData);
        alert(responseData.error || 'Error sending feedback. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Network error occurred';
      alert(`Error sending feedback: ${errorMessage}. Please check your connection and try again.`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-[var(--color-text-primary)]">
          Thank you for your feedback!
        </h3>
        <p className="text-[var(--color-text-secondary)]">
          We appreciate your input.
          {submittedWithEmail && (
            <span> You will receive early access details via email.</span>
          )}
        </p>
      </Card>
    );
  }

  if (showNoAccessConfirm) {
    return (
      <Card className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-[var(--color-text-primary)]">
          Early Access Confirmation
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          You have opted not to receive early access. Is this correct?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => handleConfirmNoAccess(true)}
            variant="primary"
            className="w-full sm:w-auto"
          >
            Yes
          </Button>
          <Button
            onClick={() => handleConfirmNoAccess(false)}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            No
          </Button>
        </div>
      </Card>
    );
  }

  const RadioGroup = ({
    field,
    legend,
    error,
  }: {
    field: 'clarity' | 'workflow';
    legend: string;
    error?: string;
  }) => (
    <fieldset className="space-y-3">
      <legend className="block text-sm font-semibold mb-3 text-[var(--color-text-primary)]">
        {legend} *
      </legend>
      <div className="flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5].map((n) => (
          <label
            key={n}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all
              ${
                formData[field] === n.toString()
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                  : 'border-[var(--color-border-subtle)] bg-white text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--hover-bg-subtle)]'
              }
            `}
          >
            <input
              type="radio"
              name={field}
              value={n}
              checked={formData[field] === n.toString()}
              onChange={() => handleRadioChange(field, n.toString())}
              className="sr-only"
            />
            <span className="font-semibold">{n}</span>
            <span>⭐</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="text-sm text-[var(--color-critical)] mt-1">{error}</p>
      )}
    </fieldset>
  );

  return (
    <Card>
      <h2 className="text-3xl font-bold mb-6 text-[var(--color-text-primary)]">
        Share Your Feedback
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          {errors.name && (
            <p className="text-sm text-[var(--color-critical)] mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]"
          >
            Email: (optional, but required for early access)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          {errors.email && (
            <p className="text-sm text-[var(--color-critical)] mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <RadioGroup
          field="clarity"
          legend="How clear was the purpose of this platform?"
          error={errors.clarity}
        />

        <RadioGroup
          field="workflow"
          legend="How easy was it to understand the workflow?"
          error={errors.workflow}
        />

        <div>
          <label
            htmlFor="usefulFeatures"
            className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]"
          >
            Which dashboard features did you find most useful? *
          </label>
          <input
            type="text"
            id="usefulFeatures"
            name="usefulFeatures"
            required
            value={formData.usefulFeatures}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          {errors.usefulFeatures && (
            <p className="text-sm text-[var(--color-critical)] mt-1">
              {errors.usefulFeatures}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="missingFeatures"
            className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]"
          >
            Are there features you expected but didn&apos;t see?
          </label>
          <input
            type="text"
            id="missingFeatures"
            name="missingFeatures"
            value={formData.missingFeatures}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <div>
          <label
            htmlFor="improvements"
            className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]"
          >
            Any suggestions to improve the dashboard?
          </label>
          <textarea
            id="improvements"
            name="improvements"
            rows={4}
            value={formData.improvements}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-y"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="optIn"
              checked={formData.optIn}
              onChange={handleInputChange}
              className="w-4 h-4 text-[var(--color-primary)] border-[var(--color-border-subtle)] rounded focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <span className="text-sm text-[var(--color-text-secondary)]">
              I&apos;d like to receive updates about the platform
            </span>
          </label>
          {errors.optIn && (
            <p className="text-sm text-[var(--color-critical)] mt-1">
              {errors.optIn}
            </p>
          )}
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            disabled={loading}
            variant="primary"
            className="w-full sm:w-auto"
          >
            {loading ? 'Sending...' : 'Submit Feedback'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
