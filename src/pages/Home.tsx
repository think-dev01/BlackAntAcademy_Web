import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { PROGRAMS, PRICING, TESTIMONIALS, BLOG_POSTS } from "../data";
import { motion } from "motion/react";
import { Swords, Check, X, Shield, Users, Star, Award, ChevronRight, Activity, Zap, Dumbbell, ShieldAlert } from "lucide-react";

// Icon mapping helper
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

export const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="overflow-x-hidden" id="home-page">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-dark-bg" id="hero-section">
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg z-10" />
        
        {/* Hero Background Image */}
        <img
          src="https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/hero.jpg"
          alt="MMA & Muay Thai Boxing Gym training atmosphere"
          className="absolute inset-0 w-full h-full object-cover opacity-35 object-center scale-105"
          referrerPolicy="no-referrer"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center space-y-8 mt-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-brand-primary-muted/30 border border-brand-primary/40 px-4 py-1.5 rounded-full"
            id="hero-eyebrow"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="font-sans text-xs font-bold tracking-widest text-brand-primary uppercase">
              {t("hero.tagline")}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.95]"
            id="hero-heading"
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl mx-auto text-base md:text-xl text-zinc-300 font-sans leading-relaxed"
            id="hero-description"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            id="hero-ctas"
          >
            <Link to="/trial" className="w-full sm:w-auto">
              <button className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-xl shadow-brand-primary/25 flex items-center justify-center space-x-2 cursor-pointer">
                <Swords className="w-5 h-5" />
                <span>{t("action.tryFree")}</span>
              </button>
            </Link>
            <Link to="/programs" className="w-full sm:w-auto">
              <button className="w-full bg-dark-surface hover:bg-zinc-800 text-white border border-brand-border font-bold px-8 py-4 rounded-xl text-lg transition-all cursor-pointer">
                {t("action.learnMore")}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS STRIP SECTION */}
      <section className="bg-dark-surface border-y border-brand-border py-12 relative z-20" id="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: "6+", label: t("stats.programs") },
              { num: "4+", label: t("stats.coaches") },
              { num: "12+", label: t("stats.experience") },
              { num: "500+", label: t("stats.members") },
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <h3 className="font-display text-4xl md:text-5xl text-brand-primary tracking-tight">
                  {stat.num}
                </h3>
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM VS SOLUTION */}
      <section className="py-24 bg-dark-bg border-b border-brand-border" id="problem-solution-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight">
              {t("problem.title")}
            </h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto" />
            <p className="text-zinc-400 font-sans text-base md:text-lg">
              {t("problem.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Problems */}
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 lg:p-12 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl" />
              <h3 className="font-display text-2xl text-red-500 uppercase tracking-wide flex items-center space-x-3">
                <X className="w-6 h-6" />
                <span>{t("home.commercialGym")}</span>
              </h3>
              <div className="space-y-6">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-500 font-bold text-xs shrink-0 mt-1">
                      !
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">
                        {t(`problem.item${num}.title`)}
                      </h4>
                      <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                        {t(`problem.item${num}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Solution (Black Ant Colony) */}
            <div className="bg-brand-primary-muted/10 border border-brand-primary/20 rounded-2xl p-8 lg:p-12 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl" />
              <h3 className="font-display text-2xl text-brand-primary uppercase tracking-wide flex items-center space-x-3">
                <Check className="w-6 h-6" />
                <span>{t("solution.title")}</span>
              </h3>
              <div className="space-y-6">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">
                        {t(`solution.item${num}.title`)}
                      </h4>
                      <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                        {t(`solution.item${num}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM OVERVIEW */}
      <section className="py-24 bg-dark-surface border-b border-brand-border" id="program-overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            <div className="space-y-4 text-center md:text-left max-w-2xl">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
                {t("home.disciplines")}
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight">
                {t("programs.title")}
              </h2>
              <p className="text-zinc-400 text-sm md:text-base">
                {t("programs.subtitle")}
              </p>
            </div>
            <Link to="/programs" className="shrink-0">
              <button className="bg-transparent hover:bg-brand-primary-muted/20 border border-brand-primary/30 hover:border-brand-primary text-white font-bold px-5 py-3 rounded-xl text-sm transition-all flex items-center space-x-2">
                <span>{t("action.viewAll")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program) => (
              <motion.div
                key={program.slug}
                className="bg-dark-bg border border-brand-border hover:border-brand-primary rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -6 }}
                id={`program-card-${program.slug}`}
              >
                {/* Thumbnail */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10 opacity-80" />
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
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wider bg-brand-primary-muted/80 backdrop-blur-md px-3 py-1 rounded-full border border-brand-primary/30">
                      {t(`programs.category.${program.category}`)}
                    </span>
                  </div>
                </div>

                {/* Info body */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl text-white group-hover:text-brand-primary transition-colors uppercase tracking-wide">
                      {program.name[language]}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                      {program.shortDesc[language]}
                    </p>
                  </div>

                  <div className="border-t border-brand-border/60 pt-4 mt-2">
                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                      {t("programs.levels")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {program.level.map((lvl, index) => (
                        <span key={index} className="text-[10px] bg-dark-surface-elevated text-zinc-400 px-2 py-0.5 rounded-md border border-brand-border/40 font-semibold">
                          {lvl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="px-6 pb-6 pt-0">
                  <Link to={`/programs/${program.slug}`} className="block">
                    <button className="w-full bg-dark-surface-elevated hover:bg-brand-primary text-white font-bold py-2.5 rounded-lg text-xs tracking-wider uppercase transition-colors flex items-center justify-center space-x-1.5 border border-brand-border group-hover:border-brand-primary">
                      <span>{t("programs.viewProgram")}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEMBERSHIP PREVIEW */}
      <section className="py-24 bg-dark-bg border-b border-brand-border" id="pricing-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {t("home.investment")}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight">
              {t("membership.title")}
            </h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto" />
            <p className="text-zinc-400 font-sans text-sm md:text-base">
              {t("membership.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING.map((plan) => (
              <div
                key={plan.slug}
                id={`pricing-card-${plan.slug}`}
                className={`bg-dark-surface border rounded-2xl p-8 flex flex-col justify-between relative transition-all ${
                  plan.highlight
                    ? "border-brand-primary scale-100 lg:scale-[1.03] shadow-lg shadow-brand-primary/10 z-10 bg-gradient-to-b from-dark-surface to-brand-primary-muted/10"
                    : "border-brand-border"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-primary text-white font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
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

          <div className="text-center pt-4">
            <Link to="/membership" className="text-brand-primary hover:text-brand-primary-hover font-semibold text-sm transition-colors flex items-center justify-center space-x-1">
              <span>{t("home.viewAllFaqs")}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL CAROUSEL */}
      <section className="py-24 bg-dark-surface border-b border-brand-border" id="testimonials-preview-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {t("home.successStories")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight">
            {t("home.whatColonySays")}
          </h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />

          {/* Carousel Body */}
          <div className="relative bg-dark-bg border border-brand-border rounded-2xl p-8 md:p-12 space-y-6 shadow-xl shadow-black/40">
            <div className="flex justify-center space-x-1 text-brand-gold">
              {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-gold" />
              ))}
            </div>

            <p className="font-sans text-base md:text-lg text-zinc-300 italic leading-relaxed">
              "{TESTIMONIALS[activeTestimonial].quote[language]}"
            </p>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={TESTIMONIALS[activeTestimonial].photo}
                alt={TESTIMONIALS[activeTestimonial].name}
                className="w-12 h-12 rounded-full object-cover border border-brand-primary/40"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <h4 className="font-bold text-sm text-white">
                  {TESTIMONIALS[activeTestimonial].name}
                </h4>
                <p className="text-[11px] text-zinc-500 font-medium mt-0.5">
                  {TESTIMONIALS[activeTestimonial].role[language]}
                </p>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center space-x-2 pt-4">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx ? "bg-brand-primary w-6" : "bg-zinc-700 hover:bg-zinc-600"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. BLOG PREVIEW */}
      <section className="py-24 bg-dark-bg border-b border-brand-border" id="blog-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            <div className="space-y-4 text-center md:text-left max-w-2xl">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
                {t("home.insights")}
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight">
                {t("home.readOurBlog")}
              </h2>
              <p className="text-zinc-400 text-sm md:text-base">
                {t("blog.subtitle")}
              </p>
            </div>
            <Link to="/blog" className="shrink-0">
              <button className="bg-transparent hover:bg-brand-primary-muted/20 border border-brand-primary/30 hover:border-brand-primary text-white font-bold px-5 py-3 rounded-xl text-sm transition-all flex items-center space-x-2">
                <span>{t("nav.blog")}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.slice(0, 2).map((post) => (
              <div
                key={post.slug}
                id={`blog-post-${post.slug}`}
                className="bg-dark-surface border border-brand-border hover:border-brand-primary rounded-2xl overflow-hidden group flex flex-col md:flex-row transition-all h-full"
              >
                {/* Thumbnail */}
                <div className="h-56 md:h-auto md:w-2/5 overflow-hidden shrink-0 relative">
                  <img
                    src={post.image}
                    alt={post.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 z-10 bg-brand-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <p className="text-[10px] text-zinc-500 font-semibold tracking-wider">
                      {post.date} | {t("blog.author")} {post.author}
                    </p>
                    <h3 className="font-display text-xl text-white group-hover:text-brand-primary transition-colors uppercase tracking-wide line-clamp-2">
                      {post.title[language]}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt[language]}
                    </p>
                  </div>

                  <Link to={`/blog/${post.slug}`} className="block pt-4">
                    <span className="text-brand-primary hover:text-brand-primary-hover text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors">
                      <span>{t("blog.readMore")}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BIG BANNER SECTION */}
      <section className="py-24 relative overflow-hidden bg-dark-surface border-b border-brand-border" id="cta-banner">
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-15 mix-blend-screen hidden lg:block pointer-events-none">
          <img
            src="https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/muay%20thai.jpg"
            alt="Muay thai kicker training session"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center lg:text-left space-y-6 max-w-3xl lg:mr-auto">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {t("home.startToday")}
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            {t("home.ctaDesc")}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link to="/trial" className="w-full sm:w-auto">
              <button className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center space-x-2 cursor-pointer">
                <Swords className="w-5 h-5" />
                <span>{t("home.claimPass")}</span>
              </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full bg-transparent hover:bg-zinc-800 text-white border border-brand-border font-bold px-8 py-4 rounded-xl text-base transition-all cursor-pointer">
                {t("nav.contact")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
