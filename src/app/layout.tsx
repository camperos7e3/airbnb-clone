import './globals.css'
import { Nunito } from 'next/font/google'

import Navbar from '@components/navbar'

import RegisterModal from '@components/models/RegisterModal'
import LoginModal from '@components/models/LoginModal'
import RentModal from '@components/models/RentModal'

import ToasterProvider from '@providers/ToasterProvider'
import getCurrentUser from '@actions/getCurrentUser'
import ClientOnly from '@components/ClientOnly'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  )
}
