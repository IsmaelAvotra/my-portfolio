interface Experience {
  id: number
  role: string
  date: string
  company: string
  currentRole: boolean
  description: string
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full stack web developer',
    date: 'Jul 2023 - ',
    company: '3C Labcom',
    currentRole: true,
    description:
      "I built Coach Labib's website using Next.js, featuring a services page and an articles page with detailed content. The site was deployed online to ensure accessibility to users. The deployment process involved leveraging the latest route management capabilities of Next.js 13.",
  },
  {
    id: 2,

    role: 'Full stack web developer',
    date: 'Fev 2023 - Mai 2023',
    company: 'Safe Labs',
    currentRole: false,
    description:
      'During this internship, I developed the Express.js backend for user management, including signin and signup functionalities. I also assisted the team with the frontend development of the Grandioses app using Flutter, and worked on the frontend of others website.',
  },
  {
    id: 3,

    role: 'Intern in Finance ',
    date: 'July 2021',
    company: 'Logifin Conseil',
    currentRole: false,
    description:
      "I collaborated in creating a financial forecast plan and contributed to the elaboration of a comprehensive business plan. This involved analyzing various financial ratios to gain insights into the company's financial health and performance.",
  },
  {
    id: 4,
    role: 'Initiation internship',
    date: 'Jun 2020 - Jul 2020',
    company: 'MC Audit',
    currentRole: false,
    description:
      'During this internship, I gained experience in various aspects of financial and accounting tasks. I successfully handled tasks related to calculating VAT and making declarations on the DGI website.I was involved in preparing employee payrolls.',
  },
]
