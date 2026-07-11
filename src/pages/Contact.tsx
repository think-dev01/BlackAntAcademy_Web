import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, Send } from "lucide-react";
import { motion } from "motion/react";

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();

  // Contact Message form state
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgBody, setMsgBody] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [waLink, setWaLink] = useState("");

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!msgName.trim()) {
      newErrors.name = language === "id" ? "Nama wajib diisi" : "Name is required";
    }
    if (!msgBody.trim()) {
      newErrors.message = language === "id" ? "Pesan wajib diisi" : "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const messageTemplate = language === "id"
      ? `Halo Black Ant Academy Sidoarjo! Saya memiliki pertanyaan cepat:\n\n• Nama: ${msgName}\n• Email: ${msgEmail || "-"}\n• Pesan: ${msgBody}\n\nMohon bantuannya untuk mengonfirmasi. Terima kasih!`
      : `Hello Black Ant Academy Sidoarjo! I have a quick question:\n\n• Name: ${msgName}\n• Email: ${msgEmail || "-"}\n• Message: ${msgBody}\n\nPlease help me address this. Thank you!`;

    const encodedText = encodeURIComponent(messageTemplate);
    const url = `https://wa.me/6285745186832?text=${encodedText}`;

    setWaLink(url);
    setIsSuccess(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-dark-bg" id="contact-page">
      {/* 1. HEADER HERO */}
      <section className="relative py-20 border-b border-brand-border overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg z-10" />
        <div className="relative max-w-4xl mx-auto px-4 z-20 space-y-4">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {t("nav.contact")}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight">
            GET IN TOUCH
          </h1>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & QUICK FORM */}
      <section className="py-20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Quick Form */}
          <div className="bg-dark-surface border border-brand-border rounded-2xl p-8 shadow-xl">
            <h2 className="font-display text-2xl text-white uppercase tracking-wide mb-6 flex items-center space-x-2.5">
              <MessageSquare className="w-6 h-6 text-brand-primary" />
              <span>{t("contact.sendMessage")}</span>
            </h2>

            {!isSuccess ? (
              <form onSubmit={handleMessageSubmit} className="space-y-6" id="contact-message-form">
                {/* Full name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    {t("trial.form.name")} *
                  </label>
                  <input
                    type="text"
                    value={msgName}
                    onChange={(e) => setMsgName(e.target.value)}
                    placeholder={t("trial.form.placeholder.name")}
                    className={`w-full bg-dark-surface-elevated text-white border rounded-xl px-4 py-3.5 text-sm focus:ring-1 focus:ring-brand-primary outline-none transition-all ${
                      errors.name ? "border-red-500" : "border-brand-border"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name}</p>}
                </div>

                {/* Email address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={msgEmail}
                    onChange={(e) => setMsgEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full bg-dark-surface-elevated text-white border border-brand-border rounded-xl px-4 py-3.5 text-sm focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                  />
                </div>

                {/* Message Content */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    value={msgBody}
                    onChange={(e) => setMsgBody(e.target.value)}
                    placeholder={t("contact.form.placeholder.message")}
                    rows={5}
                    className={`w-full bg-dark-surface-elevated text-white border rounded-xl px-4 py-3.5 text-sm focus:ring-1 focus:ring-brand-primary outline-none transition-all ${
                      errors.message ? "border-red-500" : "border-brand-border"
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-4 rounded-xl text-sm transition-all shadow-lg shadow-brand-primary/15 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-emerald-950/40 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto text-3xl">
                  ✓
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide">
                  Message Structured!
                </h3>
                <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                  Click the button below to forward your inquiry directly to our official WhatsApp inbox.
                </p>
                <div className="pt-4">
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg flex items-center space-x-2 mx-auto cursor-pointer">
                      <Phone className="w-4 h-4 fill-white text-emerald-500" />
                      <span>Forward to WhatsApp</span>
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right: Detailed Contact info */}
          <div className="bg-dark-surface/40 border border-brand-border rounded-2xl p-8 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-white uppercase tracking-wide border-l-2 border-brand-primary pl-3">
                {t("contact.info")}
              </h2>
              
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-primary-muted/20 border border-brand-primary/20 text-brand-primary rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white uppercase tracking-wider">{t("contact.address")}</h4>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1 leading-relaxed font-sans">
                      Jl. Raya Suko No. 56C, Ngemplak, Cemeng Kalang, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61224
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-primary-muted/20 border border-brand-primary/20 text-brand-primary rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white uppercase tracking-wider">WhatsApp CS</h4>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1 font-sans">
                      +62 857-4518-6832
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-primary-muted/20 border border-brand-primary/20 text-brand-primary rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white uppercase tracking-wider">{t("contact.hours")}</h4>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1 font-sans">
                      {t("contact.hoursDetail")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-brand-border/60">
              <a
                href="https://maps.app.goo.gl/9MiA59iBozjbnDHXA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-dark-surface-elevated hover:bg-zinc-800 text-white border border-brand-border font-bold py-3.5 px-4 rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-brand-primary" />
                <span>{t("contact.googleMaps")}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE MAP IFRAME SECTION */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight">
              SIDOARJO GYM LOCATION
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto">
              We are located in Ngemplak, Cemeng Kalang, Sidoarjo. Easily accessible with spacious parking spots.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-brand-border h-[450px] shadow-lg relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.518683!2d112.7151039!3d-7.4406543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1003666b6ab%3A0xe5a3df1458e0a13d!2sJl.%20Raya%20Suko%20No.56C%2C%20Ngemplak%2C%20Cemeng%20Kalang%2C%20Kec.%20Sidoarjo%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061224!5e0!3m2!1sid!2sid!4v1719999999999!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location for Black Ant Academy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
