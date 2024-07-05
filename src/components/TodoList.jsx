import Todo from "./Todo"


const TodoList = ({data, isPending, deleteTodo}) => {
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
                key={todo.id} />
            )})
          }
        </ul>
    </>
  )
}

export default TodoList