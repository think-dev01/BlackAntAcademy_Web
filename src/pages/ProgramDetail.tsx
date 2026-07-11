import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { PROGRAMS, COACHES } from "../data";
import { Swords, Check, ChevronLeft, Calendar, User, ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";

export const ProgramDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="pt-32 min-h-screen bg-dark-bg flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-display text-3xl text-white uppercase">{t("program.notFound")}</h2>
        <p className="text-zinc-500 text-sm mt-2 max-w-sm">
          {t("program.notFoundDesc")}
        </p>
        <Link to="/programs" className="mt-6">
          <button className="bg-brand-primary text-white font-bold px-6 py-2.5 rounded-lg text-sm flex items-center space-x-2">
            <ChevronLeft className="w-4 h-4" />
            <span>{t("program.backToPrograms")}</span>
          </button>
        </Link>
      </div>
    );
  }

  // Find related coaches
  const relatedCoaches = COACHES.filter((c) => program.relatedCoaches.includes(c.slug));

  const benefits = {
    "muay-thai": [
      { id: "Membakar lemak ekstrem & mengencangkan otot", en: "Extreme fat burn & core conditioning" },
      { id: "Mempelajari pertahanan diri sikut & lutut yang realistis", en: "Learn realistic elbow & knee self-defense" },
      { id: "Meningkatkan stamina kardiovaskular secara drastis", en: "Boost cardiovascular stamina drastically" }
    ],
    "boxing-kickboxing": [
      { id: "Melatih kelincahan gerak kaki (footwork)", en: "Train boxing footwork agility" },
      { id: "Kombinasi pad-work dan heavy bag berenergi tinggi", en: "High-energy pad-work & heavy bag drills" },
      { id: "Sempurna untuk melepas stres harian", en: "Perfect for daily stress release" }
    ],
    "mma": [
      { id: "Integrasi transisi striking ke grappling", en: "Transition striking cleanly into wrestling" },
      { id: "Mempelajari pertarungan bawah (ground game)", en: "Master positional ground combat" },
      { id: "Membentuk ketangguhan mental petarung sejati", en: "Forge a true fighter's mental toughness" }
    ],
    "bjj-grappling": [
      { id: "Seni melumpuhkan lawan tanpa pukulan", en: "Neutralize opponents without throwing strikes" },
      { id: "Mempelajari leverage dan teknik kuncian sendi", en: "Learn joint-locks & leverage techniques" },
      { id: "Sangat efektif untuk pertahanan diri di jalanan", en: "Highly effective for street self-defense" }
    ],
    "wushu-sanda": [
      { id: "Bantingan eksplosif khas beladiri Sanda", en: "Explosive wrestling sweeps & takedowns" },
      { id: "Melatih refleks menangkap tendangan lawan", en: "Train reflexes to catch incoming kicks" },
      { id: "Dilatih langsung oleh praktisi berlisensi nasional", en: "Trained under national-certified sanda coaches" }
    ],
    "functional-training": [
      { id: "Memperkuat otot core dan kapasitas paru-paru", en: "Strengthen core muscles & lung capacity" },
      { id: "Variasi sirkuit kettlebell, slam ball, & ropes", en: "Varied circuits with kettlebells & slam balls" },
      { id: "Meningkatkan mobilitas & fleksibilitas sendi", en: "Boost joint flexibility & mobility" }
    ]
  }[program.slug] || [
    { id: "Melatih koordinasi tubuh total", en: "Train overall body coordination" },
    { id: "Didampingi pelatih dari nol", en: "Coached carefully from step zero" },
    { id: "Aman bagi pemula", en: "Fully safe for beginners" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg" id="program-detail-page">
      {/* 1. BACK HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/programs" className="inline-flex items-center text-xs font-bold text-zinc-500 hover:text-brand-primary uppercase tracking-wider transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1.5" />
          <span>{t("nav.programs")}</span>
        </Link>
      </div>

      {/* 2. PROGRAM DETAILS HERO */}
      <section className="py-12 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Card */}
          <div className="relative rounded-2xl overflow-hidden border border-brand-border shadow-xl">
            <img
              src={program.image}
              alt={program.name[language]}
              className="w-full h-auto object-cover aspect-4/3"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-primary/20">
              {t(`programs.category.${program.category}`)}
            </div>
          </div>

          {/* Right: Info and CTA */}
          <div className="space-y-6">
            <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-none">
              {program.name[language]}
            </h1>
            <div className="w-16 h-1 bg-brand-primary" />
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
              {program.fullDesc[language]}
            </p>

            <div className="space-y-3.5 pt-4">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                {t("program.classBenefits")}
              </h3>
              <ul className="space-y-2.5">
                {benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start text-xs md:text-sm text-zinc-400">
                    <Check className="w-4 h-4 text-brand-primary mr-2 shrink-0 mt-0.5" />
                    <span>{b[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => navigate("/trial", { state: { preSelectedProgram: program.slug } })}
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-md shadow-brand-primary/15 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Swords className="w-4 h-4" />
                <span>{t("program.bookTrial")}</span>
              </button>
              <Link to="/schedule" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-dark-surface hover:bg-zinc-800 text-white border border-brand-border font-bold px-6 py-4 rounded-xl text-sm transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4 text-brand-primary" />
                  <span>{t("program.checkSchedule")}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED COACHES SECTION */}
      <section className="py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center md:text-left space-y-3">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {t("program.certifiedInstructors")}
            </span>
            <h2 className="font-display text-3xl text-white uppercase tracking-tight">
              {t("program.meetCoachesFor")} {program.name[language]}
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm max-w-xl leading-relaxed">
              {t("program.coachesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCoaches.map((coach) => (
              <div key={coach.slug} className="bg-dark-surface border border-brand-border rounded-xl p-6 flex flex-col sm:flex-row gap-6">
                <img
                  src={coach.photo}
                  alt={coach.name}
                  className="w-24 h-24 rounded-xl object-cover border border-brand-border/80 mx-auto sm:mx-0"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-3 text-center sm:text-left flex-grow">
                  <div>
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">
                      {coach.role[language]}
                    </span>
                    <h3 className="font-display text-xl text-white uppercase tracking-wide mt-0.5">
                      {coach.name}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans line-clamp-3">
                    {coach.bio[language]}
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1">
                    {coach.specialties.map((spec, index) => (
                      <span key={index} className="text-[9px] bg-dark-bg text-zinc-400 border border-brand-border/40 px-2 py-0.5 rounded-md font-semibold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY PREVIEW */}
      <section className="py-24 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight">
            {t("program.matsAtmosphere")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {program.gallery.map((imgUrl, index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-brand-border aspect-video">
                <img
                  src={imgUrl}
                  alt={`${program.name[language]} training facility`}
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
