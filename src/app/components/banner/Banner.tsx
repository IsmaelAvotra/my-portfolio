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
    <section className='banner  max-h-[100vh]  '>
      <div className='text-h1'>
        <div className='text1-h1 -z-10 desktop:z-0'>
          {sentence1.map((letter, index) => {
            return (
              <TextSpan key={index} className=' hi  '>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>

        <div className='text2-h1 -z-10 desktop:z-0'>
          {sentence2.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>
        <div className='text3-h1 -z-10 desktop:z-0'>
          {sentence3.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </TextSpan>
            )
          })}
        </div>
      </div>
      <div>
        <button className='border-[0.4px]  py-2 px-10 grid place-items-center  rounded-[4px] '>
          <Link
            href='/projects'
            className='text-yellow text-[15px] tablet:text-[18px] font-semibold cursor-pointer desktop:text-[20px] desktop:py-[6px] px-[10px]'
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
