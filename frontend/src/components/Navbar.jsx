import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center p-5 bg-white'>
        <div>
            <h1 className='font-bold text-2xl text-lime-600'>ReceipesS</h1>
        </div>
        <ul className='flex space-x-3 font-bold'>
            <li ><NavLink to="/" className='hover:text-lime-500'>Home</NavLink></li>
            <li><NavLink to="/about" className='hover:text-lime-500'>About</NavLink></li>
            <li><NavLink to="/receipes" className='hover:text-lime-500'>Receipes</NavLink></li>
        </ul>
        </nav>
    </>
  )
}

export default Navbar