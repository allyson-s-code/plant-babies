import React from "react";

const FeedList = () => (
  <div className="feed-list">
    <h1>Feed Me!</h1>
    <ul className="feed-list__plants">
      <li className="feed-list__plant">
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
      <li className="feed-list__plant">
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
    </ul>
  </div>
);

export default FeedList;
