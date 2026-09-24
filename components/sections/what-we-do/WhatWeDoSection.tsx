"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SERVICES } from "@/data/services";
import ServiceCard from "./ServiceCard";
import ServiceSidebar from "./ServiceSidebar";

const PIN_TOP = 112; // must match lg:top-28 (7rem)
const PIN_HEIGHT = 560; // must match lg:h-[560px]
const STEP_VH = 80; // scroll distance (in vh) for ONE card to slide in
const DWELL_VH = 30; // small pause on the last card before the page continues

/** Desktop pa card ka slide-in + scale effect (progress 0 .. N-1) */
function getCardStyle(index: number, progress: number): React.CSSProperties {
  let translateY = 100;
  let scale = 0.9;

  const p = Math.min(Math.max(progress - index, -1), 1);
  if (p <= 0) {
    const t = p + 1; // 0 → 1 as it enters
    translateY = (1 - t) * 100;
    scale = 0.9 + 0.1 * t;
  } else {
    translateY = 0;
    scale = 1 - 0.1 * p; // shrinks as it becomes "previous"
  }

  return {
    transform: `translateY(${translateY}%) scale(${scale})`,
    zIndex: index + 1,
  };
}

export default function WhatWeDoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0); // continuous 0 .. N-1
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isDesktop) return;

    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        // sticky wrapper sticks when section.top reaches PIN_TOP
        const scrolled = PIN_TOP - section.getBoundingClientRect().top;
        const stepPx = (STEP_VH / 100) * window.innerHeight;
        const raw = scrolled / stepPx;
        const clamped = Math.min(Math.max(raw, 0), SERVICES.length - 1);

        setProgress(clamped);
        setActiveIndex(Math.round(clamped));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [isDesktop]);

  const scrollToIndex = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    if (!isDesktop) {
      document
        .getElementById(SERVICES[index].id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const stepPx = (STEP_VH / 100) * window.innerHeight;
    window.scrollTo({
      top: sectionTop - PIN_TOP + index * stepPx + 1,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white text-[#1d1d1d]">
      {/* ---------- Heading ---------- */}
      <div className="w-full pl-8 pr-5 pb-16 pt-20 sm:pl-12 sm:pt-28 lg:pl-16 lg:pb-32">
        <span className="inline-flex items-center gap-2 text-base font-medium uppercase sm:text-lg">
          What We Do
          <ArrowUpRight className="h-4 w-4" />
        </span>

        <div className="mt-2 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[clamp(2.25rem,4.2vw,5rem)] font-medium leading-[1.2] tracking-[-0.04em] sm:max-w-[76%]">
            We turn ideas into high-impact digital solutions that attract
            customers, boost conversions, and accelerate sustainable growth.
          </h2>

          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#1d1d1d] px-8 py-[18px] text-xl font-medium leading-7 text-white transition hover:bg-black/80 sm:self-auto"
          >
            Get A Free Quote
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ---------- Tall scroll track (gives the pinned scroll distance) ---------- */}
      <div
        ref={sectionRef}
        className="pb-16 sm:pb-24"
        style={
          isDesktop
            ? {
                height: `calc(${PIN_HEIGHT}px + ${
                  (SERVICES.length - 1) * STEP_VH + DWELL_VH
                }vh)`,
                paddingBottom: 0,
              }
            : undefined
        }
      >
        {/* Sticky stage */}
        <div className="w-full pl-8 pr-5 sm:pl-12 sm:pr-[34px] lg:sticky lg:top-28 lg:pl-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[24%_1fr] lg:gap-x-[10%]">
            <ServiceSidebar
              services={SERVICES}
              activeIndex={activeIndex}
              onSelect={scrollToIndex}
            />

            {/* ---------- Card viewport ---------- */}
            <div className="relative lg:h-[560px] lg:overflow-hidden">
              {SERVICES.map((service, i) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  style={isDesktop ? getCardStyle(i, progress) : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
