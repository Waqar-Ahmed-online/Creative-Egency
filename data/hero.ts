import { ArrowUpRight, Feather, LayoutGrid, Sparkles } from "lucide-react";
import type { OrbitBadgeConfig } from "@/types";

export const HERO = {
  titleLines: ["Building Brands", "That Matter"],
  description:
    "We are a forward-thinking digital agency dedicated to transforming ideas into powerful brands and experiences.",
  badge: "COMING SOON",
  users: { count: "2000+", label: "BUSINESS USERS" },
};

export const ORBIT_RADIUS = 420;
export const ORBIT_DURATION = 24;

export const ORBIT_BADGES: OrbitBadgeConfig[] = [
  { id: "arrow", icon: ArrowUpRight, angle: 45 },
  { id: "feather", icon: Feather, angle: 135 },
  { id: "sparkles", icon: Sparkles, angle: 225 },
  { id: "grid", icon: LayoutGrid, angle: 315 },
];
