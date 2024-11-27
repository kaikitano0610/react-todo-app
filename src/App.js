import { useState,useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

function App() {
  const [todos,setTodos] = useState([]);

  const todonameRef = useRef();

  const handleAddTodo = () =>{
    //タスクを追加する
    const taskname = todonameRef.current.value.trim();
    if (taskname === "") return;

    const newTask = {
      id: uuid(), name: taskname, completed:false
    };

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos,newTask];
      return updatedTodos;
    });
    todonameRef.current.value = null;
  };

  const checkout = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleClear = () =>{
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }


  return (
    <>
      <TodoList todos={todos} checkout={checkout} />
      <input type="text" ref={todonameRef} />
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{ todos.filter((todo) => !todo.completed).length }</div>
    </>
  );
}

export default App;
  