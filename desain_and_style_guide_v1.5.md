# Design & Style Guide
## Black Ant Academy MMA — Website Multi-Page

**Versi:** 1.1 (update: menambahkan sistem Light/Dark Mode)
**Tanggal:** 11 Juli 2026
**Status warna/logo:** ⚠️ **PROVISIONAL** — palet di dokumen ini adalah rekomendasi awal berbasis riset brand & tema "Black Ant" + MMA. Segera setelah logo & warna resmi dikirim klien, ganti nilai token warna di §3 tanpa mengubah struktur/komponen lain.
**Theming:** Website mendukung **Dark Mode (default)** dan **Light Mode**, dengan toggle switch di navbar. Semua token warna disiapkan dalam 2 varian (lihat §3).

---

## 1. Brand Foundation

### 1.1 Positioning
Black Ant Academy adalah akademi beladiri & kebugaran di Sidoarjo yang mengajarkan **Wushu, Muay Thai, Boxing, Kickboxing, MMA, BJJ, Sanda, dan Functional Training**. Dibanding gym generik, positioning-nya: tempat latihan yang **serius secara teknik namun ramah untuk pemula**, dibina langsung oleh praktisi Wushu/Sanda berpengalaman (Gunawan Sutrisno Putra) bersama Umi Khilmi.

### 1.2 Konsep "Black Ant"
Semut hitam — kecil, tapi:
- **Disiplin** — bekerja dalam sistem/koloni yang terstruktur
- **Kuat** — mampu mengangkat berkali-kali lipat berat tubuhnya (metafora: latihan keras membentuk kekuatan melebihi ukuran)
- **Gigih & tak kenal lelah**
- **Soliditas tim** — koloni = komunitas member yang saling mendukung

Tone of voice ini dipakai di seluruh copywriting: bukan cuma "gym", tapi **akademi tempat membentuk mental & fisik lewat kerja keras yang konsisten.**

### 1.3 Tone of Voice
| Aspek | Arahan |
|---|---|
| Bahasa | Tegas, memotivasi, langsung to the point — bukan sales-y berlebihan |
| Emosi | Percaya diri, membumi (relatable untuk pemula), bukan intimidatif |
| Contoh headline | "Kecil Bukan Berarti Lemah." / "Disiplin Membentuk Petarung Sejati." |
| Hindari | Klise berlebihan ("No Pain No Gain" tanpa konteks), bahasa terlalu formal/korporat |

### 1.4 Perbedaan dari Referensi (Anderson's Martial Arts)
Referensi dipakai untuk **struktur & pola konversi**, bukan ditiru identik. Improvement yang diterapkan:
- Nuansa lebih "gelap & gritty" (khas gym combat sport lokal) dibanding referensi yang cenderung korporat-NYC
- Aksen warna merah lebih berani sebagai simbol energi/agresi terkontrol
- Tambahan elemen "koloni/network" sebagai motif visual halus (garis heksagonal/pola titik menyerupai jalur semut) — bukan literal, tapi sebagai texture background yang subtle
- Micro-interaction lebih hidup (motion) dibanding referensi yang cenderung statis

---

## 2. Logo & Brand Assets

### 2.1 Status
Logo resmi **akan dikirim menyusul oleh klien**. Sebelum diterima:
- Gunakan wordmark sementara: **"BLACK ANT ACADEMY"** dengan tipografi bold custom (lihat §4) + ikon semut minimalis/geometris sebagai placeholder mark
- Struktur navbar & footer disiapkan dengan slot logo (`<Logo />` component) yang tinggal di-swap asetnya

### 2.2 Panduan Setelah Logo Diterima
- Ekstrak 2-3 warna dominan dari logo → update CSS variables di §3.1
- Sediakan logo versi: full color (di atas background gelap), monochrome putih (untuk footer/dark section), monochrome hitam (jika perlu di section terang)
- Favicon & app icon di-generate dari mark/simbol logo (bukan wordmark penuh)
- Clear space minimum di sekitar logo: tinggi huruf "A" pada wordmark

---

## 3. Color System — Dual Theme (Dark & Light)

Website mendukung **dua mode tampilan**: **Dark Mode** (default, sesuai vibe combat sport) dan **Light Mode** (untuk kenyamanan baca di siang hari/preferensi user). Implementasi menggunakan CSS variables + class strategy (`next-themes`), bukan dua desain terpisah — struktur komponen tetap satu, hanya token warna yang berubah sesuai mode aktif.

### 3.1 Mekanisme Teknis
- Library: **`next-themes`** (kompatibel penuh dengan Next.js App Router & Tailwind `dark:` variant)
- Strategi: `class` — root `<html>` mendapat class `dark` atau tidak (light = default tanpa class, atau eksplisit class `light`)
- Preferensi tersimpan di `localStorage`, dengan fallback awal mengikuti `prefers-color-scheme` sistem operasi user, **namun default aplikasi tetap Dark Mode** jika user belum pernah memilih (`defaultTheme="dark"`, bukan `"system"`, agar brand identity pertama kali dilihat tetap dark/gritty sesuai positioning)
- Semua token warna didefinisikan sebagai CSS variable di `:root` (light) dan `.dark` (dark), lalu di-mapping ke Tailwind theme (`tailwind.config` → `colors: { background: 'var(--color-background)', ... }`) sehingga class seperti `bg-background text-foreground` otomatis ikut mode aktif tanpa perlu tulis `dark:` di tiap elemen satu-satu
- Toggle switch: komponen `<ThemeToggle />` di navbar (ikon Sun/Moon dari lucide-react, animasi crossfade via Motion saat switch), juga tersedia di footer (opsional)
- Transisi antar mode: tambahkan `transition-colors duration-300` di `<body>` agar perpindahan warna terasa smooth, bukan "kedip" tiba-tiba

### 3.2 Token Warna — Dark Mode (Default)

| Token | Hex | Peran |
|---|---|---|
| `--color-background` | `#0A0A0B` | Background utama (hitam pekat, bukan pure black agar tidak "flat") |
| `--color-surface` | `#151517` | Card, section alternatif |
| `--color-surface-elevated` | `#1F1F22` | Modal, dropdown, elemen mengambang |
| `--color-primary` | `#E31B23` | Merah utama — CTA, aksen, highlight (energi/agresi terkontrol) |
| `--color-primary-hover` | `#FF2A32` | Hover state tombol primary |
| `--color-primary-muted` | `#3D0F11` | Background tag/badge merah redup |
| `--color-foreground` | `#F5F5F4` | Teks utama di atas background gelap |
| `--color-muted-foreground` | `#A1A1AA` | Teks sekunder/deskripsi |
| `--color-border` | `#2A2A2E` | Border card, divider |
| `--color-accent-gold` | `#C9A227` | Aksen premium (badge "Paling Populer", rating bintang, elemen legacy) |
| `--color-success` | `#22C55E` | Status form berhasil |
| `--color-danger` | `#EF4444` | Error validasi form |

> Kontras `--color-foreground` di atas `--color-background` ≈ **18:1** (jauh di atas WCAG AA).

### 3.3 Token Warna — Light Mode

| Token | Hex | Peran |
|---|---|---|
| `--color-background` | `#FAFAF9` | Background utama (off-white, bukan pure white agar tidak menyilaukan) |
| `--color-surface` | `#FFFFFF` | Card, section alternatif |
| `--color-surface-elevated` | `#F0F0EF` | Modal, dropdown, elemen mengambang |
| `--color-primary` | `#C41118` | Merah utama — sedikit lebih gelap/pekat dari versi dark agar kontras tetap terjaga di atas background terang |
| `--color-primary-hover` | `#A50E14` | Hover state tombol primary (lebih gelap saat hover, kebalikan dari dark mode) |
| `--color-primary-muted` | `#FBE4E5` | Background tag/badge merah redup (versi terang) |
| `--color-foreground` | `#0F0F10` | Teks utama di atas background terang (hampir hitam, bukan pure black) |
| `--color-muted-foreground` | `#52525B` | Teks sekunder/deskripsi |
| `--color-border` | `#E4E4E7` | Border card, divider |
| `--color-accent-gold` | `#9C7A1A` | Aksen premium — sedikit lebih gelap dari versi dark agar tetap terbaca di atas putih |
| `--color-success` | `#16A34A` | Status form berhasil |
| `--color-danger` | `#DC2626` | Error validasi form |

> Kontras `--color-foreground` di atas `--color-background` ≈ **17:1**. `--color-primary` versi light sengaja dibuat lebih gelap (bukan sekadar dibalik) karena merah terang (`#E31B23`) di atas background putih kontrasnya turun signifikan untuk teks kecil — prinsip: **jangan invert warna secara mentah antar mode, sesuaikan lightness-nya agar kontras tetap lolos AA di kedua mode.**

### 3.4 Referensi Implementasi CSS Variables
```css
:root {
  --color-background: #FAFAF9;
  --color-surface: #FFFFFF;
  --color-primary: #C41118;
  --color-foreground: #0F0F10;
  /* ...token light lainnya */
}

.dark {
  --color-background: #0A0A0B;
  --color-surface: #151517;
  --color-primary: #E31B23;
  --color-foreground: #F5F5F4;
  /* ...token dark lainnya */
}
```

### 3.5 Prinsip Penggunaan Warna (berlaku di kedua mode)
- **80% Background/Surface** (gelap di dark mode, off-white di light mode) — dominan, memberi kesan serius & premium di kedua mode
- **15% Merah** — CTA, aksen, hover, ikon aktif, garis highlight di judul section
- **5% Gold** — sangat terbatas, hanya untuk elemen "prestise" (badge populer, rating, quote testimoni)
- Hindari menggunakan merah untuk block besar (background section penuh) di mode manapun — gunakan sebagai aksen garis/tombol/gradient tipis di edge foto
- **Foto & video** tetap menggunakan treatment yang sama di kedua mode (lihat §8) — overlay gradient di atas foto disesuaikan opacity-nya agar tetap kontras baik di light maupun dark surface

### 3.6 Elemen yang Perlu Perhatian Khusus Saat Switch Mode
| Elemen | Catatan |
|---|---|
| Foto hero dengan overlay gradient | Gradient overlay di dark mode: hitam→transparan. Di light mode: tetap pakai gradient gelap tipis di bagian bawah foto (bukan putih) karena teks di atas foto tetap putih di kedua mode — hanya section di luar foto yang berubah |
| Logo | Siapkan 2 versi logo (full color untuk kedua mode bila kontras cukup, atau monochrome putih untuk dark / monochrome gelap untuk light) — lihat §2.2 |
| Shadow/elevation pada card | Dark mode: gunakan glow/border merah tipis untuk elevasi (shadow hitam tidak terlihat di background gelap). Light mode: gunakan `box-shadow` abu-abu lembut standar |
| Kode/ikon sosial media | Pastikan ikon (lucide-react, `currentColor`) otomatis ikut `--color-foreground`, jangan hardcode warna |
| Map (react-leaflet) | Sediakan 2 tile style: dark tile (mis. CARTO Dark Matter) untuk dark mode, default OSM/light tile untuk light mode, agar peta tidak "menyilaukan" di tengah UI gelap |

---

## 4. Typography

### 4.1 Font Pairing
| Peran | Font | Alasan |
|---|---|---|
| Heading/Display | **Anton** atau **Bebas Neue** (Google Fonts) | Bold, condensed, karakter "combat poster" — cocok untuk headline besar |
| Body/UI | **Plus Jakarta Sans** atau **Inter** | Netral, sangat legible untuk ID & EN, banyak font-weight tersedia |
| Aksen (opsional, quotes/testimoni) | **Anton italic-style / atau tetap pakai body font miring** | Testimoni & quote tetap pakai body font agar tidak terlalu "berisik" |

### 4.2 Type Scale (Tailwind-friendly, rem-based)
| Level | Ukuran (desktop) | Ukuran (mobile) | Font | Penggunaan |
|---|---|---|---|---|
| Display XL | 72px / 1.05 | 40px / 1.1 | Anton | Hero headline |
| Display L | 48px | 32px | Anton | Judul section besar |
| Heading 1 | 36px | 28px | Anton | Judul halaman (H1 non-hero) |
| Heading 2 | 28px | 22px | Anton | Sub-section |
| Heading 3 | 20px | 18px | Plus Jakarta Sans (Bold) | Card title, coach name |
| Body Large | 18px | 16px | Plus Jakarta Sans | Sub-headline, lead paragraph |
| Body | 16px | 15px | Plus Jakarta Sans | Paragraf umum |
| Small/Caption | 14px | 13px | Plus Jakarta Sans | Label, meta info, badge |

### 4.3 Aturan Penggunaan
- Heading (Anton) selalu **UPPERCASE** dengan letter-spacing sedikit lebar (0.5-1px) untuk kesan poster/gym
- Line-height heading: 1.0–1.15 (rapat, bold, punchy)
- Body text: line-height 1.6 untuk keterbacaan paragraf panjang (About, Blog)
- Jangan pernah pakai Anton untuk paragraf panjang — hanya untuk headline/label pendek

---

## 5. Spacing, Grid & Layout

### 5.1 Spacing Scale
Gunakan skala Tailwind default (4px base): `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Section padding:
- Mobile: `py-16` (64px)
- Desktop: `py-24` hingga `py-32` (96–128px) untuk section besar seperti Hero, CTA akhir

### 5.2 Grid Sistem
- Container max-width: `1280px` (desktop), padding horizontal `24px` (mobile) / `48-64px` (desktop)
- Grid program/coach card: 1 kolom (mobile) → 2 kolom (tablet, `md`) → 3 kolom (desktop, `lg`)
- Grid pricing: 1 kolom (mobile) → 3 kolom sejajar (desktop), paket "populer" sedikit lebih besar/elevated (scale 1.05, border gold)

### 5.3 Border Radius
- Card & tombol: `rounded-xl` (12px) — cukup tegas tapi tidak terlalu soft/playful (bukan `rounded-full` berlebihan, kecuali badge/avatar)
- Badge/Tag: `rounded-full`
- Image: `rounded-lg` (8px), kecuali hero image bisa full-bleed tanpa radius

---

## 6. Komponen (berbasis shadcn/ui + kustomisasi tema)

### 6.1 Button
| Varian | Style |
|---|---|
| Primary | Background `--color-primary`, teks putih, hover ke `--color-primary-hover`, subtle scale(1.02) on hover via motion |
| Secondary/Outline | Border `--color-border`, teks putih, hover: border jadi merah |
| Ghost | Transparan, dipakai di navbar/link sekunder |
| Ukuran | `sm` (badge/inline), `default`, `lg` (CTA hero — padding besar, font-weight bold) |

### 6.2 Card (Program, Coach, Blog, Pricing)
- Background `--color-surface`, border tipis `--color-border`, hover: border berubah merah + slight lift (translateY -4px, shadow merah tipis via motion)
- Gambar di atas (aspect-ratio 4:3 untuk program/coach, 16:9 untuk blog)
- Padding internal: 24px

### 6.3 Badge/Tag
- Dipakai untuk kategori program (Striking/Grappling/Fitness), level (Pemula/Lanjutan), status ("Paling Populer")
- Style: `bg-primary-muted text-primary` untuk tag kategori; `bg-accent-gold/20 text-accent-gold` untuk badge "Populer"

### 6.4 Form Elements (Trial Class, Contact)
- Input/Select/Textarea: background `--color-surface-elevated`, border `--color-border`, focus ring merah (`ring-primary`)
- Label di atas input, ukuran small, warna `--color-muted-foreground`
- Error state: border merah error + teks kecil di bawah input (via react-hook-form + zod)
- Success state setelah submit: full-screen atau inline confirmation dengan ikon centang + pesan "Kami akan menghubungi Anda via WhatsApp"

### 6.5 Navbar
- Sticky, background blur (backdrop-blur) saat scroll di atas hero
- Logo kiri, menu tengah/kanan, `<ThemeToggle />` (ikon Sun/Moon) + CTA button kanan (selalu merah, paling menonjol)
- Mobile: hamburger → shadcn `Sheet` slide dari kanan, full menu + ThemeToggle + CTA + social icons

### 6.6 Footer
- Background lebih gelap dari body (`--color-surface` atau lebih pekat)
- 4 kolom (desktop): Brand+tagline, Quick Links, Programs, Contact&Social → jadi accordion/stack di mobile

### 6.7 Carousel (Testimonials, Gallery preview, Logo/media strip)
- `embla-carousel` via shadcn Carousel, autoplay untuk testimoni (pause on hover/interaction), swipeable di mobile

---

## 7. Iconography

- Library: **lucide-react** (konsisten, ringan, stroke-based cocok dengan estetika bold minimalis)
- Ikon disiplin beladiri bisa direpresentasikan dengan: `Swords` (Muay Thai/MMA), `Hand` atau custom glove icon (Boxing), `Shield` (Self-defense/BJJ), `Dumbbell` (Functional Training), `Users` (kelas grup/kids)
- Ukuran standar: 20px (inline), 24px (card), 32-40px (feature highlight)
- Warna ikon: default `--color-foreground`, ikon aktif/hover: `--color-primary`

---

## 8. Gaya Fotografi & Imagery

### 8.1 Arahan Visual (untuk placeholder & foto asli nanti)
- **High contrast, sedikit desaturasi**, dengan overlay gradient hitam→transparan di bagian bawah foto hero (agar teks tetap terbaca)
- Foto aksi (sparring, pukulan, tendangan) lebih diutamakan daripada foto pose statis — memberi kesan energi & keseruan latihan
- Hindari foto stok yang terlalu "generic gym bule korporat" — jika pakai placeholder sementara, cari foto MMA/Muay Thai gym yang natural, pencahayaan gym asli (bukan studio putih bersih)
- Untuk foto pelatih: background gelap solid/gym environment, pencahayaan dramatis (side-light), ekspresi percaya diri

### 8.2 Treatment Konsisten
- Semua foto full-color (bukan grayscale penuh) tapi dengan grading agak gelap/moody agar konsisten dengan tema dark UI
- Overlay merah tipis (5-10% opacity) opsional di foto hero untuk menyatukan dengan brand color

### 8.3 Video
- Hero bisa pakai background video loop (latihan/sparring, muted, subtitle jika ada dialog) — fallback ke image jika koneksi lambat (`prefers-reduced-motion` & save-data considerations)

---

## 9. Motion & Animasi (menggunakan **Motion**/Framer Motion)

### 9.1 Prinsip
- Motion mendukung *urgency & energi* tapi tidak mengganggu performa/keterbacaan
- Selalu hormati `prefers-reduced-motion` — matikan animasi non-esensial untuk user yang mengaktifkan setting ini

### 9.2 Pola Animasi Standar
| Elemen | Animasi |
|---|---|
| Section masuk viewport | Fade-up (opacity 0→1, translateY 24px→0), stagger antar child ~0.08s, trigger sekali (`whileInView`, `viewport={{ once: true }}`) |
| Hero headline | Fade-up + slight delay bertahap per baris teks |
| Card hover (Program/Coach) | translateY -4px, border color transition ke merah, shadow merah tipis muncul |
| Tombol CTA hover | Scale 1.02–1.03, transisi warna background |
| Counter statistik | Count-up angka saat masuk viewport (mis. "10+ Tahun", "500+ Member") |
| Navbar scroll | Background transisi dari transparan → blur/solid saat scroll > 50px |
| Theme toggle (Sun/Moon) | Crossfade + rotate icon (~300ms) saat berpindah mode, seluruh background/surface bertransisi warna via `transition-colors duration-300` agar tidak "kedip" |
| Page/route transition | Fade sederhana antar halaman (opsional, jangan berlebihan agar tidak menghambat navigasi cepat) |
| Mobile menu (Sheet) | Slide-in dari kanan dengan easing standar shadcn |

### 9.3 Durasi & Easing
- Durasi umum: 200–400ms untuk micro-interaction, 500–700ms untuk section reveal
- Easing: `easeOut` untuk masuk, `easeInOut` untuk hover/loop

---

## 10. Layout Pattern per Jenis Section

Section-section berikut menjadi "blok Lego" yang dipakai berulang di berbagai halaman (Home, Programs, dsb.), konsisten dengan pola referensi namun dengan gaya visual §1–9:

1. **Hero** — Full-bleed image/video background + overlay gradient, headline besar (Anton), sub-headline, 2 CTA, indikator scroll di bawah
2. **Stats Strip** — 3-4 angka besar sejajar horizontal (desktop) / grid 2x2 (mobile), dengan count-up animation
3. **Problem vs Solution** — 2 kolom sejajar (list "masalah gym biasa" dengan ikon X merah muted vs "solusi kami" dengan ikon check hijau/merah brand), background surface sedikit beda dari body
4. **Intro/About Ringkas** — Foto besar di satu sisi, teks + CTA di sisi lain (alternating layout di halaman berbeda agar tidak monoton)
5. **Grid Kartu (Program/Coach/Blog)** — Grid responsif dengan hover lift, header section pakai eyebrow text kecil (uppercase, merah) + judul besar
6. **Pricing Cards** — 3 kolom, kartu tengah/populer sedikit elevated dengan border gold
7. **Testimonial Carousel** — Background surface gelap berbeda, quote besar dengan tanda kutip custom, foto bulat + nama + role
8. **CTA Banner Besar** — Full-width, background merah gelap/gradient merah-hitam, headline singkat + 1 tombol besar (dipakai sebelum footer)
9. **Map + Contact Info** — 2 kolom: form/info kiri, peta react-leaflet kanan (atau stack di mobile)
10. **Footer** — 4 kolom → accordion di mobile

---

## 11. Responsive Behavior

| Breakpoint | Lebar | Perilaku Utama |
|---|---|---|
| Mobile | < 768px | 1 kolom, navbar hamburger, tabel jadwal → accordion per hari, pricing card stack vertikal |
| Tablet | 768–1024px | 2 kolom grid untuk card, navbar mulai tampilkan menu horizontal ringkas |
| Desktop | > 1024px | Grid penuh (3 kolom), navbar penuh dengan dropdown, hero headline full size |
| Large Desktop | > 1440px | Container tetap max-width 1280px, tambahan whitespace di sisi kiri-kanan |

---

## 12. Aksesibilitas

- Kontras teks minimum AA (4.5:1 untuk body, 3:1 untuk teks besar/heading) — **dicek terpisah di kedua mode** (dark & light), karena token warna tidak sekadar dibalik (lihat §3.3)
- Semua interactive element (button, link, input) punya focus state terlihat jelas (ring merah 2px), kontras ring tetap terjaga di kedua mode
- Alt text deskriptif untuk semua gambar (bukan generic "image1.jpg")
- Form: label terhubung eksplisit ke input (`htmlFor`/`id`), error message terhubung via `aria-describedby`
- Video hero: tidak autoplay dengan suara; ada toggle mute/pause jika ada kontrol
- Theme toggle: harus dapat diakses via keyboard (focusable, `aria-label="Toggle theme"`, `aria-pressed` sesuai state aktif)
- Hormati `prefers-reduced-motion` untuk transisi warna & animasi lain saat ganti mode

---

## 13. Do's and Don'ts

### ✅ Do
- Gunakan merah sebagai *aksen tajam*, bukan warna dominan
- Jaga heading tetap pendek, tegas, uppercase untuk kesan "poster gym"
- Konsisten gunakan foto/video bernuansa gelap-dramatis di semua halaman
- Gunakan whitespace generous di antara section agar tidak terasa sesak meski tema gelap

### ❌ Don't
- Jangan pakai gradient warna-warni/neon berlebihan — brand ini serius & grounded, bukan gym anak muda EDM-style
- Jangan gunakan foto stok gym barat yang terlalu bersih/corporate — kontras dengan positioning "akademi combat sport lokal yang membumi"
- Jangan overload animasi di setiap elemen kecil — pilih momen yang bermakna (masuk section, hover card, CTA)
- Jangan gunakan Anton untuk teks panjang — akan sulit dibaca

---

## 14. Checklist Sebelum Implementasi Final

- [ ] Terima logo resmi & update token warna di §3.2 dan §3.3 (dark & light)
- [ ] Terima minimal 10-15 foto asli berkualitas tinggi (hero, program, coach, fasilitas)
- [ ] Konfirmasi apakah butuh Kids Class sebagai program tambahan (mempengaruhi gaya foto — perlu nuansa lebih ramah/cerah untuk section ini)
- [ ] Uji kontras warna final dengan tool (mis. WebAIM Contrast Checker) **di kedua mode** setelah warna resmi diterapkan
- [ ] Uji manual seluruh halaman dalam Light Mode & Dark Mode (termasuk state hover, focus, error form) — pastikan tidak ada elemen "invisible" karena warna hardcode
- [ ] Siapkan 2 tile style peta (dark & light) untuk react-leaflet
- [ ] Review tone of voice copywriting bersama owner (Gunawan & Umi) agar sesuai kepribadian brand asli

---

*Dokumen ini saling melengkapi dengan `SRS.md`. Style guide ini adalah "bahasa visual" — SRS adalah "bahasa fungsional". Update salah satu dokumen (mis. saat logo diterima) sebaiknya di-review ulang dampaknya ke dokumen lainnya.*
