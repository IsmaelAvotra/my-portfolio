import './Skills.css'
import { softSkills } from '../../../data/skills'
import { BsLightningChargeFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import TechSkills from './TechSkills'
import type { Lang, Dict } from '../../../locales'

const Skills = ({ lang, dict }: { lang: Lang; dict: Dict['skills'] }) => {
  return (
    <>
      <div id='skills' className='skills mt-8 px-4 desktop:px-10 tablet:px-8 scroll-mt-28'>
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-[20px] font-medium whitespace-nowrap tablet:text-[22px]'>
            <span className='text-yellow text-xl font-semibold mr-4 tablet:text-[24px]'>02.</span>
            {dict.sectionTitle}
          </h2>
          <div className='h-[1px] flex-1 bg-textcolor/20' />
        </div>
        <div className='tech-skill  mb-10 tablet:mb-16'>
          <h3 className='text-xl text-titlecolor font-medium mb-6 tablet:text-[28px]'>
            {dict.technical}
          </h3>
          <TechSkills dict={dict} />
        </div>
        <div className='soft-skills mb-16'>
          <h3 className='text-xl tablet:text-[28px] text-titlecolor font-medium mb-10'>
            {dict.soft}
          </h3>
          <div className='desktop:flex desktop:items-start desktop:gap-8'>
            <div className='hidden desktop:flex flex-col gap-2 bg-[#061426] border border-textcolor/10 rounded-xl px-3 py-4 w-[220px] flex-shrink-0'>
              <p className='uppercase text-[11px] font-semibold text-textcolor/50 tracking-widest px-2 mb-2'>
                {dict.overview}
              </p>
              <div className='flex items-center justify-between bg-yellow text-bgcolor px-4 py-3 rounded-xl'>
                <div className='flex items-center gap-3'>
                  <span className='text-[20px] leading-none'><HiUserGroup /></span>
                  <span className='text-[14px] font-semibold'>{dict.coreCompetencies}</span>
                </div>
                <span className='text-[12px] font-bold w-[22px] h-[22px] flex items-center justify-center rounded-full bg-bgcolor text-yellow'>
                  {softSkills.length}
                </span>
              </div>
              <div className='mt-4 bg-textcolor/5 rounded-xl px-4 py-3'>
                <p className='flex items-center gap-2 text-yellow font-semibold text-[14px] mb-2'>
                  <BsLightningChargeFill />
                  {dict.humanCentered}
                </p>
                <p className='text-textcolor/70 text-[12px] leading-relaxed'>
                  {dict.humanCenteredDesc}
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4 desktop:flex-1'>
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className='bg-[#061426] border border-textcolor/10 rounded-xl p-5 flex flex-col gap-3 hover:border-textcolor/30 transition-colors duration-200'
                >
                  <div className='flex items-start justify-between'>
                    <div className='w-10 h-10 rounded-xl bg-textcolor/10 flex items-center justify-center text-[22px] text-textcolor/60'>
                      {skill.icon}
                    </div>
                    <span className='text-[11px] font-semibold px-3 py-[3px] rounded-full border border-yellow/50 text-yellow'>
                      {skill.tag}
                    </span>
                  </div>
                  <p className='text-titlecolor font-bold text-[17px]'>{skill[lang].quality}</p>
                  <p className='text-textcolor/70 text-[13px] leading-relaxed'>{skill[lang].description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
