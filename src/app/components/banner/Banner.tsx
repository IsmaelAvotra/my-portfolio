import Link from 'next/link'
import TextSpan from './TextSpan'
import './Banner.css'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai'

const sentence1 = 'Hi,'.split('')
const sentence2 = "I'm Ismael,".split('')
const sentence3 = 'Web and Mobile developer'.split('')

const Banner = () => {
  return (
    <section className='banner  max-h-[100vh] '>
      <div>
        <div className='text-h1 mb-1 tablet:mb-4'>
          {sentence1.map((letter, index) => {
            return (
              <TextSpan
                key={index}
                className='text-mxl tablet:text-[48px] text-yellow '
              >
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>

        <div className='text-h1 mb-1 tablet:mb-4'>
          {sentence2.map((letter, index) => {
            return (
              <TextSpan key={index} className='text-sxl tablet:text-[40px]  '>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>
        <div className='text-h1 mb-8 tablet:mb-10'>
          {sentence3.map((letter, index) => {
            return (
              <TextSpan key={index} className='text-sxl  tablet:text-[40px]'>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>
      </div>
      <div>
        <button className='bg-yellow  py-2 px-12 grid place-items-center  rounded-[4px] mb-6'>
          <Link
            href='/projects'
            className='text-bgcolor text-sm tablet:text-[18px] font-semibold cursor-pointer'
          >
            View my projects
          </Link>
        </button>
      </div>
      <div className='socials -z-10 '>
        <a href='https://github.com/IsmaelAvotra' target='_blank'>
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/ismael-avotra-22546b168/'
          target='_blank'
        >
          <AiFillLinkedin />
        </a>
        <a href='https://twitter.com/AvotraIsmael' target='_blank'>
          <AiOutlineTwitter />
        </a>
        <a href='https://www.instagram.com/ismaelavotra/' target='_blank'>
          <AiOutlineInstagram />
        </a>
      </div>
    </section>
  )
}

export default Banner
