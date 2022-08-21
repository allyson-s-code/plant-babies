import React from "react";

const Plant = () => (
  <li className="plant">
    <figure>
      <img
        src="https://unsplash.com/photos/JbPeqCpacc8"
        alt="img"
        className="plant__img"
      />
    </figure>
    <h2 className="plant__name">Chinese Money Plant</h2>
    <span className="plant__check">X</span>
  </li>
);

export default Plant;
