import type { Metadata } from 'next'
import { Anton, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '../components/shared/Header'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton'
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-jakarta'
})

export const metadata: Metadata = {
  title: 'Shoppes | a shop for shoes',
  description: 'Buy any shoes that you want'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='container bg-additional-white'>
      <body className={`${anton.className} ${plusJakarta.className} `}>
        <Header />
        {children}
      </body>
    </html>
  )
}
