import { ReactNode } from 'react'

type Level = 'Expert' | 'Advanced' | 'Proficient' | 'Familiar'

interface SkillCardProps {
  icon: ReactNode
  name: string
  level: Level
  color: string
}

const levelStyle: Record<Level, string> = {
  Expert: 'border border-titlecolor/60 text-titlecolor font-semibold',
  Advanced: 'bg-textcolor/20 text-textcolor',
  Proficient: 'bg-textcolor/10 text-textcolor/70',
  Familiar: 'bg-textcolor/5 text-textcolor/40',
}

const SkillCard = ({ icon, name, level, color }: SkillCardProps) => {
  return (
    <div className='bg-[#061426] border border-textcolor/10 rounded-xl p-4 flex flex-col gap-4 hover:border-textcolor/30 transition-colors duration-200'>
      <div className='flex items-start justify-between'>
        <div
          className='w-10 h-10 rounded-lg flex items-center justify-center text-[22px] text-white'
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <span className={`text-[11px] font-semibold px-3 py-[3px] rounded-full ${levelStyle[level]}`}>
          {level}
        </span>
      </div>
      <p className='text-titlecolor font-bold text-[16px]'>{name}</p>
    </div>
  )
}

export default SkillCard
