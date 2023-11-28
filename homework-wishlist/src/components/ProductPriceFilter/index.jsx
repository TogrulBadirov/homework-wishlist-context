import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./index.scss"

const minDistance = 10;

const ProductPriceFilter = ({ props }) => {
  const { handleFilter, setFilters } = props;

  const [value1, setValue1] = React.useState([0, 150]);

  useEffect(() => {
    setFilters((filters) => ({
      ...filters,
      price: [value1[0], value1[1]],
    }));
  }, [value1]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  //   const [value2, setValue2] = React.useState([20, 37]);

  //   const handleChange2 = (event, newValue, activeThumb) => {
  //     if (!Array.isArray(newValue)) {
  //       return;
  //     }

  //     if (newValue[1] - newValue[0] < minDistance) {
  //       if (activeThumb === 0) {
  //         const clamped = Math.min(newValue[0], 100 - minDistance);
  //         setValue2([clamped, clamped + minDistance]);
  //       } else {
  //         const clamped = Math.max(newValue[1], minDistance);
  //         setValue2([clamped - minDistance, clamped]);
  //       }
  //     } else {
  //       setValue2(newValue);
  //     }
  //   };

  return (
    <div className="price-filter">
      <h5>Price</h5>
      <label for="vol">
        Price Range: ${value1[0]} - ${value1[1]}
      </label>

        <div className="price-slider">
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="on"
          disableSwap
          color="warning"
          max={150}
          valueLabelFormat={(value) => `$${value}`}
          sx={{
            width: 200,
            color: "black",
            "& .MuiSlider-thumb": {
              borderRadius: "50%",
              width: "10px",
              height: "10px",
            },
          }}
        />
        </div>
    </div>
  );
};

export default ProductPriceFilter;
