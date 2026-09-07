'use client'
import React from 'react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { HiCheckCircle, HiXCircle } from 'react-icons/hi2'
import type { Dict } from '../../locales'

const Form = ({ dict }: { dict: Dict['contact']['form'] }) => {
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
          'service_dv186fh',
          'template_6yl21cq',
          form.current,
          'H6Iwe94ZjHumtgq8R'
        )
        form.current.reset()
        setIsSuccess(true)
        setIsError(false)
        setTimeout(() => setIsSuccess(false), 4000)
      } catch (error) {
        setIsError(true)
        setIsSuccess(false)
        setTimeout(() => setIsError(false), 4000)
      } finally {
        setIsSending(false)
      }
    }
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={sendEmail} ref={form}>
      <input
        type='text'
        placeholder={dict.namePlaceholder}
        name='name'
        className='w-full p-3 rounded-xl bg-[#0b1829] border border-textcolor/8 text-textcolor placeholder:text-textcolor/30 placeholder:text-[13px] focus:outline-none focus:border-textcolor/30 transition-colors'
        minLength={3}
        maxLength={100}
        required
      />
      <input
        type='email'
        name='email'
        placeholder={dict.emailPlaceholder}
        className='w-full p-3 rounded-xl bg-[#0b1829] border border-textcolor/8 text-textcolor placeholder:text-textcolor/30 placeholder:text-[13px] focus:outline-none focus:border-textcolor/30 transition-colors'
        required
      />
      <textarea
        name='message'
        id='message'
        cols={30}
        rows={7}
        placeholder={dict.messagePlaceholder}
        className='w-full p-3 rounded-xl bg-[#0b1829] border border-textcolor/8 text-textcolor placeholder:text-textcolor/30 placeholder:text-[13px] focus:outline-none focus:border-textcolor/30 transition-colors resize-none'
        required
      />

      {isSuccess && (
        <div className='flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-[13px]'>
          <HiCheckCircle className='text-[18px] flex-shrink-0' />
          {dict.successMsg}
        </div>
      )}

      {isError && (
        <div className='flex items-center gap-3 px-4 py-3 rounded-xl bg-red/10 border border-red/20 text-red text-[13px]'>
          <HiXCircle className='text-[18px] flex-shrink-0' />
          {dict.errorMsg}
        </div>
      )}

      <button
        className='mt-1 self-start bg-yellow text-bgcolor font-semibold px-6 py-2 rounded-xl text-[14px] hover:bg-yellow/90 transition-colors disabled:opacity-50'
        type='submit'
        disabled={isSending}
      >
        {isSending ? dict.sending : dict.send}
      </button>
    </form>
  )
}

export default Form
