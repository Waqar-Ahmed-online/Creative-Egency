import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollRevealHeading from "@/components/ui/ScrollRevealHeading";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import SectionLabel from "@/components/ui/SectionLabel";
import TagRow from "@/components/ui/TagRow";
import { CASE_HEADING, CASE_STUDIES, CASE_TAGS } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#f2f2f2] py-16 text-black sm:py-24">
      {/* Heading — normal container padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionLabel>Case Studies</SectionLabel>

        <div className="mt-4 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <ScrollRevealHeading
            text={CASE_HEADING}
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          />

          <Link
            href="#"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Get A Free Quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Cards grid — full-bleed, no left/right space at all */}
      <div className="mt-10 grid w-full grid-cols-1 sm:grid-cols-2">
        {CASE_STUDIES.map((item) => (
          <CaseStudyCard key={item.id} item={item} />
        ))}
      </div>

      {/* Tags row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <TagRow tags={CASE_TAGS} />

        <div className="flex justify-end">
          <ScrollToTopButton className="mt-10" />
        </div>
      </div>
    </section>
  );
}
