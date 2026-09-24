"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { BUSINESS_MULTIPLIER, PLANS } from "@/data/pricing";
import BillingToggle from "./BillingToggle";
import PlanCard from "./PlanCard";

export default function PricingSection() {
  const [isBusiness, setIsBusiness] = useState(false);

  return (
    <section className="bg-white py-16 text-black sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading + toggle */}
        <SectionLabel>Price & Plans</SectionLabel>

        <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl">
            Strategic pricing plans built to align digital efforts with your
            business goals
          </h2>

          <BillingToggle isBusiness={isBusiness} onToggle={() => setIsBusiness((v) => !v)} />
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              price={isBusiness ? plan.price * BUSINESS_MULTIPLIER : plan.price}
            />
          ))}
        </div>

        {/* Need custom pricing */}
        <div className="mt-14 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
            <HelpCircle className="h-4 w-4" />
          </span>
          <span className="text-xl font-bold sm:text-2xl">Need custom pricing?</span>
        </div>
      </div>
    </section>
  );
}
