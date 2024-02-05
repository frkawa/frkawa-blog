import Link from 'next/link'

const TagCards = () => {
  return (
    <ul className='flex gap-2 mt-5 flex-wrap'>
      <Link href='/' className=''>
        <li className='transition hover:bg-my-emphasis-sky bg-my-light-blue rounded-full text-black px-3 py-0.5'>
          # Ruby
        </li>
      </Link>
      <Link href='/' className=''>
        <li className='transition hover:bg-my-emphasis-sky bg-my-light-blue rounded-full text-black px-3 py-0.5'>
          # Ruby
        </li>
      </Link>
      <Link href='/' className=''>
        <li className='transition hover:bg-my-emphasis-sky bg-my-light-blue rounded-full text-black px-3 py-0.5'>
          # Ruby
        </li>
      </Link>
    </ul>
  )
}

export default TagCards
