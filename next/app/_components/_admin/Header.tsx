import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

import SignOutButton from './SignOutButton'

const Header = () => {
  const token = cookies().get('token')?.value as string

  return (
    <header className='flex justify-between bg-gray-900 px-10 py-6 text-white'>
      <Link href='/admin/articles'>
        <div className='text-2xl hover:opacity-75'>
          frkawa.dev Admin Dashboard
        </div>
      </Link>
      <div>
        <SignOutButton token={token} />
      </div>
    </header>
  )
}

export default Header
