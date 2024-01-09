import { useState } from "react";
import Nav from "./navigation/Nav";
import Product from "./products/Product";
import Recommended from "./recommended/Recommended";
import SideBar from "./sidebad/SideBar";
import "./index.css";
//data base
import Data from "./db/Data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  //inputFilter

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = Data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //Side Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Buttons Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filterdData(products, selected, query) {
    let filteredProducts = products;

    //input

    if (query) {
      filteredProducts = filteredItems;
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filterdData(Data, selectedCategory, query);
  return (
    <>
      <SideBar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  );
}

export default App;
