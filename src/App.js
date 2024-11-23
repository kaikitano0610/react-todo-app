import TodoList from "./TodoList";

function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
  