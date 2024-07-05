import Todo from "./Todo"


const TodoList = ({data,updateTodo, isPending, deleteTodo}) => {
  return (
    <>
        <ul className="todo-list">
          {
            isPending && <li>Loading...</li>
          }
          { 
            data && data.map((todo)=>{
                return (
                <Todo todo={todo} 
                deleteTodo={deleteTodo} 
                isPending={isPending} 
                updateTodo={updateTodo}
                key={todo.id} />
            )})
          }
        </ul>
    </>
  )
}

export default TodoList