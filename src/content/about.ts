/**
 * Phase 4 public copy.
 *
 * Provenance:
 * - National TIMUN history, TIMUN Sfax history and the six objectives are
 *   faithful English renderings of TIMUN_Sfax_Website_Project_Documentation.docx
 *   §2.1–2.2, which the owner approved on 19 Nov 2026. The French layer is a
 *   faithful rendering of that same approved copy; no facts are added.
 * - The vision statement and the short value descriptions are original English
 *   copy written at the owner's request ("do ur magic on vision, mission and
 *   values"). They add no facts, dates, names, figures or endorsements.
 * - No other organizational claims are published anywhere in this module.
 */
import { bilingual } from "@/lib/i18n";

export const nationalTimun = {
  eyebrow: bilingual("National affiliation", "Affiliation nationale"),
  name: "TIMUN",
  fullName: "Tunisian International Model United Nations",
  paragraphs: [
    bilingual(
      "Created at the Faculty of Legal, Political and Social Sciences of Tunis, TIMUN promotes the purposes and principles of the United Nations while strengthening students skills. It organized the first UN simulation conference in Tunisia and the Maghreb in 2010, and today unites 20 clubs nationwide under the High Patronage of the Ministry of Foreign Affairs.",
      "Créé à la Faculté de droit, de sciences politiques et sociales de Tunis, TIMUN promeut les buts et principes des Nations unies tout en renforçant les compétences des étudiants. Il a organisé la première conférence de simulation des Nations unies en Tunisie et au Maghreb en 2010 et rassemble aujourd'hui 20 clubs à travers le pays sous le Haut Patronage du ministère des Affaires étrangères.",
    ),
  ],
} as const;

export const sfaxHistory = {
  eyebrow: bilingual("Our club", "Notre club"),
  name: "TIMUN Sfax",
  lead: bilingual(
    "TIMUN Sfax was founded in 2018, following the success of the first Model United Nations conference held in the city.",
    "TIMUN Sfax a été fondé en 2018, suite au succès de la première conférence de simulation des Nations unies tenue dans la ville.",
  ),
  paragraphs: [
    bilingual(
      "As part of the national TIMUN network, our club promotes the objectives and values of the United Nations Charter through high-level academic simulations and the practice of formal diplomacy, giving students a place to grow as speakers, negotiators and leaders.",
      "Au sein du réseau national TIMUN, notre club promeut les objectifs et les valeurs de la Charte des Nations unies à travers des simulations académiques de haut niveau et la pratique de la diplomatie formelle, offrant aux étudiants un espace pour se développer comme orateurs, négociateurs et leaders.",
    ),
  ],
} as const;

export const mission = {
  label: bilingual("Mission", "Mission"),
  lead: bilingual(
    "TIMUN Sfax promotes the objectives and values of the United Nations Charter.",
    "TIMUN Sfax promeut les objectifs et les valeurs de la Charte des Nations unies.",
  ),
  bullets: [
    bilingual(
      "Academic simulations of UN conferences and bodies",
      "Simulations académiques de conférences et d'organes des Nations unies",
    ),
    bilingual(
      "Cooperation and cultural exchange among students",
      "Coopération et échange culturel entre étudiants",
    ),
    bilingual(
      "Young people acting for their region, country and humanity",
      "Des jeunes qui agissent pour leur région, leur pays et l'humanité",
    ),
    bilingual(
      "Analytical, negotiation and rhetorical skills through diplomatic language",
      "Compétences analytiques, de négociation et de rhétorique à travers la langue diplomatique",
    ),
  ],
} as const;

export const vision = {
  label: bilingual("Vision", "Vision"),
  lead: bilingual(
    "To make Model United Nations a lasting part of Tunisia's student landscape.",
    "Faire du modèle des Nations unies une part durable du paysage étudiant tunisien.",
  ),
  paragraphs: [
    bilingual(
      "A place where young people learn to argue with precision, to listen across difference, and to carry the habits of diplomacy beyond the conference room.",
      "Un lieu où les jeunes apprennent à argumenter avec précision, à écouter malgré les différences et à emporter les habitudes de la diplomatie au-delà de la salle de conférence.",
    ),
  ],
} as const;

/** Derived from the supplied objectives; wording written at owner request. */
export const values = {
  label: bilingual("Values", "Valeurs"),
  items: [
    {
      title: bilingual("Open-mindedness", "Ouverture d'esprit"),
      description: bilingual(
        "We make room for perspectives that challenge our own.",
        "Nous faisons place à des points de vue qui remettent en question les nôtres.",
      ),
    },
    {
      title: bilingual("Cooperation", "Coopération"),
      description: bilingual(
        "Diplomacy is built with others, not against them.",
        "La diplomatie se construit avec les autres, pas contre eux.",
      ),
    },
    {
      title: bilingual("Cultural exchange", "Échange culturel"),
      description: bilingual(
        "Every delegation brings a different context to the table.",
        "Chaque délégation apporte un contexte différent à la table.",
      ),
    },
    {
      title: bilingual("Civic engagement", "Engagement citoyen"),
      description: bilingual(
        "What is debated in committee should matter beyond it.",
        "Ce qui est débattu en commission doit compter au-delà.",
      ),
    },
    {
      title: bilingual("Practical learning", "Apprentissage par la pratique"),
      description: bilingual(
        "Understanding grows through doing as well as through reading.",
        "La compréhension grandit par la pratique autant que par la lecture.",
      ),
    },
    {
      title: bilingual("Diplomatic communication", "Communication diplomatique"),
      description: bilingual(
        "Precision, respect and formal language shape how ideas are heard.",
        "La précision, le respect et le langage formel façonnent la façon dont les idées sont entendues.",
      ),
    },
  ],
} as const;

/** Approved dates and milestones from documentation §2.1–2.2. */
export const timeline = [
  {
    year: "2009",
    title: bilingual("TIMUN is founded", "Fondation de TIMUN"),
    description: bilingual(
      "A club is created at the Faculty of Legal, Political and Social Sciences of Tunis.",
      "Un club est créé à la Faculté de droit, de sciences politiques et sociales de Tunis.",
    ),
  },
  {
    year: "April 2010",
    title: bilingual(
      "The first simulation conference",
      "La première conférence de simulation",
    ),
    description: bilingual(
      "TIMUN organizes the first United Nations simulation conference in Tunisia and the Maghreb.",
      "TIMUN organise la première conférence de simulation des Nations unies en Tunisie et au Maghreb.",
    ),
  },
  {
    year: "2012",
    title: bilingual("National expansion", "Expansion nationale"),
    description: bilingual(
      "Clubs are established throughout Tunisia.",
      "Des clubs sont créés partout en Tunisie.",
    ),
  },
  {
    year: "2015",
    title: bilingual("High Patronage", "Haut Patronage"),
    description: bilingual(
      "The organization comes under the High Patronage of the Ministry of Foreign Affairs.",
      "L'organisation passe sous le Haut Patronage du ministère des Affaires étrangères.",
    ),
  },
  {
    year: "2018",
    title: bilingual("TIMUN Sfax", "TIMUN Sfax"),
    description: bilingual(
      "The first MUN in Sfax is organized, and a TIMUN club is founded in the city.",
      "La première simulation des Nations unies est organisée à Sfax, et un club TIMUN y est fondé.",
    ),
  },
] as const;
