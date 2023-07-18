import React from 'react'

const Footer = () => {
  return (
    <footer className='grid place-items-center  h-[40px] tablet:h-[50px] '>
      <p className='text-[12px] tablet:text-[14px]'>
        © Copyright 2023 by{' '}
        <span className='text-[14px] tablet:text-[16px] text-red mx-[3px]'>
          Ismael
        </span>{' '}
        | All Rights Reserved!
      </p>
    </footer>
  )
}

export default Footer
