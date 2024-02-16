'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { signIn } from '@/_lib/auth'
import { SignInFormData } from '@/types'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const requestData: SignInFormData = { email: email, password: password }

    try {
      const sessionItems = await signIn(requestData)

      localStorage.setItem('uid', sessionItems.uid)
      localStorage.setItem('access-token', sessionItems.accessToken)
      localStorage.setItem('client', sessionItems.client)

      router.push('/admin/articles')
      router.refresh()
    } catch (error) {
      console.error(error)

      router.push('/admin/login')
      router.refresh()
    }
  }

  return (
    <form className='mx-auto mt-20 w-1/2' onSubmit={handleOnSubmit}>
      <label>
        <h3 className='text-lg leading-9'>E-MAIL</h3>
        <input
          type='text'
          className='mb-5 w-full border px-3 py-2 shadow focus:outline-none'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <h3 className='text-lg leading-9'>パスワード</h3>
        <input
          type='password'
          className='mb-5 w-full border px-3 py-2 shadow focus:outline-none'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        className='mt-7 w-full rounded bg-emerald-400 p-2 text-white transition hover:opacity-75'
        type='submit'
      >
        ログイン
      </button>
    </form>
  )
}

export default AdminLogin
