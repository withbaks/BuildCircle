"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Mail, Lock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/AuthContext";

function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/dashboard";
  const asPartner = searchParams.get("as") === "partner";
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password, asPartner ? "verified_partner" : undefined);
      router.push(returnUrl);
    } catch {
      setError("Invalid email or password. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="font-display font-bold text-2xl text-earth-900">
                BuildCircle
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-base p-8"
          >
            <h1 className="font-display font-bold text-2xl text-earth-900">
              {asPartner ? "Partner Portal" : "Sign in"}
            </h1>
            <p className="mt-2 text-earth-600">
              {asPartner
                ? "Sign in to manage your backed projects and browse requests."
                : "Access your account to contribute or manage projects."}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="input-base pl-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-earth-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="input-base pl-12"
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 p-3 rounded-xl">{error}</p>
              )}

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-earth-300" />
                  <span className="text-sm text-earth-600">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-brand-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full justify-center"
                size="lg"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <p className="mt-6 text-center text-earth-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-brand-600 font-semibold hover:underline">
                Create one
              </Link>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 space-y-2 text-center text-earth-500 text-sm"
          >
            {asPartner ? (
              <Link href="/login" className="block text-brand-600 hover:underline">
                Sign in as Community Member
              </Link>
            ) : (
              <Link href="/login?as=partner" className="block text-brand-600 hover:underline">
                Partner Portal — Sign in as Verified Partner
              </Link>
            )}
            <Link href="/register/partner" className="block text-earth-500 hover:text-brand-600 hover:underline">
              Not a partner yet? Apply for verification
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <Header />
          <main className="pt-24 pb-16 flex items-center justify-center">
            <div className="animate-pulse text-earth-500">Loading...</div>
          </main>
          <Footer />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
