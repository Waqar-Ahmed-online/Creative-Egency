"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

interface ScrollRevealHeadingProps {
  text: string;
  className?: string;
}

export default function ScrollRevealHeading({
  text,
  className = "",
}: ScrollRevealHeadingProps) {
  const { ref, progress } = useScrollProgress<HTMLHeadingElement>();
  const words = text.split(" ");
  const revealedCount = Math.round(progress * words.length);

  return (
    <h2 ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`transition-colors duration-500 ${
            i < revealedCount ? "text-black" : "text-black/25"
          }`}
        >
          {word}{" "}
        </span>
      ))}
    </h2>
  );
}
