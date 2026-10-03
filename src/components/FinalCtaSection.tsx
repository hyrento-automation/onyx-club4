"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export default function FinalCtaSection({ onOpenBooking }: FinalCtaSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0c0c0e]">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-[#d4af37]/40 bg-gradient-to-br from-[#1c1a14] via-[#121215] to-[#0d0d10] shadow-[0_0_50px_rgba(212,175,55,0.12)] text-center flex flex-col items-center"
        >
          {/* Subtle geometric pattern overlay */}
          <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/15 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#d4af37]">
              SÉANCE DÉCOUVERTE OFFERTE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight max-w-3xl leading-tight">
            La première séance <span className="gold-gradient-text italic font-normal">est offerte.</span>
          </h2>

          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed font-light">
            Découvrez par vous-même la sérénité du lieu et l&apos;exigence de notre encadrement. Choisissez votre créneau en quelques secondes, notre équipe prépare votre vestiaire.
          </p>

          {/* Key perks */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#d4af37]" />
              <span>Choix libre du cours</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span>Confirmation immédiate</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Route de Thonon 84, Cologny</span>
            </div>
          </div>

          {/* Call to action button */}
          <div className="mt-10">
            <button
              onClick={onOpenBooking}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f0cf68] to-[#d4af37] text-black font-semibold text-xs tracking-[0.2em] uppercase shadow-2xl shadow-[#d4af37]/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
            >
              <span>RÉSERVER MON ESSAI GRATUIT</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

          <p className="text-[11px] text-gray-500 mt-4 tracking-wide">
            Offre sans engagement · Valable pour toute première visite au club ONYX Genève
          </p>
        </motion.div>
      </div>
    </section>
  );
}
