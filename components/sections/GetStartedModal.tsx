"use client";

import { useState } from "react";
import { X } from "lucide-react";

const SERVICE_OPTIONS = [
  "Custom Software",
  "Web & Mobile Dev",
  "Business Solutions / ERP",
  "AI & Automation",
  "SaaS Products",
  "Digital Marketing",
  "Other",
];

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/get-started", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal card */}
      <div className="relative w-full max-w-2xl rounded-[28px] bg-white p-6 shadow-2xl sm:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
          Let&apos;s Get Started
        </h2>
        <p className="mt-2 text-black/60">
          Tell us a bit about your project — we&apos;ll get back to you soon.
        </p>

        {status === "success" ? (
          <div className="mt-8 rounded-2xl bg-[#f2f2f2] p-6 text-center">
            <p className="text-lg font-semibold">Message sent!</p>
            <p className="mt-1 text-black/60">Thanks — our team will reach out shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">Your Name</label>
              <input
                name="name"
                required
                placeholder="John Doe"
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@company.com"
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Company</label>
              <input
                name="company"
                placeholder="Company Name"
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Service Interest</label>
              <select
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-semibold">Your Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project..."
                className="mt-2 w-full resize-none rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {status === "error" && (
              <p className="sm:col-span-2 text-sm font-medium text-red-600">
                Kuch masla ho gaya, dobara try karein.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="sm:col-span-2 mt-2 w-full rounded-full bg-black py-4 text-sm font-semibold text-white transition hover:bg-black/80 disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}