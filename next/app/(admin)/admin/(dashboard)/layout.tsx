import React from 'react'

import Header from '@/_components/_admin/Header'
import SideBar from '@/_components/_admin/SideBar'

const AdminDashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <section className='flex grow'>
        <aside className='h-full w-1/5'>
          <SideBar />
        </aside>
        <main className='w-4/5'>{children}</main>
      </section>
    </div>
  )
}

export default AdminDashboardLayout
