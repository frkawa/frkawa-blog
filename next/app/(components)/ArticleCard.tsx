import { faArrowsRotate, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TagCards from './TagCards'

const ArticleCard = () => {
  return (
    <div className='bg-my-card-blue p-6 rounded-3xl mb-8'>
      <div className='flex gap-7 text-my-light-blue'>
        <span className='flex gap-2 font-josefinSans leading-5'>
          <FontAwesomeIcon icon={faClock} className='h-4' />
          2024-01-30
        </span>
        <span className='flex gap-2 font-josefinSans leading-5'>
          <FontAwesomeIcon icon={faArrowsRotate} className='h-4' />
          2024-03/20
        </span>
      </div>
      <h2 className='text-2xl font-bold my-5'>ブログ作りました</h2>
      <div>
        ついにできたついにできたついにできたついにできたついにできたついにできたついにできたついにできたついにできた
      </div>
      <TagCards />
    </div>
  )
}

export default ArticleCard
