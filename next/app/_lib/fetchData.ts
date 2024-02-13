import { notFound } from 'next/navigation'

import { Article } from '@/types'

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch('http://rails:3000/api/v1/articles', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch all articles.')
  }

  const articles = await res.json()
  return articles
}

export const getArticleById = async (id: string): Promise<Article> => {
  const res = await fetch(`http://rails:3000/api/v1/articles/${id}`, {
    cache: 'no-store',
  })

  if (res.status === 404) {
    notFound()
  }

  if (!res.ok) {
    throw new Error('Failed to fetch the article.')
  }

  const article = await res.json()
  return article
}
