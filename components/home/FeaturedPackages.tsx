import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PackageCard from "@/components/packages/PackageCard";
import type { Package } from "@/lib/packages-data";

export default function FeaturedPackages({
  title,
  eyebrow,
  description,
  packages,
  viewAllHref,
  tinted = false,
}: {
  title: string;
  eyebrow: string;
  description: string;
  packages: Package[];
  viewAllHref: string;
  tinted?: boolean;
}) {
  return (
    <section className={`py-14 sm:py-20 ${tinted ? "bg-brand-gray" : ""}`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={viewAllHref} variant="outline">
            View All Packages
          </Button>
        </div>
      </Container>
    </section>
  );
}
