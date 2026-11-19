/**
 * Phase 4 public copy.
 *
 * Provenance:
 * - National TIMUN history, TIMUN Sfax history and the six objectives are
 *   faithful English renderings of TIMUN_Sfax_Website_Project_Documentation.docx
 *   §2.1–2.2, which the owner approved on 19 Nov 2026.
 * - The vision statement and the short value descriptions are original English
 *   copy written at the owner's request ("do ur magic on vision, mission and
 *   values"). They add no facts, dates, names, figures or endorsements.
 * - No other organizational claims are published anywhere in this module.
 */

export const nationalTimun = {
  eyebrow: "National affiliation",
  name: "TIMUN",
  fullName: "Tunisian International Model United Nations",
  lead: "TIMUN stands for Tunisian International Model United Nations. It was created in 2009 as a club at the Faculty of Legal, Political and Social Sciences of Tunis.",
  paragraphs: [
    "Its objective is to promote the purposes and principles of the United Nations and to strengthen young students' skills.",
    "In 2012 the national organization expanded by establishing clubs throughout Tunisia. Today it brings together 20 TIMUN clubs nationwide.",
    "TIMUN organized the first United Nations simulation conference in Tunisia and the Maghreb in April 2010. Since 2015 it has been under the High Patronage of the Ministry of Foreign Affairs, and it submitted a final simulation report containing committee resolutions to the Tunisian government.",
  ],
} as const;

export const sfaxHistory = {
  eyebrow: "Our chapter",
  name: "TIMUN Sfax",
  lead: "The first Model United Nations conference in Sfax was organized in 2018.",
  paragraphs: [
    "Following its success, the national organization accepted the launch of a TIMUN club in Sfax, founded in 2018.",
    "The chapter promotes the objectives and values of the United Nations Charter through high-level academic simulations, and through the study and practice of formal diplomacy.",
  ],
} as const;

export const mission = {
  label: "Mission",
  lead: "TIMUN Sfax promotes the objectives and values of the United Nations Charter.",
  paragraphs: [
    "We organize high-level academic simulations that replicate United Nations conferences, bodies and agencies — roundtables, discussions, negotiations and debates.",
    "We encourage open-mindedness, cooperation and cultural exchange among students, and encourage young people to engage with their surroundings and act for their region, their country and humanity.",
    "Our activities familiarize students with United Nations structures and complement theoretical knowledge with practical experience, developing analytical, negotiation and rhetorical skills through formal diplomatic language.",
  ],
} as const;

export const vision = {
  label: "Vision",
  lead: "To make Model United Nations a lasting part of Tunisia's student landscape.",
  paragraphs: [
    "A place where young people learn to argue with precision, to listen across difference, and to carry the habits of diplomacy beyond the conference room.",
  ],
} as const;

/** Derived from the supplied objectives; wording written at owner request. */
export const values = {
  label: "Values",
  items: [
    {
      title: "Open-mindedness",
      description: "We make room for perspectives that challenge our own.",
    },
    {
      title: "Cooperation",
      description: "Diplomacy is built with others, not against them.",
    },
    {
      title: "Cultural exchange",
      description: "Every delegation brings a different context to the table.",
    },
    {
      title: "Civic engagement",
      description: "What is debated in committee should matter beyond it.",
    },
    {
      title: "Practical learning",
      description: "Understanding grows through doing as well as through reading.",
    },
    {
      title: "Diplomatic communication",
      description: "Precision, respect and formal language shape how ideas are heard.",
    },
  ],
} as const;

/** Approved dates and milestones from documentation §2.1–2.2. */
export const timeline = [
  {
    year: "2009",
    title: "TIMUN is founded",
    description:
      "A club is created at the Faculty of Legal, Political and Social Sciences of Tunis.",
  },
  {
    year: "April 2010",
    title: "The first simulation conference",
    description:
      "TIMUN organizes the first United Nations simulation conference in Tunisia and the Maghreb.",
  },
  {
    year: "2012",
    title: "National expansion",
    description: "Clubs are established throughout Tunisia.",
  },
  {
    year: "2015",
    title: "High Patronage",
    description:
      "The organization comes under the High Patronage of the Ministry of Foreign Affairs.",
  },
  {
    year: "2018",
    title: "TIMUN Sfax",
    description:
      "The first MUN in Sfax is organized, and a TIMUN club is founded in the city.",
  },
] as const;
