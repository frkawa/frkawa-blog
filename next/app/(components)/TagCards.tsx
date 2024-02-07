import Link from 'next/link'

const TagCards = () => {
  return (
    <ul className='flex flex-wrap gap-2'>
      <Link href='/' className=''>
        <li className='rounded-full bg-my-light-blue px-4 pb-0.5 text-black transition hover:bg-my-emphasis-sky'>
          # Next.js
        </li>
      </Link>
      <Link href='/' className=''>
        <li className='rounded-full bg-my-light-blue px-4 pb-0.5 text-black transition hover:bg-my-emphasis-sky'>
          # Ruby
        </li>
      </Link>
      <Link href='/' className=''>
        <li className='rounded-full bg-my-light-blue px-4 pb-0.5 text-black transition hover:bg-my-emphasis-sky'>
          # Terraform
        </li>
      </Link>
    </ul>
  )
}

export default TagCards
