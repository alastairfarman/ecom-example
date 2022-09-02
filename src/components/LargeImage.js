import React from "react";
import reveal from "./scrollAnimation";

window.addEventListener("scroll", reveal);

reveal();

export default function LargeImage(props) {
  if (props.view != "alt") {
    const imgURL = `./img/${props.selectedProduct}/100t.png`;

    return (
      <>
        <div className="large-image-container">
          <h1 className="image-overlay-text reveal alt">
            Handmade in <em>Italy</em>
          </h1>
          <img className="large-image reveal" src={imgURL} alt="" />
        </div>
      </>
    );
  } else {
    const imgURL = `./img/${props.selectedProduct}/120t.png`;

    return (
      <>
        <div className="large-image-container alt">
          <h1 className="image-overlay-text reveal">
            Interesting <em>feature</em>
          </h1>
          <img className="large-image reveal alt" src={imgURL} alt="" />
        </div>
      </>
    );
  }
}
