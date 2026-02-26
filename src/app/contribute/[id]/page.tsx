"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import {
  DollarSign,
  HandHeart,
  Package,
  Megaphone,
  ArrowLeft,
  Heart,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const contributionOptions = [
  {
    id: "money",
    title: "Donate Money",
    icon: DollarSign,
    desc: "Funds go to escrow. Released per verified milestone.",
  },
  {
    id: "skills",
    title: "Offer Skills / Time",
    icon: HandHeart,
    desc: "Volunteer your expertise directly.",
  },
  {
    id: "resources",
    title: "Donate Resources",
    icon: Package,
    desc: "Clothing, materials, housing—anything helps.",
  },
  {
    id: "awareness",
    title: "Spread Awareness",
    icon: Megaphone,
    desc: "Share this project externally.",
  },
];

function ContributePageContent() {
  const params = useParams();
  const [selected, setSelected] = useState<string | null>(null);
  const [amount, setAmount] = useState("");

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
              href={`/projects/${params.id}`}
              className="inline-flex items-center gap-2 text-earth-600 hover:text-brand-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to project
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-base p-8"
          >
            <h1 className="font-display font-bold text-2xl text-earth-900">
              How would you like to contribute?
            </h1>
            <p className="mt-2 text-earth-600">
              Choose your contribution type. Sign in required to contribute.
            </p>

            <div className="mt-8 space-y-4">
              {contributionOptions.map((opt) => (
                <motion.button
                  key={opt.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelected(opt.id)}
                  className={`w-full p-6 rounded-2xl border-2 text-left transition-all flex items-start gap-4 ${
                    selected === opt.id
                      ? "border-brand-500 bg-brand-50"
                      : "border-earth-200 hover:border-earth-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      selected === opt.id ? "bg-brand-100" : "bg-earth-100"
                    }`}
                  >
                    <opt.icon
                      className={`w-6 h-6 ${
                        selected === opt.id ? "text-brand-600" : "text-earth-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-display font-semibold ${
                        selected === opt.id ? "text-brand-700" : "text-earth-900"
                      }`}
                    >
                      {opt.title}
                    </h3>
                    <p className="mt-1 text-earth-600 text-sm">{opt.desc}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            {selected === "money" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-8"
              >
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Amount (₦)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="input-base"
                />
              </motion.div>
            )}

            <div className="mt-10 flex gap-4">
              <Link href={`/projects/${params.id}`}>
                <Button variant="secondary">Back to project</Button>
              </Link>
              <Button
                disabled={!selected}
                icon={<Heart className="w-5 h-5" />}
              >
                Continue
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ContributePage() {
  return (
    <ProtectedRoute>
      <ContributePageContent />
    </ProtectedRoute>
  );
}
