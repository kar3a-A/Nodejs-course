import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckAllAndRemaining from './components/CheckAllAndRemaining';
import TodoFilter from './components/TodoFilter';
import ClearAndComplete from './components/ClearAndComplete';

function App() {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

        {/* To do form here  */}
        <TodoForm />
        {/* To do list here */}
        <TodoList />
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
