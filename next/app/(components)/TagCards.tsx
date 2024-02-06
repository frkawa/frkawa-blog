import Link from 'next/link'

const TagCards = () => {
  return (
    <ul className='flex gap-2 flex-wrap'>
      <Link href='/' className=''>
        <li className='transition hover:bg-my-emphasis-sky bg-my-light-blue rounded-full text-black px-4 pb-0.5'>
          # Next.js
        </li>
      </Link>
      <Link href='/' className=''>
        <li className='transition hover:bg-my-emphasis-sky bg-my-light-blue rounded-full text-black px-4 pb-0.5'>
          # Ruby
        </li>
      </Link>
      <Link href='/' className=''>
        <li className='transition hover:bg-my-emphasis-sky bg-my-light-blue rounded-full text-black px-4 pb-0.5'>
          # Terraform
        </li>
      </Link>
    </ul>
  )
}

export default TagCards
