"use client";

import { motion } from "framer-motion";
import {
  FileEdit,
  Users,
  Building2,
  Lock,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const requesterSteps = [
  { icon: FileEdit, title: "Create Request", desc: "Sign up, verify identity (NIN, photo), submit problem description, type (personal/community), and proof." },
  { icon: Users, title: "Go Live", desc: "Request becomes public. Community votes and contributes in multiple forms." },
  { icon: Building2, title: "Partner Selection", desc: "Verified partners review, contact you, and commit to execute. Project moves to Backed status." },
  { icon: Lock, title: "Escrow + Milestones", desc: "Funds held in escrow. Milestones defined. Funds released per verified completion." },
  { icon: CheckCircle2, title: "Completion", desc: "Project marked complete. You and partner receive badges. Full archive remains visible." },
];

const contributorSteps = [
  { icon: Users, title: "Explore", desc: "Filter by location, urgency, type of need, support type." },
  { icon: TrendingUp, title: "Contribute", desc: "Donate money (escrow), offer skills/time, donate resources, or share externally." },
  { icon: CheckCircle2, title: "Track Impact", desc: "Real-time funding tracker, milestone progress, update notifications." },
];

const partnerSteps = [
  { icon: Building2, title: "Apply", desc: "Sign up, submit verification docs, pass background review. Get approval badge." },
  { icon: FileEdit, title: "Browse & Commit", desc: "See vote count, support demand, location. Define execution plan, agree to milestones." },
  { icon: CheckCircle2, title: "Execute & Build Trust", desc: "Deliver milestones, upload proof. Reputation score increases. Track record visible." },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="font-display font-bold text-3xl lg:text-4xl text-earth-900">
              How It Works
            </h1>
            <p className="mt-4 text-earth-600 text-lg">
              End-to-end journeys for requesters, contributors, and verified partners.
            </p>
          </motion.div>

          {/* Requester Journey */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display font-bold text-2xl text-earth-900 mb-2">
              Community Member (Requester)
            </h2>
            <p className="text-earth-600 mb-10">
              Need support? Here&apos;s your journey from request to completion.
            </p>
            <div className="space-y-6">
              {requesterSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-brand-600">
                        Step {i + 1}
                      </span>
                      {i < requesterSteps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-earth-300" />
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-earth-900 mt-1">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-earth-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contributor Journey */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display font-bold text-2xl text-earth-900 mb-2">
              Community Member (Contributor)
            </h2>
            <p className="text-earth-600 mb-10">
              Want to give back? Explore, contribute, track impact.
            </p>
            <div className="space-y-6">
              {contributorSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-accent-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-earth-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-earth-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Partner Journey */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-2xl text-earth-900 mb-2">
              Verified Partner
            </h2>
            <p className="text-earth-600 mb-10">
              Charities and NGOs: apply, commit, execute, build trust.
            </p>
            <div className="space-y-6">
              {partnerSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-earth-200 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-earth-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-earth-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-earth-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
