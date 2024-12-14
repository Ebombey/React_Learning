import { useContext } from "react";
import { Data, DataOne } from "../App.tsx";

const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(DataOne);
  return (
    <div>
      <h1>Component C: </h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default ComponentC;
