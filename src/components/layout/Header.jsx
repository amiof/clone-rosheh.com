import React from "react";
import logo from "../../roshePics/logo/logo-rosheh.png";
import styles from "./cssLayout/header.module.css";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
const Header = () => {
  const productNumber = useSelector(
    (state) => state.counterProducts.productNumber,
  );
  return (
    <>
    <div className={styles.Container}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul>
          <li>
            <a href="">برندها</a>
          </li>
          <li>
            <a href="">پوست</a>
          </li>
          <li>
            <a href="">مو</a>
          </li>
          <li>
            <a href="">آرایش</a>
          </li>
          <li>
            <a href="">عطر</a>
          </li>
          <li>
            <a href="">
              صفحه <p className={styles.rotate}>برعکس</p>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.icons}>
        <AiOutlineUser size="25px" />
        <AiOutlineHeart size="25px" />
        <AiOutlineSearch size="25px" />
        <BiShuffle size="25px" />
        <div style={{ position: "relative" }}>
          <AiOutlineShopping size="25px"></AiOutlineShopping>
          <div className={styles.number}>
            <p>{productNumber}</p>
          </div>
        </div>
      </div>

    </div>
      <div className={styles.divider}></div>
      </>
  );
};

export default Header;
