const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: 1000 },
    { id: 2, name: "Desktop", price: 2000 },
    { id: 3, name: "Laptop", price: 3000 },
  ];
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <ul>
            <li>{product.name}</li>
            <li>{product.price}</li>
          </ul>
          <br />
        </div>
      ))}
    </>
  );
};

export default ProductList;
