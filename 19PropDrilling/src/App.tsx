import "./App.css";
import ComponentA from "./components/ComponentA.tsx";

function App() {
  // Prop drilling was a technique to pass props from one component to another and it was problem with nested components
  // So to solve this problem we now use Context API or Redux or Zustand
  const name = "Naveen";

  return (
    <>
      <h1>Prop Drilling name given to Component A</h1>
      <ComponentA name={name} />
    </>
  );
}

export default App;
