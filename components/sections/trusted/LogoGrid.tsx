"use client";

import { CARD_INTERVALS, LOGO_POOL } from "@/data/trusted";
import LogoCard from "./LogoCard";
import StatCard from "./StatCard";

export default function LogoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {CARD_INTERVALS.map((ms, i) => (
        <LogoCard key={i} logos={LOGO_POOL} intervalMs={ms} />
      ))}
      <StatCard />
    </div>
  );
}
