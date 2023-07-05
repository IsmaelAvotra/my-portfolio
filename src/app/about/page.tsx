import Image from 'next/image'
import { experiences } from '../data/experiences'
import './About.css'
import Footer from '../components/footer/Footer'

const AboutPage = () => {
  return (
    <>
      <div className='about mt-8 px-4 tablet:px-8 min-h-[90vh] '>
        <h2 className='text-lg mb-8 tablet:text-[22px]'>
          {' '}
          <span className='text-yellow text-xl font-semibold mr-4 tablet:text-[30px]'>
            01.
          </span>
          About Me
        </h2>
        <div className='container  flex flex-col  gap-8 items-center  mb-16'>
          <div className='image  -z-10'>
            <Image
              src='/about.png'
              alt='profile image'
              width={330}
              height={320}
              className='rounded-lg  border-[.5px] border-textcolor drop-shadow-image '
            />
          </div>
          <div className='text'>
            <p className='text-sm text-textcolor'>
              Hello! My name is{' '}
              <span className='text-yellow text-lg'> Ismael Avotra</span>, and
              I'm from Madagascar. Welcome to my Web and Mobile Developer
              Portfolio! Here you will find a showcase of my{' '}
              <span className='text-titlecolor'>skills</span>,{' '}
              <span className='text-red'>projects</span>, and passion for web
              development. As a budding web developer, I am excited to share my
              journey and demonstrate the value I can bring to your
              organization.
            </p>
          </div>
        </div>
        <div className='experience mt-16 mb-12 '>
          <h3 className='text-xl text-titlecolor font-medium'>My experience</h3>

          <div className='experience-content flex gap-4 overflow-auto mt-8 tablet:mt-12'>
            {experiences.map((experience) => {
              return (
                <div key={experience.id} className='experience-card'>
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
