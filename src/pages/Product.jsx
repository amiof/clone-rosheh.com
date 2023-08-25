import React, { useState } from "react";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import { products } from "../data";
import { useDispatch } from "react-redux";
import { increment } from "../redux/counterProduct/counterSlice";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
const Product = () => {
  const { id } = useParams();
  const [number, setNumber] = useState(0);
  const selectedProduct = products.find((product) => product.id == id);
  const dispatch = useDispatch();
  // console.log(products, id);
  // const productNumber = useSelector((store) => store.counterProducts.productNumber)
  // console.log(selectedProduct.logo)
  const plusHandler = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const minezHandler = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    } else {
      setNumber(0);
    }
  };
  const payload = {
    id: selectedProduct.id,
    title: selectedProduct.title,
    englishTitle: selectedProduct.englishTitle,
    Image: selectedProduct.image,
    price: selectedProduct.price,
    number: number,
  };

const buyHandler = () => {
    if (number > 0) {
    dispatch(increment({ ...payload }))
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div id={styles.pics}>
          <img src={selectedProduct.image} className={styles.mainPic} />
          <div>
            <img src={selectedProduct.image} />
          </div>
        </div>
        <div id={styles.details}>
          <div id={styles.subDitail}>
            <h3>{selectedProduct.title}</h3>
            <h3>{selectedProduct.englishTitle}</h3>
            <p>
              {" "}
              از{" "}
              <span>
                <p className={styles.price}>{selectedProduct.price} تومان</p>
              </span>
            </p>
            <div id={styles.buttons}>
              <input
                type="button"
                className={styles.pnButton}
                id={styles.plus}
                value="+"
                onClick={plusHandler}
              ></input>
              <input className={styles.Number} value={number}></input>
              <input
                type="button"
                className={styles.pnButton}
                value="-"
                onClick={minezHandler}
              ></input>
              <button
                className={styles.buy}
                onClick={() =>buyHandler() }
              >
                خرید
              </button>
            </div>
            <div className={styles.menu}>
              <div>
                <BiShuffle></BiShuffle>مقایسه
              </div>

              <div>
                <AiOutlineHeart></AiOutlineHeart>
                لایک
              </div>
              <div>
                <AiOutlineCopy></AiOutlineCopy>
                کپی
              </div>
            </div>
            <div className={styles.divider}></div>
            <div>
              <ul style={{ display: "flex", flexFlow: "column" }}>
                <li> ملایم و شیرین</li>
                <li>ادوتویلت</li>
                <li>خانم ها</li>
              </ul>
              <div className={styles.divider}></div>
              <h3 className={styles.h3}>کد کالا : {selectedProduct.id}</h3>
            </div>
          </div>
          <div className={styles.logo}>
            <img src={selectedProduct.logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div style={{ textAlign: "center", padding: "50px 200px" }}>
        <p>{selectedProduct.description}</p>
      </div>
    </>
  );
};

export default Product;
