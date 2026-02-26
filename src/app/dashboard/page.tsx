"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Heart,
  TrendingUp,
  Building2,
  ArrowRight,
  Plus,
  CheckCircle2,
  DollarSign,
  Users,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/lib/auth/AuthContext";
import type { UserRole } from "@/lib/api/types";

// Mock data - replace with api.get() when backend is ready
const mockMyRequests = [
  { id: "1", title: "Community School Renovation", status: "backed", funded: 65 },
  { id: "2", title: "Medical Supplies", status: "live", funded: 23 },
];
const mockMyContributions = [
  { id: "1", projectId: "4", project: "Youth Skills Program", amount: "₦10,000", type: "money" },
  { id: "2", projectId: "5", project: "Water Initiative", type: "skills" },
];
const mockBackedProjects = [
  { id: "1", title: "Community School Renovation", status: "in_progress", progress: 40 },
  { id: "4", title: "Youth Skills Training", status: "in_progress", progress: 80 },
];
const mockBrowseRequests = [
  { id: "2", title: "Medical Supplies for Rural Clinic", votes: 89, urgency: "urgent" },
  { id: "5", title: "Clean Water Initiative", votes: 178, urgency: "high" },
];

function CommunityMemberDashboard() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid sm:grid-cols-3 gap-6"
      >
        <div className="card-base p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-brand-600" />
            </div>
            <div>
              <p className="text-sm text-earth-500">My Requests</p>
              <p className="font-display font-bold text-2xl text-earth-900">{mockMyRequests.length}</p>
            </div>
          </div>
        </div>
        <div className="card-base p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-accent-teal" />
            </div>
            <div>
              <p className="text-sm text-earth-500">Contributions</p>
              <p className="font-display font-bold text-2xl text-earth-900">{mockMyContributions.length}</p>
            </div>
          </div>
        </div>
        <div className="card-base p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent-lavender/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent-lavender" />
            </div>
            <div>
              <p className="text-sm text-earth-500">Impact Score</p>
              <p className="font-display font-bold text-2xl text-earth-900">—</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-earth-900">My Requests</h2>
          <Link href="/requests/new">
            <Button size="sm" icon={<Plus className="w-4 h-4" />}>
              New Request
            </Button>
          </Link>
        </div>
        <div className="card-base overflow-hidden">
          <div className="divide-y divide-earth-100">
            {mockMyRequests.map((r) => (
              <Link key={r.id} href={`/projects/${r.id}`}>
                <div className="flex items-center justify-between p-6 hover:bg-earth-50/50 transition-colors">
                  <div>
                    <p className="font-medium text-earth-900">{r.title}</p>
                    <p className="text-sm text-earth-500 capitalize">{r.status} • {r.funded}% funded</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-earth-400" />
                </div>
              </Link>
            ))}
          </div>
          {mockMyRequests.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-earth-500 mb-4">No requests yet</p>
              <Link href="/requests/new">
                <Button icon={<Plus className="w-4 h-4" />}>Submit your first request</Button>
              </Link>
            </div>
          )}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-earth-900">My Contributions</h2>
          <Link href="/explore">
            <Button variant="ghost" size="sm">
              Explore more
            </Button>
          </Link>
        </div>
        <div className="card-base overflow-hidden">
          <div className="divide-y divide-earth-100">
            {mockMyContributions.map((c) => (
              <Link key={c.id} href={`/projects/${c.projectId}`}>
                <div className="flex items-center justify-between p-6 hover:bg-earth-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-medium text-earth-900">{c.project}</p>
                      <p className="text-sm text-earth-500 capitalize">
                        {c.type} {c.amount && `• ${c.amount}`}
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-brand-500" />
                </div>
              </Link>
            ))}
          </div>
          {mockMyContributions.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-earth-500 mb-4">No contributions yet</p>
              <Link href="/explore">
                <Button>Explore projects to contribute</Button>
              </Link>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
}

function VerifiedPartnerDashboard() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid sm:grid-cols-3 gap-6"
      >
        <div className="card-base p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-brand-600" />
            </div>
            <div>
              <p className="text-sm text-earth-500">Projects Backed</p>
              <p className="font-display font-bold text-2xl text-earth-900">{mockBackedProjects.length}</p>
            </div>
          </div>
        </div>
        <div className="card-base p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-accent-teal" />
            </div>
            <div>
              <p className="text-sm text-earth-500">Completed</p>
              <p className="font-display font-bold text-2xl text-earth-900">—</p>
            </div>
          </div>
        </div>
        <div className="card-base p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent-lavender/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent-lavender" />
            </div>
            <div>
              <p className="text-sm text-earth-500">Reputation</p>
              <p className="font-display font-bold text-2xl text-earth-900">4.9</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-earth-900">My Backed Projects</h2>
          <Link href="/explore">
            <Button variant="ghost" size="sm">
              Browse more requests
            </Button>
          </Link>
        </div>
        <div className="card-base overflow-hidden">
          <div className="divide-y divide-earth-100">
            {mockBackedProjects.map((p) => (
              <Link key={p.id} href={`/projects/${p.id}`}>
                <div className="flex items-center justify-between p-6 hover:bg-earth-50/50 transition-colors">
                  <div>
                    <p className="font-medium text-earth-900">{p.title}</p>
                    <p className="text-sm text-earth-500 capitalize">
                      {p.status.replace("_", " ")} • {p.progress}% complete
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-brand-600 font-medium">Manage</span>
                    <ArrowRight className="w-5 h-5 text-earth-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-earth-900">Browse Requests</h2>
          <Link href="/explore">
            <Button size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              View all
            </Button>
          </Link>
        </div>
        <div className="card-base overflow-hidden">
          <div className="divide-y divide-earth-100">
            {mockBrowseRequests.map((r) => (
              <Link key={r.id} href={`/projects/${r.id}`}>
                <div className="flex items-center justify-between p-6 hover:bg-earth-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-earth-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-earth-600" />
                    </div>
                    <div>
                      <p className="font-medium text-earth-900">{r.title}</p>
                      <p className="text-sm text-earth-500">
                        {r.votes} votes • {r.urgency} urgency
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 capitalize">
                    {r.urgency}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function DashboardContent() {
  const { user } = useAuth();
  const role: UserRole = user?.role ?? "community_member";

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-display font-bold text-3xl lg:text-4xl text-earth-900">
              {role === "verified_partner" ? "Partner Dashboard" : "My Dashboard"}
            </h1>
            <p className="mt-2 text-earth-600">
              {role === "verified_partner"
                ? "Manage your backed projects and browse new requests."
                : `Welcome back, ${user?.fullName || "there"}. Track your requests and impact.`}
            </p>
          </motion.div>

          {role === "verified_partner" ? (
            <VerifiedPartnerDashboard />
          ) : (
            <CommunityMemberDashboard />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
