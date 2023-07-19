'use client'
import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import Footer from '../components/footer/Footer'
import { ReactEventHandler, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.current) {
      emailjs.sendForm(
        'service_j68lzmz',
        'template_9j44ik2',
        form.current,
        'H6Iwe94ZjHumtgq8R'
      )
      form.current.reset()
    }
  }
  return (
    <>
      <div className='contact mt-8 px-4 tablet:px-8 mb-16 min-h-[80vh]'>
        <div className='title mb-8'>
          <h2 className='text-lg mb-6 tablet:text-[22px]'>
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
          <form
            className=' flex desktop:flex-[1.8] flex-col gap-4 tablet:gap-5 mb-10 tablet:mb-16'
            onSubmit={sendEmail}
            ref={form}
          >
            <input
              type='text'
              placeholder='Your name'
              name='name'
              className='p-2 rounded bg-bgcolor border-[0.6px] placeholder:text-[14px] focus:outline-none tablet:w-[80%] '
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your email'
              className='p-2 rounded bg-bgcolor border-[0.6px] placeholder:text-[14px] focus:outline-none tablet:w-[80%] '
              required
            />
            <textarea
              name='message'
              id='message'
              cols={30}
              rows={6}
              placeholder='Your message...'
              className='p-2 rounded bg-bgcolor border-[0.6px] placeholder:text-[14px] focus:outline-none resize-none tablet:w-[85%] '
              required
            ></textarea>
            <button
              className='bg-titlecolor max-w-[160px] px-4 py-2 rounded text-bgcolor'
              type='submit'
            >
              Send message
            </button>
          </form>

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
