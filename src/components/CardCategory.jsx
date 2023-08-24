import React from "react";
// import image from "../roshePics/category/young-woman.jpg";
import styles from "./style/cardCategory.module.css";
const CardCategory = ({ image,title }) => {
  return (
      <div className={styles.container}>
        <div className={`${styles.imageholder} ${styles[image]}`}></div>
        <div className={styles.ContainerLink}>
          <a className={styles.link}>{title}</a>
        </div>
      </div>
  );
};

export default CardCategory;
