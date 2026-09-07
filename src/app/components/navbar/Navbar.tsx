'use client'

import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import LanguageSwitcher from '../LanguageSwitcher'
import type { Lang, Dict } from '../../locales'

const sectionIds = ['about', 'skills', 'projects', 'contact']

const Navbar = ({ lang, dict }: { lang: Lang; dict: Dict['navbar'] }) => {
  const [isActive, setIsActive] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) setIsActive(false)

      const scrollPos = window.scrollY + 120
      let current = ''
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) current = id
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className='navbar bg-bgcolor p-4 desktop:px-10 tablet:px-8 tablet:py-2 flex items-center justify-between sticky top-0 z-[60] '>
      <div className='logo' onClick={() => setIsActive(false)}>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo Ismael Avotra'
            width={500}
            height={500}
            className='w-[72px] tablet:w-[80px] desktop:w-[88px]'
          />
        </Link>
      </div>
      <div
        className='menu text-sxl text-textcolor tablet:text-[32px] desktop:hidden z-[80] '
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? <IoClose /> : <IoMenu />}
      </div>
      <div
        className={`navigation absolute desktop:relative ${isActive ? 'right-0' : 'hidden desktop:flex desktop:items-center'
          } top-0 h-[100vh] desktop:h-auto w-[60vw] desktop:w-auto tablet:w-[50vw]  transition-all z-[70]  `}
      >
        <ul className='flex flex-col desktop:flex-row items-start desktop:items-center ml-12 tablet:ml-16  gap-10 tablet:gap-16 desktop:gap-14 mt-24 desktop:mt-0 desktop:ml-0 '>
          <li>
            <a
              href='#about'
              className={`text-lg tablet:text-[18px]${activeSection === 'about' ? ' nav-active' : ''}`}
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-[18px] tablet:text-[20px] font-semibold mr-4'>
                01.
              </span>
              {dict.about}
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className={`text-lg tablet:text-[18px]${activeSection === 'skills' ? ' nav-active' : ''}`}
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-[18px] tablet:text-[20px] font-semibold mr-4'>
                02.
              </span>
              {dict.skills}
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className={`text-lg tablet:text-[18px]${activeSection === 'projects' ? ' nav-active' : ''}`}
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-[18px] tablet:text-[20px] font-semibold mr-4'>
                03.
              </span>
              {dict.projects}
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className={`text-lg tablet:text-[18px]${activeSection === 'contact' ? ' nav-active' : ''}`}
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-[18px] tablet:text-[20px] font-semibold mr-4'>
                04.
              </span>
              {dict.contact}
            </a>
          </li>
          <li>
            <LanguageSwitcher lang={lang} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
