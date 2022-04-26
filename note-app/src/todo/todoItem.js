import React from 'react'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({todo, index}) {
  return(
  <li style={styles.li}>
  <span>
  <input type="checkBox" style={styles.input}/>
  <strong>{index + 1}</strong>
  {todo.title}
  </span>
  <button>&times;</button>
  </li>
);
}

export default TodoItem;
