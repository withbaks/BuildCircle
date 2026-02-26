"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Heart,
  Users,
  DollarSign,
  HandHeart,
  Package,
  Megaphone,
  ArrowLeft,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const mockProject = {
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
  description:
    "Our local community school has served generations but is now in dire need of renovation. Roof leaks, broken windows, and deteriorating walls make it unsafe for students. We're raising funds to repair the structure, upgrade classrooms, and create a safe learning environment for 200+ children.",
  milestones: [
    { id: "1", title: "Structural assessment & planning", done: true },
    { id: "2", title: "Roof repair", done: true },
    { id: "3", title: "Window replacement", done: false },
    { id: "4", title: "Interior painting", done: false },
    { id: "5", title: "Final inspection", done: false },
  ],
  updates: [
    { date: "2024-02-20", text: "Roof repair completed. Photos uploaded.", verified: true },
    { date: "2024-02-15", text: "Structural assessment done. Work began on roof.", verified: true },
  ],
};

const supportIcons: Record<string, typeof DollarSign> = {
  money: DollarSign,
  skills: HandHeart,
  resources: Package,
  awareness: Megaphone,
};

export default function ProjectDetailPage() {
  const params = useParams();
  const project = mockProject;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-earth-600 hover:text-brand-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Explore
            </Link>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-base overflow-hidden"
          >
            <div className="h-48 sm:h-64 bg-gradient-to-br from-brand-100 to-accent-sky/20" />
            <div className="p-6 sm:p-8 -mt-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-earth-100 text-earth-700 capitalize">
                  {project.type}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-amber-100 text-amber-800">
                  {project.urgency}
                </span>
                {project.partner && (
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-brand-100 text-brand-700 flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    Backed by {project.partner}
                  </span>
                )}
              </div>

              <h1 className="font-display font-bold text-2xl sm:text-3xl text-earth-900">
                {project.title}
              </h1>
              <div className="flex items-center gap-2 mt-2 text-earth-500">
                <MapPin className="w-5 h-5" />
                {project.location}
              </div>

              <div className="mt-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-earth-600">Funding progress</span>
                  <span className="font-semibold text-brand-600">
                    {project.funded}%
                  </span>
                </div>
                <div className="h-3 rounded-full bg-earth-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.funded}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-brand-500 rounded-full"
                  />
                </div>
                <p className="mt-2 text-earth-500">
                  ₦{(project.raised / 1000).toFixed(0)}k raised of ₦
                  {(project.goal / 1000).toFixed(0)}k goal • {project.votes} votes
                </p>
              </div>

              <p className="mt-8 text-earth-600 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-8">
                <h3 className="font-display font-semibold text-earth-900 mb-3">
                  Support needed
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.supportNeeded.map((s) => {
                    const Icon = supportIcons[s] || DollarSign;
                    return (
                      <span
                        key={s}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-earth-100 text-earth-700"
                      >
                        <Icon className="w-5 h-5" />
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={`/contribute/${project.id}`}>
                  <Button size="lg" icon={<Heart className="w-5 h-5" />}>
                    Contribute
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  Share Project
                </Button>
              </div>
            </div>
          </motion.article>

          {/* Milestones */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="font-display font-bold text-xl text-earth-900 mb-6">
              Milestones
            </h2>
            <div className="card-base p-6">
              <div className="space-y-4">
                {project.milestones.map((m, i) => (
                  <div
                    key={m.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-earth-50"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        m.done ? "bg-brand-100 text-brand-600" : "bg-earth-200 text-earth-500"
                      }`}
                    >
                      {m.done ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <span className="font-semibold">{i + 1}</span>
                      )}
                    </div>
                    <span
                      className={m.done ? "text-earth-600 line-through" : "text-earth-900 font-medium"}
                    >
                      {m.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Updates */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="font-display font-bold text-xl text-earth-900 mb-6">
              Progress Updates
            </h2>
            <div className="space-y-4">
              {project.updates.map((u, i) => (
                <div
                  key={i}
                  className="card-base p-6 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-earth-900">{u.text}</p>
                    <p className="text-sm text-earth-500 mt-1">{u.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
