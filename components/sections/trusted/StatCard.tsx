import { TRUSTED_STAT } from "@/data/trusted";

export default function StatCard() {
  return (
    <div className="col-span-2 flex flex-col justify-center gap-1 px-2">
      <span className="text-4xl font-black leading-none text-black sm:text-5xl">
        {TRUSTED_STAT.value}
      </span>
      <span className="text-sm text-black/50 sm:text-base">
        {TRUSTED_STAT.label}
      </span>
    </div>
  );
}
