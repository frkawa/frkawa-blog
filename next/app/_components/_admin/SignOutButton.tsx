'use client'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'

import { signOut } from '@/_lib/auth'
import { SessionItems } from '@/types'

const SignOutButton = () => {
  const router = useRouter()

  const handleClick = async () => {
    const sessionItems: SessionItems = {
      uid: localStorage.getItem('uid') || '',
      accessToken: localStorage.getItem('access-token') || '',
      client: localStorage.getItem('client') || '',
    }

    try {
      await signOut(sessionItems)

      localStorage.removeItem('uid')
      localStorage.removeItem('access-token')
      localStorage.removeItem('client')
    } catch (error) {
      alert('ログインしてないっすわ')
    }

    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      className='w-full rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-500'
      onClick={handleClick}
    >
      サインアウト
      <FontAwesomeIcon icon={faRightFromBracket} className='ml-2 h-4' />
    </button>
  )
}

export default SignOutButton
