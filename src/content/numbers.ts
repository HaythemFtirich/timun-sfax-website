/**
 * TIMUN Sfax in numbers.
 *
 * Figures provided by the owner (2026): TIMUN Sfax active since 2018, 40+
 * active members, and 5 grand simulations hosted since its foundation. The
 * figures themselves are never translated or reformatted.
 */
import { bilingual } from "@/lib/i18n";

export const numbers = [
  {
    figure: "2018",
    label: bilingual("Active since", "Actif depuis"),
    note: bilingual(
      "TIMUN Sfax has been active since 2018.",
      "TIMUN Sfax est actif depuis 2018.",
    ),
  },
  {
    figure: "+40",
    label: bilingual("Active members", "Membres actifs"),
    note: bilingual(
      "Currently bringing together more than 40 active members.",
      "Rassemble aujourd'hui plus de 40 membres actifs.",
    ),
  },
  {
    figure: "5",
    label: bilingual("Grand simulations", "Grandes simulations"),
    note: bilingual(
      "Five grand simulations hosted since the chapter's foundation.",
      "Cinq grandes simulations organisées depuis la fondation du club.",
    ),
  },
] as const;
