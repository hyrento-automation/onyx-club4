"use client";

import { useState } from "react";
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDiscipline?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedDiscipline = "Séance Découverte",
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "10:00 - 11:00",
    discipline: selectedDiscipline,
    objective: "Bien-être & Renforcement",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate completed submission
    }, 500);
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
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-serif text-white tracking-wide">
              Invitation confirmée
            </h3>
            <p className="text-gray-300 text-sm max-w-sm mx-auto leading-relaxed">
              Merci, <span className="text-white font-medium">{formData.name}</span>. Un concierge ONYX prendra contact avec vous d&apos;ici 2 heures pour finaliser votre accès à Cologny.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-400 max-w-md mx-auto text-left space-y-1">
              <p><strong className="text-gray-200">Discipline :</strong> {formData.discipline}</p>
              <p><strong className="text-gray-200">Créneau souhaité :</strong> {formData.date || "Prochain créneau disponible"} ({formData.timeSlot})</p>
              <p><strong className="text-gray-200">Lieu :</strong> Route de Thonon 84, Cologny (Genève)</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 rounded-full bg-[#d4af37] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#e09f3e] transition duration-300"
            >
              Fermer
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 mb-2">
                EXPÉRIENCE PRIVÉE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif tracking-tight text-white">
                Réserver votre séance offerte
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Découvrez l&apos;ambiance unique de notre club face au Lac Léman. Accès vestiaire privatif et serviette inclus.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                    Nom & Prénom
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="Alexandre de Beaumont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+41 22 735 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                  Adresse e-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    placeholder="alexandre@domaine.ch"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                    Discipline souhaitée
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0f0f12] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37] transition"
                  >
                    <option value="Pilates Reformer">01 Pilates Reformer</option>
                    <option value="Vinyasa Flow Yoga">02 Vinyasa & Sound Bath</option>
                    <option value="Body Sculpt & Tone">03 Body Sculpt & Tone</option>
                    <option value="Stretching & Mobilité">04 Stretching & Mobilité</option>
                    <option value="HIIT Onyx Athletic">05 HIIT Onyx Athletic</option>
                    <option value="Coaching Privé 1-to-1">06 Coaching Privé 1-to-1</option>
                    <option value="Bootcamp Terrasse Lac">07 Outdoor Rooftop & Lake</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                    Créneau horaire
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0f0f12] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37] transition"
                  >
                    <option value="07:30 - 08:30 (Matin)">07:30 - 08:30 (Aube)</option>
                    <option value="12:15 - 13:15 (Midi)">12:15 - 13:15 (Midi)</option>
                    <option value="18:30 - 19:30 (Sunset)">18:30 - 19:30 (Sunset Lac)</option>
                    <option value="10:00 - 11:30 (Week-end)">10:00 - 11:30 (Week-end)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                  Date de visite souhaitée
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#d4af37] transition"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e09f3e] hover:from-[#e09f3e] hover:to-[#d4af37] text-black font-semibold tracking-widest text-xs uppercase shadow-lg shadow-[#d4af37]/20 transition-all duration-300 transform active:scale-[0.99]"
                >
                  Confirmer ma séance offerte (Valeur 45 CHF)
                </button>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  Aucun engagement. Serviette brodée & casier individuel inclus dès l&apos;arrivée.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
