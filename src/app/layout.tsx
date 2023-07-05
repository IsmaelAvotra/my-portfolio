import Head from 'next/head'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: {
    default: 'Ismael portfolio',
    template: '%s',
  },
  description: 'This is the portfolio of Ismael Avotra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
