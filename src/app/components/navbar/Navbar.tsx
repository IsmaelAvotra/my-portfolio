import Image from 'next/image'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='navbar p-4 flex items-center justify-between'>
      <div className='logo'>
        <Image src='/logo.svg' alt='logo' width={24} height={42} />
      </div>
      <div className='menu'>
        <IoMenu className='text-sxl text-textcolor' />
      </div>
    </div>
  )
}

export default Navbar
