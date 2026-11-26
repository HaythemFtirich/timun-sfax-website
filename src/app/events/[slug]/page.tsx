import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { T } from "@/components/i18n";
import { Section } from "@/components/ui";
import { events, getEventBySlug } from "@/content/events";
import { bilingual } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const eventsLabel = bilingual("Events", "Événements");
const dateLabel = bilingual("Date", "Date");
const locationLabel = bilingual("Location", "Lieu");
const galleryLabel = bilingual("Gallery", "Galerie");
const backLabel = bilingual("Back to events", "Retour aux événements");

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) {
    return { title: "Event" };
  }

  const description = `${event.description.en} — ${event.date}, ${event.location}.`;
  return {
    title: event.title,
    description,
    openGraph: {
      title: `${event.title} | TIMUN Sfax`,
      description,
    },
  };
}

async function EventDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <main id="main" className="flex-1">
      <Section className="border-b border-line pb-16 pt-40 sm:pt-48" data-reveal>
        <Link
          href="/events"
          className="inline-block border-b border-transparent pb-1 font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-muted transition-colors duration-[var(--duration-fast)] hover:border-gold hover:text-gold-bright"
        >
          <T value={eventsLabel} />
        </Link>
        <p className="mt-10 font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
          {event.date} · {event.location}
        </p>
        <h1 className="mt-5 max-w-[18ch] font-display text-hero font-extrabold leading-[0.9] tracking-[-0.055em] text-foreground text-balance">
          {event.title}
        </h1>
        <p className="mt-8 max-w-[62ch] text-body-lg text-muted">
          <T value={event.description} />
        </p>
      </Section>

      <Section className="border-b border-line" data-reveal>
        <dl className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <div>
            <dt className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={dateLabel} />
            </dt>
            <dd className="mt-3 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
              {event.date}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={locationLabel} />
            </dt>
            <dd className="mt-3 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground">
              {event.location}
            </dd>
          </div>
        </dl>
      </Section>

      {event.gallery && event.gallery.length > 0 ? (
        <Section className="border-b border-line" data-reveal>
          <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
            <T value={galleryLabel} />
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.gallery.map((src, index) => {
              const altEn = `${event.title} photo ${index + 2}`;
              const altFr = `Photo de ${event.title} ${index + 2}`;
              return (
                <div
                  key={src}
                  tabIndex={0}
                  className="event-gallery-item relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] border border-line bg-surface/30"
                >
                  <Image
                    src={src}
                    alt={altEn}
                    data-i18n-attr="alt"
                    data-i18n-alt-en={altEn}
                    data-i18n-alt-fr={altFr}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="event-gallery-image object-cover"
                  />
                  <div className="event-gallery-overlay" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </Section>
      ) : null}

      <Section data-reveal>
        <Link
          href="/events"
          className="inline-block border-b border-gold-line pb-1 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground transition-colors duration-[var(--duration-fast)] hover:border-gold-bright hover:text-gold-bright"
        >
          <T value={backLabel} />
        </Link>
      </Section>
    </main>
  );
}

export default function EventDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={null}>
      <EventDetailContent params={params} />
    </Suspense>
  );
}
