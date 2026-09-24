"use client";

import { useEffect, useRef, useState } from "react";
import CloudImage from "@/components/ui/CloudImage";
import SectionLabel from "@/components/ui/SectionLabel";
import { GROWTH_STEPS } from "@/data/growthProcess";
import { IMAGES } from "@/data/images";

export default function GrowthProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#f2f2f2] text-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left — static */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionLabel>Our Growth Process</SectionLabel>

            <h2 className="mt-4 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              We push boundaries while following a proven methodology.
            </h2>

            <div className="mt-10 flex gap-3">
              {IMAGES.growthAvatars.map((src, i) => (
                <div
                  key={i}
                  className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-20"
                >
                  <CloudImage src={src} alt="" fill sizes="80px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right — stacking cards */}
          <div>
            <span className="text-sm font-medium text-black/60">
              [ Step-by-step implementation ]
            </span>

            <div className="relative mt-6">
              {GROWTH_STEPS.map((step, i) => {
                const isLast = i === GROWTH_STEPS.length - 1;
                const isActive = i === activeIndex;
                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    data-index={i}
                    className={`mb-6 lg:mb-0 lg:sticky ${
                      isLast ? "" : "lg:pb-28 xl:pb-32"
                    }`}
                    style={{ top: `${104 + i * 24}px`, zIndex: i + 1 }}
                  >
                    <div className="rounded-[28px] bg-white p-8 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.25)] sm:p-10">
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold transition-colors duration-300 ${
                          isActive ? "bg-[#e4572e] text-white" : "bg-black/10 text-black"
                        }`}
                      >
                        {step.number}
                      </span>

                      <h3 className="mt-6 text-2xl font-bold sm:text-3xl">{step.title}</h3>
                      <p className="mt-4 max-w-lg text-base text-black/60 sm:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
