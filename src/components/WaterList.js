import React from "react";
import Plant from "./Plant";

const WaterList = () => (
  <div className="water-list">
    <h1>Water Me!</h1>
    <ul className="water-list__plants">
      <Plant />
      <Plant />
      <Plant />
    </ul>
  </div>
);

export default WaterList;
