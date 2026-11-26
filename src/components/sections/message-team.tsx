"use client";

import { useEffect, useState } from "react";
import { T } from "@/components/i18n";
import { Button, Section, SectionHeading } from "@/components/ui";
import { bilingual, type LocalizedText } from "@/lib/i18n";

const TEAM_EMAIL = "timunsfax@gmail.com";
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSc6MO9xBlyaO9XaiV__yHSG1oOjFuoxTnn4L97CHrRTDGBjvA/formResponse";
const NAME_ENTRY = "entry.1359866602";
const MESSAGE_ENTRY = "entry.1986667533";

const sendError = bilingual(
  "Your message could not be sent right now. Please try again, or email the team directly.",
  "Votre message n'a pas pu être envoyé pour le moment. Veuillez réessayer ou écrire directement à l'équipe.",
);

const heading = {
  eyebrow: bilingual("Message", "Message"),
  title: bilingual("Leave a word for the team.", "Laissez un mot à l'équipe."),
  description: bilingual(
    "Share your message with the TIMUN Sfax team.",
    "Partagez votre message avec l'équipe de TIMUN Sfax.",
  ),
};

const nameLabel = bilingual("Your name", "Votre nom");
const namePlaceholder = bilingual("Enter your name", "Saisissez votre nom");
const messageLabel = bilingual("Your message", "Votre message");
const messagePlaceholder = bilingual(
  "Write your message to the TIMUN Sfax team",
  "Écrivez votre message à l'équipe de TIMUN Sfax",
);
const sendingLabel = bilingual("Sending...", "Envoi...");
const sendLabel = bilingual("Send message", "Envoyer le message");
const helperBefore = bilingual(
  "Your message will be sent to the TIMUN Sfax team. You can also email ",
  "Votre message sera envoyé à l'équipe de TIMUN Sfax. Vous pouvez aussi écrire à ",
);
const thanksEyebrow = bilingual("Thank you", "Merci");
const thanksTitle = bilingual(
  "Thank you for your message.",
  "Merci pour votre message.",
);
const thanksBody = bilingual(
  "Your message has been sent to the TIMUN Sfax team.",
  "Votre message a été envoyé à l'équipe de TIMUN Sfax.",
);
const closeLabel = bilingual("Close", "Fermer");

export function MessageTeam() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<LocalizedText | null>(null);

  useEffect(() => {
    if (!showThanks) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setShowThanks(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showThanks]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      formData.append(NAME_ENTRY, trimmedName);
      formData.append(MESSAGE_ENTRY, trimmedMessage);

      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setShowThanks(true);
      setName("");
      setMessage("");
    } catch {
      setSubmitError(sendError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="message-team" className="border-t border-line">
      <div data-reveal>
        <SectionHeading {...heading} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-2xl space-y-6"
        data-reveal
      >
        <div>
          <label
            htmlFor="message-name"
            className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold"
          >
            <T value={nameLabel} />
          </label>
          <input
            id="message-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-3 w-full rounded-[var(--radius-md)] border border-line bg-surface/40 px-4 py-3 text-foreground placeholder:text-muted transition-colors duration-[var(--duration-fast)] focus:border-gold-bright focus:outline-none"
            placeholder={namePlaceholder.en}
            data-i18n-attr="placeholder"
            data-i18n-placeholder-en={namePlaceholder.en}
            data-i18n-placeholder-fr={namePlaceholder.fr}
          />
        </div>

        <div>
          <label
            htmlFor="message-text"
            className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold"
          >
            <T value={messageLabel} />
          </label>
          <textarea
            id="message-text"
            name="message"
            required
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-3 w-full resize-y rounded-[var(--radius-md)] border border-line bg-surface/40 px-4 py-3 text-foreground placeholder:text-muted transition-colors duration-[var(--duration-fast)] focus:border-gold-bright focus:outline-none"
            placeholder={messagePlaceholder.en}
            data-i18n-attr="placeholder"
            data-i18n-placeholder-en={messagePlaceholder.en}
            data-i18n-placeholder-fr={messagePlaceholder.fr}
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
          <Button type="submit" disabled={isSubmitting}>
            <T value={isSubmitting ? sendingLabel : sendLabel} />
          </Button>
          <p className="text-sm text-muted">
            <T value={helperBefore} />
            <a
              href={`mailto:${TEAM_EMAIL}`}
              className="border-b border-gold-line text-gold-bright transition-colors duration-[var(--duration-fast)] hover:border-gold-bright"
            >
              {TEAM_EMAIL}
            </a>
            .
          </p>
        </div>

        {submitError ? (
          <p className="text-sm text-red-300" role="alert">
            <T value={submitError} />
          </p>
        ) : null}
      </form>

      {showThanks ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 px-4 backdrop-blur-[2px]"
          role="presentation"
          onClick={() => setShowThanks(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="message-thanks-title"
            aria-describedby="message-thanks-desc"
            className="w-full max-w-lg rounded-[var(--radius-lg)] border border-line bg-surface p-7 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={thanksEyebrow} />
            </p>
            <h3
              id="message-thanks-title"
              className="mt-4 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground text-balance"
            >
              <T value={thanksTitle} />
            </h3>
            <p id="message-thanks-desc" className="mt-4 text-muted">
              <T value={thanksBody} />
            </p>
            <div className="mt-8">
              <Button type="button" onClick={() => setShowThanks(false)}>
                <T value={closeLabel} />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
