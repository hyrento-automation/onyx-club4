"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Immersive Background with Lake Geneva / Luxury Ambience visual overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
          alt="ONYX Club Genève Luxury Fitness facing Lake"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.05]"
        />
        {/* Multilayered radial and linear dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e]/90 via-[#0c0c0e]/40 to-[#0c0c0e]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0c0c0e_90%)]" />
      </div>

      {/* Decorative ambient gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gray-300">
            COLOGNY · LAC LÉMAN · GENÈVE
          </span>
          <span className="text-gray-500 text-xs">|</span>
          <span className="text-[10px] tracking-widest text-[#d4af37] uppercase font-semibold">
            CLUB PRIVÉ
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl"
        >
          Le seul club de Genève où l&apos;on s&apos;entraîne{" "}
          <span className="gold-gradient-text italic font-normal">
            face au lac.
          </span>
        </motion.h1>

        {/* Subtitle / Value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          Une retraite exclusive dédiée au renforcement physique, au Pilates Reformer et au bien-être absolu. Limité à 12 membres par session pour une attention sur mesure.
        </motion.p>

        {/* Call-to-actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#d4af37] text-black font-semibold tracking-[0.2em] text-xs uppercase shadow-xl shadow-[#d4af37]/25 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            DÉCOUVRIR LE CLUB & RÉSERVER
          </button>

          <a
            href="#espaces"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-[#d4af37] bg-white/5 hover:bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white font-medium tracking-[0.2em] text-xs uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            EXPLORER LES ESPACES
          </a>
        </motion.div>

        {/* Key credentials bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 text-center"
        >
          <div className="space-y-1">
            <p className="text-2xl font-serif text-[#d4af37] font-semibold">180°</p>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">Vue panoramique lac</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-serif text-[#d4af37] font-semibold">Max 12</p>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">Membres par session</p>
          </div>
          <div className="col-span-2 sm:col-span-1 space-y-1">
            <p className="text-2xl font-serif text-[#d4af37] font-semibold">7/7</p>
            <p className="text-[11px] uppercase tracking-wider text-gray-400">Accès conciergerie VIP</p>
          </div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <a
        href="#lieu"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-[#d4af37] flex flex-col items-center gap-2 transition duration-300"
        aria-label="Scroll vers le bas"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">DÉCOUVRIR</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
      </a>
    </section>
  );
}
