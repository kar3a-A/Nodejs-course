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
  const [tick, setTick] = useState({})
  console.log(tick)
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

  const remainingCount = data && data.filter((todo)=> !todo.completed).length
  let CheckAll = () =>{
    // update todo server side
    data.forEach((todoEach)=>{
      todoEach.completed = true
      UpdateTodo(todoEach)
    })

    // update todo client side
    setData((prevState)=> {
      return (
      prevState.map((prevTodo)=>{
        return {
          ...prevTodo,
          completed: true
        }
      })
      )
    })
  }

  let ClearComplete = () =>{
    // update todo server side
    data.forEach((todoEach)=>{
      if(todoEach.completed){
        DeleteTodo(todoEach.id)
      }
    })
    // delete todo client side
    setData((prevState)=> prevState.filter(((todo)=> !todo.completed)))
  }

  let FilterAll = () =>{
    // filter at client side
  }

  let FilterActive = () =>{
    // filter at client side

  }

  let FilterCompleted = () =>{
  // filter at client side

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
          updateTodo={UpdateTodo} />
        {/* Check all and remaining  */}
        <CheckAllAndRemaining 
          checkAll={CheckAll}
          remainingCount={remainingCount}/>

        <div className="other-buttons-container">
          {/* To do filter  */}
          <TodoFilter  
            filterAll={FilterAll} 
            filterActive={FilterActive}
            filterCompleted={FilterCompleted}/>

          {/* Clear completed Button  */}
          <ClearAndComplete clearComplete={ClearComplete}/>
        </div>
      </div>
    </div>
  );
}

export default App;
