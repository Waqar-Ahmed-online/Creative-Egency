import type { Testimonial } from "@/types";
import { IMAGES } from "./images";

export const SOLUTIONS_HEADING =
  "Together, we build experiences, relationships, and digital solutions that move brands ahead.";

export const SOLUTIONS_FEATURES = [
  "Strategy-first digital thinking",
  "Human-centered design approach",
  "Scalable & future-ready solutions",
  "Long-term brand partnerships",
];

export const SOLUTIONS_IMAGE = IMAGES.solutions.main;

export const TESTIMONIAL: Testimonial = {
  name: "Hannah Lee",
  role: "Creative Director",
  quote:
    "Orisa completely transformed how we present our brand online. Their strategic mindset and attention to detail resulted in a digital experience that feels both refined and high-performing.",
  image: IMAGES.solutions.testimonial,
};
