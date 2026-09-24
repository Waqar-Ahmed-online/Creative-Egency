import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FOOTER } from "@/data/footer";

function NavColumn({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <Link
          key={item}
          href="#"
          className="text-lg text-white/90 transition hover:text-white"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1fr_1.4fr_1fr]">
          {/* Logo + contact */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2 L22 8 L12 14 L2 8 Z" />
                </svg>
              </div>
              <span className="text-xl font-bold">{FOOTER.brand}</span>
            </div>

            <p className="mt-8 text-lg font-semibold">{FOOTER.phone}</p>
            <p className="mt-3 text-lg font-semibold">{FOOTER.email}</p>
            <p className="mt-3 max-w-xs text-white/60">
              {FOOTER.addressLines[0]}
              <br />
              {FOOTER.addressLines[1]}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Navigation
            </span>
            <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3">
              <NavColumn items={FOOTER.navCol1} />
              <NavColumn items={FOOTER.navCol2} />
            </div>
          </div>

          {/* Follow us */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Follow Us
            </span>
            <div className="mt-5 flex flex-wrap gap-3">
              {FOOTER.socials.map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:border-white/50"
                >
                  {social}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6">
          <span className="text-sm text-white/50">{FOOTER.copyright}</span>
        </div>

        {/* Big connect heading */}
        <div className="mt-6 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="select-none text-[15vw] font-black leading-none tracking-tight sm:text-[10vw] lg:text-[8vw]">
            {FOOTER.connectText.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-300 ease-out hover:-translate-y-2"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <div className="shrink-0 pb-2 text-right">
            <p className="text-white/50">{FOOTER.hours.days}</p>
            <p className="text-2xl font-bold sm:text-3xl">{FOOTER.hours.time}</p>
          </div>
        </div>

        {/* Bottom tags row */}
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 py-8">
          {FOOTER.tags.map((tag) => (
            <Link
              key={tag}
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              {tag}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
