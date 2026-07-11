import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { Instagram, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryImage {
  id: number;
  url: string;
  category: "training" | "event" | "facility";
  title: { id: string; en: string };
}

export const Gallery: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "training" | "event" | "facility">("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      url: "https://picsum.photos/seed/muaythai1/800/600",
      category: "training",
      title: { id: "Latihan Muay Thai Pemula", en: "Beginner Muay Thai Drills" }
    },
    {
      id: 2,
      url: "https://picsum.photos/seed/padwork/800/600",
      category: "training",
      title: { id: "Pad Work & Striking Muay Thai", en: "Pad Work & Muay Thai Striking" }
    },
    {
      id: 3,
      url: "https://picsum.photos/seed/sparring/800/600",
      category: "event",
      title: { id: "Sparring MMA Rutin Mingguan", en: "Weekly MMA Sparring Sessions" }
    },
    {
      id: 4,
      url: "https://picsum.photos/seed/mats/800/600",
      category: "facility",
      title: { id: "Fasilitas Matras Utama", en: "Main Mat Facilities" }
    },
    {
      id: 5,
      url: "https://picsum.photos/seed/sanda/800/600",
      category: "event",
      title: { id: "Latihan Kompetisi Sanda", en: "Sanda Competition Workouts" }
    },
    {
      id: 6,
      url: "https://picsum.photos/seed/kettlebells/800/600",
      category: "facility",
      title: { id: "Area Functional & Kettlebells", en: "Functional & Kettlebells Area" }
    }
  ];

  const filteredImages = filter === "all"
    ? images
    : images.filter((img) => img.category === filter);

  const categories = [
    { value: "all", label: t("gallery.filter.all") },
    { value: "training", label: t("gallery.filter.training") },
    { value: "event", label: t("gallery.filter.event") },
    { value: "facility", label: t("gallery.filter.facility") }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg" id="gallery-page">
      {/* 1. HEADER HERO */}
      <section className="relative py-20 border-b border-brand-border overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg z-10" />
        <div className="relative max-w-4xl mx-auto px-4 z-20 space-y-4">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {t("nav.gallery")}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight">
            COLONY IN MOTION
          </h1>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t("gallery.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. FILTER STRIP */}
      <section className="py-6 bg-dark-surface border-b border-brand-border sticky top-[72px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  filter === cat.value
                    ? "bg-brand-primary border-brand-primary text-white"
                    : "bg-dark-bg text-zinc-400 border-brand-border hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <a
            href="https://www.instagram.com/blackant.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-brand-primary hover:text-brand-primary-hover uppercase tracking-wider flex items-center space-x-2 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>@blackant.academy</span>
          </a>
        </div>
      </section>

      {/* 3. GALLERY GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                className="group relative rounded-xl overflow-hidden border border-brand-border aspect-4/3 cursor-pointer bg-dark-surface"
                onClick={() => setLightboxImage(image)}
                id={`gallery-item-${image.id}`}
              >
                <img
                  src={image.url}
                  alt={image.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg text-white uppercase tracking-wide">
                    {image.title[language]}
                  </h3>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mt-1">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIGHTBOX DIALOG */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title[language]}
                className="max-w-full max-h-[70vh] rounded-xl object-contain border border-zinc-800"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-4 space-y-1">
                <h3 className="font-display text-xl text-white uppercase tracking-wide">
                  {lightboxImage.title[language]}
                </h3>
                <span className="text-xs text-brand-primary uppercase font-bold tracking-widest">
                  {lightboxImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
