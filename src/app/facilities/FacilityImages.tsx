"use client";

import { useState } from "react";
import Image from "next/image";

export type Facility = {
  name: string;
  images: string[];
};

export function FacilityImages({
  facility,
  className,
}: {
  facility: Facility;
  className: string;
}) {
  const [index, setIndex] = useState(0);

  if (facility.images.length === 0) {
    return <div className={`${className} bg-gray-200`} />;
  }

  const hasMultiple = facility.images.length > 1;
  const count = facility.images.length;
  const currentIndex = index >= count ? 0 : index;

  const goToPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goToNext = () => setIndex((i) => (i + 1) % count);

  return (
    <div className={`relative ${className} bg-gray-200`}>
      <Image
        src={facility.images[currentIndex]}
        alt={`${facility.name} ${currentIndex + 1}`}
        fill
        className="object-cover rounded-sm"
      />
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="前の画像"
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 transition-colors hover:bg-black/50"
          >
            <span className="block h-0 w-0 border-y-[7px] border-r-[10px] border-y-transparent border-r-white" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="次の画像"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 transition-colors hover:bg-black/50"
          >
            <span className="block h-0 w-0 border-y-[7px] border-l-[10px] border-y-transparent border-l-white" />
          </button>
        </>
      )}
    </div>
  );
}
