import { faDove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='col-span-10'>
      <h1 className='text-5xl my-12 font-josefinSans'>
        <Link href='/' className='inline-flex items-center gap-2'>
          <FontAwesomeIcon
            icon={faDove}
            className='h-9 text-my-emphasis-rose'
          />
          frkawa.dev
        </Link>
      </h1>
    </header>
  )
}

export default Header
