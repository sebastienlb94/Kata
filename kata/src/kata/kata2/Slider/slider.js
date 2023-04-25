import React, { useState } from "react";
import "./slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./btnSlider";

const Slider = () => {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false });
      }, 800);
    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false });
      }, 800);
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
      }, 800);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: dataSlider.length, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: dataSlider.length, inProgress: false });
      }, 800);
    }
  };

  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false });
  };

  return (
    <div className="container-slider">
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img src={`/imgs/img${index + 1}.jpg`} alt="" />
          </div>
        );
      })}
      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => {
          return (
            <button
              onClick={() => moveDot(index + 1)}
              className={slideAnim.index === index + 1 ? "dot active" : "dot"}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
