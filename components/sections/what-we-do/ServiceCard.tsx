import { ServiceIcon } from "@/components/icons/ServiceIcons";
import CloudImage from "@/components/ui/CloudImage";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  style?: React.CSSProperties;
}

export default function ServiceCard({ service, style }: ServiceCardProps) {
  return (
    <div
      id={service.id}
      className="mb-6 scroll-mt-28 lg:absolute lg:inset-0 lg:mb-0 lg:will-change-transform"
      style={style}
    >
      <div className="flex h-full flex-col gap-8 rounded-[24px] bg-[#f2f2f2] p-6 sm:flex-row sm:items-center sm:gap-10 sm:p-10 lg:gap-10 lg:py-8 lg:pl-[clamp(32px,3.93vw,75px)] lg:pr-[15px]">
        <div className="flex-1">
          <ServiceIcon
            name={service.icon}
            className="mb-7 h-12 w-12 lg:h-[60px] lg:w-[60px]"
          />
          <h3 className="max-w-[400px] text-[28px] font-normal leading-[1.3] sm:text-[32px] lg:text-[clamp(24px,1.68vw,32px)]">
            {service.heading}
          </h3>
          <ul className="mt-8 text-base leading-6 sm:text-[20px] lg:text-[clamp(14px,1.05vw,20px)]">
            {service.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-md sm:h-72 sm:w-80 lg:h-full lg:w-[39%]">
          <CloudImage
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
