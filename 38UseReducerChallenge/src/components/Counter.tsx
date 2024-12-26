import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../reducers/counter.reducers.ts";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {state.count}</h1>

      <div>
        <input
          type="text"
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
        <button
          onClick={() => {
            dispatch({ type: "reset" });
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
