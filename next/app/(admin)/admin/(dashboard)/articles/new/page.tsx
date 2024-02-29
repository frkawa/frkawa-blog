import { cookies } from 'next/headers'
import React from 'react'

import ArticleForm from '@/_components/_admin/ArticleForm'
import { initializeNewArticle } from '@/_lib/fetchData'
import { Article } from '@/types'

const AdminArticlesNewPage = async () => {
  let newArticle: Article = {
    id: '',
    url: '',
    title: '',
    body: '',
    status: '',
    published_at: '',
    updated_at: '',
  }
  // TODO: トークンセットとエラーハンドリングの共通化
  const token = cookies().get('token')?.value ?? ''
  try {
    newArticle = await initializeNewArticle(token)
  } catch (error) {
    console.error(error)
  }

  return (
    <div className='h-full bg-gray-200 p-5'>
      <div className='leading-8'>
        <h2 className='mb-6 border-b border-gray-400 pb-4 text-xl font-bold'>
          記事新規投稿
        </h2>
        <ArticleForm
          token={token}
          articleFormData={{
            id: newArticle.id,
            url: newArticle.url,
            title: newArticle.title,
            body: newArticle.body,
            status: newArticle.status,
          }}
        />
      </div>
    </div>
  )
}

export default AdminArticlesNewPage
