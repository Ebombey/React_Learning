import { createContext } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA.tsx";
import ComponentB from "./components/ComponentB.tsx";

export const Data = createContext<string | null>(null);
export const DataOne = createContext<number | null>(null);

function App() {
  const name = "Naveen";
  return (
    <>
      <Data.Provider value={name}>
        <DataOne.Provider value={21}>
          <ComponentA />
          <ComponentB />
        </DataOne.Provider>
      </Data.Provider>
    </>
  );
}

export default App;
