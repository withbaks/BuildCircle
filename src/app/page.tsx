"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  DollarSign,
  HandHeart,
  Package,
  Megaphone,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const contributionTypes = [
  {
    icon: DollarSign,
    title: "Donate Money",
    desc: "Funds held in escrow, released per verified milestone.",
    color: "bg-brand-100 text-brand-700",
  },
  {
    icon: HandHeart,
    title: "Offer Skills / Time",
    desc: "Volunteer your expertise directly to projects.",
    color: "bg-accent-teal/10 text-accent-teal",
  },
  {
    icon: Package,
    title: "Donate Resources",
    desc: "Clothing, materials, housing—anything helps.",
    color: "bg-accent-gold/30 text-earth-800",
  },
  {
    icon: Megaphone,
    title: "Spread Awareness",
    desc: "Share projects and amplify impact.",
    color: "bg-accent-coral/20 text-accent-coral",
  },
];

const flowSteps = [
  "Problem Posted",
  "Community Validates",
  "Partner Commits",
  "Escrow Activated",
  "Milestone Execution",
  "Public Updates",
  "Funds Released",
  "Reputation Updated",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh from-brand-50/50 via-earth-50 to-accent-sky/10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-sky/20 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-brand-600 font-display font-semibold text-lg mb-4"
              >
                Community-Powered Impact
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900 leading-tight"
              >
                Connect. Contribute.{" "}
                <span className="text-brand-600">Create Change.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg text-earth-600 max-w-2xl"
              >
                Submit support requests. Back projects as a verified partner.
                Contribute money, skills, or resources. Track impact in real time
                with full transparency.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link href="/register">
                  <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Get Started
                  </Button>
                </Link>
                <Link href="/explore">
                  <Button variant="secondary" size="lg">
                    Explore Projects
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* User Types */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-earth-900">
                Built for Everyone
              </h2>
              <p className="mt-4 text-earth-600 max-w-2xl mx-auto">
                Whether you need support, want to give back, or run a verified
                organization—BuildCircle has a place for you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Verified Partners",
                  subtitle: "Charities & NGOs",
                  desc: "Get verified, browse requests, back and execute projects. Build public reputation over time.",
                  icon: Shield,
                  color: "brand",
                  href: "/register/partner",
                },
                {
                  title: "Community Members",
                  subtitle: "Individuals",
                  desc: "Explore projects, submit support requests, contribute in multiple ways. Track your impact.",
                  icon: Users,
                  color: "accent-teal",
                  href: "/register",
                },
                {
                  title: "Public Visitors",
                  subtitle: "No account needed",
                  desc: "Explore projects and the transparency dashboard. Sign up when you're ready to contribute.",
                  icon: TrendingUp,
                  color: "earth",
                  href: "/explore",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -5 }}
                  className="card-base p-8 hover:shadow-elevated transition-shadow"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      card.color === "brand"
                        ? "bg-brand-100 text-brand-600"
                        : card.color === "accent-teal"
                        ? "bg-accent-teal/10 text-accent-teal"
                        : "bg-earth-100 text-earth-600"
                    }`}
                  >
                    <card.icon className="w-7 h-7" />
                  </div>
                  <p className="text-sm font-semibold text-earth-500 uppercase tracking-wider">
                    {card.subtitle}
                  </p>
                  <h3 className="font-display font-bold text-xl text-earth-900 mt-2">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-earth-600">{card.desc}</p>
                  <Link href={card.href} className="mt-6 inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contribution Types */}
        <section className="py-24 bg-earth-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-earth-900">
                Contribute Your Way
              </h2>
              <p className="mt-4 text-earth-600 max-w-2xl mx-auto">
                Money, skills, resources, or awareness—every contribution
                matters.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contributionTypes.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-white shadow-soft border border-earth-100 hover:shadow-elevated transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-earth-900 mt-4">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-earth-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Flow */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-earth-900">
                End-to-End Trust Flow
              </h2>
              <p className="mt-4 text-earth-600 max-w-2xl mx-auto">
                From problem to solution—with full transparency at every step.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 lg:gap-4"
            >
              {flowSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center"
                >
                  <span className="px-4 py-3 rounded-xl bg-earth-100 text-earth-800 font-medium text-sm whitespace-nowrap">
                    {step}
                  </span>
                  {i < flowSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-earth-300 mx-1 lg:mx-2 flex-shrink-0" />
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 flex justify-center"
            >
              <Link href="/how-it-works">
                <Button variant="outline" icon={<CheckCircle2 className="w-5 h-5" />}>
                  See Full Journey
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Trust Infrastructure */}
        <section className="py-24 bg-earth-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl lg:text-4xl">
                Trust Infrastructure
              </h2>
              <p className="mt-4 text-earth-300 max-w-2xl mx-auto">
                Built-in safeguards that run across every project.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Escrow-controlled funds",
                "Milestone-based release",
                "Mandatory updates",
                "Public transparency dashboard",
                "Reputation scoring",
                "Stalled project visibility",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-earth-800/50 border border-earth-700"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-400 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-brand-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-white"
            >
              Ready to Make an Impact?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-brand-100 text-lg"
            >
              Join BuildCircle today. Request support, contribute, or become a
              verified partner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link href="/register">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-brand-700 hover:bg-earth-50"
                >
                  Create Account
                </Button>
              </Link>
              <Link href="/explore">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border-2 border-white hover:bg-white/10"
                >
                  Explore First
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
