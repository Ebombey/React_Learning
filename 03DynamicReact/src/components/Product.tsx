const Product = () => {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: false,
  };
  return (
    <>
      <h1>Product: {product.name}</h1>
      <h1>Price: {product.price}</h1>
      <h1>
        Availability: {product.availability ? "Available" : "Not Available"}
      </h1>
    </>
  );
};

export default Product;
