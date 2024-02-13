import { faDove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='col-span-10 max-md:text-center'>
      <h1 className='my-12 font-josefinSans text-4xl'>
        <Link
          href='/'
          className='inline-flex gap-2 transition hover:text-gray-300'
        >
          <FontAwesomeIcon icon={faDove} className='h-8 text-my-emphasis-sky' />
          frkawa.dev
        </Link>
      </h1>
    </header>
  )
}

export default Header
