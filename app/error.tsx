'use client';

// Minimal error boundary - avoids complex provider trees that trigger Next.js bugs
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='flex min-h-screen items-center justify-center bg-[var(--color-surface)]'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-[var(--color-text-primary)] mb-4'>
          Something went wrong!
        </h2>
        <button
          onClick={reset}
          className='px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-cta-hover)] transition-colors'
        >
          Try again
        </button>
      </div>
    </div>
  );
}
