import { Plus } from "lucide-react";
import CloudImage from "@/components/ui/CloudImage";
import ScrollRevealHeading from "@/components/ui/ScrollRevealHeading";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  SOLUTIONS_FEATURES,
  SOLUTIONS_HEADING,
  SOLUTIONS_IMAGE,
  TESTIMONIAL,
} from "@/data/solutions";

export default function OurSolutionsSection() {
  return (
    <section className="relative bg-white text-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — full-height image */}
        <div className="relative h-[420px] w-full sm:h-[560px] lg:h-[860px]">
          <CloudImage
            src={SOLUTIONS_IMAGE}
            alt="City street at night"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale"
          />
        </div>

        {/* Right — content */}
        <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <button className="absolute right-6 top-6 hidden items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold sm:right-10 sm:top-10 lg:flex">
            MENU
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>

          <SectionLabel>Our Solutions</SectionLabel>

          <ScrollRevealHeading
            text={SOLUTIONS_HEADING}
            className="mt-6 max-w-xl text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl"
          />

          {/* Feature grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-black/10 pt-10 sm:grid-cols-2">
            {SOLUTIONS_FEATURES.map((feature, i) => (
              <div
                key={feature}
                className={`flex items-start gap-3 ${
                  i % 2 === 1 ? "sm:border-l sm:border-black/10 sm:pl-10" : ""
                }`}
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/30">
                  <Plus className="h-3.5 w-3.5" />
                </span>
                <p className="text-base font-medium leading-snug sm:text-lg">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 flex items-start gap-4 border-t border-black/10 pt-10">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <CloudImage
                src={TESTIMONIAL.image}
                alt={TESTIMONIAL.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="max-w-lg text-base leading-relaxed text-black/80 sm:text-lg">
                &ldquo;{TESTIMONIAL.quote}&rdquo;
              </p>
              <p className="mt-4 text-lg font-bold">{TESTIMONIAL.name}</p>
              <p className="text-sm text-black/50">{TESTIMONIAL.role}</p>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10" />
    </section>
  );
}
