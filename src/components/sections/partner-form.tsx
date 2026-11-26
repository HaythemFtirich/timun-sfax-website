"use client";

import { useEffect, useState } from "react";
import { T } from "@/components/i18n";
import { Button } from "@/components/ui";
import { bilingual, type LocalizedText } from "@/lib/i18n";

const TEAM_EMAIL = "timunsfax@gmail.com";
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSebixlJRymEDYq09hgZqoUQqY_e2CD37otKm6H1JiCAZJ24vw/formResponse";
const NAME_ENTRY = "entry.74845307";
const ORGANIZATION_ENTRY = "entry.63190776";
const EMAIL_ENTRY = "entry.761953149";
const HELP_ENTRY = "entry.2115877115";
const MESSAGE_ENTRY = "entry.1811781332";

/** `value` strings are Google Forms choice IDs and must never be translated. */
const helpOptions = [
  {
    value: "financing mun simulation",
    label: bilingual("Financing an MUN simulation", "Financer une simulation MUN"),
  },
  {
    value: "providing workhops",
    label: bilingual("Providing workshops", "Animer des ateliers"),
  },
  {
    value: "collaboration",
    label: bilingual("Collaboration", "Collaboration"),
  },
  {
    value: "sponsoring opportunity",
    label: bilingual("Sponsoring opportunity", "Soutenir une opportunité"),
  },
  {
    value: "offering a service/product",
    label: bilingual(
      "Offering a service or product",
      "Proposer un service ou un produit",
    ),
  },
  { value: "other", label: bilingual("Other", "Autre") },
] as const;

const submitErrorCopy = bilingual(
  "Your request could not be sent right now. Please try again, or contact the team directly.",
  "Votre demande n'a pas pu être envoyée pour le moment. Veuillez réessayer ou contacter directement l'équipe.",
);

const nameLabel = bilingual("Name", "Nom");
const namePlaceholder = bilingual("Your name", "Votre nom");
const organizationLabel = bilingual("Organization", "Organisation");
const organizationPlaceholder = bilingual(
  "Your organization",
  "Votre organisation",
);
const emailLabel = bilingual("Email", "E-mail");
const emailPlaceholder = bilingual("you@example.com", "vous@exemple.com");
const helpLabel = bilingual(
  "How would you like to help?",
  "Comment souhaitez-vous aider ?",
);
const selectOption = bilingual("Select an option", "Sélectionnez une option");
const messageLabel = bilingual("Message", "Message");
const messagePlaceholder = bilingual(
  "Tell us about your idea, how you would like to partner, or any questions you have",
  "Parlez-nous de votre idée, de votre souhait de partenariat ou de vos questions",
);
const sendingLabel = bilingual("Sending...", "Envoi...");
const submitLabel = bilingual(
  "Send partnership request",
  "Envoyer la demande de partenariat",
);
const helperBefore = bilingual(
  "Your request will be sent to the TIMUN Sfax team. You can also reach us at ",
  "Votre demande sera envoyée à l'équipe de TIMUN Sfax. Vous pouvez aussi nous contacter à l'adresse ",
);
const thanksEyebrow = bilingual("Thank you", "Merci");
const thanksTitle = bilingual(
  "Thank you for your interest in partnering with TIMUN Sfax.",
  "Merci de votre intérêt pour un partenariat avec TIMUN Sfax.",
);
const thanksBody = bilingual(
  "Your request has been sent to the TIMUN Sfax team.",
  "Votre demande a été envoyée à l'équipe de TIMUN Sfax.",
);
const closeLabel = bilingual("Close", "Fermer");

export function PartnerForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [help, setHelp] = useState("");
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
    const trimmedOrganization = organization.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (
      !trimmedName ||
      !trimmedOrganization ||
      !trimmedEmail ||
      !help ||
      !trimmedMessage
    ) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      formData.append(NAME_ENTRY, trimmedName);
      formData.append(ORGANIZATION_ENTRY, trimmedOrganization);
      formData.append(EMAIL_ENTRY, trimmedEmail);
      formData.append(HELP_ENTRY, help);
      formData.append(MESSAGE_ENTRY, trimmedMessage);

      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setShowThanks(true);
      setName("");
      setOrganization("");
      setEmail("");
      setHelp("");
      setMessage("");
    } catch {
      setSubmitError(submitErrorCopy);
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    "mt-3 w-full rounded-[var(--radius-md)] border border-line bg-surface/40 px-4 py-3 text-foreground placeholder:text-muted transition-colors duration-[var(--duration-fast)] focus:border-gold-bright focus:outline-none";
  const labelClassName =
    "font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold";

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6" data-reveal>
        <div>
          <label htmlFor="partner-name" className={labelClassName}>
            <T value={nameLabel} />
          </label>
          <input
            id="partner-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClassName}
            placeholder={namePlaceholder.en}
            data-i18n-attr="placeholder"
            data-i18n-placeholder-en={namePlaceholder.en}
            data-i18n-placeholder-fr={namePlaceholder.fr}
          />
        </div>

        <div>
          <label htmlFor="partner-organization" className={labelClassName}>
            <T value={organizationLabel} />
          </label>
          <input
            id="partner-organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            value={organization}
            onChange={(event) => setOrganization(event.target.value)}
            className={inputClassName}
            placeholder={organizationPlaceholder.en}
            data-i18n-attr="placeholder"
            data-i18n-placeholder-en={organizationPlaceholder.en}
            data-i18n-placeholder-fr={organizationPlaceholder.fr}
          />
        </div>

        <div>
          <label htmlFor="partner-email" className={labelClassName}>
            <T value={emailLabel} />
          </label>
          <input
            id="partner-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClassName}
            placeholder={emailPlaceholder.en}
            data-i18n-attr="placeholder"
            data-i18n-placeholder-en={emailPlaceholder.en}
            data-i18n-placeholder-fr={emailPlaceholder.fr}
          />
        </div>

        <div>
          <label htmlFor="partner-help" className={labelClassName}>
            <T value={helpLabel} />
          </label>
          <select
            id="partner-help"
            name="help"
            required
            value={help}
            onChange={(event) => setHelp(event.target.value)}
            className={inputClassName}
          >
            <option value="" disabled>
              <T value={selectOption} />
            </option>
            {helpOptions.map((option) => (
              <option key={option.value} value={option.value}>
                <T value={option.label} />
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="partner-message" className={labelClassName}>
            <T value={messageLabel} />
          </label>
          <textarea
            id="partner-message"
            name="message"
            required
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${inputClassName} resize-y`}
            placeholder={messagePlaceholder.en}
            data-i18n-attr="placeholder"
            data-i18n-placeholder-en={messagePlaceholder.en}
            data-i18n-placeholder-fr={messagePlaceholder.fr}
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
          <Button type="submit" disabled={isSubmitting}>
            <T value={isSubmitting ? sendingLabel : submitLabel} />
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
            aria-labelledby="partner-thanks-title"
            aria-describedby="partner-thanks-desc"
            className="w-full max-w-lg rounded-[var(--radius-lg)] border border-line bg-surface p-7 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="font-mono text-micro uppercase tracking-[var(--tracking-micro)] text-gold">
              <T value={thanksEyebrow} />
            </p>
            <h3
              id="partner-thanks-title"
              className="mt-4 font-display text-card font-bold tracking-[var(--tracking-display)] text-foreground text-balance"
            >
              <T value={thanksTitle} />
            </h3>
            <p id="partner-thanks-desc" className="mt-4 text-muted">
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
    </>
  );
}
