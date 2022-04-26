import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoList from './todo/todo'

function App() {
  const todos = [
    {id:1, completed: false, title: 'Buy milk'},
    {id:2, completed: false, title: 'Buy butter'},
    {id:3, completed: false, title: 'Buy coffee'}
  ]
  return (
    <div className='wrapper'>
    <h1>Hello</h1>
    <TodoList todos={todos}/>
    </div>
  );
}

export default App;
