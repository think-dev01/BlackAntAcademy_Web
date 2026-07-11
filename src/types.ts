export interface BilingualText {
  id: string;
  en: string;
}

export interface Program {
  slug: string;
  name: BilingualText;
  shortDesc: BilingualText;
  fullDesc: BilingualText;
  category: "striking" | "grappling" | "fitness";
  level: string[];
  image: string;
  gallery: string[];
  relatedCoaches: string[];
  icon: string;
}

export interface Coach {
  slug: string;
  name: string;
  role: BilingualText;
  specialties: string[];
  bio: BilingualText;
  photo: string;
  yearsExperience: number;
  certifications: string[];
  instagram: string;
}

export interface ScheduleItem {
  day: "senin" | "selasa" | "rabu" | "kamis" | "jumat" | "sabtu" | "minggu";
  time: string;
  programSlug: string;
  coachSlug: string;
  level: string;
}

export interface PricingPlan {
  slug: string;
  name: BilingualText;
  price: number;
  currency: string;
  unit: BilingualText;
  highlight: boolean;
  benefits: BilingualText[];
  ctaLabel: BilingualText;
}

export interface Testimonial {
  name: string;
  role: BilingualText;
  quote: BilingualText;
  photo: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: BilingualText;
  excerpt: BilingualText;
  content: BilingualText;
  date: string;
  category: string;
  image: string;
  author: string;
}
