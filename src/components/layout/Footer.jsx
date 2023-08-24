import React from "react";
import styles from "./cssLayout/footer.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div style={{ marginBottom: "40px" }}></div>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src="https://rosheh.com/wp-content/uploads/logo-rosheh-white.png" />
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a href="#">برندها</a>
            </li>
            <li>
              <a href="#">فروشگاه</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
            <li>
              <a href="#">شرایط و مقررات</a>
            </li>
          </ul>
          <div className={styles.icons}>
            <div>
              <AiOutlineTwitter size="25px" color="white" />
            </div>
            <div>
              <AiFillFacebook size="25px" color="white" />
            </div>
            <div>
              <AiFillYoutube size="25px" color="white" />
            </div>
            <div>
              <AiFillInstagram size="25px" color="white" />
            </div>
            <div>
              <AiOutlineWhatsApp size="25px" color="white" />
            </div>
            <div>
              <BsTelegram size="25px" color="white" />
            </div>
          </div>
        </div>
        <div className={styles.logo2}>logo</div>
      </div>
    </>
  );
};

export default Footer;
