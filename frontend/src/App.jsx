
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar />
    <div className='p-5 bg-[#f1f1f1] h-screen'>
      <Outlet />
    </div>
    </>
  )
}

export default App
