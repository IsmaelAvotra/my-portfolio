import Image from 'next/image'
import Banner from './components/banner/Banner'

export default function Home() {
  return (
    <main className='home flex justify-start items-center '>
      <Banner />
    </main>
  )
}
