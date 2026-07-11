import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { BLOG_POSTS } from "../data";
import { ChevronLeft, Calendar, User, ArrowRight, Share2, Facebook, Twitter } from "lucide-react";
import { motion } from "motion/react";

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 min-h-screen bg-dark-bg flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-display text-3xl text-white uppercase">Article Not Found</h2>
        <p className="text-zinc-500 text-sm mt-2 max-w-sm">
          The blog article you are looking for does not exist or has been removed.
        </p>
        <Link to="/blog" className="mt-6">
          <button className="bg-brand-primary text-white font-bold px-6 py-2.5 rounded-lg text-sm flex items-center space-x-2">
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </button>
        </Link>
      </div>
    );
  }

  // Find related articles (excluding current)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Copy article link action
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(language === "id" ? "Link artikel berhasil disalin!" : "Article link copied to clipboard!");
  };

  return (
    <div className="pt-24 min-h-screen bg-dark-bg" id="blog-detail-page">
      {/* 1. BACK CONTROLS */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link to="/blog" className="inline-flex items-center text-xs font-bold text-zinc-500 hover:text-brand-primary uppercase tracking-wider transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1.5" />
          <span>{t("nav.blog")}</span>
        </Link>
      </div>

      {/* 2. MAIN READING SECTION */}
      <article className="py-8 max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          {/* Cover image */}
          <div className="rounded-2xl overflow-hidden border border-brand-border h-[400px]">
            <img
              src={post.image}
              alt={post.title[language]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Headline Meta info */}
          <div className="space-y-3 pt-4">
            <span className="text-xs bg-brand-primary/25 border border-brand-primary/30 text-brand-primary font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight pt-2">
              {post.title[language]}
            </h1>
            <div className="flex flex-wrap items-center space-x-4 pt-2 text-xs text-zinc-500 font-semibold border-b border-brand-border pb-4">
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 text-brand-primary mr-1.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <User className="w-3.5 h-3.5 text-brand-primary mr-1.5" />
                {post.author}
              </span>
            </div>
          </div>

          {/* Formatted body paragraph blocks */}
          <div className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans space-y-6 whitespace-pre-line pt-4">
            {post.content[language]}
          </div>

          {/* Share widgets */}
          <div className="border-t border-b border-brand-border/60 py-6 my-12 flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              Share this article
            </span>
            <div className="flex items-center space-x-3">
              <button
                onClick={copyLink}
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-brand-border text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                title="Copy Link"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* 3. RELATED BLOG POSTS */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-dark-surface border-t border-brand-border">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            <h3 className="font-display text-2xl text-white uppercase tracking-wide">
              {t("blog.related")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <div
                  key={related.slug}
                  className="bg-dark-bg border border-brand-border hover:border-brand-primary rounded-xl overflow-hidden group transition-all"
                >
                  <img
                    src={related.image}
                    alt={related.title[language]}
                    className="h-44 w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold">
                      {related.date} | {related.category}
                    </span>
                    <h4 className="font-display text-lg text-white group-hover:text-brand-primary transition-colors uppercase tracking-wide line-clamp-2">
                      {related.title[language]}
                    </h4>
                    <Link
                      to={`/blog/${related.slug}`}
                      className="text-brand-primary hover:text-brand-primary-hover text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors pt-2 block"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
