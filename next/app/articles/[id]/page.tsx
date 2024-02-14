import { faArrowsRotate, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { qtcreatorDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'

import { getArticleById } from '@/_lib/fetchData'

import type { ClassAttributes, HTMLAttributes } from 'react'
import type { ExtraProps } from 'react-markdown'

const Article = async ({ params }: { params: { id: string } }) => {
  const article = await getArticleById(params.id)

  const Pre = ({
    children,
    ...props
  }: ClassAttributes<HTMLPreElement> &
    HTMLAttributes<HTMLPreElement> &
    ExtraProps) => {
    if (!children || typeof children !== 'object') {
      return <code {...props}>{children}</code>
    }
    const childType = 'type' in children ? children.type : ''
    if (childType !== 'code') {
      return <code {...props}>{children}</code>
    }

    const childProps = 'props' in children ? children.props : {}
    const { className, children: code } = childProps
    const classList = className ? className.split(':') : []
    const language = classList[0]?.replace('language-', '')
    const fileName = classList[1]

    return (
      <>
        {fileName && (
          <div className='bg-my-dark !-mb-1 pt-2 rounded-t-lg'>
            <span className=' bg-gray-600 p-1 ml-2 mt-3 rounded'>
              {fileName}
            </span>
          </div>
        )}
        <SyntaxHighlighter language={language} style={qtcreatorDark}>
          {String(code).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </>
    )
  }

  return (
    <article className='rounded-3xl bg-my-card-blue p-6'>
      <h1 className='text-4xl'>{article.title}</h1>
      <div className='my-10 flex justify-center gap-7'>
        <span className='flex gap-2 leading-4'>
          <FontAwesomeIcon icon={faClock} className='h-4' />
          {article.published_at} に投稿
        </span>
        <span
          className={`${article.updated_at ? 'flex' : 'hidden'} gap-2 leading-4`}
        >
          <FontAwesomeIcon icon={faArrowsRotate} className='h-4' />
          {article.updated_at} に更新
        </span>
      </div>
      <div className='my-markdown'>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ pre: Pre }}>
          {article.body}
        </ReactMarkdown>
      </div>
    </article>
  )
}

export default Article
