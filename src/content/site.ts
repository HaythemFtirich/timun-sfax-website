/**
 * Factual site identity. Every value here is approved or supplied by the
 * project owner — see docs/PHASE4_CONTENT_PROPOSAL.md and TD-22.
 *
 * Official names stay verbatim in both languages. Only descriptive copy is
 * localized.
 */
import { bilingual } from "@/lib/i18n";

export const site = {
  name: "TIMUN Sfax",
  fullName: "Tunisian International Model United Nations",
  location: bilingual("Sfax, Tunisia", "Sfax, Tunisie"),
  tagline: bilingual(
    "Diplomacy. Leadership. Negotiation.",
    "Diplomatie. Leadership. Négociation.",
  ),
} as const;
