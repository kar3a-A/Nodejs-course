import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckAllAndRemaining from './components/CheckAllAndRemaining';
import TodoFilter from './components/TodoFilter';
import ClearAndComplete from './components/ClearAndComplete';
import { useState } from 'react';
import useFetch from './hooks/useFetch';
import usePost from './hooks/usePost';

function App() {
  const link= ('http://localhost:3001/todo')
  const [url, setUrl] = useState(link)

  const {data,setData, isPending} = useFetch(url)


  let AddTodo = (todo) =>{
    // Both server and client side should update
    // update at server side
    usePost(link, todo);
    // update at client side
    setData((prevState)=> [...prevState, todo])

  }

  let deleteTodo = (todoID) =>{
    // delete todo server side
    fetch(`${link}/${todoID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoID)
    })
    // delete todo client side
    setData((prevState)=> prevState.filter((todo)=> todo.id !== todoID))
  }

  let updateTodo = (todo) =>{
    // update todo server side
    fetch(`${link}/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    // update todo client side
    setData((prevState)=> {
      prevState.map((prevTodo)=>{
        if(prevTodo.id === todo.id){
          return todo
        }
        return prevTodo
      })
    })
  }


  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

        {/* To do form here  */}
        <TodoForm  addTodo={AddTodo} />
        {/* To do list here */}
        <TodoList 
          data={data} 
          isPending={isPending} 
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}/>
        {/* Check all and remaining  */}
        <CheckAllAndRemaining />

        <div className="other-buttons-container">
          {/* To do filter  */}
          <TodoFilter />

          {/* Clear completed Button  */}
          <ClearAndComplete />
        </div>
      </div>
    </div>
  );
}

export default App;
