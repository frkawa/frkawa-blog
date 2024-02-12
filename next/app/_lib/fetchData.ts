import { Article } from '@/types'

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch('http://rails:3000/api/v1/articles', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to data fetch.')
  }

  const articles = await res.json()
  return articles
}
