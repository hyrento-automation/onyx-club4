"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, MapPin, ArrowRight, Percent } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export default function FinalCtaSection({ onOpenBooking }: FinalCtaSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-[#0c0c0e]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#d4af37]/10 to-[#b87333]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-[#d4af37]/40 bg-gradient-to-br from-[#1c1a14] via-[#121215] to-[#0d0d10] shadow-[0_0_50px_rgba(212,175,55,0.15)] text-center flex flex-col items-center"
        >
          {/* 10% OFF Prominent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/15 mb-6 shadow-md">
            <Percent className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#d4af37]">
              {t("10% OFF NOUVEAUX MEMBRES", "10% OFF FOR NEW MEMBERS")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight max-w-3xl leading-tight">
            {t("Bougez. Respirez.", "Move. Breathe.")}{" "}
            <span className="gold-gradient-text italic font-normal">
              {t("Évoluez.", "Evolve.")}
            </span>
          </h2>

          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed font-light">
            {t(
              "Rejoignez Onyx Club à Cologny. Profitez dès aujourd'hui de 10% de réduction sur votre première adhésion ou formule de cours.",
              "Join Onyx Club in Cologny. Take advantage today of 10% off your first membership or class package."
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>{t("Discipline aujourd'hui, résultats demain", "Discipline today, results tomorrow")}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Chemin du Nant-d&apos;Argent 1, Cologny</span>
            </div>
          </div>

          {/* Call to action button */}
          <div className="mt-10">
            <button
              onClick={onOpenBooking}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f0cf68] to-[#b87333] text-black font-semibold text-xs tracking-[0.2em] uppercase shadow-2xl shadow-[#d4af37]/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
            >
              <span>{t("RÉSERVER & BÉNÉFICIER DU 10% OFF", "BOOK & CLAIM 10% OFF")}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

          <p className="text-[11px] text-gray-500 mt-4 tracking-wide font-mono">
            {t("WhatsApp & Inscriptions : 078 613 70 21 · onyxclub.ch", "WhatsApp & Bookings: 078 613 70 21 · onyxclub.ch")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
