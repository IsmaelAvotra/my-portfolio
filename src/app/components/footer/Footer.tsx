import type { Dict } from '../../locales'

const Footer = ({ dict }: { dict: Dict['footer'] }) => {
  return (
    <footer className='border-t border-textcolor/10 mt-8 px-4 tablet:px-8 py-8'>
      <div className='desktop:flex desktop:items-center desktop:justify-between gap-8 mb-6'>
        <div className='mb-6 desktop:mb-0'>
          <p className='text-titlecolor font-bold text-[16px] tracking-wide'>Ismael Avotra</p>
          <p className='text-textcolor/60 text-[12px] mt-1 uppercase tracking-widest'>
            {dict.subtitle}
          </p>
        </div>

        <div className='flex flex-wrap gap-x-6 gap-y-2 mb-6 desktop:mb-0'>
          {(['#about', '#skills', '#projects', '#contact'] as const).map((href) => (
            <a
              key={href}
              href={href}
              className='text-textcolor/75 hover:text-textcolor text-[13px] transition-colors'
            >
              {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
        </div>

      </div>

      <div className='flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-2'>
        <p className='text-textcolor/60 text-[12px]'>
          © {new Date().getFullYear()} Ismael Avotra · {dict.copyright}
        </p>
        <p className='text-textcolor/65 text-[11px]'>
          {dict.builtWith}
        </p>
      </div>
    </footer>
  )
}

export default Footer
