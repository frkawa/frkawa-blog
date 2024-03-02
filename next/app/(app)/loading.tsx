import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center" aria-label="読み込み中">
      <div className="animate-ping h-4 mt-5 w-4 bg-my-emphasis-sky rounded-full"></div>
    </div>
  )
}

export default Loading
