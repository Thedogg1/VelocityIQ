import type { Metadata, Viewport } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title:
    'VelocityIQ - Risk Mitigation First, Compliance Second, Innovation Third',
  description:
    'VelocityIQ delivers the liability defense RIAs need first, compliance documentation regulators demand second, and AI-powered intelligence that differentiates your platform third. Built by banking-grade developers. Compliant by default.',
  keywords: [
    'RIA platform',
    'financial compliance',
    'risk mitigation',
    'AI compliance',
    'wealth management',
  ],
  metadataBase: new URL('https://getvelocityiq.com'),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en-US'>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'VelocityIQ',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/PreOrder',
                availabilityStarts: '2026-01',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: 'N/A',
                reviewCount: '0',
              },
              provider: {
                '@type': 'Organization',
                name: 'VelocityIQ Ltd',
                url: 'https://getvelocityiq.com',
                logo: 'https://getvelocityiq.com/logo.png',
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'admin@getvelocityiq.com',
                  contactType: 'Customer Service',
                },
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
