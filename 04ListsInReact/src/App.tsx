import "./App.css";
import ProductList from "./components/ProductList.tsx";
import UserLists from "./components/UserLists.tsx";

function App() {
  return (
    <>
      <h1>Users</h1>
      <UserLists />
      <h1>Product</h1>
      <ProductList />
    </>
  );
}

export default App;
