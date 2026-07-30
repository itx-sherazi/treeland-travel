import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.email().optional().or(z.literal("")),
  city: z.string().optional(),
  service: z.string().optional(),
  travelers: z.string().optional(),
  message: z.string().optional(),
  company: z.string().max(0).optional(), // honeypot
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const data = parsed.data;

  if (data.company) {
    // Honeypot triggered — silently accept to not tip off bots.
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@treelandtravel.com";

  if (apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Treeland Travel Website <onboarding@resend.dev>",
      to: toEmail,
      replyTo: data.email || undefined,
      subject: `New Inquiry — ${data.service || "General Contact"}`,
      text: [
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        data.email ? `Email: ${data.email}` : null,
        data.city ? `City: ${data.city}` : null,
        data.service ? `Service: ${data.service}` : null,
        data.travelers ? `Travelers: ${data.travelers}` : null,
        data.message ? `Message: ${data.message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } else {
    console.log("New inquiry (RESEND_API_KEY not set):", data);
  }

  return NextResponse.json({ ok: true });
}
