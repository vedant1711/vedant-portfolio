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
    <figure className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ground">
      <img
        src={images[active]}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-55 blur-xl saturate-[0.8]"
      />
      <img
        src={images[active]}
        alt={`${alt}${images.length > 1 ? ` (photo ${active + 1} of ${images.length})` : ""}`}
        loading="lazy"
        className="relative h-full w-full object-contain"
      />
      {images.length > 1 && (
        <div
          className="absolute inset-x-0 bottom-0 flex gap-1.5 bg-gradient-to-t from-black/45 to-transparent p-2"
          role="tablist"
          aria-label="Photos"
        >
          {images.map((img, i) => (
            <button
              key={img}
              role="tab"
              aria-selected={i === active}
              aria-label={`Photo ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-10 w-14 overflow-hidden border transition-all ${
                i === active
                  ? "border-accent opacity-100"
                  : "border-white/40 opacity-70 hover:opacity-100"
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
