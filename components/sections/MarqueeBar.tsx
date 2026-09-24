"use client";

import { useEffect, useRef } from "react";
import { Sparkle, LayoutGrid } from "lucide-react";
import { MARQUEE_ITEMS } from "@/data/marquee";

const BASE_SPEED = 25; // px/sec: normal (slow) speed. Aur slow chahiye to kam karo
const SCROLL_BOOST = 0.6; // scroll pe kitna tez ho (zyada = zyada tez)
const MAX_SPEED = 600; // scroll pe speed is se zyada nahi jayegi

const SET = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // aik set (lambi screen bharne ke liye)
const COPIES = 4;

export default function MarqueeBar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let lastScrollY = window.scrollY;
    let x = 0;
    let boost = 0;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // scroll ki speed (px/sec)
      const scrollY = window.scrollY;
      const scrollSpeed = dt > 0 ? Math.abs(scrollY - lastScrollY) / dt : 0;
      lastScrollY = scrollY;

      // smooth: scroll ruke to speed dheere dheere wapas slow ho
      const target = scrollSpeed * SCROLL_BOOST;
      boost += (target - boost) * (1 - Math.exp(-dt * 6));

      const speed = Math.min(BASE_SPEED + boost, MAX_SPEED);
      x += speed * dt;

      const period = setRef.current?.offsetWidth ?? 0;
      if (period > 0) x %= period; // seamless loop

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-x}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black py-6 text-white sm:py-8">
      <div ref={trackRef} className="flex w-max items-center whitespace-nowrap will-change-transform">
        {Array.from({ length: COPIES }).map((_, copy) => (
          <div
            key={copy}
            ref={copy === 0 ? setRef : undefined}
            aria-hidden={copy > 0}
            className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16"
          >
            {SET.map((label, i) => (
              <div key={i} className="flex items-center gap-10 sm:gap-16">
                <span className="text-xl font-semibold sm:text-2xl md:text-3xl">
                  {label}
                </span>
                <Sparkle className="h-6 w-6 shrink-0 fill-white sm:h-8 sm:w-8" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <button className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black sm:right-8 sm:px-5 sm:py-3">
        MENU
        <LayoutGrid className="h-4 w-4" />
      </button>
    </div>
  );
}