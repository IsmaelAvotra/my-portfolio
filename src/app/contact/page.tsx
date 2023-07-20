'use client'
import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import Footer from '../components/footer/Footer'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Modal from 'react-modal'
import ReactModal from 'react-modal'

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(1, 35, 63, 0.8)',
    zIndex: 9999,
  },
  content: {
    border: 'none',
    borderRadius: '8px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '16px 20px',
    textAlign: 'center',
    maxWidth: '320px',
  },
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isError, setIsError] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isSending, setIsSending] = useState<boolean>(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isSending && form.current) {
      try {
        setIsSending(true)
        await emailjs.sendForm(
          'service_j68lzmz',
          'template_9j44ik2',
          form.current,
          'H6Iwe94ZjHumtgq8R'
        )
        form.current.reset()
        setIsSuccess(true)
        setIsError(false)

        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)
      } catch (error) {
        setIsError(true)
        setIsSuccess(false)

        setTimeout(() => {
          setIsError(false)
        }, 4000)
      } finally {
        setIsSending(false)
      }
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
              disabled={isSending}
            >
              {isSending ? 'Sending ...' : ' Send message'}
            </button>
            <Modal
              isOpen={isError}
              onRequestClose={() => setIsError(false)}
              style={customModalStyles}
              contentLabel='Error during sending'
            >
              <div className='text-[15px] text-bgcolor/70 font-medium'>
                <h2 className='text-red font-bold text-[16px]'>
                  Error during sending
                </h2>
                <p>
                  An error occurred while sending the message, please try again.
                </p>
                <button
                  onClick={() => setIsError(false)}
                  className='bg-red px-6 mt-2 py-1 text-[white] rounded'
                >
                  Fermer
                </button>
              </div>
            </Modal>

            <Modal
              isOpen={isSuccess}
              onRequestClose={() => setIsSuccess(false)}
              style={customModalStyles}
              contentLabel='Message sent successfully'
            >
              <div className='text-[15px] text-bgcolor/70 font-medium'>
                <h2 className='text-[#2ae609] font-bold text-[16px]'>
                  Message sent successfully
                </h2>
                <p>Your message has been sent successfully.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className='bg-[#2ae609] px-6 mt-2 py-1 text-[white] rounded'
                >
                  Fermer
                </button>
              </div>
            </Modal>
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
