import React, { useCallback } from "react";

export default function BasketCounter(props) {
  let numberOfItems = props.items.length;

  if (numberOfItems === 0) {
    numberOfItems = null;
  }

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
      <h2 onClick={handleOnClick}>{numberOfItems}</h2>
    </>
  );
}
