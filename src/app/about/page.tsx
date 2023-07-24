import Image from 'next/image'
import { experiences } from '../data/experiences'
import './About.css'
import Footer from '../components/footer/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

import aboutImage from '../assets/about1.jpg'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'In this page you can see my description,my formation and my experiences',
}

const AboutPage = () => {
  return (
    <>
      <div className='about mt-8 px-4 tablet:px-8 min-h-[90vh] '>
        <h2 className='text-[20px] font-medium mb-8 tablet:text-[22px]'>
          {' '}
          <span className='text-yellow text-xl font-semibold mr-4 tablet:text-[30px]'>
            01.
          </span>
          About Me
        </h2>
        <div className='containe flex flex-col desktop:flex-row  gap-8 desktop:gap-10 desktop:items-center  items-center mb-16'>
          <div className='image -z-10 desktop:flex-1  desktop:flex desktop:justify-center'>
            <Image
              src={aboutImage}
              alt='profile image'
              width={330}
              height={320}
              placeholder='blur'
              className='rounded-lg w-[340px] h-[330px] object-cover  border-[.5px] border-textcolor drop-shadow-image desktop:w-[80%] desktop:h-[420px] tablet:w-[100%]'
            />
          </div>
          <div className='text desktop:flex-[1.6]'>
            <p className='text-sm text-textcolor desktop:text-[18px] desktop:mr-10 '>
              Hello! My name is{' '}
              <span className='text-yellow text-lg desktop:text-[20px] '>
                {' '}
                Ismael Avotra
              </span>
              , and I'm from Madagascar. Welcome to my Web and Mobile Developer
              Portfolio! Here you will find a showcase of my{' '}
              <span className='text-titlecolor'>skills</span>,{' '}
              <span className='text-red'>projects</span>, and passion for web
              development.. As an aspiring web developer, I'm thrilled to share
              my journey and demonstrate the value I can bring to your
              organization.
            </p>
            <button className='border-[0.4px]  py-2 desktop:py-1 px-8 grid place-items-center  rounded-[4px]  mt-6'>
              <Link
                href='/'
                className='text-yellow text-[14px]  tablet:text-[18px] font-medium cursor-pointer desktop:text-[16px] desktop:py-[6px] px-[10px]'
                download
                target='_blank'
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>
        <div className='experience mt-16 mb-12 '>
          <h3 className='text-xl text-titlecolor font-medium'>My experience</h3>

          <div className='experience-content flex gap-4 tablet:gap-6 desktop:gap-8 overflow-auto mt-8 tablet:mt-12'>
            {experiences.map((experience) => {
              return (
                <div key={experience.id} className='experience-card '>
                  <p className='text-[14px] text-titlecolor font-medium mb-2  '>
                    {experience.date}
                  </p>
                  <div className='role-company flex items-center justify-between mb-2'>
                    <p className='font-semibold text-titlecolor'>
                      {experience.role}
                    </p>
                    <p className='text-yellow/70'>{experience.company}</p>
                  </div>
                  <p className='text-[14px]'>{experience.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
