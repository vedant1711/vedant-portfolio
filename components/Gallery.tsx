"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function Gallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-ground">
        <img
          src={images[active]}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-lg saturate-[0.85]"
        />
        <img
          src={images[active]}
          alt={`${alt}${images.length > 1 ? ` (photo ${active + 1} of ${images.length})` : ""}`}
          loading="lazy"
          className="relative h-full w-full object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-2 flex gap-2" role="tablist" aria-label="Post photos">
          {images.map((img, i) => (
            <button
              key={img}
              role="tab"
              aria-selected={i === active}
              aria-label={`Photo ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-12 w-16 overflow-hidden rounded-md border transition-all ${
                i === active
                  ? "border-accent opacity-100"
                  : "border-line opacity-55 hover:opacity-90"
              }`}
            >
              <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </figure>
  );
}
