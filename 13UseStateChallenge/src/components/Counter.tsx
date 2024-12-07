import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default Counter;
