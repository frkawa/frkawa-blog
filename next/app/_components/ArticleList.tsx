import ArticleCard from '@components/ArticleCard'

import { Article } from '@/types'

type ArticleListProps = {
  articles: Article[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <main className='col-span-7 mr-5'>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </main>
  )
}

export default ArticleList
