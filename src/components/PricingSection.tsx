"use client";

import { motion } from "framer-motion";
import { Check, Star, Sparkles, Shield, ArrowUpRight, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export default function PricingSection({ onOpenBooking }: PricingSectionProps) {
  const { t } = useLanguage();

  const standardRates = [
    {
      title: t("Cours Collectif", "Group Class"),
      price: "35.00",
      currency: "CHF",
      period: t("/ séance", "/ session"),
      desc: t("Accessible sur l'ensemble de nos cours en groupe (Yoga, Boxe, Pilates, HIIT, etc.)", "Valid for all our group sessions (Yoga, Boxing, Pilates, HIIT, etc.)"),
      features: [
        t("Encadrement par un coach certifié", "Coaching by certified professional"),
        t("Cadre privilégié face au lac", "Exclusive lakeside environment"),
        t("Accès vestiaires de qualité", "Premium locker facilities"),
      ],
      popular: false,
    },
    {
      title: t("Cours Individuel / Coaching Privé", "Individual Class / Private Coaching"),
      price: "120.00",
      currency: "CHF",
      period: t("/ séance (1h)", "/ session (1h)"),
      desc: t("Séance 1-to-1 sur mesure, préparation mentale, boxe technique ou personal training.", "1-to-1 tailored session, mental prep, technical boxing, or personal training."),
      features: [
        t("Séance 100% sur mesure (1h)", "100% Tailored session (1h)"),
        t("Préparation mentale ou physique d'élite", "Elite mental or athletic preparation"),
        t("Bilan et adaptation continue", "Continuous assessment & adjustments"),
      ],
      popular: true,
    },
  ];

  return (
    <section id="tarifs" className="py-28 relative bg-[#0c0c0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#d4af37]">
              {t("TARIFS & FORMULES OFFICIELLES", "OFFICIAL RATES & OPTIONS")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            {t("Nos Tarifs de Séances", "Our Session Rates")}{" "}
            <span className="gold-gradient-text italic font-normal">
              ONYX CLUB
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            {t(
              "Tarification claire et transparente pour vos séances collectives ou individuelles à Cologny. Bénéficiez de 10% de réduction pour les nouveaux membres.",
              "Clear, transparent pricing for your group or individual sessions in Cologny. Enjoy 10% off for new members."
            )}
          </p>
        </div>

        {/* 2 Verified Rate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {standardRates.map((rate, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                rate.popular
                  ? "bg-gradient-to-b from-[#1c1a14] via-[#141418] to-[#101013] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/20"
                  : "bg-[#141417] border border-white/10"
              }`}
            >
              {rate.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b87333] text-black text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                  {t("SÉANCE SUR MESURE", "TAILORED SESSION")}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  {rate.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed min-h-[36px]">
                  {rate.desc}
                </p>

                <div className="my-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-white">
                    {rate.price}
                  </span>
                  <span className="text-sm font-semibold text-[#d4af37]">
                    {rate.currency} {rate.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {rate.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${rate.popular ? "text-[#d4af37]" : "text-gray-400"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  rate.popular
                    ? "bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b87333] text-black shadow-lg shadow-[#d4af37]/30 hover:scale-[1.02]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#d4af37]/40"
                }`}
              >
                {t("Réserver à ce tarif", "Book at this rate")}
              </button>
            </div>
          ))}
        </div>

        {/* TODO: Packs and Memberships placeholder */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-black/40 border border-dashed border-[#d4af37]/30 text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#d4af37] font-semibold">
            <AlertCircle className="w-4 h-4" />
            <span>[TODO: Memberships / packs / drop-in rates beyond the 35.00 CHF and 120.00 CHF class prices to be confirmed with client]</span>
          </div>
          <p className="text-xs text-gray-400">
            {t(
              "Des formules d'abonnements trimestriels, annuels et carnets de 10 séances sont actuellement proposées sur devis auprès de la conciergerie.",
              "Quarterly and annual memberships, as well as 10-session packs, are currently available upon request via concierge."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
