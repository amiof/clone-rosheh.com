import React from "react";
import TopCarousel from "../components/TopCarousl";
import CardCategory from "../components/CardCategory";
import ProductCarousel from "../components/ProductCarousel";
// import a from "../roshePics/products/"
import styles from "./Home.module.css";
import Article from "../components/Article";
import party from "../roshePics/party/party.jpg";
const articlLinks = [
  {
    id: 1,
    link: "https://rosheh.com/wp-content/uploads/perfume-flowers-beige-background-space-text-1.jpg",
  },
  {
    id: 2,
    link: "https://rosheh.com/wp-content/uploads/close-up-beautiful-young-girl-with-perfect-clean-skin-alstroemeria-petals-looking-camera-white-background-facial-treatment-beauty-spa-1-2.jpg",
  },
  {
    id: 3,
    link: "https://rosheh.com/wp-content/uploads/charming-white-woman-holding-plant-pretty-blackhaired-girl-enjoying-indoor-photoshoot-1-1.jpg",
  },
];
const Home = () => {
  return (
    <div>
      <TopCarousel></TopCarousel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardCategory image={"image5"} title={"پوست"} />
        <CardCategory image={"image2"} title={"مو"} />
        <CardCategory image={"image4"} title={"آرایش"} />
        <CardCategory image={"image3"} title={"عطر"} />
        <CardCategory image={"image1"} title={"برعکس"} />
      </div>
      <div className={styles.productContainer}>
        <ProductCarousel />
      </div>

      <div>
        <div className={styles.article}>
          <p>آخرین مقالات</p>
          <h1>حرفه ای یاد بگیریم</h1>
          <div className={styles.articleMapContainer}>
            {articlLinks.map((articl) => (
              <Article key={articl.id} image={articl.link} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.party}>
        <img src={party} />

        <div className={styles.Off}>
          <div className={styles.Off2}>
            <div>
              <h1>تحفیف های ویژه</h1>
              <button>فروشگاه</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
