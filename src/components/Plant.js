import React from "react";

const Plant = () => (
  <li className="plant">
    <div className="plant__img-wrapper">
      <img
        src="https://images.unsplash.com/photo-1589999251554-21789097351f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80"
        alt="img"
        className="plant__img"
      />
    </div>
    <h3 className="plant__name">Money Plant</h3>
    <span className="plant__check">x</span>
  </li>
);

export default Plant;
