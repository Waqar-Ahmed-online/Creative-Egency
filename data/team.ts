import type { TeamMember } from "@/types";
import { IMAGES } from "./images";

export const TEAM: TeamMember[] = [
  {
    id: "darrell",
    name: "Darrell Steward",
    role: "UI/UX Designer",
    image: IMAGES.team.darrell,
  },
  {
    id: "amelia",
    name: "Amelia Courtney",
    role: "Project Manager",
    image: IMAGES.team.amelia,
  },
  {
    id: "esther",
    name: "Esther Howard",
    role: "Software Developer",
    image: IMAGES.team.esther,
  },
  {
    id: "jacob",
    name: "Jacob Jones",
    role: "Marketing CEO",
    image: IMAGES.team.jacob,
  },
];

export const TEAM_TAGS = [
  "Creative minds",
  "Innovation-driven",
  "Discipline-led",
  "Accountability-first",
  "Excellence-focused",
];
