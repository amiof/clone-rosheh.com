import React from "react";
import Slider from "react-slick";
import img1 from "../roshePics/banner/banner1.jpg";
import img2 from "../roshePics/banner/banner2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TopCarousel = () => {
  let settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    atoplaySpeed: 2000,
    // pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings} >
        <img src={img1} height="400px"/>
        <img src={img2} height="400px" />
      </Slider>
    </div>
  );
};

export default TopCarousel;
