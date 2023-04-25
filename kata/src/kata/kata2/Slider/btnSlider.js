import React, { useState } from "react";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  console.log(direction);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="icon flèche"
      />
    </button>
  );
};

export default BtnSlider;
