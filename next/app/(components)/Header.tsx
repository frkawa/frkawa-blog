import Link from "next/link"

const Header = () => {
  return (
    <header className="col-span-10">
      <Link href="/">
        <h1 className="text-5xl py-12">frkawa.dev</h1>
      </Link>
    </header>
  )
}

export default Header
