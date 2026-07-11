import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, Language } from "../LanguageContext";
import { useTheme } from "../ThemeContext";
import { Menu, X, Globe, Swords, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.programs"), path: "/programs" },
    { name: t("nav.schedule"), path: "/schedule" },
    { name: t("nav.membership"), path: "/membership" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.blog"), path: "/blog" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-bg/90 backdrop-blur-md border-b border-brand-border py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group" id="nav-logo">
              <div className="relative w-10 h-10 bg-brand-primary-muted rounded-lg flex items-center justify-center border border-brand-primary/30 group-hover:border-brand-primary transition-all">
                <img
                  src="https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/logo.png"
                  alt="Black Ant Academy Logo"
                  className="w-8 h-8 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-wider text-white uppercase leading-none">
                  Black Ant
                </span>
                <span className="font-sans text-[10px] text-brand-primary font-bold tracking-widest uppercase leading-none mt-1">
                  Academy MMA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  id={`nav-link-${item.path.replace("/", "") || "home"}`}
                  className={`px-3 py-2 text-sm font-semibold transition-all rounded-md hover:text-white ${
                    isActive(item.path)
                      ? "text-brand-primary bg-brand-primary-muted/10 border-b border-brand-primary/30"
                      : "text-zinc-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Language Toggle + CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                className="p-2 bg-dark-surface border border-brand-border rounded-lg text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-500" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-500" />
                )}
              </button>

              {/* Language Switcher */}
              <div className="flex items-center space-x-1 bg-dark-surface border border-brand-border rounded-lg p-1">
                <button
                  onClick={() => setLanguage("id")}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    language === "id"
                      ? "bg-brand-primary text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    language === "en"
                      ? "bg-brand-primary text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Free Trial Button */}
              <Link to="/trial" id="nav-cta-trial">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md shadow-brand-primary/20 flex items-center space-x-2"
                >
                  <Swords className="w-4 h-4" />
                  <span>{t("nav.trial")}</span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center lg:hidden space-x-3">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-1.5 bg-dark-surface border border-brand-border rounded-lg text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                )}
              </button>

              {/* Language switcher for mobile navbar */}
              <div className="flex items-center space-x-1 bg-dark-surface border border-brand-border rounded-lg p-0.5">
                <button
                  onClick={() => setLanguage("id")}
                  className={`px-1.5 py-0.5 text-[10px] font-bold rounded-md cursor-pointer ${
                    language === "id" ? "bg-brand-primary text-white" : "text-zinc-400"
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-1.5 py-0.5 text-[10px] font-bold rounded-md cursor-pointer ${
                    language === "en" ? "bg-brand-primary text-white" : "text-zinc-400"
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-400 hover:text-white p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] bg-dark-bg/95 backdrop-blur-md z-40 lg:hidden overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col h-[calc(100vh-60px)] justify-between pb-16">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-3 text-lg font-bold border-b border-zinc-800/50 ${
                      isActive(item.path) ? "text-brand-primary" : "text-zinc-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-4">
                <Link to="/trial" className="block w-full">
                  <button className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-3 rounded-lg text-base shadow-md flex items-center justify-center space-x-2">
                    <Swords className="w-5 h-5" />
                    <span>{t("nav.trial")}</span>
                  </button>
                </Link>
                <div className="text-center text-xs text-zinc-500">
                  Jl. Raya Suko No. 56C, Sidoarjo
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
