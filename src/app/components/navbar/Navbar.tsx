'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='navbar p-4 flex items-center justify-between relative '>
      <div className='logo'>
        <Link href='/'>
          <Image src='/logo.svg' alt='logo' width={24} height={42} />
        </Link>
      </div>
      <div className='menu z-30' onClick={() => setIsActive(!isActive)}>
        {isActive ? (
          <IoClose className='text-sxl text-textcolor' />
        ) : (
          <IoMenu className='text-sxl text-textcolor' />
        )}
      </div>
      <div
        className={`navigation absolute ${
          isActive ? 'right-0' : 'hidden'
        } top-0 h-[100vh] w-[60vw] z-20 transition-all `}
      >
        <ul className='flex flex-col items-start ml-12  gap-10 mt-24'>
          <li>
            <Link
              href='/about'
              className='text-lg cursor-pointer'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-xl font-semibold mr-4'>
                01.
              </span>
              About
            </Link>
          </li>
          <li>
            <Link
              href='/skills'
              className='text-lg'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-xl font-semibold mr-4'>
                02.
              </span>
              Skills
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-lg'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-xl font-semibold mr-4'>
                03.
              </span>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-lg'
              onClick={() => setIsActive(false)}
            >
              <span className='text-yellow text-xl font-semibold mr-4'>
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
