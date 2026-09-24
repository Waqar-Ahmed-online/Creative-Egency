import type { ImageLoaderProps } from "next/image";

export const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "";

/**
 * Agar src "http(s)://" ya "/" se start ho to wo normal URL/local file ha.
 * Warna hum usay Cloudinary ka public ID samajhte hain
 * (e.g. "media-production-art/team/darrell").
 */
export function isCloudinaryId(src: string) {
  return !/^(https?:)?\/\//.test(src) && !src.startsWith("/");
}

/** next/image ka custom loader — Cloudinary khud resize + f_auto (webp/avif) karta ha */
export function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  const params = ["f_auto", `q_${quality ?? "auto"}`, `w_${width}`, "c_limit"];
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${params.join(",")}/${src}`;
}

/**
 * Jahan next/image nahi chahiye (CSS background, meta tags, emails) wahan
 * seedha URL bana lo: cloudinaryUrl("folder/name", { width: 800 })
 */
export function cloudinaryUrl(
  publicId: string,
  { width, height, crop = "fill" }: { width?: number; height?: number; crop?: string } = {},
) {
  const params = ["f_auto", "q_auto"];
  if (width) params.push(`w_${width}`);
  if (height) params.push(`h_${height}`);
  if (width || height) params.push(`c_${crop}`);
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${params.join(",")}/${publicId}`;
}
