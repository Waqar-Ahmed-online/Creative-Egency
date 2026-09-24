"use client";

import Image, { type ImageProps } from "next/image";
import { cloudinaryLoader, isCloudinaryId } from "@/lib/cloudinary";

/**
 * next/image ka wrapper.
 *  - src Cloudinary public ID ho  -> Cloudinary loader use hota ha
 *  - src full URL ya "/local.png" -> normal next/image (Unsplash, public/ folder)
 */
export default function CloudImage({ alt, ...props }: ImageProps) {
  const useCloudinary =
    typeof props.src === "string" && isCloudinaryId(props.src);

  return (
    <Image
      alt={alt}
      {...props}
      loader={useCloudinary ? cloudinaryLoader : undefined}
    />
  );
}
