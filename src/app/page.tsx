import Banner from './components/banner/Banner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ismael portfolio',
  description:
    "Welcome to my portfolio! I'm a passionate Developer specializing in React.js,NExtJs, Node.js,Express js,Nestjs and mobile development with Flutter. Explore my innovative projects and technical skills to create exceptional web and mobile applications.",
}

export default function Home() {
  return (
    <main className='home tablet:px-8 desktop:px-10  flex justify-start items-center'>
      <Banner />
    </main>
  )
}
