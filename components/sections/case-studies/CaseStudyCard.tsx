import Link from "next/link";
import { Plus } from "lucide-react";
import CloudImage from "@/components/ui/CloudImage";
import type { CaseStudy } from "@/types";

export default function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <div className="group">
      {/* Image card */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:aspect-[3/4] md:aspect-[16/11]">
        <CloudImage
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent p-6 pt-32 sm:p-8 sm:pt-40">
          <span className="inline-block rounded-full border border-white/50 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
            {item.tag}
          </span>
          <p className="mt-4 text-3xl font-medium leading-tight tracking-tighter text-white sm:text-4xl lg:text-5xl">
            {item.headline}
          </p>
          <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-500 ease-out group-hover:mt-2 group-hover:max-h-6 group-hover:opacity-100 sm:text-base">
            {item.subtext}
          </p>
        </div>
      </div>

      {/* Caption bar */}
      <div className="mt-3 flex items-center justify-between rounded-2xl bg-white px-6 py-5 sm:mt-4 sm:px-8 sm:py-6">
        <span className="text-2xl font-medium tracking-tight sm:text-3xl">
          {item.name}
        </span>
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide sm:text-sm"
        >
          View Case
          <Plus className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}