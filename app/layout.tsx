import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renoblade - #1 Client Acquisition Agency',
  description: '#1 Client Acquisition Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
      </Head>
      <body className='px-[10%]'>{children}</body>
    </html>
  )
}
