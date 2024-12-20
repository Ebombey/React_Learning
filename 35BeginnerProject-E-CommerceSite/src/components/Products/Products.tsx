import "./Products.css";
import React from "react";

type ProductsProps = {
  result: React.ReactNode;
};

const Products = ({ result }: ProductsProps) => {
  console.log(result);
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
