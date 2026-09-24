"use client";

import Image from "next/image";
import { useScrollRotation } from "@/hooks/useScrollRotation";

interface ScrollSpinBadgeProps {
  angle: number;
  radius: number;
}

/* NOTE: abhi kisi page ma use nahi ho raha (Hero ma commented tha) */
export default function ScrollSpinBadge({ angle, radius }: ScrollSpinBadgeProps) {
  const iconRef = useScrollRotation<HTMLDivElement>();

  return (
    <div
      className="absolute left-1/2 top-1/2 h-0 w-0"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div
        className="absolute"
        style={{ transform: `translateX(${radius}px) rotate(${-angle}deg)` }}
      >
        <div ref={iconRef} className="h-14 w-14 drop-shadow-xl sm:h-16 sm:w-16">
          <Image
            src="/logo-icon.png"
            alt="Logo mark"
            width={64}
            height={64}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
