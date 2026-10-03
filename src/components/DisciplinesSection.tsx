"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity, Heart, Sparkles, Flame, Target, Sun, ArrowRight } from "lucide-react";

interface DisciplinesSectionProps {
  onSelectDiscipline: (name: string) => void;
}

export default function DisciplinesSection({ onSelectDiscipline }: DisciplinesSectionProps) {
  const disciplines = [
    {
      number: "01",
      name: "Pilates Reformer",
      icon: Activity,
      intensity: "Moyenne à Intense",
      duration: "55 min",
      description:
        "Renforcement postural profond sur chariot mobile Allegro 2. Allonge la silhouette, aligne la colonne vertébrale et galbe sans traumatisme articulaire.",
      tag: "Signature ONYX",
    },
    {
      number: "02",
      name: "Vinyasa & Sound Bath",
      icon: Heart,
      intensity: "Modérée",
      duration: "60 min",
      description:
        "Enchaînements fluides synchronisés sur la respiration, clôturés par 15 minutes d'immersion aux bols tibétains et gongs de cristal face au lac.",
      tag: "Sérénité",
    },
    {
      number: "03",
      name: "Body Sculpt & Tone",
      icon: Dumbbell,
      intensity: "Intense",
      duration: "50 min",
      description:
        "Ciblage musculaire haute précision à l'aide d'élastiques de résistance premium, chevillères lestées et barres chromées.",
      tag: "Tonification",
    },
    {
      number: "04",
      name: "Stretching & Mobilité",
      icon: Sparkles,
      intensity: "Douce",
      duration: "45 min",
      description:
        "Décompression fasciale, mobilité des hanches et étirements PNF assistés pour dénouer les tensions accumulées et optimiser la récupération.",
      tag: "Récupération",
    },
    {
      number: "05",
      name: "HIIT Onyx Athletic",
      icon: Flame,
      intensity: "Très Intense",
      duration: "45 min",
      description:
        "Intervalles cardiovasculaires explosifs combinant rameurs WaterRower en chêne, assault bikes et kettlebells de précision.",
      tag: "Cardio Pur",
    },
    {
      number: "06",
      name: "Coaching Privé 1-to-1",
      icon: Target,
      intensity: "Sur mesure",
      duration: "60 min",
      description:
        "Un head-coach dédié à vos objectifs : préparation physique spécifique, réathlétisation, perte de masse grasse ou perfectionnement technique.",
      tag: "Ultra Exclusif",
    },
    {
      number: "07",
      name: "Bootcamp Terrasse & Lac",
      icon: Sun,
      intensity: "Haute intensité",
      duration: "60 min",
      description:
        "Session au grand air sur notre rooftop surplombant les eaux du Léman. Travail fonctionnel en groupe restreint au lever du soleil.",
      tag: "Outdoor Saison",
    },
  ];

  return (
    <section id="cours" className="py-28 relative bg-[#0c0c0e] border-t border-white/5">
      {/* Background radial spotlight */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#d4af37]">
              PROGRAMME EXCLUSIF
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Sept façons de <span className="gold-gradient-text italic font-normal">s&apos;y mettre.</span>
          </h2>
          
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Chaque méthode est calibrée pour stimuler le métabolisme, protéger les articulations et sculpter une musculature harmonieuse, encadré par des praticiens du mouvement.
          </p>
        </div>

        {/* 7 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((d, index) => {
            const Icon = d.icon;
            const isFeatured = index === 0;

            return (
              <motion.div
                key={d.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => onSelectDiscipline(d.name)}
                className={`group relative rounded-2xl p-7 transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#1a1913] to-[#121215] border border-[#d4af37]/50 shadow-xl shadow-[#d4af37]/5 hover:border-[#d4af37]"
                    : "bg-[#141417] border border-white/5 hover:border-[#d4af37]/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#d4af37]/10"
                }`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 transition-colors duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-light text-gray-500 group-hover:text-[#d4af37] transition-colors">
                      {d.number}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:text-white group-hover:border-[#d4af37]/30 transition">
                      {d.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      {d.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
                    {d.description}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-medium">{d.duration}</span>
                    <span>•</span>
                    <span className="text-gray-400">{d.intensity}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[#d4af37] text-xs font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Réserver</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
