'use client'
import { faArrowsRotate, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Article } from '@/types'

import Pre from './_markdown/Pre'


const ArticleDetail = ({ article }: { article: Article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <article className='rounded-3xl bg-my-card-blue p-6'>
        <h1 className='text-4xl'>{article.title}</h1>
        <div className='my-10 flex justify-center gap-7'>
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
        <div className='my-markdown'>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ pre: Pre }}>
            {article.body}
          </ReactMarkdown>
        </div>
      </article>
    </motion.div>
  )
}

export default ArticleDetail
