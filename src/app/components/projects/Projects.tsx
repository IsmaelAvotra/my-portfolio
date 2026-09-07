'use client'
import { useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { personalProjects, professionalProjects, Project } from '../../data/projcts'
import Image from 'next/image'
import Link from 'next/link'
import type { Lang, Dict } from '../../locales'

const ProjectCard = ({ project, lang }: { project: Project; lang: Lang }) => (
  <div className='bg-[#061426] border border-textcolor/10 rounded-xl overflow-hidden flex flex-col hover:border-textcolor/30 transition-colors duration-200 group'>
    {project.imageUrl ? (
      <div className='overflow-hidden p-3 pb-0'>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={340}
          placeholder='blur'
          className='w-full h-[270px] object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-300'
        />
      </div>
    ) : (
      <div className='w-full h-[160px] flex items-center justify-center bg-gradient-to-br from-[#0d1f36] to-[#061426] border-b border-textcolor/10'>
        <span className='text-[64px] font-black text-textcolor/[0.06] select-none leading-none'>
          {project.title.charAt(0)}
        </span>
      </div>
    )}
    <div className='px-5 pt-7 pb-5 flex flex-col gap-3 flex-1'>
      <div className='flex items-start justify-between gap-3'>
        <h3 className='text-titlecolor font-bold text-[16px] leading-snug'>{project.title}</h3>
        <div className='flex gap-3 flex-shrink-0 pt-[2px]'>
          {project.githubLink && (
            <Link href={project.githubLink} target='_blank' className='text-textcolor/30 hover:text-textcolor transition-colors'>
              <SiGithub className='text-[17px]' />
            </Link>
          )}
          {project.projectLink && (
            <Link href={project.projectLink} target='_blank' className='text-textcolor/30 hover:text-textcolor transition-colors'>
              <HiArrowTopRightOnSquare className='text-[18px]' />
            </Link>
          )}
        </div>
      </div>
      <p className='text-textcolor/60 text-[13px] leading-relaxed flex-1'>{project.description[lang]}</p>
      <div className='flex flex-wrap gap-2 pt-3 border-t border-textcolor/10'>
        {project.stack.map((tech) => (
          <span key={tech} className='text-[11px] text-textcolor/70 border border-textcolor/25 px-2 py-[2px] rounded-full'>
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
)

type Tab = 'personal' | 'professional'

const Projects = ({ lang, dict }: { lang: Lang; dict: Dict['projects'] }) => {
  const [active, setActive] = useState<Tab>('professional')

  const tabs: { key: Tab; label: string; projects: Project[] }[] = [
    { key: 'professional', label: dict.professional, projects: professionalProjects },
    { key: 'personal', label: dict.personal, projects: personalProjects },
  ]

  const current = tabs.find((t) => t.key === active)!

  return (
    <div id='projects' className='mt-8 px-4 tablet:px-8 mb-16 scroll-mt-28'>
      <div className='flex items-center gap-4 mb-10'>
        <h2 className='text-[20px] font-medium whitespace-nowrap tablet:text-[22px]'>
          <span className='text-yellow text-xl font-semibold mr-4 tablet:text-[24px]'>03.</span>
          {dict.sectionTitle}
        </h2>
        <div className='h-[1px] flex-1 bg-textcolor/20' />
      </div>

      <div className='flex items-center gap-1 mb-8 bg-[#061426] border border-textcolor/10 rounded-xl p-1 w-fit'>
        {tabs.map(({ key, label, projects }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-200 ${
              active === key
                ? 'bg-textcolor/15 text-titlecolor'
                : 'text-textcolor/60 hover:text-textcolor/80'
            }`}
          >
            {label}
            <span
              className={`text-[11px] min-w-[20px] h-[20px] flex items-center justify-center rounded-full px-1 ${
                active === key
                  ? 'bg-textcolor/20 text-titlecolor'
                  : 'bg-textcolor/10 text-textcolor/30'
              }`}
            >
              {projects.length}
            </span>
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6'>
        {current.projects.map((project, index) => (
          <ProjectCard key={index} project={project} lang={lang} />
        ))}
      </div>
    </div>
  )
}

export default Projects
