import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VelocityIQ - Risk Mitigation First, Compliance Second, Innovation Third",
  description: "VelocityIQ delivers the liability defense RIAs need first, compliance documentation regulators demand second, and AI-powered intelligence that differentiates your platform third. Built by banking-grade developers. Compliant by default.",
  keywords: ["RIA platform", "financial compliance", "risk mitigation", "AI compliance", "wealth management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
