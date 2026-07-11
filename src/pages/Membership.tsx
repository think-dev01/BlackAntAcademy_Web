import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { PRICING } from "../data";
import { Check, HelpCircle, ChevronDown, Swords } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  q: { id: string; en: string };
  a: { id: string; en: string };
}

export const Membership: React.FC = () => {
  const { language, t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: {
        id: "Apakah pemula tanpa latar belakang bela diri bisa bergabung?",
        en: "Can a absolute beginner with no martial arts background join?"
      },
      a: {
        id: "Tentu saja! Lebih dari 70% member kami memulai dari nol. Pelatih kami dilisensikan khusus untuk mengajar dari dasar teknik yang aman, bertahap, dan bebas intimidasi.",
        en: "Absolutely! More than 70% of our members started from absolute scratch. Our coaches are specifically certified to guide beginners in a highly safe, progressive, and welcoming environment."
      }
    },
    {
      q: {
        id: "Bagaimana cara mendaftar kelas trial gratis?",
        en: "How do I register for a free trial class?"
      },
      a: {
        id: "Sangat mudah! Isi data diri Anda di halaman Trial, klik submit, lalu sistem kami akan menghasilkan pesan WhatsApp otomatis. Cukup kirimkan pesan tersebut untuk konfirmasi kedatangan Anda.",
        en: "Extremely simple! Just fill in your details on our Trial page, click submit, and our system generates a pre-formatted WhatsApp chat. Send it over to our admin to instantly confirm your attendance."
      }
    },
    {
      q: {
        id: "Apakah saya harus membawa peralatan sendiri saat trial?",
        en: "Do I need to bring my own gear/equipment for the trial session?"
      },
      a: {
        id: "Untuk sesi awal atau trial, kami menyediakan pinjaman sarung tinju (gloves). Cukup kenakan kaos olahraga yang nyaman serta celana pendek/training, dan bawa air minum serta handuk kecil.",
        en: "For initial trial sessions, we provide gloves on loan. Just wear comfortable activewear (t-shirt and shorts/sweatpants), bring your water bottle, and a personal small towel."
      }
    },
    {
      q: {
        id: "Bagaimana sistem pembayaran membership?",
        en: "How does the membership payment structure work?"
      },
      a: {
        id: "Kami mendukung transparansi penuh tanpa ikatan kontrak jangka panjang yang menjebak. Pembayaran dilakukan bulanan (cash, transfer bank, atau scan QRIS) sebelum periode latihan dimulai.",
        en: "We believe in full financial transparency with no sneaky long-term contracts. Payments are handled monthly via cash, bank transfer, or QRIS before your active training period begins."
      }
    },
    {
      q: {
        id: "Apakah ada kelas khusus untuk anak-anak?",
        en: "Do you offer dedicated classes for children?"
      },
      a: {
        id: "Ya, kami memiliki program Kids Martial Arts yang ramah anak, berfokus melatih disiplin, koordinasi motorik, ketahanan fisik, serta rasa percaya diri anak dengan metode yang seru.",
        en: "Yes, we do run dedicated children's programs focusing on positive discipline, motor coordination, physical stamina, and self-confidence through highly engaging methods."
      }
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  return (
    <div className="pt-24 min-h-screen bg-dark-bg" id="membership-page">
      {/* 1. HEADER HERO */}
      <section className="relative py-20 border-b border-brand-border overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg z-10" />
        <div className="relative max-w-4xl mx-auto px-4 z-20 space-y-4">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {t("nav.membership")}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight">
            {t("membership.title")}
          </h1>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t("membership.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. PRICING CARDS GRID */}
      <section className="py-20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING.map((plan) => (
              <div
                key={plan.slug}
                id={`membership-pricing-card-${plan.slug}`}
                className={`bg-dark-surface border rounded-2xl p-8 flex flex-col justify-between relative transition-all ${
                  plan.highlight
                    ? "border-brand-primary scale-100 lg:scale-[1.03] shadow-lg shadow-brand-primary/10 z-10 bg-gradient-to-b from-dark-surface to-brand-primary-muted/15"
                    : "border-brand-border"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-primary text-white font-sans text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full shadow-md">
                    {t("membership.popular")}
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl text-white uppercase tracking-wide">
                      {plan.name[language]}
                    </h3>
                    <div className="flex items-baseline mt-4">
                      <span className="text-sm font-bold text-zinc-500 mr-1">
                        {plan.price > 0 ? "Rp" : ""}
                      </span>
                      <span className="font-display text-4xl text-white">
                        {plan.price > 0 ? plan.price.toLocaleString("id-ID") : "FREE"}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-xs text-zinc-400 ml-2 font-medium">
                          / {plan.unit[language]}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-brand-border/60 pt-6 space-y-3.5">
                    <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                      {t("membership.includes")}
                    </p>
                    <ul className="space-y-3">
                      {plan.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-xs text-zinc-300">
                          <Check className="w-4 h-4 text-brand-primary mr-2.5 shrink-0 mt-0.5" />
                          <span>{benefit[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Link to="/trial" className="block">
                    <button
                      className={`w-full font-bold py-3.5 px-4 rounded-xl text-xs tracking-wider uppercase transition-all cursor-pointer ${
                        plan.highlight
                          ? "bg-brand-primary hover:bg-brand-primary-hover text-white shadow-md shadow-brand-primary/10"
                          : "bg-dark-surface-elevated hover:bg-zinc-800 text-white border border-brand-border"
                      }`}
                    >
                      {plan.ctaLabel[language]}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <HelpCircle className="w-10 h-10 text-brand-primary mx-auto" />
          <h2 className="font-display text-3xl text-white uppercase tracking-tight">
            {t("membership.faq")}
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto">
            {t("membership.faqSubtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFAQ === idx;
            return (
              <div
                key={idx}
                className="bg-dark-surface border border-brand-border rounded-xl overflow-hidden transition-all"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between text-white font-bold text-sm md:text-base cursor-pointer hover:bg-zinc-800/20"
                >
                  <span>{faq.q[language]}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-brand-border/60"
                    >
                      <div className="px-6 py-5 text-xs md:text-sm text-zinc-400 font-sans leading-relaxed bg-zinc-900/10">
                        {faq.a[language]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TRIAL AD STRIP */}
      <section className="py-20 relative bg-brand-primary-muted/10 border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight">
            {t("membership.readyTake")}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {t("membership.readyTakeDesc")}
          </p>
          <div className="pt-4">
            <Link to="/trial">
              <button className="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-brand-primary/25 flex items-center justify-center space-x-2 mx-auto cursor-pointer">
                <Swords className="w-5 h-5" />
                <span>{t("action.tryFree")}</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
