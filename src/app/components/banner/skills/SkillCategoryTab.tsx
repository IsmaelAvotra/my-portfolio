import { ReactNode } from 'react'

interface SkillCategoryTabProps {
  icon: ReactNode
  label: string
  count: number
  isActive: boolean
  onClick: () => void
}

const SkillCategoryTab = ({ icon, label, count, isActive, onClick }: SkillCategoryTabProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 desktop:w-full flex flex-col desktop:flex-row items-center desktop:justify-between px-2 desktop:px-4 py-2 desktop:py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-yellow text-bgcolor' : 'text-textcolor hover:bg-textcolor/10'
        }`}
    >
      <div className='flex flex-col desktop:flex-row items-center gap-1 desktop:gap-3'>
        <span className={`text-[18px] desktop:text-[20px] leading-none ${isActive ? 'text-bgcolor' : 'text-textcolor/60'}`}>
          {icon}
        </span>
        <span className={`text-[11px] desktop:text-[14px] font-semibold tracking-wide ${isActive ? 'text-bgcolor' : ''}`}>
          {label}
        </span>
      </div>
      <span
        className={`text-[12px] font-bold min-w-[22px] h-[22px] hidden tablet:flex items-center justify-center rounded-full px-1 ${isActive ? 'bg-bgcolor text-yellow' : 'bg-textcolor/15 text-textcolor'
          }`}
      >
        {count}
      </span>
    </button>
  )
}

export default SkillCategoryTab
