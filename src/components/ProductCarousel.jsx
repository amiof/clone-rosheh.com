import React from "react";
// import img1 from "../roshePics/products/1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { products } from "../data.js";
import ProductCard from "./ProductCard";

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    atoplaySpeed: 1000,
  };
  return (
    <>
      <div style={{ width: "85%", position: "absolute", bottom: "0" }}>
        <Slider {...settings}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              price={product.price}
              image={product.image}
              title={product.title}
              id={product.id}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductCarousel;
