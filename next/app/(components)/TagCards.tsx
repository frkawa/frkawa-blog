import Link from "next/link"

const TagCards = () => {
  return (
    <ul className="flex gap-2 mt-5 flex-wrap">
      <Link href="/" className="">
        <li className="transition hover:bg-my-emphasis-rose hover:text-white bg-my-emphasis-yellow rounded-full text-black px-3 py-0.5"># Ruby</li>
      </Link>
      <Link href="/" className="">
        <li className="transition hover:bg-my-emphasis-rose hover:text-white bg-my-emphasis-yellow rounded-full text-black px-3 py-0.5"># Ruby</li>
      </Link>
      <Link href="/" className="">
        <li className="transition hover:bg-my-emphasis-rose hover:text-white bg-my-emphasis-yellow rounded-full text-black px-3 py-0.5"># Ruby</li>
      </Link>
    </ul>
  )
}

export default TagCards
