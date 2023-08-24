import React from "react";
// import img1 from "../roshePics/products/1.jpg"
import styles from "./style/productCard.module.css";
import { Link } from "react-router-dom";
const ProductCard = ({ title, price, image, id }) => {
  // console.log(image);
  return (
    <div >
      <Link to={`/product/${id}`}>
        <div>
          <img src={image} className={styles.image} alt="image product" />
        </div>
        <div className={styles.details}>
          <div>
            <p>{title}</p>
          </div>
          <div>
            <p>{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
