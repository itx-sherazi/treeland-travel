import { Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-16 sm:py-24">
      <Container className="text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
          <Compass size={32} />
        </span>
        <h1 className="mt-6 font-heading text-4xl font-extrabold text-[#1f2937] sm:text-5xl">
          404
        </h1>
        <p className="mt-3 text-base font-semibold text-[#1f2937] sm:text-lg">
          Looks like you&apos;ve wandered off the path.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track to your Hajj or Umrah journey.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/umrah-packages" variant="outline">
            View Packages
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
