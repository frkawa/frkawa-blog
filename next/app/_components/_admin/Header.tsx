import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between bg-gray-900 px-10 py-6 text-white'>
      <Link href='/admin/articles'>
        <div className='text-2xl hover:opacity-75'>
          frkawa.dev Admin Dashboard
        </div>
      </Link>
      <div>
        <button className='w-full rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-500'>
          サインアウト
        </button>
      </div>
    </header>
  )
}

export default Header
