import React, { useState, useEffect, useRef } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  isFallback?: boolean;
}

export const WhatsAppFloat: React.FC = () => {
  const { language } = useLanguage();
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // URL Avatar Tunggal untuk semua tema
  const avatarSrc = "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/avatar3.png";

  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text:
          language === "id"
            ? "Halo! Saya Anty, asisten pintar Black Ant Academy. 🐜 Ada yang bisa saya bantu hari ini mengenai kelas beladiri, jadwal, lokasi, atau membership?"
            : "Hi! I'm Anty, the smart assistant of Black Ant Academy. 🐜 Can I help you with our martial arts classes, schedules, location, or memberships?",
        timestamp: new Date()
      }
    ]);
  }, [language]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: textToSend,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(textToSend, language);
      const botMsg: Message = {
        sender: "bot",
        text: response.text,
        timestamp: new Date(),
        isFallback: response.fallback
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (query: string, lang: "id" | "en") => {
    const q = query.toLowerCase();

    if (
      q.includes("jadwal") ||
      q.includes("jam") ||
      q.includes("hari") ||
      q.includes("schedule") ||
      q.includes("time") ||
      q.includes("kapan")
    ) {
      return {
        text:
          lang === "id"
            ? "Jadwal harian kami terbagi dalam tiga slot utama:\n• Pagi (09:00 - 10.30): Boxing / Muay Thai / Kickboxing\n• Sore (16:00 - 17:30): Muay Thai / Boxing / Kickboxing\n• Malam (19:00 - 21:00): BJJ, MMA, Muay Thai, Boxing\n\nUntuk rincian lengkap tiap hari, silakan buka halaman 'Jadwal' kami!"
            : "Our daily schedule is divided into three key blocks:\n• Morning (09:00 - 10:30): Boxing / Muay Thai / Kickboxing\n• Afternoon (16:00 - 17:30): Muay Thai / Boxing / Kickboxing\n• Evening (19:00 - 21:00): BJJ, MMA, Muay Thai, Boxing\n\nFor a full weekly breakdown, click 'Schedule' in the menu!",
        fallback: false
      };
    }

    if (
      q.includes("harga") ||
      q.includes("biaya") ||
      q.includes("membership") ||
      q.includes("bayar") ||
      q.includes("price") ||
      q.includes("cost") ||
      q.includes("pricing") ||
      q.includes("paket") ||
      q.includes("daftar")
    ) {
      return {
        text:
          lang === "id"
            ? "Pilihan paket membership transparan kami:\n• 1 Bulan Unlimited: Rp 350.000\n• 3 Bulan Unlimited: Rp 950.000\n• 6 Bulan Unlimited: Rp 1.800.000\n• Pelajar/Mahasiswa: Rp 300.000/bulan\n\nAda juga Paket Trial Kelas Gratis selama 3 hari!"
            : "Here are our transparent membership pricing options:\n• 1 Month Unlimited: IDR 350,000\n• 3 Months Unlimited: IDR 950,000\n• 6 Months Unlimited: IDR 1,800,000\n• Student Pass: IDR 300,000/month\n\nWe also offer a 3-Day Free Trial pass!",
        fallback: false
      };
    }

    if (
      q.includes("lokasi") ||
      q.includes("alamat") ||
      q.includes("maps") ||
      q.includes("dimana") ||
      q.includes("location") ||
      q.includes("address") ||
      q.includes("suko") ||
      q.includes("sidoarjo")
    ) {
      return {
        text:
          lang === "id"
            ? "Alamat kami di:\n📍 Jl. Raya Suko No. 56C, Sidoarjo (Samping Pasar Suko / dekat pintu keluar tol Sidoarjo).\n\nAnda dapat membuka rute penunjuk arah langsung melalui link Google Maps di halaman Kontak!"
            : "Our gym address is:\n📍 Jl. Raya Suko No. 56C, Sidoarjo (Beside Suko Market / near Sidoarjo toll gate).\n\nYou can pull up interactive driving routes via Google Maps on our Contact page!",
        fallback: false
      };
    }

    if (
      q.includes("trial") ||
      q.includes("coba") ||
      q.includes("gratis") ||
      q.includes("free") ||
      q.includes("uji coba")
    ) {
      return {
        text:
          lang === "id"
            ? "Pendaftaran uji coba gratis sangat cepat! Silakan buka halaman 'Free Trial' di menu navigasi atas, isi formulir nama & WhatsApp Anda, dan sistem akan mengonfirmasi sesi gratis 3 hari Anda!"
            : "Signing up for a free trial is fast! Head over to the 'Free Trial' section in the navbar, submit your details, and we'll confirm your 3-day pass!",
        fallback: false
      };
    }

    if (
      q.includes("pelatih") ||
      q.includes("coach") ||
      q.includes("trainer") ||
      q.includes("gunawan") ||
      q.includes("randy") ||
      q.includes("bagus")
    ) {
      return {
        text:
          lang === "id"
            ? "Kami dibimbing oleh pelatih berlisensi nasional:\n• Coach Gunawan Sutrisno (Head Coach / Mantan Atlet Sanda Jatim)\n• Coach Umi Khilmi (Functional Strength & Kids Specialist)\n• Coach Randy (Muay Thai Specialist)\n• Coach Bagus (BJJ & Grappling Specialist)"
            : "We are guided by national-certified martial experts:\n• Coach Gunawan Sutrisno (Head Coach / Former East Java Sanda Athlete)\n• Coach Umi Khilmi (Functional & Kids Specialist)\n• Coach Randy (Muay Thai Specialist)\n• Coach Bagus (BJJ & Grappling Specialist)",
        fallback: false
      };
    }

    if (
      q.includes("program") ||
      q.includes("kelas") ||
      q.includes("beladiri") ||
      q.includes("boxing") ||
      q.includes("muay") ||
      q.includes("mma") ||
      q.includes("bjj") ||
      q.includes("sanda")
    ) {
      return {
        text:
          lang === "id"
            ? "Kami menyediakan kelas beladiri berlisensi berikut:\n1. Muay Thai (Seni Delapan Tungkai)\n2. Boxing & Kickboxing Drills\n3. Mixed Martial Arts (MMA)\n4. Brazilian Jiu-Jitsu (BJJ Grappling)\n5. Wushu Sanda (Striking & Bantingan)\n6. Functional Training (Kondisi & Core)"
            : "We provide these high-quality combat programs:\n1. Muay Thai (The Art of Eight Limbs)\n2. Boxing & Kickboxing Drills\n3. Mixed Martial Arts (MMA)\n4. Brazilian Jiu-Jitsu (BJJ Grappling)\n5. Wushu Sanda (Striking & Takedowns)\n6. Functional Training (Conditioning & Core)",
        fallback: false
      };
    }

    return {
      text:
        lang === "id"
          ? "Maaf, saya tidak tahu jawaban mengenai hal tersebut. Cakupan informasi saya terbatas pada detail dasar akademi."
          : "I'm sorry, I do not know the answer to that question. My knowledge is limited to basic academy information.",
      fallback: true
    };
  };

  const quickActions = [
    {
      id: "action_schedule",
      label: language === "id" ? "Jadwal Kelas" : "Class Schedule",
      text: language === "id" ? "Kapan jadwal kelas latihan?" : "What is the training schedule?"
    },
    {
      id: "action_pricing",
      label: language === "id" ? "Biaya Membership" : "Membership Fee",
      text: language === "id" ? "Berapa biaya membership?" : "How much is the membership fee?"
    },
    {
      id: "action_trial",
      label: language === "id" ? "Trial Gratis" : "Free Trial",
      text: language === "id" ? "Bagaimana cara mendaftar trial gratis?" : "How do I sign up for a free trial?"
    },
    {
      id: "action_location",
      label: language === "id" ? "Alamat & Lokasi" : "Address & Location",
      text: language === "id" ? "Dimana alamat lokasinya?" : "Where is the gym located?"
    }
  ];

  const defaultWhatsAppUrl =
    "https://wa.me/6285745186832?text=Halo%20Admin%20Black%20Ant%20Academy!%20Saya%20ingin%20bertanya%20mengenai%20kelas%20dan%20pendaftaran%20beladiri.";

  return (
    <>
      {/* 1. FLOATING CHAT AVATAR BUTTON */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasNewMessage(false);
        }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 cursor-pointer group"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        id="chatbot-floating-button"
      >
        {/* Unread message glowing ring notification */}
        {hasNewMessage && (
          <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-brand-gold items-center justify-center text-[9px] font-black text-black">
              1
            </span>
          </span>
        )}

        {/* Floating Avatar Container dengan BG Putih & Red Aura */}
        <div className="w-14 h-14 rounded-full overflow-hidden bg-white ring-2 ring-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center justify-center">
          <img
            src={avatarSrc}
            alt="Anty Avatar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tooltip sejajar vertikal di tengah */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-900 border border-brand-border text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          {language === "id" ? "Tanya Anty (Bot Chat)" : "Ask Anty (Chat Bot)"}
        </span>
      </motion.button>

      {/* 2. CHAT WINDOW PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[340px] md:w-[380px] h-[380px] sm:h-[450px] md:h-[500px] rounded-2xl bg-dark-surface border border-brand-border shadow-2xl flex flex-col overflow-hidden"
            id="chatbot-window"
          >
            {/* Chat Header */}
            <div className="bg-dark-bg border-b border-brand-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-white ring-2 ring-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)] shrink-0 flex items-center justify-center">
                  <img
                    src={avatarSrc}
                    alt="Anty Avatar"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-display text-sm tracking-wider text-white uppercase">
                    ANTY BOT
                  </h3>
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-wider">
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-zinc-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-dark-bg/20">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-wrap shadow-sm ${
                      msg.sender === "user"
                        ? "bg-brand-primary text-white rounded-tr-none"
                        : "bg-dark-surface-elevated border border-brand-border text-zinc-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}

                    {msg.sender === "bot" && msg.isFallback && (
                      <div className="mt-3">
                        <a
                          href={defaultWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-3 py-2 rounded-xl text-[10px] tracking-wider uppercase transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{language === "id" ? "Hubungi WA Admin" : "Chat WA Admin"}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-dark-surface-elevated border border-brand-border text-zinc-400 rounded-2xl rounded-tl-none px-4 py-3 text-xs flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Reply Chips */}
            <div className="p-3 bg-dark-bg/40 border-t border-brand-border flex gap-1.5 overflow-x-auto select-none no-scrollbar">
              {quickActions.map((act) => (
                <button
                  key={act.id}
                  onClick={() => handleSendMessage(act.text)}
                  className="shrink-0 bg-dark-surface hover:bg-brand-primary-muted border border-brand-border hover:border-brand-primary/50 text-[10px] font-bold text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-full transition-all cursor-pointer"
                >
                  {act.label}
                </button>
              ))}
            </div>

            {/* Chat Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 bg-dark-surface border-t border-brand-border flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  language === "id" ? "Ketik pertanyaan Anda..." : "Type your question..."
                }
                className="flex-grow bg-dark-bg border border-brand-border text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-primary placeholder:text-zinc-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 bg-brand-primary disabled:bg-zinc-800 text-white rounded-xl transition-all disabled:opacity-50 cursor-pointer"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};