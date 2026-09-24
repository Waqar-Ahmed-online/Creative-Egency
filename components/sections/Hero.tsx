import OrbitBadge from "@/components/animations/OrbitBadge";
import SpinLogo from "@/components/animations/SpinLogo";
import AvatarGroup from "@/components/ui/AvatarGroup";
import BracketBox from "@/components/ui/BracketBox";
import { HERO, ORBIT_BADGES, ORBIT_DURATION, ORBIT_RADIUS } from "@/data/hero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-40 pt-12 sm:pb-56 sm:pt-16">
      {/* orbit stage - full width, sirf yahan clip hota hai (top/bottom) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/20 sm:h-[600px] sm:w-[600px] md:h-[760px] md:w-[760px] lg:h-[880px] lg:w-[880px]" />

      <div className="hidden lg:block">
        {ORBIT_BADGES.map(({ id, icon: Icon, angle }) => (
          <OrbitBadge
            key={id}
            icon={<Icon className="h-6 w-6" />}
            angle={angle}
            radius={ORBIT_RADIUS}
            duration={ORBIT_DURATION}
          />
        ))}
      </div>

      {/* text content - chhoti width, center mein */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <AvatarGroup />

        <h1 className="text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {HERO.titleLines[0]}
          <br />
          {HERO.titleLines[1]}
        </h1>

        <p className="mt-4 max-w-xl px-2 text-sm text-black/60 sm:mt-6 sm:text-base lg:text-lg">
          {HERO.description}
        </p>

        <div className="mt-8 sm:mt-10">
          <BracketBox>
            <span className="text-xs font-semibold tracking-wide sm:text-sm">
              {HERO.badge}
            </span>
          </BracketBox>
        </div>
      </div>

      <div className="relative z-10 mt-12 flex h-[30px] justify-center sm:mt-16">
        <SpinLogo />
      </div>
    </section>
  );
}
