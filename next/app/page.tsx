import ArticleList from '@components/ArticleList'

export default function Home() {
  const fetchArticles = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/v1/articles')
      if (!res.ok) {
        throw new Error('Failed to fetch articles')
      }
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  fetchArticles()

  return <ArticleList />
}
