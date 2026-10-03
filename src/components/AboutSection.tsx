"use client";

import { motion } from "framer-motion";
import { Check, Compass, Users, MapPin } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const stats = [
    { value: "7", label: "Coachs certifiés", sub: "Experts biomécanique & Pilates" },
    { value: "12", label: "Personnes max", sub: "Intimité & correction posturale" },
    { value: "5 min", label: "Du centre de Genève", sub: "Havre de paix à Cologny" },
  ];

  return (
    <section id="lieu" className="py-28 relative bg-[#0c0c0e] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Concept & Description */}
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
                LE CONCEPT DU CLUB
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
              Plus qu&apos;une salle de sport,{" "}
              <span className="gold-gradient-text italic">un sanctuaire</span> au bord du lac.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Niché sur les hauteurs de Cologny avec un panorama imprenable sur le Lac Léman et le Jura, ONYX Club réinvente le fitness haut de gamme. Ici, pas d&apos;attente aux machines ni d&apos;agitation urbaine.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Chaque cours est pensé comme une masterclass privée. Nos entraîneurs d&apos;élite ajustent chaque mouvement, tandis que l&apos;architecture minérale et baignée de lumière naturelle réaligne corps et esprit.
            </p>

            {/* Checklist points */}
            <div className="space-y-3 pt-2">
              {[
                "Équipements Technogym Pure Strength & Pilates Reformer Allegro 2",
                "Espace sauna finlandais, fontaine de glace et douches sensorielles",
                "Bar à jus cold-pressed bio et thés détox face au lac",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#d4af37]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 font-light">{item}</span>
                </div>
              ))}
            </div>

            {/* Metric counters row */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#d4af37]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-gray-500 hidden sm:block">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High-Res Showcase Card with Bronze Inner Glow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
              {/* Inner bronze glow */}
              <div className="absolute inset-0 ring-1 ring-inset ring-[#d4af37]/20 rounded-2xl pointer-events-none z-10" />

              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
                alt="Pilates Reformer et studio d'entraînement ONYX Club Genève"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Floating Overlaid Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl glass-panel-gold border border-white/10 text-white z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#d4af37] font-semibold">
                      EXPÉRIENCE SENSORIELLE
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                      Vue directe sur le Lac Léman
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      Immersion totale entre nature et performance athlétique.
                    </p>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="shrink-0 ml-4 px-4 py-2.5 rounded-full bg-[#d4af37] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition"
                  >
                    Visiter
                  </button>
                </div>
              </div>
            </div>

            {/* Corner Luxury Accent Tag */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1a1a1f] border border-[#d4af37]/40 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-gray-200 uppercase tracking-wider">
                Membres : Privilégié & Serein
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
