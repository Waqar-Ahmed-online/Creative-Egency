import { ArrowUpRight } from "lucide-react";

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-black/60">
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </span>
  );
}
