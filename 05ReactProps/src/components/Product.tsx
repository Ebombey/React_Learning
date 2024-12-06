interface ProductProps {
  name: string;
  price: number;
}

// Direct props approach
const Product = (props: ProductProps) => {
  return (
    <>
      <h2>Product: {props.name}</h2>
      <p>Price: {props.price}</p>
    </>
  );
};

export default Product;
