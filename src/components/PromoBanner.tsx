"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowRight } from "lucide-react";

interface PromoBannerProps {
  onOpenContact: () => void;
}

export default function PromoBanner({ onOpenContact }: PromoBannerProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-[#14120f] via-[#241c14] to-[#14120f] border-b border-[#d4af37]/30 py-2.5 px-4 text-center relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-xs">
        <div className="flex items-center gap-1.5 text-[#d4af37] font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{t("OFFRE EXCLUSIVE", "EXCLUSIVE OFFER")}</span>
        </div>
        <span className="text-gray-400 hidden sm:inline">•</span>
        <span className="text-gray-200">
          <strong className="text-white font-medium">
            {t("10% OFF nouveaux membres", "10% OFF for new members")}
          </strong>{" "}
          — {t("Rejoignez Onyx Club dès aujourd'hui sur le Lac Léman.", "Join Onyx Club today on Lake Geneva.")}
        </span>
        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#d4af37] text-black font-semibold text-[10px] tracking-wider uppercase hover:bg-[#e09f3e] transition ml-2 shadow-sm"
        >
          <span>{t("EN PROFITER", "CLAIM OFFER")}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
