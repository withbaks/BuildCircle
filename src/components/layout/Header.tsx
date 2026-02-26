"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Search, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/AuthContext";

const navLinks = [
  { href: "/explore", label: "Explore Projects" },
  { href: "/transparency", label: "Transparency" },
  { href: "/partners", label: "Verified Partners" },
  { href: "/how-it-works", label: "How It Works" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const isPartner = user?.role === "verified_partner";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-earth-50/80 backdrop-blur-xl border-b border-earth-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="BuildCircle Home"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center shadow-soft"
            >
              <Heart className="w-5 h-5 text-white fill-white" />
            </motion.div>
            <span className="font-display font-bold text-xl text-earth-900 group-hover:text-brand-600 transition-colors">
              BuildCircle
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-earth-700 hover:text-brand-600 hover:bg-earth-100/80 font-medium transition-all min-h-touch flex items-center"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/explore?search=1">
              <Button variant="ghost" size="sm" icon={<Search className="w-5 h-5" />}>
                Search
              </Button>
            </Link>
            {isAuthenticated ? (
              <>
                {!isPartner && (
                  <Link href="/requests/new">
                    <Button variant="ghost" size="sm">
                      Submit Request
                    </Button>
                  </Link>
                )}
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" icon={<User className="w-5 h-5" />}>
                    Dashboard
                  </Button>
                </Link>
                <Button variant="secondary" size="sm" icon={<LogOut className="w-5 h-5" />} onClick={logout}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm" icon={<User className="w-5 h-5" />}>
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-earth-100 min-h-touch min-w-touch flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-earth-200 bg-earth-50"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-earth-700 hover:bg-earth-100 font-medium min-h-touch"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-earth-200 mt-4">
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                      <Button variant="ghost" className="w-full justify-center">
                        Dashboard
                      </Button>
                    </Link>
                    {!isPartner && (
                      <Link href="/requests/new" onClick={() => setMobileOpen(false)}>
                        <Button variant="ghost" className="w-full justify-center">
                          Submit Request
                        </Button>
                      </Link>
                    )}
                    <Button variant="secondary" className="w-full justify-center" icon={<LogOut className="w-5 h-5" />} onClick={() => { logout(); setMobileOpen(false); }}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setMobileOpen(false)}>
                      <Button variant="ghost" className="w-full justify-center">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setMobileOpen(false)}>
                      <Button variant="primary" className="w-full justify-center">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
