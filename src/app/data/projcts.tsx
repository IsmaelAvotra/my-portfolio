import { StaticImageData } from 'next/image'

import project1 from '../assets/project11.png'
import project2 from '../assets/project22.png'
import project3 from '../assets/project33.png'
import amp from '../assets/amp.png'
import alterSysteme from '../assets/alter-systeme.png'
import homeodiag from '../assets/homeodiag.png'

export interface Project {
  imageUrl?: StaticImageData
  title: string
  description: string
  projectLink?: string
  githubLink?: string
  stack: string[]
}

export const personalProjects: Project[] = [
  {
    imageUrl: project2,
    title: 'New Home',
    description:
      'Property listing platform for buying and renting real estate. Features detailed property cards with photos, pricing, and intuitive search and filter functionality tailored to user preferences.',
    projectLink: 'https://real-estate-app-six-gold.vercel.app/',
    githubLink: 'https://github.com/IsmaelAvotra/real-estate-app',
    stack: ['React', 'CSS3', 'REST API'],
  },
  {
    imageUrl: project3,
    title: 'Find Anime',
    description:
      'Anime discovery platform powered by the Jikan API. Browse top-ranked titles, get daily recommendations, and search the full catalog with comprehensive series details. Designed and built from scratch.',
    projectLink: 'https://animesearch-app.vercel.app/',
    githubLink: 'https://github.com/IsmaelAvotra/animesearch-app',
    stack: ['React', 'Jikan API', 'CSS3'],
  },
  {
    imageUrl: project1,
    title: 'Space Tourism',
    description:
      'Multi-page Frontend Mentor challenge built with React. Immersive space-themed UI with smooth page transitions and full responsiveness across all device sizes.',
    projectLink: 'https://space-tourism-ismaelavotra.vercel.app/',
    githubLink: 'https://github.com/IsmaelAvotra/space-tourism',
    stack: ['React', 'CSS3'],
  },
]

export const professionalProjects: Project[] = [
  {
    imageUrl: amp,
    title: 'Alliance Maroc Palestine',
    description:
      "Institutional website for a Franco-Moroccan solidarity association. Bilingual responsive design with a modular architecture and smooth animations to highlight the association's actions and events.",
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
  },
  {
    imageUrl: homeodiag,
    title: 'Homeodiag',
    description:
      'Medical diagnostic tool for homeopathic practitioners. Browse a remedy catalog, perform cross-symptom searches, and generate patient records. Built collaboratively at Alter Systeme.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    imageUrl: alterSysteme,
    title: 'Alter Systeme — Landing Page',
    description:
      'Company showcase website for Alter Systeme agency, presenting the service offering, portfolio and team. Developed end-to-end — from Figma mockup to production deployment — as a solo project.',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'NestJS'],
  },
]
