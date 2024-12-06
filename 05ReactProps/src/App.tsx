import "./App.css";
import Person from "./components/Person.tsx";
import Product from "./components/Product.tsx";

function App() {
  return (
    <>
      <Person name="Naveen" age={22} />
      <Product name="Laptop" price={1000} />
    </>
  );
}

export default App;
