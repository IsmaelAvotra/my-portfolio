interface ExperienceTexts {
  role: string
  description: string
}

interface Experience {
  id: number
  en: ExperienceTexts
  fr: ExperienceTexts
  date: string
  company: string
  tags: string[]
  isCurrent?: boolean
}

export const experiences: Experience[] = [
  {
    id: 1,
    date: 'Jul 2023 – Present',
    company: 'Alter Systeme',
    isCurrent: true,
    en: {
      role: 'Full Stack Developer',
      description:
        'Developing web platforms end to end in a remote CDI position — building interfaces from Figma designs, implementing REST APIs with Node.js, and shipping features to production. Working primarily with React, Next.js, TypeScript, and NestJS.',
    },
    fr: {
      role: 'Développeur Full Stack',
      description:
        "Développement de plateformes web de bout en bout en CDI à distance — conception d'interfaces à partir de maquettes Figma, implémentation d'API REST avec Node.js et mise en production. Travail principalement avec React, Next.js, TypeScript et NestJS.",
    },
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'REST APIs'],
  },
  {
    id: 2,
    date: 'Feb 2022 – Jun 2023',
    company: 'Safe Labs Agency',
    en: {
      role: 'Frontend Developer',
      description:
        'Contributed to web and mobile projects at a Marrakech-based agency. Built responsive interfaces with React and participated in Flutter mobile development, collaborating closely with design and backend teams.',
    },
    fr: {
      role: 'Développeur Frontend',
      description:
        "Contribution à des projets web et mobile dans une agence basée à Marrakech. Création d'interfaces responsive avec React et participation au développement mobile Flutter, en collaboration étroite avec les équipes design et backend.",
    },
    tags: ['React', 'Flutter', 'UI/UX', 'Figma'],
  },
  {
    id: 3,
    date: 'Jun 2021 – Aug 2021',
    company: 'Logifin Conseil',
    en: {
      role: 'Intern in Finance',
      description:
        "Collaborated in creating a financial forecast plan and contributed to the elaboration of a comprehensive business plan. Analyzed various financial ratios to gain insights into the company's financial health and performance.",
    },
    fr: {
      role: 'Stagiaire en Finance',
      description:
        "Participation à la création d'un plan de prévision financière et contribution à l'élaboration d'un business plan complet. Analyse de ratios financiers pour évaluer la santé et la performance financière de l'entreprise.",
    },
    tags: ['Financial Analysis', 'Forecasting'],
  },
]
