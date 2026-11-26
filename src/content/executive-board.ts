/**
 * Phase 7 executive board.
 *
 * Provenance: member names, positions, and social links were supplied by the
 * project owner on 19 November 2026. Portraits are included only where the
 * owner supplied an image; members without a supplied portrait keep a reserved
 * space until an image is provided. No other details are invented. French
 * positions are faithful renderings; names and profile URLs are untouched.
 */
import { bilingual, type LocalizedText } from "@/lib/i18n";

export type ExecutiveBoardMember = {
  name: string;
  position: LocalizedText;
  /** Path under /public/images/executive-board, or null if not yet supplied. */
  image: string | null;
  facebook?: string;
  linkedin?: string;
};

export const executiveBoard: ExecutiveBoardMember[] = [
  {
    name: "Haythem Ftirich",
    position: bilingual("President of TIMUN Sfax", "Président de TIMUN Sfax"),
    image: "/images/executive-board/haythem-ftirich.jfif",
    facebook: "https://www.facebook.com/haythem.smithii/",
    linkedin: "https://www.linkedin.com/in/haythem-ftirich",
  },
  {
    name: "Mohamed Zrida",
    position: bilingual(
      "Vice President of TIMUN Sfax",
      "Vice-président de TIMUN Sfax",
    ),
    image: "/images/executive-board/mohamed-zrida.jfif",
    facebook: "https://www.facebook.com/mohamed.zrida.374",
    linkedin: "https://www.linkedin.com/in/mohamedzrida/",
  },
  {
    name: "Amir ketata",
    position: bilingual(
      "General secretary of Academic Affairs",
      "Secrétaire général des affaires académiques",
    ),
    image: "/images/executive-board/amir-ketata.jpg",
    facebook: "https://www.facebook.com/amir.ketata.54",
  },
  {
    name: "Eya Hassairi",
    position: bilingual(
      "General secretary of Finance and public affairs",
      "Secrétaire générale des affaires financières et publiques",
    ),
    image: "/images/executive-board/eya-hassairi.jpg",
    facebook: "https://www.facebook.com/eya.hassairi.2025",
  },
  {
    name: "Rouaa Suissi",
    position: bilingual(
      "General secretary of Marketing and Communication",
      "Secrétaire générale du marketing et de la communication",
    ),
    image: "/images/executive-board/rouaa-suissi.jpg",
    facebook: "https://www.facebook.com/rouaasuiss",
  },
];