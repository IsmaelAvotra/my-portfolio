import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import Footer from '../components/footer/Footer'

const Contact = () => {
  return (
    <>
      <div className='skills mt-8 px-4 mb-16'>
        <div className='title mb-8'>
          <h2 className='text-lg mb-6'>
            {' '}
            <span className='text-yellow text-xl font-semibold mr-4'>04.</span>
            Contact Me
          </h2>
          <p className='text-[15px]'>
            Please don't hesitate to reach out to me if you have any job
            opportunities, questions, or suggestions. I would be more than happy
            to hear from you.{' '}
          </p>
        </div>
        <div className='form flex flex-col gap-4 mb-10'>
          <input
            type='text'
            placeholder='Your name'
            className='p-2 rounded bg-bgcolor border-[0.6px] placeholder:text-[14px] focus:outline-none'
            required
          />
          <input
            type='text'
            placeholder='Your email'
            className='p-2 rounded bg-bgcolor border-[0.6px] placeholder:text-[14px] focus:outline-none'
            required
          />
          <textarea
            name='message'
            id='message'
            cols={30}
            rows={6}
            placeholder='Your message...'
            className='p-2 rounded bg-bgcolor border-[0.6px] placeholder:text-[14px] focus:outline-none resize-none'
            required
          ></textarea>
          <button className='bg-titlecolor max-w-[160px] px-4 py-2 rounded text-bgcolor'>
            Send message
          </button>
        </div>
        <div className='contact flex flex-col gap-6'>
          <div className='linkedin flex items-center gap-3'>
            <AiFillLinkedin className='text-[24px]' />
            <Link href='/' className='text-titlecolor'>
              Ismael Avotra
            </Link>
          </div>
          <div className='github flex items-center gap-3'>
            <AiFillGithub className='text-[24px]' />
            <Link href='/' className='text-titlecolor'>
              AvotraIsmael
            </Link>
          </div>
          <div className='whatsapp flex items-center gap-3'>
            <AiOutlineWhatsApp className='text-[24px]' />
            <Link href='/' className='text-titlecolor'>
              +212 687779091
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
