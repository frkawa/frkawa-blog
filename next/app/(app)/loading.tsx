import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center' aria-label='読み込み中'>
      <div className='mt-5 size-4 animate-ping rounded-full bg-my-emphasis-sky'></div>
    </div>
  )
}

export default Loading
