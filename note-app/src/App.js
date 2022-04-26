import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoList from './todo/todo';
import Context from './context';
import AddTodo from './todo/addTodo'

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
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <Context.Provider value={{removeTodo}}>
    <div className='wrapper'>
    <h1>Hello</h1>
    <AddTodo />
    {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No todos</p>}
    </div>
    </Context.Provider>
  );
}

export default App;
