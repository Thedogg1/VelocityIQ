import type { Metadata } from 'next';
import ExitSnapshotClerkProvider from './ExitSnapshotClerkProvider';

export const metadata: Metadata = {
  title: 'UK Exit Snapshot Estimator | VelocityIQ',
  description:
    'Estimate your UK business exit tax position, BADR eligibility, and concentration risk. All calculations run client-side in your browser.',
  openGraph: {
    title: 'UK Exit Snapshot Estimator | VelocityIQ',
    description:
      'Free client-side UK exit tax snapshot — preview instantly, download full report after sign-in.',
    url: 'https://getvelocityiq.com/exit-snapshot',
    type: 'website',
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/exit-snapshot',
  },
};

export default function ExitSnapshotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ExitSnapshotClerkProvider>{children}</ExitSnapshotClerkProvider>;
}
