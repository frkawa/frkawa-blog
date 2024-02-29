'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { updateArticle } from '@/_lib/fetchData'
import { ArticleFormData } from '@/types'

const ArticleForm = ({
  token,
  articleFormData,
}: {
  token: string
  articleFormData: ArticleFormData
}) => {
  const articleStatuses = [
    { code: 'draft', name: '下書き' },
    { code: 'published', name: '公開' },
    { code: 'archived', name: 'アーカイブ' },
  ]
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormData>()
  const onSubmit: SubmitHandler<ArticleFormData> = async (data) => {
    console.log(data)
    const updatedArticle = await updateArticle(token, data)
    console.log(updatedArticle)
  }

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <input type='hidden' value={articleFormData.id} {...register('id')} />
      <label className='mb-6'>
        <h3 className='mb-1 font-bold'>記事URL</h3>
        <input
          className='w-3/4 border px-3 py-2 shadow focus:outline-none'
          defaultValue={articleFormData.url}
          {...register('url', { required: '記事のURLを入力してください' })}
        />
        {errors.url && (
          <p className='pt-2 text-sm text-red-500'>{errors.url.message}</p>
        )}
      </label>

      <label className='mb-6'>
        <h3 className='mb-1 font-bold'>記事タイトル</h3>
        <input
          className='w-3/4 border px-3 py-2 shadow focus:outline-none'
          defaultValue={articleFormData.title}
          {...register('title', {
            required: '記事のタイトルを入力してください',
          })}
        />
        {errors.title && (
          <p className='pt-2 text-sm text-red-500'>{errors.title.message}</p>
        )}
      </label>

      <label className='mb-6'>
        <h3 className='mb-1 font-bold'>記事本文</h3>
        <textarea
          rows={10}
          className='w-full border px-3 py-2 leading-6 shadow focus:outline-none'
          defaultValue={articleFormData.body}
          {...register('body', {
            required: '記事本文を入力してください',
          })}
        />
        {errors.body && (
          <p className='pt-2 text-sm text-red-500'>{errors.body.message}</p>
        )}
      </label>

      <label className='mb-6'>
        <h3 className='mb-1 font-bold'>ステータス</h3>
        <select
          className='mr-2 border px-3 py-2 shadow focus:outline-none'
          value={articleFormData.status}
          {...register('status')}
        >
          {articleStatuses.map((status) => {
            return (
              <option key={status.code} value={status.code}>
                {status.name}
              </option>
            )
          })}
        </select>
        {errors.status && (
          <p className='pt-2 text-sm text-red-500'>{errors.status.message}</p>
        )}
      </label>

      <button
        className='mt-7 w-full rounded bg-emerald-400 p-2 text-white transition hover:opacity-75'
        type='submit'
      >
        送信
      </button>
    </form>
  )
}

export default ArticleForm
