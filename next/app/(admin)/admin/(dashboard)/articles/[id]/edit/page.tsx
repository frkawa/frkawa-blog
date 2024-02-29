import { cookies } from 'next/headers'
import React from 'react'

import ArticleForm from '@/_components/_admin/ArticleForm'
import { getArticleByIdForAdmin } from '@/_lib/fetchData'

const AdminArticlesEditPage = async ({
  params,
}: {
  params: { id: string }
}) => {
  const token = cookies().get('token')?.value as string | ''
  const editingArticle = await getArticleByIdForAdmin(token, params.id)

  return (
    <div className='h-full bg-gray-200 p-5'>
      <div className='leading-8'>
        <h2 className='mb-6 border-b border-gray-400 pb-4 text-xl font-bold'>
          記事編集
        </h2>
        <ArticleForm
          token={token}
          articleFormData={{
            id: editingArticle.id,
            url: editingArticle.url,
            title: editingArticle.title,
            body: editingArticle.body,
            status: editingArticle.status,
          }}
        />
      </div>
    </div>
  )
}

export default AdminArticlesEditPage
