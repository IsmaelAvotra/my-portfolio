import { GiFlowerStar } from 'react-icons/gi'
import { SiGithub, SiVercel } from 'react-icons/si'
import { projects } from '../data/projcts'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer/Footer'

const Projects = () => {
  return (
    <>
      <div className=' mt-8 px-4 tablet:px-8 mb-16 '>
        <h2 className='text-lg tablet:text-[22px] mb-8 '>
          {' '}
          <span className='text-yellow text-xl tablet:text-[30px] font-semibold mr-4'>
            03.
          </span>
          My Projects
        </h2>
        <div className=' flex  flex-col  gap-8'>
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={` tablet:flex  items-center ${
                  index % 2 == 0 ? 'tablet:flex-row' : 'tablet:flex-row-reverse'
                }`}
              >
                <div className='top tablet:flex-1'>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={650}
                    height={460}
                    className=' mb-2 desktop:w-[100%]'
                  />
                </div>
                <div className='bottom  tablet:flex-[1]'>
                  <p className='flex items-center gap-2 text-titlecolor text-[22px] desktop:text-[26px]  mb-2'>
                    {' '}
                    <GiFlowerStar className='text-[20px] desktop:text-[24px] text-yellow' />{' '}
                    {project.title}{' '}
                  </p>
                  <p className='text-[14px] mb-4 desktop:text-[16px] '>
                    {project.description}
                  </p>
                  <div className='buttons  flex items-center gap-4'>
                    <Link
                      href='/'
                      className='bg-bgcolor  border-[0.6px] rounded flex items-center gap-4 px-6 py-[6px]'
                    >
                      <SiGithub className='text-[18px]' /> Github
                    </Link>
                    <Link
                      href='/'
                      className='bg-bgcolor border-[0.6px] rounded flex items-center gap-4 px-6 py-[6px]'
                    >
                      <SiVercel /> View site
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
