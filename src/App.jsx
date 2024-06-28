/* eslint-disable react/no-unknown-property */
// import saitama from './assets/saitama.png'
import './App.css'
import { useState } from 'react'

function App() {
  const [list, setlist] = useState([
    {
      id:1,
      title: 'Saitama'
    },
    {
      id:2,
      title: 'Forest'
    },
    {
      id:3,
      title: 'Book'
    }
  ])
  let changeList = ()=>{
    setlist([
      {
        id:1,
        title: 'Naruto'
      },
      {
        id:2,
        title: 'Saseki'
      },
      {
        id:3,
        title: 'Sakura'
      }
    ])
  }
  return (
    <>
      <div>
        <h3>List</h3>
        <ul>
          {list.map((item)=>{
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
          <button onClick={()=>changeList() }>Change</button>
      </div>

    </>
  )
}

export default App
