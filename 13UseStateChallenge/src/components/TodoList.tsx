import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  function addTodo(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          placeholder="Add Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
