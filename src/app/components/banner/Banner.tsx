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
    <section className='banner w-full relative'>
      <div>
        <div className='text-h1 mb-1' data-aos='fade-up' data-aos-delay='400'>
          {sentence1.map((letter, index) => {
            return (
              <TextSpan key={index} className='text-mxl text-yellow '>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>

        <div className='text-h1 mb-1' data-aos='fade-up' data-aos-delay='500'>
          {sentence2.map((letter, index) => {
            return (
              <TextSpan key={index} className='text-sxl '>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>
        <div className='text-h1 mb-8' data-aos='fade-up' data-aos-delay='600'>
          {sentence3.map((letter, index) => {
            return (
              <TextSpan key={index} className='text-sxl '>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>
      </div>
      <div>
        <button
          className='bg-yellow  py-2 px-12 grid place-items-center  rounded-sm mb-6'
          data-aos='fade-up'
          data-aos-delay='700'
        >
          <Link href='/about' className='text-bgcolor text-sm font-semibold'>
            View my projects
          </Link>
        </button>

        {/* <button
          className=' bg-titlecolor  py-3 grid place-items-center w-full rounded-sm mb-4'
          data-aos='fade-up'
          data-aos-delay='700'
        >
          <Link href='/about' className='text-bgcolor text-sm font-semibold'>
            View my projects
          </Link>
        </button> */}
      </div>
      <div className='socials' data-aos='fade-up' data-aos-delay='800'>
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
