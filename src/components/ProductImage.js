import React, { useState } from "react";
import SliderUnstyled from "@mui/material/Slider";
import { createTheme } from "@mui/material";

export default function ProductImage(props) {
  const handleChange = (e, value) => {
    setSliderValue(value);
  };

  const [sliderValue, setSliderValue] = useState("1");

  const muiTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#565458",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  const imgUrl = `/img/${props.selectedProduct}/${sliderValue}.png`;
  return (
    <>
      <div className="product-image-container">
        <div className="image-container">
          <img src={imgUrl} alt="" />
        </div>
        <div className="slider-container">
          <SliderUnstyled
            aria-label="Rotate image"
            defaultValue={1}
            min={1}
            max={32}
            step={1}
            marks
            theme={muiTheme}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
