import RestaurantCard from "./RestaurantCardList";
import ResData, { CDN_Link, Swiggy_Link } from "../utils/content";
import { useState, useEffect } from "react";
import {Shimmer} from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState(""); //Searchtxt is a local variable. To create a state variable.
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_Link);
    const json = await data.json();

    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //Conditional rendering........

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
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
              const data = filterData(searchText, listofRestaurant);
              setFilterRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="res-container">
          {filterRestaurant.length === 0 ? (
            <h1>Restaurant not available</h1>
          ) : (
            filterRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
