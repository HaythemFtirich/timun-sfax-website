/**
 * Shared, dependency-free i18n primitives.
 *
 * English is the server-rendered default. French is selected client-side from
 * localStorage before paint; no route prefix is added and the current URL is
 * always preserved. This module is safe to import from both server and client
 * components.
 */
export const LANGUAGE_STORAGE_KEY = "timun-language";
export const LANGUAGE_EVENT = "timun:languagechange";

export type Language = "en" | "fr";
export type LocalizedText = { en: string; fr: string };
export type LocalizedTextInput = string | LocalizedText;

export function bilingual(en: string, fr: string): LocalizedText {
  return { en, fr };
}

export function asLocalizedText(value: LocalizedTextInput): LocalizedText {
  return typeof value === "string" ? { en: value, fr: value } : value;
}

export function localize(value: LocalizedTextInput, language: Language): string {
  return asLocalizedText(value)[language];
}

export function isLanguage(value: unknown): value is Language {
  return value === "en" || value === "fr";
}
