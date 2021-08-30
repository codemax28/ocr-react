import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../assets/biomarket.jpeg";
import img2 from "../assets/food.jpeg";
import img3 from "../assets/vegetables.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="carousel-item">
      <Carousel
        autoPlay
        interval="5000"
        transitionTime="1000"
        showThumbs={false}
        infiniteLoop={true}
      >
        <div>
          <img src={img1} alt="fruits" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} alt="legumes" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} alt="market" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
