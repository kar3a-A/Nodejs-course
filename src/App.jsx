/* eslint-disable react/no-unknown-property */
import saitama from './assets/saitama.png'
import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState("Hello world1")
  return (
    <>
    
      <h1>{name}</h1>
      <img src={saitama} alt="" style={{ width: '300px' }} />
      <button onClick={() => setName("Hello world2")}>Change h1 text</button>

    </>
  )
}

export default App
