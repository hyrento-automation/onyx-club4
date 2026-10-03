"use client";

import { useState } from "react";
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, Percent } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDiscipline?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedDiscipline = "Boxe (Boxe Technic)",
}: BookingModalProps) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "group", // group (35 CHF) or individual (120 CHF)
    discipline: selectedDiscipline,
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#141417] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-white overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-serif text-white tracking-wide">
              {t("Demande Enregistrée", "Request Recorded")}
            </h3>
            <p className="text-gray-300 text-sm max-w-sm mx-auto leading-relaxed">
              {t("Merci,", "Thank you,")}{" "}
              <span className="text-white font-medium">{formData.name}</span>.{" "}
              {t(
                "Notre équipe vous contactera au 078 613 70 21 / WhatsApp pour valider votre séance avec les 10% de réduction nouveaux membres.",
                "Our team will reach out via 078 613 70 21 / WhatsApp to confirm your session with the 10% new member discount."
              )}
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-400 max-w-md mx-auto text-left space-y-1 font-mono">
              <p><strong className="text-gray-200">Activité :</strong> {formData.discipline}</p>
              <p>
                <strong className="text-gray-200">Formule :</strong>{" "}
                {formData.sessionType === "group" ? "Cours collectif (35.00 CHF)" : "Cours individuel (120.00 CHF)"}
              </p>
              <p><strong className="text-gray-200">Avantage :</strong> 10% OFF appliqué</p>
              <p><strong className="text-gray-200">Lieu :</strong> Chemin du Nant-d&apos;Argent 1, Cologny</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 rounded-full bg-[#d4af37] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#e09f3e] transition duration-300"
            >
              {t("Fermer", "Close")}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 mb-2">
                <Percent className="w-3 h-3" />
                <span>{t("10% OFF NOUVEAUX MEMBRES", "10% OFF NEW MEMBERS")}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif tracking-tight text-white">
                {t("Réserver une Séance", "Book a Session")}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                ONYX CLUB · Cologny, Lac Léman. {t("Cours collectif ou individuel 100% sur mesure.", "Group or individual tailored session.")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                    {t("Nom & Prénom", "Full Name")}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="Alexandre Blanc"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                    {t("Téléphone / WhatsApp", "Phone / WhatsApp")}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input
                      type="tel"
                      required
                      placeholder="078 613 70 21"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                  {t("Adresse e-mail", "Email Address")}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    placeholder="contact@exemple.ch"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                    {t("Activité souhaitée", "Selected Activity")}
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0f0f12] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37] transition"
                  >
                    <option value="Boxe (Boxe Technic)">Boxe (Boxe Technic)</option>
                    <option value="Yoga (« Activité sereine »)">Yoga (« Activité sereine »)</option>
                    <option value="Coaching mental / Développement personnel">Coaching mental / Dév. personnel</option>
                    <option value="Coaching privé">Coaching privé</option>
                    <option value="Personal Training">Personal Training (Sur mesure)</option>
                    <option value="Pilates (Recovery-focused)">Pilates (Recovery-focused)</option>
                    <option value="Running Club">Running Club</option>
                    <option value="Bootcamp">Bootcamp</option>
                    <option value="Zumba">Zumba</option>
                    <option value="Strong Nation / Circle Mobility">Strong Nation / Circle Mobility</option>
                    <option value="Stretching">Stretching</option>
                    <option value="Coaching sportif">Coaching sportif</option>
                    <option value="Free Access">Free Access</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                    {t("Formule", "Session Type")}
                  </label>
                  <select
                    value={formData.sessionType}
                    onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0f0f12] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37] transition"
                  >
                    <option value="group">{t("Cours collectif (35.00 CHF)", "Group class (35.00 CHF)")}</option>
                    <option value="individual">{t("Cours individuel / 1-to-1 (120.00 CHF)", "Individual class / 1-to-1 (120.00 CHF)")}</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b87333] text-black font-semibold tracking-widest text-xs uppercase shadow-lg shadow-[#d4af37]/20 transition-all duration-300 transform active:scale-[0.99]"
                >
                  {t("Confirmer avec 10% de réduction", "Confirm with 10% Discount")}
                </button>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  ONYX CLUB · Chemin du Nant-d&apos;Argent 1, Cologny · WhatsApp : 078 613 70 21
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
