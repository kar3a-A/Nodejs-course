import { useState } from "react"


export default function Todo({todo,updateTodo, isPending, deleteTodo}) {
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(todo.title)

    const updateTodohandler = (e) => {
        e.preventDefault()

        let updatedTodo = {
            id: todo.id,
            title: title,
            completed: todo.completed
        }
        updateTodo(updatedTodo)
        setIsEdit(false)
    }
    return (
        
    <li className={`${isPending ? 'todo-item-container-pending' : 'todo-item-container'}`} >
        <div className="todo-item">
        <input type="checkbox" 
        onClick={()=> updateTodo({...todo, completed: !todo.completed})}
        checked={todo.completed}
        />
        {/* // add line through for completed */}
        {   !isEdit &&
            <span 
                onDoubleClick={()=> setIsEdit(true)}
                className={`todo-item-label ${todo.completed && 'line-through'}`}>
                {todo.title}
            </span>
        }
        {   
            isEdit &&
            <form  onSubmit={updateTodohandler}>
                <input 
                    onDoubleClick={()=> setIsEdit(false)}
                    type="text" 
                    className="todo-item-input" 
                    value={title} 
                    onChange={(e)=> setTitle(e.target.value)} />
            </form>
        }
        </div>
        <button className="x-button" onClick={()=>deleteTodo(todo.id)}>
        <svg
            className="x-button-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
            />
        </svg>
        </button>
    </li>
    )
}

