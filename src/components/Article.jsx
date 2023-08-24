import React from "react";
import styles from "./style/Article.module.css";
const Article = ({ image }) => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={image} />
      <div className={styles.time}>
        <p>05</p>
        <p>شهریور</p>
      </div>
      </div>
    </div>
  );
};

export default Article;
