import Header from '@components/Header'
import SideBar from '@components/SideBar'

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'frkawa.dev',
  description: 'frkawaのブログ。技術記事や雑記などを書いていく予定です。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className='bg-my-dark font-body text-white'>
        <div className='mx-auto grid max-w-7xl grid-cols-10 px-40'>
          <Header />
          <main className='col-span-7 mr-5'>{children}</main>
          <SideBar />
        </div>
      </body>
    </html>
  )
}
