'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { ArticleFormData } from '@/types'

import { updateArticle } from './fetchData'

export const handleUpdateArticle = async (
  token: string,
  articleFormData: ArticleFormData,
) => {
  try {
    const updatedArtcile = await updateArticle(token, articleFormData)
    console.log(updatedArtcile)
  } catch (error) {
    throw new Error(`Failed to update the article. ${error}`)
  }

  // NOTE: 記事更新成功時、記事一覧と詳細ページを再ビルドする
  revalidatePath('/')
  revalidatePath(`/articles/${articleFormData.url}`)

  redirect('/admin/articles')
}
