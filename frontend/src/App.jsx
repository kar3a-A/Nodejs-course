
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
    <nav>
      <li ><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/receipes">Receipes</NavLink></li>
    </nav>
    <div>
      <Outlet />
    </div>
    </>
  )
}

export default App
