import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import type { PricingPlan } from "@/types";

interface PlanCardProps {
  plan: PricingPlan;
  price: number;
}

export default function PlanCard({ plan, price }: PlanCardProps) {
  return (
    <div
      className={`rounded-[28px] p-8 sm:p-10 ${
        plan.popular ? "bg-[#fbe7e1]" : "bg-[#f2f2f2]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">{plan.name}</span>
        {plan.popular && (
          <span className="rounded-full bg-[#e4572e] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Most Popular
          </span>
        )}
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-5xl font-black tracking-tight">
          ${price.toLocaleString()}
        </span>
        <span className="text-black/50">/monthly</span>
      </div>

      <p className="mt-4 text-black/60">{plan.description}</p>

      <Link
        href="#"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
      >
        {plan.cta}
        <ArrowUpRight className="h-4 w-4" />
      </Link>

      <ul className="mt-10 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
              <Plus className="h-3.5 w-3.5" />
            </span>
            <span className="text-base font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
