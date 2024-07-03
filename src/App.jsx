import TripList from './components/TripList/TripList'
import './App.css'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
    <button onClick={() => setShow(prev=>!prev)}>{show? 'Hide' : 'Show'}</button>
      {
        show && <TripList />
      }
    </>
  )
}

export default App
