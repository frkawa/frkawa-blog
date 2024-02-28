import { notFound } from 'next/navigation'

import { Article, SessionItems } from '@/types'

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

export const getAllArticlesForAdmin = async (
  token: string,
): Promise<Article[]> => {
  const parsedToken = JSON.parse(token) as SessionItems
  const headers = {
    uid: parsedToken.uid,
    'access-token': parsedToken.accessToken,
    client: parsedToken.client,
  }

  const res = await fetch('http://rails:3000/api/v1/admin/articles', {
    headers: headers,
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch all articles.')
  }

  const articles = await res.json()
  return articles
}

export const initializeNewArticle = async (token: string): Promise<Article> => {
  const parsedToken = JSON.parse(token) as SessionItems
  const headers = {
    uid: parsedToken.uid,
    'access-token': parsedToken.accessToken,
    client: parsedToken.client,
  }

  const res = await fetch('http://rails:3000/api/v1/admin/articles/new', {
    headers: headers,
    cache: 'no-store',
  })

  if (!res.ok) {
    console.log(headers)
    throw new Error('Failed to initialize a new article.')
  }

  const article = await res.json()
  return article
}
