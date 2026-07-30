"use client";

import { useMemo, useState } from "react";
import PackageCard from "@/components/packages/PackageCard";
import type { Package } from "@/lib/packages-data";

const durations = ["All", "Short (≤14 days)", "Long (>14 days)"];
const ratings = ["All", "3-Star", "4-Star", "5-Star"];
const sorts = ["Recommended", "Price: Low to High", "Price: High to Low"];

export default function PackageListing({ packages }: { packages: Package[] }) {
  const [duration, setDuration] = useState(durations[0]);
  const [rating, setRating] = useState(ratings[0]);
  const [sort, setSort] = useState(sorts[0]);

  const filtered = useMemo(() => {
    let list = [...packages];

    if (duration !== "All") {
      list = list.filter((p) => {
        const days = parseInt(p.duration, 10);
        return duration.startsWith("Short") ? days <= 14 : days > 14;
      });
    }

    if (rating !== "All") {
      const stars = parseInt(rating, 10);
      list = list.filter((p) => p.hotelRating === stars);
    }

    if (sort === "Price: Low to High") {
      list.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sort === "Price: High to Low") {
      list.sort((a, b) => b.priceValue - a.priceValue);
    }

    return list;
  }, [packages, duration, rating, sort]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:gap-4 sm:p-5">
        <Select label="Duration" value={duration} onChange={setDuration} options={durations} />
        <Select label="Hotel Rating" value={rating} onChange={setRating} options={ratings} />
        <Select label="Sort By" value={sort} onChange={setSort} options={sorts} />
      </div>

      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
          <p className="text-sm font-semibold text-gray-500 sm:text-base">
            No packages match your filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setDuration(durations[0]);
              setRating(ratings[0]);
              setSort(sorts[0]);
            }}
            className="mt-3 text-sm font-semibold text-brand-green underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      )}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex flex-1 min-w-[150px] flex-col gap-1 text-xs font-medium text-gray-500">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-[#1f2937] outline-none focus:border-brand-green"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
