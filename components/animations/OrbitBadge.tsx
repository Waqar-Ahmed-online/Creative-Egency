"use client";

import { ReactNode } from "react";

interface OrbitBadgeProps {
  icon: ReactNode;
  angle: number;
  radius: number;
  duration: number;
}

export default function OrbitBadge({ icon, angle, radius, duration }: OrbitBadgeProps) {
  const delay = -(angle / 360) * duration;

  return (
    <div
      className="absolute left-1/2 top-1/2 h-0 w-0"
      style={{
        animation: `orbit-rotate ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="absolute"
        style={{ transform: `translateX(clamp(110px, 38vw, ${radius}px))` }}
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white shadow-xl shadow-black/30 sm:h-14 sm:w-14 sm:rounded-2xl md:h-16 md:w-16"
          style={{
            animation: `orbit-counter ${duration}s linear infinite, wobble 3.5s ease-in-out infinite`,
            animationDelay: `${delay}s, 0s`,
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}