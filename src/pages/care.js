import React from "react";
import FeedList from "../components/feedList";
import WaterList from "../components/waterList";

const Care = () => (
  <div className="care-section">
    <div className="care__list-wrapper">
      <WaterList />
    </div>
    <div className="care__list-wrapper">
      <FeedList />
    </div>
  </div>
);

export default Care;
