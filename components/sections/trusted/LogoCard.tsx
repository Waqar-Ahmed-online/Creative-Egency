"use client";

import { useEffect, useState } from "react";
import type { Logo } from "@/types";

interface LogoCardProps {
  logos: Logo[];
  intervalMs: number;
}

export default function LogoCard({ logos, intervalMs }: LogoCardProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [logos.length, intervalMs]);

  const Current = logos[index];

  return (
    <div className="flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white sm:h-28">
      <div key={index} className="flex items-center gap-2 animate-[slideUp_0.5s_ease]">
        <Current.icon className="h-5 w-5 shrink-0" />
        <span className="text-base font-semibold sm:text-lg">{Current.name}</span>
      </div>
    </div>
  );
}
