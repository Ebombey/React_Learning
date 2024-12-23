import { createContext } from "react";

type MyContextProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const MyContext = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

export default MyContext;
