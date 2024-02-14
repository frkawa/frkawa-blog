import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { qtcreatorDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import type { ClassAttributes, HTMLAttributes } from 'react'
import type { ExtraProps } from 'react-markdown'

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
        <div className='!-mb-1 rounded-t-lg bg-my-dark pt-2'>
          <span className=' ml-2 mt-3 rounded bg-gray-600 p-1'>{fileName}</span>
        </div>
      )}
      <SyntaxHighlighter language={language} style={qtcreatorDark}>
        {String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </>
  )
}

export default Pre
