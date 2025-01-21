import { create } from "zustand";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, todo: Todo) => void;
  toggleTodo: (id: number) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  updateTodo: (id, todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? todo : t)),
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));

export default useTodoStore;
