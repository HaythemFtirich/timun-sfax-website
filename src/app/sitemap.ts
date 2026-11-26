import type { MetadataRoute } from "next";
import { events } from "@/content/events";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  const base = siteUrl.replace(/\/$/, "");
  const routes = [
    "",
    "/events",
    "/executive-board",
    "/socials",
    "/study-guides",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route || "/"}`,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${base}/events/${event.slug}`,
  }));

  return [...staticEntries, ...eventEntries];
}