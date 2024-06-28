import { useState } from "react"


const App = () => {
  const [count, setcount] = useState(1)
  return (
    <>
      <div>
        <h3>Counter</h3>
        <h3>Count {count}</h3>
        <button onClick={()=>{setcount((preState)=>preState+1)}}>Increment</button>
        <button onClick={() =>{setcount((preState)=>preState-1)}}>Decrement</button>
        <button onClick={()=>{setcount(1)}}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App