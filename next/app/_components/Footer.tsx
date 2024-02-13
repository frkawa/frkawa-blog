import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-gray-400 text-center text-gray-400'>
      <div className='my-4'>
        <span>&copy; {new Date().getFullYear()} frkawa.dev</span>
      </div>
    </footer>
  )
}

export default Footer
