import "./App.css";
import Left from "./components/Left.tsx";
import Right from "./components/Right.tsx";
import SplitScreen from "./components/SplitScreen.tsx";

function App() {
  return (
    <>
      <SplitScreen leftWeight={20} rightWeight={80}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
}

export default App;
