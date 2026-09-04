const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  return (
    <footer className='border-t border-textcolor/10 mt-8 px-4 tablet:px-8 py-8'>
      <div className='desktop:flex desktop:items-center desktop:justify-between gap-8 mb-6'>
        <div className='mb-6 desktop:mb-0'>
          <p className='text-titlecolor font-bold text-[16px] tracking-wide'>Ismael Avotra</p>
          <p className='text-textcolor/40 text-[12px] mt-1 uppercase tracking-widest'>
            Full Stack Developer
          </p>
        </div>

        <div className='flex flex-wrap gap-x-6 gap-y-2 mb-6 desktop:mb-0'>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className='text-textcolor/50 hover:text-textcolor text-[13px] transition-colors'
            >
              {label}
            </a>
          ))}
        </div>

      </div>

      <div className='flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-2'>
        <p className='text-textcolor/30 text-[12px]'>
          © {new Date().getFullYear()} Ismael Avotra · All rights reserved.
        </p>
        <p className='text-textcolor/20 text-[11px]'>
          Built with Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
