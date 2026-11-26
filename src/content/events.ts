/**
 * Phase 5 events.
 *
 * Provenance: all entries were supplied by the project owner on 19 November
 * 2026. Only the fields listed here are approved for publication; photos and a
 * click-through gallery will be added later when the owner supplies images.
 * No other dates, venues, outcomes, attendance figures or details are invented.
 * French copy is a faithful rendering; names, dates, locations and slugs are
 * preserved verbatim.
 */
import { bilingual, type LocalizedText } from "@/lib/i18n";

export type EventEntry = {
  /** Route segment for /events/[slug]. */
  slug: string;
  /** Public event name as supplied by the owner. */
  title: string;
  /** Short description as supplied by the owner. */
  description: LocalizedText;
  /** Event date as supplied by the owner. */
  date: string;
  /** Event location as supplied by the owner. */
  location: string;
  /** Optional gallery image paths (from /public). */
  gallery?: string[];
};

export const events: EventEntry[] = [
  {
    slug: "geekmun",
    title: "GeekMUN",
    description: bilingual(
      "An introductory workshop to Model United Nations by Yesmine Miledi",
      "Un atelier d'introduction au modèle des Nations unies par Yesmine Miledi",
    ),
    date: "October 26th 2025",
    location: "Sfax",
    gallery: [
      "/images/events/geekmun/geekmun-01.webp",
      "/images/events/geekmun/geekmun-02.webp",
      "/images/events/geekmun/geekmun-03.webp",
      "/images/events/geekmun/geekmun-04.webp",
      "/images/events/geekmun/geekmun-05.webp",
      "/images/events/geekmun/geekmun-06.webp",
      "/images/events/geekmun/geekmun-07.webp",
      "/images/events/geekmun/geekmun-08.webp",
      "/images/events/geekmun/geekmun-09.webp",
      "/images/events/geekmun/geekmun-10.webp",
      "/images/events/geekmun/geekmun-11.webp",
      "/images/events/geekmun/geekmun-12.webp",
      "/images/events/geekmun/geekmun-13.webp",
      "/images/events/geekmun/geekmun-14.webp",
      "/images/events/geekmun/geekmun-15.webp",
      "/images/events/geekmun/geekmun-16.webp",
      "/images/events/geekmun/geekmun-17.webp",
      "/images/events/geekmun/geekmun-18.webp",
    ],
  },
  {
    slug: "the-great-mun",
    title: "The Great MUN",
    description: bilingual("Mini simulation 1.0", "Mini-simulation 1.0"),
    date: "December 25th 2025",
    location: "Sfax",
    gallery: [
      "/images/events/the-great-mun/the-great-mun-01.webp",
      "/images/events/the-great-mun/the-great-mun-02.webp",
      "/images/events/the-great-mun/the-great-mun-03.webp",
      "/images/events/the-great-mun/the-great-mun-04.webp",
      "/images/events/the-great-mun/the-great-mun-05.webp",
      "/images/events/the-great-mun/the-great-mun-06.webp",
      "/images/events/the-great-mun/the-great-mun-07.webp",
      "/images/events/the-great-mun/the-great-mun-08.webp",
      "/images/events/the-great-mun/the-great-mun-09.webp",
      "/images/events/the-great-mun/the-great-mun-10.webp",
      "/images/events/the-great-mun/the-great-mun-11.webp",
      "/images/events/the-great-mun/the-great-mun-12.webp",
    ],
  },
  {
    slug: "redmun",
    title: "RedMUN",
    description: bilingual("Mini simulation 2.0", "Mini-simulation 2.0"),
    date: "March 27th 2026",
    location: "Sfax",
    gallery: [
      "/images/events/redmun/redmun-01.webp",
      "/images/events/redmun/redmun-02.webp",
      "/images/events/redmun/redmun-03.webp",
      "/images/events/redmun/redmun-04.webp",
      "/images/events/redmun/redmun-05.webp",
      "/images/events/redmun/redmun-06.webp",
      "/images/events/redmun/redmun-07.webp",
      "/images/events/redmun/redmun-08.webp",
      "/images/events/redmun/redmun-09.webp",
      "/images/events/redmun/redmun-10.webp",
      "/images/events/redmun/redmun-11.webp",
      "/images/events/redmun/redmun-12.webp",
      "/images/events/redmun/redmun-13.webp",
      "/images/events/redmun/redmun-14.webp",
      "/images/events/redmun/redmun-15.webp",
      "/images/events/redmun/redmun-16.webp",
      "/images/events/redmun/redmun-17.webp",
      "/images/events/redmun/redmun-18.webp",
    ],
  },
];

export function getEventBySlug(slug: string): EventEntry | undefined {
  return events.find((event) => event.slug === slug);
}