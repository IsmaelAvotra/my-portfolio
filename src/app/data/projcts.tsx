import { StaticImageData } from 'next/image'

import portfolio from '../assets/portfolio.png'
import project2 from '../assets/project22.png'
import project3 from '../assets/project33.png'
import amp from '../assets/amp.png'
import alterSysteme from '../assets/alter-systeme.png'
import homeodiag from '../assets/homeodiag.png'

export interface Project {
  imageUrl?: StaticImageData
  title: string
  description: { en: string; fr: string }
  projectLink?: string
  githubLink?: string
  stack: string[]
}

export const personalProjects: Project[] = [
  {
    imageUrl: project2,
    title: 'New Home',
    description: {
      en: 'Property listing platform for buying and renting real estate. Features detailed property cards with photos, pricing, and intuitive search and filter functionality tailored to user preferences.',
      fr: "Plateforme de petites annonces immobilières pour l'achat et la location. Propose des fiches détaillées avec photos, prix, et des fonctionnalités de recherche et filtrage intuitives adaptées aux préférences utilisateur.",
    },
    projectLink: 'https://real-estate-app-six-gold.vercel.app/',
    githubLink: 'https://github.com/IsmaelAvotra/real-estate-app',
    stack: ['React', 'CSS3', 'REST API'],
  },
  {
    imageUrl: project3,
    title: 'Find Anime',
    description: {
      en: 'Anime discovery platform powered by the Jikan API. Browse top-ranked titles, get daily recommendations, and search the full catalog with comprehensive series details. Designed and built from scratch.',
      fr: "Plateforme de découverte d'animés alimentée par l'API Jikan. Parcourez les titres les mieux classés, obtenez des recommandations quotidiennes et recherchez dans le catalogue complet avec les détails des séries.",
    },
    projectLink: 'https://animesearch-app.vercel.app/',
    githubLink: 'https://github.com/IsmaelAvotra/animesearch-app',
    stack: ['React', 'Jikan API', 'CSS3'],
  },
  {
    imageUrl: portfolio,
    title: 'My Portfolio',
    description: {
      en: 'Personal developer portfolio built with Next.js App Router and Tailwind CSS. Features a bilingual EN/FR language switcher, smooth animations, and dedicated sections for skills, projects and contact.',
      fr: 'Portfolio développeur personnel construit avec Next.js App Router et Tailwind CSS. Propose un switch de langue EN/FR, des animations fluides et des sections dédiées aux compétences, projets et contact.',
    },
    projectLink: 'https://ismael-avotra.vercel.app/',
    githubLink: 'https://github.com/IsmaelAvotra/my-portfolio',
    stack: ['Next.js', 'Tailwind CSS'],
  },
]

export const professionalProjects: Project[] = [
  {
    imageUrl: amp,
    title: 'Alliance Maroc Palestine',
    description: {
      en: "Institutional website for a Franco-Moroccan solidarity association. Bilingual responsive design with a modular architecture and smooth animations to highlight the association's actions and events.",
      fr: "Site institutionnel pour une association de solidarité franco-marocaine. Design bilingue et responsive avec une architecture modulaire et des animations fluides pour mettre en valeur les actions et événements de l'association.",
    },
    projectLink: 'https://all-maroc-palestine.org/',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
  },
  {
    imageUrl: homeodiag,
    title: 'Homeodiag',
    description: {
      en: 'Medical diagnostic tool for homeopathic practitioners. Browse a remedy catalog, perform cross-symptom searches, and generate patient records. Built collaboratively at Alter Systeme.',
      fr: 'Outil de diagnostic médical pour praticiens homéopathes. Parcourez un catalogue de remèdes, effectuez des recherches croisées par symptômes et générez des dossiers patients. Développé en collaboration chez Alter Systeme.',
    },
    projectLink: 'https://homeodiag.com/',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    imageUrl: alterSysteme,
    title: 'Alter Systeme — Landing Page',
    description: {
      en: 'Company showcase website for Alter Systeme agency, presenting the service offering, portfolio and team. Developed end-to-end — from Figma mockup to production deployment — as a solo project.',
      fr: "Site vitrine de l'agence Alter Systeme, présentant l'offre de services, le portfolio et l'équipe. Développé de bout en bout — de la maquette Figma au déploiement en production — en tant que projet solo.",
    },
    projectLink: 'https://www.alter-systeme.com/',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'NestJS'],
  },
]
