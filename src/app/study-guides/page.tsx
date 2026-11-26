import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui";
import { StudyGuidesLibrary } from "@/components/sections/study-guides-library";
import { bilingual } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Study Guides",
  description:
    "MUN study guides from TIMUN Sfax, available to read and download as PDFs.",
  openGraph: {
    title: "Study Guides | TIMUN Sfax",
    description:
      "MUN study guides from TIMUN Sfax, available to read and download as PDFs.",
  },
};

export default function StudyGuidesPage() {
  return (
    <main id="main" className="flex-1">
      <Section className="border-b border-line pb-16 pt-40 sm:pt-48" data-reveal>
        <SectionHeading
          as="h1"
          eyebrow={bilingual("Resources", "Ressources")}
          title={bilingual("Study guides.", "Guides d'étude.")}
          description={bilingual(
            "Open any title to read the study guide directly.",
            "Ouvrez un titre pour lire le guide d'étude directement.",
          )}
        />
      </Section>

      <Section className="border-b border-line">
        <StudyGuidesLibrary />
      </Section>
    </main>
  );
}