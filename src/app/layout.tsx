import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Lora, Manrope } from 'next/font/google'
import { cookies } from 'next/headers'
import type { Lang } from './locales'
import { translations } from './locales'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Ismael portfolio',
  },
  description:
    "Welcome to my portfolio! I'm a passionate Developer specializing in React.js,NExtJs, Node.js,Express js,Nestjs and mobile development with Flutter. Explore my innovative projects and technical skills to create exceptional web and mobile applications.",
  openGraph: {
    images: ['https://ismael-avotra.vercel.app/share.png'],
  },
  twitter: {
    card: 'summary_large_image',
    image: 'https://ismael-avotra.vercel.app/share.png',
  },
  other: {
    google: 'notranslate',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lang = (cookies().get('lang')?.value ?? 'en') as Lang
  const dict = translations[lang]

  return (
    <html lang={lang} className={`${lora.variable} ${manrope.variable}`}>
      <body>
        <Navbar lang={lang} dict={dict.navbar} />
        {children}
      </body>
    </html>
  )
}
