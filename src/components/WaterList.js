import React from "react";
import Plant from "./plant";

const WaterList = () => (
  <div className="water-list">
    <h2>Water Me!</h2>
    <ul className="water-list__plants">
      <Plant />
      <Plant />
      <Plant />
    </ul>
  </div>
);

export default WaterList;
