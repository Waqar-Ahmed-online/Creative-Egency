"use client";

import Image from "next/image";
import { useScrollRotation } from "@/hooks/useScrollRotation";

export default function SpinLogo() {
  const ref = useScrollRotation<HTMLDivElement>();

  return (
    <div ref={ref} className="h-56 w-56 sm:h-72 sm:w-72 lg:h-[420px] lg:w-[420px]">
      <Image
        src="/logo-icon.png"
        alt="Logo mark"
        width={420}
        height={420}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
