import React, { useState } from "react";
import "./App.css";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import NavBar from "./components/NavBar";
import LargeImage from "./components/LargeImage";
const { products } = require("./assets/data.json");

export default function App() {
  //set state of product id
  const [selectedProduct, setSelectedProduct] = useState(1);

  //set state of basket content

  const [basketContent, setBasketContent] = useState([]);

  //set basket open state

  const [isOpen, setIsOpen] = useState("basket-closed");

  const [navPage, setNavPage] = useState("Home");

  //////////////////////////////////////////////////////////

  function addToBasket(productToAdd) {
    if (selectedProduct === productToAdd) {
      let product = products.find((x) => x.id === parseInt(selectedProduct));
      setBasketContent((current) => [...current, product]);
    }
    let logo = document.getElementById("logo");

    if (logo.className === "") {
      logo.setAttribute("class", "spin");
    } else {
      logo.setAttribute("class", "");
    }

    setIsOpen("basket-open");
  }

  function removeFromBasket(productToRemove) {
    let product = basketContent.find((x) => x.id === parseInt(productToRemove));
    let index = basketContent.indexOf(product);
    setBasketContent((current) => [
      ...current.slice(0, index),
      ...current.slice(index + 1),
    ]);
  }

  /////////////////////// Conditional Rendering ////////////////////////////

  function PageRender() {
    switch (navPage) {
      case "Product":
        return <Product />;

      case "Home":
        return <Home />;

      case "About":
        return <About />;

      default:
        return "error 404 lol";
    }
  }

  function Home() {
    return(
      <>
      <div className="startpage">
        <img src="./img/minimum-logo-paths.svg" alt="" />
      </div>
      </>
    )
  }

  function Product() {
    return (
      <div className="Content">
        <div id="product-hero-section" className={isOpen}>
          <ProductImage selectedProduct={selectedProduct} />
          <ProductInfo
            products={products}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            addToBasket={addToBasket}
          />
        </div>
        <LargeImage selectedProduct={selectedProduct} />
        <LargeImage view="alt" selectedProduct={selectedProduct} />
      </div>
    );
  }

  function About() {}

  return (
    <>
      <NavBar
        basketContent={basketContent}
        selectedProduct={selectedProduct}
        removeFromBasket={removeFromBasket}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setNavPage={setNavPage}
      />
      <PageRender />
    </>
  );
}
