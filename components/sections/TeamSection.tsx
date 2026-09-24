import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import CloudImage from "@/components/ui/CloudImage";
import SectionLabel from "@/components/ui/SectionLabel";
import TagRow from "@/components/ui/TagRow";
import { TEAM, TEAM_TAGS } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="bg-white py-16 text-black sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading row */}
        <SectionLabel>Meet Our Team</SectionLabel>

        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Behind the
            <br />
            Visionaries
          </h2>

          <div className="lg:pl-10">
            <p className="max-w-md text-lg text-black/70 sm:text-xl">
              Creative experts designing meaningful digital experiences that
              help ambitious brands grow faster and lead their markets.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Join Our Team
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ArrowDownRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Team cards — rounded + zig-zag (1 & 3 neeche, 2 & 4 upar) */}
      <div className="relative mt-10">
        {/* peeche ki halki vertical lines (chahiye na ho to ye div hata do) */}
        <div className="pointer-events-none absolute inset-0 hidden grid-cols-7 lg:grid">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="border-l border-black/10" />
          ))}
        </div>

        <div className="relative z-10 grid w-full grid-cols-2 items-start gap-3 px-3 sm:gap-4 sm:px-4 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <div
              key={member.id}
              className={`group relative aspect-[3/4] w-full overflow-hidden rounded-3xl ${
                i % 2 === 0 ? "mt-10 lg:mt-16" : ""
              }`}
            >
              <CloudImage
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 pt-24 sm:p-6 sm:pt-28">
                <p className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-white/80 sm:text-base">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <TagRow tags={TEAM_TAGS} />
      </div>
    </section>
  );
}