import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund & Cancellation Policy of Treeland Travel & Tours.",
  alternates: { canonical: "/refund-policy" },
};

const rows = [
  { period: "45+ days before departure", refund: "80% of paid amount refunded" },
  { period: "30–44 days before departure", refund: "50% of paid amount refunded" },
  { period: "15–29 days before departure", refund: "25% of paid amount refunded" },
  { period: "Less than 15 days before departure", refund: "Non-refundable" },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund & Cancellation Policy" updated="July 4, 2026">
      <div>
        <h2 className="font-heading text-lg font-bold text-[#1f2937]">1. Cancellation by Traveler</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          If you need to cancel your Hajj or Umrah booking, please notify us
          in writing (email or WhatsApp) as early as possible. Refunds are
          calculated based on how close to the departure date the
          cancellation is made:
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-gray">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1f2937]">Cancellation Period</th>
                <th className="px-4 py-3 font-semibold text-[#1f2937]">Refund</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.period} className="border-t border-gray-100">
                  <td className="px-4 py-3 text-gray-600">{row.period}</td>
                  <td className="px-4 py-3 text-gray-600">{row.refund}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="font-heading text-lg font-bold text-[#1f2937]">2. Non-Refundable Costs</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Visa processing fees and any non-refundable airline/hotel charges
          already incurred on your behalf are excluded from refund
          calculations, regardless of cancellation timing.
        </p>
      </div>

      <div>
        <h2 className="font-heading text-lg font-bold text-[#1f2937]">3. Cancellation by Treeland Travel</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          In the rare event we must cancel a confirmed booking (e.g. due to
          government restrictions or force majeure), you will receive a full
          refund or the option to reschedule to a future date.
        </p>
      </div>

      <div>
        <h2 className="font-heading text-lg font-bold text-[#1f2937]">4. Refund Processing Time</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Approved refunds are processed within 10–15 business days via the
          original payment method.
        </p>
      </div>

      <div>
        <h2 className="font-heading text-lg font-bold text-[#1f2937]">5. Contact</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          For cancellation requests or refund queries, contact us at{" "}
          {siteConfig.email} or {siteConfig.phone}.
        </p>
      </div>
    </LegalLayout>
  );
}
