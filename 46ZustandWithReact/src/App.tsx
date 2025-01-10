import OtherComponent from "./components/OtherComponent.tsx";
import { useCounter } from "./store.ts";

function App() {
  // First way to get access to counter
  const count = useCounter((state) => state.count);

  // Second way to get access to counter is destructuring
  // const { count, increment, decrement } = useCounter();
  return (
    <>
      <h1>{count}</h1>
      <OtherComponent />
    </>
  );
}

export default App;
