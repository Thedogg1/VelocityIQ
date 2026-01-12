import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for January 2026 Pilot Program | VelocityIQ",
  description: "Join the January 2026 pilot for RIA platforms. Limited spots for platforms committed to systematic analysis tools and professional responsibility framework.",
  keywords: ["pilot program", "RIA platform tools", "advisor software pilot", "early adopter program", "financial advisor platform", "RegTech pilot", "compliance tools pilot"],
  openGraph: {
    title: "Apply for January 2026 Pilot Program",
    description: "Limited pilot spots for RIA platforms and large RIA firms",
    type: "website",
    url: "https://getvelocityiq.com/book",
    images: [{ url: "/images/pilot-application-responsibility.jpg" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for January 2026 Pilot Program",
    description: "Limited pilot spots for RIA platforms and large RIA firms",
    images: ["/images/pilot-application-responsibility.jpg"],
  },
  alternates: {
    canonical: "https://getvelocityiq.com/book",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}













