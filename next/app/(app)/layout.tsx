import Footer from '@components/Footer'
import Header from '@components/Header'
import SideBar from '@components/SideBar'

import type { Metadata } from 'next'

import '@/globals.css'

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
        <div className='container mx-auto flex min-h-screen flex-col px-10'>
          <Header />
          <div className='grow md:flex'>
            <main className='col-span-7 mr-5 w-full md:w-2/3'>{children}</main>
            <aside className='mb-8 w-full min-w-72 md:w-1/3'>
              <SideBar />
            </aside>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
