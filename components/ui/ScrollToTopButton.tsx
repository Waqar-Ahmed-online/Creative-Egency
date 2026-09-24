"use client";

import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ${className}`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
