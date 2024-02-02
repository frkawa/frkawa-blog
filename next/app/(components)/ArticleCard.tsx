import { faArrowsRotate, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TagCards from "./TagCards"

const ArticleCard = () => {
  return (
    <div className="bg-my-middle-blue p-6 rounded-3xl mb-8">
      <div className="flex gap-7 text-my-emphasis-blue">
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} className="h-4" />
          2024/1/30 14:33
        </span>
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowsRotate} className="h-4" />
          2024/3/20 11:12
        </span>
      </div>
      <h2 className="text-2xl font-bold my-5">ブログ作りました</h2>
      <div>
        ついにできたついにできたついにできたついにできたついにできたついにできたついにできたついにできたついにできた
      </div>
      <TagCards />
    </div>
  )
}

export default ArticleCard
