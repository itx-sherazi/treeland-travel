import Image from "next/image";
import { Star, Clock, Bus } from "lucide-react";
import type { Package } from "@/lib/packages-data";
import Button from "@/components/ui/Button";

export default function PackageCard({ pkg }: { pkg: Package }) {
  const basePath = pkg.type === "umrah" ? "/umrah-packages" : "/hajj-packages";

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-48 w-full sm:h-52">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white">
          {pkg.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-[#1f2937]">
          {pkg.name}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Star size={14} className="text-brand-gold" />
            {pkg.hotelRating}-Star Hotels
          </span>
          <span className="flex items-center gap-1">
            <Bus size={14} className="text-brand-green" />
            {pkg.transport}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-brand-green" />
            {pkg.month}
          </span>
        </div>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li
              key={h}
              className="rounded-full bg-brand-gray px-2.5 py-1 text-xs font-medium text-gray-600"
            >
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="font-heading text-xl font-extrabold text-brand-green">
              {pkg.price}
            </p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button href={`${basePath}/${pkg.slug}`} variant="outline" className="flex-1 !px-3 !py-2.5 text-sm">
            View Details
          </Button>
          <Button href="/contact" className="flex-1 !px-3 !py-2.5 text-sm">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
