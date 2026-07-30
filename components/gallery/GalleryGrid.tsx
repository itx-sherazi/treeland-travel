"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages, type GalleryImage } from "@/lib/gallery-data";

const categories = [
  "All",
  "Hajj",
  "Umrah",
  "Hotels",
  "Transportation",
  "Holy Places",
  "Office",
] as const;

export default function GalleryGrid() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered: GalleryImage[] =
    category === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  const openAt = (id: string) => {
    const idx = filtered.findIndex((img) => img.id === id);
    setActiveIndex(idx);
  };

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, filtered.length]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
              category === cat
                ? "bg-brand-green text-white"
                : "bg-white text-gray-600 ring-1 ring-gray-200 hover:text-brand-green"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-2 gap-3 sm:mt-10 sm:columns-3 sm:gap-4 lg:columns-4">
        {filtered.map((img) => (
          <button
            key={img.id}
            type="button"
            onClick={() => openAt(img.id)}
            className="relative mb-3 block w-full overflow-hidden rounded-xl sm:mb-4"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              sizes="(max-width: 640px) 50vw, 25vw"
              className="w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
          <div className="relative h-[70vh] w-full max-w-3xl">
            <Image
              src={filtered[activeIndex].src}
              alt={filtered[activeIndex].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
