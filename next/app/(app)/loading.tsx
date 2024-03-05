import React from 'react'

const Loading = () => {
  return (
    <div
      className='mt-5 flex h-dvh justify-center align-middle'
      aria-label='読み込み中'
    >
      <div className='size-4 animate-ping rounded-full bg-my-emphasis-sky'></div>
    </div>
  )
}

export default Loading
