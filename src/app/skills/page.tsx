'use client'

import './Skills.css'
import { useState } from 'react'
import { skillsTab, softSkills } from '../data/skills'
import Image from 'next/image'
import Footer from '../components/footer/Footer'

const Skills = () => {
  const [index, setIndex] = useState(1)
  return (
    <>
      <div className='skills mt-8 px-4 tablet:px-8'>
        <h2 className='text-lg tablet:text-[22px] mb-8 tablet:mb-12'>
          {' '}
          <span className='text-yellow text-xl tablet:text-[30px] font-semibold mr-4'>
            02.
          </span>
          My skills
        </h2>
        <div className='tech-skills mb-10 tablet:mb-16'>
          <h3 className='text-xl text-titlecolor font-medium mb-6 tablet:text-[28px]'>
            Technical Skills
          </h3>
          <div className='types flex items-center justify-between font-semibold mb-6'>
            <button
              className={`${
                index === 1 ? 'bg-yellow text-bgcolor' : ''
              } px-6 py-2 tablet:py-4 text-[14px] tablet:text-[16px] rounded flex-1 `}
              onClick={() => setIndex(1)}
            >
              FRONTEND
            </button>
            <button
              className={`${
                index === 2 ? 'bg-yellow text-bgcolor' : ''
              } px-6 py-2 tablet:py-4 text-[14px] tablet:text-[16px] rounded flex-1 `}
              onClick={() => setIndex(2)}
            >
              BACKEND
            </button>
            <button
              className={`${
                index === 3 ? 'bg-yellow text-bgcolor' : ''
              } px-6 py-2 tablet:py-4 text-[14px] tablet:text-[16px] rounded flex-1 `}
              onClick={() => setIndex(3)}
            >
              MOBILE
            </button>
          </div>
          <div className='container tablet:px-6'>
            {skillsTab.map((skillTab) => {
              return (
                <div key={skillTab.id} className='grid grid-cols-2  gap-4'>
                  {skillTab.id === index
                    ? skillTab.skills.map((skill, idx) => {
                        return (
                          <div
                            key={idx}
                            className='border-[.5px] rounded px-4 py-6 tablet:py-8 flex flex-col gap-6  items-center'
                          >
                            <p className='text-[40px]'>{skill.icon}</p>
                            <p className='text-[20px] font-semibold text-titlecolor'>
                              {' '}
                              {skill.name}
                            </p>
                          </div>
                        )
                      })
                    : ''}
                </div>
              )
            })}
          </div>
        </div>
        <div className='soft-skills mb-16'>
          <h3 className='text-xl tablet:text-[28px] text-titlecolor font-medium mb-6'>
            Soft Skills
          </h3>
          <div className='container-soft flex flex-col items-center gap-4 px-4'>
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
                    className='mb-4 rounded-[12px]'
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
