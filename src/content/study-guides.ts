/**
 * Phase 6 study guides.
 *
 * Provenance: PDF files were supplied by the project owner in assets/ on
 * 19 November 2026. Files are served from public/documents/study-guides/.
 * Titles are owner-provided labels; no descriptions, keywords, or other
 * metadata are invented. PDF filenames remain byte-for-byte unchanged in both
 * languages; only the display label is localized.
 */
import { bilingual, type LocalizedText } from "@/lib/i18n";

export type StudyGuide = {
  /** Display title shown in the library. */
  title: LocalizedText;
  /** PDF filename in public/documents/study-guides/. */
  file: string;
};

export const studyGuides: StudyGuide[] = [
  {
    title: bilingual("african union - astra mun", "Union africaine - Astra MUN"),
    file: "african union de Timun study guide eng.pdf",
  },
  {
    title: bilingual(
      "harry potter Ministry of magic",
      "Harry Potter - Ministère de la magie",
    ),
    file: "Harry Potter MoM_ Discrimination against Muggle-borns and half-bloods.pdf",
  },
  {
    title: bilingual("UNICEF child labour", "UNICEF - travail des enfants"),
    file: "LE TRAVAIL DES ENFANTS.pdf",
  },
  {
    title: bilingual(
      "UNSC Ukrainian Russian conflict",
      "Conseil de sécurité - conflit ukraino-russe",
    ),
    file: "RUSSIA-CONFLICT-STUDY-GUIDE.pdf",
  },
  {
    title: bilingual(
      "UNSC undersea cables - greekmun",
      "Conseil de sécurité - câbles sous-marins - GreekMUN",
    ),
    file: "[compressed] Safeguarding Undersea Cables - Addressing the Threat of Targeted Attacks in Conflict Zones.pdf",
  },
  {
    title: bilingual(
      "UNSC grand simulation 2.0",
      "Conseil de sécurité - grande simulation 2.0",
    ),
    file: "Security Council Study Guide.pdf",
  },
  {
    title: bilingual(
      "UNSC the protection of global cyber security",
      "Conseil de sécurité - protection de la cybersécurité mondiale",
    ),
    file: "SECURITY COUNCIL_Batch Compress.pdf",
  },
  {
    title: bilingual(
      "UN Human Rights Council Minority Rights",
      "Conseil des droits de l'homme - droits des minorités",
    ),
    file: "Timun-sfax Mini-simulation study guide.pdf",
  },
  {
    title: bilingual(
      "UNHRC: Tunisian freedom of speech",
      "Conseil des droits de l'homme : liberté d'expression en Tunisie",
    ),
    file: "Tunisia_ freedom of speech and human rights infringements_Batch Compress.pdf",
  },
  {
    title: bilingual(
      "UN Human Rights Council grand simulation 2.0",
      "Conseil des droits de l'homme - grande simulation 2.0",
    ),
    file: "Study Guide UN Human Rights Council.pdf",
  },
  {
    title: bilingual(
      "UN Women female genital mutilation",
      "ONU Femmes - excision",
    ),
    file: "UN WOMEN.pdf",
  },
  {
    title: bilingual(
      "UN Women grand simulation 2.0",
      "ONU Femmes - grande simulation 2.0",
    ),
    file: "study guide un women.pdf",
  },
  {
    title: bilingual(
      "UNESCO grand simulation 2.0",
      "UNESCO - grande simulation 2.0",
    ),
    file: "unesco study guide.pdf",
  },
  {
    title: bilingual(
      "UNHRC grand simulation 2.0",
      "Conseil des droits de l'homme - grande simulation 2.0",
    ),
    file: "unhrc study guide.pdf",
  },
  {
    title: bilingual(
      "UNHRC - astra mun",
      "Conseil des droits de l'homme - Astra MUN",
    ),
    file: "unhrc Timun study guide eng (1).pdf",
  },
  {
    title: bilingual(
      "UNSC Strait of Hormuz Blockade",
      "Conseil de sécurité - blocus du détroit d'Ormuz",
    ),
    file: "Study Guide UNSC Strait of Hormuz Blockade.pdf",
  },
  {
    title: bilingual("WHO grand simulation 2.0", "OMS - grande simulation 2.0"),
    file: "who study guide.pdf",
  },
];
