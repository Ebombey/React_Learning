import { useState } from "react";

type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      setTodos((todo) => [
        ...todo,
        { id: Math.random(), text: input, completed: false },
      ]);
      setInput("");
    }
  };

  const removeTodo = (id: number) =>
    setTodos((todo) => todo.filter((t) => t.id !== id));

  return (
    <form className="bg-[#fcfff3] p-14" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        className="p-4 border-none outline-none bg-[#f5f9eb] w-80 mr-3"
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-[#454545] rounded-[100px] px-3 py-2 outline-none border-none text-white cursor-pointer"
      >
        Submit
      </button>

      <ul className="mt-12">
        {todos.map(({ id, text }) => (
          <li
            className="list-none flex justify-between items-center bg-[#f5f9eb] px-2 py-5 m-3 font-sans"
            key={id}
          >
            <span>{text}</span>
            <button
              className="px-1 py-2 cursor-pointer"
              onClick={() => removeTodo(id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default TodoList;
