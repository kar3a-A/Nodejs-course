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
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

        {/* To do form here  */}
        <TodoForm  addTodo={AddTodo} />
        {/* To do list here */}
        <TodoList data={data} isPending={isPending}/>
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
