import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { Instagram, MapPin, Clock, Phone, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface border-t border-brand-border text-zinc-400 py-16" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 bg-brand-primary-muted rounded-lg flex items-center justify-center border border-brand-primary/30">
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
            <p className="text-sm leading-relaxed text-zinc-400 mt-4">
              {t("hero.subtitle")}
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.instagram.com/blackant.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-800 text-white keep-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-zinc-700 hover:border-brand-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white keep-white" />
              </a>
              <a
                href="https://maps.app.goo.gl/9MiA59iBozjbnDHXA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-800 text-white keep-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all border border-zinc-700 hover:border-brand-primary"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5 text-white keep-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-brand-primary pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-primary transition-all">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-primary transition-all">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-brand-primary transition-all">
                  {t("nav.programs")}
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-brand-primary transition-all">
                  {t("nav.schedule")}
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-brand-primary transition-all">
                  {t("nav.membership")}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-primary transition-all">
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-primary transition-all">
                  {t("nav.blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-brand-primary pl-3">
              {t("nav.programs")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/programs/muay-thai" className="hover:text-brand-primary transition-all">
                  Muay Thai
                </Link>
              </li>
              <li>
                <Link to="/programs/boxing-kickboxing" className="hover:text-brand-primary transition-all">
                  Boxing & Kickboxing
                </Link>
              </li>
              <li>
                <Link to="/programs/mma" className="hover:text-brand-primary transition-all">
                  Mixed Martial Arts (MMA)
                </Link>
              </li>
              <li>
                <Link to="/programs/bjj-grappling" className="hover:text-brand-primary transition-all">
                  BJJ & Submission Grappling
                </Link>
              </li>
              <li>
                <Link to="/programs/wushu-sanda" className="hover:text-brand-primary transition-all">
                  Wushu Sanda
                </Link>
              </li>
              <li>
                <Link to="/programs/functional-training" className="hover:text-brand-primary transition-all">
                  Functional Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts & Location */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-white uppercase tracking-wider border-l-2 border-brand-primary pl-3">
              Gym Location
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span>
                  Jl. Raya Suko No. 56C, Ngemplak, Cemeng Kalang, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61224
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <a href="https://wa.me/6285745186832" className="hover:text-brand-primary transition-all">
                  +62 857-4518-6832
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-primary shrink-0" />
                <span>{t("contact.hoursDetail")}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="hover:text-brand-primary transition-all">
                  info@blackantacademy.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-border/60 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>
            &copy; {currentYear} Black Ant Academy Sidoarjo. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-zinc-500 hover:text-zinc-400">
              Sidoarjo's Premier MMA Academy
            </span>
            <span className="text-zinc-500 hover:text-zinc-400">
              National Licensed Coaches
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
