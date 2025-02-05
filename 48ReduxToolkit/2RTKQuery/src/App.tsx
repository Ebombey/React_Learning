import "./App.css";
// import AddNewProduct from "./components/AddNewProduct.tsx";
// import AllProducts from "./components/AllProducts.tsx";
// import SpecificProduct from "./components/SpecificProduct.tsx";
// import UpdateProduct from "./components/UpdateProduct.tsx";
import DeleteProduct from "./components/DeleteProduct.tsx";

function App() {
  return (
    <>
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct /> */}
      <DeleteProduct productId={2} />
    </>
  );
}

export default App;
