import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { v4 as uuidv4 } from "uuid";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpeg";
const slideImages = [image1, image2, image3, image4, image5];

function Slider() {
  return (
    <Carousel style={{ marginBottom: "10px !important" }}>
      {slideImages.map((slide, index) => {
        return (
          <Carousel.Item className="slider" interval={1000} key={uuidv4()}>
            <img className="d-block w-100" src={slide} alt="First slide" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
