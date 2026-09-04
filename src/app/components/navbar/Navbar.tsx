'use client'

import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 24) {
        setIsActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
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
              className='text-lg tablet:text-[18px]'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-[18px] tablet:text-[20px] font-semibold mr-4'>
                01.
              </span>
              About
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className='text-lg tablet:text-[18px]'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-[18px]  tablet:text-[20px] font-semibold mr-4'>
                02.
              </span>
              Skills
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='text-lg tablet:text-[18px]'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-[18px]  tablet:text-[20px] font-semibold mr-4'>
                03.
              </span>
              Projects
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='text-lg tablet:text-[18px]'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-[18px]  tablet:text-[20px] font-semibold mr-4'>
                04.
              </span>
              Contact
            </a>
          </li>
          <li>
            <a
              href='#'
              className='bg-bgcolor btn text-yellow text-[14px] font-normal border tablet:text-[16px] py-[6px] px-6 rounded-md hover:bg-yellow hover:text-bgcolor hover:border-none transition-all'
              onClick={() => setIsActive(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
