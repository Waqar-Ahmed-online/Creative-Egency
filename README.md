# Media Production Art

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Run

```bash
npm install
npm install mongoose        # MongoDB ke liye (form/API)
cp .env.example .env.local  # phir values bharo
npm run dev
```

## Folder structure

```
app/                     # routes (page.tsx, layout.tsx, api/contact)
components/
  layout/                # Header, Footer, RightDock
  sections/              # page ke bare sections (Hero, WhatWeDo, Pricing ...)
  ui/                    # chhote reusable pieces (CloudImage, BracketBox, SectionLabel ...)
  animations/            # OrbitBadge, SpinLogo
  icons/                 # custom SVG icons
data/                    # saara content (text, lists, image links) — component ma hardcode nahi
  images.ts              # SAARI images ek jagah (Unsplash -> Cloudinary yahin badlo)
types/                   # shared TypeScript types
hooks/                   # useScrollProgress, useScrollRotation, useMediaQuery
lib/
  cloudinary.ts          # Cloudinary loader + URL helper
  mongodb.ts             # MongoDB (mongoose) cached connection
models/                  # mongoose models (Contact)
public/                  # local static files (logo.png, logo-icon.png)
```

## Images (Cloudinary)

1. Cloudinary ma images upload karo (folder: `media-production-art/...`)
2. `data/images.ts` ma URL ki jagah public ID likho, e.g. `"media-production-art/team/darrell"`
3. `.env.local` ma `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` set karo

## MongoDB

- `lib/mongodb.ts` — connection (`await connectDB()`)
- `models/Contact.ts` — starter schema
- `app/api/contact/route.ts` — `POST /api/contact` (form yahan data bhejega)
