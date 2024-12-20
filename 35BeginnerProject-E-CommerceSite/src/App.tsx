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

  // -------Search Bar Filter-----------
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // -------Sidebar Radio Filter-----------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  // -------Recommended Button Filter-----------
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(e.currentTarget.value);
  };

  function filteredData(
    products: ProductType[],
    selected: string,
    query: string
  ) {
    let filteredProducts = products;

    // Search Filter
    if (query) {
      filteredProducts = filteredItems;
    }

    // Sidebar Filter - Category, Price, Colors, Company
    if (selected) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category.toLowerCase() === selected ||
          product.color.toLowerCase() === selected ||
          product.company.toLowerCase() === selected ||
          product.title.toLowerCase() === selected ||
          product.newPrice.toLowerCase() === selected
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
