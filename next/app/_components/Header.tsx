import { faDove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='col-span-10'>
      <h1 className='my-12 font-josefinSans text-5xl'>
        <Link href='/' className='inline-flex items-center gap-2'>
          <FontAwesomeIcon icon={faDove} className='h-9 text-my-emphasis-sky' />
          frkawa.dev
        </Link>
      </h1>
    </header>
  )
}

export default Header
