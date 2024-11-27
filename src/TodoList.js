import React from 'react'
import Todo from './Todo'


const TodoList = ({ todos,checkout }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} checkout={checkout}/>)
}

export default TodoList