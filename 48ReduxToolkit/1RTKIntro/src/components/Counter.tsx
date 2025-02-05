import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../app/features/counter/counterSlice.ts";
import { AppDispatch, RootState } from "../app/store.ts";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
