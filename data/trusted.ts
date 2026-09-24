import {
  ArrowUpRight,
  Boxes,
  Building2,
  Cloud,
  Hexagon,
  Triangle,
  Waves,
  Zap,
} from "lucide-react";
import type { Logo } from "@/types";

export const TRUSTED_HEADING = "Trusted by fast-growing brands worldwide";

export const LOGO_POOL: Logo[] = [
  { name: "Architect", icon: Building2 },
  { name: "Triangle", icon: Triangle },
  { name: "Techlify", icon: Waves },
  { name: "Cloudly", icon: Cloud },
  { name: "Arrow", icon: ArrowUpRight },
  { name: "Blockly", icon: Hexagon },
  { name: "Bold", icon: Boxes },
  { name: "Sisyphus", icon: Zap },
];

/** Har card ka apna rotate interval (ms) — 10 cards */
export const CARD_INTERVALS = [3000, 3600, 4200, 2600, 3900, 3300, 4500, 2900, 3700, 4100];

export const TRUSTED_STAT = {
  value: "$850M+",
  label: "in total revenue generated for clients",
};
