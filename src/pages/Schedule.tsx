import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";
import { Clock, User, Sparkles, MessageSquare, Shield, Info, HelpCircle, ArrowRightLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

interface ClassDetail {
  name: { id: string; en: string };
  coach: string;
  level: { id: string; en: string };
  desc: { id: string; en: string };
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

export const Schedule: React.FC = () => {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const [selectedCell, setSelectedCell] = useState<{
    time: string;
    dayKey: string;
    className: string;
  } | null>(null);

  const days = [
    { key: "senin", label: { id: "Senin", en: "Monday" } },
    { key: "selasa", label: { id: "Selasa", en: "Tuesday" } },
    { key: "rabu", label: { id: "Rabu", en: "Wednesday" } },
    { key: "kamis", label: { id: "Kamis", en: "Thursday" } },
    { key: "jumat", label: { id: "Jum'at", en: "Friday" } },
    { key: "sabtu", label: { id: "Sabtu", en: "Saturday" } },
    { key: "minggu", label: { id: "Minggu", en: "Sunday" } }
  ];

  const timeRows = [
    {
      time: "09.00 - 10.30",
      senin: "BOXING",
      selasa: "MUAYTHAI",
      rabu: "BOXING",
      kamis: "KICKBOXING",
      jumat: "-",
      sabtu: "-",
      minggu: "-"
    },
    {
      time: "16.00 - 17.30",
      senin: "MUAYTHAI",
      selasa: "BOXING",
      rabu: "KICKBOXING",
      kamis: "BOXING",
      jumat: "KICKBOXING",
      sabtu: "MUAYTHAI",
      minggu: "BOXING"
    },
    {
      time: "19.00 - 21.00",
      senin: "BJJMMA",
      selasa: "BJJMUAYTHAI",
      rabu: "BOXING",
      kamis: "BJJMMA",
      jumat: "BJJBOXING",
      sabtu: "KICKBOXING",
      minggu: "KICKBOXING"
    }
  ];

  // Specific metadata details for each class type to display on click
  const classMetadata: Record<string, ClassDetail> = {
    BOXING: {
      name: { id: "BOXING CLASS", en: "BOXING CLASS" },
      coach: "Coach Randy / Coach Gunawan",
      level: { id: "Semua Level (Pemula - Mahir)", en: "All Levels (Beginner - Advanced)" },
      desc: {
        id: "Fokus pada penguasaan teknik dasar pukulan, kelincahan gerak kaki (footwork), pertahanan diri dasar, serta latihan kardio tinju intensitas tinggi.",
        en: "Focus on mastering basic punches, footwork agility, basic defense drills, and high-intensity boxing cardio workouts."
      },
      colorClass: "text-red-500",
      bgClass: "bg-red-500/10 hover:bg-red-500/20",
      borderClass: "border-red-500/30 hover:border-red-500/60"
    },
    MUAYTHAI: {
      name: { id: "MUAY THAI CLASS", en: "MUAY THAI CLASS" },
      coach: "Coach Randy / Coach Gunawan",
      level: { id: "Pemula & Menengah", en: "Beginner & Intermediate" },
      desc: {
        id: "Seni beladiri delapan tungkai memanfaatkan pukulan, siku, lutut, dan tendangan tulang kering untuk pertahanan diri taktis dan pembakaran kalori maksimal.",
        en: "The Art of Eight Limbs using punches, elbows, knees, and shin kicks for strategic self-defense and ultimate calorie burn."
      },
      colorClass: "text-amber-500",
      bgClass: "bg-amber-500/10 hover:bg-amber-500/20",
      borderClass: "border-amber-500/30 hover:border-amber-500/60"
    },
    KICKBOXING: {
      name: { id: "KICKBOXING DRILLS", en: "KICKBOXING DRILLS" },
      coach: "Coach Randy / Coach Umi",
      level: { id: "Semua Tingkatan", en: "All Skill Levels" },
      desc: {
        id: "Kombinasi dinamis antara striking tinju barat dengan tendangan eksplosif Karate dan Muay Thai untuk melatih kelincahan dan daya tahan otot.",
        en: "A dynamic fusion of Western boxing strikes and explosive kicks from Karate and Muay Thai to improve muscle agility and endurance."
      },
      colorClass: "text-orange-500",
      bgClass: "bg-orange-500/10 hover:bg-orange-500/20",
      borderClass: "border-orange-500/30 hover:border-orange-500/60"
    },
    BJJMMA: {
      name: { id: "BJJ & MMA INTEGRATION", en: "BJJ & MMA INTEGRATION" },
      coach: "Coach Bagus / Coach Gunawan",
      level: { id: "Menengah / Atlet", en: "Intermediate / Fighter" },
      desc: {
        id: "Integrasi teknik kuncian sendi Brazilian Jiu-Jitsu (BJJ) dengan takedown gulat dan striking MMA untuk pertarungan bawah (ground fighting) yang realistis.",
        en: "Seamlessly integrate Brazilian Jiu-Jitsu submission locks with wrestling takedowns and MMA ground-and-pound striking for realistic combat."
      },
      colorClass: "text-purple-500",
      bgClass: "bg-purple-500/10 hover:bg-purple-500/20",
      borderClass: "border-purple-500/30 hover:border-purple-500/60"
    },
    BJJMUAYTHAI: {
      name: { id: "BJJ & MUAY THAI COMBO", en: "BJJ & MUAY THAI COMBO" },
      coach: "Coach Bagus & Coach Randy",
      level: { id: "Semua Tingkatan", en: "All Levels" },
      desc: {
        id: "Sesi hibrida mempelajari transisi serangan berdiri khas Muay Thai langsung ke teknik kuncian dan bantingan bawah Brazilian Jiu-Jitsu.",
        en: "A hybrid session teaching transitions from Muay Thai stand-up striking directly into Brazilian Jiu-Jitsu grappling and takedowns."
      },
      colorClass: "text-teal-500",
      bgClass: "bg-teal-500/10 hover:bg-teal-500/20",
      borderClass: "border-teal-500/30 hover:border-teal-500/60"
    },
    BJJBOXING: {
      name: { id: "BJJ & BOXING DRILLS", en: "BJJ & BOXING DRILLS" },
      coach: "Coach Bagus & Coach Randy",
      level: { id: "Semua Level", en: "All Levels" },
      desc: {
        id: "Latihan sinergi memfokuskan pertahanan dan pukulan jarak dekat tinju tradisional dikombinasikan dengan teknik grappling penjatuhan lawan.",
        en: "Synergistic drilling focusing on traditional boxing close-quarters defense and punches combined with grappling takedown concepts."
      },
      colorClass: "text-indigo-500",
      bgClass: "bg-indigo-500/10 hover:bg-indigo-500/20",
      borderClass: "border-indigo-500/30 hover:border-indigo-500/60"
    }
  };

  const handleCellClick = (time: string, dayKey: string, className: string) => {
    if (className === "-") return;
    setSelectedCell({ time, dayKey, className });
  };

  const activeMetadata = selectedCell ? classMetadata[selectedCell.className] : null;

  return (
    <div className="pt-24 min-h-screen bg-dark-bg transition-colors duration-300" id="schedule-page">
      {/* 1. HEADER HERO */}
      <section className="relative py-20 border-b border-brand-border overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg z-10" />
        <div className="relative max-w-4xl mx-auto px-4 z-20 space-y-4">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block">
            {language === "id" ? "Jadwal Mingguan Resmi" : "Official Weekly Timetable"}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight">
            COLONY SCHEDULE
          </h1>
          <div className="w-20 h-1 bg-brand-primary mx-auto" />
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {language === "id"
              ? "Klik pada salah satu nama kelas di dalam tabel untuk melihat detail pelatih, level keahlian, materi latihan, serta pendaftaran gratis."
              : "Click on any class name inside the timetable to view its trainer, skill levels, curriculum details, and free trial registration."}
          </p>
        </div>
      </section>

      {/* 2. MAIN TABLE CONTAINER */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Scroll instruction for mobile screens */}
          <div className="flex lg:hidden items-center justify-center space-x-2 text-xs text-brand-primary font-bold bg-brand-primary-muted/10 border border-brand-primary/25 rounded-lg py-2.5 px-4 mb-4">
            <ArrowRightLeft className="w-4 h-4 animate-bounce" />
            <span>
              {language === "id"
                ? "Geser tabel ke samping untuk melihat seluruh hari"
                : "Swipe table horizontally to view the full week"}
            </span>
          </div>

          <div className="bg-dark-surface border border-brand-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Horizontal Scroll wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="bg-dark-bg/65 border-b border-brand-border">
                    <th className="py-5 px-6 font-display text-sm text-zinc-400 uppercase tracking-wider text-center border-r border-brand-border w-[140px]">
                      {language === "id" ? "JAM / TIME" : "TIME / HOURS"}
                    </th>
                    {days.map((d) => (
                      <th
                        key={d.key}
                        className="py-5 px-4 font-display text-sm text-white uppercase tracking-wider text-center border-r last:border-r-0 border-brand-border"
                      >
                        {d.label[language]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {timeRows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="hover:bg-dark-surface-elevated/40 transition-colors duration-200"
                    >
                      {/* Time Slot column */}
                      <td className="py-6 px-4 font-mono text-xs font-bold text-brand-primary text-center bg-dark-bg/30 border-r border-brand-border select-none">
                        <div className="flex items-center justify-center space-x-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{row.time}</span>
                        </div>
                      </td>

                      {/* Day columns */}
                      {days.map((day) => {
                        const cellVal = row[day.key as keyof typeof row] as string;
                        const isSelected =
                          selectedCell?.time === row.time &&
                          selectedCell?.dayKey === day.key;

                        let contentMarkup;
                        if (cellVal === "-") {
                          contentMarkup = (
                            <span className="text-zinc-600/40 font-bold select-none">-</span>
                          );
                        } else {
                          const meta = classMetadata[cellVal] || {
                            colorClass: "text-white",
                            bgClass: "bg-zinc-800",
                            borderClass: "border-zinc-700"
                          };
                          
                          contentMarkup = (
                            <button
                              onClick={() => handleCellClick(row.time, day.key, cellVal)}
                              className={`w-full py-3.5 px-2 rounded-xl border font-display text-xs md:text-sm tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                                isSelected
                                  ? "bg-brand-primary border-brand-primary text-white scale-102 shadow-lg shadow-brand-primary/25"
                                  : `${meta.bgClass} ${meta.borderClass} ${meta.colorClass}`
                              }`}
                            >
                              {cellVal}
                            </button>
                          );
                        }

                        return (
                          <td
                            key={day.key}
                            className="p-3 text-center border-r last:border-r-0 border-brand-border align-middle"
                          >
                            {contentMarkup}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CLASS DETAILS PANEL */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {selectedCell && activeMetadata ? (
              <motion.div
                key={`${selectedCell.dayKey}-${selectedCell.time}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-dark-surface border border-brand-primary/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Glow asset */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                  <div className="space-y-4 flex-grow">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold bg-brand-primary text-white px-3 py-1 rounded-full uppercase tracking-wider">
                        {days.find((d) => d.key === selectedCell.dayKey)?.label[language]}
                      </span>
                      <span className="text-[10px] font-bold bg-dark-bg border border-brand-border text-zinc-400 px-3 py-1 rounded-full tracking-wider flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-brand-primary" />
                        <span>{selectedCell.time} WIB</span>
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl text-white tracking-wide">
                      {activeMetadata.name[language]}
                    </h2>

                    <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl">
                      {activeMetadata.desc[language]}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="flex items-center space-x-3 bg-dark-bg/50 border border-brand-border rounded-xl p-3">
                        <User className="w-5 h-5 text-brand-primary shrink-0" />
                        <div>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                            {language === "id" ? "Pelatih Utama" : "Head Instructor"}
                          </p>
                          <p className="text-sm text-white font-semibold">{activeMetadata.coach}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 bg-dark-bg/50 border border-brand-border rounded-xl p-3">
                        <Shield className="w-5 h-5 text-brand-gold shrink-0" />
                        <div>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                            {language === "id" ? "Tingkat Keahlian" : "Target Levels"}
                          </p>
                          <p className="text-sm text-white font-semibold">
                            {activeMetadata.level[language]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 min-w-[200px]">
                    <Link to="/trial" className="w-full">
                      <button className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand-primary/10 cursor-pointer">
                        {language === "id" ? "Coba Kelas Ini Gratis" : "Try This Class Free"}
                      </button>
                    </Link>
                    <button
                      onClick={() => setSelectedCell(null)}
                      className="w-full bg-dark-bg/80 border border-brand-border text-zinc-400 hover:text-white py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      {language === "id" ? "Tutup Detail" : "Close Details"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-dark-surface/40 border border-brand-border border-dashed rounded-2xl p-8 text-center text-zinc-500 flex flex-col items-center space-y-2 select-none">
                <HelpCircle className="w-8 h-8 text-zinc-600" />
                <p className="text-sm font-medium">
                  {language === "id"
                    ? "Silakan ketuk salah satu sesi di tabel untuk detail latihan."
                    : "Tap any session in the schedule above to inspect details."}
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. FOOTER NOTE / CTA */}
      <section className="py-16 bg-dark-surface border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <MessageSquare className="w-10 h-10 text-brand-primary mx-auto" />
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {language === "id"
              ? "Apakah Anda ingin mendaftar ke latihan grup pribadi, kelas privat, atau memiliki pertanyaan mendesak terkait jadwal khusus koloni kami? Tim Admin siap siaga menjawab Anda."
              : "Are you interested in booking private group sessions, one-on-one personal coaching, or do you have any scheduling questions? Our WhatsApp admin is ready to help."}
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/6285745186832?text=Halo%20Black%20Ant%20Academy!%20Saya%20ingin%20mengonfirmasi%20jadwal%20latihan%20terbaru%20minggu%20ini."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl text-xs tracking-wider uppercase transition-colors flex items-center space-x-2 mx-auto cursor-pointer">
                <span>Chat Admin WhatsApp</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
