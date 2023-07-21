import { ReactNode } from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaNodeJs, FaGetPocket } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDart,
  SiFlutter,
  SiFirebase,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { MdRealEstateAgent } from 'react-icons/md'
import { StaticImageData } from 'next/image'

import teamWork from '@/../public/soft11.jpg'
import creativity from '@/../public/soft22.jpg'
import problemSolving from '@/../public/soft33.jpg'
import autodidact from '@/../public/soft44.webp'
import organizational from '@/../public/soft55.jpg'

interface Skills {
  icon: ReactNode
  name: string
}

interface SkillsTab {
  id: number
  skills: Skills[]
}

interface SoftSkils {
  imageUrl: StaticImageData
  quality: string
  description: string
}

export const skillsTab: SkillsTab[] = [
  {
    id: 1,
    skills: [
      {
        icon: <AiFillHtml5 />,
        name: 'HTML5',
      },
      {
        icon: <FaCss3Alt />,
        name: 'CSS3',
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind',
      },
      {
        icon: <IoLogoJavascript />,
        name: 'Javascript',
      },
      {
        icon: <SiTypescript />,
        name: 'Typescript',
      },
      {
        icon: <FaReact />,
        name: 'React',
      },
      {
        icon: <TbBrandNextjs />,
        name: 'Next',
      },
    ],
  },
  {
    id: 2,
    skills: [
      {
        icon: <FaNodeJs />,
        name: 'NodeJs',
      },
      {
        icon: <SiExpress />,
        name: 'ExpressJs',
      },
      {
        icon: <SiNestjs />,
        name: 'NestJs',
      },
      {
        icon: <SiMongodb />,
        name: 'MongoDB',
      },
      {
        icon: <SiPostgresql />,
        name: 'Postgress',
      },
      {
        icon: <SiPrisma />,
        name: 'Prisma',
      },
    ],
  },
  {
    id: 3,
    skills: [
      {
        icon: <SiDart />,
        name: 'Dart',
      },
      {
        icon: <SiFlutter />,
        name: 'Flutter',
      },
      {
        icon: <SiFirebase />,
        name: 'Firebase',
      },
      {
        icon: <MdRealEstateAgent />,
        name: 'Riverpod',
      },
      {
        icon: <FaGetPocket />,
        name: 'GetX',
      },
    ],
  },
]

export const softSkills: SoftSkils[] = [
  {
    imageUrl: teamWork,
    quality: 'Team Work',
    description:
      'During my various internships, I have always seen the importance of teamwork. As a developer, teamwork is an essential quality.',
  },
  {
    imageUrl: creativity,
    quality: 'Creativity',
    description:
      ' I am constantly using my imagination to find new and innovative solutions to problems and enhance the user experience. ',
  },
  {
    imageUrl: problemSolving,
    quality: 'Problem Solving',
    description:
      'I possess a robust problem-solving skill, yet I am not hesitant to seek guidance from experienced individuals whenever necessary.',
  },
  {
    imageUrl: autodidact,
    quality: 'Autodidact',
    description:
      "I recognize the significance of both independent work and being a valuable team player, actively contributing to the project's success.",
  },
  {
    imageUrl: organizational,
    quality: 'Organizational skills',
    description:
      'This allow me to organize my code in a structured manner improves code maintainability, and scalability of web projects.',
  },
]
