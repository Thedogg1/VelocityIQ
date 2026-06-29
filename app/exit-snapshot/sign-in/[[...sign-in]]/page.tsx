import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ExitSnapshotSignInPage() {
  const clerkConfigured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1 bg-[var(--color-surface)] py-16'>
        <div className='max-w-md mx-auto px-6'>
          <div className='text-center mb-8'>
            <h1 className='text-2xl font-bold text-[var(--color-primary)] mb-3'>
              Sign in to download your full Exit Snapshot report
            </h1>
            <p className='text-sm text-[var(--color-text-secondary)]'>
              Your financial data stays in your browser. We only use your email for account access.
            </p>
          </div>

          {clerkConfigured ? (
            <SignIn
              routing='path'
              path='/exit-snapshot/sign-in'
              signUpUrl='/exit-snapshot/sign-in'
              fallbackRedirectUrl='/exit-snapshot'
              forceRedirectUrl='/exit-snapshot'
            />
          ) : (
            <div className='rounded-lg border border-[var(--color-warning)] bg-amber-50 p-6 text-center'>
              <p className='text-sm text-[var(--color-text-secondary)] mb-4'>
                Clerk is not configured. Add the following to your environment:
              </p>
              <pre className='text-xs text-left bg-white p-4 rounded border overflow-x-auto'>
{`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/exit-snapshot/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/exit-snapshot
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/exit-snapshot`}
              </pre>
            </div>
          )}

          <p className='text-xs text-[var(--color-text-secondary)] text-center mt-6'>
            By signing in you agree to our{' '}
            <Link href='/terms' className='text-[var(--color-primary)] hover:underline'>
              Terms
            </Link>{' '}
            and{' '}
            <Link href='/privacy' className='text-[var(--color-primary)] hover:underline'>
              Privacy Policy
            </Link>
            . Marketing communications are optional.
          </p>

          <div className='text-center mt-4'>
            <Link
              href='/exit-snapshot'
              className='text-sm text-[var(--color-primary)] hover:underline'
            >
              ← Back to calculator
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
