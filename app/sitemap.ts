import type { MetadataRoute } from "next";
import { umrahPackages, hajjPackages } from "@/lib/packages-data";

const siteUrl = "https://www.treelandtravel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/umrah-packages",
    "/hajj-packages",
    "/gallery",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/refund-policy",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const packageRoutes = [...umrahPackages, ...hajjPackages].map((pkg) => ({
    url: `${siteUrl}/${pkg.type === "umrah" ? "umrah-packages" : "hajj-packages"}/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...packageRoutes];
}
