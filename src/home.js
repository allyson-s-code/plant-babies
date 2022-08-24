import React from "react";
import homeImg from "./assets/home-img.jpg";
//import homeImg2 from "./assets/home-img2.jpg";

const Home = () => (
  <div className="home-section">
    <div className="home__img-wrapper">
      <img src={homeImg} alt="woman holding plants" className="home__img" />
    </div>

    <button className="home__btn">Check In</button>
  </div>
);

export default Home;

//<img src={homeImg} alt="woman holding three plants" />
