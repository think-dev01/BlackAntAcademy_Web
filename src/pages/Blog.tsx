import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { BLOG_POSTS } from "../data";
import { BookOpen, Calendar, User, ChevronRight } from "lucide-react";

export const Blog: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-dark-bg" id="blog-page">
      {/* 1. HEADER HERO */}
      <section className="relative py-20 border-b border-brand-border overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg z-10" />
        <div className="relative max-w-4xl mx-auto px-4 z-20 space-y-4">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {t("nav.blog")}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight">
            THE COLONY ARCHIVES
          </h1>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. ARTICLE LIST */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.slug}
                id={`blog-card-${post.slug}`}
                className="bg-dark-surface border border-brand-border hover:border-brand-primary rounded-2xl overflow-hidden group flex flex-col md:flex-row transition-all duration-300 h-full shadow-lg"
              >
                {/* Image block */}
                <div className="h-56 md:h-auto md:w-2/5 overflow-hidden shrink-0 relative">
                  <img
                    src={post.image}
                    alt={post.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 z-10 bg-brand-primary text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>

                {/* Text Block */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 text-brand-primary mr-1" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <User className="w-3 h-3 text-brand-primary mr-1" />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="font-display text-xl md:text-2xl text-white group-hover:text-brand-primary transition-colors uppercase tracking-wide leading-tight">
                      {post.title[language]}
                    </h2>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans line-clamp-3">
                      {post.excerpt[language]}
                    </p>
                  </div>

                  <Link to={`/blog/${post.slug}`} className="block pt-6 border-t border-brand-border/40 mt-4">
                    <span className="text-brand-primary hover:text-brand-primary-hover text-xs font-bold uppercase tracking-widest flex items-center space-x-2 transition-colors">
                      <span>{t("blog.readMore")}</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
