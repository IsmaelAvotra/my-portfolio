'use client'

import { useState } from 'react'
import { skillsTab, softSkills } from '../data/skills'
import Image from 'next/image'

const Skills = () => {
  const [index, setIndex] = useState(1)
  return (
    <div className='skills mt-8 px-4'>
      <h2 className='text-lg mb-8'>
        {' '}
        <span className='text-yellow text-xl font-semibold mr-4'>02.</span>My
        skills
      </h2>
      <div className='tech-skills mb-10'>
        <h3 className='text-xl text-titlecolor font-medium mb-6'>
          Technical Skills
        </h3>
        <div className='types flex items-center justify-between font-semibold mb-6'>
          <button
            className={`${
              index === 1 ? 'bg-yellow text-bgcolor' : ''
            } px-6 py-2 text-[14px] rounded flex-1 `}
            onClick={() => setIndex(1)}
          >
            FRONTEND
          </button>
          <button
            className={`${
              index === 2 ? 'bg-yellow text-bgcolor' : ''
            } px-6 py-2 text-[14px] rounded flex-1 `}
            onClick={() => setIndex(2)}
          >
            BACKEND
          </button>
          <button
            className={`${
              index === 3 ? 'bg-yellow text-bgcolor' : ''
            } px-6 py-2 text-[14px] rounded flex-1 `}
            onClick={() => setIndex(3)}
          >
            MOBILE
          </button>
        </div>
        <div className='container '>
          {skillsTab.map((skillTab) => {
            return (
              <div key={skillTab.id} className='grid grid-cols-2  gap-4'>
                {skillTab.id === index
                  ? skillTab.skills.map((skill, idx) => {
                      return (
                        <div
                          key={idx}
                          className='border rounded px-4 py-6 flex flex-col gap-6  items-center'
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
      <div className='soft-skills'>
        <h3 className='text-xl text-titlecolor font-medium mb-6'>
          Soft Skills
        </h3>
        <div className='container flex flex-col gap-4'>
          {softSkills.map((softSkill, index) => {
            return (
              <div key={index} className='bg-red'>
                <Image
                  src={softSkill.imageUrl}
                  alt={softSkill.quality}
                  width={304}
                  height={270}
                />
                <p>{softSkill.quality}</p>
                <p>{softSkill.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
