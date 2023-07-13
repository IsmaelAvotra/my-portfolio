import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import Footer from '../components/footer/Footer'

const Contact = () => {
  return (
    <>
      <div className=' mt-8 px-4 tablet:px-8 mb-16 min-h-[80vh]'>
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
            to hear from you.{' '}
          </p>
        </div>
        <div className='desktop:flex desktop:flex-row-reverse desktop:items-center desktop:gap-8 desktop:mt-16 '>
          <div className='  form flex desktop:flex-[1.8] flex-col gap-4 tablet:gap-5 mb-10 tablet:mb-16'>
            <input
              type='text'
              placeholder='Your name'
              className='p-2 rounded bg-bgcolor border-[0.6px] placeholder:text-[14px] focus:outline-none tablet:w-[80%] '
              required
            />
            <input
              type='text'
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
            <button className='bg-titlecolor max-w-[160px] px-4 py-2 rounded text-bgcolor'>
              Send message
            </button>
          </div>
          <div className='contact desktop:ml-12 flex desktop:flex-[1] flex-col gap-6'>
            <div className='linkedin flex items-center gap-3'>
              <AiFillLinkedin className='text-[24px] tablet:text-[32px]' />
              <Link href='/' className='text-titlecolor tablet:text-[18px]'>
                Ismael Avotra
              </Link>
            </div>
            <div className='github flex items-center gap-3'>
              <AiFillGithub className='text-[24px]  tablet:text-[32px]' />
              <Link href='/' className='text-titlecolor tablet:text-[18px]'>
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
