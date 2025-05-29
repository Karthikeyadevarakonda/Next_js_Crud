import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <div className="shadow flex max-w-3xl items-center justify-between m-auto px-10 py-4 bg-gray-200 font-bold  rounded-b-2xl">
         <Link href={'/'}> <em>HOME</em> </Link>
         <Link href={'/create'}><em>ADD</em></Link>
      </div>
    </div>
  )
}

export default Navbar
