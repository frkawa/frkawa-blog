import Link from 'next/link'
import React from 'react'

import SignOutButton from './SignOutButton'

const Header = () => {
  return (
    <header className='flex justify-between bg-gray-900 px-10 py-6 text-white'>
      <Link href='/admin/articles'>
        <div className='text-2xl hover:opacity-75'>
          frkawa.dev Admin Dashboard
        </div>
      </Link>
      <div>
        <SignOutButton />
      </div>
    </header>
  )
}

export default Header
