import type { PricingPlan } from "@/types";

export const PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 1200,
    description:
      "A solid digital foundation focused on clarity, usability, and performance essentials.",
    cta: "Get Started",
    popular: false,
    features: [
      "Digital strategy setup",
      "Digital audit & Insights",
      "Positioning & Messaging",
      "SEO & Technical setup",
      "Analytics tracking",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 2800,
    description:
      "A performance-driven plan to accelerate acquisition and conversion.",
    cta: "Choose Growth",
    popular: true,
    features: [
      "Growth strategy",
      "Conversion optimization",
      "SEO & Content performance",
      "Campaign setup & Reporting",
      "Advance analytics tracking",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: 3600,
    description:
      "A long-term digital partnership for sustainable growth at scale.",
    cta: "Scale Your Business",
    popular: false,
    features: [
      "Full strategy & execution",
      "Dedicated success manager",
      "Advanced SEO & content",
      "Multi-channel campaigns",
      "Custom reporting & insights",
    ],
  },
];

/** Business toggle ma price kitna guna hoga */
export const BUSINESS_MULTIPLIER = 2;
