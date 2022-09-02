import React, { useCallback } from "react";
const _ = require("lodash");

export default function BasketItems(props) {
  let numberOfEach = _.countBy(props.items, "id");

  let uniqueItems = [...new Set(props.items)];

  function checkNum(thisId) {
    return numberOfEach[thisId];
  }

  const handleOnClick = useCallback(
    (event) => {
      props.removeFromBasket(event.target.id);
    },
    [props]
  );

  const basketItems = uniqueItems.map((item) => {
    return (
      <>
        <div className="item-container" key={item.id}>
          <div>{item.name}</div>
          <div>{item.color}</div>
          <div>{checkNum(item.id)}</div>
          <div>£{item.price * checkNum(item.id)}</div>
          <small id={item.id} onClick={handleOnClick}>
            remove
          </small>
        </div>
      </>
    );
  });

  const basketTotalPrice = props.items.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  if (props.items == 0) {
    return (
      <>
        <p>Your shopping bag is empty</p>
      </>
    );
  } else {
    return (
      <>
        <div className="items-container">
          {basketItems}
          <div className="item-container" key="total">
            <div>
              <em>Total:</em>
            </div>
            <div></div>
            <div></div>
            <div>
              <em>£{basketTotalPrice}</em>
            </div>
          </div>
        </div>
      </>
    );
  }
}
