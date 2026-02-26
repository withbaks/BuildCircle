"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

const footerLinks = {
  platform: [
    { href: "/explore", label: "Explore Projects" },
    { href: "/transparency", label: "Transparency Dashboard" },
    { href: "/partners", label: "Verified Partners" },
    { href: "/how-it-works", label: "How It Works" },
  ],
  contribute: [
    { href: "/explore?support=money", label: "Donate Money" },
    { href: "/explore?support=skills", label: "Offer Skills" },
    { href: "/explore?support=resources", label: "Donate Resources" },
    { href: "/explore?support=awareness", label: "Spread Awareness" },
  ],
  account: [
    { href: "/login", label: "Sign In" },
    { href: "/register", label: "Create Account" },
    { href: "/register/partner", label: "Become a Partner" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                BuildCircle
              </span>
            </Link>
            <p className="text-earth-300 text-sm leading-relaxed max-w-xs">
              Community-powered impact. Verified partners. Real transparency.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-earth-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contribute</h4>
            <ul className="space-y-3">
              {footerLinks.contribute.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-earth-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Account</h4>
            <ul className="space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-earth-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-earth-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-earth-400 text-sm">
            © {new Date().getFullYear()} BuildCircle. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-earth-400 hover:text-white text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-earth-400 hover:text-white text-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
