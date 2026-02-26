"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Mail, Lock, User, Phone, Calendar } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/AuthContext";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login, setUser } = useAuth();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
  });

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
              Create account
            </h1>
            <p className="mt-2 text-earth-600">
              Join as a community member. Submit requests, contribute, track impact.
            </p>

            <div className="mt-6 flex gap-2">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full ${
                    step >= s ? "bg-brand-500" : "bg-earth-200"
                  }`}
                />
              ))}
            </div>

            <form
              className="mt-8 space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                if (step === 2) {
                  setLoading(true);
                  try {
                    await login(form.email, form.password, "community_member");
                    setUser({
                      id: "1",
                      email: form.email,
                      fullName: form.fullName,
                      phone: form.phone,
                      dob: form.dob,
                      role: "community_member",
                      verified: false,
                      createdAt: new Date().toISOString(),
                    });
                    router.push("/dashboard");
                  } finally {
                    setLoading(false);
                  }
                }
              }}
            >
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Full name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="input-base pl-12"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="input-base pl-12"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Phone number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="input-base pl-12"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Date of birth
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                      <input
                        type="date"
                        value={form.dob}
                        onChange={(e) => setForm({ ...form, dob: e.target.value })}
                        className="input-base pl-12"
                        required
                      />
                    </div>
                  </div>
                  <Button type="button" onClick={() => setStep(2)} className="w-full">
                    Continue
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                      <input
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        placeholder="Min 8 characters"
                        className="input-base pl-12"
                        required
                      />
                    </div>
                  </div>
                  <p className="text-sm text-earth-500">
                    After signup, you&apos;ll need to verify your identity (NIN, photo) before
                    submitting support requests.
                  </p>
                  <div className="flex gap-4">
                    <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" className="flex-1" disabled={loading}>
                      {loading ? "Creating..." : "Create account"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>

            <p className="mt-6 text-center text-earth-600">
              Already have an account?{" "}
              <Link href="/login" className="text-brand-600 font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center text-earth-500 text-sm"
          >
            <Link href="/register/partner" className="text-brand-600 hover:underline">
              Represent an organization? Apply as a Verified Partner
            </Link>
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
