import Link from 'next/link'
import { AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import Footer from '../footer/Footer'
import Form from './Form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    'On this page, you can see my contacts, and you can also use the form to get in touch with me.',
}

const socialLinks = [
  {
    icon: <AiFillLinkedin />,
    label: 'LinkedIn',
    handle: 'Ismael Avotra',
    href: 'https://www.linkedin.com/in/ismael-avotra-22546b168',
  },
  {
    icon: <AiOutlineMail />,
    label: 'Email',
    handle: 'avotraismael4@gmail.com',
    href: 'mailto:avotraismael4@gmail.com',
  },
  {
    icon: <AiOutlineWhatsApp />,
    label: 'WhatsApp',
    handle: '+212 687 779 091',
    href: 'https://wa.me/212687779091',
  },
]

const Contact = () => {
  return (
    <>
      <div id='contact' className='contact mt-8 px-4 tablet:px-8 mb-16 scroll-mt-28'>
        <div className='flex items-center gap-4 mb-10'>
          <h2 className='text-[20px] font-medium whitespace-nowrap tablet:text-[22px]'>
            <span className='text-yellow text-xl font-semibold mr-4 tablet:text-[24px]'>04.</span>
            Contact Me
          </h2>
          <div className='h-[1px] flex-1 bg-textcolor/20' />
        </div>

        <div className='desktop:flex desktop:items-start desktop:gap-8'>
          <div className='bg-[#061426] border border-textcolor/10 rounded-xl p-6 flex flex-col gap-6 desktop:flex-[2] mb-6 desktop:mb-0'>
            <div>
              <p className='text-titlecolor font-semibold text-[17px] mb-2'>
                Let's work together
              </p>
              <p className='text-textcolor/60 text-[13px] leading-relaxed'>
                Open to new opportunities, freelance projects, and interesting collaborations.
                Feel free to reach out — I'll get back to you as soon as possible.
              </p>
            </div>

            <div className='h-[1px] bg-textcolor/10' />

            <div className='flex flex-col gap-2'>
              {socialLinks.map(({ icon, label, handle, href }) => (
                <Link
                  key={label}
                  href={href}
                  target='_blank'
                  className='flex items-center gap-3 p-3 rounded-xl bg-textcolor/5 hover:bg-textcolor/10 transition-colors group'
                >
                  <div className='w-9 h-9 rounded-lg bg-textcolor/10 flex items-center justify-center text-[18px] text-textcolor/60'>
                    {icon}
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-titlecolor text-[13px] font-medium'>{label}</p>
                    <p className='text-textcolor/40 text-[11px] truncate'>{handle}</p>
                  </div>
                  <HiArrowTopRightOnSquare className='text-textcolor/20 group-hover:text-textcolor/50 transition-colors text-[14px] flex-shrink-0' />
                </Link>
              ))}
            </div>

            <div className='h-[1px] bg-textcolor/10' />

            <div className='flex items-center gap-2'>
              <div
                className='w-2 h-2 rounded-full bg-green-400'
                style={{ boxShadow: '0 0 6px #4ade80' }}
              />
              <span className='text-[12px] text-textcolor/50'>Available for new projects</span>
            </div>
          </div>

          <div className='bg-[#061426] border border-textcolor/10 rounded-xl p-6 desktop:flex-[3]'>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
