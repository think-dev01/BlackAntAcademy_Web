import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const DICTIONARY: Record<Language, Record<string, string>> = {
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.programs": "Program",
    "nav.coaches": "Pelatih",
    "nav.schedule": "Jadwal",
    "nav.membership": "Membership",
    "nav.gallery": "Galeri",
    "nav.blog": "Blog",
    "nav.trial": "Uji Coba Gratis",
    "nav.contact": "Kontak",

    // Common Actions
    "action.learnMore": "Pelajari Selengkapnya",
    "action.tryFree": "Coba Gratis 3 Hari",
    "action.tryFreeShort": "Coba Gratis",
    "action.registerNow": "Daftar Sekarang",
    "action.viewAll": "Lihat Semua",
    "action.submit": "Kirim Pendaftaran",
    "action.sending": "Mengirim...",
    "action.success": "Berhasil Terkirim!",
    "action.backToHome": "Kembali ke Beranda",
    "action.viewDetails": "Lihat Detail",

    // Hero Section
    "hero.title": "Disiplin Membentuk Petarung Sejati.",
    "hero.subtitle": "Akademi beladiri & kebugaran premium di Sidoarjo. Latihan Muay Thai, MMA, Boxing, BJJ, dan Wushu Sanda dibimbing langsung oleh pelatih berlisensi nasional.",
    "hero.tagline": "KECIL BUKAN BERARTI LEMAH.",

    // Stats Section
    "stats.programs": "Program Pilihan",
    "stats.coaches": "Pelatih Berlisensi",
    "stats.experience": "Tahun Pengalaman",
    "stats.members": "Member Aktif",

    // Problem vs Solution Section
    "problem.title": "Mengapa Banyak Orang Gagal di Gym Biasa?",
    "problem.subtitle": "Kebanyakan tempat latihan terasa dingin, membosankan, atau mengintimidasi pemula. Di Black Ant Academy, kami berbeda.",
    "problem.item1.title": "Latihan Monoton & Tanpa Arahan",
    "problem.item1.desc": "Gym biasa membiarkan Anda berlatih sendiri tanpa target yang jelas.",
    "problem.item2.title": "Suasana Mengintimidasi",
    "problem.item2.desc": "Sulit bagi pemula untuk merasa nyaman di antara orang-orang yang sudah mahir.",
    "problem.item3.title": "Jadwal & Program yang Kaku",
    "problem.item3.desc": "Tidak adanya bimbingan teknik membuat Anda mudah cedera.",
    
    "solution.title": "Solusi di Koloni Black Ant Academy",
    "solution.item1.title": "Bimbingan Setiap Sesi",
    "solution.item1.desc": "Semua kelas dipandu langsung oleh pelatih bersertifikat secara interaktif.",
    "solution.item2.title": "Komunitas Suportif (Koloni)",
    "solution.item2.desc": "Kami berlatih bersama layaknya koloni semut, saling menyemangati dan mendukung.",
    "solution.item3.title": "Aman & Bertahap untuk Pemula",
    "solution.item3.desc": "Teknik diajarkan dari nol, mengutamakan keselamatan dan efektivitas gerak.",

    // Program Overview
    "programs.title": "PROGRAM KAMI",
    "programs.subtitle": "Pilih disiplin yang sesuai dengan target fisik, mental, dan pertahanan diri Anda.",
    "programs.category.striking": "Striking (Serangan)",
    "programs.category.grappling": "Grappling (Kuncian)",
    "programs.category.fitness": "Fitness & Conditioning",
    "programs.levels": "Level Tersedia",
    "programs.viewProgram": "Eksplorasi Kelas",

    // Coaches Overview
    "coaches.title": "TIM PELATIH KAMI",
    "coaches.subtitle": "Berlatihlah langsung di bawah bimbingan praktisi beladiri berlisensi nasional dan berpengalaman.",
    "coaches.experience": "Tahun Pengalaman",
    "coaches.certifications": "Sertifikasi & Prestasi",
    "coaches.viewProfile": "Lihat Profil Lengkap",

    // Schedule Overview
    "schedule.title": "JADWAL KELAS MINGGUAN",
    "schedule.subtitle": "Sesuaikan waktu latihan Anda dengan jadwal kelas grup harian kami.",
    "schedule.filterProgram": "Filter Program",
    "schedule.filterDay": "Filter Hari",
    "schedule.all": "Semua",
    "schedule.notAvailable": "Tidak ada kelas pada kombinasi filter ini.",
    "schedule.waConfirm": "Jadwal berubah? Konfirmasikan jadwal terbaru langsung via WhatsApp",

    // Days translation
    "day.senin": "Senin",
    "day.selasa": "Selasa",
    "day.rabu": "Rabu",
    "day.kamis": "Kamis",
    "day.jumat": "Jumat",
    "day.sabtu": "Sabtu",
    "day.minggu": "Minggu",

    // Membership & Pricing
    "membership.title": "PAKET MEMBERSHIP",
    "membership.subtitle": "Investasi kesehatan dan kemampuan beladiri Anda dengan pilihan paket transparan.",
    "membership.popular": "Paling Populer",
    "membership.includes": "Sudah termasuk:",
    "membership.faq": "Pertanyaan yang Sering Diajukan",
    "membership.faqSubtitle": "Temukan jawaban cepat seputar membership, pembayaran, dan kebijakan latihan di akademi kami.",

    // Gallery
    "gallery.title": "DOKUMENTASI KOLONI",
    "gallery.subtitle": "Lihat keseruan latihan harian, sesi sparring, kelas anak-anak, dan suasana di Black Ant Academy.",
    "gallery.followIg": "Ikuti kami di Instagram @blackant.academy untuk update harian",
    "gallery.filter.all": "Semua Foto",
    "gallery.filter.training": "Latihan",
    "gallery.filter.event": "Event & Sparring",
    "gallery.filter.facility": "Fasilitas",

    // Blog
    "blog.title": "ARTIKEL & INSIGHT",
    "blog.subtitle": "Edukasi, tips kebugaran, dan informasi terkini langsung dari tim pelatih Black Ant Academy.",
    "blog.published": "Dipublikasikan pada",
    "blog.author": "Oleh",
    "blog.readMore": "Baca Selengkapnya",
    "blog.related": "Artikel Terkait",

    // Trial Form & Conversion
    "trial.title": "DAFTAR TRIAL CLASS GRATIS",
    "trial.subtitle": "Nikmati akses kelas percobaan gratis selama 3 hari. Isi formulir di bawah ini dan admin kami akan segera mengonfirmasi jadwal Anda melalui WhatsApp.",
    "trial.form.name": "Nama Lengkap",
    "trial.form.phone": "Nomor WhatsApp (Aktif)",
    "trial.form.program": "Program yang Diminati",
    "trial.form.schedule": "Preferensi Hari & Jam Latihan",
    "trial.form.notes": "Catatan Tambahan / Kondisi Fisik (Opsional)",
    "trial.form.placeholder.name": "Masukkan nama lengkap Anda",
    "trial.form.placeholder.phone": "Contoh: 081234567890",
    "trial.form.placeholder.program": "Pilih program latihan",
    "trial.form.placeholder.schedule": "Contoh: Senin Jam 18:00",
    "trial.form.placeholder.notes": "Beritahu kami jika Anda memiliki cedera lama atau kondisi medis tertentu",
    "trial.trust": "Mengapa Berlatih Bersama Kami?",
    "trial.trust1": "Pelatih Berlisensi & Sabuk Hitam Nasional",
    "trial.trust2": "Komunitas Ramah & Bebas Intimidasi",
    "trial.trust3": "Fasilitas Matras & Sanitasi Berkualitas Tinggi",
    "trial.successMsg": "Pendaftaran berhasil! Klik tombol di bawah ini untuk mengirim data langsung ke WhatsApp Admin kami.",
    "trial.successBtn": "Kirim ke WhatsApp Admin",

    // Contact
    "contact.title": "HUBUNGI KAMI",
    "contact.subtitle": "Ada pertanyaan atau ingin berkunjung langsung? Tim kami siap menyambut Anda hangat di akademi.",
    "contact.info": "Informasi Kontak",
    "contact.address": "Alamat",
    "contact.hours": "Jam Operasional",
    "contact.hoursDetail": "Senin - Sabtu: 08:00 - 21:00 | Minggu: Libur / Sesi Khusus",
    "contact.sendMessage": "Kirim Pesan Cepat",
    "contact.form.message": "Isi Pesan",
    "contact.form.placeholder.message": "Tuliskan pertanyaan atau pesan Anda di sini",
    "contact.googleMaps": "Buka di Google Maps",

    // Additional home & global translations
    "home.disciplines": "Disiplin",
    "home.investment": "Investasi",
    "home.successStories": "Kisah Sukses",
    "home.whatColonySays": "APA KATA KOLONI",
    "home.insights": "Wawasan & Tips",
    "home.readOurBlog": "BACA BLOG KAMI",
    "home.startToday": "Mulai Hari Ini",
    "home.ctaTitle": "Bentuk Versi Terbaik Dirimu di Koloni",
    "home.ctaDesc": "Ambil langkah pertama menuju kekuatan mental, kemampuan beladiri, dan fisik prima. Dapatkan tiket Free Trial 3 Hari dan mulailah berlatih dengan aman bersama kami.",
    "home.claimPass": "Klaim Tiket Gratis Anda",
    "home.commercialGym": "Gym Komersial Biasa",
    "home.viewAllFaqs": "Lihat Semua Kebijakan & FAQ Membership",
    "about.behindColony": "DI BALIK KOLONI",
    "about.ourJourney": "Perjalanan Kami",
    "about.headline": "Kecil Bukan Berarti Lemah",
    "about.ourCreed": "Kredo Kami",
    "about.corePhilosophy": "FILOSOFI UTAMA",
    "about.leadership": "Kepemimpinan",
    "about.meetFounders": "TEMUI PARA PENDIRI",
    "about.followInstagram": "Ikuti di Instagram",
    "about.readyMeet": "Siap Bertemu Koloni Secara Langsung?",
    "about.readyMeetDesc": "Rasakan komunitas suportif kami dan latihan berbasis teknis secara langsung. Klaim pass uji coba gratis 3 hari Anda hari ini!",
    "programs.trainingDisciplines": "DISIPLIN LATIHAN",
    "programs.notSureTitle": "Belum Yakin Disiplin Mana yang Cocok?",
    "programs.notSureDesc": "Datang dan konsultasikan langsung dengan jajaran pelatih berlisensi kami di Suko, Sidoarjo. Ambil kelas trial gratis di disiplin mana pun dan temukan ritme Anda terlebih dahulu!",
    "program.classBenefits": "Manfaat Kelas",
    "program.bookTrial": "Pesan Trial Gratis",
    "program.checkSchedule": "Cek Jadwal Kelas",
    "program.certifiedInstructors": "Pelatih Bersertifikasi",
    "program.meetCoachesFor": "TEMUI PELATIH UNTUK",
    "program.coachesDesc": "Pelatih-pelatih ini adalah praktisi berpengalaman yang berlisensi untuk memandu kebugaran dan evolusi teknis Anda dengan aman.",
    "program.matsAtmosphere": "ATMOSFER MATRAS & SPARRED",
    "program.notFound": "Program Tidak Ditemukan",
    "program.notFoundDesc": "Program beladiri yang Anda cari mungkin telah diubah namanya atau dipindahkan.",
    "program.backToPrograms": "Kembali ke Program",
    "membership.readyTake": "Siap untuk Mencoba?",
    "membership.readyTakeDesc": "Rasakan langsung komunitas fisik dan latihan teknis kami dengan tiket uji coba gratis. Tanpa komitmen, cukup datang, belajar, berkeringat, dan jadilah bagian dari koloni."
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.programs": "Programs",
    "nav.coaches": "Coaches",
    "nav.schedule": "Schedule",
    "nav.membership": "Membership",
    "nav.gallery": "Gallery",
    "nav.blog": "Blog",
    "nav.trial": "Free Trial",
    "nav.contact": "Contact",

    // Common Actions
    "action.learnMore": "Learn More",
    "action.tryFree": "Try 3 Days for Free",
    "action.tryFreeShort": "Try for Free",
    "action.registerNow": "Register Now",
    "action.viewAll": "View All",
    "action.submit": "Submit Registration",
    "action.sending": "Sending...",
    "action.success": "Sent Successfully!",
    "action.backToHome": "Back to Home",
    "action.viewDetails": "View Details",

    // Hero Section
    "hero.title": "Discipline Forges True Fighters.",
    "hero.subtitle": "Premium martial arts & fitness academy in Sidoarjo. Train Muay Thai, MMA, Boxing, BJJ, and Wushu Sanda under national-certified coaches.",
    "hero.tagline": "SMALL BUT STRONG.",

    // Stats Section
    "stats.programs": "Select Programs",
    "stats.coaches": "Licensed Coaches",
    "stats.experience": "Years of Experience",
    "stats.members": "Active Members",

    // Problem vs Solution Section
    "problem.title": "Why Do People Fail at Commercial Gyms?",
    "problem.subtitle": "Most training environments feel cold, boring, or intimidating for beginners. At Black Ant Academy, we are different.",
    "problem.item1.title": "Monotonous & Unguided Workouts",
    "problem.item1.desc": "Standard gyms leave you training on your own with no clear roadmap.",
    "problem.item2.title": "Intimidating Atmosphere",
    "problem.item2.desc": "It's hard for beginners to feel comfortable around expert lifters or fighters.",
    "problem.item3.title": "Rigid Classes & No Form Coaching",
    "problem.item3.desc": "Lack of technical supervision leads to early injuries and quick burnout.",
    
    "solution.title": "The Solution in the Black Ant Colony",
    "solution.item1.title": "Guided Every Session",
    "solution.item1.desc": "All group classes are led interactively by certified elite coaches.",
    "solution.item2.title": "Supportive Community (Colony)",
    "solution.item2.desc": "We train together as a colony of ants, motivating and supporting each other.",
    "solution.item3.title": "Safe & Step-by-Step",
    "solution.item3.desc": "Techniques are taught from scratch, prioritizing safety and movement efficiency.",

    // Program Overview
    "programs.title": "OUR PROGRAMS",
    "programs.subtitle": "Select the perfect discipline aligned with your physical, mental, and self-defense goals.",
    "programs.category.striking": "Striking (Strikes)",
    "programs.category.grappling": "Grappling (Submissions)",
    "programs.category.fitness": "Fitness & Conditioning",
    "programs.levels": "Levels Available",
    "programs.viewProgram": "Explore Classes",

    // Coaches Overview
    "coaches.title": "OUR COACHING TEAM",
    "coaches.subtitle": "Train directly under the guidance of national-certified and highly experienced combat practitioners.",
    "coaches.experience": "Years of Experience",
    "coaches.certifications": "Certifications & Achievements",
    "coaches.viewProfile": "View Full Profile",

    // Schedule Overview
    "schedule.title": "WEEKLY CLASS SCHEDULE",
    "schedule.subtitle": "Align your training sessions with our daily group class schedules.",
    "schedule.filterProgram": "Filter Program",
    "schedule.filterDay": "Filter Day",
    "schedule.all": "All",
    "schedule.notAvailable": "No classes available for this filter combination.",
    "schedule.waConfirm": "Schedule changed? Confirm the latest schedules directly via WhatsApp",

    // Days translation
    "day.senin": "Monday",
    "day.selasa": "Tuesday",
    "day.rabu": "Wednesday",
    "day.kamis": "Thursday",
    "day.jumat": "Friday",
    "day.sabtu": "Saturday",
    "day.minggu": "Sunday",

    // Membership & Pricing
    "membership.title": "MEMBERSHIP PLANS",
    "membership.subtitle": "Invest in your health and self-defense with our clear, transparent membership pricing plans.",
    "membership.popular": "Most Popular",
    "membership.includes": "Includes:",
    "membership.faq": "Frequently Asked Questions",
    "membership.faqSubtitle": "Find fast answers regarding memberships, payments, and training policies at our academy.",

    // Gallery
    "gallery.title": "COLONY GALLERY",
    "gallery.subtitle": "Witness the excitement of daily workouts, sparring sessions, kids classes, and our gym atmosphere.",
    "gallery.followIg": "Follow us on Instagram @blackant.academy for daily stories",
    "gallery.filter.all": "All Photos",
    "gallery.filter.training": "Training",
    "gallery.filter.event": "Events & Sparring",
    "gallery.filter.facility": "Facility",

    // Blog
    "blog.title": "ARTICLES & INSIGHTS",
    "blog.subtitle": "Education, fitness tips, and the latest updates directly from Black Ant Academy's coaching team.",
    "blog.published": "Published on",
    "blog.author": "By",
    "blog.readMore": "Read Full Article",
    "blog.related": "Related Articles",

    // Trial Form & Conversion
    "trial.title": "REGISTER FOR A FREE TRIAL CLASS",
    "trial.subtitle": "Enjoy access to our free trial classes for 3 days. Complete the form below and our team will instantly confirm your schedule via WhatsApp.",
    "trial.form.name": "Full Name",
    "trial.form.phone": "WhatsApp Number (Active)",
    "trial.form.program": "Program of Interest",
    "trial.form.schedule": "Day & Time Preference",
    "trial.form.notes": "Additional Notes / Physical Conditions (Optional)",
    "trial.form.placeholder.name": "Enter your full name",
    "trial.form.placeholder.phone": "Example: 081234567890",
    "trial.form.placeholder.program": "Choose a training program",
    "trial.form.placeholder.schedule": "Example: Monday at 18:00",
    "trial.form.placeholder.notes": "Let us know if you have any pre-existing injuries or medical conditions",
    "trial.trust": "Why Train with Us?",
    "trial.trust1": "Certified Coaches & National Black Belt Practitioners",
    "trial.trust2": "Welcoming, Non-Intimidating Community",
    "trial.trust3": "High-Quality Mats & Sanitized Equipment",
    "trial.successMsg": "Registration successful! Click the button below to send your details directly to our WhatsApp Admin.",
    "trial.successBtn": "Send to WhatsApp Admin",

    // Contact
    "contact.title": "CONTACT US",
    "contact.subtitle": "Have questions or want to visit? Our team is ready to welcome you warmly at our academy.",
    "contact.info": "Contact Information",
    "contact.address": "Address",
    "contact.hours": "Operational Hours",
    "contact.hoursDetail": "Monday - Saturday: 08:00 - 21:00 | Sunday: Closed / Special Sessions",
    "contact.sendMessage": "Send Quick Message",
    "contact.form.message": "Message Content",
    "contact.form.placeholder.message": "Type your question or message here",
    "contact.googleMaps": "Open in Google Maps",

    // Additional home & global translations
    "home.disciplines": "Disciplines",
    "home.investment": "Investment",
    "home.successStories": "Success Stories",
    "home.whatColonySays": "WHAT THE COLONY SAYS",
    "home.insights": "Insights",
    "home.readOurBlog": "READ OUR BLOG",
    "home.startToday": "Start Today",
    "home.ctaTitle": "Forge Your Best Version in the Colony",
    "home.ctaDesc": "Take the first step towards mental toughness, self-defense skills, and ultimate conditioning. Grab our 3-Day Free Trial pass and start training safely with us.",
    "home.claimPass": "Claim Your Free Pass",
    "home.commercialGym": "Commercial Gym Routine",
    "home.viewAllFaqs": "View All Membership Policy & FAQs",
    "about.behindColony": "BEHIND THE COLONY",
    "about.ourJourney": "Our Journey",
    "about.headline": "Small But Strong",
    "about.ourCreed": "Our Creed",
    "about.corePhilosophy": "CORE PHILOSOPHY",
    "about.leadership": "Leadership",
    "about.meetFounders": "MEET THE FOUNDERS",
    "about.followInstagram": "Follow on Instagram",
    "about.readyMeet": "Ready to Meet the Colony in Person?",
    "about.readyMeetDesc": "Experience our supportive community and technical-led workouts firsthand. Claim your 3-day free trial class pass today!",
    "programs.trainingDisciplines": "TRAINING DISCIPLINES",
    "programs.notSureTitle": "Not Sure Which Discipline Fits Best?",
    "programs.notSureDesc": "Come and consult with our licensed coaching staff directly at Suko, Sidoarjo. Take a free trial class in any of our disciplines and see what matches your rhythm first!",
    "program.classBenefits": "Class Benefits",
    "program.bookTrial": "Book Free Trial",
    "program.checkSchedule": "Check Class Schedule",
    "program.certifiedInstructors": "Certified Instructors",
    "program.meetCoachesFor": "MEET THE COACHES FOR",
    "program.coachesDesc": "These instructors are experienced practitioners licensed to guide your fitness and technical evolution safely.",
    "program.matsAtmosphere": "MATS & SPARRED ATMOSPHERE",
    "program.notFound": "Program Found",
    "program.notFoundDesc": "The martial arts program you are looking for might have been renamed or moved.",
    "program.backToPrograms": "Back to Programs",
    "membership.readyTake": "Ready to Take a Test Drive?",
    "membership.readyTakeDesc": "Experience our physical community and technical workouts with a free trial pass. No commitments, just come, learn, sweat, and form of the colony."
  }
};

const LanguageContext = createContext<LanguageContextProps>({
  language: "id",
  setLanguage: () => {},
  t: () => ""
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("blackant_lang");
    return (saved === "id" || saved === "en") ? saved : "id";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("blackant_lang", lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return DICTIONARY[language][key] || DICTIONARY["id"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
