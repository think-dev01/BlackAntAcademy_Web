# Software Requirements Specification (SRS)
## Website Multi-Page — Black Ant Academy MMA & Fitness (Sidoarjo)

**Versi:** 1.1
**Tanggal:** 11 Juli 2026
**Disusun untuk:** Pengembangan Landing Page Multi-Page — Black Ant Academy

---

## 1. Pendahuluan

### 1.1 Tujuan Dokumen
Dokumen ini mendefinisikan kebutuhan fungsional dan non-fungsional untuk pembangunan website resmi **Black Ant Academy MMA** — gym & akademi beladiri di Sidoarjo. Dokumen ini menjadi acuan teknis bagi tim pengembang (atau AI coding assistant) dalam membangun struktur, komponen, dan sistem website secara konsisten dengan `desain_and_style_guide.md`.

### 1.2 Ruang Lingkup
Website berupa **multi-page marketing site** dengan tujuan utama:
- Membangun kredibilitas brand Black Ant Academy secara online
- Mengedukasi calon member tentang program beladiri yang tersedia
- Mengonversi pengunjung menjadi pendaftar trial class / member baru
- Menjadi hub informasi jadwal, harga, lokasi, dan pelatih

Di luar ruang lingkup (Phase 1): member login area, sistem pembayaran online, absensi digital, dan aplikasi mobile.

### 1.3 Referensi Riset
| Sumber | Data Kunci |
|---|---|
| Google Maps | Nama: **BLACK ANT ACADEMY MMA SIDOARJO**. Koordinat: `-7.4406543, 112.7151039`. |
| Alamat | Jl. Raya Suko No. 56C, Ngemplak, Cemeng Kalang, Kec. Sidoarjo, Kab. Sidoarjo, Jawa Timur 61224 |
| Instagram (@blackant.academy) | Followers: ~780+, Posts: ~210+. Owner: Gunawan Sutrisno Putra & Umi Khilmi. Disiplin: Wushu, Muay Thai, Boxing, MMA, Functional Training |
| Kontak WA | 0857-4518-6832 |
| Referensi desain (andersonsmartialarts.com) | Struktur multi-page, pola section hero → problem/solution → program grid → pricing → coach grid → testimoni → blog → contact form |

---

## 2. Deskripsi Umum Produk

### 2.1 Perspektif Produk
Website berdiri sendiri, dibangun dengan React, Tailwind CSS, TypeScript, dan Vite. Di-deploy secara optimal untuk akses cepat dan SEO tinggi.

### 2.2 Kelas Pengguna
- **Calon Member (Prospect):** Warga Sidoarjo/Surabaya mencari tempat latihan beladiri/fitness.
- **Orang Tua:** Mencari kelas beladiri yang aman, berdisiplin tinggi, dan terpercaya untuk anak-anak.
- **Member Eksisting:** Mencari informasi jadwal mingguan terbaru, pelatih, serta artikel informatif.
- **Admin/Owner:** Memperbarui konten program, harga, jadwal, dan blog.

### 2.3 Lingkungan Operasi
- Mobile-first responsif (browser iOS/Android) dan optimal pada desktop widescreen.

### 2.4 Batasan (Constraints)
- Bahasa: **Bilingual ID/EN** dengan language switcher (ID default).
- Booking Trial Class: Integrasi formulir yang otomatis menghasilkan tautan kirim pesan WhatsApp berformat rapi langsung ke admin.

---

## 3. Tech Stack & Arsitektur

### 3.1 Stack Utama
- **Framework:** React 19 + Vite (Single Page Application dengan client-side routing multi-page via `react-router-dom`).
- **Styling:** Tailwind CSS v4.
- **Animasi:** Motion (Framer Motion) untuk responsive smooth state transitions dan micro-interactions.
- **Form & Validasi:** React Hook Form + Zod.
- **Peta Lokasi:** Leaflet / OpenStreetMap.
- **Ikon:** Lucide-React.

---

## 4. Sitemap & Struktur Halaman

1. **Home (`/`)** — Ringkasan hero, problem/solution, program, pricing, testimonials, CTA, kontak.
2. **About (`/about`)** — Narasi brand, profil Founder (Gunawan & Umi), filosofi "Black Ant".
3. **Programs (`/programs`)** — Daftar semua disiplin beladiri.
   - `/programs/muay-thai`
   - `/programs/boxing`
   - `/programs/mma`
   - `/programs/bjj-grappling`
   - `/programs/wushu-sanda`
   - `/programs/functional-training`
4. **Coaches (`/coaches`)** — Profil tim pelatih berlisensi dan berpengalaman.
5. **Schedule (`/schedule`)** — Filter jadwal mingguan dinamis.
6. **Membership (`/membership`)** — Opsi paket harga transparan & FAQ.
7. **Gallery (`/gallery`)** — Foto & video kegiatan latihan.
8. **Blog (`/blog`)** — Artikel informatif & rilis kegiatan.
9. **Trial Class (`/trial`)** — Formulir pendaftaran kelas uji coba gratis.
10. **Contact (`/contact`)** — Peta interaktif, info kontak cepat, dan jam buka.

---

## 5. SEO Enhancement Strategy (Detailed Execution Guide)

### 5.1 Riset & Pemetaan Target Keyword
Strategi penargetan difokuskan pada kata kunci lokal berdaya konversi tinggi (local intent) untuk area Sidoarjo dan Surabaya:

#### A. Local Intent & General Keywords
- **ID (Utama):**
  - "tempat latihan mma sidoarjo" (Volume tinggi, intent beli tinggi)
  - "gym muay thai sidoarjo"
  - "kelas bela diri anak sidoarjo"
  - "akademi mma surabaya sidoarjo"
- **EN (Sekunder):**
  - "best mma gym sidoarjo"
  - "martial arts academy near surabaya"
  - "muay thai training center sidoarjo"

#### B. Per-Program Keywords
- **Muay Thai:** "muay thai sidoarjo", "tempat latihan muay thai di sidoarjo", "muay thai class surabaya"
- **MMA:** "mma gym sidoarjo", "beladiri mma sidoarjo", "private mma coach sidoarjo"
- **Boxing/Kickboxing:** "boxing club sidoarjo", "sasana tinju sidoarjo", "kickboxing class sidoarjo"
- **BJJ/Grappling:** "bjj sidoarjo", "jiu jitsu sidoarjo", "grappling training sidoarjo"
- **Wushu/Sanda:** "wushu sanda sidoarjo", "pelatih sanda berlisensi sidoarjo"
- **Kids Martial Arts:** "beladiri anak sidoarjo", "kelas karate wushu anak sidoarjo"

#### C. Blog Keywords
- "manfaat muay thai untuk pemula"
- "latihan mma membakar berapa kalori"
- "cara melatih disiplin anak dengan beladiri"

---

### 5.2 Struktur Metadata per Tipe Halaman

Semua halaman harus mengimplementasikan template meta dinamis yang ramah mesin pencari (SEO-friendly):

#### A. Beranda / Home (`/`)
- **Title (ID):** Black Ant Academy | Gym MMA & Muay Thai Sidoarjo Terbaik
- **Title (EN):** Black Ant Academy | Best MMA & Muay Thai Gym Sidoarjo
- **Meta Description (ID):** Gabung sekarang di Black Ant Academy Sidoarjo! Latihan MMA, Muay Thai, Boxing, BJJ, & Wushu Sanda dipandu pelatih profesional berlisensi nasional. Coba kelas gratis!
- **Meta Description (EN):** Join Black Ant Academy Sidoarjo! Professional MMA, Muay Thai, Boxing, BJJ, and Sanda training with national certified coaches. Claim your 3-day free trial!
- **OpenGraph Tags:**
  - `og:title`: Black Ant Academy | Gym MMA & Muay Thai Sidoarjo Terbaik
  - `og:description`: Latihan beladiri berstandar nasional dan ramah pemula di Sidoarjo.
  - `og:image`: `/images/og-home.jpg`
  - `og:type`: website

#### B. Detail Program (`/programs/[slug]`)
- **Title Template:** Latihan [Program Name] Sidoarjo - Black Ant Academy
- **Meta Description Template:** Kelas [Program Name] di Sidoarjo untuk pemula & atlet profesional. Jadwal latihan fleksibel dengan pelatih bersertifikat. Daftar kelas percobaan gratis sekarang!

#### C. Halaman Booking Trial (`/trial`)
- **Title:** Daftar Trial Class Gratis | Black Ant Academy Sidoarjo
- **Meta Description:** Coba latihan Muay Thai, MMA, atau Boxing gratis selama 3 hari di Black Ant Academy Sidoarjo. Tanpa kontrak, daftar sekarang!

---

### 5.3 Structured Data (Schema.org) JSON-LD

Untuk memberikan sinyal kontekstual yang akurat kepada Google, implementasikan skema structured data berikut secara langsung di dalam elemen `<script type="application/ld+json">`:

#### A. LocalBusiness & SportsActivityLocation (Disisipkan di Home)
```json
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": "https://blackantacademy.com/#academy",
  "name": "Black Ant Academy MMA Sidoarjo",
  "image": "https://ik.imagekit.io/vxdc7xryf/BlackAnt_Academy/logo.png",
  "url": "https://blackantacademy.com",
  "telephone": "+6285745186832",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Suko No. 56C, Ngemplak, Cemeng Kalang",
    "addressLocality": "Sidoarjo",
    "addressRegion": "Jawa Timur",
    "postalCode": "61224",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.4406543,
    "longitude": 112.7151039
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/blackant.academy"
  ]
}
```

#### B. BreadcrumbList (Disisipkan di semua sub-halaman)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://blackantacademy.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Programs",
      "item": "https://blackantacademy.com/programs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Muay Thai",
      "item": "https://blackantacademy.com/programs/muay-thai"
    }
  ]
}
```

#### C. FAQPage Schema (Disisipkan di halaman Membership atau FAQ)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apakah pemula tanpa latar belakang olahraga bela diri bisa bergabung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tentu saja! Lebih dari 70% member kami memulai dari nol. Pelatih kami akan membimbing Anda langkah demi langkah dengan teknik dasar yang aman."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara mendaftar kelas trial gratis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anda dapat mengisi formulir di halaman Trial kami dan pesan pendaftaran akan otomatis terkirim langsung ke admin WhatsApp kami untuk konfirmasi jadwal."
      }
    }
  ]
}
```

#### D. Course / Program Schema (Disisipkan di halaman Detail Program)
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Muay Thai Group Training",
  "description": "Latihan teknik striking Muay Thai terlengkap di Sidoarjo mulai dari level pemula hingga lanjutan.",
  "provider": {
    "@type": "Organization",
    "name": "Black Ant Academy Sidoarjo",
    "sameAs": "https://blackantacademy.com"
  }
}
```

---

### 5.4 Local SEO Checklist
1. **Google Business Profile (GBP) Optimization:** Daftarkan dengan nama "Black Ant Academy MMA Sidoarjo", unggah logo resmi, foto latihan orisinal, serta jam operasional yang konsisten.
2. **NAP Consistency (Name, Address, Phone):** Pastikan penulisan alamat dan nomor telepon (0857-4518-6832) persis sama antara website, GBP, Instagram, dan media sosial lainnya.
3. **Review Generation Strategy:** Sediakan QR Code di meja resepsionis yang langsung mengarah ke halaman review Google Maps, tawarkan insentif kecil bagi member yang memberikan review jujur.

---

### 5.5 Strategi Internal Linking
- **Dari Program ke Coach:** Di halaman detail program, tautkan langsung ke profil pelatih yang mengampu kelas tersebut (misal: "Kelas Muay Thai ini dilatih oleh Coach Gunawan").
- **Dari Coach ke Schedule:** Di profil coach, berikan tautan yang mengarah ke jadwal mengajar mereka di halaman Schedule.
- **Dari Blog ke Program:** Pada artikel blog tentang metabolisme, tautkan teks "latihan Muay Thai membakar kalori" langsung ke halaman `/programs/muay-thai`.
- **Dari Semua Halaman ke Trial:** Taruh tombol CTA "Coba Kelas Gratis" di akhir setiap halaman (Home, About, Programs, Coaches, Pricing).

---

### 5.6 Content Calendar Awal Blog (1-2 Bulan Pertama)
1. **Judul 1:** "5 Alasan Mengapa Muay Thai Sangat Cocok untuk Pemula Tanpa Basic Beladiri"
   - *Target Keyword:* "muay thai sidoarjo", "muay thai pemula"
2. **Judul 2:** "Mengenal Perbedaan MMA, Wushu Sanda, dan Kickboxing"
   - *Target Keyword:* "beladiri mma sidoarjo", "wushu sanda"
3. **Judul 3:** "Manfaat Melatih Mental Disiplin Anak Melalui Kelas Bela Diri Sejak Dini"
   - *Target Keyword:* "kelas bela diri anak sidoarjo", "beladiri anak"
4. **Judul 4:** "BJJ vs Muay Thai: Mana yang Lebih Efektif untuk Pertahanan Diri Jalanan?"
   - *Target Keyword:* "bjj sidoarjo", "jiu jitsu sidoarjo"
5. **Judul 5:** "Panduan Memilih Perlengkapan Latihan Boxing Pertama Anda"
   - *Target Keyword:* "boxing club sidoarjo"

---

### 5.7 Technical SEO Checklist
- **Sitemap & Robots.txt:** Sediakan `/sitemap.xml` dan `/robots.txt` statis yang memperbolehkan crawling mesin pencari utama.
- **Hreflang Configuration:** Tambahkan tag `lang` dinamis (`<html lang="id">` atau `<html lang="en">`) berdasarkan bahasa yang sedang aktif.
- **Core Web Vitals Target:**
  - LCP (Largest Contentful Paint) < 2.5 detik dengan optimasi format `.webp` / `.svg` pada gambar.
  - CLS (Cumulative Layout Shift) mendekati 0 dengan menetapkan aspek rasio tetap pada elemen media.
  - FID/INP < 100ms.

---

### 5.8 Setup Tracking & Analytics
- **Google Search Console (GSC):** Daftarkan domain untuk memantau performa kata kunci pencarian organik.
- **GA4 Conversion Tracking:** Kirim kustom event Google Analytics saat pendaftaran berhasil:
  - Event Name: `trial_booking_submit`
  - Parameters: `program_selected`, `schedule_preference`

---

## 6. Kebutuhan Non-Fungsional

- **Performance:** Skor audit Lighthouse ≥ 90 untuk kategori Performance, SEO, dan Accessibility.
- **Responsiveness:** Tampilan harus optimal untuk perangkat mobile, tablet, dan layar desktop lebar.
- **i18n:** Implementasi teks bilingual yang rapi dan mudah di-switch kapan saja tanpa merusak sesi halaman.

---

*Dokumen ini diperbarui secara berkala sebagai panduan baku pengembangan Black Ant Academy.*
