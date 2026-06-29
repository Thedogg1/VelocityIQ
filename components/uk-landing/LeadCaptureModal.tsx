'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@/components/Button';
import { X } from 'lucide-react';

const DISCOVERY_CALL_URL = 'https://calendly.com/velocityiq/30min';

const CONFIRMATION_MESSAGE =
  'Check your inbox. Your extended exit tax report and sample intelligence report are on their way.';

type ModalStep = 'form' | 'confirmation';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  exitReportHtml: string;
}

export default function LeadCaptureModal({
  isOpen,
  onClose,
  exitReportHtml,
}: LeadCaptureModalProps) {
  const [step, setStep] = useState<ModalStep>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [firmName, setFirmName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const reset = useCallback(() => {
    setStep('form');
    setName('');
    setEmail('');
    setFirmName('');
    setError('');
    setIsSubmitting(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      reset();
      return;
    }
    nameInputRef.current?.focus();
  }, [isOpen, reset]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedFirmName = firmName.trim();

    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }
    if (!trimmedEmail) {
      setError('Please enter your email address.');
      return;
    }
    if (!trimmedFirmName) {
      setError('Please enter your firm name.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/uk-lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          firmName: trimmedFirmName,
          exitReportHtml,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? 'Submission failed. Please try again.');
      }

      setStep('confirmation');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50'
      role='dialog'
      aria-modal='true'
      aria-labelledby='lead-capture-title'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-md rounded-xl bg-white shadow-xl p-8'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type='button'
          onClick={onClose}
          className='absolute top-4 right-4 p-1 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]'
          aria-label='Close'
        >
          <X className='w-5 h-5' />
        </button>

        {step === 'form' ? (
          <>
            <h2
              id='lead-capture-title'
              className='text-2xl font-semibold text-[var(--color-primary)] mb-2 pr-8'
            >
              Email My Reports
            </h2>
            <p className='text-sm text-[var(--color-text-secondary)] mb-6'>
              We&apos;ll email your extended exit tax report from this calculation and a Robert
              Hartley sample intelligence report.
            </p>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='lead-name' className='block text-sm font-medium text-[var(--color-text-secondary)] mb-1'>
                  Name
                </label>
                <input
                  ref={nameInputRef}
                  id='lead-name'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete='name'
                  className='w-full px-4 py-3 rounded-lg border border-[var(--color-border-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring-color)]'
                />
              </div>
              <div>
                <label htmlFor='lead-email' className='block text-sm font-medium text-[var(--color-text-secondary)] mb-1'>
                  Email
                </label>
                <input
                  id='lead-email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='email'
                  className='w-full px-4 py-3 rounded-lg border border-[var(--color-border-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring-color)]'
                />
              </div>
              <div>
                <label htmlFor='lead-firm' className='block text-sm font-medium text-[var(--color-text-secondary)] mb-1'>
                  Firm name
                </label>
                <input
                  id='lead-firm'
                  type='text'
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  autoComplete='organization'
                  className='w-full px-4 py-3 rounded-lg border border-[var(--color-border-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring-color)]'
                />
              </div>

              {error && (
                <p className='text-sm text-[var(--color-critical)]' role='alert'>
                  {error}
                </p>
              )}

              <Button type='submit' disabled={isSubmitting} className='w-full'>
                {isSubmitting ? 'Sending…' : 'Send My Reports'}
              </Button>
            </form>
          </>
        ) : (
          <div className='text-center pt-2'>
            <h2 id='lead-capture-title' className='text-2xl font-semibold text-[var(--color-primary)] mb-4'>
              Report sent
            </h2>
            <p className='text-[var(--color-text-secondary)] mb-8 leading-relaxed'>
              {CONFIRMATION_MESSAGE}
            </p>
            <Button href={DISCOVERY_CALL_URL} className='w-full'>
              Book a Discovery Call
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
