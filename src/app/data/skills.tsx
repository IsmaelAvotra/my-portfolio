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

interface Skills {
  icon: ReactNode
  name: string
}

interface SkillsTab {
  id: number
  skills: Skills[]
}

interface SoftSkils {
  imageUrl: string
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
    imageUrl: '/soft1.jpg',
    quality: 'Team Work',
    description:
      'Team work is a quality essential for a developer,This is beautiful to have it',
  },
  {
    imageUrl: '/soft2.jpg',
    quality: 'Creativity',
    description:
      'Team work is a quality essential for a developer,This is beautiful to have it',
  },
  {
    imageUrl: '/soft3.jpg',
    quality: 'Problem Solving',
    description:
      'Team work is a quality essential for a developer,This is beautiful to have it',
  },
  {
    imageUrl: '/soft4.jpg',
    quality: 'Autodidact',
    description:
      'Team work is a quality essential for a developer,This is beautiful to have it',
  },
  {
    imageUrl: '/soft5.jpg',
    quality: 'Organizational skills',
    description:
      'Team work is a quality essential for a developer,This is beautiful to have it',
  },
]
