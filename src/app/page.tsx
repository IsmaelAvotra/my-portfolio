import Banner from './components/banner/Banner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ismael portfolio',
}

export default function Home() {
  return (
    <main className='home tablet:px-8 desktop:px-10  flex justify-start items-center'>
      <Banner />
    </main>
  )
}
