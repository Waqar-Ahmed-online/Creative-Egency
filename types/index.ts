import type { LucideIcon } from "lucide-react";

/* ---------- What We Do ---------- */
export type ServiceIconKey =
  | "bowtie"
  | "dotCluster"
  | "sparkle"
  | "checker"
  | "burst";

export interface Service {
  id: string;
  number: string;
  title: string;
  heading: string;
  bullets: string[];
  /** Cloudinary public ID ya full URL (data/images.ts se aata hai) */
  image: string;
  icon: ServiceIconKey;
}

/* ---------- Case Studies ---------- */
export interface CaseStudy {
  id: string;
  tag: string;
  headline: string;
  subtext: string;
  name: string;
  image: string;
}

/* ---------- Team ---------- */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

/* ---------- Pricing ---------- */
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  cta: string;
  popular: boolean;
  features: string[];
}

/* ---------- Process ---------- */
export interface WorkStep {
  id: string;
  title: string;
  offset: number;
  dates: string[];
  tasks: string[];
}

export interface GrowthStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

/* ---------- Misc ---------- */
export interface Stat {
  value: string;
  label: string;
}

export interface Logo {
  name: string;
  icon: LucideIcon;
}

export interface OrbitBadgeConfig {
  id: string;
  icon: LucideIcon;
  angle: number;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

/* ---------- Contact form (MongoDB) ---------- */
export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}
/* ---------- Get Started form ---------- */
export interface GetStartedPayload {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}