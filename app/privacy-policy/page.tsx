import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Treeland Travel & Tours.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    heading: "1. Information We Collect",
    body: "We collect information you provide directly to us, such as your name, phone number, email address, city, and travel preferences when you submit a contact or package inquiry form, or contact us via WhatsApp or phone.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "We use the information collected to respond to your inquiries, process bookings, arrange visa and travel documentation, and communicate updates about your Hajj/Umrah journey. We do not sell your personal information to third parties.",
  },
  {
    heading: "3. Sharing of Information",
    body: "We may share necessary personal details with airlines, hotels, and relevant Saudi authorities strictly for the purpose of processing your visa, flight and hotel bookings.",
  },
  {
    heading: "4. Data Security",
    body: "We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure.",
  },
  {
    heading: "5. Cookies",
    body: "Our website may use cookies and similar technologies for analytics purposes to help us understand how visitors use our site.",
  },
  {
    heading: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data by contacting us at the details below.",
  },
  {
    heading: "7. Contact Us",
    body: `If you have questions about this Privacy Policy, contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 4, 2026">
      {sections.map((s) => (
        <div key={s.heading}>
          <h2 className="font-heading text-lg font-bold text-[#1f2937]">{s.heading}</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">{s.body}</p>
        </div>
      ))}
    </LegalLayout>
  );
}
