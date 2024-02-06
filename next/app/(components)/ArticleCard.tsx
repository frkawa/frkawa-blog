import { faArrowsRotate, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TagCards from './TagCards'

const ArticleCard = () => {
  return (
    <div className='bg-my-card-blue p-6 rounded-3xl mb-8'>
      <div className='flex gap-7'>
        <span className='flex gap-2 leading-4'>
          <FontAwesomeIcon icon={faClock} className='h-4' />
          2024-01-30
        </span>
        <span className='flex gap-2 leading-4'>
          <FontAwesomeIcon icon={faArrowsRotate} className='h-4' />
          2024-03-20
        </span>
      </div>
      <h2 className='text-3xl my-5'>ブログ作りました</h2>
      <div className='mb-5'>
        ついにできたついにできたついにできたついにできたついにできたついにできたついにできたついにできたついにできた
      </div>
      <TagCards />
    </div>
  )
}

export default ArticleCard
