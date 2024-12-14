import { createContext } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA.tsx";
import ComponentB from "./components/ComponentB.tsx";
import ComponentC from "./components/ComponentC.tsx";

export const Data = createContext<string | null>(null);
export const DataOne = createContext<number | null>(null);

function App() {
  return (
    <>
      <Data.Provider value={"Naveen"}>
        <DataOne.Provider value={21}>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </DataOne.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
