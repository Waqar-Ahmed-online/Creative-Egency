import Link from "next/link";
import { Plus } from "lucide-react";
import CloudImage from "@/components/ui/CloudImage";
import type { CaseStudy } from "@/types";

export default function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[3/4] md:aspect-[16/11]">
        <CloudImage
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6 sm:p-8">
          <span className="inline-block rounded-full border border-white/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {item.tag}
          </span>
          <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            {item.headline}
          </p>
          <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-500 ease-out group-hover:mt-1 group-hover:max-h-6 group-hover:opacity-100">
            {item.subtext}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white px-6 py-6 sm:px-8">
        <span className="text-xl font-bold sm:text-2xl">{item.name}</span>
        <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold">
          View Case
          <Plus className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
