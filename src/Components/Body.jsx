import RestaurantCard from "./RestaurantCardList";
import ResData, { CDN_Link } from "../utils/content";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((info) =>
    info.info.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState(""); //Searchtxt is a local variable. To create a state variable.
  const [restaurants, setRestaurants] = useState(ResData);
  return (
    <>
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const data = filterData(searchText, restaurants);
              setRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="res-container">
          {restaurants.map((info, index) => (
            <RestaurantCard key={info.info.id} {...info.info} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
