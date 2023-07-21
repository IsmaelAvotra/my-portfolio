import './Skills.css'
import { softSkills } from '../data/skills'
import Image from 'next/image'

import Footer from '../components/footer/Footer'
import { Metadata } from 'next'
import TechSkills from './TechSkills'

export const metadata: Metadata = {
  title: 'My Skills',
  description: 'In this page you can see my technical and soft skills',
}

const Skills = () => {
  return (
    <>
      <div className='skills mt-8 px-4 desktop:px-10 tablet:px-8'>
        <h2 className='text-[20px] font-medium tablet:text-[22px] mb-8 tablet:mb-12 '>
          {' '}
          <span className='text-yellow text-xl tablet:text-[30px] font-semibold mr-4'>
            02.
          </span>
          My skills
        </h2>
        <div className='tech-skill  mb-10 tablet:mb-16'>
          <h3 className='text-xl text-titlecolor font-medium mb-6 tablet:text-[28px]'>
            Technical Skills
          </h3>
          <TechSkills />
        </div>
        <div className='soft-skills mb-16'>
          <h3 className='text-xl tablet:text-[28px] text-titlecolor font-medium mb-10'>
            Soft Skills
          </h3>
          <div className='container-soft desktop:max-w-[1250px] flex flex-col items-center gap-4 px-4'>
            {softSkills.map((softSkill, index) => {
              return (
                <div
                  key={index}
                  className='bg-bgcolor p-4 flex flex-col rounded-[16px] border-[.8px] max-w-[350px]'
                >
                  <Image
                    src={softSkill.imageUrl}
                    alt={softSkill.quality}
                    width={304}
                    height={270}
                    placeholder='blur'
                    className='mb-4 rounded-[12px] object-cover w-[304px] h-[270px]'
                  />
                  <p className='text-[22px] font-semibold text-center text-titlecolor mb-2'>
                    {softSkill.quality}
                  </p>
                  <p className='text-[14px]'>{softSkill.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Skills
