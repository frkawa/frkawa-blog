import { faArrowsRotate, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { getArticleById } from '@/_lib/fetchData'

const Article = async ({ params }: { params: { id: string } }) => {
  const article = await getArticleById(params.id)

  return (
    <article className='rounded-3xl bg-my-card-blue p-6'>
      <h1 className='mb-10 text-4xl'>{article.title}</h1>
      <div className='mb-10 flex justify-center gap-7'>
        <span className='flex gap-2 leading-4'>
          <FontAwesomeIcon icon={faClock} className='h-4' />
          {article.published_at} に投稿
        </span>
        <span
          className={`${article.updated_at ? 'flex' : 'hidden'} gap-2 leading-4`}
        >
          <FontAwesomeIcon icon={faArrowsRotate} className='h-4' />
          {article.updated_at} に更新
        </span>
      </div>
      <div>
        <p>{article.body}</p>
      </div>
    </article>
  )
}

export default Article
