import { Program, Coach, ScheduleItem, PricingPlan, Testimonial, BlogPost } from "./types";

export const PROGRAMS: Program[] = [
  {
    slug: "muay-thai",
    name: { id: "Muay Thai", en: "Muay Thai" },
    category: "striking",
    shortDesc: {
      id: "Seni Delapan Tungkai asal Thailand untuk pertahanan diri dan kebugaran total.",
      en: "The Art of Eight Limbs from Thailand for self-defense and total body fitness."
    },
    fullDesc: {
      id: "Muay Thai adalah seni beladiri legendaris yang memanfaatkan kepalan tangan, siku, lutut, dan tulang kering. Kelas kami didesain aman bagi pemula, membantu menurunkan berat badan, membentuk otot, sekaligus mempelajari teknik perlindungan diri yang sangat efektif dalam situasi nyata.",
      en: "Muay Thai is a legendary martial art utilizing punches, elbows, knees, and shins. Our classes are designed to be safe for beginners, helping you lose weight, build muscle, and learn self-defense techniques highly effective in real-world situations."
    },
    level: ["Pemula / Beginner", "Menengah / Intermediate", "Atlet / Athlete"],
    image: "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/muay%20thai.jpg",
    gallery: [
      "https://picsum.photos/seed/muaythai1/800/600",
      "https://picsum.photos/seed/muaythai2/800/600"
    ],
    relatedCoaches: ["gunawan-sutrisno", "coach-randy"],
    icon: "Swords"
  },
  {
    slug: "boxing-kickboxing",
    name: { id: "Boxing & Kickboxing", en: "Boxing & Kickboxing" },
    category: "striking",
    shortDesc: {
      id: "Gabungan seni tinju barat dan tendangan dinamis untuk kardio maksimal.",
      en: "A mix of western boxing and dynamic kicks for maximum cardiovascular endurance."
    },
    fullDesc: {
      id: "Menggabungkan kelincahan gerak kaki tinju tradisional dengan tendangan eksplosif Kickboxing. Fokus utama kelas ini adalah melatih koordinasi, stamina kardiovaskular, kecepatan reaksi, dan ketahanan fisik. Sempurna bagi Anda yang mencari workout berenergi tinggi.",
      en: "Combines the footwork agility of traditional boxing with the explosive kicks of Kickboxing. This class focuses on coordination, cardiovascular stamina, reaction speed, and physical endurance. Perfect for those looking for a high-energy workout."
    },
    level: ["Semua Level / All Levels"],
    image: "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/kick%20boxing.jpg",
    gallery: [
      "https://picsum.photos/seed/boxing1/800/600",
      "https://picsum.photos/seed/boxing2/800/600"
    ],
    relatedCoaches: ["coach-randy"],
    icon: "ShieldAlert"
  },
  {
    slug: "mma",
    name: { id: "Mixed Martial Arts (MMA)", en: "Mixed Martial Arts (MMA)" },
    category: "striking",
    shortDesc: {
      id: "Integrasi menyeluruh striking, grappling, dan pertarungan bawah (ground fight).",
      en: "Comprehensive integration of striking, grappling, and ground fighting."
    },
    fullDesc: {
      id: "MMA adalah puncak dari olahraga combat modern, menggabungkan teknik terbaik dari Muay Thai, Boxing, Wrestling, dan Jiu-Jitsu. Di kelas ini, Anda akan belajar transisi mulus dari berdiri hingga pertarungan bawah, kuncian, dan kontrol posisi.",
      en: "MMA is the pinnacle of modern combat sports, combining the best techniques from Muay Thai, Boxing, Wrestling, and Jiu-Jitsu. In this class, you will learn seamless transitions from standing to ground fighting, submissions, and positional control."
    },
    level: ["Menengah / Intermediate", "Atlet / Athlete"],
    image: "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/MMA.jpg",
    gallery: [
      "https://picsum.photos/seed/mma1/800/600"
    ],
    relatedCoaches: ["gunawan-sutrisno", "coach-bagus"],
    icon: "Shield"
  },
  {
    slug: "bjj-grappling",
    name: { id: "BJJ & Grappling", en: "BJJ & Submission Grappling" },
    category: "grappling",
    shortDesc: {
      id: "Seni kuncian, bantingan, dan kontrol posisi tanpa pukulan.",
      en: "The art of submission, takedowns, and positional control without strikes."
    },
    fullDesc: {
      id: "Brazilian Jiu-Jitsu (BJJ) berfokus pada pertarungan bawah dengan menggunakan leverage, teknik, dan posisi untuk mengalahkan lawan yang lebih besar. Melatih kesabaran, taktik, dan ketangguhan mental. Sangat cocok untuk pertahanan diri realistis.",
      en: "Brazilian Jiu-Jitsu (BJJ) focuses on ground fighting, using leverage, technique, and position to overcome larger opponents. Trains patience, tactics, and mental toughness. Highly suited for realistic self-defense."
    },
    level: ["Pemula / Beginner", "Menengah / Intermediate"],
    image: "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/BJJ.jpg",
    gallery: [
      "https://picsum.photos/seed/bjj1/800/600"
    ],
    relatedCoaches: ["coach-bagus"],
    icon: "Activity"
  },
  {
    slug: "wushu-sanda",
    name: { id: "Wushu Sanda", en: "Wushu Sanda" },
    category: "striking",
    shortDesc: {
      id: "Bela diri kickboxing Tiongkok modern dengan teknik bantingan eksplosif.",
      en: "Modern Chinese kickboxing martial art featuring explosive takedowns."
    },
    fullDesc: {
      id: "Wushu Sanda (atau Sanshou) menggabungkan teknik pukulan, tendangan cepat, dan bantingan tangkisan khas Tiongkok. Di bawah asuhan Coach Gunawan yang merupakan praktisi nasional, kelas ini menekankan pada akurasi, kecepatan, dan bantingan dinamis.",
      en: "Wushu Sanda (or Sanshou) combines punches, rapid kicks, and wrestling sweeps typical of Chinese combat. Taught directly by Coach Gunawan, a national practitioner, this class emphasizes accuracy, speed, and dynamic throws."
    },
    level: ["Semua Level / All Levels", "Kompetisi / Competition"],
    image: "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/wushu%20sanda.png",
    gallery: [
      "https://picsum.photos/seed/sanda1/800/600"
    ],
    relatedCoaches: ["gunawan-sutrisno"],
    icon: "Zap"
  },
  {
    slug: "functional-training",
    name: { id: "Functional Training", en: "Functional Training" },
    category: "fitness",
    shortDesc: {
      id: "Latihan beban tubuh dan ketahanan untuk pengkondisian fisik petarung.",
      en: "Bodyweight and resistance training for fighter-level physical conditioning."
    },
    fullDesc: {
      id: "Sesi high-intensity circuit training yang dirancang untuk memperkuat core, meningkatkan kapasitas paru-paru, kelenturan, serta membakar lemak secara intensif. Menggunakan kettlebell, slam ball, battle ropes, dan berat tubuh sendiri.",
      en: "A high-intensity circuit training session designed to strengthen the core, improve lung capacity, flexibility, and burn fat intensively. Utilizes kettlebells, slam balls, battle ropes, and bodyweight."
    },
    level: ["Semua Level / All Levels"],
    image: "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/weight%20lifting.jpg",
    gallery: [
      "https://picsum.photos/seed/functional1/800/600"
    ],
    relatedCoaches: ["umi-khilmi"],
    icon: "Dumbbell"
  }
];

export const COACHES: Coach[] = [
  {
    slug: "gunawan-sutrisno",
    name: "Gunawan Sutrisno Putra",
    role: { id: "Founder & Head Coach", en: "Founder & Head Coach" },
    specialties: ["Wushu Sanda", "MMA", "Striking Specialist"],
    yearsExperience: 12,
    bio: {
      id: "Coach Gunawan adalah atlet dan praktisi beladiri berpengalaman tingkat nasional dengan lisensi kepelatihan resmi. Memiliki visi membangun mental baja dan fisik kuat bagi generasi muda di Sidoarjo.",
      en: "Coach Gunawan is an experienced national-level martial arts athlete and practitioner with certified coaching credentials. He aims to forge iron mental and physical strength for the youth of Sidoarjo."
    },
    photo: "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/Coach_Gunawan.png",
    certifications: [
      "Lisensi Pelatih Wushu Sanda Pengprov Jatim",
      "Mantan Atlet Sabuk Hitam Sanda",
      "Sertifikasi Wasit Juri MMA Nasional"
    ],
    instagram: "https://www.instagram.com/gunawan_sutrisno_putra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    slug: "umi-khilmi",
    name: "Umi Khilmi",
    role: { id: "Co-Founder & Strength Coach", en: "Co-Founder & Strength Coach" },
    specialties: ["Functional Training", "Weight Management", "Kids Class Coordinator"],
    yearsExperience: 8,
    bio: {
      id: "Coach Umi fokus pada pengkondisian fisik, kekuatan fungsional, dan nutrisi sehat. Beliau berdedikasi menciptakan suasana latihan yang ramah bagi wanita serta mengatur program kebugaran anak.",
      en: "Coach Umi focuses on physical conditioning, functional strength, and healthy nutrition. She is dedicated to creating a welcoming training atmosphere for women and managing kids fitness programs."
    },
    photo: "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/Coach_Umi.png",
    certifications: [
      "Certified Personal Trainer (CPT)",
      "Strength and Conditioning Coach Specialist",
      "Nutrition Consultant Certification"
    ],
    instagram: "https://www.instagram.com/umi_khilmi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  {
    slug: "coach-randy",
    name: "Coach Randy",
    role: { id: "Striking Coach", en: "Striking Coach" },
    specialties: ["Muay Thai", "Boxing & Kickboxing"],
    yearsExperience: 7,
    bio: {
      id: "Coach Randy memiliki gaya melatih yang dinamis dan fokus pada detail teknik pukulan maupun tendangan. Sangat ramah untuk pemula yang ingin belajar dari nol.",
      en: "Coach Randy features a dynamic coaching style focused on detailed punching and kicking techniques. He is highly friendly for beginners who wish to learn from scratch."
    },
    photo: "https://picsum.photos/seed/coach-randy/400/400",
    certifications: [
      "Sertifikasi Pelatih Muay Thai Indonesia",
      "Sertifikasi Tinju Amatir Daerah"
    ],
    instagram: "https://www.instagram.com/blackant.academy"
  },
  {
    slug: "coach-bagus",
    name: "Coach Bagus",
    role: { id: "Grappling Coach", en: "Grappling Coach" },
    specialties: ["BJJ", "Submission Grappling", "Wrestling"],
    yearsExperience: 6,
    bio: {
      id: "Spesialis dalam takedown, kuncian, dan strategi pertarungan ground. Coach Bagus berfokus melatih member agar mampu menguasai teknik leverage secara efisien.",
      en: "Specialist in takedowns, submissions, and ground fighting strategy. Coach Bagus focuses on training members to master efficient leverage techniques."
    },
    photo: "https://picsum.photos/seed/coach-bagus/400/400",
    certifications: [
      "BJJ Blue Belt under Certified International Academy",
      "Wrestling Coach Certification"
    ],
    instagram: "https://www.instagram.com/blackant.academy"
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { day: "senin", time: "16:00 - 17:30", programSlug: "boxing-kickboxing", coachSlug: "coach-randy", level: "Semua Level" },
  { day: "senin", time: "18:00 - 19:30", programSlug: "muay-thai", coachSlug: "gunawan-sutrisno", level: "Pemula" },
  { day: "senin", time: "19:30 - 21:00", programSlug: "mma", coachSlug: "gunawan-sutrisno", level: "Menengah / Atlet" },

  { day: "selasa", time: "16:30 - 18:00", programSlug: "functional-training", coachSlug: "umi-khilmi", level: "Semua Level" },
  { day: "selasa", time: "18:30 - 20:00", programSlug: "bjj-grappling", coachSlug: "coach-bagus", level: "Pemula / Menengah" },

  { day: "rabu", time: "16:00 - 17:30", programSlug: "wushu-sanda", coachSlug: "gunawan-sutrisno", level: "Semua Level" },
  { day: "rabu", time: "18:00 - 19:30", programSlug: "muay-thai", coachSlug: "coach-randy", level: "Semua Level" },
  { day: "rabu", time: "19:30 - 21:00", programSlug: "mma", coachSlug: "coach-bagus", level: "Menengah / Atlet" },

  { day: "kamis", time: "16:30 - 18:00", programSlug: "functional-training", coachSlug: "umi-khilmi", level: "Semua Level" },
  { day: "kamis", time: "18:30 - 20:00", programSlug: "bjj-grappling", coachSlug: "coach-bagus", level: "Semua Level" },

  { day: "jumat", time: "16:00 - 17:30", programSlug: "boxing-kickboxing", coachSlug: "coach-randy", level: "Semua Level" },
  { day: "jumat", time: "18:00 - 19:30", programSlug: "muay-thai", coachSlug: "gunawan-sutrisno", level: "Semua Level" },
  { day: "jumat", time: "19:30 - 21:00", programSlug: "wushu-sanda", coachSlug: "gunawan-sutrisno", level: "Atlet / Kompetisi" },

  { day: "sabtu", time: "08:00 - 09:30", programSlug: "functional-training", coachSlug: "umi-khilmi", level: "Semua Level" },
  { day: "sabtu", time: "10:00 - 11:30", programSlug: "muay-thai", coachSlug: "coach-randy", level: "Pemula" },
  { day: "sabtu", time: "15:00 - 17:00", programSlug: "mma", coachSlug: "gunawan-sutrisno", level: "Sparring & Open Mat" }
];

export const PRICING: PricingPlan[] = [
  {
    slug: "trial-class",
    name: { id: "Uji Coba 3 Hari", en: "3-Day Free Trial" },
    price: 0,
    currency: "IDR",
    unit: { id: "3 hari", en: "3 days" },
    highlight: false,
    benefits: [
      { id: "Akses ke 2 kelas grup apa saja", en: "Access to any 2 group classes" },
      { id: "Konsultasi kebugaran dasar gratis", en: "Free basic fitness consultation" },
      { id: "Dipandu pelatih profesional", en: "Guided by professional coaches" },
      { id: "Tanpa ikatan kontrak", en: "No contract obligations" }
    ],
    ctaLabel: { id: "Coba Gratis", en: "Try for Free" }
  },
  {
    slug: "paket-reguler",
    name: { id: "Paket Reguler", en: "Regular Plan" },
    price: 350000,
    currency: "IDR",
    unit: { id: "per bulan", en: "per month" },
    highlight: true,
    benefits: [
      { id: "Akses 12 sesi kelas grup per bulan", en: "Access up to 12 group sessions/month" },
      { id: "Berlaku untuk semua program beladiri", en: "Valid for all martial arts programs" },
      { id: "Fasilitas gym dasar lengkap", en: "Full access to basic gym equipment" },
      { id: "Bimbingan langsung di kelas", en: "Direct guidance in class sessions" },
      { id: "Diskon 10% untuk merch akademi", en: "10% discount on academy merch" }
    ],
    ctaLabel: { id: "Daftar Sekarang", en: "Join Regular" }
  },
  {
    slug: "unlimited-pass",
    name: { id: "Akses Unlimited", en: "Unlimited Pass" },
    price: 550000,
    currency: "IDR",
    unit: { id: "per bulan", en: "per month" },
    highlight: false,
    benefits: [
      { id: "Sesi kelas grup tanpa batas setiap hari", en: "Unlimited group sessions every day" },
      { id: "Akses ke semua program beladiri & fitness", en: "Access to all combat & fitness programs" },
      { id: "Sesi sparring & Open Mat terjadwal", en: "Access to sparring & scheduled Open Mat" },
      { id: "Evaluasi kemajuan triwulanan", en: "Quarterly progress evaluation" },
      { id: "Grup WhatsApp eksklusif member", en: "Access to exclusive members WhatsApp" }
    ],
    ctaLabel: { id: "Pilih Unlimited", en: "Go Unlimited" }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmad Fauzi",
    role: { id: "Member Muay Thai (6 Bulan)", en: "Muay Thai Member (6 Months)" },
    quote: {
      id: "Pelatih di Black Ant sangat ramah dan detail dalam mengoreksi teknik saya. Stamina saya meningkat drastis dan berat badan turun 8 kg!",
      en: "Coaches at Black Ant are very friendly and detail-oriented in correcting my form. My stamina improved drastically, and I lost 8 kg!"
    },
    photo: "https://picsum.photos/seed/member-ahmad/200/200",
    rating: 5
  },
  {
    name: "Sarah Wijaya",
    role: { id: "Member Functional Training", en: "Functional Training Member" },
    quote: {
      id: "Sebagai wanita, awalnya saya agak ragu berlatih di gym MMA. Tapi Black Ant menciptakan komunitas yang sangat suportif, aman, dan bersih.",
      en: "As a woman, I was hesitant about training at an MMA gym. But Black Ant creates an extremely supportive, safe, and clean community."
    },
    photo: "https://picsum.photos/seed/member-sarah/200/200",
    rating: 5
  },
  {
    name: "Budi Santoso",
    role: { id: "Orang Tua Member Kids Class", en: "Parent of Kids Class Member" },
    quote: {
      id: "Kelas beladiri anak di sini mengajarkan rasa disiplin yang luar biasa serta melatih ketahanan fisik anak saya dengan cara yang menyenangkan.",
      en: "The kids' martial arts classes here teach incredible discipline and train my son's physical endurance in a highly fun and safe way."
    },
    photo: "https://picsum.photos/seed/member-budi/200/200",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "muay-thai-untuk-pemula",
    title: {
      id: "5 Alasan Mengapa Muay Thai Sangat Cocok untuk Pemula Tanpa Basic Beladiri",
      en: "5 Reasons Why Muay Thai is Perfect for Beginners with No Martial Arts Background"
    },
    excerpt: {
      id: "Ragu mulai latihan? Tenang, Muay Thai didesain untuk semua tingkat kebugaran. Pelajari mengapa seni delapan tungkai ini aman bagi pemula.",
      en: "Hesitant to start training? Rest assured, Muay Thai is designed for all fitness levels. Discover why the Art of Eight Limbs is beginner-safe."
    },
    content: {
      id: `Latihan Muay Thai kini tidak hanya diisi oleh petarung profesional, namun juga menjadi pilihan favorit bagi masyarakat umum untuk menjaga kebugaran tubuh, menurunkan berat badan, dan mempelajari dasar pertahanan diri.

Jika Anda berdomisili di Sidoarjo atau Surabaya dan belum pernah mencoba olahraga beladiri sebelumnya, berikut adalah alasan mengapa kelas Muay Thai di Black Ant Academy adalah pilihan terbaik untuk memulai:

1. **Teknik Dasar yang Sederhana & Efektif**
Muay Thai dikenal sebagai seni bela diri yang praktis. Anda akan diajarkan gerakan memukul, menendang, menyikut, dan menyerang dengan lutut secara logis dan bertahap.

2. **Membakar Hingga 800 Kalori per Sesi**
Dengan kombinasi latihan aerobik dan anaerobik, latihan satu jam Muay Thai sangat efisien untuk menurunkan berat badan dan melatih kekuatan otot jantung Anda.

3. **Komunitas yang Sangat Suportif**
Di Black Ant Academy, setiap member saling menyemangati. Tidak ada intimidasi, semua orang berlatih bersama untuk meningkatkan versi terbaik dirinya.

4. **Menghilangkan Stres dengan Maksimal**
Setelah seharian bekerja atau belajar, melampiaskan energi pada heavy bag atau pad work adalah metode pelepasan stres terbaik untuk menjaga kesehatan mental.

5. **Meningkatkan Kepercayaan Diri**
Mengetahui tubuh Anda mampu bertahan dan menyerang meningkatkan kesadaran situasional serta kepercayaan diri Anda dalam kehidupan sehari-hari.`,
      en: `Muay Thai is no longer just for professional fighters. Today, it has become a top choice for ordinary people to maintain fitness, lose weight, and learn basic self-defense.

If you are living in Sidoarjo or Surabaya and have never tried martial arts before, here is why Muay Thai classes at Black Ant Academy are the perfect starting point:

1. **Simple & Highly Effective Techniques**
Muay Thai is famous for being a highly practical martial art. You will be taught punch, kick, elbow, and knee strikes in a very logical and step-by-step manner.

2. **Burn Up to 800 Calories per Session**
With a combination of aerobic and anaerobic workouts, one hour of Muay Thai is highly efficient for weight loss and strengthening cardiovascular muscles.

3. **Highly Supportive Community**
At Black Ant Academy, members cheer each other on. There is no intimidation; everyone trains side-by-side to improve their physical and mental state.

4. **The Ultimate Stress Relief**
After a long day of work or study, venting energy on heavy bags or focus pads serves as an amazing stress-relief method for maintaining mental wellness.

5. **Boosting Self-Confidence**
Knowing that your body is capable of defense and offense increases situational awareness and confidence in your everyday activities.`
    },
    date: "2026-07-01",
    category: "Tips Pemula",
    image: "https://picsum.photos/seed/blog-muaythai/800/600",
    author: "Coach Gunawan"
  },
  {
    slug: "perbedaan-mma-sanda-kickboxing",
    title: {
      id: "Mengenal Perbedaan MMA, Wushu Sanda, dan Kickboxing",
      en: "Understanding the Differences Between MMA, Wushu Sanda, and Kickboxing"
    },
    excerpt: {
      id: "Masih bingung memilih program yang pas? Baca artikel ini untuk memahami keunikan masing-masing disiplin beladiri.",
      en: "Confused about choosing the right program? Read this article to understand the uniqueness of each martial arts discipline."
    },
    content: {
      id: `Dunia bela diri modern menyuguhkan banyak sekali pilihan disiplin. Di Black Ant Academy Sidoarjo, kami menawarkan Mixed Martial Arts (MMA), Wushu Sanda, dan Kickboxing. Ketiganya tampak mirip bagi mata awam, namun memiliki aturan dan taktik yang sangat berbeda:

### 1. Kickboxing
Kickboxing berfokus sepenuhnya pada pertarungan berdiri (striking). Disiplin ini memadukan pukulan tinju barat (Boxing) dengan tendangan dari Karate atau Muay Thai. Dalam Kickboxing tradisional, serangan sikut, lutut, maupun bantingan tidak diperbolehkan.

### 2. Wushu Sanda (Sanshou)
Wushu Sanda adalah olahraga beladiri modern asal Tiongkok. Sanda menggabungkan teknik pukulan dan tendangan Kickboxing dengan **teknik bantingan cepat (takedowns & sweeps)**. Jika Anda menendang dan kaki Anda ditangkap, lawan bisa langsung membanting Anda ke matras. Sanda melatih keseimbangan, kecepatan reaksi, dan ketangkasan menangkap serangan.

### 3. Mixed Martial Arts (MMA)
MMA adalah bentuk integrasi beladiri terlengkap. Tidak hanya bertarung dalam posisi berdiri (striking), MMA memperbolehkan pertarungan jarak dekat (clinch), bantingan ala Wrestling, kuncian sendi ala BJJ (grappling), hingga serangan di matras (ground and pound). 

### Mana yang Cocok untuk Anda?
- Pilih **Kickboxing** jika Anda ingin kardio intens dan menyukai kombinasi pukulan/tendangan beruntun.
- Pilih **Wushu Sanda** jika Anda menyukai taktik menyerang sekaligus ingin menguasai seni menjatuhkan lawan dengan cepat.
- Pilih **MMA** jika Anda mencari tantangan bela diri paling lengkap dan realistis dari berdiri hingga lantai.`,
      en: `The modern martial arts world offers a wide variety of disciplines. At Black Ant Academy Sidoarjo, we offer Mixed Martial Arts (MMA), Wushu Sanda, and Kickboxing. While they may look similar to the untrained eye, their rules and strategies are vastly different:

### 1. Kickboxing
Kickboxing focuses fully on stand-up fighting (striking). It blends western boxing punches with kicks from Karate or Muay Thai. In traditional kickboxing, elbows, knees, and takedowns are strictly forbidden.

### 2. Wushu Sanda (Sanshou)
Wushu Sanda is a modern Chinese combat sport. Sanda combines the punches and kicks of kickboxing with **explosive takedowns, sweeps, and catches**. If you kick and your foot is caught, the opponent can instantly throw you to the mat. Sanda trains balance, reaction speed, and catching mechanics.

### 3. Mixed Martial Arts (MMA)
MMA is the ultimate integration of combat sports. Beyond stand-up fighting, MMA allows close-range clinch battles, wrestling takedowns, joint submissions from BJJ, and floor combat (ground and pound).

### Which One Should You Choose?
- Choose **Kickboxing** if you want high-intensity cardio and love fast punching/kicking combinations.
- Choose **Wushu Sanda** if you enjoy striking but also want to master throwing opponents quickly and cleanly.
- Choose **MMA** if you seek the most comprehensive and realistic martial arts challenge from stand-up to the ground.`
    },
    date: "2026-07-05",
    category: "Edukasi",
    image: "https://picsum.photos/seed/blog-mma/800/600",
    author: "Coach Gunawan"
  }
];
