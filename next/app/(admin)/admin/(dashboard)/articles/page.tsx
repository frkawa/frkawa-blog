import Link from 'next/link'
import React from 'react'

import { getAllArticles } from '@/_lib/fetchData'

const AdminArticles = async () => {
  const articles = await getAllArticles()

  return (
    <div className='h-full bg-gray-200 p-5'>
      <div className='leading-8'>
        <h2 className='mb-6 border-b border-gray-400 pb-4 text-xl font-bold'>
          記事一覧
        </h2>
        <table className='w-full border-collapse border border-gray-400'>
          <thead className='bg-gray-700 text-white'>
            <tr>
              <th className='border border-gray-400 px-4 py-2'>ID</th>
              <th className='border border-gray-400 px-4 py-2'>タイトル</th>
              <th className='border border-gray-400 px-4 py-2'>ステータス</th>
              <th className='border border-gray-400 px-4 py-2'>公開日</th>
              <th className='border border-gray-400 px-4 py-2'>更新日</th>
              <th className='border border-gray-400 px-4 py-2'></th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => {
              return (
                <tr key={article.id} className='hover:bg-gray-100'>
                  <th className='border border-gray-400 px-4 py-2'>
                    {article.id}
                  </th>
                  <td className='border border-gray-400 px-4 py-2'>
                    {article.title.length > 15
                      ? article.title.slice(0, 15) + '…'
                      : article.title}
                  </td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>
                    {article.status}
                  </td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>
                    {article.published_at}
                  </td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>
                    {article.updated_at || `-`}
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link href={`/admin/articles/${article.id}/edit`}>
                      <button className='w-full rounded bg-emerald-600 px-3 py-2 text-sm text-white transition hover:bg-emerald-500'>
                        編集
                      </button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminArticles
