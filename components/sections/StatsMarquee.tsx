import { STATS } from "@/data/stats";

export default function StatsMarquee() {
  const track = [...STATS, ...STATS, ...STATS];

  return (
    <div className="relative overflow-hidden bg-[#161616] py-14 text-white sm:py-20">
      <div
        className="flex w-max items-center whitespace-nowrap"
        style={{ animation: "marquee-scroll 28s linear infinite" }}
      >
        {track.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-10 border-r border-white/10 px-10 sm:gap-16 sm:px-16"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-4xl font-black leading-none sm:text-6xl md:text-7xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-white/60 sm:text-sm">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
