import { AboutPreview } from "@/components/sections/about-preview";
import { InteractiveTimeline } from "@/components/sections/interactive-timeline";
import { NumbersDashboard } from "@/components/sections/numbers-dashboard";
import { Principles } from "@/components/sections/principles";
import { Hero } from "@/components/sections/hero";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <AboutPreview />
      <NumbersDashboard />
      <Principles />
      <InteractiveTimeline />

      <Section className="border-t border-line" data-reveal>
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
