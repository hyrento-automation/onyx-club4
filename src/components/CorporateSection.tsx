"use client";

import { motion } from "framer-motion";
import { Building2, Award, Briefcase, Users, ArrowUpRight } from "lucide-react";

interface CorporateSectionProps {
  onOpenBooking: () => void;
}

export default function CorporateSection({ onOpenBooking }: CorporateSectionProps) {
  const corporateBenefits = [
    {
      icon: Users,
      title: "Privatisation Complète",
      desc: "Réservez le club, le studio de Reformer ou le rooftop pour votre comité de direction ou un team-building exclusif.",
    },
    {
      icon: Award,
      title: "Programmes Dirigeants",
      desc: "Optimisation de l'énergie, gestion du stress et récupération posturale pour cadres et dirigeants d'entreprises genevoises.",
    },
    {
      icon: Briefcase,
      title: "Formules Flexibles",
      desc: "Cartes d'accès entreprise déductibles, facturation mensuelle centralisée et conciergerie dédiée pour vos collaborateurs.",
    },
  ];

  return (
    <section id="corporate" className="py-28 relative bg-[#0e0e11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-300">
                OFFRE CORPORATE & ENTREPRISES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Faites venir <span className="gold-gradient-text italic font-normal">votre équipe.</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Donnez un nouvel élan au bien-être de vos collaborateurs. Banques privées, études d&apos;avocats, family offices et institutions internationales nous confient la vitalité de leurs équipes dans un cadre prestigieux à Cologny.
            </p>

            {/* Benefits 3-item list */}
            <div className="space-y-4 pt-2">
              {corporateBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#141417] border border-white/5 flex items-start gap-4 hover:border-[#d4af37]/30 transition">
                    <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center shrink-0 text-[#d4af37]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e09f3e] text-black font-semibold text-xs tracking-widest uppercase shadow-lg shadow-[#d4af37]/20 hover:scale-105 transition"
              >
                Recevoir notre brochure Corporate
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                alt="Corporate wellness at ONYX Club Genève"
                className="w-full h-[460px] object-cover object-center filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-panel-gold text-white">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#d4af37]">
                  SUR DEMANDE
                </span>
                <h4 className="text-lg font-serif font-bold text-white mt-1">
                  Séminaires & Matinées Vitalité
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Combinez réunion stratégique face au lac, séance de Pilates Reformer et petit-déjeuner bio préparé par nos chefs partenaires.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
