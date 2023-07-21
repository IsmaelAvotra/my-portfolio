'use client'
import React, { useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import { skillsTab } from '../data/skills'

const TechSkills = () => {
  const [index, setIndex] = useState(1)
  return (
    <div className='desktop:flex  desktop:items-start '>
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
      <div className='container  desktop:flex-[2]'>
        {skillsTab.map((skillTab) => {
          return (
            <div
              key={skillTab.id}
              className='grid grid-cols-2 tablet:grid-cols-3  gap-4'
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
  )
}

export default TechSkills
