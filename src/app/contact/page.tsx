import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import Footer from '../components/footer/Footer'
import Form from './Form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    ' On this page, you can see my contacts, and you can also use the form to get in touch with me.',
}

const Contact = () => {
  return (
    <>
      <div className='contact mt-8 px-4 tablet:px-8 mb-16 min-h-[80vh]'>
        <div className='title mb-8'>
          <h2 className='text-[20px] font-medium mb-6 tablet:text-[22px]'>
            {' '}
            <span className='text-yellow text-xl tablet:text-[30px] font-semibold mr-4'>
              04.
            </span>
            Contact Me
          </h2>
          <p className='text-[15px] tablet:text-[16px]'>
            Please don't hesitate to reach out to me if you have any job
            opportunities, questions, or suggestions.{' '}
            <br className='hidden desktop:block' /> I would be more than happy
            to hear from you.You can contact me using the contact form on my
            website. I will respond to you as soon as possible.{' '}
          </p>
        </div>
        <div className='desktop:flex desktop:flex-row-reverse   desktop:gap-8 desktop:mt-16 '>
          <Form />

          <div className='contact desktop:ml-4 desktop:mt-8 flex desktop:flex-[1] flex-col gap-6'>
            <div className='linkedin flex items-center gap-3'>
              <AiFillLinkedin className='text-[24px] tablet:text-[32px]' />
              <Link
                href='https://www.linkedin.com/in/ismael-avotra-22546b168'
                className='text-titlecolor tablet:text-[18px]'
                target='_blank'
              >
                Ismael Avotra
              </Link>
            </div>
            <div className='github flex items-center gap-3'>
              <AiFillGithub className='text-[24px]  tablet:text-[32px]' />
              <Link
                href='https://github.com/IsmaelAvotra'
                className='text-titlecolor tablet:text-[18px]'
                target='_blank'
              >
                AvotraIsmael
              </Link>
            </div>
            <div className='whatsapp flex items-center gap-3'>
              <AiOutlineWhatsApp className='text-[24px]  tablet:text-[32px]' />
              <Link href='/' className='text-titlecolor tablet:text-[18px]'>
                +212 687779091
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
