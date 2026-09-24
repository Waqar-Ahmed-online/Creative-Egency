import type { CaseStudy } from "@/types";
import { IMAGES } from "./images";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "voidline",
    tag: "INTERACTION",
    headline: "+41% conversion rate",
    subtext: "3D animation & motion branding",
    name: "Voidline",
    image: IMAGES.caseStudies.voidline,
  },
  {
    id: "velora",
    tag: "ART DIRECTION",
    headline: "+72% ROAS in 90 days",
    subtext: "3D animation & motion branding",
    name: "Velora",
    image: IMAGES.caseStudies.velora,
  },
  {
    id: "sorvia",
    tag: "ART DIRECTION",
    headline: "3× qualified leads in 4 months",
    subtext: "Fashion Brand Identity Design",
    name: "Sorvia",
    image: IMAGES.caseStudies.sorvia,
  },
  {
    id: "noirform",
    tag: "EXPERIMENTAL",
    headline: "−38% Cost per acquisition",
    subtext: "Brand art direction & visual identity",
    name: "Noirform",
    image: IMAGES.caseStudies.noirform,
  },
];

export const CASE_TAGS = [
  "Performance-led",
  "Growth-oriented",
  "Insight-powered",
  "Scalable by design",
  "Experience-first",
];

export const CASE_HEADING = "Real Results. Proven Impact.";
