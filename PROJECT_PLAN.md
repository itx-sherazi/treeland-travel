# Treeland Travel & Tours — Website Plan (Updated)

> Base plan provided by client, reviewed and gaps filled in. Sections marked
> **[ADDED]** were missing from the original plan.

## Technology

- Framework: Next.js 16 (App Router)
- Styling: Tailwind CSS v4
- Icons: Lucide React
- Animations: Framer Motion (light use only — section reveals, hover states)
- Forms: React Hook Form + Zod
- SEO: Next.js Metadata API
- Images: `next/image`, sourced from Unsplash
- Hosting: Vercel
- **[ADDED]** Form backend: Resend (email) or Formspree for contact/inquiry form submissions — a form with no backend is not a real feature.
- **[ADDED]** Analytics: Google Analytics 4 + Meta Pixel (WhatsApp/inquiry conversion tracking matters for an inquiry-driven business)
- **[ADDED]** `next-sitemap` or App Router `sitemap.ts` / `robots.ts` for SEO

## Website Goal

Generate inquiries via WhatsApp, phone, and contact/package forms for:
Hajj, Umrah, Visa Assistance, Flight Booking, Hotel Booking, Ground
Transportation, Ziyarat Tours.

## Website Structure

- Home
- About
- Umrah Packages (list + `[slug]` detail)
- Hajj Packages (list + `[slug]` detail)
- Gallery
- FAQ
- Contact
- **[ADDED]** Privacy Policy
- **[ADDED]** Terms & Conditions
- **[ADDED]** Refund & Cancellation Policy — *mandatory* for a travel/booking business handling payments; without it the agency has no documented recourse for cancelled Hajj/Umrah bookings, and Google/Meta ad approval for travel businesses often requires it.
- **[ADDED]** Custom 404 page (branded, with links back to Home/Packages/Contact)
- **[ADDED]** `sitemap.xml` and `robots.txt` (generated, not a page but required deliverable)

## Common Components

### Navbar
- Logo, Menu (Home, About, Umrah, Hajj, Gallery, FAQ, Contact)
- Buttons: WhatsApp, Book Now
- Sticky on scroll
- **[ADDED]** Mobile hamburger menu / drawer (plan didn't specify mobile nav pattern)
- **[ADDED]** Active-link highlighting for current page

### Footer
- Logo, short description, Quick Links, Services, Contact Info, Social Media, Google Map, Copyright
- **[ADDED]** Trust/licensing badges — e.g. Ministry of Religious Affairs Hajj license number, IATA/PTOA/PATA membership if applicable. Critical for Hajj/Umrah credibility in Pakistan; users actively check for this before trusting an agency with religious travel.
- **[ADDED]** Newsletter/WhatsApp-list signup (optional, low priority)

### Floating Buttons
- WhatsApp, Call Now, Back to Top
- **[ADDED]** Cookie consent banner (GA/Meta Pixel requires this for compliance)

## Home Page

All original sections kept as specified (Hero, Why Choose Treeland, Services,
Featured Umrah/Hajj Packages, Booking Process, Statistics, Testimonials,
Gallery Preview, FAQ preview, Contact CTA).

- **[ADDED]** Google Reviews embed or aggregate rating snippet near Testimonials — third-party proof outweighs on-site testimonials for trust-sensitive purchases like Hajj/Umrah.
- **[ADDED]** "Licensed & Certified" strip (logos of relevant travel/Hajj authorities) directly under Hero — first-screen trust signal.

## About Page

Kept as specified (Story, Mission, Vision, Values, Why Choose Us, What We
Offer, Working Process, Our Promise, CTA).

- **[ADDED]** Team section with photos/names/roles — plan lists "Team" under
  Images Needed (5 images) but no About page section actually displays them.
- **[ADDED]** Licensing/registration details (govt Hajj license #, years
  operating, IATA/PTOA number if applicable).

## Umrah Packages Page

Kept as specified (Filters, Package Cards, Detail Layout, Inquiry Form,
FAQs, CTA).

- **[ADDED]** Empty state (no packages match filters)
- **[ADDED]** Package sorting (price low-high, duration, popularity)
- **[ADDED]** "Related Packages" on detail page

## Hajj Packages Page

Kept as specified (Government/Private/VIP Hajj, Requirements, Important
Dates).

- **[ADDED]** Hajj application/registration deadline countdown or notice —
  Hajj slots are time- and government-quota-bound, unlike Umrah; this is a
  real operational difference the page should surface.

## Gallery Page

Kept as specified (Categories, Masonry Gallery, Videos, Customer Memories).

- **[ADDED]** Lightbox navigation (next/prev, keyboard/swipe) — plan lists
  "Image Gallery with Lightbox" under Website Features but the Gallery page
  section didn't specify lightbox behavior explicitly.

## FAQ Page

Kept as specified (Search, Categories, Accordion, Contact Support CTA).

## Contact Page

Kept as specified (Contact Info, Contact Form, Google Map, Social Links,
Business Hours, Emergency Contact).

- **[ADDED]** Form success/error states and spam protection (honeypot field
  or simple rate-limit) — a public form with no bot protection will get
  spammed.

## SEO (per page)

Kept as specified (Title, Description, OG Image, Schema Markup, Canonical
URL, Breadcrumbs).

- **[ADDED]** `TravelAgency` / `Product` (for packages) JSON-LD schema
  specifically — "Schema Markup" was listed generically; Hajj/Umrah package
  pages benefit from `Product`/`Offer` schema for rich snippets (price,
  availability).
- **[ADDED]** `FAQPage` schema on the FAQ page and package FAQs — enables
  FAQ rich results in Google.

## Forms

Kept as specified (Contact Form, Package Inquiry Form, WhatsApp Button,
Call Button).

- **[ADDED]** Server-side validation (Zod on both client and API route) —
  client-only validation listed in tech stack isn't sufflicient alone.

## Images — Sourcing Note

**[UPDATED]** All ~120 images will be sourced from **Unsplash** (free,
license-friendly for commercial use, no attribution required) rather than
purchased/shot stock. Approximate category mapping kept from original plan:

| Category | Qty | Unsplash search terms |
|---|---|---|
| Hero Images | 4 | mecca kaaba, medina mosque, travel agency, pilgrimage |
| Kaaba | 10 | kaaba, mecca, masjid al haram |
| Masjid Nabawi | 10 | medina, masjid nabawi, prophet mosque |
| Hotels | 10 | luxury hotel room, hotel lobby, hotel exterior |
| Flights | 5 | airplane, airport, boarding |
| Transport | 5 | tour bus, coach bus, travel van |
| Pilgrims | 10 | muslim pilgrims, hajj crowd, umrah worshippers |
| Office | 5 | travel agency office, office interior |
| Team | 5 | business team portrait, professional headshot |
| Gallery | 30 | mix of the above categories |
| Icons | 25 | Lucide React icons (not Unsplash — vector icon set already in tech stack) |

- **[NOTE]** Real Hajj/Umrah/Kaaba photography is limited on Unsplash;
  where an exact match isn't available, closest relevant travel/mosque/
  pilgrimage imagery will be used as placeholder, clearly swappable later
  for the agency's own licensed photography.

## Color Palette / Typography / Buttons

Kept exactly as specified:
- Primary Green `#0F6B4B`, Gold `#D4AF37`, White `#FFFFFF`,
  Light Gray `#F8F9FA`, Dark Text `#1F2937`
- Headings: Poppins, Body: Inter
- Primary button: green bg / white text / rounded-xl / dark green hover
- Secondary button: gold bg / dark text

## Website Features

Kept as specified, plus:
- **[ADDED]** Light mode only (no dark mode) — consistent with the rest of
  the Treeland/Paras Bazar projects.
- **[ADDED]** Accessibility basics: semantic HTML, alt text on all images,
  keyboard-navigable menu/accordion/lightbox, sufficient color contrast.

## Build Order (implementation sequence)

1. Install deps (lucide-react, framer-motion, react-hook-form, zod,
   resend) + base layout (Navbar, Footer, floating buttons)
2. Shared UI primitives (Button, Card, SectionHeading, Accordion, Container)
3. Home page (all sections)
4. About page
5. Umrah Packages (list + detail) with sample package data
6. Hajj Packages (list + detail)
7. Gallery (masonry + lightbox)
8. FAQ (search + accordion)
9. Contact (form + map + API route)
10. Legal pages (Privacy, Terms, Refund Policy) + custom 404
11. SEO pass (metadata, schema, sitemap, robots) across all pages
12. Responsive + accessibility QA pass
