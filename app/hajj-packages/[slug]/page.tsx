import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PackageDetail from "@/components/packages/PackageDetail";
import { hajjPackages, getPackageBySlug } from "@/lib/packages-data";

export function generateStaticParams() {
  return hajjPackages.map((pkg) => ({ slug: pkg.slug }));
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
    description: `${pkg.name} — ${pkg.duration}, ${pkg.hotelRating}-star hotels, starting from ${pkg.price}. Book your Hajj journey with Treeland Travel & Tours.`,
    alternates: { canonical: `/hajj-packages/${pkg.slug}` },
  };
}

export default async function HajjPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg || pkg.type !== "hajj") notFound();

  const related = hajjPackages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return <PackageDetail pkg={pkg} related={related} />;
}
