import RestaurantCard from "./RestaurantCardList";
import ResData, { CDN_Link } from "../utils/content";
import { useState } from "react";

const [searchTxt] = useState();
const Body = () => (
  <div className="body">
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTxt}
        onChange={(e) => {
          searchTxt = e.target.value;
        }}
      />

      <button className="search-btn">Search</button>
    </div>
    <div className="res-container">
      {ResData.map((info, index) => {
        return <RestaurantCard key={index} {...info.info} />;
      })}
    </div>
  </div>
);

export default Body;
