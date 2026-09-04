import Image from 'next/image'
import { experiences } from '../../data/experiences'
import './About.css'
import Link from 'next/link'
import AboutStats from './AboutStats'

import aboutImage from '../../assets/about1.jpg'

const AboutPage = () => {
  return (
    <div id='about' className='about mt-8 px-4 tablet:px-8 min-h-[90vh] scroll-mt-28'>

      <div className='flex items-center gap-4 mb-12'>
        <h2 className='text-[20px] font-medium whitespace-nowrap tablet:text-[22px]'>
          <span className='text-yellow text-xl font-semibold mr-4 tablet:text-[24px]'>01.</span>
          About Me
        </h2>
        <div className='h-[1px] flex-1 bg-textcolor/20' />
      </div>

      <div className='flex flex-col desktop:flex-row gap-10 desktop:gap-16 desktop:items-start mb-16'>
        <div className='about-photo-wrapper flex-shrink-0 flex justify-center desktop:justify-start'>
          <div className='about-photo-container'>
            <Image
              src={aboutImage}
              alt='Ismael Avotra'
              width={400}
              height={440}
              placeholder='blur'
              className='about-photo'
            />
          </div>
        </div>
        <div className='desktop:flex-[1.5] desktop:pr-12'>
          <p className='text-sm text-textcolor desktop:text-[16px] leading-relaxed'>
            Hi, I&apos;m <span className='text-titlecolor font-medium'>Ismael Avotra</span>, a{' '}
            <span className='text-red font-medium'>Full Stack web Developer</span> from Antananarivo,
            Madagascar, with 3 years of professional experience building modern web applications.
          </p>
          <p className='text-sm text-textcolor desktop:text-[16px] leading-relaxed mt-3'>
            I currently work at <span className='text-titlecolor'>Alter Systeme</span>, developing
            web platforms end to end — from turning designs into intuitive interfaces to building
            backend services and bringing products to production. I specialize in{' '}
            <span className='text-titlecolor'>React</span>,{' '}
            <span className='text-titlecolor'>Next.js</span>, and{' '}
            <span className='text-titlecolor'>TypeScript</span>, with solid experience in{' '}
            <span className='text-titlecolor'>Node.js</span>.
          </p>
          <p className='text-sm text-textcolor desktop:text-[16px] leading-relaxed mt-3'>
            Previously, I worked as a Frontend Developer at{' '}
            <span className='text-titlecolor'>Safe Labs Agency</span> in Marrakech, contributing to
            web and mobile projects. I enjoy turning ideas into clean, reliable, and engaging digital
            experiences.
          </p>
          <AboutStats />
          <button className='border-[0.4px] py-2 desktop:py-1 px-8 grid place-items-center rounded-[4px] mt-8'>
            <Link
              href='/cv_ismael.pdf'
              className='text-yellow text-[14px] tablet:text-[18px] font-medium cursor-pointer desktop:text-[16px] desktop:py-[6px] px-[10px]'
              download
              target='_blank'
            >
              Download CV
            </Link>
          </button>
        </div>
      </div>

      <div className='experience mt-8 mb-12'>
        <div className='flex items-center gap-4 mb-8'>
          <h3 className='text-xl text-titlecolor font-medium whitespace-nowrap'>My experience</h3>
        </div>
        <div className='experience-content flex gap-4 tablet:gap-5 overflow-auto pb-2'>
          {experiences.map((experience) => (
            <div key={experience.id} className='experience-card flex flex-col'>
              <div className='flex items-center justify-between mb-4'>
                {experience.isCurrent ? (
                  <span className='current-badge'>CURRENT ROLE</span>
                ) : (
                  <span />
                )}
                <p className='text-[12px] text-textcolor/70 ml-auto'>{experience.date}</p>
              </div>
              <h4 className='text-[17px] font-bold text-titlecolor mb-1'>{experience.role}</h4>
              <p className='text-[13px] text-yellow mb-3'>{experience.company}</p>
              <p className='text-[13px] text-textcolor leading-relaxed flex-1 mb-4'>
                {experience.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {experience.tags.map((tag) => (
                  <span key={tag} className='exp-tag'>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
