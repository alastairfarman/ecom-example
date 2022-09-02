import React, { useCallback } from "react";
import BasketItems from "./BasketItems";
import BasketCounter from "./BasketCounter";

function Basket(props) {
  const handleOnClick = useCallback(() => {
    if (props.isOpen === "basket-closed") {
      props.setIsOpen("basket-open");
    } else {
      if (props.isOpen === "basket-open") {
        props.setIsOpen("basket-closed");
      }
    }
  }, [props]);

  return (
    <>
      <div id="basket-container">
        <BasketCounter items={props.basketContent} />
      </div>
      <div id="basket-drop-down" className={props.isOpen}>
        <h3>Shopping Bag</h3>
        <div id="close-bag" onClick={handleOnClick}>
          X
        </div>
        <div className="basket-products-list">
          <BasketItems
            items={props.basketContent}
            removeFromBasket={props.removeFromBasket}
          />
        </div>
      </div>
    </>
  );
}

export default Basket;
