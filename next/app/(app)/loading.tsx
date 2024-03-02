import React from 'react'

const Loading = () => {
  return (
    <div
      className='flex justify-center align-middle h-dvh mt-5'
      aria-label='読み込み中'
    >
      <div className='size-4 animate-ping rounded-full bg-my-emphasis-sky'></div>
    </div>
  )
}

export default Loading
