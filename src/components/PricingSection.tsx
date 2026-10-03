"use client";

import { motion } from "framer-motion";
import { Check, Star, Sparkles, Shield, ArrowUpRight } from "lucide-react";

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export default function PricingSection({ onOpenBooking }: PricingSectionProps) {
  const tiers = [
    {
      name: "Drop-In",
      badge: "Séance Unique",
      price: "35",
      period: "CHF / séance",
      description: "Pour découvrir l'expérience ou les résidents de passage à Genève.",
      highlight: false,
      features: [
        "Accès à 1 cours collectif au choix",
        "Serviette brodée & casier nominatif",
        "Accès vestiaires & douches sensorielles",
        "Sélection thés & tisanes bio au bar",
      ],
      ctaText: "Réserver une séance",
    },
    {
      name: "Pack 10 Séances",
      badge: "Liberté totale",
      price: "320",
      period: "CHF / 10 crédits",
      description: "La flexibilité d'un carnet valable 6 mois sur tous nos cours.",
      highlight: false,
      features: [
        "10 crédits valables 6 mois",
        "Priorité de réservation 7 jours à l'avance",
        "1 invitation invité offerte",
        "Accès espace sauna & récupération",
        "Application mobile de réservation",
      ],
      ctaText: "Choisir le Pack 10",
    },
    {
      name: "Abonnement Mensuel",
      badge: "LE PLUS POPULAIRE",
      price: "240",
      period: "CHF / mois",
      description: "L'immersion complète dans la communauté ONYX avec accès privilégié.",
      highlight: true,
      features: [
        "Accès illimité aux cours collectifs",
        "Accès prioritaire aux créneaux Reformer",
        "1 séance de Coaching Privé 1-to-1 incluse/mois",
        "Accès quotidien au Sauna & fontaine de glace",
        "Service blanchisserie tenue de sport offert",
        "Invitations aux événements privés ONYX Lounge",
      ],
      ctaText: "Devenir Membre Résident",
    },
    {
      name: "Abonnement Annuel",
      badge: "Cercle Privilège",
      price: "2'500",
      period: "CHF / an",
      description: "Le summum de l'exclusivité avec conciergerie sportive intégrale.",
      highlight: false,
      features: [
        "Tous les avantages Membre Mensuel",
        "Casier privé permanent à l'année",
        "Bilan biomécanique trimestriel complet",
        "5 séances de Personal Training offertes",
        "Accès aux retraites bien-être d'été en avant-première",
      ],
      ctaText: "Rejoindre le Cercle",
    },
  ];

  const ptPackages = [
    { title: "Coaching Privé 1-to-1", price: "140 CHF / heure", detail: "Avec Head Coach certifié, protocole biomécanique sur-mesure" },
    { title: "Pack 10 Séances Privées", price: "1'250 CHF", detail: "Plan de nutrition & reprogrammation musculaire inclus" },
    { title: "Duo Private Training", price: "190 CHF / heure", detail: "Entraînement sur-mesure pour deux personnes face au lac" },
  ];

  return (
    <section id="tarifs" className="py-28 relative bg-[#0c0c0e] border-t border-white/5">
      {/* Background ambient gold lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#d4af37]">
              ADHÉSION & MEMBRES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Une adhésion transparente, <span className="gold-gradient-text italic font-normal">sans compromis.</span>
          </h2>
          
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Aucun frais de dossier caché. Des formules souples pensées pour s&apos;adapter à votre rythme de vie à Genève.
          </p>
        </div>

        {/* 4-Tier Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                tier.highlight
                  ? "bg-gradient-to-b from-[#1c1a14] via-[#141418] to-[#101013] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/20 lg:-translate-y-3"
                  : "bg-[#141417] border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Highlight badge if popular */}
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e09f3e] text-black text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                  {tier.badge}
                </div>
              )}

              <div>
                {!tier.highlight && (
                  <span className="inline-block text-[10px] tracking-widest uppercase font-semibold text-gray-400 mb-2">
                    {tier.badge}
                  </span>
                )}

                <h3 className="text-xl font-serif font-bold text-white mt-1">
                  {tier.name}
                </h3>

                <p className="text-gray-400 text-xs mt-2 leading-relaxed min-h-[36px]">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-serif font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-xs text-[#d4af37] font-medium tracking-wide">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? "text-[#d4af37]" : "text-gray-400"}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenBooking}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  tier.highlight
                    ? "bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30 hover:scale-[1.02]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#d4af37]/40"
                }`}
              >
                {tier.ctaText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Private Personal Training Row */}
        <div className="mt-16 rounded-2xl bg-[#141418] border border-white/10 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#d4af37]">
                SUR MESURE & PERFORMANCE
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Personal Training & Préparation Physique
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Accompagnement 100% individualisé avec l&apos;un de nos 7 head-coachs d&apos;exception.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="shrink-0 px-6 py-3 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold text-xs uppercase tracking-wider transition duration-300"
            >
              Demander un bilan gratuit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ptPackages.map((pkg, i) => (
              <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">{pkg.title}</h4>
                  <span className="text-xs font-mono font-semibold text-[#d4af37]">{pkg.price}</span>
                </div>
                <p className="text-xs text-gray-400">{pkg.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
