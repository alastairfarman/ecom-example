import React, { useCallback } from "react";
import { FiShoppingBag } from "react-icons/fi";

function BasketIcon(props) {
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
      <div onClick={handleOnClick}>
        <FiShoppingBag size={"1.5rem"} />
      </div>
    </>
  );
}

export default BasketIcon;
