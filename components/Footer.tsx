import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Velocity IQ Logo_only.png"
                alt="VelocityIQ Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
                unoptimized
              />
              <span className="text-lg font-bold">VelocityIQ</span>
            </div>
            <p className="text-sm text-white mb-4">
              AI-Assisted Compliance Intelligence for Wealth Management
            </p>
            <p className="text-xs text-white opacity-90">
              Mission: To build AI systems for financial advisors that meet the
              regulatory standards required in banking—not because compliance is
              innovative, but because it's the foundation advisors deserve.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/platform"
                  className="text-sm text-white hover:opacity-80 transition-opacity"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/risk-defense"
                  className="text-sm text-white hover:opacity-80 transition-opacity"
                >
                  Risk Defense
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-white hover:opacity-80 transition-opacity"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-sm text-white hover:opacity-80 transition-opacity"
                >
                  Book Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-sm text-white">
                  General Inquiries:
                </p>
                <a
                  href="mailto:admin@getvelocityiq.com"
                  className="text-sm text-[var(--color-info)] hover:text-white transition-colors"
                >
                  admin@getvelocityiq.com
                </a>
              </li>
              <li>
                <p className="text-sm text-white mt-4">
                  January 2026 Pilot:
                </p>
                <p className="text-sm text-white opacity-90">Limited spots available</p>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white hover:opacity-80 transition-opacity"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white hover:opacity-80 transition-opacity"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
            <p className="text-xs text-white opacity-90 mt-8">
              © 2025 VelocityIQ Ltd
              <br />
              All rights reserved
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-xs text-white opacity-90 text-center">
            VelocityIQ provides technology platforms for financial advisors.
            Advisors are responsible for all advice given to clients. VelocityIQ
            does not provide financial, legal, or tax advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

