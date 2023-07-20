'use client'

import './Skills.css'
import { useState } from 'react'
import { skillsTab, softSkills } from '../data/skills'
import Image from 'next/image'
import { AiFillCaretRight } from 'react-icons/ai'
import Footer from '../components/footer/Footer'

const Skills = () => {
  const [index, setIndex] = useState(1)
  return (
    <>
      <div className='skills mt-8 px-4 desktop:px-10 tablet:px-8'>
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
          <div className='desktop:flex  desktop:items-start'>
            <div className='types flex desktop:flex-col desktop:flex-1  justify-between font-semibold mb-6'>
              <button
                className={`${
                  index === 1
                    ? 'bg-yellow desktop:bg-[transparent] text-bgcolor desktop:text-yellow'
                    : ''
                } px-6 py-2 tablet:py-4 text-[14px] tablet:text-[16px] desktop:text-[18px] rounded flex-1 desktop:flex desktop:items-center desktop:justify-center desktop:gap-4 `}
                onClick={() => setIndex(1)}
              >
                <p
                  className={`text-[18px] ${
                    index !== 1 ? 'hidden' : 'hidden desktop:block'
                  }`}
                >
                  <AiFillCaretRight />
                </p>
                FRONTEND
              </button>
              <button
                className={`${
                  index === 2
                    ? 'bg-yellow desktop:bg-[transparent] text-bgcolor desktop:text-yellow'
                    : ''
                } px-6 py-2 tablet:py-4 text-[14px] tablet:text-[16px] desktop:text-[18px] rounded flex-1 desktop:flex desktop:items-center desktop:justify-center desktop:gap-4 `}
                onClick={() => setIndex(2)}
              >
                <p
                  className={`text-[18px] ${
                    index !== 2 ? 'hidden' : 'hidden desktop:block'
                  }`}
                >
                  <AiFillCaretRight />
                </p>
                BACKEND
              </button>
              <button
                className={`${
                  index === 3
                    ? 'bg-yellow desktop:bg-[transparent] text-bgcolor desktop:text-yellow'
                    : ''
                } px-6 py-2 tablet:py-4 text-[14px] tablet:text-[16px] desktop:text-[18px] rounded flex-1 desktop:flex desktop:items-center desktop:justify-center desktop:gap-4  `}
                onClick={() => setIndex(3)}
              >
                <p
                  className={`text-[18px] ${
                    index !== 3 ? 'hidden' : 'hidden desktop:block'
                  }`}
                >
                  <AiFillCaretRight />
                </p>
                MOBILE
              </button>
            </div>
            <div className='container  tablet:px-6 desktop:flex-[2]'>
              {skillsTab.map((skillTab) => {
                return (
                  <div
                    key={skillTab.id}
                    className='grid grid-cols-2 desktop:grid-cols-3  gap-4'
                  >
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
