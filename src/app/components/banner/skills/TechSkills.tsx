'use client'
import React, { useState } from 'react'
import { skillsTab } from '../../../data/skills'
import { MdOutlineImportantDevices } from 'react-icons/md'
import { IoServer } from 'react-icons/io5'
import { BsLightningChargeFill } from 'react-icons/bs'
import SkillCategoryTab from './SkillCategoryTab'
import SkillCard from './SkillCard'
import { FaTools } from 'react-icons/fa'

const categories = [
  { id: 1, label: 'Frontend', icon: <MdOutlineImportantDevices /> },
  { id: 2, label: 'Backend', icon: <IoServer /> },
  { id: 3, label: 'Tools', icon: <FaTools /> },
]

const TechSkills = () => {
  const [activeId, setActiveId] = useState(1)

  return (
    <div className='desktop:flex desktop:items-start desktop:gap-8'>
      <div className='flex desktop:flex-col gap-2 mb-6 desktop:mb-0 bg-[#061426] border border-textcolor/10 rounded-xl px-3 py-4 desktop:flex-[1]'>
        <p className='hidden desktop:block uppercase text-[11px] font-semibold text-textcolor/50 tracking-widest px-2 mb-2'>
          Categories
        </p>
        {categories.map((cat) => (
          <SkillCategoryTab
            key={cat.id}
            icon={cat.icon}
            label={cat.label}
            count={skillsTab.find((t) => t.id === cat.id)?.skills.length ?? 0}
            isActive={activeId === cat.id}
            onClick={() => setActiveId(cat.id)}
          />
        ))}
        <div className='hidden desktop:block mt-4 bg-textcolor/5 rounded-xl px-4 py-3'>
          <p className='flex items-center gap-2 text-yellow font-semibold text-[14px] mb-1'>
            <BsLightningChargeFill />
            Engineering Excellence
          </p>
          <p className='text-textcolor/70 text-[12px] leading-relaxed'>
            Constantly learning and adapting to modern engineering standards.
          </p>
        </div>
      </div>
      <div className='desktop:flex-[4]'>
        {skillsTab.map((skillTab) =>
          skillTab.id === activeId ? (
            <div key={skillTab.id} className='grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-4'>
              {skillTab.skills.map((skill, idx) => (
                <SkillCard
                  key={idx}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default TechSkills
