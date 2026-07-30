import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions of Treeland Travel & Tours.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "1. Booking & Confirmation",
    body: "A booking is confirmed only after receipt of the required advance payment and submission of complete, accurate traveler documents.",
  },
  {
    heading: "2. Pricing",
    body: "Package prices are subject to change due to fluctuations in airline fares, hotel rates, or Saudi Riyal exchange rates. Confirmed bookings will not be affected by price changes after full payment.",
  },
  {
    heading: "3. Visa Processing",
    body: "Visa approval is at the sole discretion of Saudi authorities. Treeland Travel & Tours facilitates the application process but cannot guarantee approval or specific processing timelines.",
  },
  {
    heading: "4. Traveler Responsibilities",
    body: "Travelers are responsible for ensuring their passport, medical fitness, and vaccination requirements meet current Saudi entry regulations.",
  },
  {
    heading: "5. Changes to Itinerary",
    body: "We reserve the right to make reasonable changes to hotels, transport, or flight schedules due to circumstances beyond our control, while maintaining an equivalent standard of service.",
  },
  {
    heading: "6. Liability",
    body: "Treeland Travel & Tours acts as an intermediary between travelers and airlines/hotels/transport providers, and is not liable for delays, cancellations, or losses caused by these third parties.",
  },
  {
    heading: "7. Cancellations & Refunds",
    body: "Cancellations and refunds are governed separately by our Refund & Cancellation Policy.",
  },
  {
    heading: "8. Governing Law",
    body: "These terms are governed by the laws of Pakistan.",
  },
  {
    heading: "9. Contact",
    body: `For questions about these Terms, contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
  },
];

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="July 4, 2026">
      {sections.map((s) => (
        <div key={s.heading}>
          <h2 className="font-heading text-lg font-bold text-[#1f2937]">{s.heading}</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">{s.body}</p>
        </div>
      ))}
    </LegalLayout>
  );
}
