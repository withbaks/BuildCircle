"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, MapPin, ImageIcon } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

function SubmitRequestContent() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    type: "personal" as "personal" | "community",
    title: "",
    description: "",
    supportNeeded: [] as string[],
    location: "",
  });

  const supportTypes = ["money", "skills", "resources", "awareness"];

  const toggleSupport = (s: string) => {
    setForm((f) => ({
      ...f,
      supportNeeded: f.supportNeeded.includes(s)
        ? f.supportNeeded.filter((x) => x !== s)
        : [...f.supportNeeded, s],
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-earth-600 hover:text-brand-600 transition-colors min-h-touch"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Explore
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-base p-8"
          >
            <h1 className="font-display font-bold text-2xl text-earth-900">
              Submit Support Request
            </h1>
            <p className="mt-2 text-earth-600">
              Describe your need. You&apos;ll need to verify your identity (NIN, photo) before
              your request can go live.
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

            <form className="mt-8 space-y-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Request type
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, type: "personal" })}
                        className={`flex-1 p-4 rounded-xl border-2 min-h-touch ${
                          form.type === "personal"
                            ? "border-brand-500 bg-brand-50"
                            : "border-earth-200 hover:border-earth-300"
                        }`}
                      >
                        Personal
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, type: "community" })}
                        className={`flex-1 p-4 rounded-xl border-2 min-h-touch ${
                          form.type === "community"
                            ? "border-brand-500 bg-brand-50"
                            : "border-earth-200 hover:border-earth-300"
                        }`}
                      >
                        Community
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Title
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                      <input
                        type="text"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        placeholder="Brief description of your need"
                        className="input-base pl-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Full description
                    </label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Describe the problem and what support you need..."
                      rows={5}
                      className="input-base resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Support needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {supportTypes.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleSupport(s)}
                          className={`px-4 py-2 rounded-xl min-h-touch capitalize ${
                            form.supportNeeded.includes(s)
                              ? "bg-brand-100 text-brand-700"
                              : "bg-earth-100 text-earth-600 hover:bg-earth-200"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {(form.type === "community" || true) && (
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-2">
                        Location (optional)
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                        <input
                          type="text"
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                          placeholder="e.g. Lagos, Nigeria"
                          className="input-base pl-12"
                        />
                      </div>
                    </div>
                  )}

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
                      <ImageIcon className="w-5 h-5" aria-hidden />
                      Verification & proof
                    </h3>
                    <p className="mt-2 text-sm text-earth-600">
                      Upload NIN, live photograph, and proof documents. Your request
                      won&apos;t go live until verification is complete.
                    </p>
                  </div>
                  <div className="border-2 border-dashed border-earth-200 rounded-xl p-8 text-center min-h-[120px] flex flex-col items-center justify-center">
                    <p className="text-earth-500">Drop files here or click to upload</p>
                    <p className="text-sm text-earth-400 mt-1">
                      PDF, JPG, PNG up to 10MB
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" className="flex-1">
                      Submit for review
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function SubmitRequestPage() {
  return (
    <ProtectedRoute>
      <SubmitRequestContent />
    </ProtectedRoute>
  );
}
