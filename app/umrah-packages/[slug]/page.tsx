import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PackageDetail from "@/components/packages/PackageDetail";
import { umrahPackages, getPackageBySlug } from "@/lib/packages-data";

export function generateStaticParams() {
  return umrahPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};

  return {
    title: pkg.name,
    description: `${pkg.name} — ${pkg.duration}, ${pkg.hotelRating}-star hotels, starting from ${pkg.price}. Book your Umrah journey with Treeland Travel & Tours.`,
    alternates: { canonical: `/umrah-packages/${pkg.slug}` },
  };
}

export default async function UmrahPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg || pkg.type !== "umrah") notFound();

  const related = umrahPackages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return <PackageDetail pkg={pkg} related={related} />;
}
