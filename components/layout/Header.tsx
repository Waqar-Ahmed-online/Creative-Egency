"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import BracketBox from "@/components/ui/BracketBox";
import { NAV_LINKS } from "@/data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-4 mt-4 rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-sm sm:mx-8 sm:px-6 md:mx-12 md:mt-6 md:px-8 md:py-5 lg:mx-16 xl:mx-24">
      <div className="flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Media Production Art"
          width={260}
          height={64}
          className="h-10 w-auto sm:h-12 md:h-14"
          priority
        />

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex xl:gap-10">
          {NAV_LINKS.map((link) => (
            <button key={link} className="flex items-center gap-1 hover:opacity-70">
              {link}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BracketBox>
            <span className="text-sm font-semibold">GET STARTED</span>
          </BracketBox>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav className="mt-4 flex flex-col gap-3 border-t border-black/10 pt-4 text-sm font-medium lg:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="flex items-center justify-between text-left hover:opacity-70"
            >
              {link}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          ))}
          <div className="pt-2">
            <BracketBox>
              <span className="text-sm font-semibold">GET STARTED</span>
            </BracketBox>
          </div>
        </nav>
      )}
    </header>
  );
}
