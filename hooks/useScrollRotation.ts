"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll delta ke hisab se element ko rotate karta ha
 * (fast scroll = fast spin). Ref ko element pa lagao.
 */
export function useScrollRotation<T extends HTMLElement>(speed = 0.8) {
  const ref = useRef<T>(null);
  const rotation = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      rotation.current += delta * speed;

      if (ref.current) {
        ref.current.style.transform = `rotate(${rotation.current}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
