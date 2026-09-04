interface Experience {
  id: number
  role: string
  date: string
  company: string
  description: string
  tags: string[]
  isCurrent?: boolean
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    date: 'Jul 2023 – Present',
    company: 'Alter Systeme',
    isCurrent: true,
    description:
      'Developing web platforms end to end in a remote CDI position — building interfaces from Figma designs, implementing REST APIs with Node.js, and shipping features to production. Working primarily with React, Next.js, TypeScript, and NestJS.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'REST APIs'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    date: 'Feb 2022 – Jun 2023',
    company: 'Safe Labs Agency',
    description:
      'Contributed to web and mobile projects at a Marrakech-based agency. Built responsive interfaces with React and participated in Flutter mobile development, collaborating closely with design and backend teams.',
    tags: ['React', 'Flutter', 'UI/UX','Figma'],
  },
  {
    id: 3,
    role: 'Intern in Finance',
    date: 'Jun 2021 – Aug 2021',
    company: 'Logifin Conseil',
    description:
      "Collaborated in creating a financial forecast plan and contributed to the elaboration of a comprehensive business plan. Analyzed various financial ratios to gain insights into the company's financial health and performance.",
    tags: ['Financial Analysis', 'Forecasting'],
  },
]
