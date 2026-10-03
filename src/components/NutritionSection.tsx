"use client";

import { motion } from "framer-motion";
import { Coffee, Sparkles, Check, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NutritionSection() {
  const { t } = useLanguage();

  return (
    <section id="nutrition" className="py-28 relative bg-[#0c0c0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 mb-4">
            <Coffee className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#d4af37]">
              {t("BAR & NUTRITION SANTÉ", "HEALTH BAR & NUTRITION")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            {t("Menu Milkshakes", "Protein Milkshake")}{" "}
            <span className="gold-gradient-text italic font-normal">
              {t("Protéinés", "Menu")}
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            {t(
              "Nos recettes signatures de milkshakes riches en protéines et ingrédients bio, élaborées pour optimiser la récupération musculaire et le regain d'énergie après l'effort.",
              "Our signature recipes of high-protein organic milkshakes, crafted to optimize muscle recovery and energy replenishment after your workout."
            )}
          </p>
        </div>

        {/* Highlight Card with visible TODO placeholder */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#141417] border border-white/10 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                {t("RÉCUPÉRATION IMMÉDIATE", "IMMEDIATE RECOVERY")}
              </span>
              <h3 className="text-2xl font-serif text-white">
                {t("Nutrition saine face au lac", "Wholesome Nutrition Facing the Lake")}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t(
                  "Chaque boisson est préparée à la commande avec des sources de protéines d'exception, laits végétaux suisses et super-aliments antioxydants.",
                  "Every beverage is freshly made to order with premium protein sources, Swiss plant-based milks, and antioxidant superfoods."
                )}
              </p>
              <div className="space-y-2 text-xs text-gray-400 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>{t("Protéines pures isolat & végétales", "Pure whey isolate & plant proteins")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>{t("Sans sucres raffinés ajoutés", "No added refined sugars")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>{t("Fruits frais & super-aliments", "Fresh fruits & superfoods")}</span>
                </div>
              </div>
            </div>

            {/* Visible Placeholder according to brief */}
            <div className="p-6 rounded-2xl bg-black/50 border border-dashed border-[#d4af37]/40 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto text-[#d4af37]">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white">
                {t("Carte des saveurs en cours de finalisation", "Flavor Menu Being Finalized")}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">
                [TODO: Protein milkshake menu items, ingredients, protein grams & prices to be confirmed with client]
              </p>
              <div className="pt-2 text-[11px] text-[#d4af37] font-mono">
                {t("Disponible sur place au club house à Cologny", "Available on-site at the club house in Cologny")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
