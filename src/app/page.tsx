import { AboutPreview } from "@/components/sections/about-preview";
import { Hero } from "@/components/sections/hero";
import { Principles } from "@/components/sections/principles";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <AboutPreview />
      <Principles />

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Explore"
          title="The full story."
          description="National context, our chapter's history, the people behind it and the milestones that shaped TIMUN Sfax."
        />
        <div className="mt-10">
          <ButtonLink href="/about">About TIMUN Sfax</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
