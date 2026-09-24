import CloudImage from "@/components/ui/CloudImage";
import { IMAGES } from "@/data/images";

export default function TrustedImages() {
  return (
    <div className="relative hidden h-40 w-full overflow-hidden rounded-2xl sm:block sm:h-44">
      <CloudImage
        src={IMAGES.trusted.product}
        alt="Product shot"
        fill
        sizes="(min-width: 1024px) 220px, 100vw"
        className="object-cover"
      />
    </div>
  );
}