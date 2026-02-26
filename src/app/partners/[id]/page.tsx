"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Building2, Heart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

// Mock data - replace with api.get(ENDPOINTS.partners.detail(id))
const mockPartner = {
  id: "1",
  name: "Lily's Charity Foundation",
  description:
    "Lily's Charity Foundation has been serving communities across Nigeria for over 10 years. We focus on education, healthcare, and sustainable development. Our mission is to create lasting impact through verified, transparent projects.",
  contactEmail: "contact@lilyscharity.org",
  projectsBacked: 12,
  rating: 4.9,
  verified: true,
  backedProjects: [
    { id: "1", title: "Community School Renovation", status: "in_progress", funded: 65 },
    { id: "2", title: "Medical Supplies for Rural Clinic", status: "completed", funded: 100 },
    { id: "4", title: "Youth Skills Training Program", status: "in_progress", funded: 80 },
  ],
};

export default function PartnerDetailPage() {
  const params = useParams();
  const partner = mockPartner;

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
              href="/partners"
              className="inline-flex items-center gap-2 text-earth-600 hover:text-brand-600 transition-colors min-h-touch"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Verified Partners
            </Link>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-base overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-10 h-10 text-brand-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-brand-500" />
                    <span className="text-sm font-semibold text-brand-600">Verified Partner</span>
                  </div>
                  <h1 className="font-display font-bold text-2xl sm:text-3xl text-earth-900 mt-2">
                    {partner.name}
                  </h1>
                  <p className="mt-2 text-earth-600">
                    {partner.projectsBacked} projects backed • {partner.rating} rating
                  </p>
                  <p className="mt-4 text-earth-600 leading-relaxed">{partner.description}</p>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="font-display font-bold text-xl text-earth-900 mb-6">
              Backed & Active Projects
            </h2>
            <div className="space-y-4">
              {partner.backedProjects?.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <div className="card-base p-6 hover:shadow-elevated transition-all flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-semibold text-earth-900">
                        {project.title}
                      </h3>
                      <p className="text-sm text-earth-500 mt-1 capitalize">
                        {project.status.replace("_", " ")} • {project.funded}% funded
                      </p>
                    </div>
                    <span className="text-brand-600 font-medium text-sm">View project →</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link href="/explore">
              <Button variant="outline" icon={<Heart className="w-5 h-5" />}>
                Explore All Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
