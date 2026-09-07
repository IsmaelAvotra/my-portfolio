'use server'
import { cookies } from 'next/headers'
import type { Lang } from '../locales'

export async function setLanguage(lang: Lang) {
  cookies().set('lang', lang, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  })
}
