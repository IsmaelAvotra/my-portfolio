import Link from 'next/link'
import TextSpan from './TextSpan'
import './Banner.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import type { Dict } from '../../locales'

const sentence2Name = 'Ismael'.split('')
const sentence2After = ','.split('')

const renderLetters = (letters: string[], prefix: string, style?: React.CSSProperties) =>
  letters.map((letter, index) =>
    letter === ' ' ? (
      <span key={`${prefix}${index}`} className='banner-space'>{' '}</span>
    ) : (
      <TextSpan key={`${prefix}${index}`} style={style}>{letter}</TextSpan>
    )
  )

const techStack = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Redux', 'Tailwind CSS']

const Banner = ({ dict }: { dict: Dict['banner'] }) => {
  const sentence2Before = dict.greeting.split('')
  const sentence3 = dict.role.split('')

  return (
    <section className='banner z-10 max-h-[100vh]'>
      <div className='fade-up-1 flex items-center gap-2 mb-6 border border-textcolor/30 rounded-full px-4 py-[6px] w-fit'>
        <div className='relative flex-shrink-0 w-2 h-2'>
          <div className='dot-ping' />
          <div className='w-2 h-2 rounded-full bg-green-400' style={{ boxShadow: '0 0 6px #ffc857' }} />
        </div>
        <p className='text-[13px] text-textcolor m-0 leading-none'>
          {dict.available}
        </p>
      </div>

      <div className='text-h1'>
        <div className='text2-h1 desktop:z-0 fade-up-2'>
          {renderLetters(sentence2Before, 'b')}
          {renderLetters(sentence2Name, 'n', { color: '#ffc857' })}
          {renderLetters(sentence2After, 'a')}
        </div>
        <div className='text3-h1 desktop:z-0 fade-up-3'>
          {renderLetters(sentence3, 's')}
        </div>
      </div>

      <p className='fade-up-3 text-textcolor text-[14px] tablet:text-[16px] max-w-[520px] mt-2 mb-6 leading-relaxed'>
        {dict.description}
      </p>

      <div className='fade-up-4 flex flex-wrap items-center gap-2 mb-6'>
        <p className='text-[12px] text-textcolor/60 m-0'>{dict.techStack}</p>
        {techStack.map((tech) => (
          <div
            key={tech}
            className='text-[12px] border border-textcolor/30 rounded px-3 py-1 text-textcolor'
          >
            {tech}
          </div>
        ))}
      </div>

      <div className='socials fade-up-5'>
        <Link href='https://github.com/IsmaelAvotra' target='_blank' aria-label='Github'>
          <AiFillGithub />
        </Link>
        <Link
          href='https://www.linkedin.com/in/ismael-avotra-22546b168/'
          target='_blank'
          aria-label='Linkedin'
        >
          <AiFillLinkedin />
        </Link>
      </div>
    </section>
  )
}

export default Banner
