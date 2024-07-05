import { useState } from "react"


const TodoForm = ({addTodo}) => {
  const [input, setinput] = useState("")
  let handleSubmit = (e) =>{
    e.preventDefault()
    // todo oject
    const todo = {
      id: Math.floor(Math.random() * 10000),
      title: input,
      completed: false
    }
    // add todo
    addTodo(todo)
    // clear input
    setinput("")
  }
  return (
    <>
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            onChange={(e)=> setinput(e.target.value)}
            value={input}
          />
        </form>
    </>
  )
}

export default TodoForm