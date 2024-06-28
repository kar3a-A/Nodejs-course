import { useState } from "react"


const App = () => {
  const [list, setlist] = useState([
    {
      id:1,
      title: 'Ninja'
    },
    {
      id:2,
      title: 'Turtle'
    },
    {
      id:3,
      title: 'Dragon'
    }
  ])

  let deletePost = (id) => {
    setlist((prev)=> prev.filter((item)=> item.id !== id))
  }
  return (
    <>
      <h3>List</h3>
      <ul>
        {list.map((item)=>{
          return (
            <li key={item.id}>{item.title}
              <button onClick={()=> deletePost(item.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App