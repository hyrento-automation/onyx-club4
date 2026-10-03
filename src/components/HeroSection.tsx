"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Immersive Background: Lac Léman and mountains at sunset */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
          alt="Lac Léman coucher de soleil Onyx Club Genève"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/50 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e]/90 via-[#0c0c0e]/30 to-[#0c0c0e]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0c0c0e_90%)]" />
      </div>

      {/* Decorative copper and gold ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-[#d4af37]/15 to-[#b87333]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Brand Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-black/40 backdrop-blur-md mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-200">
            {t("SPORT · LIFESTYLE · ZEN, SUR LE LAC LÉMAN", "SPORT · LIFESTYLE · ZEN, ON LAKE GENEVA")}
          </span>
        </motion.div>

        {/* Brand Slogans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#d4af37] mb-4 font-semibold"
        >
          {t("« Bougez. Respirez. Évoluez. » · Stronger Happier You", "« Move. Breathe. Evolve. » · Stronger Happier You")}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl"
        >
          ONYX CLUB{" "}
          <span className="gold-gradient-text italic font-normal block sm:inline">
            COLOGNY
          </span>
        </motion.h1>

        {/* Values poster quote */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          {t(
            "« Discipline aujourd'hui, résultats demain. » Un club d'exception dédié au sport, au bien-être et à l'harmonie face aux reflets du Léman.",
            "« Discipline today, results tomorrow. » An exceptional club dedicated to sport, wellness and harmony facing Lake Geneva."
          )}
        </motion.p>

        {/* Values Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono uppercase tracking-widest text-gray-400"
        >
          <span>Corps</span>
          <span>•</span>
          <span>Esprit</span>
          <span>•</span>
          <span>Équilibre</span>
          <span>•</span>
          <span>Communauté</span>
          <span>•</span>
          <span>Résultats</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b87333] text-black font-semibold tracking-[0.2em] text-xs uppercase shadow-xl shadow-[#d4af37]/25 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {t("RÉSERVER UNE SESSION", "BOOK A SESSION")}
          </button>

          <a
            href="#activites"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-[#d4af37] bg-white/5 hover:bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white font-medium tracking-[0.2em] text-xs uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            {t("DÉCOUVRIR LES ACTIVITÉS", "EXPLORE ACTIVITIES")}
          </a>
        </motion.div>

        {/* Operational Club Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 text-center"
        >
          <div className="space-y-1">
            <p className="text-2xl font-serif text-[#d4af37] font-semibold">Cologny</p>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">
              {t("Chemin du Nant-d'Argent 1", "Chemin du Nant-d'Argent 1")}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-serif text-[#d4af37] font-semibold">Lac Léman</p>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">
              {t("Ambiance au bord de l'eau", "Lakeside premium atmosphere")}
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1 space-y-1">
            <p className="text-2xl font-serif text-[#d4af37] font-semibold">10% OFF</p>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">
              {t("Nouveaux Membres", "New Members Offer")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <a
        href="#club"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-[#d4af37] flex flex-col items-center gap-2 transition duration-300"
        aria-label="Scroll vers le bas"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">{t("DÉCOUVRIR", "DISCOVER")}</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
      </a>
    </section>
  );
}
