"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket, Users, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function EventsSection() {
  const { t } = useLanguage();

  const pastSchedule = [
    { time: "09:30 – 10:30", course: "Pilates" },
    { time: "11:00 – 12:00", course: "Yoga" },
    { time: "12:00 – 13:00", course: t("Développement personnel", "Personal Development") },
    { time: "13:00 – 14:00", course: t("Boxe", "Boxing") },
    { time: "14:00 – 14:45", course: "Strong Nation / Circle Mobility" },
    { time: "16:00 – 17:00", course: "Stretching" },
  ];

  return (
    <section id="evenements" className="py-28 relative bg-[#0e0e11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-300">
                {t("NOS ÉVÉNEMENTS · RETOUR SUR ÉVÉNEMENT", "OUR EVENTS · RECAP")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              {t("La Journée Sportive", "The Sports & Wellness Day")}{" "}
              <span className="gold-gradient-text italic font-normal">
                {t("& Bien-être", "& Wellness")}
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-400 text-sm max-w-md">
            {t(
              "Retour sur cet événement marquant tenu au Chemin du Nant-d'Argent 1. Restez à l'écoute pour nos prochains rassemblements exclusifs.",
              "A look back at this signature event held at Chemin du Nant-d'Argent 1. Stay tuned for our upcoming exclusive gatherings."
            )}
          </p>
        </div>

        {/* Recap Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Event Details & VIP PASS 27 */}
          <div className="lg:col-span-7 bg-[#141417] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-mono text-[#d4af37]">
                  {t("ÉVÉNEMENT PASSÉ · RECAP", "PAST EVENT · RECAP")}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {t("Dimanche 27 Septembre 2026", "Sunday 27 September 2026")}
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-serif italic text-white/90 border-l-2 border-[#d4af37] pl-4 py-1">
                {t(
                  "« Une expérience unique pour booster votre corps, apaiser votre esprit et révéler le meilleur de vous-même. »",
                  "« A unique experience to boost your body, soothe your mind and reveal the best of yourself. »"
                )}
              </blockquote>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t(
                  "Cette journée a rassemblé une communauté passionnée et inspirante autour de 6 ateliers spécialisés et d'échanges privilégiés au bord du lac Léman.",
                  "This gathering united a passionate and inspiring community around 6 specialised workshops and privileged lakeside exchanges."
                )}
              </p>

              {/* Event Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/40 border border-white/5">
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>27.09.2026 · 08:00 – 16:00</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/40 border border-white/5">
                  <MapPin className="w-4 h-4 text-[#d4af37]" />
                  <span>Chemin du Nant-d&apos;Argent 1, Cologny</span>
                </div>
              </div>

              {/* VIP PASS Card Replica */}
              <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-[#1c1914] via-[#161519] to-[#121215] border border-[#d4af37]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                    <Ticket className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white tracking-widest">
                        PASS 27 · VIP
                      </span>
                      <span className="text-[10px] text-[#d4af37] font-mono">INVITATION N° 027</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Destination : « Bien-être & Sport » · Onyx Club Genève
                    </p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                    {t("Complété", "Completed")}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-xs text-gray-400">
              <em>{t("Note : Cet événement étant passé, les inscriptions sont closes. Les futures dates d'événements seront communiquées ici.", "Note: As this event has concluded, registrations are closed. Upcoming event dates will be announced here.")}</em>
            </div>
          </div>

          {/* Right: Official Event Programme & Photo Space */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Programme List */}
            <div className="bg-[#141417] border border-white/10 rounded-3xl p-7 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                {t("PROGRAMME OFFICIEL RÉALISÉ", "OFFICIAL EVENT TIMETABLE")}
              </h4>

              <div className="space-y-2.5">
                {pastSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs"
                  >
                    <span className="font-mono text-[#d4af37]">{item.time}</span>
                    <span className="text-gray-200 font-medium">{item.course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo / Future Event Space */}
            <div className="bg-[#141417] border border-dashed border-white/20 rounded-3xl p-6 text-center space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">
                {t("GALERIE & PROCHAINS ÉVÉNEMENTS", "GALLERY & FUTURE EVENTS")}
              </span>
              <p className="text-xs text-gray-400">
                {t(
                  "Espace réservé aux photographies de l'événement et aux annonces des prochaines retraites bien-être.",
                  "Space reserved for event photography and upcoming wellness retreat announcements."
                )}
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#d4af37]">
                [TODO: Espace galerie photos & futures dates / Future dates placeholder]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
