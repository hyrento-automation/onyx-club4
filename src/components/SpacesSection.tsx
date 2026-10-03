"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SpacesSectionProps {
  onOpenBooking: () => void;
}

export default function SpacesSection({ onOpenBooking }: SpacesSectionProps) {
  const spaces = [
    {
      id: "01",
      title: "L'Intérieur",
      subtitle: "Plateau Force & Biomécanique",
      description:
        "Matériel de pointe Technogym Artis & haltères ergonomiques en cuir tanné végétal. Éclairage circadien sur-mesure pour stimuler la concentration et l'effort intense.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      features: ["Espace poids libres & machines guidées", "Analyse posturale 3D", "Sol amortissant acoustique"],
    },
    {
      id: "02",
      title: "Le Studio",
      subtitle: "Pilates Reformer & Sanctuaire Yoga",
      description:
        "Baigné de lumière zénithale, cet écrin de chêne clair accueille les Reformers Allegro 2 de dernière génération et les rituels de Breathwork & Sound Bath.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
      features: ["10 Reformers avec miroirs sans distorsion", "Système audio haute fidélité Bang & Olufsen", "Ambiance olfactive bois de cèdre"],
    },
    {
      id: "03",
      title: "La Terrasse",
      subtitle: "Rooftop Face au Lac Léman",
      description:
        "Aux beaux jours, entraînez-vous en plein air avec le clapotis de l'eau en toile de fond. Séances HIIT du matin et Yoga au coucher du soleil face au jet d'eau.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
      features: ["Vue plongeante à 180° sur le lac", "Gazon technique d'athlétisme outdoor", "Bar à récupération & smoothies frais"],
    },
  ];

  return (
    <section id="espaces" className="py-28 relative bg-[#0e0e11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-300">
                ARCHITECTURE & ENVIRONNEMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Trois lieux, <span className="gold-gradient-text italic font-normal">trois usages.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-400 text-sm max-w-md">
            Conçus par des architectes d&apos;intérieur genevois pour offrir une symbiose parfaite entre rigueur sportive et sérénité alpine.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.map((space, idx) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-[#141418] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with zoom hover effect */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent" />
                
                {/* Index tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-xs">
                  {space.id}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-medium tracking-[0.2em] text-[#d4af37] uppercase">
                    {space.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif text-white mt-1 group-hover:text-[#d4af37] transition-colors">
                    {space.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {space.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                  {space.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA button */}
                <button
                  onClick={onOpenBooking}
                  className="mt-6 w-full py-2.5 rounded-xl border border-white/10 hover:border-[#d4af37] text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white bg-white/5 hover:bg-[#d4af37]/15 flex items-center justify-center gap-2 transition duration-300"
                >
                  <span>Explorer ce lieu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
