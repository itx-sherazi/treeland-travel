import Hero from "@/components/home/Hero";
import WhyChoose from "@/components/home/WhyChoose";
import Services from "@/components/home/Services";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import BookingProcess from "@/components/home/BookingProcess";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import FaqPreview from "@/components/home/FaqPreview";
import ContactCta from "@/components/home/ContactCta";
import { umrahPackages, hajjPackages } from "@/lib/packages-data";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <FeaturedPackages
        eyebrow="Umrah Packages"
        title="Featured Umrah Packages"
        description="Handpicked Umrah packages for every budget and preference."
        packages={umrahPackages}
        viewAllHref="/umrah-packages"
        tinted
      />
      {/* <FeaturedPackages
        eyebrow="Hajj Packages"
        title="Featured Hajj Packages"
        description="Government, private and VIP Hajj packages for the upcoming season."
        packages={hajjPackages}
        viewAllHref="/hajj-packages"
      /> */}
      <BookingProcess />
      <Statistics />
      <Testimonials />
      <GalleryPreview />
      <FaqPreview />
      <ContactCta />
    </>
  );
}
