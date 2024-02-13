import ArticleCard from '@components/ArticleCard'

import { Article } from '@/types'

type ArticleListProps = {
  articles: Article[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </>
  )
}

export default ArticleList
