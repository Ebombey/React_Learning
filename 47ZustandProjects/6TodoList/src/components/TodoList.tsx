import { useState } from "react";
import useTodoStore from "../store/useTodoStore.ts";

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    addTodo({ id: Date.now(), text: inputValue, completed: false });

    setInputValue("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">
          To-Do List
        </h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleAddTodo}
            className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-300 rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 mr-2 text-blue-600 form-checkbox"
                />

                <span
                  className={`${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700 font-semibold"
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
