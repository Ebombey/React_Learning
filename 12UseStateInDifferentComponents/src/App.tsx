import { useState } from "react";
import "./App.css";
import One from "./components/One.tsx";
import Two from "./components/Two.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <One count={count} onClickHandler={() => setCount(count + 1)} />
      <Two
        count={count}
        onClickHandler={() => setCount(count <= 0 ? 0 : count - 1)}
      />
    </>
  );
}

export default App;
