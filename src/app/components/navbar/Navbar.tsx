'use client'

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
    <div className='navbar p-4 tablet:px-8 tablet:py-6 flex items-center justify-between sticky top-0 z-60 bg-bgcolor '>
      <div className='logo'>
        <Link href='/'>
          <Image src='/logo.svg' alt='logo' width={24} height={42} />
        </Link>
      </div>
      <div
        className='menu text-sxl text-textcolor tablet:text-[32px] z-30 '
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? <IoClose /> : <IoMenu />}
      </div>
      <div
        className={`navigation absolute ${
          isActive ? 'right-0' : 'hidden'
        } top-0 h-[100vh] w-[60vw] tablet:w-[50vw]  transition-all z-20 `}
      >
        <ul className='flex flex-col items-start ml-12 tablet:ml-16  gap-10 tablet:gap-16 mt-24 '>
          <li>
            <Link
              href='/about'
              className='text-lg tablet:text-[22px]'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-xl tablet:text-[28px] font-semibold mr-4'>
                01.
              </span>
              About
            </Link>
          </li>
          <li>
            <Link
              href='/skills'
              className='text-lg tablet:text-[22px]'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-xl  tablet:text-[28px] font-semibold mr-4'>
                02.
              </span>
              Skills
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className='text-lg tablet:text-[22px]'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-xl  tablet:text-[28px] font-semibold mr-4'>
                03.
              </span>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='text-lg tablet:text-[22px]'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-xl  tablet:text-[28px] font-semibold mr-4'>
                04.
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
