'use client'
import React from 'react'

const AdminLogin = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitted')
  }

  return (
    <form className='mx-auto mt-20 w-1/2' onSubmit={handleOnSubmit}>
      <label>
        <h3 className='text-lg leading-9'>E-MAIL</h3>
        <input
          type='text'
          className='mb-5 w-full border px-3 py-2 shadow focus:outline-none'
        />
      </label>
      <label>
        <h3 className='text-lg leading-9'>パスワード</h3>
        <input
          type='password'
          className='mb-5 w-full border px-3 py-2 shadow focus:outline-none'
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
