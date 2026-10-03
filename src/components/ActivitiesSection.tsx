"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Shield,
  Activity,
  Flame,
  UserCheck,
  Compass,
  Footprints,
  Sparkles,
  Zap,
  ArrowRight,
  Coffee,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ActivitiesSectionProps {
  onSelectActivity: (name: string) => void;
}

export default function ActivitiesSection({ onSelectActivity }: ActivitiesSectionProps) {
  const { t, lang } = useLanguage();

  const categories = [
    { id: "all", name: t("Toutes les activités", "All Activities") },
    { id: "yoga-pilates", name: t("Yoga & Pilates", "Yoga & Pilates") },
    { id: "combat", name: t("Sports de combat", "Combat Sports") },
    { id: "prive", name: t("Entraînement privé", "Private Training") },
    { id: "course", name: t("Course à pied", "Running Club") },
    { id: "dev-perso", name: t("Développement personnel", "Personal Development") },
    { id: "bootcamp", name: t("Bootcamp", "Bootcamp") },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const activities = [
    {
      id: "boxe",
      category: "combat",
      name: t("Boxe (Boxe Technic)", "Boxing (Boxe Technic)"),
      type: t("Sports de combat", "Combat Sports"),
      groupPrice: "35.00 CHF",
      individualPrice: "120.00 CHF",
      tagline: t("Maîtrise de soi et force", "Self-mastery and strength"),
      benefits: [
        t("Maîtrise de soi et force", "Self-mastery and strength"),
        t("Agilité et endurance amplifiée", "Agility and amplified endurance"),
        t("Précision du geste", "Precision of action"),
        t("Résilience et équilibre", "Resilience and balance"),
      ],
      description: t(
        "Technique pure de boxe, travail des appuis, précision et puissance cardiovasculaire au bord du lac.",
        "Pure boxing technique, footwork, precision and cardiovascular power on the lakeside."
      ),
      icon: Shield,
    },
    {
      id: "yoga",
      category: "yoga-pilates",
      name: t("Yoga (« Activité sereine »)", "Yoga (« Serene Activity »)"),
      type: t("Outdoor & Aérien", "Outdoor & Aerial"),
      groupPrice: "35.00 CHF",
      individualPrice: "120.00 CHF",
      tagline: t("Yoga en plein air face au lac Léman", "Outdoor yoga facing Lake Geneva"),
      benefits: [
        t("Équilibre intérieur et souplesse", "Inner balance and flexibility"),
        t("Respiration consciente", "Conscious breathing"),
        t("Union du corps et de l'esprit", "Union of body and mind"),
        t("Réduction du stress et paix", "Stress reduction and peace"),
      ],
      description: t(
        "Yoga outdoor face au lac Léman et imagerie yoga aérien pour une élévation physique et spirituelle.",
        "Outdoor yoga facing Lake Geneva and aerial yoga imagery for physical and spiritual elevation."
      ),
      icon: Heart,
    },
    {
      id: "coaching-mental",
      category: "dev-perso",
      name: t("Coaching mental / Développement personnel", "Mental Coaching / Personal Development"),
      type: t("Préparation & Ateliers", "Preparation & Workshops"),
      groupPrice: "35.00 CHF",
      individualPrice: "120.00 CHF",
      tagline: t("« Réservez votre équilibre »", "« Book Your Balance »"),
      benefits: [
        t("Libérez-vous des blocages", "Free yourself from blocks"),
        t("Performance maximisée", "Maximised performance"),
        t("Clarté mentale", "Mental clarity"),
        t("Confiance amplifiée", "Amplified confidence"),
      ],
      description: t(
        "Séances individuelles de préparation mentale (1h) et ateliers de développement personnel pour libérer votre plein potentiel.",
        "Individual 1h mental preparation sessions and personal development workshops to unlock your full potential."
      ),
      icon: Compass,
    },
    {
      id: "coaching-prive",
      category: "prive",
      name: t("Coaching privé", "Private Coaching"),
      type: t("Individuel sur mesure", "Tailored Individual"),
      groupPrice: null,
      individualPrice: "120.00 CHF",
      tagline: t("Attention 100% dédiée", "100% Dedicated Attention"),
      benefits: [
        t("Accompagnement individualisé", "Individualised support"),
        t("Progression millimétrée", "Precision progression"),
        t("Correction posturale exclusive", "Exclusive postural correction"),
      ],
      description: t(
        "Prise en charge individualisée avec un coach expert pour atteindre rapidement vos objectifs de forme et de santé.",
        "Individualised guidance with an expert coach to rapidly achieve your fitness and health goals."
      ),
      icon: UserCheck,
    },
    {
      id: "personal-training",
      category: "prive",
      name: t("Personal Training", "Personal Training"),
      type: t("Séance sur mesure", "Tailored Session"),
      groupPrice: null,
      individualPrice: "120.00 CHF",
      tagline: t("Séance sur mesure", "Tailored session"),
      benefits: [
        t("Plan d'entraînement calibré", "Calibrated workout plan"),
        t("Biomécanique et intensité adaptées", "Adapted biomechanics & intensity"),
        t("Résultats durables", "Long-lasting results"),
      ],
      description: t(
        "Séance sur mesure conçue selon votre profil physiologique et vos aspirations de transformation.",
        "Tailored session designed according to your physiological profile and transformation goals."
      ),
      icon: Activity,
    },
    {
      id: "pilates",
      category: "yoga-pilates",
      name: t("Pilates (Recovery-focused)", "Pilates (Recovery-focused)"),
      type: t("Récupération & Posture", "Recovery & Posture"),
      groupPrice: "35.00 CHF",
      individualPrice: "120.00 CHF",
      tagline: t("Axé sur la récupération", "Recovery-focused Pilates"),
      benefits: [
        t("Renforcement de la sangle abdominale", "Core strengthening"),
        t("Décompression et souplesse", "Spinal decompression & flexibility"),
        t("Récupération musculaire profonde", "Deep muscular recovery"),
      ],
      description: t(
        "Pilates axé sur la récupération et l'alignement articulaire pour régénérer le corps en douceur et en force.",
        "Pilates focused on recovery and joint alignment to regenerate the body with gentle power."
      ),
      icon: Sparkles,
    },
    {
      id: "running-club",
      category: "course",
      name: t("Running Club", "Running Club"),
      type: t("Course au bord du lac", "Lakeside Runs"),
      groupPrice: "35.00 CHF",
      individualPrice: null,
      tagline: t("Runs le long des berges du lac Léman", "Runs along the lake shores"),
      benefits: [
        t("Air pur et vue lac", "Fresh lake air & scenery"),
        t("Motivation de groupe", "Group motivation & camaraderie"),
        t("Cardio et technique de foulée", "Cardio and stride technique"),
      ],
      description: t(
        "Sessions de course à pied le long des rives de Cologny et du lac Léman, encadrées pour progresser ensemble.",
        "Running sessions along the shores of Cologny and Lake Geneva, coached to progress together."
      ),
      icon: Footprints,
    },
    {
      id: "bootcamp",
      category: "bootcamp",
      name: t("Bootcamp", "Bootcamp"),
      type: t("Intensif & Dynamique", "Intensive & Dynamic"),
      groupPrice: "35.00 CHF",
      individualPrice: null,
      tagline: t("Sessions bootcamp intensives", "Intensive bootcamp sessions"),
      benefits: [
        t("Dépassement de soi total", "Total self-transcendence"),
        t("Brûlage calorique maximal", "Maximum caloric burn"),
        t("Esprit d'équipe stimulant", "Stimulating team spirit"),
      ],
      description: t(
        "Entraînements intensifs en petits groupes combinant cardio, renforcement fonctionnel et dépassement face au lac.",
        "High-energy intensive small-group training combining cardio, functional strength and drive facing the lake."
      ),
      icon: Flame,
    },
    {
      id: "zumba",
      category: "bootcamp",
      name: t("Zumba", "Zumba"),
      type: t("Cardio Dansé", "Dance Cardio"),
      groupPrice: "35.00 CHF",
      individualPrice: null,
      tagline: t("Énergie rythmée", "Rhythmic energy"),
      benefits: [
        t("Défoulement cardiovasculaire", "Cardiovascular release"),
        t("Coordination et bonne humeur", "Coordination & positive vibes"),
        t("Tonification globale", "Full body toning"),
      ],
      description: t(
        "Rythmes entraînants et chorégraphies dynamiques pour brûler des calories dans la joie et la convivialité.",
        "Catchy rhythms and energetic choreography to burn calories in an uplifting atmosphere."
      ),
      icon: Zap,
    },
    {
      id: "strong-nation",
      category: "bootcamp",
      name: t("Strong Nation / Circle Mobility", "Strong Nation / Circle Mobility"),
      type: t("Haute intensité & Mobilité", "High Intensity & Mobility"),
      groupPrice: "35.00 CHF",
      individualPrice: null,
      tagline: t("Synchronisation musicale & mobilité", "Music synced intensity & mobility"),
      benefits: [
        t("Force au poids de corps", "Bodyweight strength"),
        t("Intervalles synchronisés sur la musique", "Music-synced intervals"),
        t("Mobilité active articulaire", "Active joint mobility"),
      ],
      description: t(
        "Fusion explosive de haute intensité rythmée et d'exercices de Circle Mobility pour libérer le mouvement.",
        "Explosive fusion of music-driven high intensity and Circle Mobility exercises to liberate movement."
      ),
      icon: Activity,
    },
    {
      id: "stretching",
      category: "yoga-pilates",
      name: t("Stretching", "Stretching"),
      type: t("Décompression & Mobilité", "Decompression & Mobility"),
      groupPrice: "35.00 CHF",
      individualPrice: "120.00 CHF",
      tagline: t("Relâchement fascial profond", "Deep fascial release"),
      benefits: [
        t("Élimination des tensions", "Tension elimination"),
        t("Amplitude articulaire accrue", "Increased range of motion"),
        t("Récupération musculaire", "Muscular recovery"),
      ],
      description: t(
        "Séances d'étirements guidés pour délier les muscles, détendre le système nerveux et prévenir les blessures.",
        "Guided stretching sessions to lengthen muscles, soothe the nervous system, and prevent injuries."
      ),
      icon: Sparkles,
    },
    {
      id: "coaching-sportif",
      category: "prive",
      name: t("Coaching sportif", "Sports Coaching"),
      type: t("Préparation physique", "Athletic Preparation"),
      groupPrice: "35.00 CHF",
      individualPrice: "120.00 CHF",
      tagline: t("Préparation athlétique", "Athletic conditioning"),
      benefits: [
        t("Optimisation des performances", "Performance optimisation"),
        t("Renforcement fonctionnel ciblé", "Targeted functional strength"),
        t("Suivi d'objectifs précis", "Clear goal tracking"),
      ],
      description: t(
        "Encadrement rigoureux pour progresser dans votre discipline ou développer une condition athlétique globale.",
        "Rigorous coaching to excel in your athletic discipline or build complete physical conditioning."
      ),
      icon: UserCheck,
    },
    {
      id: "free-access",
      category: "prive",
      name: t("Free Access", "Free Access"),
      type: t("Accès Libre au Club", "Open Club Access"),
      groupPrice: null,
      individualPrice: t("TODO: consulter adhésion", "TODO: see membership rates"),
      tagline: t("Entraînement en toute autonomie", "Autonomous training"),
      benefits: [
        t("Plateau d'équipements premium", "Premium equipment floor"),
        t("Vue panoramique sur le lac", "Panoramic lake views"),
        t("Espace vestiaires haut de gamme", "Luxury locker rooms"),
      ],
      description: t(
        "Profitez en autonomie des installations d'entraînement du club face aux eaux du lac Léman.",
        "Enjoy autonomous access to the club's premium training facilities facing Lake Geneva."
      ),
      icon: Compass,
    },
  ];

  const filteredActivities =
    activeCategory === "all"
      ? activities
      : activities.filter((a) => a.category === activeCategory);

  return (
    <section id="activites" className="py-28 relative bg-[#0c0c0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#d4af37]">
              {t("NOS DISCIPLINES & OFFRES", "OUR DISCIPLINES & OFFERS")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            {t("Toutes nos activités", "All Our Activities")}{" "}
            <span className="gold-gradient-text italic font-normal">
              {t("au bord du lac.", "by the lake.")}
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            {t(
              "Du yoga en plein air à la boxe technique, en passant par le coaching mental et le running sur les berges. Cours collectif à 35.00 CHF | Cours individuel à 120.00 CHF.",
              "From outdoor yoga to technical boxing, mental coaching, and lakeside running. Group class: 35.00 CHF | Individual class: 120.00 CHF."
            )}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                activeCategory === c.id
                  ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20 scale-105"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredActivities.map((act) => {
              const Icon = act.icon;
              return (
                <motion.div
                  key={act.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl p-7 bg-[#141417] border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#d4af37]/10"
                >
                  <div>
                    {/* Top category & icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#d4af37]">
                        {act.type}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#d4af37] transition">
                      {act.name}
                    </h3>

                    <p className="text-xs font-mono text-[#d4af37] mt-1">
                      {act.tagline}
                    </p>

                    <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                      {act.description}
                    </p>

                    {/* Benefits from brief */}
                    <div className="mt-5 pt-4 border-t border-white/5 space-y-1.5">
                      <p className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider">
                        {t("Bénéfices clés :", "Key Benefits:")}
                      </p>
                      {act.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Booking */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs mb-4">
                      {act.groupPrice && (
                        <div>
                          <span className="text-[10px] uppercase text-gray-500 block">
                            {t("Cours collectif", "Group class")}
                          </span>
                          <span className="text-sm font-serif font-bold text-white">
                            {act.groupPrice}
                          </span>
                        </div>
                      )}
                      {act.individualPrice && (
                        <div className="text-right">
                          <span className="text-[10px] uppercase text-gray-500 block">
                            {t("Cours individuel", "Individual class")}
                          </span>
                          <span className="text-sm font-serif font-bold text-[#d4af37]">
                            {act.individualPrice}
                          </span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectActivity(act.name)}
                      className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#d4af37] text-gray-200 hover:text-black text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>{t("Réserver cette activité", "Book this activity")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
