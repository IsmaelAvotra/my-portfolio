import Head from 'next/head'
import Navbar from './components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: {
    default: 'Ismael portfolio',
    template: '%s',
  },
  description:
    "Welcome to my portfolio! I'm a passionate Developer specializing in React.js,NExtJs, Node.js,Express js,Nestjs and mobile development with Flutter. Explore my innovative projects and technical skills to create exceptional web and mobile applications.",
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
