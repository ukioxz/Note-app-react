import React, {useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations'
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
//import logo from './logo.svg';
//import './App.css';
import TodoList from './todo/todo';
import Context from './context';
import AddTodo from './todo/addTodo';

//const BounceInRight = styled.div`animation: 2s ${keyframes`${bounceInRight}`} `;
const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`} `;

function App() {
  const [todos, setTodos] = React.useState([]);

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

  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }
  return (
    <Context.Provider value={{removeTodo}}>
    <div className='wrapper'>
    <FadeIn><h1>Todo list</h1></FadeIn>
    <FadeIn><AddTodo onCreate={addTodo}/></FadeIn>
    {todos.length ? (
      <TodoList todos={todos} onToggle={toggleTodo}/>
    ) : (
      <p>No plans</p>
    )}
    </div>
    </Context.Provider>
  );
}

export default App;
