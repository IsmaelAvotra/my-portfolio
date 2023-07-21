import Navbar from './components/navbar/Navbar'
import './globals.css'

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
