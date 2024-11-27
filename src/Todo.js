import React from 'react'

const Todo = ( {todo,checkout} ) => {

  const handleTodoclick = () => {
    checkout(todo.id);
  }

  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoclick}></input>
        </label>
        {todo.name}
    </div>
  )
}

export default Todo