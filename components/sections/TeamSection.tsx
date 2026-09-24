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

      {/* Team grid — full-bleed, no left/right space */}
      <div className="mt-10 grid w-full grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member) => (
          <div key={member.id} className="group relative aspect-[3/4] w-full overflow-hidden">
            <CloudImage
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition group-hover:bg-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
              <p className="text-xl font-bold text-white sm:text-2xl">{member.name}</p>
              <p className="text-sm text-white/70 sm:text-base">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tags row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <TagRow tags={TEAM_TAGS} />
      </div>
    </section>
  );
}
