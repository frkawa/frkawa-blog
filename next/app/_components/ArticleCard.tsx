'use client'
import { faArrowsRotate, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Article } from '@/types'

type ArticleCardProps = {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='mb-6 md:last:mb-0'
    >
      <Link href={`/articles/${article.url}`}>
        <article className='rounded-3xl bg-my-card-blue p-6 transition hover:bg-my-card-blue-hover'>
          <div className='flex gap-7 text-sm text-gray-400'>
            <span className='flex gap-2 leading-4'>
              <FontAwesomeIcon icon={faClock} className='h-4' />
              {article.published_at}
            </span>
            <span
              className={`${article.updated_at ? 'flex' : 'hidden'} gap-2 leading-4`}
            >
              <FontAwesomeIcon icon={faArrowsRotate} className='h-4' />
              {article.updated_at}
            </span>
          </div>
          <h2 className='my-5 text-3xl'>{article.title}</h2>
          <div className='mb-5'>{article.body.slice(0, 200)}</div>
        </article>
      </Link>
    </motion.div>
  )
}

export default ArticleCard
