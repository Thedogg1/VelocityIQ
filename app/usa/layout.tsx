import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exit Tax Calculator for US Financial Advisors | VelocityIQ',
  description:
    'SEC- and FINRA-regulated advisors: estimate your client\'s net proceeds after federal and state tax, QSBS eligibility, and concentration risk. Free US exit tax calculator.',
  openGraph: {
    title: 'Exit Tax Calculator for US Financial Advisors | VelocityIQ',
    description:
      'Estimate net proceeds after tax, QSBS eligibility, and concentration risk for HNW business owner clients.',
    url: 'https://getvelocityiq.com/usa',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://getvelocityiq.com/usa',
  },
};

export default function UsaLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
