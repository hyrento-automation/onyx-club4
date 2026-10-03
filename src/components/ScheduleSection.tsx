"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sunrise, Sun, Sunset, Calendar, Clock, User, ArrowRight } from "lucide-react";

interface ScheduleSectionProps {
  onOpenBooking: () => void;
}

export default function ScheduleSection({ onOpenBooking }: ScheduleSectionProps) {
  const [activeTab, setActiveTab] = useState<"matin" | "midi" | "soiree" | "weekend">("matin");

  const tabs = [
    { id: "matin", label: "Matin", subtitle: "07:00 - 10:30", icon: Sunrise },
    { id: "midi", label: "Midi", subtitle: "12:00 - 14:00", icon: Sun },
    { id: "soiree", label: "Soirée", subtitle: "17:30 - 20:30", icon: Sunset },
    { id: "weekend", label: "Week-end", subtitle: "09:00 - 13:00", icon: Calendar },
  ];

  const scheduleData = {
    matin: [
      {
        time: "07:30 - 08:25",
        course: "Pilates Reformer Sunrise",
        coach: "Éléonore de R.",
        location: "Le Studio (Vue Lac)",
        spotsLeft: 3,
        tag: "Énergie Réveil",
      },
      {
        time: "08:45 - 09:30",
        course: "HIIT Onyx Athletic",
        coach: "Marc-Antoine V.",
        location: "L'Intérieur",
        spotsLeft: 4,
        tag: "Cardio Métabolique",
      },
      {
        time: "09:45 - 10:45",
        course: "Vinyasa Flow Face au Lac",
        coach: "Sofia K.",
        location: "La Terrasse / Studio",
        spotsLeft: 2,
        tag: "Alignement",
      },
    ],
    midi: [
      {
        time: "12:15 - 13:00",
        course: "Body Sculpt & Express Core",
        coach: "Julien M.",
        location: "L'Intérieur",
        spotsLeft: 5,
        tag: "Pause Active",
      },
      {
        time: "13:15 - 14:05",
        course: "Pilates Reformer Precision",
        coach: "Éléonore de R.",
        location: "Le Studio",
        spotsLeft: 1,
        tag: "Dernière place",
      },
    ],
    soiree: [
      {
        time: "18:00 - 18:55",
        course: "Pilates Reformer Athletic",
        coach: "Camille D.",
        location: "Le Studio",
        spotsLeft: 2,
        tag: "Posture & Force",
      },
      {
        time: "19:00 - 19:50",
        course: "Bootcamp Sunset Rooftop",
        coach: "Marc-Antoine V.",
        location: "La Terrasse panoramique",
        spotsLeft: 4,
        tag: "Coucher de soleil",
      },
      {
        time: "19:45 - 20:45",
        course: "Sound Bath & Yin Yoga Détox",
        coach: "Sofia K.",
        location: "Le Studio aux Bougies",
        spotsLeft: 3,
        tag: "Sommeil Profond",
      },
    ],
    weekend: [
      {
        time: "09:30 - 10:30",
        course: "Masterclass Reformer & Mobility",
        coach: "Éléonore de R.",
        location: "Le Studio",
        spotsLeft: 2,
        tag: "Signature Weekend",
      },
      {
        time: "10:45 - 11:45",
        course: "Outdoor Lake Run & Strength",
        coach: "Julien M.",
        location: "Berges du Léman & Club",
        spotsLeft: 6,
        tag: "Immersion Nature",
      },
      {
        time: "12:00 - 13:00",
        course: "Restorative Yoga & Brunch Infusion",
        coach: "Sofia K.",
        location: "La Terrasse Lounge",
        spotsLeft: 3,
        tag: "Art de vivre",
      },
    ],
  };

  return (
    <section id="horaires" className="py-28 relative bg-[#0e0e11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-300">
                RYTHME DU CLUB
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Du lever au <span className="gold-gradient-text italic font-normal">coucher du soleil.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-400 text-sm max-w-sm">
            Une grille conçue pour s&apos;adapter aux agendas des résidents de Cologny et des professionnels exigeants de Genève.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-1.5 bg-[#141418] rounded-2xl border border-white/10 mb-10 max-w-3xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20 scale-[1.02]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-[#d4af37]"}`} />
                <div className="text-left">
                  <div>{tab.label}</div>
                  <div className={`text-[10px] font-normal tracking-normal lowercase ${isActive ? "text-black/75" : "text-gray-500"}`}>
                    {tab.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Schedule Cards Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              {scheduleData[activeTab].map((item, idx) => (
                <div
                  key={idx}
                  className="group p-5 sm:p-6 rounded-2xl bg-[#141417] border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  {/* Left: Time and Tag */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center min-w-[110px]">
                      <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-semibold text-[#d4af37]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time.split(" - ")[0]}</span>
                      </div>
                      <div className="text-[10px] text-gray-500 mt-0.5">
                        jusqu&apos;à {item.time.split(" - ")[1]}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-serif font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                          {item.course}
                        </h4>
                        <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 hidden sm:inline-block">
                          {item.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-gray-500" />
                          {item.coach}
                        </span>
                        <span>•</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Availability & Action */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <div className="text-right">
                      <span className="text-[11px] text-emerald-400 font-medium">
                        {item.spotsLeft} places dispo.
                      </span>
                      <p className="text-[10px] text-gray-500">Max 12 pers.</p>
                    </div>

                    <button
                      onClick={onOpenBooking}
                      className="px-5 py-2.5 rounded-full bg-white/5 group-hover:bg-[#d4af37] text-gray-200 group-hover:text-black text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5"
                    >
                      <span>S&apos;inscrire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Schedule Footer Note */}
          <div className="mt-8 text-center text-xs text-gray-500">
            Tous les cours sont réservables via l&apos;application privée ONYX ou par téléphone auprès de la conciergerie. Serviette et rafraîchissements fournis à chaque séance.
          </div>
        </div>
      </div>
    </section>
  );
}
