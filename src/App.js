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
import useDelete from './hooks/useDelete';
import useUpdate from './hooks/useUpdate';

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

  let DeleteTodo = (todoID) =>{
    // delete todo server side
    useDelete(link, todoID);
    // delete todo client side
    setData((prevState)=> prevState.filter((todo)=> todo.id !== todoID))
  }

  let UpdateTodo = (todo) =>{
    // update todo server side
    useUpdate(link, todo);
    // update todo client side
    setData((prevState)=> {
      // return need ***
      return (
      prevState.map((prevTodo)=>{
        if(prevTodo.id === todo.id){
          return todo
        }
        return prevTodo
      })
      )
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
          deleteTodo={DeleteTodo}
          updateTodo={UpdateTodo}/>
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
