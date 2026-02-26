"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Building2, Heart, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const mockPartners = [
  { id: "1", name: "Lily's Charity Foundation", projects: 12, rating: 4.9 },
  { id: "2", name: "Hope Initiative", projects: 8, rating: 4.8 },
  { id: "3", name: "Community First NGO", projects: 15, rating: 4.7 },
];

export default function PartnersPage() {
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
              Verified Partners
            </h1>
            <p className="mt-2 text-earth-600 max-w-2xl">
              Charities, NGOs, and community groups that have passed our
              verification process. Browse their track records and backed projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPartners.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/partners/${partner.id}`}>
                  <div className="card-base p-6 hover:shadow-elevated transition-all h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-7 h-7 text-brand-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          <span className="text-xs font-semibold text-brand-600">
                            Verified
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-earth-900 mt-2 truncate">
                          {partner.name}
                        </h3>
                        <p className="mt-2 text-earth-500 text-sm">
                          {partner.projects} projects backed • {partner.rating} rating
                        </p>
                        <span className="inline-flex items-center gap-1 mt-4 text-brand-600 font-medium text-sm">
                          View projects <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link href="/register/partner">
              <Button variant="outline" icon={<Heart className="w-5 h-5" />}>
                Become a Verified Partner
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
