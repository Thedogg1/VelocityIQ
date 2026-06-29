import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exit Tax Calculator for UK Financial Advisers | VelocityIQ',
  description:
    'FCA-regulated advisers: estimate your client\'s net proceeds after CGT, BADR eligibility, and concentration risk. Free UK exit tax calculator — no sign-in required for results.',
  openGraph: {
    title: 'Exit Tax Calculator for UK Financial Advisers | VelocityIQ',
    description:
      'Estimate net proceeds after CGT, BADR eligibility, and concentration risk for HNW business owner clients.',
    url: 'https://getvelocityiq.com/uk',
    type: 'website',
    locale: 'en_GB',
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/uk',
  },
};

export default function UkLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
