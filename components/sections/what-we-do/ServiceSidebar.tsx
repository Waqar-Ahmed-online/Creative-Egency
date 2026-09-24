import { ArrowRight } from "lucide-react";
import { CubeGraphic } from "@/components/icons/ServiceIcons";
import type { Service } from "@/types";

interface ServiceSidebarProps {
  services: Service[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ServiceSidebar({
  services,
  activeIndex,
  onSelect,
}: ServiceSidebarProps) {
  return (
    <div>
      <ul className="border-b border-black/10">
        {services.map((service, i) => {
          const isActive = i === activeIndex;
          return (
            <li key={service.id} className="border-t border-black/10">
              <button
                type="button"
                onClick={() => onSelect(i)}
                className={`flex w-full items-center justify-between gap-4 py-[17px] text-left transition-colors ${
                  isActive ? "bg-[#dfdfdf] px-5" : "px-0"
                }`}
              >
                <span className="flex items-center gap-10">
                  <span className="text-base text-black/60">[{service.number}]</span>
                  <span className="text-xl font-medium tracking-tight lg:text-[clamp(18px,1.36vw,26px)]">
                    {service.title}
                  </span>
                </span>
                {isActive && <ArrowRight className="h-5 w-5 shrink-0" />}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-16 hidden lg:block">
        <CubeGraphic />
      </div>
    </div>
  );
}
