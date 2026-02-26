"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Filter,
  Heart,
  Users,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const mockProjects = [
  {
    id: "1",
    title: "Community School Renovation",
    type: "community",
    location: "Lagos, Nigeria",
    urgency: "high",
    funded: 65,
    goal: 500000,
    raised: 325000,
    votes: 142,
    supportNeeded: ["money", "skills"],
    status: "backed",
    partner: "Lily's Charity Foundation",
  },
  {
    id: "2",
    title: "Medical Supplies for Rural Clinic",
    type: "community",
    location: "Abuja",
    urgency: "urgent",
    funded: 23,
    goal: 200000,
    raised: 46000,
    votes: 89,
    supportNeeded: ["money", "resources"],
    status: "live",
  },
  {
    id: "3",
    title: "Housing Materials for Family",
    type: "personal",
    location: "Port Harcourt",
    urgency: "medium",
    funded: 40,
    goal: 150000,
    raised: 60000,
    votes: 34,
    supportNeeded: ["money", "resources"],
    status: "live",
  },
  {
    id: "4",
    title: "Youth Skills Training Program",
    type: "community",
    location: "Ibadan",
    urgency: "medium",
    funded: 80,
    goal: 800000,
    raised: 640000,
    votes: 256,
    supportNeeded: ["money", "skills"],
    status: "backed",
    partner: "Hope Initiative",
  },
  {
    id: "5",
    title: "Clean Water Initiative",
    type: "community",
    location: "Kano",
    urgency: "high",
    funded: 12,
    goal: 1200000,
    raised: 144000,
    votes: 178,
    supportNeeded: ["money", "resources", "awareness"],
    status: "live",
  },
];

const filters = {
  type: ["All", "Personal", "Community"],
  urgency: ["All", "Urgent", "High", "Medium"],
  support: ["All", "Money", "Skills", "Resources", "Awareness"],
};

function ExploreContent() {
  const searchParams = useSearchParams();
  const supportFromUrl = searchParams.get("support");
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [urgencyFilter, setUrgencyFilter] = useState("All");
  const [supportFilter, setSupportFilter] = useState(
    supportFromUrl ? supportFromUrl.charAt(0).toUpperCase() + supportFromUrl.slice(1) : "All"
  );
  const [locationFilter, setLocationFilter] = useState("");
  const [showFilters, setShowFilters] = useState(!!supportFromUrl);

  useEffect(() => {
    if (supportFromUrl) {
      setSupportFilter(supportFromUrl.charAt(0).toUpperCase() + supportFromUrl.slice(1));
      setShowFilters(true);
    }
  }, [supportFromUrl]);

  const filtered = mockProjects.filter((p) => {
    const matchSearch =
      !search || p.title.toLowerCase().includes(search.toLowerCase());
    const matchType =
      typeFilter === "All" ||
      (typeFilter === "Personal" && p.type === "personal") ||
      (typeFilter === "Community" && p.type === "community");
    const matchUrgency =
      urgencyFilter === "All" || p.urgency === urgencyFilter.toLowerCase();
    const matchSupport =
      supportFilter === "All" ||
      p.supportNeeded.some((s) => s.toLowerCase() === supportFilter.toLowerCase());
    const matchLocation =
      !locationFilter || p.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchSearch && matchType && matchUrgency && matchSupport && matchLocation;
  });

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
              Explore Projects
            </h1>
            <p className="mt-2 text-earth-600">
              Discover community and personal support requests. Filter by
              location, urgency, and type of need.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4 mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input-base pl-12"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
                <input
                  type="text"
                  placeholder="Location (optional)"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="input-base pl-12"
                />
              </div>
              <Button
                variant="secondary"
                onClick={() => setShowFilters(!showFilters)}
                icon={<Filter className="w-5 h-5" />}
              >
                Filters
              </Button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-wrap gap-4 p-4 rounded-2xl bg-earth-100/50 border border-earth-200"
                >
                  <div>
                    <label className="block text-sm font-medium text-earth-600 mb-1">
                      Type
                    </label>
                    <select
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                      className="input-base py-2"
                    >
                      {filters.type.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-600 mb-1">
                      Urgency
                    </label>
                    <select
                      value={urgencyFilter}
                      onChange={(e) => setUrgencyFilter(e.target.value)}
                      className="input-base py-2"
                    >
                      {filters.urgency.map((u) => (
                        <option key={u} value={u}>
                          {u}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-600 mb-1">
                      Support Needed
                    </label>
                    <select
                      value={supportFilter}
                      onChange={(e) => setSupportFilter(e.target.value)}
                      className="input-base py-2"
                    >
                      {filters.support.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="card-base overflow-hidden hover:shadow-elevated transition-all h-full flex flex-col">
                      <div className="h-40 bg-gradient-to-br from-brand-100 to-accent-sky/20 relative">
                        <span
                          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                            project.urgency === "urgent"
                              ? "bg-accent-coral text-white"
                              : project.urgency === "high"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-earth-100 text-earth-700"
                          }`}
                        >
                          {project.urgency}
                        </span>
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-earth-700 capitalize">
                          {project.type}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-display font-bold text-lg text-earth-900 group-hover:text-brand-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-earth-500 text-sm">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                        <div className="mt-4 flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-earth-400" />
                            {project.votes} votes
                          </span>
                          {project.partner && (
                            <span className="flex items-center gap-1 text-brand-600">
                              <Heart className="w-4 h-4" />
                              Backed
                            </span>
                          )}
                        </div>
                        <div className="mt-4 flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-earth-600">Funded</span>
                            <span className="font-semibold text-brand-600">
                              {project.funded}%
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-earth-100 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${project.funded}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="h-full bg-brand-500 rounded-full"
                            />
                          </div>
                          <p className="mt-2 text-xs text-earth-500">
                            ₦{(project.raised / 1000).toFixed(0)}k raised of ₦
                            {(project.goal / 1000).toFixed(0)}k
                          </p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.supportNeeded.map((s) => (
                            <span
                              key={s}
                              className="px-2 py-1 rounded-lg bg-earth-100 text-earth-600 text-xs"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-earth-500">No projects match your filters.</p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => {
                  setSearch("");
                  setTypeFilter("All");
                  setUrgencyFilter("All");
                  setSupportFilter("All");
                  setLocationFilter("");
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ExplorePage() {
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
      <ExploreContent />
    </Suspense>
  );
}
