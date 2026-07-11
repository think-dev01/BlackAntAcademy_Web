import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { PROGRAMS } from "../data";
import { Swords, Activity, Zap, Dumbbell, Shield, ShieldAlert, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const getProgramIcon = (iconName: string) => {
  switch (iconName) {
    case "Swords": return <Swords className="w-8 h-8 text-brand-primary" />;
    case "ShieldAlert": return <ShieldAlert className="w-8 h-8 text-brand-primary" />;
    case "Shield": return <Shield className="w-8 h-8 text-brand-primary" />;
    case "Activity": return <Activity className="w-8 h-8 text-brand-primary" />;
    case "Zap": return <Zap className="w-8 h-8 text-brand-primary" />;
    case "Dumbbell": return <Dumbbell className="w-8 h-8 text-brand-primary" />;
    default: return <Swords className="w-8 h-8 text-brand-primary" />;
  }
};

export const Programs: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "striking" | "grappling" | "fitness">("all");

  const categories = [
    { value: "all", label: language === "id" ? "Semua Program" : "All Programs" },
    { value: "striking", label: t("programs.category.striking") },
    { value: "grappling", label: t("programs.category.grappling") },
    { value: "fitness", label: t("programs.category.fitness") }
  ];

  const filteredPrograms = filter === "all"
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-dark-bg" id="programs-page">
      {/* 1. HEADER SECTION */}
      <section className="relative py-20 border-b border-brand-border overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg z-10" />
        <div className="relative max-w-4xl mx-auto px-4 z-20 space-y-4">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {t("nav.programs")}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight">
            {t("programs.trainingDisciplines")}
          </h1>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {language === "id"
              ? "Tingkatkan kemampuan pertahanan diri, kekuatan fungsional, dan stamina Anda bersama kelas grup khusus kami."
              : "Enhance your self-defense, functional conditioning, and physical stamina within our dedicated group training sessions."}
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER STRIP */}
      <section className="py-8 bg-dark-surface border-b border-brand-border sticky top-[72px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                  filter === cat.value
                    ? "bg-brand-primary border-brand-primary text-white shadow-md shadow-brand-primary/15"
                    : "bg-dark-bg text-zinc-400 border-brand-border hover:border-zinc-700 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-surface border border-brand-border hover:border-brand-primary rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col justify-between"
                id={`program-page-card-${program.slug}`}
              >
                {/* Image & Icon container */}
                <div className="relative h-60 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent z-10 opacity-90" />
                  <img
                    src={program.image}
                    alt={program.name[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-dark-bg/80 backdrop-blur-md p-2.5 rounded-xl border border-brand-border">
                    {getProgramIcon(program.icon)}
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-primary-muted/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-brand-primary/30">
                      {t(`programs.category.${program.category}`)}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="font-display text-2xl text-white group-hover:text-brand-primary transition-colors uppercase tracking-wide">
                      {program.name[language]}
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                      {program.fullDesc[language]}
                    </p>
                  </div>

                  <div className="border-t border-brand-border/60 pt-4 mt-2">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                      {t("programs.levels")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {program.level.map((lvl, index) => (
                        <span key={index} className="text-[10px] bg-dark-bg text-zinc-400 px-2.5 py-1 rounded-md border border-brand-border/40 font-semibold">
                          {lvl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-0 shrink-0">
                  <Link to={`/programs/${program.slug}`} className="block">
                    <button className="w-full bg-dark-surface-elevated hover:bg-brand-primary text-white font-bold py-3 rounded-lg text-xs tracking-wider uppercase transition-colors flex items-center justify-center space-x-1.5 border border-brand-border group-hover:border-brand-primary cursor-pointer">
                      <span>{t("action.viewDetails")}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRIAL AD STRIP */}
      <section className="py-20 relative bg-brand-primary-muted/10 border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight">
            {t("programs.notSureTitle")}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {t("programs.notSureDesc")}
          </p>
          <div className="pt-4">
            <Link to="/trial">
              <button className="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center space-x-2 mx-auto cursor-pointer">
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
