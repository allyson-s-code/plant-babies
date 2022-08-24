import React from "react";
import Plant from "./Plant";

const FeedList = () => (
  <div className="feed-list">
    <h1>Feed Me!</h1>
    <ul className="feed-list__plants">
      <Plant />
      <Plant />
    </ul>
  </div>
);

export default FeedList;
