import "./App.css";
import Nav from "./components/Navigation/Nav.tsx";
import Products from "./components/Products/Products.tsx";
import Recommended from "./components/Recommeded/Recommended.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";

function App() {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
