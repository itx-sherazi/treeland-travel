import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const promises = [
  "Quality Service",
  "Affordable Pricing",
  "Customer Satisfaction",
  "24/7 Assistance",
];

export default function OurPromise() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Our Promise" title="What We Guarantee You" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2">
          {promises.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <CheckCircle2 size={20} className="shrink-0 text-brand-green" />
              <span className="text-sm font-semibold text-[#1f2937]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
