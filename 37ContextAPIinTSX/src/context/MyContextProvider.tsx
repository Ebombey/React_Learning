import { useState } from "react";
import MyContext from "./MyContext.ts";

type MyProviderProps = {
  children: React.ReactNode;
};

const MyProvider = ({ children }: MyProviderProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
