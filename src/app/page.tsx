import Banner from './components/banner/Banner'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Ismael portfolio',
  description:
    "Welcome to my portfolio! I'm a passionate Developer specializing in React.js,NExtJs, Node.js,Express js,Nestjs and mobile development with Flutter. Explore my innovative projects and technical skills to create exceptional web and mobile applications.",
}

const About = dynamic(() => import('./components/about/About'))
const Skills = dynamic(() => import('./components/banner/skills/Skills'))
const Projects = dynamic(() => import('./components/projects/Projects'))
const Contact = dynamic(() => import('./components/contact/Contact'))

export default function Home() {
  return (
    <main>
      <div className='home tablet:px-8 desktop:px-10 flex justify-start items-center'>
        <Banner />
      </div>
      <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
