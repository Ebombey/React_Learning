import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Navigation/Nav.tsx";
import Products from "./components/Products/Products.tsx";
import Recommended from "./components/Recommended/Recommended.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";

// Database
import products from "./db/index.tsx";
import Card from "./components/Card.tsx";

// Types
type ProductType = {
  img: string;
  title: string;
  star: JSX.Element;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [query, setQuery] = useState("");

  // Input filter
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // -------Radio Filter-----------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  // -------Button Filter-----------
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(e.currentTarget.value);
  };

  function filteredData(
    products: ProductType[],
    selected: string,
    query: string
  ) {
    let filteredProducts = products;

    // Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.title === selected ||
          product.newPrice === selected
      );
    }

    return filteredProducts.map((product) => (
      <Card
        key={Math.random()}
        img={product.img}
        title={product.title}
        star={product.star}
        reviews={product.reviews}
        newPrice={product.newPrice}
        prevPrice={product.prevPrice}
        company={product.company}
        color={product.color}
        category={product.category}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
