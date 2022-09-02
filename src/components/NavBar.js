import Basket from "./Basket";
import BasketIcon from "./BasketIcon";
import { useCallback } from "react";
import BasketCounter from "./BasketCounter";

export default function NavBar(props) {
  const handleOnClick = useCallback((event) => {
    props.setNavPage(event.target.id);
  },[props]);

  return (
    <>
      <nav>
        <div id="logo">
          <img src="/img/minimum-logo-paths.png" onClick={handleOnClick} id="Home" alt="" />
        </div>
        <ul className="nav">
          <li onClick={handleOnClick} id="Product">
            sunglasses
          </li>
          <li onClick={handleOnClick} id="About">
            minimum
          </li>
        </ul>
        <div id="basket-icon-container">
          <BasketCounter
            setIsOpen={props.setIsOpen}
            isOpen={props.isOpen}
            items={props.basketContent}
          />
          <BasketIcon setIsOpen={props.setIsOpen} isOpen={props.isOpen} />
        </div>
      </nav>
      <Basket
        basketContent={props.basketContent}
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        removeFromBasket={props.removeFromBasket}
      />
    </>
  );
}
