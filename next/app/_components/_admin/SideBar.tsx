import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='mx-10 my-5 h-full leading-8'>
      <div>
        記事
        <ul className='list-disc pl-6'>
          <li>
            <Link
              href='/admin/articles'
              className='text-sky-700 hover:underline'
            >
              一覧
            </Link>
          </li>
          <li>
            <Link
              href='/admin/articles/new'
              className='text-sky-700 hover:underline'
            >
              新規投稿
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
