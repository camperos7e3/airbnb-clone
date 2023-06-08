import './globals.css'
import { Nunito } from 'next/font/google'

import Navbar from '@components/navbar'
import RegisterModal from '@components/models/RegisterModal'
import ToasterProvider from '@providers/ToasterProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* Experimental */}
        {/* <ClientOnly>
          <Navbar />
        </ClientOnly> */}
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
