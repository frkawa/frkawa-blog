import { faArrowsRotate, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TagCards from '@components/TagCards'

import { Article } from '@/types'

type ArticleCardProps = {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className='mb-8 rounded-3xl bg-my-card-blue p-6'>
      <div className='flex gap-7'>
        <span className='flex gap-2 leading-4'>
          <FontAwesomeIcon icon={faClock} className='h-4' />
          {article.published_at}
        </span>
        <span className='flex gap-2 leading-4'>
          <FontAwesomeIcon icon={faArrowsRotate} className='h-4' />
          {article.updated_at}
        </span>
      </div>
      <h2 className='my-5 text-3xl'>{article.title}</h2>
      <div className='mb-5'>{article.body.slice(0, 200)}</div>
      <TagCards />
    </article>
  )
}

export default ArticleCard
