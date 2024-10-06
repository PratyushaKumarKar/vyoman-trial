import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
      <Link href="/">
        <Image src="/vyoman-logo.png" alt="Vyoman Logo" width={120} height={40} />
      </Link>
      <button className="bg-black text-white px-4 py-2 rounded">Login</button>
    </header>
  )
}
