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
      className='mb-6 md:mb-0'
    >
      <article className='rounded-3xl bg-my-card-blue p-10'>
        <h1 className='text-4xl'>{article.title}</h1>
        <div className='my-10 flex flex-col text-center text-gray-400 md:flex-row md:justify-center'>
          <span className='mb-3 gap-2 leading-4 md:mr-8'>
            <FontAwesomeIcon icon={faClock} className='mr-2 h-4' />
            {article.published_at} に投稿
          </span>
          <span
            className={`${article.updated_at ? '' : 'hidden'} gap-2 leading-4`}
          >
            <FontAwesomeIcon icon={faArrowsRotate} className='mr-2 h-4' />
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
