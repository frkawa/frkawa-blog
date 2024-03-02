import ArticleDetail from '@/_components/ArticleDetail'
import { getArticleById } from '@/_lib/fetchData'

const Article = async ({ params }: { params: { id: string } }) => {
  const article = await getArticleById(params.id)

  return <ArticleDetail article={article} />
}

export default Article
