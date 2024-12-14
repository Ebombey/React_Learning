import { useReducer, useState } from "react";
import { initialState, reducer } from "../utils/counterReducer.ts";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <div>
        <input
          type="number"
          placeholder="Enter Value"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

        <button
          onClick={() => {
            dispatch({ type: "incrementByAmount", payload: count });
            setCount(0);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrementByAmount", payload: count });
            setCount(0);
          }}
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Counter;
