import React from 'react'

import ArticleForm from '@/_components/_admin/ArticleForm'

const AdminArticlesNewPage = () => {
  return (
    <div className='h-full bg-gray-200 p-5'>
      <div className='leading-8'>
        <h2 className='mb-6 border-b border-gray-400 pb-4 text-xl font-bold'>
          記事新規投稿
        </h2>
        <ArticleForm
          articleFormData={{
            url: '',
            title: '',
            body: '',
            status: '',
          }}
        />
      </div>
    </div>
  )
}

export default AdminArticlesNewPage
