import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { PROGRAMS } from "../data";
import { Swords, Check, Shield, Users, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export const Trial: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [schedule, setSchedule] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  // Handle pre-selected program from navigation state
  useEffect(() => {
    const state = location.state as { preSelectedProgram?: string } | null;
    if (state && state.preSelectedProgram) {
      setProgram(state.preSelectedProgram);
    }
  }, [location]);

  // Validation & Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = language === "id" ? "Nama wajib diisi" : "Name is required";
    }
    if (!phone.trim()) {
      newErrors.phone = language === "id" ? "Nomor WhatsApp wajib diisi" : "WhatsApp number is required";
    } else if (!/^[0-9+-\s]{8,15}$/.test(phone)) {
      newErrors.phone = language === "id" ? "Nomor WhatsApp tidak valid" : "Invalid WhatsApp number";
    }
    if (!program) {
      newErrors.program = language === "id" ? "Silakan pilih program" : "Please select a program";
    }
    if (!schedule.trim()) {
      newErrors.schedule = language === "id" ? "Preferensi jadwal wajib diisi" : "Schedule preference is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Formatting Message for WhatsApp
    const selectedProgramName = PROGRAMS.find((p) => p.slug === program)?.name[language] || program;
    
    const formattedMessage = language === "id"
      ? `Halo Black Ant Academy Sidoarjo! Saya ingin mendaftar Trial Class Gratis 3 Hari. Berikut data saya:\n\n• Nama: ${name}\n• No. WhatsApp: ${phone}\n• Program: ${selectedProgramName}\n• Preferensi Jadwal: ${schedule}${notes ? `\n• Catatan: ${notes}` : ""}\n\nMohon bantuannya untuk konfirmasi jadwal. Terima kasih!`
      : `Hello Black Ant Academy Sidoarjo! I'd like to sign up for a 3-Day Free Trial Class. Here are my details:\n\n• Name: ${name}\n• WhatsApp: ${phone}\n• Program: ${selectedProgramName}\n• Schedule Preference: ${schedule}${notes ? `\n• Notes: ${notes}` : ""}\n\nPlease confirm my slot. Thank you!`;

    const encodedText = encodeURIComponent(formattedMessage);
    const generatedUrl = `https://wa.me/6285745186832?text=${encodedText}`;

    setWhatsappUrl(generatedUrl);
    setIsSubmitted(true);

    // Track event on GA4 if available
    if ((window as any).gtag) {
      (window as any).gtag("event", "trial_booking_submit", {
        program_selected: program,
        schedule_preference: schedule,
      });
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-dark-bg" id="trial-page">
      {/* 1. HEADER HERO */}
      <section className="relative py-20 border-b border-brand-border overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg z-10" />
        <div className="relative max-w-4xl mx-auto px-4 z-20 space-y-4">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {t("nav.trial")}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight">
            CLAIM FREE PASS
          </h1>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t("trial.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. FORM & TRUST INFO GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Form */}
          <div className="lg:col-span-7 bg-dark-surface border border-brand-border rounded-2xl p-8 shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6" id="trial-registration-form">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    {t("trial.form.name")} *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("trial.form.placeholder.name")}
                    className={`w-full bg-dark-surface-elevated text-white border rounded-xl px-4 py-3.5 text-sm focus:ring-1 focus:ring-brand-primary outline-none transition-all ${
                      errors.name ? "border-red-500" : "border-brand-border"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name}</p>}
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    {t("trial.form.phone")} *
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("trial.form.placeholder.phone")}
                    className={`w-full bg-dark-surface-elevated text-white border rounded-xl px-4 py-3.5 text-sm focus:ring-1 focus:ring-brand-primary outline-none transition-all ${
                      errors.phone ? "border-red-500" : "border-brand-border"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone}</p>}
                </div>

                {/* Program Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    {t("trial.form.program")} *
                  </label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className={`w-full bg-dark-surface-elevated text-white border rounded-xl px-4 py-3.5 text-sm focus:ring-1 focus:ring-brand-primary outline-none transition-all ${
                      errors.program ? "border-red-500" : "border-brand-border"
                    }`}
                  >
                    <option value="">{t("trial.form.placeholder.program")}</option>
                    {PROGRAMS.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name[language]}
                      </option>
                    ))}
                  </select>
                  {errors.program && <p className="text-red-500 text-xs font-medium">{errors.program}</p>}
                </div>

                {/* Schedule Preference */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    {t("trial.form.schedule")} *
                  </label>
                  <input
                    type="text"
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                    placeholder={t("trial.form.placeholder.schedule")}
                    className={`w-full bg-dark-surface-elevated text-white border rounded-xl px-4 py-3.5 text-sm focus:ring-1 focus:ring-brand-primary outline-none transition-all ${
                      errors.schedule ? "border-red-500" : "border-brand-border"
                    }`}
                  />
                  {errors.schedule && <p className="text-red-500 text-xs font-medium">{errors.schedule}</p>}
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    {t("trial.form.notes")}
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t("trial.form.placeholder.notes")}
                    rows={4}
                    className="w-full bg-dark-surface-elevated text-white border border-brand-border rounded-xl px-4 py-3.5 text-sm focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-4 rounded-xl text-sm transition-all shadow-lg shadow-brand-primary/15 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Swords className="w-5 h-5" />
                  <span>{t("action.submit")}</span>
                </button>
              </form>
            ) : (
              /* Success screen prompt */
              <div className="text-center py-12 space-y-6" id="trial-success-screen">
                <div className="w-16 h-16 bg-emerald-950/40 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto text-3xl">
                  ✓
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide">
                  {t("action.success")}
                </h3>
                <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                  {t("trial.successMsg")}
                </p>
                <div className="pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center space-x-2 cursor-pointer">
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>{t("trial.successBtn")}</span>
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right: Trust Accents */}
          <div className="lg:col-span-5 bg-dark-surface/40 border border-brand-border rounded-2xl p-8 space-y-8 lg:mt-0">
            <h3 className="font-display text-xl text-white uppercase tracking-wide">
              {t("trial.trust")}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-primary-muted/20 border border-brand-primary/20 text-brand-primary rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    {t("trial.trust1")}
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                    Trained directly under black-belt practitioners licensed at the national organizational level.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-primary-muted/20 border border-brand-primary/20 text-brand-primary rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    {t("trial.trust2")}
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                    Train in a friendly environment where experienced athletes and beginners support each other like a tight ant colony.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-primary-muted/20 border border-brand-primary/20 text-brand-primary rounded-lg flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    {t("trial.trust3")}
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                    We maintain absolute hygiene rules, disinfecting high-quality wrestling mats and shared target pads daily.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
