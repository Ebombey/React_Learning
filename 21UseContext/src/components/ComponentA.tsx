import { useContext } from "react";
import { Data } from "../App.tsx";

const ComponentA = () => {
  useContext(Data);
  return (
    <div>
      <h1>Component A: </h1>
    </div>
  );
};

export default ComponentA;
