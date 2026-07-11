import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { COACHES } from "../data";
import { motion } from "motion/react";
import { Award, Shield, Users, Trophy, ChevronRight, Swords } from "lucide-react";

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  const coreValues = [
    {
      icon: <Shield className="w-8 h-8 text-brand-primary" />,
      title: language === "id" ? "Disiplin Tinggi" : "High Discipline",
      desc: language === "id"
        ? "Kami melatih kedisplinan mental dan fisik secara konsisten agar setiap member tumbuh menjadi pribadi yang berdaya tahan."
        : "We train mental and physical discipline consistently so every member grows into a highly resilient individual."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-primary" />,
      title: language === "id" ? "Komunitas Koloni" : "The Colony Community",
      desc: language === "id"
        ? "Bekerja sama layaknya koloni semut, saling mendukung tanpa rasa intimidasi dari pemula hingga atlet pro."
        : "Working together like an ant colony, supporting each other without intimidation from beginners to pro athletes."
    },
    {
      icon: <Trophy className="w-8 h-8 text-brand-primary" />,
      title: language === "id" ? "Mentalitas Juara" : "Championship Mindset",
      desc: language === "id"
        ? "Mendorong setiap member melampaui batasan diri mereka untuk meraih potensi terbaik di dalam dan di luar matras."
        : "Pushing every member to transcend their personal boundaries, unlocking supreme potential on and off the mats."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg" id="about-page">
      {/* 1. HEADER HERO */}
      <section className="relative py-20 border-b border-brand-border overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg z-10" />
        <img
          src="https://picsum.photos/seed/about-bg/1200/800"
          alt="Martial arts training background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
          referrerPolicy="no-referrer"
        />

        <div className="relative max-w-4xl mx-auto px-4 text-center z-20 space-y-4">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {t("nav.about")}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight">
            {t("about.behindColony")}
          </h1>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {language === "id"
              ? "Kisah pembentukan akademi beladiri premium pertama di Sidoarjo yang berfokus melatih teknik murni dengan standar nasional."
              : "The origin story of Sidoarjo's premier martial arts academy, focusing on pure technical training with national-grade standards."}
          </p>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Left Image */}
          <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent z-10" />
            <img
              src="https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/logo.png?updatedAt=1783745244228"
              alt="Martial Arts group training at Black Ant Academy"
              className="w-full h-auto object-cover aspect-4/3 group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Story Right Text */}
          <div className="space-y-6">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {t("about.ourJourney")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight">
              {t("about.headline")}
            </h2>
            <div className="w-16 h-1 bg-brand-primary" />
            
            <div className="text-zinc-400 text-sm md:text-base space-y-4 leading-relaxed font-sans">
              <p>
                {language === "id"
                  ? "Didirikan di Sidoarjo oleh Coach Gunawan Sutrisno Putra bersama Coach Umi Khilmi, Black Ant Academy lahir dengan sebuah visi yang mendalam. Semut Hitam (Black Ant) melambangkan disiplin yang ketat, kekuatan kolektif yang mampu mengangkat beban berkali-kali lipat berat badannya, dan semangat kekeluargaan yang erat (koloni)."
                  : "Founded in Sidoarjo by Coach Gunawan Sutrisno Putra and Coach Umi Khilmi, Black Ant Academy was born with a profound vision. The Black Ant represents rigid discipline, collective strength capable of lifting loads many times its body weight, and tight family-like values (the colony)."}
              </p>
              <p>
                {language === "id"
                  ? "Banyak orang menganggap olahraga beladiri seperti MMA dan Muay Thai terlalu keras atau mengintimidasi untuk pemula. Kami di sini untuk mengubah paradigma tersebut. Di Black Ant, teknik diajarkan secara aman, logis, terstruktur, dan ramah pemula, namun tetap presisi dengan standar atlet kompetisi."
                  : "Many believe that combat sports like MMA and Muay Thai are too brutal or intimidating for beginners. We are here to change that paradigm. At Black Ant, techniques are taught safely, logically, structurally, and beginner-friendly, while maintaining the precision of competition athletes."}
              </p>
              <p>
                {language === "id"
                  ? "Kami percaya bahwa kerja keras yang konsisten mengalahkan talenta alami. Melalui bimbingan personal di setiap sesi kelas grup, kami melatih karakter disiplin, daya tahan mental, serta kekuatan fisik member kami."
                  : "We believe that consistent hard work beats raw talent. Through personalized guidance inside every group session, we forge disciplined characters, mental toughness, and physical performance for our members."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-24 bg-dark-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {t("about.ourCreed")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight">
              {t("about.corePhilosophy")}
            </h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-dark-bg border border-brand-border rounded-2xl p-8 space-y-4 text-center hover:border-brand-primary transition-all">
                <div className="w-14 h-14 bg-brand-primary-muted/20 border border-brand-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {val.icon}
                </div>
                <h3 className="font-display text-xl text-white uppercase tracking-wide">
                  {val.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET THE FOUNDERS */}
      <section className="py-24 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
              {t("about.leadership")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight">
              {t("about.meetFounders")}
            </h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {COACHES.slice(0, 2).map((founder) => (
              <div key={founder.slug} className="bg-dark-surface border border-brand-border rounded-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="h-64 md:h-auto md:w-2/5 shrink-0 relative">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                        {founder.role[language]}
                      </span>
                      <h3 className="font-display text-2xl text-white uppercase tracking-wide mt-1">
                        {founder.name}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans">
                      {founder.bio[language]}
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        {t("coaches.certifications")}
                      </p>
                      <ul className="space-y-1">
                        {founder.certifications.slice(0, 3).map((cert, index) => (
                          <li key={index} className="text-xs text-zinc-400 flex items-center">
                            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-border/60 mt-6">
                    <a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-brand-primary text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-colors"
                    >
                      <span>{t("about.followInstagram")}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 relative overflow-hidden bg-brand-primary-muted/10">
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-6">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight">
            {t("about.readyMeet")}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t("about.readyMeetDesc")}
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
