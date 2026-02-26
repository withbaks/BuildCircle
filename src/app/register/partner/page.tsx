"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Building2, FileText } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/AuthContext";

export default function PartnerRegisterPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    orgName: "",
    email: "",
    description: "",
  });
  const router = useRouter();
  const { login, setUser } = useAuth();

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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h1 className="font-display font-bold text-2xl text-earth-900">
                  Verified Partner
                </h1>
                <p className="text-earth-600 text-sm">
                  Charities, NGOs, Community Groups
                </p>
              </div>
            </div>

            <p className="text-earth-600">
              Get verified to browse requests, back projects, and build your
              reputation. Submit verification documents for approval.
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
                    await login(form.email, "password", "verified_partner");
                    setUser({
                      id: "1",
                      email: form.email,
                      fullName: form.orgName,
                      role: "verified_partner",
                      verified: true,
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
                      Organization name
                    </label>
                    <input
                      type="text"
                      value={form.orgName}
                      onChange={(e) => setForm({ ...form, orgName: e.target.value })}
                      placeholder="Lily's Charity Foundation"
                      className="input-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Contact email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="contact@organization.org"
                      className="input-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Organization description
                    </label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Tell us about your organization..."
                      rows={4}
                      className="input-base resize-none"
                      required
                    />
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
                  <div className="p-4 rounded-xl bg-earth-50 border border-earth-200">
                    <h3 className="font-display font-semibold text-earth-900 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Verification documents
                    </h3>
                    <p className="mt-2 text-sm text-earth-600">
                      Upload registration certificate, proof of address, and
                      identification. Background review required for approval.
                    </p>
                  </div>
                  <div className="border-2 border-dashed border-earth-200 rounded-xl p-8 text-center">
                    <p className="text-earth-500">Drop files here or click to upload</p>
                    <p className="text-sm text-earth-400 mt-1">
                      PDF, JPG, PNG up to 10MB
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" className="flex-1" disabled={loading}>
                      {loading ? "Submitting..." : "Submit for review"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>

            <p className="mt-6 text-center text-earth-600">
              Already verified?{" "}
              <Link href="/login" className="text-brand-600 font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
