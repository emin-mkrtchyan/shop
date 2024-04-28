import { NavLink as Link } from "react-router-dom"

export function Header() {
  return (
    <nav className=" bg-gray-300 flex justify-center items-center p-4">
      <Link className='text-3xl mr-4' to="/">Home</Link>
      <Link className='text-3xl mr-4' to="/about">about</Link>
      <Link className='text-3xl mr-4' to="/contact">contact</Link>
    </nav>
  )
}
