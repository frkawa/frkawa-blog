import ArticleList from '@components/ArticleList'

import { getAllArticles } from '../_lib/fetchData'

export default async function Home() {
  const allArticles = await getAllArticles()

  return <ArticleList articles={allArticles} />
}
