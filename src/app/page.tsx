import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { cookies } from 'next/headers'
import type { Lang, Dict } from './locales'
import { translations } from './locales'

export const metadata: Metadata = {
  title: 'Ismael portfolio',
  description:
    "Welcome to my portfolio! I'm a passionate Developer specializing in React.js,NExtJs, Node.js,Express js,Nestjs and mobile development with Flutter. Explore my innovative projects and technical skills to create exceptional web and mobile applications.",
}

const About = dynamic<{ lang: Lang; dict: Dict['about'] }>(
  () => import('./components/about/About')
)
const Skills = dynamic<{ lang: Lang; dict: Dict['skills'] }>(
  () => import('./components/banner/skills/Skills')
)
const Projects = dynamic<{ lang: Lang; dict: Dict['projects'] }>(
  () => import('./components/projects/Projects')
)
const Contact = dynamic<{ dict: Dict['contact'] }>(
  () => import('./components/contact/Contact')
)

export default async function Home() {
  const lang = (cookies().get('lang')?.value ?? 'en') as Lang
  const dict = translations[lang]

  return (
    <main>
      <div className='home tablet:px-8 desktop:px-10 flex justify-start items-center'>
        <Banner dict={dict.banner} />
      </div>
      <div>
        <About lang={lang} dict={dict.about} />
        <Skills lang={lang} dict={dict.skills} />
        <Projects lang={lang} dict={dict.projects} />
        <Contact dict={dict.contact} />
        <Footer dict={dict.footer} />
      </div>
    </main>
  )
}
