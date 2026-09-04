import { ReactNode } from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaLinux, FaDatabase } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiRedis,
  SiVitest,
  SiCypress,
  SiDocker,
  SiGithubactions,
  SiFramer,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { HiUserGroup, HiLightBulb, HiPuzzle, HiAcademicCap, HiClipboardList } from 'react-icons/hi'

type Level = 'Expert' | 'Advanced' | 'Proficient' | 'Familiar'

interface Skills {
  icon: ReactNode
  name: string
  level: Level
  color: string
}

interface SkillsTab {
  id: number
  skills: Skills[]
}

interface SoftSkils {
  icon: ReactNode
  quality: string
  description: string
  tag: string
}

export const skillsTab: SkillsTab[] = [
  {
    id: 1,
    skills: [
      { icon: <AiFillHtml5 />, name: 'HTML5',      level: 'Advanced',  color: '#e34c26' },
      { icon: <FaCss3Alt />,   name: 'CSS3',       level: 'Advanced',  color: '#2965f1' },
      { icon: <SiTailwindcss />, name: 'Tailwind', level: 'Advanced',    color: '#0ea5e9' },
      { icon: <IoLogoJavascript />, name: 'JavaScript', level: 'Advanced', color: '#ca8a04' },
      { icon: <SiTypescript />, name: 'TypeScript', level: 'Advanced',  color: '#3178c6' },
      { icon: <FaReact />,     name: 'React',      level: 'Advanced',    color: '#0e7490' },
      { icon: <TbBrandNextjs />, name: 'Next.js',  level: 'Advanced',    color: '#404040' },
      { icon: <SiFramer />,      name: 'Framer Motion', level: 'Proficient', color: '#0055ff' },
    ],
  },
  {
    id: 2,
    skills: [
      { icon: <FaNodeJs />,    name: 'Node.js',    level: 'Advanced',  color: '#417e38' },
      { icon: <SiExpress />,   name: 'Express',    level: 'Advanced',  color: '#444444' },
      { icon: <SiNestjs />,    name: 'NestJS',     level: 'Familiar',  color: '#e0234e' },
      { icon: <SiMongodb />,   name: 'MongoDB',    level: 'Proficient', color: '#13aa52' },
      { icon: <SiPostgresql />, name: 'PostgreSQL', level: 'Proficient', color: '#336791' },
      { icon: <FaDatabase />,  name: 'SQL',        level: 'Advanced',  color: '#e97316' },
    ],
  },
  {
    id: 3,
    skills: [
      { icon: <FaGitAlt />,       name: 'Git',     level: 'Advanced',    color: '#f14e32' },
      { icon: <SiRedux />,        name: 'Redux',   level: 'Advanced',  color: '#764abc' },
      { icon: <SiRedis />,        name: 'Redis',   level: 'Familiar',  color: '#cc2222' },
      { icon: <SiVitest />,       name: 'Vitest',  level: 'Proficient', color: '#6e9f18' },
      { icon: <SiCypress />,      name: 'Cypress', level: 'Proficient', color: '#1b1e2e' },
      { icon: <SiDocker />,        name: 'Docker',  level: 'Familiar',  color: '#1d63ed' },
      { icon: <FaLinux />,         name: 'Linux',   level: 'Familiar',  color: '#e8a202' },
      { icon: <SiGithubactions />, name: 'CI/CD',   level: 'Familiar',  color: '#2088ff' },
    ],
  },
]

export const softSkills: SoftSkils[] = [
  {
    icon: <HiUserGroup />,
    quality: 'Team Collaboration',
    tag: 'Leadership',
    description:
      'At Alter Systeme, I regularly take part in cross-functional design workshops with product and design teams before development starts. At Safe Labs Agency, I worked closely with designers and backend developers to deliver consistent web and mobile experiences — teamwork has shaped how I approach every project.',
  },
  {
    icon: <HiLightBulb />,
    quality: 'Creativity',
    tag: 'Creative',
    description:
      "I've designed UI/UX mockups in Figma for real client projects, including a multilingual social platform and a medical diagnosis tool, before turning them into working interfaces. I enjoy finding the right balance between a clean visual design and a technically solid implementation.",
  },
  {
    icon: <HiPuzzle />,
    quality: 'Problem Solving',
    tag: 'Analytical',
    description:
      "From integrating REST APIs to structuring frontend architecture on production applications, I'm used to breaking down complex features into manageable pieces. I'm confident tackling unfamiliar problems on my own, but I also know when to ask for guidance to move faster.",
  },
  {
    icon: <HiAcademicCap />,
    quality: 'Autodidact',
    tag: 'Agility',
    description:
      'I started as a finance student before teaching myself web development from scratch. That same self-taught mindset now drives how I pick up new tools and technologies on the job — most recently expanding into NestJS, Docker and CI/CD workflows through hands-on project work.',
  },
  {
    icon: <HiClipboardList />,
    quality: 'Organizational Skills',
    tag: 'Strategy',
    description:
      "I've built and shipped an entire company website on my own, from architecture to deployment, which taught me to keep code structured and maintainable without relying on someone else to catch what I miss. I apply the same discipline to every project I work on, big or small.",
  },
]
