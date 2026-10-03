"use client";

import { motion } from "framer-motion";
import { User, Award, ShieldCheck, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="equipe" className="py-28 relative bg-[#0e0e11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#d4af37]">
              {t("EXPERTISE & ENCADREMENT", "EXPERTISE & COACHING")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            {t("L'Équipe des Coachs", "The Coaching Team")}{" "}
            <span className="gold-gradient-text italic font-normal">
              ONYX CLUB
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            {t(
              "Des professionnels passionnés, experts du mouvement, de la préparation physique, du yoga et du développement personnel pour guider votre évolution.",
              "Passionate professionals, experts in movement, athletic conditioning, yoga, and personal development to guide your evolution."
            )}
          </p>
        </div>

        {/* Team Cards Grid with required team images & visible TODO placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              role: t("Coaching Privé & Boxe", "Private Coaching & Boxing"),
              image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
              specialties: [t("Boxe Technic", "Boxing Technic"), t("Force & Conditionnement", "Strength & Conditioning")],
            },
            {
              role: t("Yoga Serein & Pilates", "Serene Yoga & Pilates"),
              image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
              specialties: [t("Yoga Plein Air Lac", "Outdoor Lake Yoga"), t("Pilates Récupération", "Recovery Pilates")],
            },
            {
              role: t("Coaching Mental & Développement Personnel", "Mental Coaching & Personal Development"),
              image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
              specialties: [t("Préparation Mentale 1h", "1h Mental Prep"), t("Ateliers Équilibre", "Balance Workshops")],
            },
          ].map((coach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-2xl bg-[#141417] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#d4af37]/40 transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.role}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#d4af37]">
                  ONYX COACH
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                    {coach.role}
                  </span>
                  
                  {/* Strict TODO field per brief requirements */}
                  <div className="my-2 p-2.5 rounded-xl bg-black/40 border border-dashed border-white/20 text-xs font-mono text-gray-300">
                    <p className="text-[#d4af37] font-semibold">[TODO: add coach name]</p>
                    <p className="text-[11px] text-gray-400 mt-1">[TODO: add coach bio & certifications]</p>
                  </div>

                  <div className="mt-3 space-y-1">
                    {coach.specialties.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Cologny, Genève</span>
                  <span className="text-white font-medium">Sur rendez-vous</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
