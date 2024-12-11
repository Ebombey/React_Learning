import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  useEffect(() => {
    if (value > 0) {
      console.log("Called useEffect");
      document.title = `Increment ${value}`;
    }
  }, [value]);
  return (
    <>
      <div>
        <h2>Count: {value}</h2>
        <button onClick={() => setValue(value + 1)}>Click me</button>
        <button onClick={() => setSomething(something + 1)}>
          Click Something
        </button>
      </div>
    </>
  );
}

export default App;
