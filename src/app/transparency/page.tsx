"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Users,
  Building2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const stats = [
  { label: "Total Funds in Escrow", value: "₦12.4M", icon: DollarSign },
  { label: "Active Projects", value: "47", icon: TrendingUp },
  { label: "Verified Partners", value: "23", icon: Building2 },
  { label: "Community Contributors", value: "1,247", icon: Users },
];

const recentActivity = [
  { type: "milestone", project: "Community School Renovation", status: "verified" },
  { type: "funds_released", project: "Medical Supplies", amount: "₦45,000" },
  { type: "backed", project: "Youth Skills Program", partner: "Hope Initiative" },
  { type: "stalled", project: "Water Initiative", days: 14 },
];

export default function TransparencyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-display font-bold text-3xl lg:text-4xl text-earth-900">
              Transparency Dashboard
            </h1>
            <p className="mt-2 text-earth-600 max-w-2xl">
              Full visibility into platform activity. Escrow status, milestone
              releases, and project health—all in one place.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="card-base p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-earth-500">{stat.label}</p>
                    <p className="font-display font-bold text-2xl text-earth-900 mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-brand-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="font-display font-bold text-xl text-earth-900 mb-6">
              Trust Infrastructure
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Escrow-Controlled",
                  desc: "All funds held securely until milestones are verified.",
                  icon: Shield,
                },
                {
                  title: "Milestone-Based Release",
                  desc: "Funds released only after proof of completion.",
                  icon: CheckCircle2,
                },
                {
                  title: "Public Updates",
                  desc: "Partners must post progress with supporting docs.",
                  icon: TrendingUp,
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-earth-50 border border-earth-200"
                >
                  <item.icon className="w-10 h-10 text-brand-600 mb-4" />
                  <h3 className="font-display font-semibold text-earth-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-earth-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-display font-bold text-xl text-earth-900 mb-6">
              Recent Activity
            </h2>
            <div className="card-base overflow-hidden">
              <div className="divide-y divide-earth-100">
                {recentActivity.map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center justify-between p-6 hover:bg-earth-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          activity.type === "stalled"
                            ? "bg-amber-100"
                            : "bg-brand-100"
                        }`}
                      >
                        {activity.type === "stalled" ? (
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-brand-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-earth-900">
                          {activity.project}
                        </p>
                        <p className="text-sm text-earth-500 capitalize">
                          {activity.type.replace("_", " ")}
                          {activity.amount && ` • ${activity.amount}`}
                          {activity.partner && ` • ${activity.partner}`}
                          {activity.days && ` • ${activity.days} days stalled`}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        activity.type === "stalled"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-brand-100 text-brand-700"
                      }`}
                    >
                      {activity.type === "stalled" ? "Attention" : "Verified"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
