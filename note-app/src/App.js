import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoList from './todo/todo'

function App() {
  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: 'Buy milk'},
    {id:2, completed: false, title: 'Buy butter'},
    {id:3, completed: false, title: 'Buy coffee'}
  ]);

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  )}
  return (
    <div className='wrapper'>
    <h1>Hello</h1>
    <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
