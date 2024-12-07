import "./App.css";
import Counter from "./components/Counter.tsx";
import Profile from "./components/Profile.tsx";
import ShoppingList from "./components/ShoppingList.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {
  return (
    <>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </>
  );
}

export default App;
