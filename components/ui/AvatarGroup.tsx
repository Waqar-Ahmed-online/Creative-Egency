import { HERO } from "@/data/hero";
import { IMAGES } from "@/data/images";
import CloudImage from "./CloudImage";

export default function AvatarGroup() {
  return (
    <div className="relative z-10 mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
      <div className="flex -space-x-2 sm:-space-x-3">
        {IMAGES.hero.avatars.map((src) => (
          <CloudImage
            key={src}
            src={src}
            alt="user"
            width={32}
            height={32}
            className="h-6 w-6 rounded-full border-2 border-white object-cover sm:h-8 sm:w-8"
          />
        ))}
      </div>
      <p className="text-xs text-black/60 sm:text-sm">
        <span className="font-semibold text-black">{HERO.users.count}</span>{" "}
        {HERO.users.label}
      </p>
    </div>
  );
}
