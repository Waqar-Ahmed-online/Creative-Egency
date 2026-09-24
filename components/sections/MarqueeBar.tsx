import { Sparkle, LayoutGrid } from "lucide-react";
import { MARQUEE_ITEMS } from "@/data/marquee";

export default function MarqueeBar() {
  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden bg-black py-6 text-white sm:py-8">
      <div
        className="flex w-max items-center gap-10 whitespace-nowrap sm:gap-16"
        style={{ animation: "marquee-scroll 22s linear infinite" }}
      >
        {track.map((label, i) => (
          <div key={i} className="flex items-center gap-10 sm:gap-16">
            <span className="text-xl font-semibold sm:text-2xl md:text-3xl">
              {label}
            </span>
            <Sparkle className="h-6 w-6 shrink-0 fill-white sm:h-8 sm:w-8" />
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
