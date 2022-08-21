import React from "react";

const WaterList = () => (
  <div className="water-list">
    <h1>Water Me!</h1>
    <ul className="water-list__plants">
      <li className="water-list__plant">
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
      <li className="water-list__plant">
        <figure>
          <img
            src="https://unsplash.com/photos/TpALGJoHFP8"
            alt="img"
            className="plant__img"
          />
        </figure>
        <h2 className="plant__name">Montsera</h2>
        <span className="plant__check">X</span>
      </li>
      <li className="water-list__plant">
        <figure>
          <img
            src="https://unsplash.com/photos/qPEI2x-ETVs"
            alt="img"
            className="plant__img"
          />
        </figure>
        <h2 className="plant__name">Maidenhair Fern</h2>
        <span className="plant__check">X</span>
      </li>
    </ul>
  </div>
);

export default WaterList;
