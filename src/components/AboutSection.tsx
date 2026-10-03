"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const { t } = useLanguage();

  const values = [
    { title: t("Corps & Esprit", "Body & Mind"), desc: t("Harmonie complète par l'entraînement physique et la clarté mentale.", "Complete harmony through physical training and mental clarity.") },
    { title: t("Équilibre & Discipline", "Balance & Discipline"), desc: t("« Discipline aujourd'hui, résultats demain ».", "« Discipline today, results tomorrow ».") },
    { title: t("Communauté & Résultats", "Community & Results"), desc: t("Un cadre inspirant qui propulse chaque membre vers ses sommets.", "An inspiring setting driving every member to their peak.") },
  ];

  return (
    <section id="club" className="py-28 relative bg-[#0c0c0e] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#d4af37]">
                {t("LE CLUB · COLOGNY", "THE CLUB · COLOGNY")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
              Sport · Lifestyle · Zen,{" "}
              <span className="gold-gradient-text italic">
                {t("sur le Lac Léman", "on Lake Geneva")}
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {t(
                "Niché à Cologny au Chemin du Nant-d'Argent 1, ONYX CLUB est un espace entièrement opérationnel dédié à la transformation du corps et de l'esprit. Loin des salles conventionnelles, nous cultivons un art de vivre où performance physique, sérénité zen et esprit de communauté se rencontrent face au lac.",
                "Nestled in Cologny at Chemin du Nant-d'Argent 1, ONYX CLUB is a fully operational sanctum dedicated to the transformation of body and mind. Far from conventional gyms, we cultivate an art of living where athletic performance, zen serenity, and community spirit meet facing the lake."
              )}
            </p>

            {/* Core Values from brief */}
            <div className="space-y-3 pt-2">
              {values.map((v, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">{v.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Status & Location Notice */}
            <div className="pt-4 flex items-center gap-3 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{t("Club 100% opérationnel à Cologny · Accueil & inscriptions ouverts", "Fully operational club in Cologny · Welcome & registrations open")}</span>
            </div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
                alt="ONYX Club Cologny Genève"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Overlaid Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl glass-panel-gold border border-white/10 text-white">
                <span className="text-[10px] tracking-widest uppercase text-[#d4af37] font-semibold">
                  {t("ENGAGEMENT DU CLUB", "OUR COMMITMENT")}
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                  « Stronger Happier You »
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {t("Bougez. Respirez. Évoluez. Chaque jour au bord du lac.", "Move. Breathe. Evolve. Everyday by the lake.")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
