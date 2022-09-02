import React, { useCallback } from "react";

export default function ProductInfo(props) {
  const product = props.products.find(
    (x) => x.id === parseInt(props.selectedProduct)
  );

  const handleClick = useCallback(
    (e) => {
      props.setSelectedProduct(e.target.value);
    },
    [props]
  );

  const handleAddToBasketClick = useCallback(
    (e) => {
      props.addToBasket(props.selectedProduct);
    },
    [props]
  );

  return (
    <>
      <div className="product-info">
        <h1 id="name">{product.name}</h1>
        <h1 id="price">£{product.price}</h1>
        <p id="color">{product.color}</p>
        <div id="colors">
          <input type="button" value="1" onClick={handleClick} />
          <input type="button" value="2" onClick={handleClick} />
          <input type="button" value="3" onClick={handleClick} />
        </div>
        <div id="description">{product.desc}</div>
        <div className="basket-container">
          <button
            id="addtobasket"
            value={props.pid}
            onClick={handleAddToBasketClick}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </>
  );
}
