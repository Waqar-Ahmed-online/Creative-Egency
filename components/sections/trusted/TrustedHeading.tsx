import { Zap } from "lucide-react";
import CloudImage from "@/components/ui/CloudImage";
import ScrollRevealHeading from "@/components/ui/ScrollRevealHeading";
import { IMAGES } from "@/data/images";
import { TRUSTED_HEADING } from "@/data/trusted";

export default function TrustedHeading() {
  return (
    <div>
      <Zap className="h-7 w-7 fill-black sm:h-8 sm:w-8" />
      <ScrollRevealHeading
        text={TRUSTED_HEADING}
        className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl"
      />
      <div className="relative mt-6 h-60 w-full overflow-hidden rounded-2xl sm:h-64">
        <CloudImage
          src={IMAGES.trusted.runway}
          alt="Runway shot"
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
