import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { galleryImages } from "@/lib/gallery-data";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the Journey"
          description="A glimpse of the holy places, hotels and pilgrims we've served."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
          {preview.map((img) => (
            <div
              key={img.id}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
