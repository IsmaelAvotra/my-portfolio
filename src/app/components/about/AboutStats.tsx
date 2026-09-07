import type { Dict } from '../../locales'

const AboutStats = ({ dict }: { dict: Dict['about']['stats'] }) => {
  const stats = [
    { value: '3+', label: dict.yearsExp },
    { value: '10+', label: dict.projectsBuilt },
    { value: '2', label: dict.companies },
  ]

  return (
    <div className='mt-6'>
      <div className='h-[1px] desktop:w-3/4 bg-textcolor/20 mt-6 mb-8' />
      <div className='flex gap-8 desktop:gap-20 justify-between desktop:justify-start'>
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className='text-yellow text-[28px] tablet:text-[36px] font-bold leading-none'>
              {stat.value}
            </p>
            <p className='text-textcolor text-[11px] tablet:text-[13px] mt-1 uppercase tracking-widest'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutStats
